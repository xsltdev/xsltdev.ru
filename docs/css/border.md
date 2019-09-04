---
description: Универсальное свойство border позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента
---

# border

Универсальное свойство **`border`** позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента.

Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит, какое из них соответствует нужному свойству. Для установки границы только на определённых сторонах элемента, воспользуйтесь свойствами [`border-top`](border-top.md), [`border-bottom`](border-bottom.md), [`border-left`](border-left.md), [`border-right`](border-right.md).

## Синтаксис

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;

/* Global values */
border: inherit;
border: initial;
border: unset;
```

## Значения

Значение `border-width` определяет толщину границы. Для управления ее видом предоставляется несколько значений `border-style`. Их названия и результат действия представлен на рис. 1.

![Рис.1. Стили рамок](border_style.png)

`border-color` устанавливает цвет границы, значение может быть в любом допустимом для CSS формате.

Значение по-умолчанию: Зависит от использования

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#the-border-shorthands)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-shorthand-properties)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#border)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border</title>
    <style>
      .brd {
        border: 4px double black; /* Параметры границы */
        background: #fc3; /* Цвет фона */
        padding: 10px; /* Поля вокруг текста */
      }
    </style>
  </head>
  <body>
    <div class="brd">
      Познание текста, не учитывая количества слогов, стоящих между ударениями,
      дает ямб. Эти слова совершенно справедливы, однако генеративная поэтика
      аннигилирует урбанистический скрытый смысл.
    </div>
  </body>
</html>
```

В данном примере вокруг блока добавляется двойная граница.
