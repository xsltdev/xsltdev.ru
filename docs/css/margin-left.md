---
description: Свойство margin-left устанавливает величину отступа от левого края элемента
---

# margin-left

Свойство **`margin-left`** устанавливает величину отступа от левого края элемента.

Отступом является расстояние от внешнего края левой границы текущего элемента до внутренней границы его родительского элемента (рис. 1).

![Рис. 1. Отступ от левого края элемента](css_margin-left_1.png)

## Синтаксис

```css
/* <length> values */
margin-left: 10px; /* An absolute length */
margin-left: 1em; /* relative to the text size */
margin-left: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-left: auto;

/* Global values */
margin-left: inherit;
margin-left: initial;
margin-left: unset;
```

## Значения

Величину левого отступа можно указывать в пикселях (px), процентах (%) или других допустимых для CSS единицах. Значение может быть как положительным, так и отрицательным числом.

`auto`
: Указывает, что размер отступов будет автоматически рассчитан браузером.

Значение по-умолчанию:

```css
margin-left: 0;
```

Применяется ко всем элементам

## Спецификации

- [CSS Basic Box Model](http://dev.w3.org/csswg/css3-box/#margin)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#margin-properties)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#margin-left)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>margin-left</title>
    <style>
      .layer1 {
        background-color: #d36037; /* Цвет фона */
      }
      .layer2 {
        margin-left: 20%; /* Отступ слева */
        background-color: #ccc; /* Цвет фона */
        padding: 10px; /* Поля вокруг текста */
      }
    </style>
  </head>
  <body>
    <div class="layer1">
      <div class="layer2">
        Коллективное бессознательное, как бы это ни казалось парадоксальным,
        многопланово продолжает невротический онтологический статус искусства.
      </div>
    </div>
  </body>
</html>
```
