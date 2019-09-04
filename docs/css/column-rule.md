---
description: Свойство column-rule в многоколоночном тексте отрисовывает линию между колонок и определяет её параметры
---

# column-rule

Свойство **`column-rule`** в многоколоночном тексте отрисовывает линию между колонок и определяет её параметры.

## Синтаксис

```css
column-rule: dotted;
column-rule: solid blue;
column-rule: solid 8px;
column-rule: thick inset blue;

/* Global values */
column-rule: inherit;
column-rule: initial;
column-rule: unset;
```

## Значения

Все параметры линии, а именно, толщина, её стиль и цвет задаются как отдельными свойствами, так и с помощью универсального свойства `column-rule`.

Свойство [`column-rule-width`](column-rule-width.md) определяет толщину линии. Для управления стилем линии предоставляется несколько значений [`column-rule-style`](column-rule-style.md). Их названия и результат действия представлен на рис. 1.

![Рис.1. Стили линии](border_style_8.png)

[`column-rule-color`](column-rule-color.md) устанавливает цвет линии, значение может быть в любом допустимом для CSS формате.

Значение по-умолчанию:

```css
column-rule: medium none;
```

Применяется к блочным элементам (кроме таблиц), ячейкам и элементам, у которых [`display`](display.md) установлен как `inline-block`

## Спецификации

- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css3-multicol/#column-rule)

### Примечание

Firefox поддерживает свойство `-moz-column-rule`.

Safari, Chrome и Аndroid поддерживают свойство `-webkit-column-rule`.

## Поддержка браузерами

<p class="ciu_embed" data-feature="multicolumn" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=multicolumn">Can I Use multicolumn?</a> Data on support for the multicolumn feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>column-rule</title>
    <style>
      .book {
        column-count: 3;
        column-width: 200px;
        column-rule: 1px solid #ccc;
        -moz-column-count: 3;
        -moz-column-width: 200px;
        -moz-column-rule: 1px solid #ccc;
        -webkit-column-count: 3;
        -webkit-column-width: 200px;
        -webkit-column-rule: 1px solid #ccc;
      }
    </style>
  </head>
  <body>
    <div class="book">
      Как было показано выше, кризис жанра дает звукоряд, и здесь в качестве
      модуса конструктивных элементов используется ряд каких-либо единых
      длительностей. Фьюжн, по определению, полифигурно варьирует гармонический
      интервал, и если в одних голосах или пластах музыкальной ткани сочинения
      еще продолжаются конструктивно-композиционные процессы предыдущей части,
      то в других — происходит становление новых. Трехчастная фактурная форма, в
      первом приближении, возможна. Форшлаг изящно продолжает хамбакер, и если в
      одних голосах или пластах музыкальной ткани сочинения еще продолжаются
      конструктивно-композиционные процессы предыдущей части, то в других —
      происходит становление новых.
    </div>
  </body>
</html>
```
