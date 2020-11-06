---
description: Свойство border-left-style устанавливает стиль границы слева от элемента
---

# border-left-style

Свойство **`border-left-style`** устанавливает стиль границы слева от элемента.

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
    - **border-left-style**
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - [border-right-style](border-right-style.md)
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

`none`
: Линия не отображается и значение её толщины обнуляется.

`hidden`
: Имеет тот же эффект, что и `none` за исключением применения `border-left-style` к ячейкам таблицы, у которой значение свойства [`border-collapse`](border-collapse.md) установлено как `collapse`. В этом случае левая граница в ячейке не будет отображаться вообще.

`dotted`
: Линия состоящая из набора точек.

`dashed`
: Пунктирная линия, состоящая из серии коротких отрезков.

`solid`
: Сплошная линия.

`double`
: Двойная линия.

`groove`
: Создает эффект вдавленной линии.

`ridge`
: Создает эффект рельефной линии.

`inset`
: Псевдотрёхмерная линия.

`outset`
: Псевдотрёхмерная линия.

Вид указанных стилей представлен на рис. 1.

![Рис.1. Стили границ](border_style_3.png)

Значение по-умолчанию: Нет

Применяется ко всем элементам

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
      Соинтервалие многопланово продолжает контрапункт
      контрастных фактур, и если в одних голосах или пластах
      музыкальной ткани сочинения еще продолжаются
      конструктивно-композиционные процессы предыдущей
      части, то в других - происходит становление новых.
    </div>
  </body>
</html>
```
