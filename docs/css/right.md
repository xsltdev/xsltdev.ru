---
description: Свойство right для позиционированного элемента определяет расстояние от правого края родительского элемента, не включая отступ, поле и ширину рамки, до правого края дочернего элемента
---

# right

Свойство **`right`** для позиционированного элемента определяет расстояние от правого края родительского элемента, не включая отступ, поле и ширину рамки, до правого края дочернего элемента.

Отсчёт координат зависит от значения свойства [`position`](position.md). Если оно равно `absolute`, в качестве родителя выступает окно браузера и положение элемента определяется от его правого края (рис. 1). В случае значения `relative`, `right` отсчитывается от правого края исходного положения элемента.

[Рис. 1. Значение свойства right относительно окна браузера](css_right_1.png)

Если для родительского элемента задано `position: relative`, то абсолютное позиционирование дочерних элементов определяет их положение от правого края родителя (рис. 2).

[Рис. 2. Значение свойства right относительно родителя](css_right_2.png)

??? info "Позиционирование"

    <div class="col3" markdown="1">

    - [bottom](bottom.md)
    - [clear](clear.md)
    - [display](display.md)
    - [float](float.md)
    - [left](left.md)
    - [position](position.md)
    - **right**
    - [top](top.md)
    - [z-index](z-index.md)

    </div>

## Синтаксис

```css
/* <length> values */
right: 3px;
right: 2.4em;

/* <percentage>s of the width of the containing block */
right: 10%;

/* Keyword value */
right: auto;

/* Global values */
right: inherit;
right: initial;
right: unset;
```

## Значения

В качестве значений принимаются любые единицы длины, принятые в CSS — например, пикселы (px), дюймы (in), пункты (pt) и др. Значение свойства `right` может быть и отрицательным, в этом случае возможны наложения разных элементов друг на друга. При задании значения в процентах, положение элемента вычисляется в зависимости от ширины родительского элемента.

`auto`
: Не изменяет положение элемента.

Значение по-умолчанию: `auto`

Применяется ко всем элементам

## Спецификации

- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visuren.html#propdef-right)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>right</title>
    <style>
      .leftcol {
        position: absolute; /* Абсолютное позиционирование */
        top: 20px; /* Положение от верхнего края */
        left: 10px; /* Положение от левого края */
        width: 100px; /* Ширина блока */
        background: #fc3; /* Цвет фона */
        border: 1px solid #000; /* Параметры рамки */
        padding: 10px; /* Поля вокруг текста */
      }
      .centercol {
        position: relative; /* Относительное позиционирование */
        background: maroon; /* Цвет фона */
        padding: 10px; /* Поля вокруг текста */
        color: white; /* Цвет текста */
        border: 1px solid #000; /* Параметры рамки */
        margin: 20px 240px 0 140px; /* Отступы вокруг блока */
      }
      .rightcol {
        position: absolute; /* Абсолютное позиционирование */
        top: 20px; /* Положение от верхнего края */
        right: 10px; /* Положение от правого края */
        width: 200px; /* Ширина блока */
        background: #ccc; /* Цвет фона */
        border: 1px solid black; /* Параметры рамки */
        padding: 10px; /* Поля вокруг текста */
      }
    </style>
  </head>
  <body>
    <div class="leftcol">Колонка 1</div>
    <div class="centercol">Колонка 2</div>
    <div class="rightcol">Колонка 3</div>
  </body>
</html>
```
