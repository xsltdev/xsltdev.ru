---
description: Свойство transition-delay устанавливает время ожидания перед запуском эффекта перехода
---

# transition-delay

Свойство **`transition-delay`** устанавливает время ожидания перед запуском эффекта перехода.

Значение `0s` или `0ms` запускает анимацию сразу же. Отрицательное значение также включает анимацию без задержек, но может привести к изменению вида начала анимации.

Допустимо указывать несколько значений, перечисляя их через запятую. Каждое значение будет применяться к свойству, заданному в параметрах [`transition-property`](transition-property.md).

## Синтаксис

```css
/* <time> values */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* Global values */
transition-delay: inherit;
transition-delay: initial;
transition-delay: unset;
```

## Значения

- время

### Примечание

- Chrome до версии 26.0, Safari до версии 6.1 и Android поддерживают свойство `-webkit-transition-delay`.
- Opera до версии 12.10 поддерживает свойство `-o-transition-delay`.
- Firefox до версии 16 поддерживает свойство `-moz-transition-delay`.

Значение по-умолчанию: `0s`

Применяется ко всем элементам, к псевдоэлементам [`::before`](::before.md) и [`::after`](::after.md)

## Спецификации

- [CSS Transitions](http://dev.w3.org/csswg/css-transitions/#transition-delay)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-transitions" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-transitions">Can I Use css-transitions?</a> Data on support for the css-transitions feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>transition-delay</title>
    <style>
      #bar {
        top: -5.5em;
        right: 5em; /* Положение */
        padding: 0.5em; /* Поля */
        margin: 0; /* Отступы */
        position: absolute; /* Абсолютное позиционирование */
        width: 2em; /* Ширина */
        background: #333; /* Цвет фона */
        color: #fff; /* Цвет текста */
        text-align: center; /* Выравнивание по центру */
        /* Анимация */
        transition: 0.4s ease-out;
        transition-delay: 0.5s;
      }
      #bar:hover {
        top: 0;
      }
    </style>
  </head>
  <body>
    <ul id="bar">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>↓</li>
    </ul>
  </body>
</html>
```
