# Pesquisa e pipeline de assets

**Estado:** pesquisa histórica; regras definitivas em [`../07-sprint-0.5/ASSET_BIBLE.md`](../07-sprint-0.5/ASSET_BIBLE.md) e curadoria operacional vigente em [`../08-asset-library/ASSET_LIBRARY.md`](../08-asset-library/ASSET_LIBRARY.md)

> Não usar as shortlists abaixo como fila de download. A decisão atual, inclusive rejeições e preços pesquisados, está em `08-asset-library/`.

“Gratuito” não significa automaticamente redistribuível. Antes de adquirir, reconfirmar página, licença, autor, formato e permissão comercial; guardar prova em `licenses/assets/`.

## Shortlist por categoria

| Categoria              | Gratuitos a avaliar                                                                                             | Pagos a avaliar                                                                             | Critério específico                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| árvores                | Kenney Nature Kit (CC0), Quaternius Ultimate Nature, Poly Pizza low-poly, Poly Haven foliage                    | Synty POLYGON Nature Biomes, NatureManufacture/Fab, CGTrader stylized tree packs            | instancing, LOD, atlas, poucas transparências                   |
| rochas                 | Kenney Nature Kit, Quaternius nature packs, Poly Haven scanned rocks                                            | Synty Nature Biomes, Fab stylized rock collections, CGTrader                                | silhueta, collider separado, variação por escala/rotação        |
| computadores/terminais | Kenney Space/Furniture kits, Quaternius Sci-Fi Essentials, Sketchfab CC BY filtrado                             | Fab/Sketchfab Standard “retro terminal”, CGTrader, KitBash3D sci-fi props                   | sem marcas/IP, tela/material separável, low-poly                |
| observatórios          | NASA 3D Resources e Sketchfab CC BY para referência/peças permitidas                                            | Fab/CGTrader “low poly observatory/telescope”, TurboSquid                                   | evitar réplica arquitetônica protegida; interior não necessário |
| bancos                 | Kenney Furniture/Nature kits, Quaternius props, Poly Pizza                                                      | Fab/CGTrader stylized outdoor props, Synty packs                                            | escala humana, material compatível, collider simples            |
| planetas               | Kenney Space Kit (CC0), NASA/JPL texture maps como referência conforme media policy, geração procedural própria | Fab space/planet packs, Space Graphics Toolkit assets quando formato/licença servirem à web | licença de mapas, seam/polos, resolução e shader simples        |
| partículas             | geometria/Points próprios, Kenney particle sprites CC0, OpenGameArt CC0                                         | Fab VFX texture packs, ProductionCrate conforme licença                                     | atlas pequeno, overdraw e blend mode                            |
| céu                    | Poly Haven night/sunset HDRIs, ESO/NASA apenas após checar uso por imagem, céu procedural                       | HDRI Skies, Poly Haven membership opcional, Fab sky packs                                   | 1–2K runtime, exposição, horizonte e direitos                   |
| materiais              | Poly Haven, ambientCG (CC0), ShareTextures/CGBookcase após licença                                              | Poliigon, Adobe Substance 3D Assets, Textures.com premium                                   | maps realmente usados, KTX2, texel density                      |
| HDRIs                  | Poly Haven CC0                                                                                                  | HDRI Skies, Poliigon, NoEmotion HDRs                                                        | faixa dinâmica real, arquivo original arquivado fora do bundle  |
| sons                   | Sonniss GDC, Freesound CC0/CC BY, Kenney Audio, Pixabay com cautela                                             | BOOM Library, A Sound Effect, Sonniss Store, Artlist SFX                                    | loop limpo, licença para interativo, loudness e tamanho         |
| músicas                | Pixabay/FMA/Incompetech somente por item/licença; composição original é preferida                               | Artlist, Epidemic Sound, Soundstripe, compositor independente                               | website/app coberto, validade pós-assinatura, Content ID        |

## Fontes prioritárias

- [Poly Haven](https://polyhaven.com/) — modelos, PBR e HDRIs; todos os assets são [CC0](https://polyhaven.com/license). Excelente juridicamente, mas o realismo pode conflitar com a direção estilizada e arquivos precisam ser reduzidos.
- [Kenney Space Kit](https://kenney.nl/assets/space-kit) e catálogo Kenney — CC0, coerente e leve; pode parecer genérico se usado sem direção/material próprio.
- [Quaternius](https://quaternius.com/) — packs low-poly gratuitos; verificar licença dentro de cada pack e formato antes da ingestão.
- [Poly Pizza](https://poly.pizza/) — modelos low-poly com licenças por item; registrar autor/atribuição.
- [Sketchfab](https://sketchfab.com/) — enorme variedade e glTF. Modelos Creative Commons normalmente exigem atribuição; a [documentação](https://sketchfab.com/developers/download-api/guidelines) reforça que licença/autor devem acompanhar o uso. Excluir NC, ND, SA e Editorial sem revisão jurídica.
- [Fab](https://www.fab.com/) — gratuito e pago, filtros de formato/preço/licença; a [licença Standard](https://www.fab.com/eula?lang=en) não exige crédito, mas proíbe redistribuição standalone. Confirmar que o download inclui formato universal, não só Unity/Unreal.
- [Synty Studios](https://www.syntystudios.com/) — packs pagos coerentes e amplos. Risco: aparência reconhecível/genérica e compra de excesso; adquirir somente depois do style test.
- [ambientCG](https://ambientcg.com/) — materiais/HDRIs CC0; confirmar na página de licença no momento do uso.
- [NASA 3D Resources](https://nasa3d.arc.nasa.gov/) e [JPL texture maps](https://maps.jpl.nasa.gov/tmaps/) — referências científicas/recursos; checar a NASA Media Usage Guideline e créditos específicos, pois logos e terceiros têm regras diferentes.

## Gate de seleção

Cada candidato recebe score de 1–5 em: aderência visual, licença, formato glTF, tamanho, topologia, materiais, LOD, facilidade de recolor, colisão e singularidade. Rejeitar qualquer asset sem licença comprovável, com marca/personagem, textura embutida de origem incerta ou custo de otimização maior que seu valor.

## Pipeline futuro (sem modelagem manual como padrão)

1. Registrar candidato e licença antes do download.
2. Quarentena em storage de fontes; nunca enviar fonte bruto direto a `public`.
3. Inspecionar escala, eixos, UVs, materiais, animações, polígonos e textura.
4. Normalizar por CLI/ferramenta automatizada; contratar ajuste pontual quando necessário.
5. Converter para GLB, remover dados não usados, deduplicar, gerar LOD/collider quando aplicável.
6. Comprimir geometria e texturas; comparar artefatos visualmente.
7. Validar com glTF Validator/Auditor e medir em dispositivo.
8. Publicar derivado com manifest, hash, autor, licença e atribuição.

O [glTF Asset Auditor](https://www.khronos.org/gltf/gltf-asset-auditor/) verifica características como materiais, objetos, resolução, UV e tamanho; as [guidelines 2.0 da Khronos](https://www.khronos.org/blog/introducing-asset-creation-guidelines-2.0-siggraph-2025) recomendam instancing, Meshopt/Draco e inspeção padronizada.

## Manifesto mínimo por asset

```yaml
id: nature-tree-oak-a-lod0
source_url: ""
author: ""
acquired_at: YYYY-MM-DD
license: ""
license_proof: "licenses/assets/..."
attribution: ""
source_format: ""
runtime_path: ""
bytes: 0
triangles: 0
materials: 0
textures: []
lod_group: ""
notes: ""
```
