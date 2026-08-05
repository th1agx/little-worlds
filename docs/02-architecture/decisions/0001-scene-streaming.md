# ADR 0001 — Um planeta carregado por vez

**Status:** accepted — 2026-08-04

## Contexto

Um universo contínuo parece imersivo, mas multiplica downloads, memória, draw calls, física, testes e custo de autoria antes de provar o loop central.

## Decisão

Manter um Canvas persistente e montar apenas a cena do planeta atual. Viagens usam transição curta; o próximo destino pode ser preloaded sob condições favoráveis.

## Consequências

- Melhor budget e evolução independente por planeta.
- Links diretos e recuperação de falha mais simples.
- Não haverá voo livre contínuo no MVP; a transição precisa parecer intencional.

