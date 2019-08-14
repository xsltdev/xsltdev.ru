# border-left

Свойство **`border-left`** позволяет одновременно установить толщину, стиль и цвет левой границы элемента.

Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит, какое из них соответствует нужному свойству.

## Синтаксис

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed green;
```

## Значения

Значение [`border-left-width`](border-left-width.md) определяет толщину границы. Для управления её видом предоставляется несколько значений свойства [`border-left-style`](border-left-style.md). Их названия и результат действия представлен на рис. 1.

![Рис.1. Стили рамок](border_style_2.png)

[`border-left-color`](border-left-color.md) устанавливает цвет границы, значение может быть в любом допустимом для CSS формате.

Значение по-умолчанию: Зависит от использования

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-left)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#propdef-border-left)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#border-left)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-left</title>
    <style>
      .line {
        border-left: 2px dotted green; /* Линия слева от текста */
        padding-left: 10px; /* Расстояние между линией и текстом */
        margin-left: 10px; /* Расстояние от левого края до линии */
      }
    </style>
  </head>
  <body>
    <div class="line">Еще Аристотель в своей «Политике» говорил, что музыка, воздействуя на человека, доставляет «своего рода очищение, то есть облегчение, связанное с наслаждением», однако арпеджио монотонно выстраивает изоритмический флэнжер. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее микрохроматический интервал неустойчив.</div>
  </body>
</html>
```
