---
description: Свойство grid-column-gap определяет размер ширины линий. Вы можете думать об этом, как о настройке ширины отступов между столбцами
---

# grid-column-gap

Свойство **`grid-column-gap`** определяет размер ширины линий. Вы можете думать об этом, как о настройке ширины отступов между столбцами.

## Синтаксис

```css
/* <length> values */
grid-column-gap: 20px;
grid-column-gap: 1em;
grid-column-gap: 3vmin;
grid-column-gap: 0.5cm;

/* <percentage> value */
grid-column-gap: 10%;

/* Global values */
grid-column-gap: inherit;
grid-column-gap: initial;
grid-column-gap: unset;
```

## Значения

Значение по-умолчанию: `0`

Применяется к grid-контейнерам

Анимируется: да

`<line-size>`
: значение размера;

## Спецификации

- [CSS Grid Layout](https://drafts.csswg.org/css-grid/#propdef-grid-column-gap)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-grid" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-grid">Can I Use css-grid?</a> Data on support for the css-grid feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
```

![CSS Grid row gap](grid-column-row-gap.png)

Отступы создаются только между колонками и строками, но не для внешних краев сетки.

## См. также

- [Руководство по Grid Layout](grid-guide/grid-1.md)
