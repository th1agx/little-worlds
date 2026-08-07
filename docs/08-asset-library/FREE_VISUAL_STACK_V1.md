# Free Visual Stack V1

**Estado:** V3 implementado como experimento isolado; zero compras e zero assets pagos
**Data:** 2026-08-06

## Componentes selecionados

| Componente                                                                                      | Tipo          | Demo        | Licença                    | Aproveitamento                         | Visual | Web |
| ----------------------------------------------------------------------------------------------- | ------------- | ----------- | -------------------------- | -------------------------------------- | -----: | --: |
| [Quaternius Ultimate Stylized Nature](https://quaternius.com/packs/ultimatestylizednature.html) | modelos       | página      | CC0                        | árvores, rochas, vegetação e GLB       |      7 |   9 |
| [Cortiz Stylized Components](https://github.com/cortiz2894/stylized-components)                 | R3F/GLSL      | demo        | MIT, atribuição            | princípios de água, grass, vento e sky |      9 |   9 |
| [Three.js Water](https://threejs.org/docs/pages/Water.html)                                     | addon WebGL   | exemplo     | MIT                        | referência de água simples/reflexiva   |      6 |   9 |
| [Three.js Sky](https://threejs.org/examples/?q=sky)                                             | shader WebGL  | exemplo     | MIT                        | gradiente e luz de céu                 |      7 |  10 |
| [Stylized grass WebGL](https://smythdesign.com/blog/stylized-grass-webgl/)                      | técnica       | artigo/demo | fonte pública; não copiada | animação por vértice e vento espacial  |      8 |   8 |
| [Poly Haven](https://polyhaven.com/license)                                                     | HDRI/material | previews    | CC0                        | referência de luz, não skybox runtime  |      7 |   8 |

## Stack aplicado no Benchmark V3

- **Base ambiental:** os GLBs CC0 já auditados permanecem matéria-prima limitada;
  não são identidade do produto.
- **Vegetação:** placement concentrado nas bordas e instâncias leves; o próximo
  incremento é port do campo de grass MIT após inspeção de licença/atribuição.
- **Água/cachoeira:** shader procedural local, inspirado por princípios públicos,
  sem textura ou dependência nova.
- **Sky/fog/luz:** dome de gradiente, fog cromático e luz quente/fill frio do
  stack existente.

## Resultado honesto

V3 é um salto de composição e atmosfera sobre V1/V2, mas **não atinge ainda a
qualidade pictórica da referência**: as árvores/cliffs CC0 atuais ainda revelam a
linguagem de kit low-poly. A pesquisa identifica a rota gratuita mais promissora
(Quaternius + componentes MIT de água/grass), mas o download Quaternius em
quarentena anterior estava corrompido e não foi integrado. Portanto, o próximo
teste deve ingerir somente os modelos CC0 selecionados, com proveniência e
inspeção, antes de declarar paridade visual.
