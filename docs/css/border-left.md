---
description: Свойство border-left позволяет одновременно установить толщину, стиль и цвет левой границы элемента
---

# border-left

Свойство **`border-left`** позволяет одновременно установить толщину, стиль и цвет левой границы элемента.

Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит, какое из них соответствует нужному свойству.

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
    - **border-left**
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
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

## Синтаксис

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed green;
```

## Значения

Значение [`border-left-width`](border-left-width.md) определяет толщину границы. Для управления её видом предоставляется несколько значений свойства [`border-left-style`](border-left-style.md). Их названия и результат действия представлен на рис. 1.

![Рис.1. Стили рамок](border_style_2.png)

[`border-left-color`](border-left-color.md) устанавливает цвет границы, значение может быть в любом допустимом для CSS формате.

Значение по-умолчанию: Зависит от использования

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-left)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#propdef-border-left)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#border-left)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-left</title>
    <style>
      .line {
        border-left: 2px dotted green; /* Линия слева от текста */
        padding-left: 10px; /* Расстояние между линией и текстом */
        margin-left: 10px; /* Расстояние от левого края до линии */
      }
    </style>
  </head>
  <body>
    <div class="line">
      Еще Аристотель в своей «Политике» говорил, что музыка,
      воздействуя на человека, доставляет «своего рода
      очищение, то есть облегчение, связанное с
      наслаждением», однако арпеджио монотонно выстраивает
      изоритмический флэнжер. Ощущение мономерности
      ритмического движения возникает, как правило, в
      условиях темповой стабильности, тем не менее
      микрохроматический интервал неустойчив.
    </div>
  </body>
</html>
```
