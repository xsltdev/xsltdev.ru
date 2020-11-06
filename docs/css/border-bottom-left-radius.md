---
description: Свойство border-bottom-left-radius устанавливает радиус скругления левого нижнего угла рамки
---

# border-bottom-left-radius

Свойство **`border-bottom-left-radius`** устанавливает радиус скругления левого нижнего угла рамки.

Если рамка не задана, то скругление также происходит и с фоном.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - **border-bottom-left-radius**
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
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

## Синтаксис

```css
/* the corner is a circle */
/* border-bottom-left-radius: radius */
border-bottom-left-radius: 3px;

/* Percentage values */
border-bottom-left-radius: 20%; /* corner of a circle if box is a square or else corner of a rectangle */
border-bottom-left-radius: 20% 20%; /* same as above */ /* 20% of horizontal(width) and vertical(height) */
border-bottom-left-radius: 20% 10%; /* 20% of horizontal(width) and 10% of vertical(height) */

/* the corner is an ellipsis */
/* border-bottom-left-radius: horizontal vertical */
border-bottom-left-radius: 0.5em 1em;

border-bottom-left-radius: inherit;
```

## Значения

В качестве радиуса указывается любое допустимое в CSS значение (px, cm, in, em и др.), а также проценты, в этом случае радиус скругления считается от ширины блока.

Необязательное второе значение предназначено для создания эллиптического уголка, первое значение при этом устанавливает радиус по горизонтали, а второе — радиус по вертикали (рис. 1).

![Рис. 1. Радиус скругления для создания разных типов уголков](css_border-bottom-left-radius_1.png)

Значение по-умолчанию:

```css
border-bottom-left-radius: 0;
```

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-bottom-left-radius)

## Поддержка браузерами

<p class="ciu_embed" data-feature="border-radius" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=border-radius">Can I Use border-radius?</a> Data on support for the border-radius feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-bottom-left-radius</title>
    <style>
      .radius {
        background: #fc0;
        padding: 15px;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div
      style="border-bottom-left-radius: 20px"
      class="radius"
    >
      border-bottom-left-radius: 20px
    </div>
    <div
      style="border-bottom-left-radius: 70px 40px"
      class="radius"
    >
      border-bottom-left-radius: 70px 40px
    </div>
  </body>
</html>
```
