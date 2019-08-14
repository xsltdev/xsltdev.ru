# border-left-style

Свойство **`border-left-style`** устанавливает стиль границы слева от элемента.

## Синтаксис

```css
/* Keyword values */
border-left-style: none;
border-left-style: hidden;
border-left-style: dotted;
border-left-style: dashed;
border-left-style: solid;
border-left-style: double;
border-left-style: groove;
border-left-style: ridge;
border-left-style: inset;
border-left-style: outset;

/* Global values */
border-left-style: inherit;
border-left-style: initial;
border-left-style: unset;
```

## Значения

- `none` -- Линия не отображается и значение её толщины обнуляется.
- `hidden` -- Имеет тот же эффект, что и `none` за исключением применения `border-left-style` к ячейкам таблицы, у которой значение свойства [`border-collapse`](border-collapse.md) установлено как `collapse`. В этом случае левая граница в ячейке не будет отображаться вообще.
- `dotted` -- Линия состоящая из набора точек.
- `dashed` -- Пунктирная линия, состоящая из серии коротких отрезков.
- `solid` -- Сплошная линия.
- `double` -- Двойная линия.
- `groove` -- Создает эффект вдавленной линии.
- `ridge` -- Создает эффект рельефной линии.
- `inset` -- Псевдотрёхмерная линия.
- `outset` -- Псевдотрёхмерная линия.

Вид указанных стилей представлен на рис. 1.

![Рис.1. Стили границ](border_style_3.png)

Значение по-умолчанию: Нет

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-left-style)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-style-properties)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-left-style</title>
    <style>
      .line {
        border-left-color: red; /* Цвет линии слева */
        border-left-style: double; /* Стиль линии */
        border-left-width: 7px; /* Толщина линии */
        padding-left: 10px; /* Расстояние между линией и текстом */
      }
    </style>
  </head>
  <body>
    <div class="line">
      Соинтервалие многопланово продолжает контрапункт контрастных фактур, и если в одних голосах или пластах музыкальной ткани сочинения еще продолжаются конструктивно-композиционные процессы предыдущей части, то в других - происходит становление новых.
    </div>
  </body>
</html>
```
