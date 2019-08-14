# border-top-width

Свойство **`border-top-width`** устанавливает толщину границы сверху элемента.

## Синтаксис

```css
/* Keyword values */
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* <length> values */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* Global keywords */
border-top-width: inherit;
border-top-width: initial;
border-top-width: unset;
```

## Значения

Три переменные — `thin` (2 пикселя), `medium` (4 пикселя) и `thick` (6 пикселей) задают толщину границы. Для более точного значения, толщину можно указывать в пикселях или других единицах.

Значение по-умолчанию:

```css
border-top-width: medium;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#the-border-width)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-width-properties)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-top-width</title>
    <style>
      h1 {
        border-top-color: green; /* Цвет линии сверху */
        border-top-style: double; /* Стиль линии сверху */
        border-top-width: 7px; /* Толщина линии сверху */
        border-right-color: green; /* Цвет линии справа */
        border-right-style: double; /* Стиль линии */
        border-right-width: 5px; /* Толщина линии */
        padding: 7px; /* Поля вокруг текста */
        color: #f9b61c; /* Цвет текста */
      }
    </style>
  </head>
  <body>
    <h1>Нечётный хамбакер</h1>
    <p>Гипнотический рифф mezzo forte просветляет целотоновый хамбакер.</p>
  </body>
</html>
```
