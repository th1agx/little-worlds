# Diretrizes para futuras IAs de implementação

**Objetivo:** preservar coerência e reduzir retrabalho. Estas diretrizes complementam `AGENTS.md`, `RULES.md`, `AI_WORKFLOW.md` e os ADRs; não os substituem.

## Protocolo antes de editar

1. Classifique a tarefa: conteúdo/DOM, mundo R3F, controle, asset, áudio, performance, QA ou infraestrutura.
2. Leia `AGENTS.md`, `RULES.md`, o task brief e apenas o pacote mínimo indicado em `CONTEXT_STRATEGY.md`.
3. Declare objetivo, não objetivo, estados, critérios e risco. Se duas fontes divergirem, pare e proponha ADR; não concilie silenciosamente.
4. Verifique se a mudança exige aprovação humana: licença, referência criativa, custo externo, deploy, privacidade, escopo ou decisão estrutural.
5. Faça o menor patch que prova a hipótese; não implemente “aproveitando” melhorias adjacentes.

## Como estruturar o trabalho

- Divida por contratos, não por arquivos: preferência, capacidade, input, cena, interação, terminal, conteúdo, asset pipeline e QA.
- Mantenha conteúdo e URL independentes do Canvas. O mundo pede/mostra conteúdo; DOM/rotas o possuem.
- Isole detalhes de renderer em componentes de cena; não permita que o terminal dependa de mesh/material específico.
- Use uma interface estreita para controlador e qualidade. Decida Rapier, pós ou novas bibliotecas somente após um spike que prove a lacuna.
- Render loop é imperativo e econômico; estado editorial/URL/preferências é React. Nunca atualizar estado React a cada frame.
- Uma cena é residente por vez. Toda troca define carga, cancelamento, erro, dispose e retorno seguro.

## Ordem de raciocínio para cada feature

1. Qual intenção humana ela serve?
2. Pode ser cumprida pela rota 2D sem 3D?
3. Como aparece no mundo sem HUD ou texto intrusivo?
4. Quais são os estados normal, falha, reduced motion, teclado/touch e saída?
5. Qual é o budget e a métrica que provará que não piorou?
6. Qual é a menor automação e qual teste humano ainda é necessário?

Se a resposta introduzir recompensa, bloqueio, precisão, urgência ou “mais coisas no cenário”, questionar a feature antes de codificar.

## Padrões de mudança

- Antes da segunda reutilização real, preferir composição local a framework interno, prop booleana em cascata ou registro genérico.
- Antes de asset final, usar placeholder legal e rastreável; depois trocar pelo candidato aprovado com o mesmo contrato.
- Antes de pós/partículas/música, validar composição, caminho e silêncio.
- Antes de mudar uma mecânica, medir comportamento e conforto; não decidir por preferência de desenvolvedor.
- Ao descobrir limitação técnica, registrar evidência e alternativas. Não aumentar budgets ou instalar pacote para ocultá-la.

## Proibições práticas

- Não criar conteúdo em textura/Canvas, modal flutuante sobre paisagem, HUD persistente, indicador de missão, loading artificial, inventário ou progressão.
- Não adicionar pulo como requisito de nível, sprint com FOV, head bob, roll, motion blur, physics “realista” ou colisão punitiva.
- Não baixar/usar asset, áudio, textura ou imagem sem registro de licença e aprovação; não commitar masters/fontes brutos em pasta pública.
- Não copiar referências, citar obras/artistas em prompt generativo ou tratar uma imagem de pesquisa como asset.
- Não instalar skill, plugin ou dependência porque parece útil. Documentar capacidade duplicada, risco e condição de adoção.

## Evidência de término

Toda entrega informa: arquivos/contratos alterados; docs/ADRs lidos; comandos/testes executados; devices/modos cobertos; screenshots/métricas quando aplicável; limites conhecidos; riscos residuais; próximo gate. Sem isso, a tarefa está em progresso, não concluída.

