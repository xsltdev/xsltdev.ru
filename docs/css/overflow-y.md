---
description: Свойство overflow-y управляет отображением содержания блочного элемента по вертикали, если контент целиком не помещается и выходит за область сверху или снизу от блока
---

# overflow-y

Свойство **`overflow-y`** управляет отображением содержания блочного элемента по вертикали, если контент целиком не помещается и выходит за область сверху или снизу от блока.

??? info "Блоки"

    <div class="col3" markdown="1">

    - [height](height.md)
    - [width](width.md)
    - [max-height](max-height.md)
    - [max-width](max-width.md)
    - [min-height](min-height.md)
    - [min-width](min-width.md)

    </div>

    <div class="col3" markdown="1">

    - [margin](margin.md)
    - [margin-bottom](margin-bottom.md)
    - [margin-left](margin-left.md)
    - [margin-right](margin-right.md)
    - [margin-top](margin-top.md)
    - [margin-trim](margin-trim.md)

    </div>

    <div class="col3" markdown="1">

    - [padding](padding.md)
    - [padding-bottom](padding-bottom.md)
    - [padding-left](padding-left.md)
    - [padding-right](padding-right.md)
    - [padding-top](padding-top.md)

    </div>

    <div class="col3" markdown="1">

    - [overflow](overflow.md)
    - [overflow-x](overflow-x.md)
    - **overflow-y**
    - [visibility](visibility.md)

    </div>

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

`visible`
: Отображается всё содержание элемента, даже за пределами установленной высоты.

`hidden`
: Отображается только область внутри элемента, остальное будет скрыто.

`scroll`
: Всегда добавляется вертикальная полоса прокрутки.

`auto`
: Вертикальная полоса прокрутки добавляется только при необходимости.

Значение по-умолчанию: `visible`

Применяется к блочным элементам

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
      <p>
        Кондуктометрия мягко передает электронный способ
        получения независимо от последствий проникновения
        метилкарбиола внутрь.
      </p>
    </div>
  </body>
</html>
```
