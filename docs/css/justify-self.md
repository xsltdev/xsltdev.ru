# justify-self

Свойство **`justify-self`** устанавливает способ выравнивания элемента внутри его контейнера вдоль inline оси.

## Синтаксис

```css
/* Basic keywords */
justify-self: auto;
justify-self: normal;
justify-self: stretch;

/* Positional alignment */
justify-self: center; /* Pack item around the center */
justify-self: start; /* Pack item from the start */
justify-self: end; /* Pack item from the end */
justify-self: flex-start; /* Pack flex item from the start */
justify-self: flex-end; /* Pack flex item from the end */
justify-self: self-start;
justify-self: self-end;
justify-self: left; /* Pack item from the left */
justify-self: right; /* Pack item from the right */

/* Baseline alignment */
justify-self: baseline;
justify-self: first baseline;
justify-self: last baseline;

/* Overflow alignment (for positional alignment only) */
justify-self: safe center;
justify-self: unsafe center;

/* Global values */
justify-self: inherit;
justify-self: initial;
justify-self: unset;
```

## Значения

Значение по-умолчанию: `auto`

Применяется к: грид-элементам

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#propdef-justify-self)

## Поддержка браузерами

- Chrome 57+
- Edge 16+
- Firefox 45+
- Safari 10.1

## См. также

- [justify-items](justify-items.md)
