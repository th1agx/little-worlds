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

