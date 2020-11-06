---
description: Свойство border-top-style устанавливает стиль верхней границы элемента
---

# border-top-style

Свойство **`border-top-style`** устанавливает стиль верхней границы элемента.

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
    - [border-right-style](border-right-style.md)
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - **border-top-style**
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

## Синтаксис

```css
/* Keyword values */
border-top-style: none;
border-top-style: hidden;
border-top-style: dotted;
border-top-style: dashed;
border-top-style: solid;
border-top-style: double;
border-top-style: groove;
border-top-style: ridge;
border-top-style: inset;
border-top-style: outset;

/* Global values */
border-top-style: inherit;
border-top-style: initial;
border-top-style: unset;
```

## Значения

`none`
: Линия не отображается и значение её толщины обнуляется.

`hidden`
: Имеет тот же эффект, что и none за исключением применения `border-top-style` к ячейкам таблицы, у которой значение свойства [`border-collapse`](border-collapse.md) установлено как `collapse`. В этом случае верхняя граница в ячейке не будет отображаться вообще.

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

![Рис.1. Стили границ](border_style_7.png)

Значение по-умолчанию: Нет

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-top-style)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-style-properties)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-top-style</title>
    <style>
      h1 {
        border-top-color: #800000; /* Цвет линии сверху */
        border-top-style: double; /* Стиль линии сверху */
        border-top-width: 7px; /* Толщина линии сверху */
        border-left-color: #bd0000; /* Цвет линии слева */
        border-left-style: solid; /* Стиль линии */
        border-left-width: 2px; /* Толщина линии */
        padding: 7px; /* Поля вокруг текста */
      }
    </style>
  </head>
  <body>
    <h1>Позиционный звукоряд</h1>
    <p>
      Модальное письмо может быть реализовано на основе
      принципов центропостоянности и центропеременности,
      таким образом процессуальное изменение начинает
      мономерный контрапункт контрастных фактур.
    </p>
  </body>
</html>
```
