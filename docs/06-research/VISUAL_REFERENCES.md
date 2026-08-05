# Referências visuais e sensoriais

**Estado:** biblioteca de pesquisa, não licença de uso  
**Regra:** extrair princípios; não copiar forma distintiva, composição, interface, áudio ou asset.

## Matriz

| Categoria | Referências | O que estudar | O que evitar copiar |
| --- | --- | --- | --- |
| direção de arte | obras citadas no briefing; [NASA Solar System Gallery](https://science.nasa.gov/gallery/our-solar-system-images/); [ESO wallpapers](https://www.eso.org/public/images/archive/wallpapers/list/1/) | escala, espaço negativo, horizonte, progressão de cor | personagens, capas, ruínas, símbolos e paletas idênticas |
| iluminação | [ESO Paranal all-sky](https://archive.eso.org/cms/eso-archive-news/alpaca-all-sky-images-from-paranal-available-in-the-archive.html); fotografia blue/golden hour; instalações de James Turrell como pesquisa museológica | luz como orientação, gradientes amplos, adaptação noturna | reproduzir uma instalação/composição específica |
| atmosfera | desertos de altitude, campos com neblina, noites de observatório; [JPL image gallery](https://www.jpl.nasa.gov/images/) | camadas por fog, silêncio visual, partículas raras | nebulosa saturada genérica em toda cena |
| sons | vento em Atacama/floresta leve, salas de observatório, mecanismos lentos; bibliotecas em `AUDIO.md` | densidade baixa, distância, silêncio e crossfade | tema melódico ou sound design reconhecível das inspirações |
| interface | [Bruno Simon portfolio](https://bruno-simon.com/) e sua [versão HTML](https://bruno-simon.com/html/); terminais de pesquisa; instrumentação científica | oferecer experiência e fallback, feedback contextual, link direto | controles/layout/veículo do site ou CRT clichê ilegível |
| planetas | [NASA Solar System images](https://science.nasa.gov/gallery/our-solar-system-images/), [JPL texture maps](https://maps.jpl.nasa.gov/tmaps/), macrofotografia de minerais | sistemas de cor, erosão, escala e padrões naturais | reproduzir planeta real quando o papel é metafórico |
| observatórios | [ESO wallpapers/archive](https://www.eso.org/public/images/archive/wallpapers/list/1/), ALMA, Paranal, pequenos observatórios domésticos | volumes funcionais, domos, passarelas, luz de trabalho | réplica exata de instalação ou branding institucional |
| computadores | [Computer History Museum Collections](https://computerhistory.org/collections/), teletipos, consoles científicos e [Teenage Engineering computer–1](https://teenage.engineering/products/computer-1) | honestidade material, alças, parafusos, modularidade, escala humana | copiar chassis, trade dress, logotipo ou produto específico |
| materiais | [Poly Haven](https://polyhaven.com/), [ambientCG](https://ambientcg.com/), metal pintado, cerâmica fosca, pedra erodida | roughness, imperfeição controlada e coesão | combinar scan fotorrealista com low-poly sem tratamento |

## Referências de experiência web

- Bruno Simon prova que uma navegação lúdica 3D pode coexistir com uma versão HTML; estudar descoberta e acessibilidade, não replicar o carro ou o mundo.
- Galerias WebGL da [Three.js](https://threejs.org/examples/) e [pmndrs](https://docs.pmnd.rs/) são referência técnica para céu, partículas, loaders e pós; cada exemplo precisa ser reinterpretado dentro dos budgets.
- Museus/arquivos são melhores fontes de forma e função de terminais que interfaces “sci-fi” genéricas.

## Processo de moodboard

1. Selecionar três imagens por categoria com fonte/autor/data.
2. Anotar em cada uma: emoção, composição, cor, luz, material e elemento proibido de copiar.
3. Montar “usar / evitar” lado a lado.
4. Gerar frames próprios por combinação de atributos, sem nomes de artistas/obras no prompt.
5. Revisar similaridade e coerência; somente então converter em style tokens e brief de assets.

## Perguntas para aprovação

- O mundo parece acolhedor antes de parecer impressionante?
- O terminal é humano e funcional, não um adereço cyberpunk?
- Cada planeta é distinguível por silhueta/luz sem depender de texto?
- O frame continua bonito no perfil low?
- Algo é reconhecível demais como derivado de uma obra ou produto?

