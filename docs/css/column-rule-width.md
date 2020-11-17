---
description: Свойство column-rule-width в многоколоночном тексте задаёт толщину линий между колонок
---

# column-rule-width

Свойство **`column-rule-width`** в многоколоночном тексте задаёт толщину линий между колонок.

??? info "Колонки и таблицы"

    <div class="col3" markdown="1">

    - [column-count](column-count.md)
    - [column-fill](column-fill.md)
    - [column-gap](column-gap.md)
    - [column-rule](column-rule.md)
    - [column-rule-color](column-rule-color.md)
    - [column-rule-style](column-rule-style.md)
    - **column-rule-width**
    - [column-span](column-span.md)
    - [column-width](column-width.md)
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
/* Keyword values */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;

/* Length values */
column-rule-width: 1px;
column-rule-width: 2.5em;

/* Global values */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: unset;
```

## Значения

Три переменные — `thin` (2 пикселя), `medium` (4 пикселя) и `thick` (6 пикселей) задают толщину линии. Для более точного значения толщину можно указывать в пикселях или других единицах.

### Примечание

Firefox поддерживает свойство `-moz-column-rule-width`.

Safari, Chrome и Аndroid поддерживают свойство `-webkit-column-rule-width`.

Значение по-умолчанию:

```css
column-rule-width: medium;
```

Применяется к многоколоночным элементам

## Спецификации

- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css3-multicol/#crw)

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
    <title>column-rule-width</title>
    <style>
      .book {
        columns: 3 200px;
        -webkit-columns: 3 200px;
        -moz-columns: 3 200px;
        column-rule: solid red;
        -webkit-column-rule: solid red;
        -moz-column-rule: solid red;
        column-rule-width: thin;
        -webkit-column-rule-width: thin;
        -moz-column-rule-width: thin;
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
