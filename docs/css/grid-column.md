---
layout: default
title: grid-column
nav_order:
parent: CSS
---

<!-- prettier-ignore-start -->
# grid-column
{: .no_toc }
<!-- prettier-ignore-end -->

Свойство **`grid-column`** -- это сокращение для [`grid-column-start`](/css/grid-column-start/) + [`grid-column-end`](/css/grid-column-end/)

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

```css
/* Keyword values */
grid-column: auto;
grid-column: auto / auto;

/* <custom-ident> values */
grid-column: somegridarea;
grid-column: somegridarea / someothergridarea;

/* <integer> + <custom-ident> values */
grid-column: somegridarea 4;
grid-column: 4 somegridarea / 6;

/* span + <integer> + <custom-ident> values */
grid-column: span 3;
grid-column: span somegridarea;
grid-column: 5 somegridarea span;
grid-column: span 3 / 6;
grid-column: span somegridarea / span someothergridarea;
grid-column: 5 somegridarea span / 2 span;

/* Global values */
grid-column: inherit;
grid-column: initial;
grid-column: unset;
```

## Значения

- `<start-line> / <end-line>` — каждый из них принимает тоже самое, что и в длинной версии, включая охват;

Значение по-умолчанию:

- grid-column-start: `auto`
- grid-column-end: `auto`

## Спецификации

- [CSS Grid Layout](https://drafts.csswg.org/css-grid/#propdef-grid-column)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-grid" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-grid">Can I Use css-grid?</a> Data on support for the css-grid feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```css
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```

![CSS Grid Start End](grid-start-end-c.png)

Если значение конечной линии не указано, то элемент будет охватывать только 1 трек, по умолчанию.
