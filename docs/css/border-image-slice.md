---
description: Свойство border-image-slice разделяет изображение, указанное в border-image-source на девять регионов - четыре угла, четыре края и середину
---

# border-image-slice

Свойство **`border-image-slice`** разделяет изображение, указанное в [`border-image-source`](border-image-source.md) на девять регионов: четыре угла, четыре края и середину.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - [border-bottom-style](border-bottom-style.md)
    - [border-bottom-width](border-bottom-width.md)
    - [border-collapse](border-collapse.md)
    - [border-color](border-color.md)
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - [border-image-repeat](border-image-repeat.md)
    - **border-image-slice**
    - [border-image-source](border-image-source.md)
    - [border-image-width](border-image-width.md)
    - [border-left](border-left.md)
    - [border-left-color](border-left-color.md)
    - [border-left-style](border-left-style.md)
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - [border-right-style](border-right-style.md)
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

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
