---
description: Свойство border-bottom-width устанавливает толщину границы внизу элемента
---

# border-bottom-width

Свойство **`border-bottom-width`** устанавливает толщину границы внизу элемента.

## Синтаксис

```css
/* Keyword values */
border-bottom-width: thin;
border-bottom-width: medium;
border-bottom-width: thick;

/* <length> values */
border-bottom-width: 10em;
border-bottom-width: 3vmax;
border-bottom-width: 6px;

/* Global keywords */
border-bottom-width: inherit;
border-bottom-width: initial;
border-bottom-width: unset;
```

## Значения

Три переменные — `thin` (2 пикселя), `medium` (4 пикселя) и `thick` (6 пикселей) задают толщину границы внизу. Для более точного значения, толщину можно указывать в пикселях или других единицах.

Значение по-умолчанию:

```css
border-bottom-width: medium;
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
    <title>border-bottom-width</title>
    <style>
      h1 {
        border-color: #ccc; /* Цвет границы */
        border-style: double; /* Стиль границы */
        border-bottom-width: 7px; /* Толщина линии внизу текста */
        border-right-width: 7px; /* Толщина линии справа от текста */
        padding-left: 5px; /* Отступ слева от текста */
      }
    </style>
  </head>
  <body>
    <h1>Рондо начинает определенный фьюжн.</h1>
  </body>
</html>
```
