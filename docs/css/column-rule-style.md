---
description: Свойство column-rule-style определяет стиль линий между колонок в многоколоночном тексте
---

# column-rule-style

Свойство **`column-rule-style`** определяет стиль линий между колонок в многоколоночном тексте.

## Синтаксис

```css
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* Global values */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: unset;
```

## Значения

`none`
: Линия не отображается и значение её толщины обнуляется.

`hidden`
: Аналогично `none`.

`dotted`
: Линия состоящая из набора точек.

`dashed`
: Пунктирная линия, состоящая из серии коротких отрезков.

`solid`
: Сплошная линия.

`double`
: Двойная линия.

`groove`
: Создаёт эффект вдавленной линии.

`ridge`
: Создаёт эффект рельефной линии.

`inset`
: Псевдотрёхмерная линия.

`outset`
: Псевдотрёхмерная линия.

Вид указанных стилей представлен на рис. 1.

![Рис.1. Стили линии](border_style_9.png)

### Примечание

Firefox поддерживает свойство `-moz-column-rule-style`.

Safari, Chrome и Аndroid поддерживают свойство `-webkit-column-rule-style`.

Значение по-умолчанию:

```css
column-rule-style: none;
```

Применяется к многоколоночным элементам

## Спецификации

- [CSS Multi-column Layout Module](http://dev.w3.org/csswg/css3-multicol/#crs)

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
    <title>column-rule-style</title>
    <style>
      .book {
        columns: 3 200px;
        -webkit-columns: 3 200px;
        -moz-columns: 3 200px;
        column-rule-style: solid;
        -webkit-column-rule-style: solid;
        -moz-column-rule-style: solid;
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
