---
description:
---

# font-optical-sizing

Свойство **`font-optical-sizing`** устанавливает, оптимизирован ли рендеринг текста для просмотра в различных размерах.

Оптическое изменение размера включено по умолчанию для шрифтов, имеющих ось изменения оптического размера. Ось изменения оптического размера представлена ​​параметром `opsz` в [`font-variation-settings`](font-variation-settings.md).

При использовании оптического изменения размера текст небольшого размера часто отображается с более толстыми штрихами и более крупными засечками, тогда как более крупный текст часто отображается более деликатно с большим контрастом между более толстыми и более тонкими штрихами.

??? info "Шрифт и Цвет"

    <div class="col3" markdown="1">

    - [@font-face](font-face.md)

    </div>

    <div class="col3" markdown="1">

    - [font](font.md)
    - [font-family](font-family.md)
    - [font-feature-settings](font-feature-settings.md)
    - [font-kerning](font-kerning.md)
    - [font-language-override](font-language-override.md)
    - **font-optical-sizing**
    - [font-size](font-size.md)
    - [font-size-adjust](font-size-adjust.md)
    - [font-stretch](font-stretch.md)
    - [font-style](font-style.md)
    - [font-synthesis](font-synthesis.md)
    - [font-variant](font-variant.md)
    - [font-variant-alternates](font-variant-alternates.md)
    - [font-variant-caps](font-variant-caps.md)
    - [font-variant-east-asian](font-variant-east-asian.md)
    - [font-variant-ligatures](font-variant-ligatures.md)
    - [font-variant-numeric](font-variant-numeric.md)
    - [font-variant-position](font-variant-position.md)
    - [font-variation-settings](font-variation-settings.md)
    - [font-weight](font-weight.md)
    - [line-height](line-height.md)

    </div>

    <div class="col3" markdown="1">

    - [color](color.md)
    - [color-adjust](color-adjust.md)
    - [opacity](opacity.md)

    </div>

## Синтаксис

```css
/* keyword values */
font-optical-sizing: none;
font-optical-sizing: auto; /* default */

/* Global values */
font-optical-sizing: inherit;
font-optical-sizing: initial;
font-optical-sizing: unset;
```

## Значения

`none`
: Браузер не будет изменять форму глифов для оптимального просмотра.

**`auto`**
: Браузер изменит форму глифов для оптимального просмотра.

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__font-optical-sizing" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

### Пример 1

<iframe class="interactive" frameborder="0" height="390" src="https://interactive-examples.mdn.mozilla.net/pages/css/font-optical-sizing.html" title="MDN Web Docs Interactive Example" width="100%"></iframe>

### Пример 2

=== "HTML"

    ```html
    <p class="optical-sizing">
      This paragraph is optically sized. This is the default
      across browsers.
    </p>

    <p class="no-optical-sizing">
      This paragraph is not optically sized. You should see a
      difference in supporting browsers.
    </p>
    ```

=== "CSS"

    ```css
    @font-face {
      src: url('AmstelvarAlpha-VF.ttf');
      font-family: 'Amstelvar';
      font-style: normal;
    }

    p {
      font-size: 36px;
      font-family: Amstelvar;
    }

    .no-optical-sizing {
      font-optical-sizing: none;
    }
    ```

## Ссылки

- Свойство [`font-optical-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing) <sup><small>MDN (рус.)</small></sup>
- [CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#font-optical-sizing-def)
