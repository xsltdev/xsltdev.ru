# min-width

Свойство **`min-width`** устанавливает минимальную ширину элемента.

Если окно браузера по ширине становится меньше заданной минимальной ширины элемента, то ширина элемента остается неизменной, а в окне появляется горизонтальная полоса прокрутки.

Значение ширины элемента будет вычисляться в зависимости от установленных значений свойств [`width`](width.md), [`max-width`](max-width.md) и `min-width`.

Если значение ширины (`width`) меньше значения `min-width`, то ширина элемента принимается равной `min-width`.

## Синтаксис

```css
/* <length> value */
min-width: 3.5em;

/* <percentage> value */
min-width: 10%;

/* Keyword values */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fill-available;

/* Global values */
min-width: inherit;
min-width: initial;
min-width: unset;
```

## Значения

В качестве значений принимаются пиксели (px), проценты (%) и другие единицы измерения, принятые в CSS. Отрицательные значения не допускаются.

Значение по-умолчанию:

```css
min-width: 0;
```

Применяется к: Ко всем элементам, кроме строчных и таблиц

## Спецификации

- [CSS Intrinsic & Extrinsic Sizing Module Level 3](http://dev.w3.org/csswg/css3-sizing/#width-height-keywords)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visudet.html#min-max-widths)

## Поддержка браузерами

<p class="ciu_embed" data-feature="minmaxwh" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=minmaxwh">Can I Use minmaxwh?</a> Data on support for the minmaxwh feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>min-width</title>
    <style>
      .container {
        min-width: 420px; /* Минимальная ширина контейнера */
      }
      .col1 {
        background-color: #fc0; /* Цвет фона колонки */
        padding: 5px; /* Поля вокруг текста */
        float: left; /* Обтекание по правому краю */
        width: 150px; /* Ширина левой колонки */
      }
      .col2 {
        background-color: #c0c0c0; /* Цвет фона колонки */
        padding: 5px; /* Поля вокруг текста */
        width: 250px; /* Ширина правой колонки */
        float: left; /* Обтекание по правому краю */
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="col1">Колонка 1</div>
      <div class="col2">Колонка 2</div>
    </div>
  </body>
</html>
```
