# border-image-width

Свойство **`border-image-width`** управляет шириной видимой части рамки, масштабирует ее.

Если это значение больше ширины [`border-width`](border-width.md), картинка рамки заползет под содержимое.

## Синтаксис

```css
/* border-image-width: all */
border-image-width: 3;

/* border-image-width: vertical horizontal */
border-image-width: 2em 3em;

/* border-image-width: top horizontal bottom */
border-image-width: 5% 15% 10%;

/* border-image-width: top right bottom left */
border-image-width: 5% 2em 10% auto;

/* Global values */
border-image-width: inherit;
border-image-width: initial;
border-image-width: unset;
```

## Значения

Значение по-умолчанию:

```css
border-image-width: 1;
```

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds-3/#border-image-width)

## Поддержка браузерами

<p class="ciu_embed" data-feature="border-image" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=border-image">Can I Use border-image?</a> Data on support for the border-image feature across the major browsers from caniuse.com.
</p>
