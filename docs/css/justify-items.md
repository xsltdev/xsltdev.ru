# justify-items

Свойство CSS **`justify-items`** определяет [`justify-self`](justify-self.md) по умолчанию для всех элементов блока, предоставляя им способ выравнивания по умолчанию для каждого блока вдоль соответствующей оси.

## Синтаксис

```css
/* Basic keywords */
justify-items: auto;
justify-items: normal;
justify-items: stretch;

/* Positional alignment */
justify-items: center; /* Pack items around the center */
justify-items: start; /* Pack items from the start */
justify-items: end; /* Pack items from the end */
justify-items: flex-start; /* Pack flex items from the start */
justify-items: flex-end; /* Pack flex items from the end */
justify-items: self-start;
justify-items: self-end;
justify-items: left; /* Pack items from the left */
justify-items: right; /* Pack items from the right */

/* Baseline alignment */
justify-items: baseline;
justify-items: first baseline;
justify-items: last baseline;

/* Overflow alignment (for positional alignment only) */
justify-items: safe center;
justify-items: unsafe center;

/* Legacy alignment */
justify-items: legacy right;
justify-items: legacy left;
justify-items: legacy center;

/* Global values */
justify-items: inherit;
justify-items: initial;
justify-items: unset;
```

## Значения

Значение по-умолчанию: `legacy`

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#propdef-justify-items)

## Поддержка браузерами

Поддержка флексов:

- Chrome 52+
- Edge 12+
- Firefox 20+
- IE 11+
- Safari 9+

Поддержка Grid:

- Chrome 57+
- Edge 16+
- Firefox 45+
- Safari 10.1+

## См. также

- [justify-self](justify-self.md)
