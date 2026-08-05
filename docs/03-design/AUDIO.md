# Direção e sistema de áudio

**Estado:** pesquisa; nenhuma faixa escolhida

## Objetivo

Criar profundidade e acolhimento sem dirigir emoção de forma excessiva. Silêncio e espaço dinâmico são componentes do design.

## Camadas

1. **Bed global:** ar/room tone quase imperceptível.
2. **Ambiente do planeta:** vento, folhas, mecanismo distante ou ressonância mineral.
3. **Fontes localizadas:** terminal, observatório, árvore/estrutura.
4. **UI:** feedback curto e macio; nunca necessário para entender estado.
5. **Música:** temas mínimos ou pads, idealmente por stem/loop com transições longas.

## Regras

- Nada toca antes de gesto e consentimento implícito explícito (“ativar som”).
- Mute global visível; preferência persiste e respeita configurações do dispositivo quando detectáveis.
- Loops sem clique, loudness consistente e headroom; evitar compressão agressiva.
- Crossfade por cena; suspender AudioContext em background quando apropriado.
- Não misturar dois motores de áudio sem necessidade. Um `AudioManager` controla buses, lifecycle e spatial sources.
- Formatos de entrega modernos com fallback, escolhidos por teste de browser; manter masters WAV fora do bundle.

## Fontes candidatas

### Gratuitas

- [Sonniss GameAudioGDC](https://gdc.sonniss.com/gdc-game-audio-bundle/) — grande acervo profissional. A [licença](https://sonniss.com/gdc-bundle-license/) permite projetos interativos comerciais, modificação e uso sem atribuição; guardar cópia da licença do download.
- [Freesound](https://freesound.org/help/faq/) — excelente para vento, máquinas e foley; cada item tem Creative Commons própria. Priorizar CC0/CC BY e registrar atribuição; excluir NC/ND/SA sem revisão.
- [Pixabay Music/SFX](https://pixabay.com/music/) — útil para protótipos; licença customizada e risco de Content ID exigem comprovante por item.
- [Kenney Audio](https://kenney.nl/assets?q=audio) — UI/SFX simples, normalmente CC0; validar no pack.

### Pagas

- [Artlist](https://artlist.io/help-center/privacy-terms/artlist-license) — música/SFX curados; confirmar que o plano cobre website/app interativo, domínio e publicação após assinatura.
- [Epidemic Sound](https://www.epidemicsound.com/our-plans/) — catálogo/stems; selecionar plano que cubra website/app comercial e registrar URLs clearlisted.
- Sonniss Store, A Sound Effect e BOOM Library — comprar bibliotecas pontuais (vento, sci-fi discreto, interfaces), não bundles enormes sem taxonomia.

## Checklist por arquivo

Fonte, autor, URL, data, licença/EULA, comprovante, uso permitido, atribuição, master, derivado, duração, loop points, loudness e tamanho final.

