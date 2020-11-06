---
description: Свойство border-right-width устанавливает толщину границы справа от элемента
---

# border-right-width

Свойство **`border-right-width`** устанавливает толщину границы справа от элемента.

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
    - **border-right-width**
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
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* <length> values */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* Global keywords */
border-right-width: inherit;
border-right-width: initial;
border-right-width: unset;
```

## Значения

Три переменные — `thin` (2 пикселя), `medium` (4 пикселя) и `thick` (6 пикселей) задают толщину границы справа. Для более точного значения, толщину можно указывать в пикселях или других единицах.

Значение по-умолчанию:

```css
border-right-width: medium;
```

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#the-border-width)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-width-properties)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-right-width</title>
    <style>
      .line {
        border-right-color: #c38e63; /* Цвет линии справа */
        border-right-style: dashed; /* Стиль линии */
        border-right-width: 2px; /* Толщина линии */
        border-left-color: #c38e63; /* Цвет линии слева */
        border-left-style: dashed; /* Стиль линии */
        border-left-width: 2px; /* Толщина линии */
        padding: 0 10px; /* Расстояние между линией и текстом */
      }
    </style>
  </head>
  <body>
    <div class="line">
      Модальное письмо может быть реализовано на основе
      принципов центропостоянности и центропеременности,
      таким образом шоу-бизнес интуитивно понятен.
    </div>
  </body>
</html>
```
