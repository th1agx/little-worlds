# ADR 0005 — Terminal DOM com apresentação diegética

**Status:** proposed — 2026-08-04

## Contexto

O ADR 0002 escolheu DOM semântico por acessibilidade, SEO e legibilidade. A direção criativa da Sprint 0.5 proíbe modal flutuante e estabelece que o computador físico é a interface.

## Decisão proposta

Manter DOM como tecnologia, mas apresentá-lo somente após aproximação da câmera à tela física. A moldura do computador permanece visível no início/fim da transição; a interface ocupa a viewport e herda material, luz e som daquele computador. Não existe card solto sobre a paisagem.

## Consequências

- Preserva acessibilidade e a metáfora diegética.
- Exige transição de foco/pointer lock cuidadosamente coreografada.
- A versão 2D usa a mesma interface sem fingir presença física.
- ADR 0002 permanece válido; este ADR restringe sua apresentação.

