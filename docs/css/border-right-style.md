---
description: Свойство border-right-style устанавливает стиль границы справа от элемента
---

# border-right-style

Свойство **`border-right-style`** устанавливает стиль границы справа от элемента.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - [border-bottom-style](border-bottom-style.md)
    - [border-bottom-width](border-bottom-width.md)
    - [border-collapse](border-collapse.md)
    - [border-color](border-color.md)
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - [border-image-repeat](border-image-repeat.md)
    - [border-image-slice](border-image-slice.md)
    - [border-image-source](border-image-source.md)
    - [border-image-width](border-image-width.md)
    - [border-left](border-left.md)
    - [border-left-color](border-left-color.md)
    - [border-left-style](border-left-style.md)
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - **border-right-style**
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

## Синтаксис

```css
/* Keyword values */
border-right-style: none;
border-right-style: hidden;
border-right-style: dotted;
border-right-style: dashed;
border-right-style: solid;
border-right-style: double;
border-right-style: groove;
border-right-style: ridge;
border-right-style: inset;
border-right-style: outset;

/* Global values */
border-right-style: inherit;
border-right-style: initial;
border-right-style: unset;
```

## Значения

`none`
: Линия не отображается и значение её толщины обнуляется.

`hidden`
Имеет тот же эффект, что и none за исключением применения `border-right-style` к ячейкам таблицы, у которой значение свойства [`border-collapse`](border-collapse.md) установлено как `collapse`. В этом случае правая граница в ячейке не будет отображаться вообще.

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

![Рис.1. Стили границ](border_style_5.png)

Значение по-умолчанию: Нет

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-right-style)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-style-properties)

## Описание и примеры

```html
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-right-style</title>
    <style>
      .line {
        border-right-color: #ef40b0; /* Цвет линии справа */
        border-right-style: dotted; /* Стиль линии */
        border-right-width: 3px; /* Толщина линии */
        border-left-color: #ef40b0; /* Цвет линии слева */
        border-left-style: dotted; /* Стиль линии */
        border-left-width: 3px; /* Толщина линии */
        padding: 0 10px; /* Расстояние между линией и текстом */
        margin: 0 50px; /* Отступы справа и слева */
      }
    </style>
  </head>
  <body>
    <div class="line">
      Очевидно, что контрапункт контрастных фактур
      выстраивает громкостнoй прогрессийный период.
    </div>
  </body>
</html>
```
