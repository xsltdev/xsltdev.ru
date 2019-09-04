---
description: Свойство border-right-width устанавливает толщину границы справа от элемента
---

# border-right-width

Свойство **`border-right-width`** устанавливает толщину границы справа от элемента.

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
      Модальное письмо может быть реализовано на основе принципов
      центропостоянности и центропеременности, таким образом шоу-бизнес
      интуитивно понятен.
    </div>
  </body>
</html>
```
