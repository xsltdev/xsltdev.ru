# column-span

Свойство **`column-span`** определяет, как должен отображаться элемент в многоколоночном тексте — занимать ширину всех колонок или только одну из них.

Это свойство обычно применяют для заголовков текста или изображений, которые не должны разбиваться на колонки.

## Синтаксис

```css
/* Keyword values */
column-span: none;
column-span: all;

/* Global values */
column-span: inherit;
column-span: initial;
column-span: unset;
```

## Значения

`none`
: Элемент наряду с обычным содержимым занимает ширину одной колонки.

`all`
: Элемент занимает все колонки.

### Примечание

Safari, Chrome и Аndroid поддерживают свойство `-webkit-column-span`.

Значение по-умолчанию:

```css
column-span: none;
```

Применяется к: К блочным элементам (кроме таблиц), ячейкам и элементам, у которых [`display`](display.md) установлен как `inline-block`

## Спецификации

- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css3-multicol/#column-span)

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
    <title>column-span</title>
    <style>
      .book {
        column-count: 3;
        column-width: 200px;
        column-gap: 2em;
        -webkit-column-count: 3;
        -webkit-column-width: 200px;
        -webkit-column-gap: 2em;
      }
      .book h1 {
        column-span: all;
        -webkit-column-span: all;
      }
    </style>
  </head>
  <body>
    <div class="book">
      <h1>Звукорядный аккорд: асинхронное ритмическое поле или адажио?</h1>
      Как было показано выше, кризис жанра дает звукоряд, и здесь в качестве модуса конструктивных элементов используется ряд каких-либо единых длительностей. Фьюжн, по определению, полифигурно варьирует гармонический интервал, и если в одних голосах или пластах музыкальной ткани сочинения еще продолжаются конструктивно-композиционные процессы предыдущей части, то в других — происходит становление новых. Трехчастная фактурная форма, в первом приближении, возможна. Форшлаг изящно продолжает хамбакер, и если в одних голосах или пластах музыкальной ткани сочинения еще продолжаются конструктивно-композиционные процессы предыдущей части, то в других — происходит становление новых.
    </div>
  </body>
</html>
```
