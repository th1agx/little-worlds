# Auditoria de Skills para o Visual Benchmark

**Estado:** proposta para aprovação humana; nenhuma instalação autorizada

**Data:** 2026-08-06

**Escopo:** ambiente de IA, R3F/Three.js, pipeline GLTF e QA WebGL

**Preservado:** Asset Library, shortlist, ADR 0015, runtime, lockfile, assets, Hub, Limiares e locomoção

## Conclusão executiva

O stack atual é bom nas bordas React/Next, composição, segurança, browser QA e deploy, mas não possui uma autoridade especializada para lifecycle R3F, ownership de recursos, GLTF, budgets GPU e profiling de cenas. Nenhuma Skill pública auditada cobre essa lacuna sem trazer regras genéricas, dependências, pressupostos de Vite/Three vanilla ou metas visuais incompatíveis.

**Decisão proposta, ainda não adotada:** não instalar Skill externa para o Visual Benchmark. Manter as seis Skills vendorizadas com roteamento mais estrito e, após aprovação humana, especificar uma Skill interna declarativa chamada `little-worlds-r3f`. Esta auditoria não cria a Skill nem uma ADR definitiva.

## Skills utilizadas nesta auditoria

Nenhuma das seis Skills instaladas foi carregada para orientar o resultado. A tarefa foi uma auditoria documental e de supply chain, não implementação React, execução de browser, revisão de segurança solicitada, threat model ou deploy. As Skills foram analisadas como artefatos sob auditoria. Foram usados somente leitura local, metadados públicos dos repositórios e documentação oficial primária.

## Matriz de decisão

| Skill                                         | Origem                                | Status                           | Função real                                                                              | Compatibilidade com Little Worlds                                                               | Risco                                                                                                                                                | Recomendação                                                                                                                             |
| --------------------------------------------- | ------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `react-best-practices`                        | Vercel Labs, commit lockado           | **MANTER**                       | waterfalls, bundle, Server/Client Components e re-render React/Next                      | alta na borda Next/React; baixa para custo GPU e `useFrame`                                     | aplicar regras server-first ao Canvas client-only ou confundir re-render React com frame WebGL                                                       | usar em rotas, componentes, estado e bundle; nunca como autoridade de shader, GLTF ou profiling GPU                                      |
| `composition-patterns`                        | Vercel Labs, commit lockado           | **MANTER**                       | desenho de APIs React, compound components e redução de boolean props                    | média; útil somente quando existe reuso real                                                    | abstração e Context no hot path; APIs genéricas antes de necessidade                                                                                 | carregar em desenho/refactor de API compartilhada, não em uma cena isolada ou render loop                                                |
| `playwright`                                  | OpenAI curated, commit lockado        | **MANTER**                       | automação de browser por wrapper CLI                                                     | boa para fluxo, console e screenshots; insuficiente como medidor GPU                            | wrapper executa `npx --yes --package @playwright/cli` sem versão; download em runtime; shell POSIX; sobrepõe `@playwright/test` já pinado no projeto | no Little Worlds, preferir a suíte local pinada ou browser integrado; não executar o wrapper até ele ter versão e ambiente controlados   |
| `security-best-practices`                     | OpenAI curated, commit lockado        | **MANTER**                       | revisão AppSec por linguagem e framework                                                 | alta quando houver superfície de segurança; irrelevante para julgamento visual                  | checklist genérico fora do gatilho; não cobre licença de asset por si só                                                                             | usar apenas em pedido explícito de segurança, dependências, uploads, headers, links e release                                            |
| `security-threat-model`                       | OpenAI curated, commit lockado        | **MANTER**                       | modelagem de ativos, fronteiras e abuso                                                  | alta no futuro; baixa no Visual Benchmark estático                                              | cerimônia prematura e pausa obrigatória para perguntas                                                                                               | usar antes de formulário, analytics, APIs, identidade ou integrações externas                                                            |
| `vercel-deploy`                               | OpenAI curated, commit lockado        | **MANTER**                       | deploy por Vercel CLI e fallback HTTP                                                    | compatível somente pelo fluxo direto do projeto Vercel já vinculado                             | fallback empacota o source e envia a `codex-deploy-skills.vercel.sh`; pode publicar conteúdo fora do projeto esperado                                | usar apenas com autorização explícita e Vercel CLI autenticado; se o CLI direto falhar, parar. Fallback externo é proibido neste projeto |
| `threejs-debug-profiler`                      | `majidmanzarpour/threejs-game-skills` | **AUDITAR MAIS**                 | checklist declarativo de baseline, `renderer.info`, CPU/GPU, memória e otimização medida | parcialmente compatível; é vanilla Three/Vite e desconhece cache/ownership R3F e budgets locais | jovem, um mantenedor, regras de jogo e referências Vite; adoção pode criar segunda fonte de budgets                                                  | não instalar agora; usar o conteúdo auditado apenas como insumo para a futura Skill interna                                              |
| `threejs-qa-release`                          | mesmo repositório                     | **NÃO INSTALAR**                 | Playwright, screenshots, hooks e budgets de canvas                                       | baixa                                                                                           | script exige `pngjs`, assume hooks globais de jogo e budgets hardcoded; sobrepõe QA existente                                                        | rejeitar; nossos testes e budgets devem continuar locais                                                                                 |
| `threejs-aaa-graphics-builder`                | mesmo repositório                     | **NÃO INSTALAR**                 | direção “AAA”, geradores, shaders, scorecards e polish                                   | incompatível com low-poly contemplativo e curadoria antes de geração                            | induz geradores externos, credenciais, high-density visuals e amplo escopo                                                                           | rejeitar como Skill; princípios técnicos isolados só entram após validação em fonte primária                                             |
| `r3f-best-practices` / `three-best-practices` | `emalorenzo/three-agent-skills`       | **SUBSTITUIR POR SKILL INTERNA** | guias amplos de R3F/Three                                                                | aparente, mas contraditória em lifecycle e dependências                                         | repositório sem arquivo de licença detectável; recomenda Drei, Rapier, Leva, `r3f-perf`, preload global, clone de florestas e WebGPU/TSL             | não instalar; reter apenas temas confirmados em docs oficiais                                                                            |
| `web3d-integration-patterns`                  | `freshtechbro/claudedesignskills`     | **NÃO INSTALAR**                 | combinação R3F/Three com GSAP, Motion e Spring                                           | baixa; Little Worlds não é experiência scroll-driven nem multi-animation-stack                  | incentiva dependências ausentes e sincronização redundante; declara references/scripts/assets que não existem no diretório da Skill                  | rejeitar                                                                                                                                 |
| `threejs-graphics-optimizer`                  | `ovachiever/droid-tings`              | **NÃO INSTALAR**                 | receitas genéricas de performance Three vanilla                                          | baixa                                                                                           | licença `NOASSERTION`; user-agent como perfil de hardware, budgets universais, descarte inseguro de compartilhados e afirmações absolutas            | rejeitar                                                                                                                                 |
| `threejs-skills`                              | `sickn33/antigravity-awesome-skills`  | **NÃO INSTALAR**                 | tutorial generalista de Three vanilla                                                    | baixa                                                                                           | import maps/CDN, loop manual, GSAP e WebGPU/TSL; não conhece Next/R3F nem arquitetura do produto                                                     | rejeitar                                                                                                                                 |

## Auditoria das seis Skills locais

### Valor e sobreposição

- `react-best-practices` e `composition-patterns` se complementam: a primeira prioriza performance e entrega React/Next; a segunda governa APIs reutilizáveis. O conflito aparece somente quando composição abstrata invade o hot path R3F.
- `playwright` e o browser integrado se sobrepõem na exploração. O browser serve inspeção interativa; a suíte `@playwright/test` local serve regressão reproduzível. A Skill não deve introduzir uma terceira versão de Playwright via `npx` flutuante.
- as duas Skills de segurança são complementares, mas têm gatilhos diferentes: hardening localizado versus threat model completo.
- `vercel-deploy` não é ferramenta de QA e não deve ser carregada para “ver se funciona”. Deploy é ação externa separada, autorizada e rastreável.

### Conflitos específicos com R3F/Three.js

- regras React de memoização não medem fragment cost, overdraw, shader compilation, VRAM ou draw calls;
- estado reativo é apropriado para eventos discretos, mas atualizações por frame devem respeitar o modelo `useFrame`, delta time e ownership definido pelo projeto;
- montar/desmontar recursos pode recompilar materiais, mas manter planetas invisíveis pode violar a política de uma cena residente. Lifecycle local prevalece sobre máximas genéricas;
- `dispose()` não pode atravessar cegamente recursos compartilhados ou caches de loaders. A autoridade deve conhecer quem criou, compartilhou e libera cada recurso;
- screenshots headless validam composição e regressão aproximada, não equivalência de GPU ou conforto em device real.

## Auditoria de supply chain dos candidatos 3D

| Origem e módulo                                                 | Commit auditado                            | Licença                                                                     | Manutenção observada                                                       | Conteúdo executável / chamadas                                                                     | Perigos e decisão                                                                              |
| --------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `majidmanzarpour/threejs-game-skills`, `threejs-debug-profiler` | `7221c1f4a6d2ae189a4d85d058d24f3228499d46` | MIT                                                                         | criado em 2026-06; push em 2026-07; projeto jovem, ~9 commits na auditoria | módulo contém Markdown/YAML e referências; sem script próprio ou chamada externa                   | conteúdo razoável, mas vanilla/Vite e genérico; **AUDITAR MAIS**, sem instalar                 |
| mesmo repo, `threejs-qa-release`                                | mesmo commit                               | MIT                                                                         | mesma condição                                                             | `inspect-threejs-canvas.mjs` importa `@playwright/test` e `pngjs`, abre uma URL e grava artefatos  | dependência ausente, budgets e hooks de jogo hardcoded, fallback SwiftShader; **NÃO INSTALAR** |
| mesmo repo, `threejs-aaa-graphics-builder`                      | mesmo commit                               | MIT                                                                         | mesma condição                                                             | Skill obriga ledger de credenciais e carrega geradores de imagem/3D; amplo conjunto de referências | conflito direto de escopo e direção; **NÃO INSTALAR**                                          |
| `emalorenzo/three-agent-skills`, dois módulos                   | `f950f95ae3b13581546e6d6d8b2f88a08eb3e577` | package/frontmatter dizem MIT, mas não há arquivo de licença no repositório | criado e parado em 2026-01; poucos commits/stars                           | somente Markdown nos módulos                                                                       | bloqueio jurídico/proveniência e várias regras discutíveis; **SUBSTITUIR POR SKILL INTERNA**   |
| `freshtechbro/claudedesignskills`, `web3d-integration-patterns` | `1da73febff0c3e1dfefc07f8a5ef8f7d1dfdb6cd` | MIT                                                                         | último push observado em 2025-11                                           | o diretório contém apenas `SKILL.md`; não há scripts nele                                          | o texto promete arquivos inexistentes e stacks extras; **NÃO INSTALAR**                        |
| `ovachiever/droid-tings`, `threejs-graphics-optimizer`          | `7acd12a7547ded8f801615e69c3b881a584ce323` | GitHub `NOASSERTION`                                                        | último push observado em 2025-11                                           | somente `SKILL.md` no módulo                                                                       | licença e recomendações técnicas insuficientes; **NÃO INSTALAR**                               |
| `sickn33/antigravity-awesome-skills`, `threejs-skills`          | `eac26777004e90361ab610f3e69af15457706a90` | MIT                                                                         | agregador muito ativo, superfície enorme                                   | módulo individual é somente Markdown                                                               | tutorial vanilla amplo, CDN/GSAP/WebGPU; **NÃO INSTALAR**                                      |

Os commits acima identificam exatamente o conteúdo auditado; não são autorização de download ou instalação. Popularidade não compensa licença ausente, conteúdo incoerente ou incompatibilidade arquitetural.

O único candidato externo mantido em observação tem a coordenada exata: repositório [`majidmanzarpour/threejs-game-skills`](https://github.com/majidmanzarpour/threejs-game-skills), path `skills/threejs-debug-profiler`, commit `7221c1f4a6d2ae189a4d85d058d24f3228499d46`. O status **AUDITAR MAIS** significa que ele não integra o stack e não deve ser instalado sem nova aprovação.

## Lacuna 3D real

Uma Skill adequada precisa conhecer simultaneamente:

1. lifecycle de cena do Little Worlds e regra de uma cena/planeta residente;
2. fronteira entre React state e mutação por frame em R3F;
3. ownership, cache, compartilhamento e disposal de geometria, material, textura, `ImageBitmap`, skeleton, render target e loader;
4. intake GLB/GLTF: licença, validação Khronos, dimensões, transforms, nós, meshes, primitives, triângulos, materiais, texturas, animações e extensões;
5. decisões condicionais de Draco, Meshopt e KTX2, incluindo custo de decoder/transcoder e compatibilidade real;
6. budgets do projeto por tier, viewport e cena — nunca números universais copiados;
7. `renderer.info`, frame time CPU, medição GPU quando `EXT_disjoint_timer_query_webgl2` estiver disponível, memória estimada e rede;
8. instancing, batching, LOD, culling, DPR, shadows, transparência e shader complexity somente após profiling;
9. QA WebGL com browser/driver registrados, produção local, warm-up, cenário e duração reproduzíveis;
10. relatório antes/depois e uma única variável alterada por experimento.

## Proposta: `little-worlds-r3f`

Não criar nesta etapa. Se aprovada, a primeira versão deve ser uma Skill interna, declarativa e sem scripts.

### Escopo mínimo

- roteamento para tarefas de cena, asset intake técnico, performance e QA WebGL;
- checklist de baseline reproduzível do Visual Benchmark;
- matriz de ownership/disposal compatível com Scene Manager e caches reais;
- leitura dos budgets existentes, sem duplicar números dentro da Skill;
- checklist GLTF/KTX2 com links para ferramentas Khronos e docs Three oficiais;
- protocolo de profiling CPU/GPU/memória/rede;
- gate para instancing/LOD/shaders: medir, formular hipótese, alterar uma variável, comparar;
- formato de handoff com ambiente, métricas, screenshots e limitações.

### Fora de escopo

- gerar código de cena, assets, shaders, gameplay ou direção de arte;
- instalar Drei, `r3f-perf`, Spector, `pngjs`, decoders ou qualquer dependência;
- executar comandos externos automaticamente;
- definir estética, substituir Art/Asset Bible ou criar budgets próprios;
- publicar deploy, fazer upload de source ou baixar modelos.

### Gate de criação

Criar somente após aprovação humana desta proposta. Na criação futura, usar a Skill de sistema `skill-creator`, revisar o `SKILL.md` inteiro, manter referências mínimas, adicionar owner/review date e atualizar o lock/catalog/routing no mesmo change set. Uma ADR só será proposta se a Skill mudar uma decisão de arquitetura/runtime; governança de IA puramente documental permanece em `docs/05-ai`.

## AI Skill Stack — Visual Benchmark

Stack operacional pequeno, sem nova instalação:

| Momento                                     | Carregar                                                                        | Motivo                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| planejar composição, asset choice e budgets | nenhuma Skill pública; Art Bible, Asset Bible, ADR 0015 e Visual Benchmark      | as fontes locais são mais específicas que qualquer Skill auditada                  |
| implementar borda React/Next do benchmark   | `react-best-practices`                                                          | controlar bundle, boundaries e re-render sem governar a cena 3D                    |
| criar API compartilhada comprovada          | `composition-patterns`, isoladamente ou com React practices                     | somente após segunda necessidade real                                              |
| validar fluxo, console e screenshot         | preferir browser integrado na exploração; `@playwright/test` local na regressão | ambiente conhecido e dependência já pinada                                         |
| revisar asset/GLTF e performance R3F        | docs oficiais + checklists locais; futura `little-worlds-r3f` após aprovação    | hoje não há Skill externa confiável                                                |
| segurança ou deploy                         | nenhuma por padrão                                                              | não fazem parte do Visual Benchmark; carregar apenas por pedido explícito separado |

## Fontes técnicas primárias

- [R3F — Performance pitfalls](https://r3f.docs.pmnd.rs/advanced/pitfalls): `useFrame`, delta time, evitar React state no loop, reutilização e custo de mount/unmount.
- [R3F — Scaling performance](https://r3f.docs.pmnd.rs/advanced/scaling-performance): reuse, instancing, LOD, cache e render sob demanda, sempre subordinados ao caso real.
- [Three.js — WebGLRenderer.info](https://threejs.org/docs/pages/WebGLRenderer.html): calls, triangles, geometries, textures e programs observáveis.
- [Three.js — How to dispose of objects](https://threejs.org/manual/en/how-to-dispose-of-objects.html): disposal explícito e cuidado com recursos compartilhados.
- [Three.js — GLTFLoader](https://threejs.org/docs/pages/GLTFLoader.html) e [KTX2Loader](https://threejs.org/docs/pages/KTX2Loader.html): extensões e configuração de decoders/transcoder.
- [Three.js — InstancedMesh](https://threejs.org/docs/pages/InstancedMesh.html) e [LOD](https://threejs.org/docs/pages/LOD.html): mecanismos e limites concretos.
- [Khronos glTF Validator](https://github.khronos.org/glTF-Validator/) e [glTF Asset Auditor](https://www.khronos.org/gltf/gltf-asset-auditor/): conformidade e perfis de auditoria de assets.
- [MDN — WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices): limites variáveis, VRAM por pixel, chamadas bloqueantes, compressão e alta densidade.
- [MDN — EXT_disjoint_timer_query](https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query): timing GPU sem stall quando suportado; não é Baseline universal.

## Gate humano

Esta auditoria recomenda **zero instalações agora**. A próxima decisão humana é aprovar ou rejeitar o desenho da futura `little-worlds-r3f`. Até essa decisão, o Visual Benchmark deve usar somente documentação oficial, fontes locais e ferramentas já pinadas.
