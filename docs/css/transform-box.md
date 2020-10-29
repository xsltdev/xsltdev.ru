---
description: Свойство transform-box определяет поле макета, к которому относятся свойства transform и transform-origin
---

# transform-box

Свойство **`transform-box`** определяет поле макета, к которому относятся свойства [`transform`](transform.md) и [`transform-origin`](transform-origin.md).

## Синтаксис

```css
/* Keyword values */
transform-box: border-box;
transform-box: fill-box;
transform-box: view-box;

/* Global values */
transform-box: inherit;
transform-box: initial;
transform-box: unset;
```

## Значения

Значение по-умолчанию: `border-box`

`border-box`
: Используется border.

`fill-box`
: Ограничительная рамка объекта используется в качестве справочной.

`view-box`
: Используется ближайший SVG viewport.

## Спецификация

- [CSS Transforms Level 1](https://drafts.csswg.org/css-transforms/#transform-box)

## См. также

- [transform](transform.md)
- [transform-origin](transform-origin.md)

## Ссылки

- [transform-box](https://developer.mozilla.org/ru/docs/Web/CSS/transform-box) <sup><small>MDN (рус.)</small></sup>
