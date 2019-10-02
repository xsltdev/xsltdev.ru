---
description:
---

# order

Свойство **`order`** определяет порядок вывода флексов внутри флекс-контейнера.

Элементы располагаются согласно значениям свойства `order` от меньшего к большему. При равных значениях `order` элементы выводятся в том порядке, в каком они появляются в исходном коде.

## Синтаксис

```css
/* <integer> values */
order: 5;
order: -5;

/* Global values */
order: inherit;
order: initial;
order: unset;
```

## Значения

Значение по-умолчанию: `0`

Наследуется: нет

Применяется к флекс-элементам

Анимируется: да

В качестве значения принимается любое целое число, включая отрицательные числа и ноль.

### Примечание

- Safari до версии 9 поддерживает свойство `-webkit-order`.

## Спецификации

- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox/#propdef-order)

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
    <title>order</title>
    <style>
      .flex-container {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-flow: row wrap;
      }
      .flex-item {
        background: #69489d;
        color: white;
        padding: 20px 30px;
        margin: 5px;
        font-size: 2em;
      }
      .flex-item:nth-of-type(1) {
        order: 5;
      }
      .flex-item:nth-of-type(2) {
        order: 4;
      }
      .flex-item:nth-of-type(3) {
        order: 3;
      }
      .flex-item:nth-of-type(4) {
        order: 2;
      }
      .flex-item:nth-of-type(5) {
        order: 1;
      }
    </style>
  </head>
  <body>
    <ul class="flex-container">
      <li class="flex-item">1</li>
      <li class="flex-item">2</li>
      <li class="flex-item">3</li>
      <li class="flex-item">4</li>
      <li class="flex-item">5</li>
    </ul>
  </body>
</html>
```

Результат:

<style>
.flex-container {
padding: 0;
margin: 0;
list-style: none;
display: flex;
flex-flow: row wrap;
}
.flex-item {
background: #69489d;
color: white;
padding: 20px 30px;
margin: 5px;
font-size: 2em;
}
.flex-item:nth-of-type(1) { order: 5; }
.flex-item:nth-of-type(2) { order: 4; }
.flex-item:nth-of-type(3) { order: 3; }
.flex-item:nth-of-type(4) { order: 2; }
.flex-item:nth-of-type(5) { order: 1; }
</style>
<ul class="flex-container">
<li class="flex-item">1</li>
<li class="flex-item">2</li>
<li class="flex-item">3</li>
<li class="flex-item">4</li>
<li class="flex-item">5</li>
</ul>

## См. также

- [Руководство по Flexbox](flex-guide/flex-1.md)
- [Руководство по Grid Layout](grid-guide/grid-1.md)
