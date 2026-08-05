# AGENTS.md

## Missão

Construir um portfólio contemplativo, acessível e performático. O mundo 3D gera emoção; o terminal DOM entrega o conteúdo.

## Antes de alterar

- Leia `docs/07-sprint-0.5/RULES.md`; ela é a constituição criativa e prevalece sobre guias anteriores.
- Leia `docs/README.md` e apenas os documentos apontados para a tarefa.
- Consulte `docs/02-architecture/decisions/` antes de mudar uma decisão estrutural.
- Não introduza biblioteca, asset, telemetria ou serviço sem registrar motivo, licença/custo e impacto.
- Não copie expressão artística, personagem, cenário, áudio ou interface de obras de referência.

## Guardrails

- Next.js App Router, TypeScript estrito, React Three Fiber e Three.js.
- Um planeta carregável por vez; nada de universo completo residente em memória.
- Conteúdo do terminal em DOM semântico; Canvas não é a única forma de acesso.
- Rota 2D equivalente, teclado, controles remapeáveis, legendas e redução de movimento são requisitos.
- WebGL é o baseline. WebGPU exige ADR e fallback comprovado.
- Assets de runtime: glTF/GLB validado, texturas KTX2 quando vantajoso, origem/licença registradas.
- Respeite os budgets de `docs/03-design/PERFORMANCE.md`; não “otimize depois”.
- Sem combate, inimigos, inventário, economia, pontuação, pulo como controle primário ou HUD persistente.

## Qualidade

- Mudança funcional deve vir com teste proporcional e evidência de build/browser.
- Mudança visual deve ser verificada em desktop, mobile e `prefers-reduced-motion`.
- Atualize documentação e ADR no mesmo change set quando o contrato mudar.
- Nunca commite segredos, arquivos-fonte licenciados para distribuição restrita ou assets sem proveniência.

## Contexto mínimo

Use `docs/05-ai/CONTEXT_STRATEGY.md`. Não carregue toda a pasta `docs`; siga o mapa por tipo de tarefa.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
