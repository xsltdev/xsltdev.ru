# place-self

Свойство **`place-self`** - это сокращенное свойство, устанавливающее свойства [`align-self`](align-self.md) и [`justify-self`](justify-self.md). Если второе значение отсутствует, для него используется первое значение.

## Синтаксис

```css
/* Keyword values */
place-self: auto center;
place-self: normal start;

/* Positional alignment */
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;
place-self: left auto;
place-self: right normal;

/* Baseline alignment */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* Global values */
place-self: inherit;
place-self: initial;
place-self: unset;
```

## Значения

Значение по-умолчанию: `auto auto`

Применяется к: гридам

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#place-self-property)

## Поддержка браузерами

Поддержка в флексах:

- Chrome 59+
- Firefox 45+

Поддержка в гридах:

- Chrome 59+
- Firefox 45+

## См. также

- [align-self](align-self.md)
- [justify-self](justify-self.md)
