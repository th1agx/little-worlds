# Pesquisa de bases visuais — Little Worlds

**Status:** decisão humana pendente  
**Data da pesquisa:** 2026-08-06  
**Escopo:** pesquisa e curadoria; nenhum produto foi comprado, baixado ou integrado.

## Decisão que esta pesquisa prepara

O benchmark deixou claro que uma composição feita só de primitivas e pequenos packs não alcança, sozinha, a densidade, a iluminação e a unidade dos referenciais. A estratégia passa a ser encontrar uma **base visual madura** (cena demonstrativa, environment kit ou preset) que já entregue cerca de 70–90% da intenção artística; o trabalho autoral posterior será selecionar, remover excessos, recompor e adaptar para WebGL.

Isso não é autorização para importar um projeto Unity/Unreal como se fosse web. Uma cena de motor é uma **referência operacional e uma fonte de malhas/texturas**, nunca uma dependência de runtime do Little Worlds.

### Critérios e leitura das notas

As notas são comparativas (0–10), não promessa de resultado. `Web` inclui existência de formatos portáveis, documentação e esforço previsível; `Performance` é potencial para WebGL após curadoria, não o desempenho original no motor.

| Critério      | Pergunta usada                                                                               |
| ------------- | -------------------------------------------------------------------------------------------- |
| Visual        | Já produz cenas bonitas sem reconstrução artística?                                          |
| Referência    | Aproxima a combinação de falésias, água, vegetação em camadas, luz quente e atmosfera suave? |
| Web           | Há rota plausível para GLB/texturas e shaders autorais?                                      |
| Performance   | Há LOD, atlas, instancing ou escopo que permita uma cena web pequena?                        |
| Flexibilidade | A identidade pode ser transformada sem ficar reconhecível como o pack?                       |

**Licença:** `OK` = termos/formatos já conhecidos e compatíveis em princípio; `PROVAVELMENTE OK` = uso em produto final indicado pelo fornecedor, mas ainda exige leitura antes de aquisição; `PRECISA VALIDAR` = não há confirmação de exportação, arquivos-fonte ou escopo de redistribuição para WebGL; `INCOMPATÍVEL` = não deve entrar no projeto.

## Top 10 real

Preços são fotografia de 2026-08-06 e podem variar por promoção, região ou modalidade. “Não publicado” significa que a página consultada não divulga o dado; não é uma estimativa.

| #   | Base / fornecedor                                                                                                                                                                          | Preço e licença                                                                                                                                                                                          | Origem, formatos e demonstração                                                                                                                                                                                 | Fonte, shader e compatibilidade R3F                                                                                                                                     | Notas (V/R/W/P/F)                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [Dreamscape Nature: Meadows](https://assetstore.unity.com/packages/3d/environments/fantasy/dreamscape-nature-meadows-stylized-open-world-environment-186894) — Dreamscape                  | US$45; Standard Unity Asset Store EULA; **PRECISA VALIDAR** a rota de exportação web                                                                                                                     | Unity; 586,7 MB; Built-in/URP; screenshots e vídeo na página; formatos externos não publicados                                                                                                                  | Não anuncia GLB/FBX nem fonte dos shaders. Só é viável se os termos e os arquivos realmente permitirem uma exportação limpa; o visual de Unity/URP não é reutilizável   | **10 / 10 / 3 / 4 / 5**. Mais perto das referências; risco alto de dependência de motor e de pack reconhecível                        |
| 2   | [Stylized Environment](https://www.fab.com/listings/6ae05e13-e0ee-468b-a6b0-07404b73d978?lang=en) — AeonShaper                                                                             | preço/licença dependem da seleção Fab; **PRECISA VALIDAR**                                                                                                                                               | Unreal; 100+ elementos, árvores, rochas, rios, cachoeiras, VFX, nuvens e demos segundo a página; fotos/vídeo na listagem                                                                                        | Apenas Unreal anunciado. Malhas podem talvez ser utilizáveis, mas materiais, Niagara, landscape e shaders não. Não pesquisar compra sem confirmação escrita do conteúdo | **9 / 9 / 2 / 4 / 6**. Excelente linguagem ambiental; maior risco técnico da lista                                                    |
| 3   | [Stylized Poly Nature Environment](https://www.lmhpoly.com/game-assets/stylized-poly-nature-environment) — LMHPOLY                                                                         | US$59,99; licença do canal de compra deve ser confirmada; **PRECISA VALIDAR** para distribuição WebGL com arquivos client-side extraíveis                                                                | Unity e Unreal; Unity Standard/URP; FBX confirmado pelo autor; 15 demos UE5, 16 Unity e perfis de pós; [validação técnica](LMHPOLY_TECHNICAL_VALIDATION.md)                                                     | Malhas/atlas/LODs são rota plausível; água, vento, VFX, pós, terreno e iluminação precisam ser refeitos. A `License.pdf` do canal é gate antes de compra                | **8 / 8 / 6 / 7 / 8**. GO COM RESSALVAS: melhor equilíbrio entre biblioteca e adaptação, condicionado à licença e inspeção de arquivo |
| 4   | [The Illustrated Nature](https://www.matkovskidragos.com/the-illustrated-nature-lp) — Artkovski                                                                                            | US$20 observado na Unity Asset Store; Standard Unity EULA; **PRECISA VALIDAR**                                                                                                                           | Unity Built-in; 148,7 MB; 2 cenas demo; página do autor com [galeria](https://www.matkovskidragos.com/the-illustrated-nature-lp)                                                                                | Inclui vegetação animada, nuvens, água, fog colorido e gestor de cor, todos Unity. Geometria/texturas podem ser úteis se exportáveis; scripts e shaders não             | **8 / 8 / 4 / 6 / 7**. O sistema de paleta é particularmente interessante; tecnologia antiga e sem URP atual                          |
| 5   | [Fantasy Worlds – The Old Forest](https://www.youtube.com/watch?v=woBuPWO1ACA) — TriForge Assets                                                                                           | US$55,30 observado em rastreador; licença Unity a confirmar no checkout; **PRECISA VALIDAR**                                                                                                             | Unity Built-in/URP; 210 prefabs, cena demo, vegetação com vento, água, névoa/pólen; [vídeo oficial](https://www.youtube.com/watch?v=woBuPWO1ACA)                                                                | Não há GLB/FBX público. Conteúdo é rico, porém ruínas medievais e “AAA-quality” aumentam o risco de se afastar da direção                                               | **8 / 7 / 3 / 5 / 5**. Densidade e cena demonstrativa fortes; precisa de subtração severa                                             |
| 6   | [Stylized Nature MegaKit](https://quaternius.com/packs/stylizednaturemegakit.html) — Quaternius                                                                                            | grátis (81 modelos) / source US$14,99 observado no itch.io; CC0; **OK** para os modelos                                                                                                                  | glTF, FBX, OBJ e Blend; 116 modelos na edição completa; source com projetos Unity URP, Unreal e Godot e shaders de vento; [página/demos](https://quaternius.com/packs/stylizednaturemegakit.html)               | É a rota mais segura para GLB. Os shaders do source são referências técnicas, a reimplementar em Three; não é uma cena final pronta por si só                           | **7 / 7 / 9 / 8 / 9**. Excelente “massa de produção” e licença; precisa de composição, água e luz autorais                            |
| 7   | [Stylized Nature Bundle](https://assetstore.unity.com/packages/3d/vegetation/trees/stylized-nature-bundle-135352) — Two Theories                                                           | US$20; Single Entity/Unity EULA; **PRECISA VALIDAR** para web                                                                                                                                            | Unity; 64,5 MB; árvores, rochas, flores, grama, partículas e skybox; screenshots/vídeo na loja                                                                                                                  | LOD, colisões, atlas e shaders de vento são anunciados; formatos externos e fontes não. Partículas e skybox podem ter alto valor de referência                          | **7 / 6 / 3 / 7 / 7**. Econômico e organizado; linguagem “cartoon fantasy” pode ficar genérica                                        |
| 8   | [HexTile: Nature Pack](https://alexakins.artstation.com/projects/OodVx8) — Alex Akins                                                                                                      | preço/licença da Unity/ArtStation precisam ser confirmados; **PRECISA VALIDAR**                                                                                                                          | Unity URP/Standard; dezenas de assets esculpidos, água/fogo/musgo/vento e [walkthrough](https://alexakins.artstation.com/projects/OodVx8)                                                                       | Shader Graph, snapping e topologia hexagonal não transferem diretamente. Reutilização de malhas deve ser confirmada                                                     | **7 / 6 / 3 / 5 / 5**. Boa materialidade, mas grade hexagonal e foco top-down são restrições reais                                    |
| 9   | [PIDI – COSY Grass, Weeds and Wild Flowers Vol. 1](https://assetstore.unity.com/packages/3d/vegetation/pidi-cosy-stylized-grass-weeds-and-wild-flowers-vol-1-294528) — Irreverent Software | US$35; Unity EULA; **PRECISA VALIDAR**                                                                                                                                                                   | Unity Built-in/URP/HDRP; 91 modelos, 364 prefabs, 6 texturas PNG 2048; 8–884 tri/modelo                                                                                                                         | Shader de vegetação e vertex colors são úteis como especificação, mas devem ser refeitos. É camada de vegetação, não uma base completa                                  | **7 / 7 / 4 / 8 / 8**. A melhor camada complementar de densidade; não resolve cenário, água ou céu                                    |
| 10  | [NatureForge: Low Poly Meadow & Farm Kit](https://emaceart.itch.io/poly-meadows/purchase) — EmaceArt                                                                                       | US$12 mínimo observado; licença comercial declarada pelo autor, mas **PRECISA VALIDAR** o texto aplicável; alternativa [Fab gratuita](https://www.fab.com/listings/799b5927-d800-49b5-a866-45cdb5c002d7) | FBX, glTF e Blend anunciados; 113 assets; LODs/colisões e cena demo Unity; [devlog de demo](https://emaceart.itch.io/free-low-poly-meadows/devlog/1449692/devlog-1-unity-demo-improvements-urp-post-processing) | Uma das poucas rotas com glTF explícito. Pós, Unity terrain e prefabs não transferem; estilo tende ao pastoral/fazenda                                                  | **6 / 6 / 8 / 8 / 8**. Ótimo protótipo técnico e barato; visual não chega sozinho ao benchmark                                        |

### Exclusões deliberadas

- Cenas anime/Blender-only e paisagens fotorealistas não entram: conflitam com a direção e/ou trazem material/shader difícil de portar.
- Synty, voxel e low-poly genérico não entram como base: são reconhecíveis demais, simplificam em excesso ou deslocam a atmosfera pretendida.
- Packs de ruínas/fantasia medieval não são base; no máximo poderiam fornecer uma peça isolada após aprovação futura.

## As três bases visualmente mais fortes

### 1. Dreamscape Nature: Meadows — melhor alvo de direção de arte

É o mais próximo do referente de floresta clara com cataratas, vegetação exuberante, água turquesa e paleta quente/fria. A recomendação não é comprar agora, mas **validar primeiro**: arquivos de origem disponíveis, possibilidade contratual de uso em um site e qualidade de uma exportação de teste para GLB. Sem isso, a pontuação visual não compensa o risco.

### 2. AeonShaper Stylized Environment — melhor cena pronta, pior portabilidade

Possui a linguagem de “mundo pronto” mais forte: árvores, relva, pedras, água, nuvens e VFX trabalham como conjunto. É uma excelente referência e possível candidato se a licença e arquivos forem favoráveis; hoje está abaixo de Dreamscape porque a listagem anuncia somente Unreal.

### 3. LMHPOLY Stylized Poly Nature Environment — melhor candidato pragmático

Não reproduz exatamente o acabamento pictórico dos dois primeiros, mas é o pacote com dados mais favoráveis a uma adaptação: FBX explicitamente disponível, Unity/Unreal, várias cenas demonstrativas, água/skybox/VFX e documentação. É o candidato que melhor permite chegar a uma primeira cena web bonita sem comprometer o pipeline.

## Stack visual proposto (conceitual, sem implementar)

| Camada                     | Base recomendada                                            | Responsabilidade                                            | Limite                                                            |
| -------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------- |
| Mundo / falésias / árvores | Dreamscape **ou** LMHPOLY, conforme decisão                 | Silhueta, topografia, escala e biblioteca principal         | Uma só linguagem de rocha/árvore por cena                         |
| Vegetação de proximidade   | PIDI COSY **ou** Quaternius                                 | Maciços, bordas de trilha, flores e leitura de profundidade | Instancing, atlas e orçamento de densidade desde o primeiro teste |
| Água                       | Material autoral de Three + malha simples da base escolhida | Cor, fluxo sugestivo, espuma localizada                     | Não portar shader Unity/Unreal; sem simulação cara                |
| Céu                        | Skybox/gradiente próprio inspirado no preset                | Horizonte, paleta e nuvens discretas                        | Sem HDRI pesado como dependência contínua                         |
| Iluminação                 | Direcional quente, fill frio e sombras recortadas           | Hierarquia de luz, não “realismo”                           | Sem pós-processamento como muleta                                 |
| Atmosfera                  | Fog colorido e partículas muito discretas                   | Profundidade e silêncio                                     | Névoa volumétrica apenas se o orçamento web comprovar viabilidade |

Antes de misturar qualquer base com uma camada complementar é obrigatório fazer uma **cena de compatibilidade**: duas árvores, três rochas, um patch de grama, água e a iluminação alvo. Se forem reconhecíveis como estilos de packs diferentes, não se mistura.

## Como reproduzir a referência a partir do candidato nº 1

Isto é uma decomposição de linguagem visual, não uma instrução de copiar uma imagem ou o conteúdo de Dreamscape.

1. **Composição:** vale estreito com um caminho de primeiro plano; queda-d’água e bloco de rocha formam o ponto de interesse; abertura luminosa ao fundo. A cena deve ter uma só leitura principal, não uma coleção de objetos.
2. **Camadas:** rochas grandes para a silhueta distante; árvores médias nos planos intermediários; arbustos/grama/pequenas flores apenas para quebrar as bordas próximas. A densidade nasce da sobreposição, não da contagem indiscriminada.
3. **Paleta:** céu azul-ciano moderado; sol creme/quente; sombras azul-esverdeadas; água turquesa reservada para guiar o olhar. Flores são acentos raros, nunca uma cobertura uniforme.
4. **Materiais:** rocha matte com variação tonal ampla e pouco detalhe; vegetação em blocos de cor com textura sutil; água com movimento mínimo e espuma só na queda/contato. Evitar PBR brilhante e normal maps agressivos.
5. **Luz:** uma direcional quente lateral cria copas legíveis; fill frio mantém leitura nas sombras; contraluz suave separa folhagem do céu. Bloom e exposição não devem corrigir composição fraca.
6. **Atmosfera:** neblina baixa e colorida reduz contraste à distância; partículas devem ser quase imperceptíveis. Se vistas congeladas já forem bonitas, a animação é complemento, não solução.
7. **Conversão web:** extrair só malhas necessárias; consolidar materiais, gerar GLB e texturas comprimidas; reconstruir água/vento/fog no render pipeline existente. Medir draw calls, triângulos e memória em cada etapa.

## Diligência obrigatória antes de comprar ou baixar

1. Ler o EULA atual do canal específico e registrar versão/data.
2. Confirmar por documentação pública (sem contato com autor) se existem FBX/OBJ/glTF, texturas e licença para produto web compilado.
3. Verificar se há redistribuição proibida de arquivos acessíveis ao navegador; isso pode inviabilizar um pack mesmo quando o uso em jogo é permitido.
4. Usar uma cena de teste mínima e descartável para provar exportação, escala, UVs, materiais e orçamento de rede.
5. Só depois abrir uma entrada em `DOWNLOAD_QUEUE.md`; nenhum arquivo deve entrar diretamente em `public/assets`.

## Recomendação de decisão

**Escolha recomendada para investigar primeiro: LMHPOLY, se o objetivo é executar uma prova web de baixo risco técnico; Dreamscape, se o objetivo é validar antes a máxima proximidade visual.** Não recomendo adquirir AeonShaper antes de confirmar seus formatos e termos.

> **QUAL BASE VISUAL VAMOS TESTAR?**
>
> 1. **Dreamscape Nature: Meadows** — máxima proximidade visual, validação de portabilidade primeiro.
> 2. **LMHPOLY Stylized Poly Nature Environment** — melhor equilíbrio entre beleza pronta e adaptação web.
> 3. **AeonShaper Stylized Environment** — referência visual forte, mas risco de Unreal/portabilidade alto.

## Fontes técnicas para a futura adaptação

Quando uma base for autorizada, a renderização web seguirá o pipeline existente e será medida em vez de presumida: [Three.js WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html), [gestão de cor do Three.js](https://threejs.org/manual/en/color-management.html), [fog no Three.js](https://threejs.org/manual/en/fog.html) e [ShaderMaterial](https://threejs.org/docs/pages/ShaderMaterial.html). Essas fontes não validam licenças de terceiros; apenas orientam a reconstrução técnica dos efeitos.
