---
description: Свойство font-variant-caps управляет использованием альтернативных глифов для заглавных букв
---

# font-variant-caps

Свойство **`font-variant-caps`** управляет использованием альтернативных глифов для заглавных букв.

Когда данный шрифт включает глифы заглавных букв нескольких разных размеров, это свойство выбирает наиболее подходящие. Если миниатюрные прописные глифы недоступны, они отображаются с использованием маленьких заглавных глифов. Если их нет, браузер синтезирует их из глифов верхнего регистра.

Шрифты иногда включают специальные глифы для различных букв без регистра (например, знаков препинания), чтобы лучше соответствовать заглавным буквам вокруг них. Однако глифы с маленькой заглавной буквы никогда не синтезируются для букв без регистра.

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
    - [font-variant](font-variant.md)
    - [font-variant-alternates](font-variant-alternates.md)
    - **font-variant-caps**
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
font-variant-caps: normal;
font-variant-caps: small-caps;
font-variant-caps: all-small-caps;
font-variant-caps: petite-caps;
font-variant-caps: all-petite-caps;
font-variant-caps: unicase;
font-variant-caps: titling-caps;

/* Global values */
font-variant-caps: inherit;
font-variant-caps: initial;
font-variant-caps: unset;
```

## Значения

Свойство `font-variant-caps` указывается с использованием единственного значения ключевого слова из списка ниже. В каждом случае, если шрифт не поддерживает значение OpenType, он синтезирует глифы.

**`normal`**
: Отключает использование альтернативных символов.

`small-caps`
: Включает отображение строчных заглавных букв (функция OpenType: `smcp`). Глифы с маленькими заглавными буквами обычно используют форму прописных букв, но уменьшаются до размера строчных букв.

`all-small-caps`
: Включает отображение прописных букв как для прописных, так и для строчных букв (возможности OpenType: `c2sc`, `smcp`).

`petite-caps`
: Включает отображение маленьких заглавных букв (функция OpenType: `pcap`).

`all-petite-caps`
: Позволяет отображать маленькие заглавные буквы как для прописных, так и для строчных букв (функции OpenType: `c2pc`, `pcap`).

`unicase`
: Включает отображение смеси строчных прописных букв с обычными строчными буквами (функция OpenType: `unic`).

`titling-caps`
: Включает отображение заглавных букв (функция OpenType: `title`). Глифы прописных букв часто предназначены для использования со строчными буквами. При использовании во всех последовательностях заголовков в верхнем регистре они могут казаться слишком сильными. Заглавные буквы созданы специально для этой ситуации.

## Определение

|                      |                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| Начальное значение   | `normal`                                                                                       |
| Применяется ко       | всем элементам, включая [`::first-letter`](first-letter.md) и [`::first-line`](first-line.md). |
| Наследуется          | да                                                                                             |
| Вычисленное значение | как определено                                                                                 |
| Тип анимации         | дискретный                                                                                     |

## Поддержка браузерами

<p class="ciu_embed" data-feature="mdn-css__properties__font-variant-caps" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

## Примеры

### Пример 1

<iframe class="interactive" frameborder="0" height="390" src="https://interactive-examples.mdn.mozilla.net/pages/css/font-variant-caps.html" title="MDN Web Docs Interactive Example" width="100%"></iframe>

### Пример 2

=== "HTML"

    ```html
    <p class="small-caps">Firefox rocks, small caps!</p>
    <p class="normal">Firefox rocks, normal caps!</p>
    ```

=== "CSS"

    ```css
    .small-caps {
      font-variant-caps: small-caps;
      font-style: italic;
    }
    .normal {
      font-variant-caps: normal;
      font-style: italic;
    }
    ```

=== "Результат"

    <p class="small-caps">Firefox rocks, small caps!</p>
    <p class="normal">Firefox rocks, normal caps!</p>
    <style>
    .small-caps {
    font-variant-caps: small-caps;
    font-style: italic;
    }
    .normal {
    font-variant-caps: normal;
    font-style: italic;
    }
    </style>

## Ссылки

- Свойство [`font-variant-caps`](https://developer.mozilla.org/ru/docs/Web/CSS/font-variant-caps) <sup><small>MDN (рус.)</small></sup>
- [CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-caps)
