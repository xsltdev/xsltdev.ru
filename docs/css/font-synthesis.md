---
description: Свойство font-synthesis контролирует, какие шрифты, выделенные жирным шрифтом или курсивом, могут быть синтезированы браузером
---

# font-synthesis

Свойство **`font-synthesis`** контролирует, какие шрифты, выделенные жирным шрифтом или курсивом, могут быть синтезированы браузером.

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
    - **font-synthesis**
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
font-synthesis: weight style;
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
```

## Значения

`none`
: Указывает, что нельзя синтезировать ни жирный, ни курсивный шрифт.

`weight`
: Указывает, что при необходимости можно синтезировать жирный шрифт.

`style`
: Указывает, что при необходимости может быть синтезирован курсивный шрифт.

## Определение

|                      |                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| Начальное значение   | `weight style`                                                                                 |
| Применяется ко       | всем элементам, включая [`::first-letter`](first-letter.md) и [`::first-line`](first-line.md). |
| Наследуется          | да                                                                                             |
| Вычисленное значение | как определено                                                                                 |
| Тип анимации         | дискретный                                                                                     |

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__font-synthesis" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Пример

=== "HTML"

    ```html
    <em class="syn">Synthesize me! 站直。</em>
    <br />
    <em class="no-syn">Don't synthesize me! 站直。</em>
    ```

=== "CSS"

    ```css
    em {
      font-weight: bold;
    }
    .syn {
      font-synthesis: style weight;
    }
    .no-syn {
      font-synthesis: none;
    }
    ```

=== "Результат"

    ![font-synthesis](font-synthesis.md)

## Ссылки

- Свойство [`font-synthesis`](https://developer.mozilla.org/ru/docs/Web/CSS/font-synthesis) <sup><small>MDN (рус.)</small></sup>
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#propdef-font-synthesis)
