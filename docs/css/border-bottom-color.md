---
description: Свойство border-bottom-color устанавливает цвет нижней границы элемента
---

# border-bottom-color

Свойство **`border-bottom-color`** устанавливает цвет нижней границы элемента.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - **border-bottom-color**
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
        Глиссандирующая ритмоформула, на первый взгляд,
        представляет собой разнокомпонентный канал, однако
        сами песни забываются очень быстро.
      </p>
    </div>
  </body>
</html>
```
