---
description: Свойство mask изменяет видимость элемента, частично или полностью скрывая его
---

# mask

Свойство **`mask`** изменяет видимость элемента, частично или полностью скрывая его.

Это достигается путем маскировки или обрезания изображения в определенных точках.

Сокращенное свойство `mask` также сбрасывает `mask-border` до ее начального значения. Поэтому рекомендуется использовать `mask` до остальных свойств, чтобы переопределить любые настройки маски ранее в каскаде. Это гарантирует, что `mask-border` также была сброшено, чтобы позволить новым стилям вступить в силу.

??? info "Маски и Фигуры"

    <div class="col3" markdown="1">

    - [clip-path](clip-path.md)
    - [clip-rule](clip-rule.md)
    - **mask**
    - [mask-border](mask-border.md)
    - [mask-border-mode](mask-border-mode.md)
    - [mask-border-outset](mask-border-outset.md)
    - [mask-border-repeat](mask-border-repeat.md)
    - [mask-border-slice](mask-border-slice.md)
    - [mask-border-source](mask-border-source.md)
    - [mask-border-width](mask-border-width.md)
    - [mask-clip](mask-clip.md)
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
/* Keyword values */
mask: none;

/* Image values */
mask: url(mask.png); /* Pixel image used as mask */
mask: url(masks.svg#star); /* Element within SVG graphic used as mask */

/* Combined values */

/* Element within SVG graphic used as luminance mask */
mask: url('masks.svg#star') luminance;

/* Element within SVG graphic used as mask positioned 40px from the top and 20px from the left */
mask: url('masks.svg#star') 40px 20px;

/* Element within SVG graphic used as mask with a width and height of 50px */
mask: url('masks.svg#star') 0 0/50px 50px;

/* Element within SVG graphic used as horizontally repeated mask */
mask: url('masks.svg#star') repeat-x;

/* Element within SVG graphic used as mask extending to the box enclosed by the stroke */
mask: url('masks.svg#star') stroke-box;

/* Element within SVG graphic used as mask and combined with background using non-overlapping parts */
mask: url('masks.svg#star') exclude;

/* Global values */
mask: inherit;
mask: initial;
mask: unset;
```

## Значения

Значение по-умолчанию:

```css
mask-image: none;
mask-mode: match-source;
mask-repeat: no-repeat;
mask-position: center;
mask-clip: border-box;
mask-origin: border-box;
mask-size: auto;
mask-composite: add;
```

Применяется ко всем элементам

## Спецификации

- [CSS Masking Module Level 1](https://drafts.fxtf.org/css-masking-1/#the-mask)
- [Scalable Vector Graphics (SVG) 1.1 (Second Edition)](http://www.w3.org/TR/SVG11/masking.html#MaskProperty)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-masks" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-masks">Can I Use css-masks?</a> Data on support for the css-masks feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```css
.target {
  mask: url('#c1') luminance;
}

.anothertarget {
  mask: url('resources.svg#c1') 50px 30px/10px 10px repeat-x
    exclude;
}
```
