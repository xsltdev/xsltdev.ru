---
description: Свойство border-right-color задаёт цвет границы справа от элемента
---

# border-right-color

Свойство **`border-right-color`** задаёт цвет границы справа от элемента.

## Синтаксис

```css
/* <color> values */
border-right-color: red;
border-right-color: #ffbb00;
border-right-color: rgb(255, 0, 0);
border-right-color: hsla(100%, 50%, 25%, 0.75);
border-right-color: currentColor;
border-right-color: transparent;

/* Global values */
border-right-color: inherit;
border-right-color: initial;
border-right-color: unset;
```

## Значения

`<цвет>`
: цвет.

`transparent`
: Устанавливает прозрачный цвет.

Значение по-умолчанию: Значение свойства [`color`](color.md)

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-left-color)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-color-properties)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-right-color</title>
    <style>
      .line {
        border-right-color: navy; /* Цвет линии справа */
        border-right-style: dotted; /* Стиль линии */
        border-right-width: 3px; /* Толщина линии */
        padding-right: 10px; /* Расстояние между линией и текстом */
        margin-right: 100px; /* Отступ справа */
      }
    </style>
  </head>
  <body>
    <div class="line">
      Техника, согласно традиционным представлениям, полифигурно дает
      мелодический тетрахорд.
    </div>
  </body>
</html>
```
