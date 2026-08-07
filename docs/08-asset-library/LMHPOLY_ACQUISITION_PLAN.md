# Plano de aquisição — LMHPOLY Stylized Poly Nature Environment

**Estado:** superseded; compra e download proibidos nesta fase
**Data:** 2026-08-06

> Este plano não deve ser executado. A rota vigente é
> [`FREE_VISUAL_STACK_V1.md`](FREE_VISUAL_STACK_V1.md).

## Decisão de aquisição histórica

| Campo              | Decisão                                                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Produto            | **Stylized Poly Nature Environment** — LMHPOLY                                                                                                                                                                 |
| Canal              | [Fab, listagem oficial](https://www.fab.com/listings/de000302-8234-4d8b-a45f-bbce3139bd42)                                                                                                                     |
| Preço              | **NÃO CONFIRMADO publicamente.** O Fab exige seleção de licença/região para expor o valor; a página LMHPOLY mostra US$ 59,99 como referência.                                                                  |
| Licença            | **OK: Fab Standard License**, com edição que entregue source; não escolher `Reference-Only`.                                                                                                                   |
| Por que este canal | O termo permite modificar assets para incorporá-los em projetos, distribuí-los no projeto e usar ferramentas compatíveis; proíbe redistribuição isolada. É a única loja oficial com checkout ativo confirmada. |

### Condição no checkout

Antes do pagamento manual, registrar no ledger privado: data, preço exibido,
moeda/impostos, tier selecionado, texto/link da licença e conteúdo/formats
mostrados. **Abortar a compra** se a página apresentar licença diferente de Fab
Standard, edição `Reference-Only`, ou termo adicional que proíba distribuição
incorporada em aplicação Web/WebGL.

## Arquivos esperados e limites

O anúncio confirma Unity e Unreal; a FAQ oficial do autor afirma que seus assets
Unity são FBX e instrui extrair `Meshes`/texturas do pacote. A listagem Fab não
publica download GLB/FBX separado. Logo, a presença efetiva de FBX, texturas e
LODs no download Fab é **esperada, mas só confirmada na quarentena**.

Esperar somente:

- pacote Unity/UE, FBX de malhas, texturas, materiais, LODs e documentação;
- 2K processadas no engine e possíveis fontes 4K, que não entram no browser;
- demo/prefab/shader/VFX apenas como referência, nunca como dependência runtime.

Não aceitar no runtime: scenes demo, shader Unity/UE, post-processing, terrain
engine, skybox 4K–8K, VFX, `Library/`, `DerivedDataCache/`, executáveis ou assets
não selecionados.

## Quarentena e proveniência

Usar a área já ignorada pelo Git:

```text
quarantine/
  lmhpoly-stylized-poly-nature-environment/
    original/             # arquivo entregue, read-only
    extracted/            # conteúdo extraído, sem editar o original
    inventory/            # hashes, licença, lista de arquivos e medições
    candidates/           # somente famílias aprovadas para conversão
    conversion-output/    # descartável; ainda não é runtime
```

Nenhum arquivo de `quarantine/` é copiado para `public/assets/` antes de passar
nos gates de qualidade, licença, performance e validação glTF. Registrar origem,
URL, licença, data, hash SHA-256, transformações, bytes, triângulos, materiais,
texturas e LODs de cada candidato no manifesto de cena.

## Primeira inspeção — seleção mínima

Não importar centenas de prefabs. Inventariar e escolher apenas:

| Família       | Alvo inicial | Pergunta                                                       |
| ------------- | -----------: | -------------------------------------------------------------- |
| Árvores       |          2–3 | copas, troncos, escala e LODs são claramente superiores ao V2? |
| Foliage/grass |          2–4 | atlas, silhueta e camada baixa sobrevivem a material neutro?   |
| Cliffs        |          1–2 | há massa hero adequada a landmark sem material de engine?      |
| Rocks         |          2–3 | as formas apoiam caminho/primeiro plano sem parecer ruído?     |

Inspeção por mesh: FBX abre sem perda, escala/eixos/pivô, UV0, normais/tangentes,
vertex colors/dados de vento, materiais/texturas referidas, LOD separado,
triângulos por LOD, collider e licença/proveniência. Dados ausentes ficam como
**NÃO CONFIRMADO**, não são inferidos.

## Pipeline preparado, sem dependência nova

```text
SOURCE em quarentena
  → inventário e hashes
  → FBX selecionado
  → normalização de escala/eixos/pivô
  → GLB de teste
  → medir antes de comprimir
  → texturas KTX2 e/ou meshopt/Draco se os dados justificarem
  → materiais Little Worlds e Asset Quality Test
  → gates de aprovação
  → public/assets/ apenas para derivados aprovados
```

| Etapa                 | Ferramenta candidata                                | Decisão/medição necessária                                                              |
| --------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Extrair e inventariar | ferramentas do sistema + scripts existentes/futuros | checksum e lista antes de abrir no editor                                               |
| Normalizar/converter  | Blender em batch, apenas conversão                  | só se FBX não converter preservando UV/normais/LODs                                     |
| Validar GLB           | glTF Validator e Asset Auditor                      | obrigatório antes de runtime                                                            |
| Otimizar geometria    | gltf-transform com meshopt ou Draco                 | medir bytes, decode, draw calls e qualidade; escolher uma técnica, não ambas por hábito |
| Comprimir textura     | KTX2/BasisU                                         | aplicar a texturas selecionadas após definir dimensão, mipmaps e uso sRGB/linear        |
| Runtime               | Three.js/R3F já existente                           | instancing/LOD/material compartilhado somente após Asset Quality Test                   |

Blender, gltf-transform, KTX2/BasisU, meshopt e Draco são candidatos de pipeline;
**nenhuma dependência será instalada ou executada antes da entrega manual do
pack e da inspeção.**

## Asset Quality Test — gate zero antes do Benchmark V3

Cena futura mínima, neutra e fora de Hub/V1/V2:

```text
fundo neutro + luz direcional simples + fill
1 árvore + 1 patch de grass/foliage + 1 cliff + 1 rock
```

Sem vento, água, fog, sky, post-processing, material de engine ou composição de
demo. O objetivo é responder: **a matéria-prima crua é materialmente superior ao
V2?** Capturar desktop/mobile, vistas próxima/média/distante e métricas de bytes,
triângulos, draw calls, materiais e textura GPU.

### Aprovação para seguir ao Benchmark V3

- Silhueta, UV e material-base funcionam sem iluminação/pós de Unity/UE.
- As quatro famílias têm linguagem coerente sob paleta neutra.
- A conversão preserva geometria e texturas sem artefato que exija remodelagem.
- O conjunto pequeno cabe no budget de diagnóstico de
  `LMHPOLY_TECHNICAL_VALIDATION.md`.
- A licença e o manifesto estão completos; nenhum asset tem termo adicional
  incompatível.

Falhar qualquer gate interrompe a promoção para runtime. Aprovação permite
planejar o Benchmark V3; não autoriza aumentar a seleção automaticamente.
