---
description: Свойство overflow управляет отображением содержания блочного элемента, если оно целиком не помещается и выходит за область заданных размеров
---

# overflow

Свойство **`overflow`** управляет отображением содержания блочного элемента, если оно целиком не помещается и выходит за область заданных размеров.

## Синтаксис

```css
/* Content is not clipped */
overflow: visible;

/* Content is clipped, with no scrollbars */
overflow: hidden;

/* Content is clipped, with scrollbars */
overflow: scroll;

/* Let the browser decide */
overflow: auto;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: unset;
```

## Значения

`visible`
: Отображается всё содержимое элемента, даже за пределами установленной высоты и ширины.

`hidden`
: Отображается только область внутри элемента, остальное будет скрыто.

`scroll`
: Всегда добавляются полосы прокрутки.

`auto`
: Полосы прокрутки добавляются только при необходимости.

Значение по-умолчанию: `visible`

Применяется к блочным элементам

## Спецификации

- [CSS Basic Box Model](https://drafts.csswg.org/css-box-3/#overflow-intro)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visufx.html#overflow)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>overflow</title>
    <style>
      .layer {
        overflow: scroll; /* Добавляем полосы прокрутки */
        width: 300px; /* Ширина блока */
        height: 150px; /* Высота блока */
        padding: 5px; /* Поля вокруг текста */
        border: solid 1px black; /* Параметры рамки */
      }
    </style>
  </head>
  <body>
    <div class="layer">
      <h2>Гетерогенный голубой гель</h2>
      <p>
        Кондуктометрия мягко передает электронный способ получения независимо от
        последствий проникновения метилкарбиола внутрь.
      </p>
    </div>
  </body>
</html>
```
