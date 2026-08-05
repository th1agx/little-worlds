# Performance e budgets

**Estado:** budgets iniciais; calibrar na Sprint 1 em dispositivos reais

## Filosofia

O frame mais bonito que não roda não pertence ao produto. Qualidade é estabilidade, tempo até conteúdo e conforto térmico, não apenas screenshot.

## Perfis alvo

| Perfil | Alvo | Estratégia |
| --- | --- | --- |
| low/mobile | 30 fps estáveis, p95 frame <= 33 ms | DPR 1, sombras/SSAO off, partículas e distância reduzidas |
| medium | 45–60 fps, p95 <= 22 ms | DPR adaptativo até 1.5, sombras seletivas |
| high/desktop | 60 fps, p95 <= 16.7 ms | DPR até 2 com teto, pós moderado |

Frame pacing e ausência de stutter valem mais que média. Medir ao caminhar, girar, abrir terminal e trocar cena.

## Budgets iniciais por cena ativa

| Recurso | Low | High | Observação |
| --- | ---: | ---: | --- |
| download inicial antes de conteúdo útil | <= 500 KB comprimido | <= 750 KB | HTML/CSS/JS crítico, sem planeta completo |
| chunk 3D do primeiro planeta | <= 3 MB | <= 6 MB | transferido; decoração posterior separada |
| GPU texture memory estimada | <= 128 MB | <= 256 MB | medir após transcode, não só arquivo |
| triângulos visíveis | <= 150k | <= 500k | guideline, não substitui profiling |
| draw calls | <= 100 | <= 180 | alvo de cena principal |
| materiais ativos | <= 35 | <= 60 | reutilizar/atlas/instancing |
| luzes com sombra | 0–1 | <= 2 | resolução adaptativa |
| pós-processamento | 0–1 passe | <= 3 passes | efeitos fundidos quando possível |

Budgets não são promessa de que o limite rodará bem; CI falha acima e profiling pode exigir menos.

## Estratégias

- Uma cena residente; preload condicional; cancelamento e disposal na viagem.
- Instancing para árvores/rochas/partículas; geometrias e materiais compartilhados.
- LOD e fog/culling coerentes; colisores low-poly separados da malha visual.
- KTX2 para reduzir memória/upload e Meshopt/Draco conforme teste. O [Khronos descreve KTX2](https://www.khronos.org/gltf/) como formato de distribuição de texturas GPU comprimidas e recomenda auditoria/validação.
- Compilar/aquecer shaders importantes durante transição sem alongar artificialmente loading.
- Suspender/reduzir render loop quando terminal cobre a cena, aba fica oculta ou mundo está estático quando compatível com física.
- PerformanceMonitor degrada DPR/efeitos com histerese; nunca alternar continuamente.

## Web e conteúdo

Core Web Vitals do shell/rotas 2D: LCP <= 2,5 s, INP <= 200 ms e CLS <= 0,1 no p75, conforme orientação [Web Vitals](https://web.developers.google.cn/articles/vitals?hl=en). O Canvas não pode bloquear o maior conteúdo semântico.

## Pipeline/gates

- Todo GLB passa por glTF Validator e perfil do [Asset Auditor](https://www.khronos.org/gltf/gltf-asset-auditor/).
- Manifesto registra bytes, triângulos, draw calls estimados, materiais, texturas e LODs.
- Teste em pelo menos: desktop integrado, desktop dedicado, iPhone/Safari representativo e Android intermediário.
- Baseline visual low/high evita que degradação destrua direção de arte.

