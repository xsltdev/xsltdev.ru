---
description: Свойство background-color определяет цвет фона элемента
---

# background-color

Свойство **`background-color`** определяет цвет фона элемента.

Хотя это свойство не наследует свойства своего родителя, из-за того, что начальное значение устанавливается прозрачным, цвет фона дочерних элементов совпадает с цветом фона родительского элемента.

## Синтаксис

```css
/* Keyword values */
background-color: red;

/* Hexadecimal value */
background-color: #bbff00;

/* Hexadecimal value with alpha channel */
background-color: #11ffee00; /* 00 - fully transparent */
background-color: #11ffeeff; /* ff - fully opaque */

/* RGB value */
background-color: rgb(255, 255, 128);

/* RGBA value or RGB with alpha channel */
background-color: rgba(117, 190, 218, 0); /* 0.0 - fully transparent */
background-color: rgba(117, 190, 218, 0.5); /* 0.5 - semi-transparent */
background-color: rgba(117, 190, 218, 1); /* 1.0 - fully opaque */

/* HSLA value */
background-color: hsla(50, 33%, 25%, 0.75);

/* Special keyword values */
background-color: currentcolor;
background-color: transparent;

/* Global values */
background-color: inherit;
background-color: initial;
background-color: unset;
```

## Значения

`цвет`
: Цвет

`transparent`
: устанавливает прозрачный фон

Значение по-умолчанию:

```css
background-color: transparent;
```

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#background-color)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/colors.html#propdef-background-color)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#background-color)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>background-color</title>
    <style>
      body {
        background-color: #3366cc; /* Цвет фона веб-страницы */
      }
      h1 {
        background-color: RGB(249, 201, 16); /* Цвет фона под заголовком */
      }
      p {
        background-color: maroon; /* Цвет фона под текстом параграфа */
        color: white; /* Цвет текста */
      }
    </style>
  </head>
  <body>
    <h1>Lorem ipsum dolor sit amet</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy
      nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.
    </p>
  </body>
</html>
```

В данном примере для элементов веб-страницы применяется три различных способа задания фонового цвета.
