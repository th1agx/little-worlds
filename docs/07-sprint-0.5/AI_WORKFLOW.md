# AI Workflow

**Estado:** workflow obrigatório para trabalho assistido por IA  
**Owner:** AI Workflow Architect + Lead Engineer

## 1. Princípio

IA acelera pesquisa, comparação, execução e verificação. Não decide sozinha identidade, licença, gosto, prioridade ou aceite. Toda saída é hipótese até ser confrontada com `RULES.md`, bíblias, ADRs, fontes e evidência executável.

## 2. Fluxo oficial

```text
IDEIA
  ↓ brief e emoção
PESQUISA
  ↓ fontes primárias + alternativas
ARQUITETURA
  ↓ decisão/ADR + critérios
IMPLEMENTAÇÃO
  ↓ mudança pequena e rastreável
QA
  ↓ testes + browser + devices + budgets
REVIEW
  ↓ técnica + criativa + acessibilidade + licença
MERGE
  ↓ evidências + docs + handoff
```

Nenhuma etapa é pulada porque a IA “parece confiante”.

## 3. Seleção de modelo

A OpenAI descreve [GPT-5.6 Sol](https://help.openai.com/en/articles/20001325-a-preview-of-gpt-56-sol-terra-and-luna) como o modelo flagship/mais capaz, Terra como opção forte de menor custo e Luna como a mais rápida/econômica. A seleção abaixo aplica essa divisão ao projeto.

### Sol — decisão difícil e responsabilidade alta

Usar quando erro causa retrabalho grande, conflito entre áreas ou risco de qualidade:

- arquitetura nova ou ADR com várias forças;
- revisão final de Art/Experience/Planet Bible;
- debugging complexo de render, física, memória ou concorrência;
- auditoria de performance com múltiplas causas;
- revisão de segurança/licença/privacidade de alto impacto;
- plano de migração de dependência crítica;
- síntese de pesquisa contraditória;
- review pré-release e investigação de regressão difícil.

Não usar Sol para renomear arquivos, verificar links ou tarefas mecânicas.

### Terra — padrão de produção

Usar como default na maior parte do desenvolvimento:

- implementação de feature com ADR/critério claro;
- criação e manutenção de testes;
- pesquisa técnica de escopo moderado;
- componentes React/R3F e conteúdo;
- refatoração local;
- documentação temática;
- triagem de assets, bibliotecas e issues;
- revisão de PR comum e correção de bugs delimitados.

Escalar para Sol se houver duas tentativas sem causa clara, decisão difícil de reverter, risco de segurança ou conflito entre bíblias.

### Luna — velocidade e operações mecânicas

Usar para tarefas curtas, repetitivas e verificáveis:

- localizar arquivos/símbolos e resumir diffs pequenos;
- validar links e inventários;
- preencher registros a partir de dados já aprovados;
- categorizar assets/fontes sem decidir seleção final;
- gerar primeira lista de casos de teste;
- checar convenções, spelling e metadados;
- executar checklist e reportar falhas;
- preparar handoff factual.

Luna não aprova arte, arquitetura, licença, segurança, performance nem merge sozinha.

## 4. Matriz de roteamento

| Trabalho | Modelo inicial | Escalação |
| --- | --- | --- |
| conceito/identidade | Sol | revisão humana obrigatória |
| ADR/arquitetura | Sol | Product/Tech approval |
| implementação comum | Terra | Sol após impasse/alto risco |
| QA funcional | Terra | Sol para causa sistêmica |
| inventário/links | Luna | Terra se houver ambiguidade |
| seleção de asset | Terra | Sol + Art Director no final |
| licença/segurança | Sol | revisão humana/legal quando necessário |
| performance | Terra para coleta; Sol para síntese difícil | devices reais |
| review de merge | Terra | Sol em mudanças estruturais/release |

## 5. Etapas em detalhe

### Ideia

Entrada mínima: problema, emoção, público, não objetivo, planeta/rota, budget e forma de validar. A IA deve questionar se a ideia introduz linguagem de jogo, duplicação ou objeto sem função.

Saída: task brief de uma página. Modelo: Terra; Sol se alterar identidade/escopo.

Gate: passa no teste de veto de `RULES.md`.

### Pesquisa

- Usar fontes primárias/oficiais para tecnologia, licença e produto.
- Separar fato, inferência e preferência.
- Registrar data para informação volátil.
- Comparar no máximo 3–5 alternativas úteis.
- Nunca baixar asset só para “ver depois”.
- Nunca usar imagem de referência como asset sem licença.

Saída: decisão pesquisada, fontes, incertezas e recomendação. Terra; Luna coleta catálogo; Sol sintetiza conflito.

### Arquitetura

- Ler apenas pacote mínimo de contexto.
- Identificar ADR afetado e blast radius.
- Escrever critérios observáveis e plano de reversão.
- Rejeitar dependência/abstração sem problema comprovado.

Saída: design note/ADR e plano. Sol para decisão nova; Terra para extensão de padrão aceito.

### Implementação

- Mudança pequena, sem “melhorias” fora de escopo.
- Preservar trabalho do usuário e licenças.
- Usar código apenas depois de Art/Experience gate quando visual.
- Atualizar docs junto do contrato, não depois.
- Não declarar conclusão sem executar validação.

Saída: patch + testes + notas. Terra por padrão.

### QA

- Unit/component/E2E conforme risco.
- Browser real para Canvas, console, foco e pointer lock.
- Desktop/mobile/reduced motion/low profile.
- Screenshots em pontos definidos, sem aprovar arte só por snapshot.
- Performance e asset budgets comparados com baseline.
- Teste manual de paz/clareza/conforto.

Saída: evidência e falhas reproduzíveis. Luna executa checklist; Terra investiga; Sol trata sistemas difíceis.

### Review

Quatro lentes, por pessoas/turnos distintos quando risco alto:

1. Técnica — corretude, lifecycle, performance, testes.
2. Criativa/UX — Art Bible, ritmo, interface, anti-jogo.
3. Inclusão — teclado, foco, motion, touch, rota 2D.
4. Proveniência — licença, atribuição, asset/IA.

Revisor não reescreve escopo sem registrar. Sol para release/ADR; Terra para PR comum.

### Merge

Requer CI verde, evidência visual quando aplicável, docs/ADR atualizados, licenças presentes e riscos residuais explícitos. IA pode preparar resumo; humano autorizado decide merge/deploy.

## 6. Skills públicas

### Usar como core

| Skill | Quando | Modelo sugerido | Guardrail |
| --- | --- | --- | --- |
| `react-best-practices` — [Vercel Labs](https://github.com/vercel-labs/agent-skills) | escrever/revisar React/Next | Terra; Sol em arquitetura | Canvas client-only é exceção justificada, não erro automático |
| `web-design-guidelines` — Vercel Labs | terminal, landing, settings, UX/a11y | Terra | `RULES` e experiência diegética prevalecem sobre estética genérica |
| `composition-patterns` — Vercel Labs | APIs compartilhadas/refatoração | Terra | só após segunda reutilização real |
| `playwright` — OpenAI curated | E2E, screenshots, browser flows | Terra/Luna | GPU/OS fixos para baseline; device real complementa |
| `security-best-practices` — OpenAI curated | dependências, headers, input, review | Terra/Sol | não substitui threat model |
| `security-threat-model` — OpenAI curated | antes de formulário/analytics | Sol | executar quando superfície existir |
| `vercel-deploy` — OpenAI curated | preview/release autorizados | Terra | nunca deploy implícito durante review |

### Usar sob demanda

| Skill/capacidade | Uso | Limite |
| --- | --- | --- |
| `browser` | inspecionar app local, interação, console e screenshot | não substitui Playwright/medição física |
| `openai-docs` | fatos atuais sobre OpenAI/Codex/modelos | não usar para stack R3F |
| `imagegen` | concept frames próprios e variações de atributos | nunca asset final automático; anti-cópia/proveniência |
| `skill-installer` | instalar skill já auditada e aprovada | pin por origem/commit; nunca wildcard |
| `skill-creator` | workflow local repetível estabilizado | não cristalizar processo experimental |
| `sentry` | integração após aprovação de observabilidade | privacy/threat model primeiro |

### Catálogo público reconfirmado

O catálogo curado `openai/skills` foi consultado em 2026-08-04. Entre as opções relevantes, `playwright-interactive` serve a exploração visual iterativa durante desenvolvimento, enquanto `playwright` permanece a escolha para testes reproduzíveis/CI; não instalar ambos sem necessidade clara. As famílias Figma só entram se Figma virar fonte de verdade aprovada. `screenshot`, `gh-fix-ci`, `gh-address-comments`, `sentry` e `vercel-deploy` são acionados por workflows específicos, não ficam ativos como contexto permanente. O catálogo não oferece hoje uma skill oficial dedicada a Three.js/R3F; por isso o projeto prefere documentação oficial, bíblias locais e eventual skill própria após estabilização.

### Não usar como stack integral

`threejs-game-director` e o pacote completo de Three.js game skills: linguagem de game/AAA/HUD, scaffold Vite/vanilla e provedores externos conflitam com o produto. `threejs-debug-profiler` ou `threejs-qa-release` podem ser auditados isoladamente após o vertical slice; Playwright e docs oficiais continuam prioridade.

## 7. IA para arte e assets

### Permitido

- Explorar combinações de paleta, luz, composição e material por descritores.
- Criar concept art interno não publicado.
- Gerar textura/forma candidata com termos comerciais claros.
- Comparar candidatos com checklist.
- Produzir variações de busca e asset brief.

### Obrigatório

- Prompt sem nome de artista/franquia/obra.
- Registrar modelo, versão, data, prompt, inputs e termos aplicáveis.
- Revisão de similaridade e IP por humano.
- Inspeção de topology/UV/material/performance para 3D.
- Asset final recebe o mesmo ledger de asset comprado.

### Proibido

- Publicar output cru como asset final.
- Usar imagem protegida como referência de edição sem direito.
- Pedir réplica ou “no estilo de”.
- Ocultar origem generativa.
- Aceitar licença ambígua.

## 8. Controle de contexto

- `AGENTS.md` + `RULES.md` + task brief + 2–4 docs específicos.
- No máximo duas skills por tarefa comum.
- Sol recebe síntese e decisões, não logs brutos desnecessários.
- Luna recebe tarefas fechadas com formato de saída verificável.
- Artefatos grandes ficam fora do prompt; incluir conclusão e links.
- Cada handoff: objetivo, mudanças, evidências, riscos e próximo passo.

## 9. Critério de parada

A IA deve parar e pedir decisão humana quando: referência criativa muda identidade; licença não é clara; duas bíblias conflitam; ação cria custo externo/deploy; há risco legal/privacidade; ou alternativas produzem experiências materialmente diferentes.
