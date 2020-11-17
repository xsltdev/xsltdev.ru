---
description: Свойство column-width задаёт оптимальную ширину колонки в многоколоночном тексте
---

# column-width

Свойство **`column-width`** задаёт оптимальную ширину колонки в многоколоночном тексте.

Реальная ширина колонки может быть больше введённого значения, сокращение указанной ширины приводит к отмене нескольких колонок, текст при этом выстраивается в одну колонку.

??? info "Колонки и таблицы"

    <div class="col3" markdown="1">

    - [column-count](column-count.md)
    - [column-fill](column-fill.md)
    - [column-gap](column-gap.md)
    - [column-rule](column-rule.md)
    - [column-rule-color](column-rule-color.md)
    - [column-rule-style](column-rule-style.md)
    - [column-rule-width](column-rule-width.md)
    - [column-span](column-span.md)
    - **column-width**
    - [columns](columns.md)

    </div>

    <div class="col3" markdown="1">

    - [border-collapse](border-collapse.md)
    - [border-spacing](border-spacing.md)
    - [caption-side](caption-side.md)
    - [empty-cells](empty-cells.md)
    - [table-layout](table-layout.md)
    - [vertical-align](vertical-align.md)

    </div>

## Синтаксис

```css
/* Keyword value */
column-width: auto;

/* Different <length> values */
column-width: 6px;
column-width: 25em;
column-width: 0.3vw;

/* Global values */
column-width: inherit;
column-width: initial;
column-width: unset;
```

## Значения

`<размер>`
: Значение ширины колонки в абсолютных единицах CSS (например, пикселях).

`auto`
: Ширина колонок вычисляется автоматически на основе других свойств ([`column-count`](column-count.md), [`column-gap`](column-gap.md)).

### Примечание

Firefox поддерживает свойство `-moz-column-width`.

Safari, Chrome и Аndroid поддерживают свойство `-webkit-column-width`.

Значение по-умолчанию:

```css
column-width: auto;
```

Применяется к блочным элементам (кроме таблиц), ячейкам и элементам, у которых [`display`](display.md) установлен как `inline-block`

## Спецификации

- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css3-multicol/#column-width)

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
    <title>column-width</title>
    <style>
      .book {
        column-count: 3;
        column-width: 200px;
        -moz-column-count: 3;
        -moz-column-width: 200px;
        -webkit-column-count: 3;
        -webkit-column-width: 200px;
      }
    </style>
  </head>
  <body>
    <div class="book">
      Как было показано выше, кризис жанра дает звукоряд, и
      здесь в качестве модуса конструктивных элементов
      используется ряд каких-либо единых длительностей.
      Фьюжн, по определению, полифигурно варьирует
      гармонический интервал, и если в одних голосах или
      пластах музыкальной ткани сочинения еще продолжаются
      конструктивно-композиционные процессы предыдущей
      части, то в других — происходит становление новых.
      Трехчастная фактурная форма, в первом приближении,
      возможна. Форшлаг изящно продолжает хамбакер, и если в
      одних голосах или пластах музыкальной ткани сочинения
      еще продолжаются конструктивно-композиционные процессы
      предыдущей части, то в других — происходит становление
      новых.
    </div>
  </body>
</html>
```
