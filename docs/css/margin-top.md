# margin-top

Свойство **`margin-top`** устанавливает величину отступа от верхнего края элемента.

Отступом является расстояние от внешнего края верхней границы текущего элемента до внутренней границы его родительского элемента (рис. 1).

![Рис. 1. Отступ от верхнего края элемента](css_margin-top_1.png)

## Синтаксис

```css
/* <length> values */
margin-top: 10px; /* An absolute length */
margin-top: 1em; /* relative to the text size */
margin-top: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-top: auto;

/* Global values */
margin-top: inherit;
margin-top: initial;
margin-top: unset;
```

## Значения

Величину верхнего отступа можно указывать в пикселях (px), процентах (%) или других допустимых для CSS единицах. Значение может быть как положительным, так и отрицательным числом.

- `auto` -- Указывает, что размер отступов будет автоматически рассчитан браузером.

Значение по-умолчанию:

```css
margin-top: 0;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Basic Box Model](http://dev.w3.org/csswg/css3-box/#margin)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#margin-properties)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#margin-top)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>margin-top</title>
    <style>
      div {
        background: #fc3; /* Цвет фона */
        border: 2px solid black; /* Параметры рамки */
        padding: 20px; /* Поля вокруг текста */
        margin-top: 20%; /* Отступ сверху */
      }
    </style>
  </head>
  <body>
    <div>
      Весьма существенно следующее: аллегория монотонно иллюстрирует невротический холерик, таким образом, второй комплекс движущих сил получил разработку в трудах А.Берталанфи и Ш.Бюлера.
    </div>
  </body>
</html>
```
