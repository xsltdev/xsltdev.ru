---
description: Свойство grid-column — это сокращение для grid-column-start + grid-column-end
---

# grid-column

Свойство **`grid-column`** — это сокращение для [`grid-column-start`](grid-column-start.md) + [`grid-column-end`](grid-column-end.md).

??? info "Grid Layout"

    **Руководство по [Grid Layout](grid-guide/grid-1.md)**

    <div class="col3" markdown="1">

    - [grid](grid.md)
    - [grid-area](grid-area.md)
    - [grid-auto-columns](grid-auto-columns.md)
    - [grid-auto-flow](grid-auto-flow.md)
    - [grid-auto-rows](grid-auto-rows.md)
    - **grid-column**
    - [grid-column-end](grid-column-end.md)
    - [grid-column-gap](grid-column-gap.md)
    - [grid-column-start](grid-column-start.md)
    - [grid-gap](grid-gap.md)
    - [grid-row](grid-row.md)
    - [grid-row-end](grid-row-end.md)
    - [grid-row-gap](grid-row-gap.md)
    - [grid-row-start](grid-row-start.md)
    - [grid-template](grid-template.md)
    - [grid-template-areas](grid-template-areas.md)
    - [grid-template-columns](grid-template-columns.md)
    - [grid-template-rows](grid-template-rows.md)

    </div>

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

`<start-line> / <end-line>`
: каждый из них принимает тоже самое, что и в длинной версии, включая охват;

Значение по-умолчанию:

- [`grid-column-start`](grid-column-start.md): `auto`
- [`grid-column-end`](grid-column-end.md): `auto`

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

## См. также

- [Руководство по Grid Layout](grid-guide/grid-1.md)
