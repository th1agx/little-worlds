# Skills lockfile

**Escopo:** Skills de projeto descobertas pelo Codex a partir de `.codex/skills/`.  
**Atualizado:** 2026-08-04  
**Política:** não atualizar automaticamente. Uma atualização exige auditoria de diff, licença, compatibilidade e novo commit deste lockfile.

| Diretório local | Nome declarado | Origem fixa | Path upstream | Licença | Estado |
| --- | --- | --- | --- | --- | --- |
| `playwright` | `playwright` | `openai/skills@49f948faa9258a0c61caceaf225e179651397431` | `skills/.curated/playwright` | Apache-2.0 | instalado |
| `security-best-practices` | `security-best-practices` | `openai/skills@49f948faa9258a0c61caceaf225e179651397431` | `skills/.curated/security-best-practices` | Apache-2.0 | instalado |
| `security-threat-model` | `security-threat-model` | `openai/skills@49f948faa9258a0c61caceaf225e179651397431` | `skills/.curated/security-threat-model` | Apache-2.0 | instalado; uso tardio |
| `vercel-deploy` | `vercel-deploy` | `openai/skills@49f948faa9258a0c61caceaf225e179651397431` | `skills/.curated/vercel-deploy` | MIT | instalado; ação externa explícita |
| `react-best-practices` | `vercel-react-best-practices` | `vercel-labs/agent-skills@7c180d9044c9ae2b442b567aad4e42a28dd5ed62` | `skills/react-best-practices` | MIT, declarado no README upstream | instalado |
| `composition-patterns` | `vercel-composition-patterns` | `vercel-labs/agent-skills@7c180d9044c9ae2b442b567aad4e42a28dd5ed62` | `skills/composition-patterns` | MIT, declarado no README upstream | instalado; uso sob demanda |

## Reprodução

Use o instalador do Codex com o hash acima e destino absoluto da raiz do clone + `.codex/skills`. Não use `main`, tags móveis, wildcard ou `npx skills add` sem ref fixado. Os comandos exatos, pré-requisitos e a validação estão em [`docs/05-ai/AI_ENVIRONMENT.md`](../docs/05-ai/AI_ENVIRONMENT.md).

## Exclusões deliberadas

- `web-design-guidelines` da Vercel não está instalado: a Skill fixa busca, em cada execução, regras da branch móvel `main` de `vercel-labs/web-interface-guidelines`. O conteúdo executado não seria reproduzível a partir deste lockfile.
- `playwright-interactive`, `threejs-*`, Figma, Sentry e plugins amplos não entram no núcleo por sobreposição, dependência externa, escopo prematuro ou incompatibilidade arquitetural.
- Skills de sistema do Codex (`skill-installer`, `openai-docs` etc.) pertencem ao runtime da ferramenta e não são parte do produto. Elas não são dependências do projeto nem são copiadas aqui.

