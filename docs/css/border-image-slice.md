---
description: Свойство border-image-slice разделяет изображение, указанное в border-image-source на девять регионов - четыре угла, четыре края и середину
---

# border-image-slice

Свойство **`border-image-slice`** разделяет изображение, указанное в [`border-image-source`](border-image-source.md) на девять регионов: четыре угла, четыре края и середину.

## Синтаксис

```css
/* border-image-slice: slice */
border-image-slice: 30%;

/* border-image-slice: vertical horizontal */
border-image-slice: 10% 30%;

/* border-image-slice: top horizontal bottom */
border-image-slice: 30 30% 45;

/* border-image-slice: top right bottom left */
border-image-slice: 7 12 14 5;

/* border-image-slice: … fill */
/* The fill value can be placed between any value */
border-image-slice: 10% fill 7 12;

/* Global values */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: unset;
```

## Значения

Значение по-умолчанию:

```css
border-image-slice: 100%;
```

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds-3/#border-image-slice)

## Поддержка браузерами

<p class="ciu_embed" data-feature="border-image" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=border-image">Can I Use border-image?</a> Data on support for the border-image feature across the major browsers from caniuse.com.
</p>
