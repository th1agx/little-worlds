# Política de segurança

**Estado:** bootstrap técnico · **Atualizado:** 2026-08-04

## Escopo atual

Esta versão é uma experiência estática local, sem autenticação, formulários, APIs, analytics, persistência ou segredos. Portanto, não coleta dados do visitante e não possui endpoint público próprio além do servidor de entrega da aplicação.

## Regras obrigatórias para evolução

- Segredos permanecem somente em variáveis de ambiente server-side; nunca em `NEXT_PUBLIC_*`, assets ou repositório.
- Assets externos são ingeridos e registrados no ledger; não são hotlinked em runtime.
- Formularios, analytics, APIs, uploads ou integrações externas exigem revisão de privacidade e um threat model antes de implementação.
- Dependências são adicionadas de forma deliberada, com lockfile versionado e revisão de scripts de instalação de terceiros.

## Reporte

Não há canal público de reporte nesta fase. Até que exista uma operação pública, reporte vulnerabilidades ao mantenedor do repositório de forma privada e não publique detalhes exploráveis.
