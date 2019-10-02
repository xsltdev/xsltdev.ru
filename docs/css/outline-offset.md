---
description: Свойство outline-offset устанавливает расстояние между рамкой, созданной с помощью свойства outline, и краем или границей элемента добавленной через border
---

# outline-offset

Свойство **`outline-offset`** устанавливает расстояние между рамкой, созданной с помощью свойства [`outline`](outline.md), и краем или границей элемента добавленной через [`border`](border.md).

## Синтаксис

```css
/* <length> values */
outline-offset: 3px;
outline-offset: 0.2em;

/* Global values */
outline-offset: inherit;
outline-offset: initial;
outline-offset: unset;
```

## Значения

`<размер>`
: Задаёт расстояние от края элемента до рамки. Отрицательное значение отображает рамку внутри элемента, положительное — вокруг элемента.

Значение по-умолчанию: `0`

Применяется ко всем элементам

## Спецификации

- [CSS Transitions](https://drafts.csswg.org/css-transitions/#animatable-css)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#outline-offset)

## Поддержка браузерами

<p class="ciu_embed" data-feature="outline" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=outline">Can I Use outline?</a> Data on support for the outline feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>outline-offset</title>
    <style>
      .clue {
        background: url(/example/image/leather.jpg); /* Фоновый рисунок */
        outline: 2px dashed rgba(255, 255, 255, 0.8); /* Пунктирная рамка */
        outline-offset: -10px; /* Выводим рамку внутри элемента */
        padding: 10px; /* Поля */
        min-height: 100px; /* Минимальная высота */
      }
    </style>
  </head>
  <body>
    <div class="clue"></div>
  </body>
</html>
```
