# LMHPOLY — validação técnica para WebGL / R3F

**Estado:** validação concluída; compra e download pendentes de autorização humana
**Data:** 2026-08-06
**Escopo:** pesquisa técnica e direção de arte. Nenhum arquivo foi comprado, baixado, convertido ou integrado.

## Veredito

**GO COM RESSALVAS.**

O **Stylized Poly Nature Environment** da LMHPOLY é uma fonte tecnicamente viável
de malhas e texturas para uma fatia visual WebGL. A evidência oficial confirma
malhas FBX, texturas-fonte 4K, UVs/atlases compartilhados implícitos pelo uso de
atlases de cor/emissão, LODs artesanais e uma biblioteca grande o bastante para
seleção rigorosa. Isso elimina o risco central de um pack fechado em Unity ou
Unreal.

Não é uma cena Web pronta: os materiais, shader de vento, neve/moss, água,
skybox, VFX, terreno Unity/Unreal, iluminação e perfis de pós-processamento não
devem ser transportados. O valor do pacote continua alto depois de removê-los —
as copas, massas de pedra, cliffs e famílias de vegetação ainda fornecem a
silhueta e a estratificação que faltaram no V2 —, mas o resultado das demos não
é reproduzível por simples importação de FBX.

## Evidência e limites da confirmação

| Fato                              | Estado                      | Evidência / implicação                                                                                                                                                                                                                                                                                   |
| --------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Preço observado                   | **Confirmado**              | US$ 59,99 na página do autor em 2026-08-06. Preço do Fab não ficou exposto publicamente sem escolher licença/região.                                                                                                                                                                                     |
| Formato de malha                  | **Confirmado**              | A FAQ do autor declara que todos os assets são exportados como FBX e instrui extrair a pasta `Meshes` do `.unitypackage`; a mesma FAQ descreve a passagem por Blender/outro motor.                                                                                                                       |
| Texturas editáveis                | **Confirmado**              | 22 texturas no runtime, com fontes 4K incluídas para edição; o motor as comprime para 2048².                                                                                                                                                                                                             |
| UVs e atlas                       | **Parcialmente confirmado** | Três materiais de foliage compartilham atlas de cor e emissão; materiais estáticos compartilham cor/emissão e mapa metálico. Isso prova um atlas utilizável, mas não documenta cada layout/UV individual. Inspecionar após compra.                                                                       |
| LODs e colisores                  | **Confirmado**              | LODs artesanais: normalmente 3 níveis, com alguns meshes em 2 ou 4; colisores otimizados também são anunciados. A configuração de LOD terá de ser refeita fora dos motores.                                                                                                                              |
| Conteúdo/contagens                | **Confirmado**              | A página lista 400+ assets, 51 bônus, 15 demos UE5 e 16 demos Unity.                                                                                                                                                                                                                                     |
| Licença para produto web          | **PRECISA VALIDAR**         | O autor permite vender um jogo com os assets como parte dele, mas remete à `License.pdf` do canal de compra. Como GLB/texturas em um site podem ser extraídos pelo visitante, é obrigatório ler a licença do canal escolhido e confirmar que esse tipo de distribuição de produto compilado é permitido. |
| Licença de FBX/textura exportados | **PRECISA VALIDAR**         | A permissão técnica de usar FBX em outro motor não equivale, por si só, à autorização de redistribuir arquivos acessíveis no navegador.                                                                                                                                                                  |
| Demo/documentação externa         | **Parcialmente confirmada** | A página principal e o Fab apontam vídeos/tutoriais. O link público da documentação Notion retornou indisponível na pesquisa; detalhes adicionais não foram tratados como fato.                                                                                                                          |

## Validação de licença Web — 2026-08-06

### Decisão

**LICENÇA WEB: OK, pelo Fab Standard License, desde que a compra seja da edição
com arquivos-fonte (não `Reference-Only`) e que Little Worlds permaneça uma
experiência interativa, não uma biblioteca/editor de assets.**

O [Fab Standard License](https://www.fab.com/eula?lang=en) permite usar assets
com ferramentas compatíveis, modificá-los para incorporá-los em projetos e
distribuir comercialmente projetos que os incorporem. A proibição relevante é
revender ou redistribuir gratuitamente o asset **em base standalone**. Isso cobre
FBX → GLB/KTX2, LODs, atlases, redução de texturas e materiais próprios quando
usados apenas para renderizar Little Worlds.

Servir `GET /assets/world/tree.glb` é uma cópia transmitida do asset derivado,
mas, aqui, ela é embutida no projeto WebGL, não um produto autônomo para
descoberta, download ou reutilização. O fato de um usuário avançado inspecionar a
rede não transforma a experiência em repositório de assets. O Fab não exige DRM
nem publica restrição específica a WebGL público.

### Canais oficiais encontrados

| Canal                                        | Situação observada                                                                                |     Preço público em 2026-08-06 | Licença aplicável                                                                 | Conteúdo/formato publicado                                                           | Classificação                                      |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------: | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------- |
| Página LMHPOLY                               | Página oficial e documentação, **não checkout**                                                   |       US$ 59,99 como referência | Nenhuma licença própria pública vinculada à compra; FAQ remete à licença do canal | 400+ assets, Unity/UE, FBX declarado na FAQ, fontes 4K, LODs, demos                  | **AMBÍGUO como canal**: não há compra direta atual |
| Unity Asset Store                            | A página LMHPOLY exibe o botão Unity como indisponível; não foi localizada listagem ativa oficial |              **NÃO CONFIRMADO** | Unity Asset Store EULA se a listagem voltar e não for `Restricted`/non-standard   | FAQ: pacote Unity contém FBX na pasta `Meshes`; disponibilidade atual não confirmada | **PROVAVELMENTE OK**, mas não é canal atual        |
| Fab — `de000302-8234-4d8b-a45f-bbce3139bd42` | Checkout oficial ativo; preço requer selecionar licença/região                                    | **NÃO CONFIRMADO publicamente** | Fab Standard License; escolher tier que entregue source, não `Reference-Only`     | Listing declara Unity e Unreal; produto anuncia biblioteca, demos, materiais e LODs  | **OK — recomendado**                               |

Não foi localizado outro checkout oficial. Unity seria também uma rota aceitável
sob a EULA padrão: ela permite incorporar, transmitir e distribuir assets
embutidos em produto digital com conteúdo original substancial e modificar assets
não-SDK. A FAQ esclarece que o produto não pode ser desenhado para permitir
extração ou download separado. Little Worlds não expõe catálogo, exportação ou
ferramentas de criação ao visitante.

### O que os termos permitem e não permitem

| Operação                                                        | Fab Standard                                                 | Unity Standard EULA, se disponível                                               | Decisão para Little Worlds                  |
| --------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------- |
| Comprar e usar em produto público/comercial                     | permitido em projeto incorporado                             | permitido em `Licensed Product` incorporado                                      | sim                                         |
| FBX → GLB; PNG/JPG → KTX2                                       | permitido como ajuste para incorporar                        | permitido para asset não-SDK                                                     | sim                                         |
| Redução, LOD, UV/atlas, mesh merge e recolorir/material próprio | permitido como modificação/ajuste                            | permitido para asset não-SDK                                                     | sim                                         |
| Transmitir GLB/KTX2 via HTTP para renderização                  | permitido no projeto incorporado; sem regra WebGL específica | permitido como transmissão/distribuição incorporada                              | sim                                         |
| URL técnica inspecionável pelo browser                          | não tratado expressamente; sem DRM obrigatório               | não tratado expressamente; produto não pode ser concebido para download separado | aceitável sem UX/API de download/exportação |
| Vender, entregar ou publicar GLB/KTX2 como pack/biblioteca      | proibido como standalone                                     | fora da permissão de produto incorporado                                         | não                                         |

Esta é uma leitura técnica dos termos públicos, não aconselhamento jurídico. No
checkout, conferir que a licença seja **Fab Standard** e que não exista termo
adicional visível na listagem.

### Fontes primárias

- [Página oficial LMHPOLY — conteúdo, materiais, texturas, LOD, triângulos, preço e FAQ resumida](https://www.lmhpoly.com/game-assets/stylized-poly-nature-environment)
- [FAQ oficial LMHPOLY — FBX, Blender/outro motor e condição de venda](https://www.lmhpoly.com/faq)
- [Listagem oficial no Fab — demos, limites de efeitos de demo e formatos de distribuição UE/Unity](https://www.fab.com/listings/de000302-8234-4d8b-a45f-bbce3139bd42)
- [Fab Standard License — modificação, incorporação e redistribuição standalone](https://www.fab.com/eula?lang=en)
- [Unity Asset Store EULA — Licensed Product, transmissão e modificação](https://unity.com/legal/as-terms)
- [Unity Asset Store EULA FAQ — incorporação versus produto de extração/download](https://assetstore.unity.com/browse/eula-faq)
- [Demos e tutorial oficial citados pelo fornecedor](https://www.youtube.com/watch?v=zJJGXYATpCA)
- [AeonShaper no Fab — benchmark técnico/artístico, não candidato de compra nesta sprint](https://www.fab.com/listings/6ae05e13-e0ee-468b-a6b0-07404b73d978?lang=en)
- [Quaternius Stylized Nature MegaKit — formatos e CC0 do complemento potencial](https://quaternius.com/packs/stylizednaturemegakit.html)

## Conteúdo real: portátil versus dependente de engine

### Inventário anunciado

| Família                                         | Quantidade anunciada |                Triângulos declarados | Uso candidato no V3                             |
| ----------------------------------------------- | -------------------: | -----------------------------------: | ----------------------------------------------- |
| Árvores, galhos, tocos, troncos, lenha e folhas |                  133 | árvores: 24–7.274; média 1.500–2.500 | 2–4 árvores hero e fundo seletivo               |
| Bushes                                          |                   21 |                            142–1.235 | bordas de caminho e meio-plano                  |
| Plantas                                         |                   56 |                               35–259 | estratos de proximidade                         |
| Cogumelos                                       |                   20 |                              127–216 | opcional; não necessário no primeiro teste      |
| Rochas                                          |                   81 |                             42–1.815 | primeiro plano e transição                      |
| Montanhas                                       |                    7 |                         3.096–19.339 | somente fundo, após medir                       |
| Cliffs                                          |                    9 |                            452–1.999 | landmark da cachoeira                           |
| Terrenos                                        |                    3 |                        não publicado | referência/possível malha, não terreno de motor |
| Grass                                           |                    1 |                        não publicado | avaliar apenas como forma-base                  |
| Nuvens                                          |                    2 |                        não publicado | referência de forma; provável reconstrução      |
| Water plane                                     |                    1 |                        não publicado | somente malha plana, se útil                    |
| Skyboxes                                        |                    8 |                                4K–8K | referência; não usar em runtime inicial         |
| VFX                                             |                   12 |                                  n/a | não usar; somente linguagem de referência       |
| Bonus: camp e ruínas                            |                   51 |                             20–4.008 | fora do V3; alguns conflitam com a direção      |

O pack declara **44 materiais** e **22 texturas**: atlas de cor, emissão e
metallic compartilhados; alternativas de cor summer/autumn; cinco cores sólidas
de terreno; duas texturas de água; três de VFX; e oito skyboxes. Há três
materiais de estação (summer, autumn, winter). A resolução 2048² é a compressão
de engine; as fontes 4K existem, mas não devem ir ao browser sem redução e
transcode.

### Separação explícita

| Elemento                                                                | Classificação                                  | Decisão R3F                                                                                                |
| ----------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| FBX de árvore, rocha, cliff, planta, bush, nuvem, terreno e water plane | **Asset portátil**                             | Converter seletivamente para GLB; preservar UV/normais/vertex color se houver; excluir mesh não escolhido. |
| Atlas de cor/emissão/metallic e texturas-fonte                          | **Asset portátil com ressalvas**               | Reamostrar e converter para KTX2 conforme medição; manter sRGB/linear corretos.                            |
| LODs artesanais                                                         | **Dados portáveis, configuração não portável** | Exportar níveis separados e montar `THREE.LOD` ou fazer troca por distância/fog; validar nomes e pivôs.    |
| Colliders                                                               | **Dados portáveis, integração não portável**   | Não entram no V3 visual; se usados no futuro, gerar colisor simples separado.                              |
| Materiais Unity/Unreal                                                  | **Dependente da engine**                       | Recriar somente a resposta visual necessária com `MeshStandardMaterial` ajustado ou shader pequeno.        |
| Foliage wind / snow wind                                                | **Dependente da engine**                       | Reimplementar como deformação por vértice, condicionada à presença de dados adequados.                     |
| Snow/moss surface                                                       | **Dependente da engine**                       | Fora do V3 sunset; possível máscara/vertex color posterior, não portar shader.                             |
| Advanced water                                                          | **Dependente da engine**                       | Recriar fluxo, cor e espuma em malha própria; sem reflexão em tempo real.                                  |
| Unity Terrain / landscape UE                                            | **Dependente da engine**                       | Criar geometria de terreno compacta no pipeline GLB; não exportar sistema de terreno.                      |
| Skybox/fake sun/cloud material                                          | **Dependente da engine**                       | Céu, sol e nuvens autorais; skybox 4K–8K é pesado e não corresponde à paleta global.                       |
| VFX de chuva, folhas, neve, fogo, fumaça, névoa e poeira                | **Dependente da engine**                       | Não portar. V3 só admite movimento atmosférico quase imperceptível se os budgets permitirem.               |
| Demo scenes, prefabs, post-processing profiles, iluminação              | **Dependente da engine**                       | Referência de composição e paleta; nunca exportação de cena/runtimes.                                      |

## Leitura visual das demos

### Por que parece superior ao Benchmark V2

Esta leitura é uma inferência de direção de arte a partir da galeria/vídeos
oficiais e do conteúdo publicado, não uma alegação de que cada efeito esteja no
FBX. A qualidade vem principalmente de uma **biblioteca coerente de silhuetas e
de estratos**; o motor fecha a imagem, mas não cria essa base sozinho.

| Camada                     | O que as demos resolvem                                                                                           | Quanto permanece só com as malhas           | O que se perde sem o motor                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------ |
| Asset quality e silhuetas  | Copas volumosas, troncos/galhos variados, cliffs grandes com planos largos, rochas e vegetação da mesma linguagem | **Alto**                                    | variação tonal e movimento refinado                    |
| Densidade e estratificação | Vegetação baixa, bushes e árvores sobrepostos em primeiro, médio e fundo                                          | **Alto**, se a composição for refeita       | placement/prefabs e culling do motor                   |
| Terreno e cliffs           | Massas que escondem o horizonte e enquadram o landmark                                                            | **Médio-alto**                              | blend de terreno, neve/moss e acabamento material      |
| Água/cachoeira             | Direção de fluxo, água clara e espuma concentram o olhar                                                          | **Baixo para água final; alto para layout** | shader de água, espuma, transparência e VFX            |
| Céu/nuvens                 | Fundo limpo e massas de nuvem sustentam a paleta                                                                  | **Baixo**                                   | skybox/material de cloud/fake sun e exposição          |
| Luz, sombra e fog          | Separação de planos e escala atmosférica                                                                          | **Baixo-médio**                             | iluminação, sombras, fog, color grade e pós            |
| Materiais/shaders/vento    | Unificam atlas, estação e animação                                                                                | **Médio para materiais estáticos**          | vento, água, neve/moss e controles expostos pelo autor |
| Composição                 | Landmark claro, áreas abertas e grupos vegetais por plano                                                         | **Alto**, mas precisa autoria               | câmeras, cenas prontas e ajustes de demo               |

**Resposta à pergunta fundamental:** após remover iluminação, shaders e pós de
Unity/Unreal, as malhas continuam uma boa base visual — sobretudo árvores,
cliffs, rochas e plantas, que carregam o ganho de silhueta e de linguagem sobre
V2. Porém a imagem deixará de parecer demo até reconstruirmos luz de fim de
tarde, fog, céu, água, espuma e vento. O pacote sozinho não entrega o patamar;
ele troca matéria-prima insuficiente por matéria-prima adequada.

### O que AeonShaper ensina sem ser portado

AeonShaper declara quatro famílias/32 árvores, vegetação interativa, água,
cachoeiras/VFX, nuvem, vento global, variação procedural de grama e transição
rio–lago. A listagem entrega apenas formato Unreal; portanto nada dessa
implementação é candidato ao runtime desta sprint.

Princípios a extrair para o nosso pipeline:

1. Formar profundidade com vegetação em três escalas — cobertura, agrupamentos
   médios e copas —, sem preencher o caminho.
2. Tratar água como linha composicional: a queda tem uma direção, ponto de
   impacto e bordas de espuma, não uma superfície genérica brilhante.
3. Unificar vento: árvores e vegetação baixa movem-se com o mesmo campo, em
   amplitudes diferentes; não animar todos os objetos de forma independente.
4. Reservar contraste, saturação turquesa e maior detalhe para landmark/água;
   reduzir ambos pela distância com fog e paleta.
5. Montar nuvens como massas lentas e raras, não partículas ou um efeito
   volumétrico constante.

### Quaternius: apenas lacuna controlada

Quaternius MegaKit é CC0 e oferece 116 modelos em glTF/FBX/OBJ/Blend. Ele só
entra se, depois de inspecionar LMHPOLY, faltar um prop ou variação específica
que não altere a leitura de árvore, cliff, pedra e vegetação hero. O primeiro
teste de compatibilidade precisa colocar **uma família LMHPOLY + um único
complemento** sob a iluminação alvo; se a proveniência de packs ficar legível,
o complemento é rejeitado.

## Mapa de portabilidade

```text
LMHPOLY adquirido no canal com licença validada
  -> .unitypackage / pacote UE em quarentena (sem runtime)
  -> FBX + texturas-fonte selecionados
  -> inspeção automatizada; Blender somente como conversor, nunca modelagem
  -> GLB por família/LOD + manifest de proveniência
  -> meshopt/Draco após medir; texturas KTX2 após reduzir
  -> lazy chunk do planeta Little Worlds
  -> R3F: instancing, LOD, luz, fog e materiais próprios
```

| Etapa      | Ferramenta                                  | Transformação                                                            | Risco                                                     | Mitigação / gate                                                                   |
| ---------- | ------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Aquisição  | canal LMHPOLY escolhido                     | baixar para quarentena                                                   | licença pode vedar distribuição web extraível             | ler `License.pdf`; confirmar escopo do produto web antes de download para produção |
| Inventário | scripts de inspeção + glTF Validator no fim | catalogar mesh, LOD, material, textura, UV, vertex color e bytes         | nomes/LODs ou dados de vento diferentes do declarado      | registrar apenas fatos observados; parar se FBX/texturas não estiverem íntegros    |
| FBX → GLB  | Blender em batch ou conversor validado      | escala, eixos, pivôs, normais e texturas PBR simples                     | perda de hierarquia/UV, material errado, LOD não separado | converter três famílias representativas primeiro; comparar render de referência    |
| Texturas   | pipeline KTX2                               | usar atlas 2K ou menor, geração de mipmaps e perfis corretos             | 4K/8K explode memória; atlas introduz bleeding            | nunca enviar fonte 4K/skybox 8K; medir memória GPU e padding                       |
| Materiais  | Three.js                                    | reaplicar atlas em materiais compartilhados                              | aparência plana, metálico indevido, sRGB incorreto        | começar fosco com `MeshStandardMaterial`; shader só para lacuna visível            |
| Vegetação  | `InstancedMesh` / instancing R3F            | compartilhar geometria e material; variar escala/rotação controladamente | alpha/overdraw e draw calls por espécie                   | agrupar por espécie/LOD; testar opaco/alpha-test antes de transparência            |
| LOD        | `THREE.LOD` ou troca por distância          | carregar níveis independentes e reduzir por distância                    | estalo de LOD ou muitas chamadas                          | distâncias sob fog, transição discreta; remover nível que não economize            |
| Cena       | R3F/Three WebGL                             | luz direcional, hemisphere/fill, fog, culling                            | imagem bonita mas fora do frame budget                    | profiling em caminhada e rotação a cada camada                                     |

## Arquitetura dos sistemas a reconstruir

| Sistema                | Estratégia indicada                                                                                                           | Escolha                                                              | Limite do V3                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 1. Foliage wind        | Deformação vertex no material compartilhado: fase por instância, altura/vertex color se disponíveis, seno de baixa frequência | **Shader custom pequeno**                                            | árvores hero e vegetação baixa; desligável em reduced motion                        |
| 2. Grass estilizada    | Tufts/bushes mesh instanciados, variação de escala/rotação e agrupamento manual; sem campo inteiro de blades                  | **Nativo Three.js + instancing**                                     | sem transparência blended se alpha-test resolver; nada de sistema procedural pesado |
| 3. Água                | Malha rasa com duas texturas de ruído deslocadas e Fresnel/gradiente de profundidade aproximado                               | **Shader custom pequeno**                                            | sem SSR, planar reflection ou refração de tela                                      |
| 4. Cachoeira           | Faixa/mesh vertical com UV em movimento e máscara de borda                                                                    | **Shader custom pequeno**                                            | uma queda; sem simulação de fluido                                                  |
| 5. Espuma              | Máscara na borda/impacto, por vertex color ou decal de malha com alpha-test                                                   | **Nativo se textura/máscara bastar; shader pequeno se fluxo exigir** | somente crista e base da queda; sem partículas contínuas                            |
| 6. Fog atmosférico     | `FogExp2` ou fog linear com cor calibrada ao horizonte                                                                        | **Nativo Three.js**                                                  | sem fog volumétrico; deve funcionar sem pós                                         |
| 7. Céu sunset          | dome/box com gradiente vertical e disco solar suave                                                                           | **Shader custom pequeno**                                            | uma paleta global, sem HDRI visível pesado                                          |
| 8. Nuvens              | 1–2 massas de mesh/billboard opaco ou alpha-test, deslocamento lento                                                          | **Nativo Three.js primeiro**                                         | sem raymarching; remover no perfil low se necessário                                |
| 9. Luz quente/fria     | luz direcional quente, fill frio de baixa intensidade, uma shadow map seletiva                                                | **Nativo Three.js**                                                  | no máximo duas luzes com sombra no perfil high; low pode desativar sombra           |
| 10. Resposta painterly | cor/roughness/vertex color e atlas primeiro; leve ramp somente se necessário                                                  | **Nativo Three.js primeiro**                                         | não criar toon shader global sem uma diferença visual mensurável                    |
| Color grading / bloom  | ajuste de renderer, exposição e paleta; passe final opcional                                                                  | **Sem biblioteca nova**                                              | somente após cena-base funcionar; até três passes high já previstos pelo projeto    |

Não há justificativa para adicionar dependência nesta sprint. O stack existente
(`three` + R3F) cobre instancing, LOD, fog, luz e materiais; os poucos shaders
propostos são locais e somente seriam escritos após autorização para o V3.

## Performance Web e budget inicial do planeta

O budget vigente do projeto para desktop high é até **500k triângulos visíveis**,
**180 draw calls**, **60 materiais ativos**, **256 MB de textura GPU**, chunk 3D
de primeiro planeta até **6 MB transferidos** e até **duas luzes com sombra**.
O V3 deve começar abaixo disso para preservar margem de diagnóstico.

| Recurso do V3 (desktop inicial) |                    Alvo | Teto de veto | Como controlar                                                                |
| ------------------------------- | ----------------------: | -----------: | ----------------------------------------------------------------------------- |
| Triângulos visíveis             |               180k–300k |         400k | 2–4 árvores hero, LOD/fog para fundo, cliffs escolhidos; nunca a demo inteira |
| Draw calls                      |                  70–110 |          140 | `InstancedMesh` por espécie/LOD, atlas e materiais compartilhados             |
| Materiais ativos                |                   12–20 |           30 | um material por família visual; evitar cópias por instância                   |
| Textura GPU                     |               64–128 MB |       160 MB | KTX2, atlas 2K e sem skybox 4K–8K                                             |
| GLB do slice                    |     2–3,5 MB comprimido |       4,5 MB | exportar só os assets eleitos, LOD de fundo separado                          |
| Cena total transferida          |                3,5–5 MB |         6 MB | chunk visual lazy; decoração futura em carga posterior                        |
| Shadow casters                  |                4–8 hero |           12 | árvores/cliff que mudam a leitura; demais recebem sombra                      |
| Vegetação instanciada visível   |                 250–700 |        1.000 | tufts, plantas e bushes por manchas, não lawn uniforme                        |
| Água/cachoeira                  | 2–3 malhas, 2 materiais |  4 materiais | sem reflexões em tempo real e transparência ampla                             |
| Shaders custom                  |           2–4 materiais |            5 | vento, água, queda e, só se necessário, céu; reduzir por perfil               |

Riscos dominantes: overdraw de foliage/água, multiplicação de draws por LOD e
espécie, textura 4K/8K, sombras de copas e fragment cost de transparência. O
número de triângulos anunciado pelo fornecedor é promissor, mas **não prova**
performance no browser: batches, pixels sombreados e upload de textura são os
gates reais. A versão low precisa manter a mesma composição, reduzindo distância,
instâncias, sombra e animação — nunca removendo o landmark.

## Benchmark V3 proposto — somente após autorização

**Objetivo:** responder em uma única vista navegável de **20–30 m** se a base
LMHPOLY, com reconstruções mínimas, sustenta o quality bar sem ultrapassar os
budgets. Não é um planeta, não contém terminal, Hub, projeto, locomoção nova,
áudio ou gameplay.

```text
foreground: grama em grupos + poucas flores + plantas baixas + rochas de borda
       ↓
midground: caminho amplo curvo + riacho + 2–4 árvores hero
       ↓
landmark: cliff amplo + uma cachoeira + espuma concentrada
       ↓
background: copas e cliffs em LOD + fog colorido + céu sunset e nuvens lentas
```

### Conteúdo e ordem de validação

1. **Cena estática sem pós e sem animação:** 2 árvores, cliff, rochas, caminho,
   água parada e céu/fog. Rejeitar se a qualidade de silhueta não justificar o
   pack nesta fase.
2. **Composição e estratos:** adicionar patches instanciados, 2–4 árvores e
   fundo em LOD. Medir triângulos, draws, textura GPU e frame pacing.
3. **Movimento mínimo:** vento único, fluxo de água, cachoeira/espuma e nuvem
   lenta. Verificar `prefers-reduced-motion` com cena estática equivalente.
4. **Polimento controlado:** uma sombra direcional e, somente se necessário,
   color grading/bloom discreto. Comparar sem pós; a base deve continuar bonita.

### Critérios GO/NO-GO do V3

- O frame sem pós deve comunicar um landmark, profundidade e fim de tarde,
  mantendo a paleta da Art Bible.
- A leitura precisa vir de seleção/composição própria, não da cena demo ou de
  uma composição reconhecível do fornecedor.
- Desktop high deve atingir 60 fps/p95 <= 16,7 ms no percurso e na rotação;
  o perfil low preserva composição com as degradações documentadas.
- O slice precisa permanecer abaixo dos tetos da tabela e passar validator,
  manifesto de asset e inspeção de licença.
- Falha de licença, perda de UV/atlas na conversão, ou necessidade de pós para
  esconder uma base fraca é **NO-GO** antes de expandir escopo.

## O que compraríamos — se houver autorização

**Canal e preço observado:** a página oficial do autor anuncia **US$ 59,99**
(fotografia de 2026-08-06). O canal só é escolhível depois de comparar a
`License.pdf` aplicável; preço final, imposto e licença do Fab podem variar.

**Receberíamos, conforme anúncio:** 400+ assets naturais, 51 assets bônus,
FBX, texturas e fontes 4K, LODs/colisores, shaders/material de motor, 15 demos
UE5 e 16 Unity/perfis de pós. A página não confirma publicamente um pacote GLB
pronto, nem uma licença web específica.

**Usaríamos:** árvores, bushes, plantas, rochas, cliffs, talvez uma malha de
terreno/água como ponto de partida e seus atlas. **Ignoraríamos:** demos,
prefabs, terreno de engine, post-processing, VFX, skyboxes grandes, shaders,
camp/ruínas e estações/neve no V3. **Converteríamos:** a seleção mínima de
FBX/atlas para GLB/KTX2. **Recriaríamos:** materiais finais, vento, água,
cachoeira, espuma, fog, céu, nuvens, iluminação e qualquer grade de cor.

**Expectativa realista:** o V3 pode alcançar a riqueza de silhueta, estratos e
composição das demos em escala curta. Não deve prometer reflexões, atmosfera
volumétrica ou acabamento de motor idêntico; a meta é um `indie premium
estilizado para Web`, não reproduzir uma demo Unity/UE pixel por pixel.

## Próxima ação autorizável

Antes de comprar, validar a `License.pdf` do canal escolhido contra distribuição
de um produto web compilado cujos GLB/KTX2 podem ser obtidos pelo cliente. Se o
texto for compatível, a próxima autorização deve ser **uma aquisição em
quarentena e inspeção de três famílias (árvore, cliff, planta) — não o V3
inteiro**.

---

STATUS: GO COM RESSALVAS

BASE: LMHPOLY Stylized Poly Nature Environment

POR QUE:
O fornecedor confirma FBX, texturas-fonte, LODs e uma biblioteca de árvores,
cliffs e vegetação que resolve a deficiência de matéria-prima do V2. As demos
ainda dependem muito de materiais, água, iluminação e pós de Unity/Unreal, que
não são portáveis; a qualidade exige reconstrução controlada, não importação.

O QUE CONSEGUIMOS APROVEITAR:
Malhas FBX selecionadas, atlas/texturas, UVs a inspecionar, LODs como dados e
as famílias coerentes de árvores, rochas, cliffs, bushes e plantas.

O QUE PRECISAMOS RECRIAR:
Materiais Three.js, vento, água, cachoeira, espuma, fog, céu/nuvens, iluminação,
LOD runtime e qualquer pós-processamento.

PRINCIPAL RISCO:
A licença do canal ainda precisa cobrir distribuição web com arquivos
client-side extraíveis; tecnicamente, foliage/água transparente e textura mal
curada podem quebrar o budget mesmo com meshes low-poly.

PRÓXIMO PASSO:
Ler e validar a `License.pdf` do canal de compra contra distribuição WebGL antes
de autorizar compra e inspeção em quarentena.
