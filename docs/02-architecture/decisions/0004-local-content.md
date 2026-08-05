# ADR 0004 — Conteúdo local e versionado

**Status:** accepted — 2026-08-04

## Decisão

Projetos, biografia, tecnologias e certificados vivem em MDX/manifestos tipados no repositório. CMS remoto fica adiado.

## Consequências

- Preview, revisão, SEO e rollback acompanham Git.
- Atualização exige deploy, aceitável para frequência esperada.
- Se surgir autoria não técnica/frequente, comparar CMS headless sem quebrar o contrato de conteúdo.

