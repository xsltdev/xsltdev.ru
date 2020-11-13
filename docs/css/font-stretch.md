---
description: Свойство font-stretch устанавливает узкое, нормальное или широкое начертание шрифта, что позволяет уплотнять или расширять текст
---

# font-stretch

Свойство **`font-stretch`** устанавливает узкое, нормальное или широкое начертание шрифта, что позволяет уплотнять или расширять текст.

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
    - [font-optical-sizing](font-optical-sizing.md)
    - [font-size](font-size.md)
    - [font-size-adjust](font-size-adjust.md)
    - **font-stretch**
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
/* Keyword values */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* Global values */
font-stretch: inherit;
font-stretch: initial;
font-stretch: unset;
```

## Значения

Влияние разных значений `font-stretch` на вид букв в тексте показано на рис. 1.

![Рис. 1. Вид букв при разных значениях font-stretch](css_font-stretch.png)

### Примечание

Браузеры применяют свойство `font-stretch` не ко всем шрифтам, поэтому уплотнение или расширение текста может не работать с некоторыми популярными и распространёнными гарнитурами шрифтов.

Значение по-умолчанию:

```css
font-stretch: normal;
```

Применяется ко всем элементам

## Спецификации

- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css3-fonts/#propdef-font-stretch)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-font-stretch" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-font-stretch">Can I Use css-font-stretch?</a> Data on support for the css-font-stretch feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>font-stretch</title>
    <style>
      p {
        font-size: 5em;
        font-family: 'Myriad Pro';
      }
    </style>
  </head>
  <body>
    <p>
      <span style="font-stretch: ultra-condensed">Б</span>
      <span style="font-stretch: extra-condensed">Б</span>
      <span style="font-stretch: condensed">Б</span>
      <span style="font-stretch: semi-condensed">Б</span>
      <span style="font-stretch: normal">Б</span>
      <span style="font-stretch: semi-expanded">Б</span>
      <span style="font-stretch: expanded">Б</span>
      <span style="font-stretch: extra-expanded">Б</span>
      <span style="font-stretch: ultra-expanded">Б</span>
    </p>
  </body>
</html>
```
