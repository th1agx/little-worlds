import { readFile } from "node:fs/promises";
import { basename, resolve } from "node:path";

const GLB_MAGIC = 0x46546c67;
const JSON_CHUNK = 0x4e4f534a;
const TRIANGLES = 4;

function readJsonChunk(buffer, filePath) {
  if (buffer.readUInt32LE(0) !== GLB_MAGIC) {
    throw new Error(`${filePath} is not a binary glTF (GLB) file.`);
  }

  let offset = 12;
  while (offset < buffer.length) {
    const chunkLength = buffer.readUInt32LE(offset);
    const chunkType = buffer.readUInt32LE(offset + 4);
    const chunkStart = offset + 8;
    if (chunkType === JSON_CHUNK) {
      return JSON.parse(buffer.subarray(chunkStart, chunkStart + chunkLength).toString("utf8"));
    }
    offset = chunkStart + chunkLength;
  }

  throw new Error(`${filePath} does not contain a glTF JSON chunk.`);
}

function getTriangleCount(primitive, accessors) {
  if ((primitive.mode ?? TRIANGLES) !== TRIANGLES) return null;
  const source = primitive.indices ?? primitive.attributes.POSITION;
  if (source === undefined) return 0;
  return Math.floor(accessors[source].count / 3);
}

function getBounds(accessors, meshes) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  let found = false;

  for (const mesh of meshes ?? []) {
    for (const primitive of mesh.primitives) {
      const positionIndex = primitive.attributes.POSITION;
      if (positionIndex === undefined) continue;
      const accessor = accessors[positionIndex];
      if (!accessor.min || !accessor.max) continue;
      found = true;
      for (let index = 0; index < 3; index += 1) {
        min[index] = Math.min(min[index], accessor.min[index]);
        max[index] = Math.max(max[index], accessor.max[index]);
      }
    }
  }

  return found ? { min, max } : null;
}

function inspect(document, filePath, bytes) {
  const accessors = document.accessors ?? [];
  const meshes = document.meshes ?? [];
  const primitives = meshes.flatMap((mesh) => mesh.primitives ?? []);
  const materials = new Set(primitives.flatMap((primitive) => primitive.material ?? []));
  const triangles = primitives.map((primitive) => getTriangleCount(primitive, accessors));
  const positions = primitives.reduce(
    (total, primitive) =>
      total +
      (primitive.attributes.POSITION === undefined
        ? 0
        : accessors[primitive.attributes.POSITION].count),
    0,
  );

  return {
    file: basename(filePath),
    bytes,
    meshes: meshes.length,
    primitives: primitives.length,
    vertices: positions,
    triangles: triangles.includes(null)
      ? null
      : triangles.reduce((total, value) => total + value, 0),
    materials: materials.size,
    textures: (document.textures ?? []).length,
    images: (document.images ?? []).length,
    animations: (document.animations ?? []).length,
    bounds: getBounds(accessors, meshes),
  };
}

const paths = process.argv.slice(2);
if (paths.length === 0) {
  throw new Error("Usage: node tools/assets/audit-glb.mjs <file.glb> [...more.glb]");
}

const reports = await Promise.all(
  paths.map(async (path) => {
    const filePath = resolve(path);
    const buffer = await readFile(filePath);
    return inspect(readJsonChunk(buffer, filePath), filePath, buffer.byteLength);
  }),
);

process.stdout.write(`${JSON.stringify(reports, null, 2)}\n`);
