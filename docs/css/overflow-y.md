# overflow-y

Свойство **`overflow-y`** управляет отображением содержания блочного элемента по вертикали, если контент целиком не помещается и выходит за область сверху или снизу от блока.

## Синтаксис

```css
/* Content is not clipped */
overflow-y: visible;

/* Content is clipped, with no scrollbars */
overflow-y: hidden;

/* Content is clipped, with scrollbars */
overflow-y: scroll;

/* Let the browser decide */
overflow-y: auto;

/* Global values */
overflow-y: inherit;
overflow-y: initial;
overflow-y: unset;
```

## Значения

- `visible` — Отображается всё содержание элемента, даже за пределами установленной высоты.
- `hidden` — Отображается только область внутри элемента, остальное будет скрыто.
- `scroll` — Всегда добавляется вертикальная полоса прокрутки.
- `auto` — Вертикальная полоса прокрутки добавляется только при необходимости.

Значение по-умолчанию:

```css
overflow-y: visible;
```

Применяется к: К блочным элементам

## Спецификации

- [CSS Basic Box Model](http://dev.w3.org/csswg/css3-box/#overflow-y)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>overflow-y</title>
    <style>
      body {
        overflow-y: hidden; /* Убираем вертикальную полосу прокрутки */
      }
      .layer {
        width: 300px; /* Ширина блока */
        height: 150px; /* Высота блока */
        padding: 5px; /* Поля вокруг текста */
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
