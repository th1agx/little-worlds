# Pesquisa de assets — rodada 2

**Estado:** shortlist para aprovação humana; compra e download bloqueados  
**Snapshot:** 2026-08-06  
**Objetivo:** Visual Benchmark 30 × 30 m, não construção do Hub

Preços não incluem impostos e podem mudar. Quando o fornecedor não publica triângulos, formatos-fonte ou conteúdo interno, o dado permanece `não publicado`; ele não é estimado por screenshots.

## Resultado executivo

- **Dreamscape Nature: Meadows** é o candidato mais próximo porque a referência dominante aparenta vir de sua própria demo.
- **The Illustrated Nature** é a alternativa mais forte para evitar uma aparência genérica de low-poly e aproximar a vegetação de pinceladas volumosas.
- **PIDI COSY Vol. 1** resolve o estrato de grama/flores com dados técnicos excepcionalmente claros.
- **AeonShaper Stylized Environment** é visualmente forte, mas sua entrega anunciada é Unreal; por isso, não deve ser comprado antes de confirmação escrita sobre acesso aos meshes/texturas-fonte.
- KayKit Forest permanece excelente tecnicamente, mas não é mais base visual. Quaternius Simple Nature não atinge o benchmark.

## Classificação

### Essencial

#### 1. Dreamscape Nature: Meadows — Polyart Studio

- **Fonte:** [Unity Asset Store](https://assetstore.unity.com/packages/3d/environments/fantasy/dreamscape-nature-meadows-stylized-open-world-environment-186894), [Fab](https://www.fab.com/listings/9e475603-7b3d-4a01-94af-1cc52d559f5f?lang=en), [documentação oficial](https://polyart.gitbook.io/dreamscape-series).
- **Preço observado:** Unity US$ 45 lista / US$ 22,50 em promoção; Fab US$ 40,99 lista / US$ 20,49 em promoção. Reconfirmar no checkout.
- **Licença:** edição Unity: Standard Unity Asset Store EULA, Single Entity. Edição Fab: confirmar a licença exibida e evitar `Reference Only`; a página rastreada anuncia UEFN/referenced asset.
- **Formatos:** pacote Unity e edição Unreal/UEFN; FBX/GLB não são anunciados na vitrine. Formatos-fonte internos precisam de confirmação do publisher antes da compra.
- **Polígonos:** não publicados de forma confiável. O fornecedor declara aproximadamente 100 meshes, múltiplos LODs, materiais compartilhados e billboards.
- **Resolve:** árvores, arbustos, grama, flores, pedras, cliffs, terreno de referência, lagos, rios, cachoeira e efeitos.
- **Compatibilidade R3F/Three:** **média para meshes/texturas; nula para os sistemas prontos**. Prefabs, terrain material, water, VFX, impostors e shaders Unity/Unreal não portam diretamente.
- **Risco de performance:** a demo é deliberadamente AAA e o próprio fornecedor diz que ela não foi desenhada para mobile. Foliage alpha, sombras, impostors 4K e reflexão de água exigem substituição e budgets Web.
- **Vantagem:** correspondência visual mais direta com a referência dominante.
- **Desvantagem:** alto risco de comprar uma aparência dependente de engine e de reproduzir involuntariamente a demo.
- **Condição:** solicitar ao publisher lista de formatos-fonte, mapas, LODs e permissão de uso fora da Unity; depois adquirir apenas a edição que forneça source acessível.

### Fortes candidatos

#### 2. The Illustrated Nature — Artkovski / Dragos Matkovski

- **Fonte:** [Unity Asset Store](https://assetstore.unity.com/packages/3d/vegetation/the-illustrated-nature-153939), [página do autor](https://www.matkovskidragos.com/the-illustrated-nature-lp), [documentação](https://www.matkovskidragos.com/s/IL3DN_Documentation-bpdp.pdf).
- **Preço:** US$ 40.
- **Licença:** Standard Unity Asset Store EULA, Single Entity; item classificado como Extension Asset na vitrine, portanto revisar seats antes da aquisição.
- **Formatos:** `.unitypackage`; formatos 3D internos não publicados na página.
- **Polígonos:** não publicados. A documentação informa 14 texturas brancas com alpha comprimidas a 256 × 256.
- **Resolve:** árvores painterly, grama, arbustos, vegetação, vento visual, nuvens e atmosfera de referência.
- **Compatibilidade:** **média**, condicionada ao source dos meshes. Shaders, image effects, scripts e controlador global de cor serão substituídos.
- **Risco:** alpha overdraw, sorting, shaders Built-in Unity e silhueta muito pictórica se misturada sem rematerialização.
- **Motivo:** é a opção mais autoral para sair do low-poly plano sem entrar no realismo.

#### 3. PIDI COSY: Stylized Grass, Weeds and Wild Flowers Vol. 1 — Irreverent Software

- **Fonte:** [Unity Asset Store](https://assetstore.unity.com/packages/3d/vegetation/pidi-cosy-stylized-grass-weeds-and-wild-flowers-vol-1-294528).
- **Preço:** US$ 35.
- **Licença:** Standard Unity Asset Store EULA; confirmar tier no checkout.
- **Formatos:** `.unitypackage`; 6 texturas PNG 2048 × 2048; formato dos 91 meshes não anunciado.
- **Polígonos:** 8–884 triângulos por modelo; UVs e vertex data para vento publicados.
- **Resolve:** estrato baixo, gramas, weeds, cattails e flores silvestres; 91 modelos e quatro famílias de tint.
- **Compatibilidade:** **alta conceitualmente, média operacionalmente**. Atributos de vertex podem alimentar shader Three próprio; prefabs e shaders Unity não portam.
- **Risco:** grande número de instâncias e alpha overdraw. O atlas precisa ser consolidado/comprimido; não usar as 364 variações.
- **Motivo:** melhor candidato especializado para construir a densidade da referência com custo geométrico mensurável.

#### 4. Stylized Environment — AeonShaper

- **Fonte:** [Fab](https://www.fab.com/listings/6ae05e13-e0ee-468b-a6b0-07404b73d978).
- **Preço observado:** US$ 69,99; reconfirmar.
- **Licença:** confirmar Fab Standard no item e comprar tier com source, nunca Reference Only.
- **Formatos:** Unreal Engine anunciado; FBX/GLB não anunciados.
- **Polígonos:** não publicados; 100+ assets e 32 árvores declarados.
- **Resolve:** quatro famílias de árvores, grama, flores, arbustos, rocks/cliffs, water, rivers, waterfalls, VFX, clouds e wind.
- **Compatibilidade:** **baixa até o publisher confirmar source**, depois potencialmente média para geometria/texturas.
- **Risco:** water, foliage interaction, clouds, procedural moss e wind são sistemas Unreal e serão perdidos; conversão pode não justificar o preço.
- **Motivo:** excelente proximidade visual e cobertura, mas não é compra segura para Web no estado atual das informações.

#### 5. NatureForge: Low Poly Meadow & Farm Kit — EmaceArt

- **Fonte:** [itch.io oficial](https://emaceart.itch.io/poly-meadows).
- **Preço observado:** US$ 24 lista / US$ 12 em promoção.
- **Licença:** CC0 declarado na página.
- **Formatos:** glTF, FBX com e sem LOD, Blend, texturas e Unity package.
- **Polígonos:** não publicados por asset; possui mais de 100 prefabs e LODs revisados.
- **Resolve:** árvores, grama, flores, arbustos, rocks/cliffs, terreno, caminhos e pontes.
- **Compatibilidade:** **alta** pelo glTF nativo e pelos LODs.
- **Risco:** assinatura low-poly/farm e troncos retorcidos podem afastar do benchmark; o pack deve ser fonte curada, não cena-base.
- **Motivo:** melhor equilíbrio entre abrangência, source aberto, licença e operação Web entre os candidatos leves.

### Opcionais

#### 6. Stylized Nature MegaKit — Quaternius

- **Fonte:** [Quaternius](https://quaternius.com/packs/stylizednaturemegakit.html).
- **Preço:** 60–70% gratuito; restante e projetos de engine nos tiers de suporte, preço variável.
- **Licença:** CC0.
- **Formatos:** FBX, OBJ, glTF; Blend e projetos Unity/Unreal/Godot no source.
- **Polígonos:** não publicados; 116 modelos, incluindo 40 árvores, 35 plantas/flores e 27 rocks.
- **Resolve:** variedade de árvores, plantas, flores, grama, arbustos e pedras.
- **Compatibilidade:** **alta** de formato; selecionar e medir individualmente.
- **Risco:** o autor declara inspiração Ghibli; uso amplo produziria identidade pronta e fantasia mais forte que Little Worlds.
- **Motivo:** volta da rejeição para pesquisa pontual, não para base visual.

#### 7. KayKit Forest Nature Pack — Kay Lousberg

- **Fonte:** [itch.io oficial](https://kaylousberg.itch.io/kaykit-forest).
- **Preço:** Free; Extra US$ 9,99; Source US$ 14,99.
- **Licença:** CC0.
- **Formatos:** FBX, glTF, OBJ; Blend no Source.
- **Polígonos:** não publicados; 100+ modelos no Free e atlas 1024 × 1024.
- **Resolve:** fallback de árvores, arbustos, grama, pedras, terrain e LOD/distant filler.
- **Compatibilidade:** **muito alta**.
- **Risco:** massa e acabamento simples demais para os elementos hero; uso visível em quantidade denuncia o kit.
- **Motivo:** excelente recurso técnico, colisor, distante ou low profile; não determina a imagem.

#### 8. Stylized Nature Bundle — Two Theories

- **Fonte:** [Unity Asset Store](https://assetstore.unity.com/packages/3d/vegetation/trees/stylized-nature-bundle-135352).
- **Preço:** US$ 20.
- **Licença:** Standard Unity Asset Store EULA, Single Entity.
- **Formatos:** `.unitypackage`; source interno não publicado.
- **Polígonos:** não publicados. Inclui LODs, colisões e atlasing.
- **Resolve:** 4 árvores com variações, rocks, bushes, flores, plantas, grama e skybox pintado.
- **Compatibilidade:** **média/baixa** até confirmar source; shaders Unity de wind/translucency não portam.
- **Risco:** pacote de 2021 voltado a PC/console, visual mais cartoon/fantasy e dependência de shaders customizados.
- **Motivo:** alternativa econômica para A/B de folhagem, não primeira compra.

## Rejeitados para o Visual Benchmark

| Candidato                            | Decisão   | Motivo                                                                                                      |
| ------------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------- |
| Quaternius Simple Nature             | rejeitado | 13 modelos muito simples; serve a blockout, não mede a qualidade visual pretendida                          |
| Synty POLYGON Nature Biomes          | rejeitado | cobertura ampla, mas assinatura POLYGON reconhecível, hard facets e leitura de kit distante das referências |
| NatureManufacture Meadow Environment | rejeitado | base fotogramétrica/scanned e PBR mais realista que o espaço stylized desejado                              |
| packs antigos sem source verificável | rejeitado | baixo suporte, shaders presos à engine e custo de extração desconhecido                                     |

## Recurso técnico de água

O [`Water` oficial do Three.js](https://threejs.org/docs/pages/Water.html) já está disponível como addon da dependência existente e pode servir de baseline técnico, sem nova biblioteca. Não é direção visual: seu default reflexivo é realista demais e cada reflexão adiciona custo. O benchmark deve comparar uma versão reduzida/autoral com reflexão em baixa resolução ou sem passe extra. A cachoeira exigirá tratamento autoral leve; shaders Unity/Unreal não serão copiados.

## Nota jurídica operacional

A [Fab Standard License](https://www.fab.com/eula?lang=en) permite uso com ferramentas compatíveis fora da Unreal, modificação e distribuição incorporada ao produto, mas não redistribuição standalone; `Reference Only` não fornece source. A [Unity Asset Store EULA](https://unity.com/legal/as-terms) permite, para assets não restritos, incorporação e modificação dentro de produto com conteúdo original substancial. Isso não garante que o arquivo comprado contenha formatos extraíveis. Cada item ainda precisa de snapshot do checkout, package manifest e revisão de termos adicionais. Esta é uma leitura operacional, não aconselhamento jurídico.
