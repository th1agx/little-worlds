# ADR 0010 — Validação controlada de locomoção no Vertical Slice

**Status:** proposed  
**Data:** 2026-08-04

## Contexto

O ADR 0007 propõe retirar pulo do controle primário e substituir sprint por passo rápido. Essa escolha reduz linguagem de jogo e risco de colisão, mas ainda não foi validada com visitantes. Um pulo baixo com bom feedback pode aumentar a sensação de liberdade; passo rápido excessivo pode romper o ritmo contemplativo.

A questão não é “pulo é jogo?”; é se cada controle aumenta conforto/autonomia sem transformar o percurso em habilidade, atalho ou pressão.

## Opções consideradas

1. Remover pulo definitivamente antes do teste. Menor custo, mas decide por teoria e pode frustrar expectativa motora básica.
2. Ativar pulo pleno e corrida no Slice. Gera dados de uso, mas altera linguagem, nível e superfície de bugs cedo demais.
3. Testar variantes controladas, sem conteúdo dependente, e decidir por evidência. Exige instrumentação/tempo de pesquisa, mas preserva reversibilidade.

## Decisão proposta

Adotar a opção 3.

- Caminhada é o único controle obrigatório, 1,6–2,2 m/s percebidos.
- Passo rápido permanece 1,25–1,45×, sem stamina, shake, respiração, FOV kick ou mudança de câmera; hold/toggle configurável.
- Nenhum caminho, item, atalho ou recovery exige pulo.
- O Slice compara uma variante A sem pulo com uma variante B de **salto suave experimental**, disponível por configuração de pesquisa e explicada ao participante pelo moderador, não promovida como objetivo.
- Variante B, se implementada: salto único, baixo (alvo inicial 0,18–0,25 m), sem double jump, sem impulso horizontal adicional, sem air control que permita correção de plataforma e sem queda punitiva. Pode receber feedback visual/sonoro curto e discreto; reduced motion reduz o feedback.

Após sessões observadas, o pulo só pode ser promovido a preferência pública se houver evidência de liberdade/conforto sem aumento de confusão, enjoo, leitura de jogo, falhas de colisão ou tempo de percurso. Caso contrário, é removido; rampas/step offset resolvem microdesníveis.

## Consequências

- O ADR 0007 continua válido como direção primária: pulo não é controle principal e sprint não existe.
- A implementação de controlador deve expor a capacidade de pulo como configuração reversível, não como requisito de level design.
- A decisão final requer registrar tempo até terminal, correções de rota, tentativas de pulo, recovery, desconforto e percepção de liberdade/jogo.
- Se o spike revelar necessidade de física complexa apenas para o pulo, a variante B é interrompida; não se adota dependência pesada para manter o experimento.

## Parâmetros do protótipo técnico

**Estado:** implementado como experimento reversível em 2026-08-04; a decisão de produto continua proposta.

- Tecla `Espaço`, apenas enquanto o jogador está no solo e com a preferência `Salto experimental` ativa.
- Velocidade vertical inicial de `2,05 m/s`, gravidade de `10 m/s²` e pico aproximado de `0,21 m`.
- Sem impulso horizontal adicional, double jump, bunny hop, FOV kick, roll ou head bob.
- Aterrissagem usa apenas compressão de câmera de até `0,035 m`, amortecida em poucos frames, e motes geométricos provisórios; ambos são removidos em reduced motion.
- O mundo técnico usa chão e limites analíticos; rampas e degraus atuais são visualização de teste. Rapier permanece fora do escopo até haver evidência de insuficiência.

## Calibração após teste humano

**Registro:** 2026-08-04

Os primeiros testes relataram câmera rígida, parada abrupta, perda de velocidade horizontal no salto e leitura excessiva de FPS. O protótipo passa a testar um único modelo chamado internamente de **grounded glide**:

- velocidade horizontal persistente, com aceleração exponencial curta e desaceleração mais longa;
- caminhada-alvo de `1,75 m/s` e passo rápido de `1,32×`, sujeitos a nova calibração humana;
- momentum horizontal preservado integralmente durante o salto, sem air steering;
- rotação da câmera amortecida e pequeno atraso visual de posição, sem FOV kick, roll ou head bob convencional;
- micro-oscilação vertical máxima de `0,004 m`, somente em movimento e removida em reduced motion.

Não foi adicionada uma segunda variante: neste ciclo não existe outra solução com evidência suficiente para justificar uma feature flag. A próxima comparação deve ocorrer apenas se o grounded glide ainda produzir dois candidatos plausíveis após teste humano.

## Segunda calibração — Grounded Hover

**Registro:** 2026-08-04 · **Substitui os parâmetros de grounded glide acima; preserva seu valor histórico.**

Novos testes humanos indicaram que a inércia ainda comunicava deslizamento, a oscilação era imperceptível e o salto permanecia tímido. A identidade em avaliação passa a ser **Grounded Hover**:

- o corpo lógico mantém `0,08 m` de folga sobre a superfície amostrada e acompanha mudanças de altura com amortecimento;
- a respiração vertical combina três ciclos longos não sincronizados, com amplitude corporal máxima aproximada de `0,055 m`; a câmera recebe somente `34%` desse deslocamento;
- resposta inicial horizontal mais rápida, estabilização progressiva e parada suave porém curta, com velocidade-alvo de exploração recalibrada para `2,2 m/s`;
- passo rápido de `1,36×`, tratado como travessia determinada e sem alterações de FOV/câmera;
- gravidade experimental reduzida para `5,8 m/s²` e impulso vertical de `2,7 m/s`, produzindo arco aproximado de `0,63 m` e cerca de `0,93 s` no ar;
- momentum horizontal continua congelado durante o arco, sem air steering;
- câmera antecipa o deslocamento horizontal em poucos centímetros e recupera suavemente; não há roll nem head bob convencional.

O painel de desenvolvimento mede altura de hover, velocidade vertical, amplitude instantânea, estado do hover e intensidade de amortecimento. Não há modelo B neste ciclo porque nenhuma segunda proposta atingiu o mesmo nível de coerência. A identidade continua experimental até nova avaliação humana.

## Terceira calibração — Windborne Grounding

**Registro:** 2026-08-04 · **Base:** pesquisa documentada em `docs/06-research/MOVEMENT_REFERENCES.md`.

O modelo combina apenas princípios: transições e leitura de superfície de Journey, pulso de aceleração e acessibilidade de Sky, continuidade de momentum e referencial estável de Outer Wilds.

- resposta horizontal em fases: início rápido, estabilização mais calma, resposta específica para mudança de direção e parada curta amortecida;
- velocidade-alvo e passo rápido permanecem autorais e sujeitos a teste; nenhum valor dos jogos pesquisados foi reproduzido;
- folga lógica sobre o solo reduzida e oscilação corporal contida; a câmera recebe somente uma fração mínima durante deslocamento;
- antecipação horizontal depende da aceleração, não da velocidade constante, evitando leitura de deslizamento;
- pequenos ajustes de olhar respondem rapidamente; panorâmicas grandes recebem mais amortecimento;
- salto preserva momentum e baixa gravidade experimental, mantendo pouso e orientação estáveis.

Grounded Hover permanece como registro histórico, mas Windborne Grounding é a variante ativa. Não há cópia de código, curvas ou parâmetros internos das referências.
