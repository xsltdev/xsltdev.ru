---
description: Свойство column-fill определяет, как контент должен распределяться внутри колонок
---

# column-fill

Свойство **`column-fill`** определяет, как контент должен распределяться внутри колонок.

??? info "Колонки и таблицы"

    <div class="col3" markdown="1">

    - [column-count](column-count.md)
    - **column-fill**
    - [column-gap](column-gap.md)
    - [column-rule](column-rule.md)
    - [column-rule-color](column-rule-color.md)
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
/* Keyword values */
column-fill: auto;
column-fill: balance;

/* Global values */
column-fill: inherit;
column-fill: initial;
column-fill: unset;
```

## Значения

`auto`
: Колонки заполняются последовательно.

`balance`
: Контент равномерно распределяется между колонок. При печати это правило относится только к последней странице.

`balance-all`
: Контент равномерно распределяется между колонок. При печати это правило относится ко всем страницам.

Firefox поддерживает свойство `-moz-column-fill`.

Значение по-умолчанию:

```css
column-fill: balance;
```

Применяется к многоколоночным элементам

## Спецификации

- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css-multicol-1/#cf)

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
    <title>column-fill</title>
    <style>
      .book {
        columns: 3 200px;
        -webkit-columns: 3 200px;
        -moz-columns: 3 200px;
        column-fill: balance-all;
        -webkit-column-fill: balance-all;
        -moz-column-fill: balance-all;
      }
    </style>
  </head>
  <body>
    <div class="book">
      <p>
        Как было показано выше, кризис жанра дает звукоряд,
        и здесь в качестве модуса конструктивных элементов
        используется ряд каких-либо единых длительностей.
        Фьюжн, по определению, полифигурно варьирует
        гармонический интервал, и если в одних голосах или
        пластах музыкальной ткани сочинения еще продолжаются
        конструктивно-композиционные процессы предыдущей
        части, то в других — происходит становление новых.
        Трехчастная фактурная форма, в первом приближении,
        возможна. Форшлаг изящно продолжает хамбакер, и если
        в одних голосах или пластах музыкальной ткани
        сочинения еще продолжаются
        конструктивно-композиционные процессы предыдущей
        части, то в других — происходит становление новых.
      </p>
    </div>
  </body>
</html>
```
