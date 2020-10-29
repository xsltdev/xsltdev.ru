---
description: Свойство tab-size используется для настройки ширины символа табуляции (U+0009).
---

# tab-size

Свойство **`tab-size`** используется для настройки ширины символа табуляции (`U+0009`).

## Синтаксис

```css
/* <integer> значения */
tab-size: 4;
tab-size: 0;

/* <length> значения */
tab-size: 10px;
tab-size: 2em;

/* Глобальные значения */
tab-size: inherit;
tab-size: initial;
tab-size: unset;
```

## Значения

`<integer>`
: Количество пробелов в табе. Должно быть неотрицательным.

`<length>`
: Ширина таба. Должно быть неотрицательным.

## Спецификация

- [CSS Text Module Level 3](https://drafts.csswg.org/css-text-3/#tab-size-property)

## Пример

```css
pre {
  tab-size: 4; /* Установит размер таба в 4 пробела */
}
pre {
  tab-size: 0; /* Удалит отступ */
}
pre {
  tab-size: 2; /* Установит размер таба в 2 пробела */
}
```

## Ссылки

- [tab-size](https://developer.mozilla.org/ru/docs/Web/CSS/tab-size) <sup><small>MDN (рус.)</small></sup>
