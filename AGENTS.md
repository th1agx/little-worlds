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
