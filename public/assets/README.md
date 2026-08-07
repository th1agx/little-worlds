# Assets de runtime

Esta árvore contém somente derivados aprovados, otimizados e registrados. Downloads e arquivos-fonte nunca entram diretamente aqui.

O contrato de entrada está em [`docs/08-asset-library/PIPELINE.md`](../../docs/08-asset-library/PIPELINE.md). Enquanto nenhum asset completar os gates, as categorias contêm apenas documentação.

| Categoria     | Conteúdo                                                            |
| ------------- | ------------------------------------------------------------------- |
| `world/`      | terreno, céu e arquitetura específicos do mundo                     |
| `vegetation/` | árvores, grama, flores e arbustos reutilizáveis                     |
| `rocks/`      | rochas e formações minerais reutilizáveis                           |
| `props/`      | computadores, bancos, lanternas, pontes e objetos                   |
| `effects/`    | texturas/atlases de efeitos aprovados; comportamento fica no código |
| `audio/`      | SFX e ambiências de runtime, sem música                             |
| `music/`      | música de runtime licenciada e normalizada                          |
| `materials/`  | texturas, LUTs e atlases compartilhados aprovados                   |

Nome canônico: `{domain}-{object}-{variant}-{lod}.{ext}`, minúsculo e sem espaços. Nenhuma pasta é descoberta por varredura em runtime; a cena declara arquivos em seu manifesto.

`fonts/`, `models/` e `textures/` eram placeholders do bootstrap. A biblioteca oficial substitui os buckets genéricos por domínios com ownership claro.
