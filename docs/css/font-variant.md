---
description: Свойство font-variant определяет, как нужно представлять строчные буквы — оставить их без модификаций или делать их все прописными уменьшенного размера
---

# font-variant

Свойство **`font-variant`** определяет, как нужно представлять строчные буквы — оставить их без модификаций или делать их все прописными уменьшенного размера.

Такой способ изменения символов называется капителью.

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
    - [font-stretch](font-stretch.md)
    - [font-style](font-style.md)
    - [font-synthesis](font-synthesis.md)
    - **font-variant**
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
font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* Global values */
font-variant: inherit;
font-variant: initial;
font-variant: unset;
```

## Значения

`normal`
: Оставляет регистр символов исходным, заданным по умолчанию.

`small-caps`
: Модифицирует все строчные символы как заглавные уменьшенного размера, как показано на рис. 1.

![Рис. 1. Обычный текст и текст в виде капители](css_font-variant_1.png)

Значение по-умолчанию:

```css
font-variant: normal;
```

Применяется ко всем элементам

## Спецификации

- [CSS Fonts Module Level 3](http://dev.w3.org/csswg/css3-fonts/#propdef-font-variant)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/fonts.html#propdef-font-variant)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#font-variant)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>font-variant</title>
    <style>
      h1 {
        font-variant: small-caps; /* Устанавливаем капитель для заголовка */
      }
    </style>
  </head>
  <body>
    <h1>Почему ослаблен амфибол?</h1>
    <p>
      Пока магма остается в камере, минерализация стягивает
      орогенез.
    </p>
  </body>
</html>
```
