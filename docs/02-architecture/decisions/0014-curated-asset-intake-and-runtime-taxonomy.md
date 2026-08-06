# ADR 0014 — Ingestão curada e taxonomia de assets de runtime

- Estado: accepted
- Data: 2026-08-05

## Contexto

O bootstrap reservou buckets genéricos (`models`, `textures`, `audio` e `fonts`). A fase de blockout terminou e a aquisição de assets passa a envolver curadoria, licença, arquivos-fonte potencialmente restritos, conversão, compressão e ownership por domínio. Colocar downloads diretamente em `public` misturaria source e runtime, impediria gates e favoreceria acumulação.

## Decisão

Adotar três zonas separadas:

1. catálogo e decisões versionados em `docs/08-asset-library/`;
2. source original em quarentena fora de `public` e, por padrão, fora do Git;
3. somente derivados aprovados em `public/assets/{world,vegetation,rocks,props,effects,audio,music,materials}`.

Download, aprovação para quarentena e aprovação para runtime são estados diferentes. Nenhuma pasta de runtime é varrida automaticamente; cenas registram dependências em manifestos explícitos.

KayKit Forest Free é a primeira base a avaliar, não uma dependência visual adotada. A biblioteca será composta por itens selecionados, rematerializados e medidos, nunca por importação integral de packs.

## Consequências

- `models` e `textures` deixam de ser destinos válidos; domínio/função determinam ownership.
- fontes pagas ou com redistribuição restrita não são commitadas.
- todo asset carrega proveniência, licença, checksum, medições e aprovadores.
- a árvore pública pode permanecer apenas com READMEs até o primeiro asset concluir o pipeline.
- o primeiro download não exige nova ADR, desde que respeite este contrato; mudar zonas, licenças aceitas ou descoberta por manifesto exige revisão arquitetural.
