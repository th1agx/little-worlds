# Little Worlds Visual Benchmark

**Estado:** plano proposto para aprovação; não implementar ainda  
**Dimensão:** aproximadamente 30 × 30 m  
**Pergunta:** conseguimos atingir no navegador uma percepção visual próxima das duas referências sem violar os budgets Web?

## O que este benchmark não é

- não é novo Hub;
- não é planeta, gameplay, conteúdo ou vertical slice;
- não inclui Limiar, computador, UI, áudio ou asset final de arquitetura;
- não autoriza downloads, compras ou alteração da locomoção;
- não replica a demo Dreamscape ou a composição das imagens.

## Composição proposta

```text
       fundo atmosférico / copas simplificadas
  ┌──────────────────────────────────────┐
  │  grove denso     cliff principal    │
  │  (moldura)        + queda d'água   │
  │       \          /                  │
  │        margem ~~~~~ lago/riacho     │
  │          \      /                   │
  │  meadow --- caminho claro           │
  │  flores       spawn/câmera          │
  └──────────────────────────────────────┘
```

O spawn deve revelar três planos: vegetação em primeiro plano, margem/caminho no plano médio e cliff/cachoeira como marco. A densidade se concentra nas bordas e no fundo; uma faixa central de 2–3 m permanece limpa e caminhável. A água cria diagonal, nunca uma cópia do enquadramento de referência.

## Conteúdo mínimo do teste

| Sistema         | Conteúdo                                     | Fonte proposta                                   |                  Variações |
| --------------- | -------------------------------------------- | ------------------------------------------------ | -------------------------: |
| terreno         | relevo suave, caminho e uma margem           | geometria técnica existente + materiais autorais | 3 materiais compartilhados |
| árvores         | copas densas, uma família esguia e uma larga | Dreamscape ou Illustrated Nature                 |            2–3 bases + LOD |
| vegetação baixa | base, tufos e arbusto                        | PIDI ou NatureForge                              |                 3 famílias |
| flores          | acento em dois grupos de cor relacionados    | PIDI ou NatureForge                              |                   2 formas |
| pedra/cliff     | marco vertical e duas massas de transição    | Dreamscape; Aeon somente se source aprovado      |                  2–3 bases |
| água            | superfície calma e opcional queda simples    | solução Three.js autoral                         |                 1 material |
| céu             | gradiente pêssego–rosa–azul                  | sistema autoral existente/futuro                 |                   1 preset |
| luz             | key baixa quente + fill frio                 | sistema do projeto                               |                    1 setup |
| vento           | vertex displacement assíncrono               | shader próprio                                   |               2 amplitudes |
| fog             | separação de planos                          | fog do renderer                                  |                   1 perfil |

## Harmonização obrigatória

1. **Paleta:** nenhuma textura de fornecedor define a cena. Recolorir para verdes aquecidos, sombras ameixa/azul e acentos florais limitados.
2. **Materiais:** reduzir tudo a 4–6 master families; remover mapas sem ganho perceptivo e unificar roughness.
3. **Escala:** normalizar em metros, comparar troncos, flores, grama e cliffs com eye height de 1,65 m.
4. **Silhueta:** usar no máximo 2–3 bases por família; variar escala/rotação dentro de limites.
5. **Vento:** um campo global; não transportar shaders de cada pack.
6. **Luz/fog:** um único sistema autoral remove a assinatura das demos.
7. **Composição:** posicionamento manual dos grupos principais; procedural apenas dentro de máscaras aprovadas.
8. **Modificação:** remover props de fantasia, cogumelos, fogueira, cores arco-íris e geometrias reconhecíveis do fornecedor.

## Perfis e budgets de prova

Os valores abaixo são gates do experimento, não budgets definitivos do produto.

| Métrica no frame-chave      |                 Low |                          High |
| --------------------------- | ------------------: | ----------------------------: |
| draw calls                  |                ≤ 90 |                         ≤ 160 |
| triângulos visíveis         |           ≤ 180 mil |                     ≤ 400 mil |
| texturas GPU estimadas      |             ≤ 96 MB |                      ≤ 192 MB |
| download comprimido da cena |             ≤ 12 MB |                       ≤ 24 MB |
| luzes com sombra            |                   1 |                             1 |
| shadow map                  |                1024 | 2048, se evidência justificar |
| reflexão de água            |      ausente ou 256 |                 no máximo 512 |
| DPR                         |            0,75–1,0 |          adaptativo, teto 1,5 |
| FPS desktop de referência   | p95 frame ≤ 16,7 ms |           p95 frame ≤ 16,7 ms |
| FPS mobile médio            | p95 frame ≤ 33,3 ms |               não obrigatório |

Além de triângulos, medir fragment cost/overdraw: foliage alpha pode falhar mesmo com geometria barata. Medir warm load, cold load, pico de memória, compile de shader e stutter do primeiro movimento.

## Sequência de execução após autorização

1. validar licença, source e recibo do candidato escolhido;
2. adquirir apenas o primeiro conjunto aprovado e colocá-lo em quarentena;
3. medir modelos e texturas antes de converter;
4. criar uma cena isolada e lazy-loaded no registry, sem substituir Hub;
5. compor um frame visual High sem primitiva visível como arte final;
6. registrar captura, perfil e inventário;
7. produzir Low por LOD, instancing, atlas, KTX2 e redução de sombras;
8. comparar qualidade perceptiva, não apenas FPS;
9. decidir: `GO`, `REWORK` ou `NO-GO` por asset/família;
10. somente um `GO` permite planejar substituição do Hub.

## Matriz de aceite

O benchmark passa apenas se:

- 3 de 4 frames cegos forem identificados como `stylized 3D environment`, não `prototype/low-poly kit`;
- a versão Low preservar volume de copa, estratificação da vegetação, leitura de água e separação atmosférica;
- nenhum pack for reconhecível como identidade dominante;
- percurso, horizonte e foco forem legíveis sem HUD;
- contraste, reduced motion e fallback sem WebGL continuarem válidos;
- budgets de frame, memória e download forem cumpridos em devices definidos no plano de QA;
- Art Director e responsável por performance aprovarem o mesmo build.

Uma imagem bonita que falha na Web é `NO-GO`. Uma cena rápida que ainda parece blockout também é `NO-GO`.
