# Referências de locomoção — princípios, não reprodução

**Estado:** pesquisa aplicada · **Data:** 2026-08-04

Esta análise separa declarações documentadas de inferências obtidas pela leitura do comportamento dos jogos. Não há acesso aos controladores, curvas ou valores internos; nenhum número ou código desses títulos é utilizado.

## Journey

### Evidência documentada

- A equipe partiu da emoção pretendida e iterou durante anos; a palestra oficial descreve múltiplas ideias testadas e descartadas até sustentar o arco emocional.
- A câmera por movimento do controle SIXAXIS era valorizada porque gestos lentos produziam panorâmicas amplas; o analógico tendia a gerar correções bruscas e precisou ser calibrado para uma experiência calma.
- Areia, inclinação, rastros, tecido, animação e som foram construídos como uma resposta integrada ao deslocamento. O terreno alterna resistência, caminhada, deslize e surf.

### Leitura de game feel

- **Velocidade:** subordinada ao relevo e ao momento dramático. Subidas alongam o esforço; descidas convertem gravidade em prazer.
- **Aceleração/desaceleração:** não são percebidas isoladamente porque animação, areia e tecido antecipam e concluem o movimento.
- **Gravidade e salto:** a subida é limitada e legível; a queda é suavizada pela silhueta e pelo tecido, produzindo leveza sem remover peso.
- **Câmera:** terceira pessoa, ampla e composicional. O avatar pode oscilar bastante sem transferir esse movimento diretamente ao enquadramento.
- **Head bob:** não é o mecanismo de peso; peso vem do avatar e do terreno.
- **Sensação:** esforço localizado + libertação. O contraste torna os momentos leves mais valiosos.

Fontes: [GDC — Designing Journey](https://www.gdcvault.com/play/1017700/Designing), [entrevista sobre câmera e controles](https://www.thesixthaxis.com/2011/07/26/interview-thatgamecompany-on-journey/), [entrevista sobre areia, personagem e restrições](https://www.pushsquare.com/news/2012/02/interview_thatgamecompany_journey), [sound design de Journey](https://www.gamedeveloper.com/audio/the-sound-design-of-i-journey-i-).

## Sky: Children of the Light

### Evidência documentada

- A equipe experimentou durante anos, inclusive com um simulador de voo completo, antes de reduzir os controles a um conjunto acessível.
- Indicadores sutis comunicam alcance e velocidade, e os esquemas continuaram mudando após feedback real.
- Jenova Chen descreve aceleração como um “pulso” emocional e defende o design como orientação, não restrição.

### Leitura de game feel

- **Velocidade:** existe em estados expressivos — andar, impulso, planar, pousar — em vez de um único valor uniforme.
- **Aceleração:** o início é uma intenção clara; a estabilização é longa e fluida. O impulso é evento emocional, não simples multiplicador.
- **Desaceleração:** pousar e reduzir velocidade são transições, com feedback visual que explica a perda de energia.
- **Gravidade e salto:** gravidade baixa e sustentação comunicam um corpo feito de luz, mas pousos e animação preservam contato.
- **Câmera:** guia direção e leitura espacial, porém os relatos dos próprios ciclos de iteração mostram o risco de assistência excessiva retirar autonomia.
- **Head bob:** não sustenta o movimento; avatar, capa, trilha e enquadramento carregam a sensação.
- **Sensação:** leveza acessível. Pouco input produz uma resposta expressiva, sempre legível.

Fonte principal: [Apple Developer — Behind the Design: Sky](https://developer.apple.com/news/?id=zm47it7t).

## Outer Wilds

### Evidência documentada

- Planetas, jogador, nave e objetos participam de uma simulação física contínua; os corpos celestes são rigidbodies móveis e forças reais produzem efeitos como deriva e Coriolis.
- A simulação opera em passos fixos. A equipe preferiu manter consequências físicas sistêmicas em vez de falsificar planetas estáticos.
- No Interloper, baixa gravidade e gelo criam patinação; o relevo foi iterado para permitir que o jogador enxergasse a curvatura e previsse sua trajetória.
- Playtests revelaram a tensão entre jogadores que apreciavam domínio físico e jogadores interessados principalmente na narrativa.

### Leitura de game feel

- **Velocidade:** é resultado de força e momentum, não apenas de um controlador cinemático.
- **Aceleração/desaceleração:** o jogador sente continuidade porque precisa produzir e cancelar movimento; superfícies alteram fricção.
- **Gravidade e salto:** arco, tempo no ar e peso variam com o planeta. A coerência das regras torna variações extremas compreensíveis.
- **Câmera:** primeira pessoa estável em relação ao referencial local. O mundo pode girar e acelerar; por isso a câmera não deve adicionar ruído desnecessário.
- **Head bob:** não é a fonte principal de corporeidade; física, áudio, traje e referenciais locais cumprem esse papel.
- **Sensação:** presença física e curiosidade. A leveza é consequência de baixa gravidade, nunca ausência de regras.

Fontes: [Mobius — Breaking the Laws of Physics](https://www.mobiusdigitalgames.com/news/breaking-the-laws-of-physics), [Mobius — Skating on the Interloper](https://www.mobiusdigitalgames.com/news/skating-on-the-interloper), [Mobius — More Playtest Review](https://www.mobiusdigitalgames.com/news/more-playtest-review), [suporte oficial sobre a simulação](https://www.mobiusdigitalgames.com/supportforum.html).

## Síntese aplicada

O projeto não possui avatar visível para comunicar peso como Journey/Sky e não deve herdar a exigência física de Outer Wilds. Portanto:

1. Input inicia movimento imediatamente, mas velocidade se estabiliza por uma curva secundária.
2. Mudança de direção recebe mais resposta que manutenção de curso.
3. Soltar o input encerra o movimento suavemente em uma distância curta; não há patinação.
4. Momentum é contínuo no salto, mas não há correção aérea artificial.
5. Relevo determina a base vertical; oscilação procedural não substitui contato.
6. Câmera responde rápido a pequenos ajustes e transforma movimentos grandes em panorâmicas amortecidas.
7. Antecipação da câmera existe apenas durante aceleração, desaparecendo em velocidade constante.
8. Head bob convencional é excluído. A câmera recebe uma fração mínima da resposta corporal somente em deslocamento.
9. Gravidade reduzida serve ao arco contemplativo, mas pouso retorna a um referencial estável.

Nome interno do modelo: **Windborne Grounding**. Ele descreve contato confiável com o solo e leveza nas transições; não implica voo ou deslizamento.
