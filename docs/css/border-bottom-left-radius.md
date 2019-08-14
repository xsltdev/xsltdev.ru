# border-bottom-left-radius

Свойство **`border-bottom-left-radius`** устанавливает радиус скругления левого нижнего угла рамки.

Если рамка не задана, то скругление также происходит и с фоном.

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

Применяется к: Ко всем элементам

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
    <div style="border-bottom-left-radius: 20px" class="radius">
      border-bottom-left-radius: 20px
    </div>
    <div style="border-bottom-left-radius: 70px 40px" class="radius">
      border-bottom-left-radius: 70px 40px
    </div>
  </body>
</html>
```
