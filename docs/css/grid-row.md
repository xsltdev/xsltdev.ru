# grid-row

Свойство **`grid-row`** сокращение для [`grid-row-start`](/css/grid-row-start/) и [`grid-row-end`](/css/grid-row-end/)

## Синтаксис

```css
/* Keyword values */
grid-row: auto;
grid-row: auto / auto;

/* <custom-ident> values */
grid-row: somegridarea;
grid-row: somegridarea / someothergridarea;

/* <integer> + <custom-ident> values */
grid-row: somegridarea 4;
grid-row: 4 somegridarea / 6;

/* span + <integer> + <custom-ident> values */
grid-row: span 3;
grid-row: span somegridarea;
grid-row: 5 somegridarea span;
grid-row: span 3 / 6;
grid-row: span somegridarea / span someothergridarea;
grid-row: 5 somegridarea span / 2 span;

/* Global values */
grid-row: inherit;
grid-row: initial;
grid-row: unset;
```

## Значения

Значение по-умолчанию:

- grid-row-start: `auto`
- grid-row-end: `auto`

`<start-line> / <end-line>` — каждый из них принимает тоже самое, что и в длинной версии, включая охват;

## Спецификации

- [CSS Grid Layout](https://drafts.csswg.org/css-grid/#propdef-grid-row)

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

![CSS Grid Start End](grid-start-end-c_1.png)

Если значение конечной линии не указано, то элемент будет охватывать только 1 трек, по умолчанию.
