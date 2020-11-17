---
description: Свойство mask-clip определяет область, на которую влияет маска
---

# mask-clip

Свойство **`mask-clip`** определяет область, на которую влияет маска.

Отрисовываемое содержимое элемента должно быть ограничено этой областью.

??? info "Маски и Фигуры"

    <div class="col3" markdown="1">

    - [clip-path](clip-path.md)
    - [clip-rule](clip-rule.md)
    - [mask](mask.md)
    - [mask-border](mask-border.md)
    - [mask-border-mode](mask-border-mode.md)
    - [mask-border-outset](mask-border-outset.md)
    - [mask-border-repeat](mask-border-repeat.md)
    - [mask-border-slice](mask-border-slice.md)
    - [mask-border-source](mask-border-source.md)
    - [mask-border-width](mask-border-width.md)
    - **mask-clip**
    - [mask-composite](mask-composite.md)
    - [mask-image](mask-image.md)
    - [mask-mode](mask-mode.md)
    - [mask-origin](mask-origin.md)
    - [mask-position](mask-position.md)
    - [mask-repeat](mask-repeat.md)
    - [mask-size](mask-size.md)
    - [mask-type](mask-type.md)

    </div>

    <div class="col3" markdown="1">

    - [shape-image-threshold](shape-image-threshold.md)
    - [shape-margin](shape-margin.md)
    - [shape-outside](shape-outside.md)

    </div>

## Синтаксис

```css
/* <geometry-box> values */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: margin-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* Keyword values */
mask-clip: no-clip;

/* Non-standard keyword values */
-webkit-mask-clip: border;
-webkit-mask-clip: padding;
-webkit-mask-clip: content;
-webkit-mask-clip: text;

/* Multiple values */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* Global values */
mask-clip: inherit;
mask-clip: initial;
mask-clip: unset;
```

## Значения

Одно или несколько ключевых слов, перечисленных ниже, разделенных запятыми:

`content-box`
: Обрезка производится по контенту (`content`).

`padding-box`
: Обрезка производится по полям (`padding`).

`border-box`
: Обрезка производится по рамке (`border`).

`margin-box`
: Обрезка производится по отступам (`margin`).

`fill-box`
: Обрезка производится по ограничивающему объекту.

`stroke-box`
: Обрезка производится по рамке ограничивающего объекта.

`view-box`
: используется ближайший SVG viewport.

`no-clip`
: Обрезка не производится.

`border`
: эквивалент `border-box`.

`padding`
: эквивалент `padding-box`.

`content`
: эквивалент `content-box`.

`text`
: Обрезка производится по тексту элемента.

Значение по-умолчанию:

```css
mask-clip: border-box;
```

Применяется ко всем элементам

## Спецификации

- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/#the-mask-clip)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-masks" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-masks">Can I Use css-masks?</a> Data on support for the css-masks feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```css
#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 20px;
  border: 20px solid #8ca0ff;
  padding: 20px;
  mask-image: url('https://mdn.mozillademos.org/files/12668/MDN.svg');
  mask-size: 100% 100%;
  mask-clip: border-box; /* Can be changed in the live sample */
}
```
