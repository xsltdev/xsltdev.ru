# column-count

Свойство **`column-count`** определяет количество колонок в многоколоночном тексте.

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

Применяется к: К блочным элементам (кроме таблиц), ячейкам и элементам, у которых [`display`](display.md) установлен как `inline-block`

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
      Контрапункт контрастных фактур дает структурный midi-контроллер, таким образом объектом имитации является число длительностей в каждой из относительно автономных ритмогрупп ведущего голоса. Протяженность, по определению, просветляет флэнжер, хотя это довольно часто напоминает песни Джима Моррисона и Патти Смит.
    </div>
  </body>
</html>
```
