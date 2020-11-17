---
description: Свойство column-count определяет количество колонок в многоколоночном тексте
---

# column-count

Свойство **`column-count`** определяет количество колонок в многоколоночном тексте.

??? info "Колонки и таблицы"

    <div class="col3" markdown="1">

    - **column-count**
    - [column-fill](column-fill.md)
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
/* <integer> value */
column-count: 3;

/* Keyword value */
column-count: auto;

/* Global values */
column-count: inherit;
column-count: initial;
column-count: unset;
```

## Значения

`<число>`
: Целое число больше нуля, задающее оптимальное число колонок.

`auto`
: Число колонок вычисляется автоматически на основе других свойств ([`column-width`](column-width.md), [`column-gap`](column-gap.md)).

### Примечание

Firefox поддерживает свойство `-moz-column-count`.

Safari, Chrome и Аndroid поддерживают свойство `-webkit-column-count`.

Значение по-умолчанию:

```css
column-count: auto;
```

Применяется к блочным элементам (кроме таблиц), ячейкам и элементам, у которых [`display`](display.md) установлен как `inline-block`

## Спецификации

- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css3-multicol/#column-count)

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
    <title>column-count</title>
    <style>
      .book {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
      }
    </style>
  </head>
  <body>
    <div class="book">
      Контрапункт контрастных фактур дает структурный
      midi-контроллер, таким образом объектом имитации
      является число длительностей в каждой из относительно
      автономных ритмогрупп ведущего голоса. Протяженность,
      по определению, просветляет флэнжер, хотя это довольно
      часто напоминает песни Джима Моррисона и Патти Смит.
    </div>
  </body>
</html>
```
