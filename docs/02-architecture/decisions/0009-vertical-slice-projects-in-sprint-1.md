# ADR 0009 — Vertical Slice de Projetos integrado à Sprint 1

**Status:** proposed  
**Data:** 2026-08-04

## Contexto

O roadmap separava um spike técnico na Sprint 1 e um Vertical Slice de Sobre Mim na Sprint 2. O planejamento atual precisa terminar a Sprint 1 com uma fatia vertical que prove também a utilidade profissional: visualizar um projeto real e abrir um link externo.

Sobre Mim é o primeiro planeta previsto pela Planet Bible e é o mais simples para a linguagem de arte. Porém, usar Sobre como Slice não valida diretamente case, deep link externo e a hipótese central de que a atmosfera melhora a apresentação de evidências profissionais.

## Opções consideradas

1. Manter Sprint 1 somente como spike e adiar a validação de produto. Menor risco imediato, mas duplica setup e posterga a decisão mais importante.
2. Fazer Sobre como Slice e anexar um projeto ao seu terminal. Mantém a ordem antiga, mas mistura taxonomia de conteúdo e reduz a clareza editorial.
3. Fazer Hub + Projetos como Slice dentro da Sprint 1. Valida a jornada profissional completa, mas exige um case real pronto e uma cena com passarela/pavilhão um pouco mais complexa.

## Decisão proposta

Adotar a opção 3: a Sprint 1 integra o spike técnico ao Vertical Slice **Hub — Limiar + Projetos — Oficina das Pontes**, com um único case real e link externo. Sobre Mim mantém sua identidade e será produzido depois do gate de reuso, conforme novo roadmap.

O Slice não cria todos os destinos nem universo contínuo. Ele possui um único planeta 3D ativo e rota 2D completa para o conteúdo.

## Consequências

- Valida acessibilidade, conteúdo, conversão e memória de marca no menor fluxo de produto completo.
- Exige definir e aprovar case/link externo antes do primeiro código.
- Amplia o risco de assets no Slice; o escopo é controlado por `FIRST_PLANET_SPEC.md` e `ASSET_ACQUISITION_PLAN.md`.
- Atualiza a ordem de produção, não a taxonomia de seis planetas nem as regras de `RULES.md`.
- Revisar após G4. Se o case não puder ser disponibilizado ou Projetos não couber nos budgets, voltar à opção 1 ou produzir um slice técnico sem alegar validação de produto.

