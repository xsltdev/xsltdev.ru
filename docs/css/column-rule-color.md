# column-rule-color

Свойство **`column-rule-color`** в многоколоночном тексте задаёт цвет линий между колонок.

Если такой цвет явно не указан, то цвет текста в колонках и цвет линий между ними совпадает.

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

Применяется к: К многоколоночным элементам

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
      Как было показано выше, кризис жанра дает звукоряд, и здесь в качестве модуса конструктивных элементов используется ряд каких-либо единых длительностей. Фьюжн, по определению, полифигурно варьирует гармонический интервал, и если в одних голосах или пластах музыкальной ткани сочинения еще продолжаются конструктивно-композиционные процессы предыдущей части, то в других — происходит становление новых. Трехчастная фактурная форма, в первом приближении, возможна. Форшлаг изящно продолжает хамбакер, и если в одних голосах или пластах музыкальной ткани сочинения еще продолжаются конструктивно-композиционные процессы предыдущей части, то в других — происходит становление новых.
    </div>
  </body>
</html>
```
