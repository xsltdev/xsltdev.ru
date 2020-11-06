---
description: Свойство align-self выравнивает флекс-элементы текущей строки, переписывая значение align-items
---

# align-self

Свойство **`align-self`** выравнивает флекс-элементы текущей строки, переписывая значение [`align-items`](/css/align-items/). Если у какого-либо flex-элемента [`margin`](margin.md) в поперечной оси выставлен в `auto`, то `align-self` игнорируется.

??? info "Flexbox и выравнивание"

    **Руководство по [Flexbox](flex-guide/flex-1.md)**

    <div class="col3" markdown="1">

    - [flex](flex.md)
    - [flex-basis](flex-basis.md)
    - [flex-direction](flex-direction.md)
    - [flex-flow](flex-flow.md)
    - [flex-grow](flex-grow.md)
    - [flex-shrink](flex-shrink.md)
    - [flex-wrap](flex-wrap.md)
    - [order](order.md)

    </div>

    <div class="col3" markdown="1">

    - [justify-content](justify-content.md)
    - [align-content](align-content.md)
    - [place-content](place-content.md)
    - [justify-items](justify-items.md)
    - [align-items](align-items.md)
    - [place-items](place-items.md)
    - [justify-self](justify-self.md)
    - **align-self**
    - [place-self](place-self.md)
    - [row-gap](row-gap.md)
    - [column-gap](column-gap.md)
    - [gap](gap.md)

    </div>

## Синтаксис

```css
/* Keyword values */
align-self: auto;
align-self: normal;

/* Positional alignment */
/* align-self does not take left and right values */
align-self: center; /* Put the item around the center */
align-self: start; /* Put the item at the start */
align-self: end; /* Put the item at the end */
align-self: self-start; /* Align the item flush at the start */
align-self: self-end; /* Align the item flush at the end */
align-self: flex-start; /* Put the flex item at the start */
align-self: flex-end; /* Put the flex item at the end */

/* Baseline alignment */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Stretch 'auto'-sized items to fit the container */

/* Overflow alignment */
align-self: safe center;
align-self: unsafe center;

/* Global values */
align-self: inherit;
align-self: initial;
align-self: unset;
```

## Значения

Значение по-умолчанию: `auto`

Применяется к: флексам, гридам

`auto`
: Берёт родительское значение `align-items` или `stretch`, если нет родителя.

`flex-start`
: Элемент выравнивается в начале поперечной оси контейнера.

`flex-end`
: Элемент выравнивается в конце поперечной оси контейнера.

`center`
: Элемент выравнивается по центральной линии на поперечной оси.

`baseline`
: Элемент выравнивается по базовой линии текста.

`stretch`
: Элемент растягивается таким образом, чтобы занять всё свободное пространство контейнера по поперечной оси.

## Спецификации

- [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/#propdef-align-self)
- [CSS Flexible Box Layout Module](https://drafts.csswg.org/css-flexbox-1/#propdef-align-self)

## Поддержка браузерами

<p class="ciu_embed" data-feature="flexbox" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=flexbox">Can I Use flexbox?</a> Data on support for the flexbox feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>align-items</title>
    <style>
      .flex-container {
        display: flex;
        align-items: flex-start;
        height: 160px; /* Высота контейнера */
      }
      .flex-item {
        margin-left: 1rem; /* Расстояние между блоками */
        padding: 10px; /* Поля вокруг текста */
        width: 33.333%; /* Ширина блоков */
      }
      .flex-item:first-child {
        margin-left: 0;
      }
      .flex-item:hover {
        align-self: stretch; /* Растягиваем при наведении */
      }
      .item1 {
        background: #f0ba7d;
      }
      .item2 {
        background: #cae2aa;
      }
      .item3 {
        background: #a6c0c9;
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div class="flex-item item1">
        Фенек — лисица, живущая в пустынях Северной Африки.
        Имеет достаточно миниатюрный размер и своеобразную
        внешность с большими ушами.
      </div>
      <div class="flex-item item2">
        Корсак — хищное млекопитающее рода лисиц.
      </div>
      <div class="flex-item item3">
        Лисица — хищное млекопитающее семейства псовых,
        наиболее распространённый и самый крупный вид рода
        лисиц.
      </div>
    </div>
  </body>
</html>
```

### Примечание

Safari до версии 9 поддерживает свойство `-webkit-align-self`.

## См.также

- Свойство [`align-items`](align-items.md)
