---
description: Свойство column-rule-color в многоколоночном тексте задаёт цвет линий между колонок
---

# column-rule-color

Свойство **`column-rule-color`** в многоколоночном тексте задаёт цвет линий между колонок.

Если такой цвет явно не указан, то цвет текста в колонках и цвет линий между ними совпадает.

??? info "Колонки и таблицы"

    <div class="col3" markdown="1">

    - [column-count](column-count.md)
    - [column-fill](column-fill.md)
    - [column-gap](column-gap.md)
    - [column-rule](column-rule.md)
    - **column-rule-color**
    - [column-rule-style](column-rule-style.md)
    - [column-rule-width](column-rule-width.md)
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
/* <color> values */
column-rule-color: red;
column-rule-color: rgb(192, 56, 78);
column-rule-color: transparent;
column-rule-color: hsla(0, 100%, 50%, 0.6);

/* Global values */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: unset;
```

## Значения

`<цвет>`
: устанавливает цвет линии, значение может быть в любом допустимом для CSS формате.

### Примечание

Firefox поддерживает свойство `-moz-column-rule-color`.

Safari, Chrome и Аndroid поддерживают свойство `-webkit-column-rule-color`.

Значение по-умолчанию: Совпадает с цветом текста

Применяется к многоколоночным элементам

## Спецификации

- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css3-multicol/#crc)

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
    <title>column-rule-color</title>
    <style>
      .book {
        columns: 3 200px;
        -webkit-columns: 3 200px;
        -moz-columns: 3 200px;
        column-rule: 2px solid;
        -webkit-column-rule: 2px solid;
        -moz-column-rule: 2px solid;
        column-rule-color: #ccc;
        -webkit-column-rule-color: #ccc;
        -moz-column-rule-color: #ccc;
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
