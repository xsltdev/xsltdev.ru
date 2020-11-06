---
description: Универсальное свойство border позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента
---

# border

Универсальное свойство **`border`** позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента.

Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит, какое из них соответствует нужному свойству. Для установки границы только на определённых сторонах элемента, воспользуйтесь свойствами [`border-top`](border-top.md), [`border-bottom`](border-bottom.md), [`border-left`](border-left.md), [`border-right`](border-right.md).

??? info "Фон"

    <div class="col3" markdown="1">

    - **border**
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - [border-bottom-style](border-bottom-style.md)
    - [border-bottom-width](border-bottom-width.md)
    - [border-collapse](border-collapse.md)
    - [border-color](border-color.md)
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - [border-image-repeat](border-image-repeat.md)
    - [border-image-slice](border-image-slice.md)
    - [border-image-source](border-image-source.md)
    - [border-image-width](border-image-width.md)
    - [border-left](border-left.md)
    - [border-left-color](border-left-color.md)
    - [border-left-style](border-left-style.md)
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - [border-right-style](border-right-style.md)
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - [border-width](border-width.md)
    - [box-shadow](box-shadow.md)

    </div>

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
      Познание текста, не учитывая количества слогов,
      стоящих между ударениями, дает ямб. Эти слова
      совершенно справедливы, однако генеративная поэтика
      аннигилирует урбанистический скрытый смысл.
    </div>
  </body>
</html>
```

В данном примере вокруг блока добавляется двойная граница.
