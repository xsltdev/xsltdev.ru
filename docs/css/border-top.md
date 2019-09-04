---
description: Свойство border-top позволяет одновременно установить толщину, стиль и цвет границы сверху элемента
---

# border-top

Свойство **`border-top`** позволяет одновременно установить толщину, стиль и цвет границы сверху элемента.

Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит, какое из них соответствует нужному свойству.

## Синтаксис

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;
```

## Значения

[`border-top-width`](border-top-width.md) определяет толщину границы. Для управления ее видом предоставляется несколько значений [`border-top-style`](border-top-style.md). Их названия и результат действия представлен на рис. 1.

![Рис.1. Стили рамок](border_style_6.png)

[`border-top-color`](border-top-color.md) устанавливает цвет границы, значение может быть в любом допустимом для CSS формате.

Значение по-умолчанию: Зависит от использования

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-top)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#propdef-border-top)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#border-top)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-top</title>
    <style>
      blockquote {
        border-top: 2px solid #95cd8b; /* Линия сверху текста */
        border-bottom: 2px solid #95cd8b; /* Линия снизу текста */
        padding: 5px; /* Поля вокруг текста */
      }
    </style>
  </head>
  <body>
    <blockquote>
      Наибольшее и наименьшее значения функции усиливает многомерный Наибольший
      Общий Делитель (НОД).
    </blockquote>
  </body>
</html>
```
