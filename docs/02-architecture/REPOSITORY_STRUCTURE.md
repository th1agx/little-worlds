# Estrutura do repositório

**Estado:** contrato para a inicialização da Sprint 1; diretórios de código ainda não criados

```text
.
├── AGENTS.md
├── CONTRIBUTING.md
├── README.md
├── docs/
│   ├── 01-product/
│   ├── 02-architecture/decisions/
│   ├── 03-design/
│   ├── 04-production/
│   ├── 05-ai/
│   ├── 06-research/
│   └── templates/
├── public/
│   └── assets/{world,vegetation,rocks,props,effects,audio,music,materials}/
│                                                    # somente derivados aprovados e otimizados
├── src/
│   ├── app/                                       # rotas e layouts Next
│   ├── components/{a11y,layout,ui}/               # UI compartilhada não-domínio
│   ├── content/{about,certificates,projects}/     # MDX e manifestos
│   ├── features/
│   │   ├── experience/                            # modos e orchestration
│   │   ├── player/                                # input, camera, locomotion
│   │   ├── terminal/                              # UI/conteúdo semântico
│   │   └── world/                                 # planet definitions/scenes
│   ├── hooks/
│   ├── lib/{assets,audio,content,telemetry,three}/
│   ├── stores/                                    # Zustand, estado durável pequeno
│   ├── styles/                                    # tokens, reset, global
│   └── types/
├── tests/{e2e,fixtures,visual}/
├── tools/assets/                                  # scripts offline de validação/otimização
└── licenses/assets/                               # recibos, textos e attribution ledger
```

## Regras de dependência

```text
app -> features -> lib
features -> components/lib/types
content -> componentes MDX permitidos/types
lib -X-> features
player -X-> terminal content
world -X-> app routing
```

- Um feature pode expor apenas sua API pública em `index.ts`; deep import entre features é proibido.
- Componentes de cena ficam perto do planeta que os usa; só abstrair após segunda reutilização real.
- Assets fonte/editáveis ficam fora de `public` e podem usar storage de artefatos; `public` contém somente derivados licenciados e otimizados. O contrato completo está no ADR 0014 e em `docs/08-asset-library/PIPELINE.md`.
- Nome de asset: `{domain}-{object}-{variant}-{lod}.{ext}`, minúsculo e sem espaços.
- Cada planeta tem `definition.ts`, `Scene.tsx`, `assets.manifest.ts` e testes pertinentes; não um “components” genérico infinito.

## Documentos futuros previstos

- `SECURITY.md`, política de privacidade e threat model antes de formulário/analytics.
- `CONTENT_GUIDE.md` quando houver autoria recorrente.
- Runbook de incidentes/deploy quando produção existir.
- Changelog público apenas quando versões forem publicadas.
