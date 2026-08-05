# Biblioteca de prompts

**Estado:** templates aprovados; preencher colchetes antes de usar

## Como usar

1. Anexe somente os documentos listados no prompt.
2. Substitua todos os `[campos]`.
3. Declare explicitamente se a tarefa autoriza código, downloads, instalação, deploy ou escrita externa.
4. Exija evidência observável, não adjetivos (“premium”, “bonito”, “otimizado”).
5. Para tarefa criativa, proíba nomes de artistas/obras em prompts generativos.

### Cabeçalho comum

```text
Projeto: portfólio contemplativo em primeira pessoa.
Constituição: docs/07-sprint-0.5/RULES.md.
Objetivo: [resultado].
Não objetivo: [fora de escopo].
Leia somente: [arquivos].
Restrições: [performance, a11y, licença, prazo, sem código etc.].
Critérios de aceite: [lista observável].
Antes de agir, identifique conflitos com RULES/ADRs e proponha resolução.
```

## Arquitetura

### Avaliar uma decisão

```text
Use Sol. Atue como Technical Architect. Avalie [decisão] para [problema].
Leia RULES.md, ARCHITECTURE.md, TECH_STACK.md, PERFORMANCE.md e ADRs afetados.
Compare no máximo quatro alternativas por: adequação ao produto, complexidade,
performance web, acessibilidade, reversibilidade, manutenção e custo. Diferencie
fato, inferência e preferência. Recomende uma opção, condição de revisão e plano
de validação. Se for difícil de reverter, escreva um ADR proposto. Não implemente.
```

### Revisar arquitetura existente

```text
Use Sol. Procure violações de limites, dependências duplicadas, estado por frame
em React, lifecycle/disposal e acoplamento Canvas↔conteúdo. Ordene achados por
impacto, cite arquivos/linhas, descreva evidência e correção mínima. Não refatore.
```

## Frontend

### Implementar interface do terminal

```text
Use Terra com react-best-practices e web-design-guidelines. Implemente [tela]
usando o mesmo conteúdo da rota 2D. Leia RULES, ART_BIBLE, EXPERIENCE_BIBLE,
UI_UX_ACCESSIBILITY e ADR 0005. Preserve foco, teclado, zoom, URL e reduced motion.
Não crie modal/card genérico, typing effect, HUD ou conteúdo Canvas-only. Entregue
testes de componente e evidência em 320 px, desktop, teclado e 200% zoom.
```

### Review de interface

```text
Use Terra. Audite [rota/componente] por clareza, densidade, foco, saída, contraste,
touch, motion, equivalência 2D e coerência diegética. Liste primeiro bloqueadores,
depois melhorias. Não altere estética fora da Art Bible e não implemente sem pedido.
```

## Three.js

### Planejar uma cena

```text
Use Sol para o plano e Terra para execução futura. Leia RULES, ART_BIBLE,
PLANET_BIBLE/[planeta], ASSET_BIBLE e PERFORMANCE. Transforme o planeta em um
scene brief com spawn, três planos, caminho, construção, computador, luz, fog,
áudio, objetos e profiles low/high. Inclua budgets e lista de assets. Rejeite
efeitos/objetos sem função. Não escreva código nem baixe assets nesta etapa.
```

### Diagnosticar render

```text
Use Terra; escale para Sol após duas hipóteses falharem. Diagnostique [sintoma]
por reprodução mínima, renderer info, draw calls, triângulos, materiais, texturas,
shaders, disposal e frame timing. Colete evidência antes de alterar. Proponha a
menor correção e valide low/high/mobile. Não reduza qualidade sem comparar frames.
```

## React Three Fiber

### Componente de mundo

```text
Use Terra com react-best-practices. Implemente [componente R3F] respeitando lifecycle,
reuso, instancing, carregamento e disposal. Não atualize React state por frame,
não crie materiais/geometrias repetidamente e não acople ao conteúdo do terminal.
Inclua contrato público, fallback e teste proporcional. Meça antes/depois.
```

### Review R3F

```text
Revise [arquivos] procurando useFrame caro, allocations, re-renders, loaders duplicados,
sombras/luzes excessivas, mutação sem cleanup, Suspense sem fallback e imports que
incham bundle. Cite evidência e impacto; não aplique otimização especulativa.
```

## Performance

### Auditoria de cena

```text
Use Terra para coleta e Sol para síntese se houver múltiplos gargalos. Leia
PERFORMANCE e ASSET_BIBLE. Meça [cena] nos perfis [devices] durante spawn→caminhada→
terminal→saída→viagem. Reporte p50/p95 frame, stutter, draw calls, triângulos,
texturas/GPU estimada, bytes e main thread. Compare budgets, identifique causa e
proponha correções ordenadas por ganho/risco. Preserve a composição low.
```

### Budget de asset

```text
Use Luna para inventário e Terra para decisão. Para cada asset fornecido, registre
bytes, triângulos, meshes, materiais, texturas, dimensões, animações, licença e uso.
Marque pass/fail contra ASSET_BIBLE/PERFORMANCE. Não otimize ou converta sem autorização.
```

## QA

### Plano de testes

```text
Use Terra com playwright. Para [feature], derive testes de unidade, componente, E2E,
a11y, visual, performance e exploratório a partir dos critérios. Inclua Chromium,
WebKit, keyboard, touch, reduced motion, WebGL failure e profile low quando relevantes.
Separe o que é automatizável do que exige percepção humana. Não implemente ainda.
```

### Execução de smoke test

```text
Use Luna/Playwright para executar a checklist já aprovada. Não invente novos critérios.
Registre comando, ambiente, resultado, screenshot/trace e erro reproduzível. Em falha,
pare após coletar evidência; Terra investigará a causa.
```

## Review

### Review técnico e criativo

```text
Use Sol para release/ADR; Terra para PR comum. Revise o diff contra RULES, ADRs,
Art/Experience/Planet Bible e critérios da issue. Priorize bugs, regressões de a11y,
performance, licença e desvios de identidade. Cada achado deve citar arquivo/linha,
impacto, cenário e correção mínima. Não elogie nem resumir antes dos achados.
Se não houver achados, declare riscos/testes não cobertos.
```

### Fresh-eyes visual

```text
Sem ler a intenção primeiro, observe os frames [lista] por 10 segundos cada. Registre
primeiro foco, direção percebida, emoção, ruído, escala, contraste e elementos que
parecem jogo/sci-fi militar. Depois confronte com ART_BIBLE e PLANET_BIBLE. Não sugira
mais detalhes como solução padrão; priorize remoção, composição, luz e material.
```

## UX

### Jornada de visitante

```text
Use Terra com web-design-guidelines. Avalie [jornada] para recrutador de 2 min,
líder técnico, visitante contemplativo, teclado-only, touch e reduced motion.
Mapeie intenção→ação→feedback→saída, tempo/fricção e falhas. A experiência 3D não
pode bloquear conteúdo. Recomende mudanças pequenas e testes com usuários.
```

### Teste de conforto

```text
Crie roteiro moderado de 20 minutos para validar câmera, velocidade, passo rápido,
pointer lock, terminal e viagem. Evite perguntas indutivas; colete comportamento,
tempo, hesitação, desconforto e palavras emocionais. Defina critérios de bloqueio.
```

## Assets

### Pesquisa de asset

```text
Use Terra; Luna pode coletar candidatos. Procure [asset] segundo o brief [colar].
Use no máximo três fontes confiáveis e cinco candidatos. Para cada um: URL, autor,
preço/data, licença, formato, tamanho/topologia quando disponíveis, aderência visual,
trabalho de adaptação e risco. Não baixe. Rejeite NC/ND/SA/Editorial, IP, formato
fechado e qualquer item que exija remodelagem extensa. Recomende até dois finalistas.
```

### Concept com IA

```text
Use imagegen somente para concept interno. Crie [n] explorações de [objeto/cena]
por atributos: [paleta], [material], [silhueta], [luz], [composição], [emoção].
Não mencione artistas, jogos, filmes ou franquias. Evite [lista da Art Bible].
As imagens não são assets finais; registre prompt, modelo, data e revisão de similaridade.
```

## Pesquisa

### Pesquisa técnica/mercado

```text
Use Terra e fontes primárias atuais. Responda [pergunta] com data de corte. Compare
alternativas, cite cada claim volátil, informe incertezas e diferencie documentação,
marketing e inferência. Conclua com recomendação condicionada e o que precisa de spike.
Não instale, compre, baixe ou implemente.
```

### Referência visual

```text
Pesquise [categoria] em arquivos oficiais, museus, arquitetura, paisagismo e fotografia.
Para cada referência, registre link, o princípio a extrair e o elemento proibido de copiar.
Não use Pinterest/repost como fonte final e não trate referência como licença de asset.
```

## Refatoração

### Refatoração segura

```text
Use Terra; Sol se cruzar features/ADRs. Objetivo: [melhoria mensurável]. Preserve
comportamento, Art/Experience e API pública salvo autorização. Primeiro caracterize
com testes, depois faça passos pequenos. Não introduza abstração antes de segunda
reutilização. Compare build, testes, bundle/performance e diff. Atualize ADR/docs
somente se contrato mudar.
```

### Remoção de complexidade

```text
Identifique código/dependências/efeitos sem consumidor ou valor comprovado em [escopo].
Mostre evidência de uso e plano de remoção reversível. Priorize reduzir estados,
materiais, efeitos e APIs. Não remova asset/licença/trabalho do usuário sem autorização.
```

## Handoff padrão

```text
Resultado: [o que ficou pronto].
Arquivos/decisões: [links].
Evidências: [comandos, testes, screenshots, métricas].
Não feito: [fora de escopo].
Riscos residuais: [lista].
Próximo gate: [decisão ou ação].
```

