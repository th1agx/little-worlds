# Desafios, riscos e oportunidades

**Estado:** registro inicial; revisar ao fim de cada sprint

## Desafios principais

| Tema | Problema | Resposta arquitetural |
| --- | --- | --- |
| 3D na web | GPU, memória, bateria e download variam muito | perfis de qualidade, cenas isoladas, budgets e fallback 2D |
| Descoberta | FPS pode esconder o conteúdo que deveria vender a carreira | botão “Ver portfólio”, mapa simples e terminal acessível |
| Controles | pointer lock, teclado e touch geram fricção | onboarding curto, remapeamento, gamepad futuro e modo touch dedicado |
| Conteúdo dentro do 3D | texto em textura é frágil para SEO, seleção e leitores de tela | terminal em DOM semântico sobre a cena |
| Assets heterogêneos | estilos, escalas e licenças inconsistentes | art bible, asset manifest e pipeline de normalização |
| Atmosfera | pós-processamento excessivo degrada leitura e performance | paleta/luz primeiro; efeitos poucos, medidos e degradáveis |
| Manutenção | ecossistema Three/R3F muda com frequência | versões fixadas, Renovate controlado e smoke tests gráficos |

## Registro de riscos

| Risco | Prob. | Impacto | Mitigação / gatilho |
| --- | --- | --- | --- |
| Escopo virar “jogo completo” | alta | alto | não objetivos explícitos; uma mecânica nova substitui outra ou exige ADR |
| Mobile ficar inviável | alta | alto | protótipo mobile na Sprint 1; fallback 2D é produto, não tela de erro |
| Assets ultrapassarem orçamento | alta | alto | nenhum asset entra sem auditoria, LOD e tamanho registrado |
| Enjoo/cinetose | média | alto | FOV e sensibilidade ajustáveis, sem head bob padrão, câmera suave opcional, reduced motion |
| Terminal quebrar imersão | média | médio | transição audiovisual curta e computador permanece como âncora visual |
| Física gerar jitter/bugs | média | médio | controlador cinemático e colisores simples; física só onde traz valor |
| Licença impedir publicação | média | alto | CC0/Fab Standard preferidos; comprovante e attribution ledger versionados |
| IA criar arte derivativa | média | alto | prompts por princípios, revisão humana e registro de proveniência |
| Carregamento mascarado por longa tela | média | alto | shell e conteúdo útil primeiro; progresso real; streaming por planeta |
| Dependência da Vercel | baixa | médio | Next padrão, assets estáticos e arquitetura sem APIs proprietárias críticas |

## Gargalos prováveis

- Draw calls e troca de materiais, mais do que apenas contagem de triângulos.
- Texturas grandes e descomprimidas pressionando memória de GPU em iOS.
- Compilação inicial de shaders e stutter no primeiro efeito/interação.
- Main thread compartilhada entre React/DOM, física, áudio e render loop.
- Testes visuais WebGL instáveis entre GPU/OS; baselines exigem ambiente fixo.
- Transferência e decodificação de múltiplos GLBs na viagem entre planetas.

## Oportunidades

- O terminal separa emoção e informação, permitindo experimentar no 3D sem sacrificar clareza.
- Um planeta vertical slice vira laboratório reutilizável de iluminação, controle, streaming e QA.
- O conteúdo local em MDX mantém o portfólio editável e indexável sem CMS precoce.
- Cenas independentes possibilitam links diretos, pré-carregamento preditivo e evolução incremental.
- Métricas de “tempo até conteúdo” e “terminal aberto” medem experiência, não só pageviews.
- A restrição contemplativa é diferencial: menos sistemas, mais atenção a composição, som e ritmo.

## Decisões questionadas

- **“Primeira pessoa em todo dispositivo”** foi rejeitada. Touch e acessibilidade precisam de experiência equivalente, não paridade forçada.
- **“Viajar fisicamente por um universo contínuo”** foi rejeitada no MVP. Custo de asset, memória e navegação não justifica o valor ainda.
- **“Todo conteúdo literalmente na tela 3D”** foi rejeitada. Prejudica legibilidade, SEO, responsividade e acesso assistivo.
- **“Não usar Blender”** é viável como preferência, não como proibição absoluta. Conversão/inspeção pontual por ferramenta automatizada ou fornecedor pode ser necessária; modelagem manual continua fora do plano.

