# Política de licenças e proveniência

**Estado:** gate legal do pipeline

**Aviso:** registro de engenharia, não aconselhamento jurídico

## Licenças aceitas por padrão

| Licença                | Comercial        | Modificar | Atribuição      | Política Little Worlds                                  |
| ---------------------- | ---------------- | --------- | --------------- | ------------------------------------------------------- |
| CC0 1.0                | sim              | sim       | não obrigatória | preferida; ainda exige autor/URL internos               |
| CC BY 4.0              | sim              | sim       | obrigatória     | aceita quando o crédito é sustentável                   |
| royalty-free própria   | depende do texto | depende   | depende         | revisão individual e cópia da EULA                      |
| licença paga comercial | depende do texto | depende   | depende         | somente item aprovado, seat e redistribuição resolvidos |

## Excluídas por padrão

- CC BY-NC / qualquer NonCommercial: incompatível com produto e portfólio comercial.
- CC BY-ND: impede harmonização e derivados necessários ao pipeline.
- CC BY-SA: obrigação de compartilhamento pode contaminar o fluxo do derivado; requer revisão específica e, por padrão, é rejeitada.
- Editorial: não permite uso comercial normal.
- “royalty free”, “free download” ou “personal use” sem EULA identificável.
- conteúdo extraído de jogo, filme, Google Images, Pinterest ou reupload sem autoria verificável.

## Regras por fonte

### KayKit / itch.io

O [KayKit Forest](https://kaylousberg.itch.io/kaykit-forest) declara CC0, uso comercial e atribuição dispensada. O tier comprado não muda automaticamente direitos sobre arquivos de terceiros; preservar a licença incluída e o comprovante do itch.io. Os preços podem mudar.

### Quaternius

Verificar a página de cada pack. Os packs selecionados declaram CC0 e uso comercial, mas formatos e conteúdo variam. Não extrapolar a licença de um pack para outro arquivo hospedado no site.

### Unity Asset Store

A [Standard Unity Asset Store EULA](https://unity.com/legal/as-terms), para assets não restritos, permite incorporar e modificar o asset dentro de um produto digital com conteúdo original substancial e distribuir o asset apenas embutido nesse produto. Não permite redistribuir source/asset isoladamente. Itens `Restricted`, termos adicionais do publisher e a classificação `Extension Asset` prevalecem e precisam ser registrados por item.

Uso licenciado fora da Unity não significa portabilidade técnica. Antes da compra, confirmar se o package contém meshes e texturas-fonte utilizáveis; prefabs, shaders, scripts e cenas de demo não são formatos do pipeline R3F.

### Fab

A [Fab Standard License](https://www.fab.com/eula?lang=en) permite uso comercial, modificação, distribuição incorporada ao produto e uso com ferramentas compatíveis fora da Unreal. O tier `Reference Only` não entrega source e é proibido para nosso pipeline. Alguns itens migrados podem exibir termos diferentes; o checkout e o license type do item são a evidência, não a licença genérica do site.

Para Fab e Unity, arquivos pagos originais e derivados que permitam reconstruir o asset permanecem fora do Git público. A aplicação pode distribuir somente derivados incorporados de acordo com a licença registrada.

### Kenney

O [suporte oficial](https://kenney.nl/support) informa que assets nas páginas de assets são CC0 e podem ser usados comercialmente sem atribuição. Guardar também o license file incluído no download.

### Poly Pizza

A licença aparece por item. Aceitar somente CC0 ou CC BY 4.0 com autor e URL preservados. O agregador não elimina a necessidade de verificar arquivos incluídos, autoria e atribuição. Não interpretar números sem rótulo da página como contagem de polígonos.

### Poly Haven e ambientCG

[Poly Haven](https://polyhaven.com/license) e [ambientCG](https://ambientcg.com/) publicam assets CC0. A licença resolve uso, não adequação artística ou performance. Guardar o registro do item, autores informados e versão/resolução adquirida.

### Freesound

O [FAQ oficial](https://freesound.org/help/faq/) mistura CC0, CC BY e BY-NC por upload. Capturar a página individual no momento do download. Preferir gravação própria e descrição técnica; evitar remix com cadeia de atribuição ou origem contraditória. Mesmo CC0 pode ser removido por upload indevido, portanto registrar autor, data, descrição e checksum.

### OpenGameArt

O [FAQ oficial](https://opengameart.org/node/5571) aceita várias licenças, inclusive CC0, CC BY, OGA-BY, BY-SA e GPL. “Disponível no OGA” não é licença. Little Worlds limita a seleção normal a CC0 e CC BY; OGA-BY, SA e GPL exigiriam obrigações adicionais e ficam fora desta biblioteca sem revisão específica. Reuploads e coleções devem apontar ao autor original e ao arquivo exato.

### Sonniss GDC

O [bundle oficial](https://gdc.sonniss.com/) declara uso comercial royalty-free, sem atribuição e em projetos ilimitados; uso para treinamento de IA/ML é proibido. Guardar a EULA da edição e a tracklist. Nunca redistribuir os masters como biblioteca.

### Scott Buckley

A [biblioteca](https://www.scottbuckley.com.au/library/using-this-music/) é CC BY 4.0 salvo indicação contrária; uso comercial exige crédito no formato pedido. Remixes não fazem parte da biblioteca CC. Faixas não podem ser redistribuídas isoladamente nem registradas em Content ID.

### Sketchfab

Pelas [licenças oficiais](https://sketchfab.com/licenses), itens gratuitos e pagos têm regimes diferentes. Excluir NC, ND, SA e Editorial. Em CC BY, seguir as [guidelines de atribuição](https://sketchfab.com/developers/download-api/guidelines). Item removido, autor ambíguo ou reupload encerra a avaliação.

### Synty

A [One-Time Purchase Licence](https://syntystore.com/pages/one-time-purchase-licence) vigente no snapshot permite produtos comerciais, mas impõe termos próprios de seats, distribuição dos arquivos-fonte e usos relacionados a IA. Além do risco visual, isso aumenta custo operacional; nenhuma aquisição está autorizada.

## Evidência mínima por aquisição

```text
licenses/assets/<asset-id>/
├── RECORD.md
├── LICENSE.txt ou LICENSE.pdf
├── SOURCE.url.txt
├── ATTRIBUTION.txt
├── RECEIPT.*            # somente se seguro e sem dados desnecessários
└── CHECKSUMS.txt
```

Se a EULA proibir versionar sua cópia, `RECORD.md` registra local seguro, versão, hash e URL; o arquivo fica fora do Git.

## Atribuição pública

O produto terá uma página “Créditos e licenças” acessível pela rota 2D. O manifesto de atribuição registra título, autor, URL, licença, mudanças e cena. CC0 continua creditado internamente por proveniência, ainda que não precise aparecer publicamente.

## Gate de reconfirmação

Licença, preço, arquivo e autor devem ser reconfirmados:

1. no download;
2. antes do primeiro commit do derivado;
3. antes do release público que o utiliza.
