---
description: Свойство border-right позволяет одновременно установить толщину, стиль и цвет правой границы элемента
---

# border-right

Свойство **`border-right`** позволяет одновременно установить толщину, стиль и цвет правой границы элемента.

Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит, какое из них соответствует нужному свойству.

## Синтаксис

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;
```

## Значения

Значение [`border-right-width`](border-right-width.md) определяет толщину границы. Для управления её видом предоставляется несколько значений свойства [`border-right-style`](border-right-style.md). Их названия и результат действия представлен на рис. 1.

![Рис.1. Стили рамок](border_style_4.png)

[`border-right-color`](border-right-color.md) устанавливает цвет границы, значение может быть в любом допустимом для CSS формате.

Значение по-умолчанию: Зависит от использования

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-right)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#propdef-border-right)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#border-right)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-right</title>
    <style>
      .line {
        border-left: 1px solid red; /* Линия слева от текста */
        border-right: 1px solid red; /* Линия справа от текста */
        padding: 0 10px; /* Расстояние между линией и текстом */
        margin: 0 10%; /* Отступы от края до линии */
      }
    </style>
  </head>
  <body>
    <div class="line">
      Модальное письмо может быть реализовано на основе принципов
      центропостоянности и центропеременности, таким образом техника заканчивает
      звукоряд.
    </div>
  </body>
</html>
```
