# ADR 0002 — Terminal DOM com conteúdo equivalente

**Status:** accepted — 2026-08-04

## Contexto

Texto renderizado dentro de Canvas/textura é ruim para seleção, responsividade, SEO, teclado, zoom e leitores de tela.

## Decisão

O computador 3D é ponto de interação. Ao abrir, um terminal em DOM semântico ocupa a interface; as mesmas fontes de conteúdo alimentam rotas 2D canônicas.

## Consequências

- Acessibilidade e conteúdo deixam de depender de WebGL.
- Foco, pointer lock e transições Canvas/DOM exigem testes explícitos.
- A direção visual deve integrar o overlay sem simular uma tela ilegível no espaço.

