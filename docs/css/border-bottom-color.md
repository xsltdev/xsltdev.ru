---
description: Свойство border-bottom-color устанавливает цвет нижней границы элемента
---

# border-bottom-color

Свойство **`border-bottom-color`** устанавливает цвет нижней границы элемента.

## Синтаксис

```css
/* <color> values */
border-bottom-color: red;
border-bottom-color: #ffbb00;
border-bottom-color: rgb(255, 0, 0);
border-bottom-color: hsla(100%, 50%, 25%, 0.75);
border-bottom-color: currentColor;
border-bottom-color: transparent;

/* Global values */
border-bottom-color: inherit;
border-bottom-color: initial;
border-bottom-color: unset;
```

## Значения

`цвет`
: Цвет

`transparent`
: устанавливает прозрачный цвет.

Значение по-умолчанию: Значение цвета, заданное через [`color`](color.md)

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-bottom-color)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-color-properties)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-bottom-color</title>
    <style>
      .panel {
        background: #fffcd5; /* Цвет фона */
      }
      .panel p {
        padding: 5px; /* Добавляем поля */
        margin: 0; /* Убираем отступы у абзаца */
      }
      .title {
        background: #ef7c32; /* Цвет фона */
        color: white; /* Цвет текста */
        border-bottom-width: 2px; /* Толщина линии внизу */
        border-bottom-style: solid; /* Стиль линии внизу */
        border-bottom-color: #c4005b; /* Цвет линии внизу */
      }
    </style>
  </head>
  <body>
    <div class="panel">
      <p class="title">Глиссандирующая ритмоформула</p>
      <p>
        Глиссандирующая ритмоформула, на первый взгляд, представляет собой
        разнокомпонентный канал, однако сами песни забываются очень быстро.
      </p>
    </div>
  </body>
</html>
```
