# Estratégia de modelos — Luna, Terra e Sol

**Regra de escolha:** usar o menor modelo capaz de produzir evidência suficiente. Escalar por ambiguidade, blast radius, segurança/licença ou duas tentativas sem diagnóstico, não por ansiedade.

| Modelo | Papel | Exemplos neste projeto | Não usar para |
| --- | --- | --- | --- |
| 🌙 Luna | operações fechadas, repetitivas e verificáveis | inventariar Skills/links, validar lockfile, checar manifests de assets já aprovados, executar checklist de PR, localizar imports ou gerar primeira lista de casos de teste | aprovar arte, licença, arquitetura, performance sistêmica ou merge |
| 🌍 Terra | produção padrão com contrato claro | componente Next/R3F já especificado, testes Playwright, rota 2D, investigação local de render, pesquisa técnica moderada, revisão de PR comum | resolver conflito entre bíblias, escolher dependência cara ou concluir problema complexo sem evidência |
| ☀️ Sol | decisão difícil, síntese e responsabilidade alta | ADR de física/locomoção, diagnóstico de leak de memória, gate de vertical slice, auditoria de licença/privacidade, revisão de Art/Experience, threat model e pré-release | renomear arquivos, rodar inventário, preencher ledger ou executar checklist mecânico |

## Receitas de roteamento

- Criar terminal acessível: Terra + `vercel-react-best-practices`; agregar Playwright apenas para validar o fluxo. Escalar a Sol se foco/pointer lock conflitar com UX ou arquitetura.
- Estudar pulo baixo no Slice: Sol para ADR/critério; Terra para spike; Luna para tabular as observações; decisão humana continua necessária.
- Otimizar uma cena que excede budget: Terra coleta renderer/frame data; Sol sintetiza somente se duas hipóteses falharem ou houver causas cruzadas; device físico encerra a evidência.
- Adicionar formulário/analytics: Sol + `security-threat-model` antes de código; Terra + `security-best-practices` para implementação; Luna para checklist de regressão.
- Atualizar uma Skill: Terra coleta diff/licença/compatibilidade; Sol aprova caso haja script, mudança de política ou conflito; Luna confirma lockfile e descoberta.

## Regras operacionais

- Uma tarefa comum usa no máximo duas Skills; modelo não é Skill e não conta nesse limite.
- Sol recebe síntese, critérios e links — nunca logs brutos grandes.
- Luna sempre recebe formato de saída verificável e não decide a recomendação final.
- Terra escala após duas tentativas fundamentadas sem causa clara, ou imediatamente em risco legal, segurança, privacidade ou decisão difícil de reverter.
- Nenhum modelo autoriza sozinho compra, download de asset, deploy, mudança de identidade ou aceite de gate.

