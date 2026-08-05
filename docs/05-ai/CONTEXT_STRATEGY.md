# Estratégia para minimizar contexto

**Estado:** política ativa para humanos e agentes

## Regra principal

Começar por `AGENTS.md` + `docs/07-sprint-0.5/RULES.md` + um task brief. Carregar documentos por necessidade, não a pasta inteira. ADRs são índice de decisões; guias temáticos são detalhes consultados apenas quando tocados.

## Pacotes mínimos

| Tipo de tarefa | Ler |
| --- | --- |
| página/terminal | `RULES`, `EXPERIENCE_BIBLE`, `UI_UX_ACCESSIBILITY`, ADRs 0002/0005, task context |
| cena/planeta | `RULES`, `ART_BIBLE`, arquivo do planeta, `PERFORMANCE`, ADRs 0001/0006 |
| controle/física | `RULES`, `EXPERIENCE_BIBLE`, `ARCHITECTURE`, `PERFORMANCE`, ADR 0007 |
| asset | `RULES`, `ASSET_BIBLE`, `ART_BIBLE`, `PERFORMANCE`, asset record |
| áudio | `RULES`, `EXPERIENCE_BIBLE`, arquivo do planeta, licença do item |
| conteúdo | `RULES`, `EXPERIENCE_BIBLE`, arquivo do planeta, content schema futuro |
| deploy/telemetria | `ARCHITECTURE`, `QUALITY`, ADRs e privacy/threat model futuro |
| mudança estrutural | `ARCHITECTURE`, `REPOSITORY_STRUCTURE`, ADR index e ADRs afetados |

## Hierarquia de verdade

1. Requisito atual do usuário/issue.
2. ADR aceito.
3. Visão e guardrails.
4. Guia temático.
5. Código/testes atuais.
6. Pesquisa externa datada.

Conflito entre níveis vira pergunta ou novo ADR; não “fundir” silenciosamente.

## Context files

- Cada tarefa relevante usa `docs/templates/TASK_CONTEXT_TEMPLATE.md` copiado para a issue/PR, não mantido como diário infinito.
- Handoff máximo: objetivo, arquivos alterados, decisões, comandos/evidências, riscos e próximo passo.
- Logs brutos, screenshots e relatórios grandes ficam como artefatos; docs guardam conclusão e link.
- Research notes incluem data e fonte. Informações voláteis (preço, versões, licenças) são revalidadas.

## Disciplina de documentação

- Um conceito tem uma fonte de verdade; outros documentos apontam para ela.
- ADR curto para “por quê”; guia para “como”; checklist para “está pronto?”.
- Não colar documentação de bibliotecas no repo. Registrar decisão e link oficial.
- Arquivar/supersede, não manter duas regras ativas.
- Revisar `AGENTS.md` para permanecer curto; instrução específica pertence perto do feature apenas quando ele existir.

## Disciplina de sessão de IA

1. Classificar tarefa e montar pacote mínimo.
2. Inspecionar apenas arquivos impactados e vizinhos diretos.
3. Usar no máximo duas skills por tarefa salvo justificativa.
4. Buscar documentação externa somente para fatos atuais/incertos.
5. Fazer patch pequeno, validar proporcionalmente e resumir evidência.
6. Atualizar ADR/guia somente se o contrato mudou.

## Métricas de saúde

- Número de docs carregados por tarefa (alvo usual: 2–5).
- Handoffs que exigem nova explicação (alvo: raro).
- Decisões conflitantes descobertas depois do código (alvo: zero).
- ADRs sem owner/condição de revisão e docs sem data quando voláteis.
- Skills instaladas mas não usadas em 90 dias: candidatas à remoção.
