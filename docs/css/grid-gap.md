---
layout: default
title: grid-gap
nav_order:
parent: CSS
---

<!-- prettier-ignore-start -->
# grid-gap
{: .no_toc }
<!-- prettier-ignore-end -->

Свойство **`grid-gap`** - это сокращение для [`grid-row-gap`](/css/grid-row-gap/) и [`grid-column-gap`](/css/grid-column-gap/).

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

```css
/* One <length> value */
grid-gap: 20px;
grid-gap: 1em;
grid-gap: 3vmin;
grid-gap: 0.5cm;

/* One <percentage> value */
grid-gap: 16%;
grid-gap: 100%;

/* Two <length> values */
grid-gap: 20px 10px;
grid-gap: 1em 0.5em;
grid-gap: 3vmin 2vmax;
grid-gap: 0.5cm 2mm;

/* One or two <percentage> values */
grid-gap: 16% 100%;
grid-gap: 21px 82%;

/* Global values */
grid-gap: inherit;
grid-gap: initial;
grid-gap: unset;
```

## Значения

Значение по-умолчанию:

- grid-row-gap: `0`
- grid-column-gap: `0`

Применяется к: к grid-контейнерам

Анимируется: да

- `<grid-row-gap>` `<grid-column-gap>` — значения размеров;

## Спецификации

- [CSS Grid Layout](https://drafts.csswg.org/css-grid/#propdef-grid-gap)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-grid" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-grid">Can I Use css-grid?</a> Data on support for the css-grid feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  grid-gap: 10px 15px;
}
```

Если значение для `grid-row-gap` не задано, ему присваивается такое же значение как и у `grid-column-gap`.
