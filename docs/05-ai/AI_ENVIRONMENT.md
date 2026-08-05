# Ambiente de IA versionado

**Estado:** ativo e reprodutível  
**Owner:** AI Workflow Architect + Lead Technical Director  
**Data de auditoria:** 2026-08-04

## Objetivo

O comportamento de IA específico deste produto fica no repositório: guardrails, documentação, Skills públicas auditadas e um lockfile por commit. Um clone encontra as Skills em `.codex/skills/`; o Codex CLI 0.146.0-alpha.9.2 as reconheceu nesse local via `codex debug prompt-input`.

Skills nativas do runtime do Codex não são vendorizadas: são capacidades da instalação do editor, não dependências do projeto. O projeto só depende de arquivos que vivem neste repositório.

## Estrutura

```text
.codex/
  skills/
    playwright/
    security-best-practices/
    security-threat-model/
    vercel-deploy/
    react-best-practices/
    composition-patterns/
  skills.lock.md
AGENTS.md
docs/05-ai/
  AI_ENVIRONMENT.md
  AI_STACK.md
  AI_WORKFLOW.md
  CONTEXT_STRATEGY.md
  SKILL_CATALOG.md
  SKILL_ROUTING.md
  MODEL_STRATEGY.md
```

## Instalação reproduzível

Pré-requisitos: Git, Python 3 e uma instalação atual do Codex. A aplicação Next.js, Node, pnpm e suas dependências **não** são pré-requisitos desta Sprint de IA.

1. Clonar o repositório.
2. Conferir o hash e o path de cada Skill em `.codex/skills.lock.md`.
3. Usar `skill-installer` do Codex com `--repo`, `--path`, `--ref <SHA>` e `--dest <repo>/.codex/skills`.
4. Não sobrescrever diretório existente; comparar o diff se uma atualização for aprovada.
5. Executar, na raiz, `codex debug prompt-input "revisar componente React"` e confirmar que os seis nomes declarados aparecem em `Available skills` com paths sob `.codex/skills/`.
6. Reiniciar Codex/VS Code após mudanças de Skills para renovar a descoberta em sessões abertas.

O instalador usado foi a Skill de sistema `skill-installer`; o lockfile registra as seis fontes, commits e licenças. Nenhuma Skill experimental foi instalada.

## Manutenção

- Revisão trimestral, e antes de qualquer atualização de Codex, framework, segurança ou deploy.
- Atualizar uma Skill é uma mudança de supply chain: verificar mantenedor, licença, `SKILL.md`, scripts/referências, diff do commit e conflito com `RULES.md`/ADRs.
- Fixar commit completo; atualizar `skills.lock.md`, catálogo, roteamento e evidência de descoberta no mesmo change set.
- Uma Skill sem uso por 90 dias é candidata à remoção. Não adicionar uma Skill para uma única tarefa mecânica.
- Não editar arquivos vendorizados para adaptar comportamento. Criar uma Skill local somente depois de workflow repetível aprovado e com ADR/owner.

## Diagnóstico de descoberta

| Sintoma | Causa provável | Ação |
| --- | --- | --- |
| Skill não aparece | diretório errado, `SKILL.md` ausente ou sessão antiga | conferir `.codex/skills/<id>/SKILL.md`, rodar `codex debug prompt-input`, reiniciar Codex |
| Skill aparece com nome diferente da pasta | o frontmatter `name` é a identidade carregada | usar o nome declarado no catálogo, não inferir pelo diretório |
| regras externas mudam apesar de commit fixado | Skill busca URL/branch móvel em runtime | não usar no core; substituir por snapshot aprovado ou Skill local futura |
| instruções contradizem o projeto | Skill é genérica ou não entende R3F/experiência contemplativa | `RULES.md`, ADRs e task brief prevalecem; remover da rota se conflito persistir |

## Resultado da validação

- Git foi inicializado nesta Sprint; ainda não há commit inicial, portanto a primeira confirmação humana deve incluir todos os arquivos de fundação e ambiente.
- As seis Skills lockadas foram reconhecidas diretamente no workspace pelo CLI. Não é necessário copiá-las para `C:\Users\thiag\.codex\skills`.
- O Codex não expõe, sem executar uma turn real, um trace autoritativo de “qual Skill foi ativada”. Os testes de roteamento abaixo validam descoberta e correspondência de gatilho; a primeira PR de cada categoria deve registrar a ativação observada e corrigir o roteamento se necessário.

## Limites intencionais

O ambiente não instala Node, bibliotecas da aplicação, Playwright browsers, Vercel CLI, plugins, MCPs de terceiros, assets ou serviços. Isso pertence aos gates aprovados da Sprint 1, não à preparação de Skills.

