# UI, UX e acessibilidade

**Estado:** requisitos de produto

## Entrada

- Landing HTML leve explica a proposta em uma frase.
- CTAs equivalentes: “Explorar em 3D” e “Ver portfólio”. Nenhum é apresentado como inferior.
- Antes do pointer lock, mostrar controles essenciais e como sair; não repetir após preferência salva.
- Detecção de capacidade sugere, mas não força, perfil/fallback.

## Terminal

- Overlay DOM com `dialog`/região apropriada, título focado, focus trap e retorno de foco.
- Largura de leitura limitada, tipografia confortável e zoom do navegador preservado.
- Navegação por abas/links reais; histórico/URL refletindo o conteúdo quando útil.
- Esc fecha primeiro o terminal e depois pointer lock de forma previsível.
- Conteúdo nunca depende de animação, hover, cor ou áudio.
- “Abrir página completa” e link copiável em todas as seções.

## Rota 2D equivalente

Oferece exatamente os mesmos textos, estudos de caso, certificados e contato, com navegação sem Canvas. Pode manter identidade visual atmosférica por gradientes, tipografia e áudio opt-in, mas deve carregar rápido.

## Controles e conforto

- Teclas remapeáveis; corrida em hold/toggle; sensibilidade e inversão de eixo.
- Sem head bob padrão, roll de câmera, blur de movimento ou flashes.
- Slider de FOV dentro de faixa segura e velocidade configurável.
- `prefers-reduced-motion` reduz transições, partículas, câmera e efeitos; opção interna sempre disponível.
- Áudio começa somente após gesto, com mute global persistente e controles separados quando necessário.
- Touch possui alvos grandes e assistência de interação; se o resultado não for confortável, oferecer modo passeio guiado/2D.

## WCAG e testes

Alvo: WCAG 2.2 AA para todo conteúdo e controles DOM. A [W3C recomenda WCAG 2.2](https://www.w3.org/TR/WCAG22/) para aplicabilidade futura e documenta o uso de [`prefers-reduced-motion`](https://www.w3.org/WAI/WCAG22/Techniques/css/C39). Canvas exige alternativa textual equivalente, não uma alegação de conformidade isolada.

Testar:

- teclado apenas, zoom 200%, alto contraste e leitor de tela;
- reduced motion, áudio desligado, save-data e perda de WebGL;
- pointer lock cancelado/negado;
- viewport 320 px, touch e orientação;
- mensagens de loading/erro anunciadas sem roubar foco.

## Microcopy

Tom humano, calmo e direto. Evitar lore que atrase entendimento profissional. Metáforas podem nomear áreas, mas títulos explícitos (“Projetos”, “Contato”) sempre aparecem.

