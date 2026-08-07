# Validação de rota — Dreamscape Nature: Meadows

**Estado:** `NO-GO` para compra na rota Web atual; NatureForge é a única alternativa em avaliação humana

**Data:** 2026-08-06

**Escopo:** decisão de aquisição para o Visual Benchmark 30 × 30 m. Não autoriza download, compra, quarentena ou runtime.

## Decisão

Não comprar **Dreamscape Nature: Meadows** em nenhuma das vitrines verificadas para uso no Little Worlds. A proximidade visual continua alta, mas não existe confirmação oficial de que a edição adquirida entregue meshes e texturas-fonte utilizáveis no pipeline R3F/Three.js.

Substituir a rota preferencial por **NatureForge: Low Poly Meadow & Farm Kit**, exclusivamente como rota candidata e ainda dependente de autorização humana de compra e esclarecimento de licença para distribuição web de derivados.

## Evidência — Dreamscape

| Critério            | Evidência confirmada                                                                                                      | Resultado                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fornecedor e preço  | Unity Asset Store, Polyart Studio, US$ 45 + impostos                                                                      | compra paga; exige autorização humana                                                                                                                       |
| licença             | Standard Unity Asset Store EULA, Single Entity; classificado como Extension Asset                                         | permite incorporação/modificação de asset não restrito em produto substancial, mas não redistribuição standalone; termos adicionais do publisher prevalecem |
| uso comercial       | possível para assets não restritos, incorporados em produto                                                               | não é o bloqueio principal                                                                                                                                  |
| uso fora da Unity   | EULA não torna a engine uma condição expressa para asset não restrito                                                     | não é prova de portabilidade técnica                                                                                                                        |
| formato publicado   | Unity package de 561,7 MB, versão 2.3                                                                                     | FBX, OBJ, glTF/GLB e texturas independentes não são anunciados                                                                                              |
| edição Fab          | formatos incluídos: UEFN/Unreal; contém referenced asset                                                                  | `Reference Only`/referenced asset não fornece source adequado; rota rejeitada                                                                               |
| materiais e shaders | auto-landscape, master materials, water Lake/River/Waterfall, partículas e impostors 4K são recursos anunciados de engine | não portáveis diretamente para Three.js                                                                                                                     |
| riscos              | vendor lock-in de Unity/Unreal, 4K impostors, foliage alpha, água/reflexos e demo AAA                                     | custo e resultado Web imprevisíveis antes da aquisição                                                                                                      |

Conclusão: screenshots e trailer não substituem formato-fonte verificável. Comprar um pacote de 561,7 MB para descobrir se há malhas e texturas recuperáveis seria uma aquisição sem gate técnico e viola ADR 0015.

## Rota alternativa — NatureForge

| Critério                 | Evidência confirmada                                                                                                                                                                       | Implicação                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| fornecedor e preço       | EmaceArt no itch.io; mínimo de US$ 24                                                                                                                                                      | compra paga; exige autorização humana                                                                                   |
| arquivos entregues       | `glTF.zip` (23 MB), `FBXs.zip` (5,9 MB), `FBX NoLods.zip` (3,3 MB), arquivo Blend e pacote de texturas                                                                                     | fonte adequada para quarentena, inspeção e possível conversão GLB                                                       |
| LODs                     | FBX com e sem LOD entregue                                                                                                                                                                 | comparar a base antes de qualquer compressão ou LOD adicional                                                           |
| conteúdo útil            | árvores, rochas/cliffs, vegetação baixa, flores, terreno/caminho e material compartilhado                                                                                                  | permite selecionar o conjunto mínimo do benchmark                                                                       |
| licença rotulada         | página marca CC0 1.0                                                                                                                                                                       | insuficiente isoladamente, pois conflita com texto do próprio autor                                                     |
| termos textuais do autor | permite usar e modificar em game/app/video comercial; proíbe redistribuir/reempacotar/compartilhar arquivos-fonte, originais ou modificados; permite distribuição em End Product compilado | tratar como licença própria mais restritiva para operação; não commitar masters ou derivados extraíveis sem confirmação |
| risco Web                | GLB publicado em `public` é diretamente acessível, o que pode ser interpretado como redistribuição de arquivo e não como "compiled End Product"                                            | requer confirmação escrita do autor antes de qualquer promoção ao runtime público                                       |
| risco artístico          | assinatura meadow/farm, props rurais e árvores retorcidas                                                                                                                                  | usar somente 2–3 árvores, vegetação e cliffs curados; rejeitar fardos, cercas, abóboras, barris, props e demo           |

## Recomendação de aquisição humana

**Não comprar ainda sem a seguinte confirmação escrita do autor:** a distribuição de GLB/arquivos de textura derivados, servidos por uma aplicação web comercial como parte inseparável da experiência, é permitida sob a licença do pack; os arquivos master continuarão privados e fora do Git.

Se o autor confirmar, a única compra recomendada é:

| Item                                    | Loja               |                     Teto | Uso estrito no benchmark                                                                               |
| --------------------------------------- | ------------------ | -----------------------: | ------------------------------------------------------------------------------------------------------ |
| NatureForge: Low Poly Meadow & Farm Kit | itch.io / EmaceArt | US$ 24 antes de impostos | 2–3 árvores, 2 arbustos, 2–3 vegetações baixas, 1–2 flores, 2–3 pedras, 1 cliff e texturas necessárias |

Não comprar Dreamscape, PIDI, Illustrated Nature, AeonShaper ou qualquer complemento nesta rodada.

## Após autorização e confirmação

1. o usuário realiza a compra manualmente;
2. o pacote entra somente em quarentena fora de `public` e, por padrão, fora do Git;
3. registrar recibo seguro, URL, data, versão, licença e checksums;
4. inventariar formatos, tamanhos, geometria, materiais, texturas, transparência, escalas e dependências Unity;
5. promover somente derivados aprovados e licenciados, por manifesto explícito;
6. criar o benchmark lazy-loaded sem tocar no Hub, Limiar, locomoção, gameplay ou áudio.

## Fontes primárias

- [Dreamscape na Unity Asset Store](https://assetstore.unity.com/packages/3d/environments/fantasy/dreamscape-nature-meadows-stylized-open-world-environment-186894)
- [Dreamscape no Fab](https://www.fab.com/listings/9e475603-7b3d-4a01-94af-1cc52d559f5f?lang=en)
- [EULA oficial da Unity Asset Store](https://unity.com/legal/as-terms)
- [NatureForge no itch.io](https://emaceart.itch.io/poly-meadows)
