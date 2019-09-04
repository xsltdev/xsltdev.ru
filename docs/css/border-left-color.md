---
description: Свойство border-left-color задаёт цвет границы слева от элемента
---

# border-left-color

Свойство **`border-left-color`** задаёт цвет границы слева от элемента.

## Синтаксис

```css
/* <color> values */
border-left-color: red;
border-left-color: #ffbb00;
border-left-color: rgb(255, 0, 0);
border-left-color: hsla(100%, 50%, 25%, 0.75);
border-left-color: currentColor;
border-left-color: transparent;

/* Global values */
border-left-color: inherit;
border-left-color: initial;
border-left-color: unset;
```

## Значения

`<цвет>`
: цвет

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
    <title>border-left-color</title>
    <style>
      .line {
        border-left-color: #fc0; /* Цвет линии слева */
        border-left-style: solid; /* Стиль линии */
        border-left-width: 7px; /* Толщина линии */
        padding-left: 10px; /* Расстояние между линией и текстом */
      }
    </style>
  </head>
  <body>
    <div class="line">
      Как отмечает Теодор Адорно, доминантсептаккорд полифигурно имитирует
      голос. Доминантсептаккорд варьирует хроматический шоу-бизнес.
    </div>
  </body>
</html>
```
