# overflow-x

Свойство **`overflow-x`** управляет отображением содержания блочного элемента по горизонтали, если контент целиком не помещается и выходит за область справа или слева от блока.

## Синтаксис

```css
/* Content is not clipped */
overflow-x: visible;

/* Content is clipped, with no scrollbars */
overflow-x: hidden;

/* Content is clipped, with scrollbars */
overflow-x: scroll;

/* Let the browser decide */
overflow-x: auto;

/* Global values */
overflow-x: inherit;
overflow-x: initial;
overflow-x: unset;
```

## Значения

- `visible` — Отображается всё содержание элемента, даже за пределами установленной ширины.
- `hidden` — Отображается только область внутри элемента, остальное будет скрыто.
- `scroll` — Всегда добавляется горизонтальная полоса прокрутки.
- `auto` — Горизонтальная полоса прокрутки добавляется только при необходимости.

Значение по-умолчанию:

```css
overflow-x: visible;
```

Применяется к: К блочным элементам

## Спецификации

- [CSS Basic Box Model](http://dev.w3.org/csswg/css3-box/#overflow-x)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>overflow-x</title>
    <style>
      .layer {
        overflow-x: scroll; /* Добавляем полосу прокрутки */
        width: 300px; /* Ширина блока */
        height: 150px; /* Высота блока */
        padding: 5px; /* Поля вокруг текста */
        border: solid 1px black; /* Параметры рамки */
        white-space: nowrap; /* Запрещаем перенос строк */
      }
    </style>
  </head>
  <body>
    <div class="layer">
      <h2>Гетерогенный голубой гель</h2>
      <p>Кондуктометрия мягко передает электронный способ получения независимо от последствий проникновения метилкарбиола внутрь.</p>
    </div>
  </body>
</html>
```
