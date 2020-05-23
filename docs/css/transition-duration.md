---
description: Свойство transition-duration задаёт время в секундах или миллисекундах, сколько должна длиться анимация перехода до её завершения
---

# transition-duration

Свойство **`transition-duration`** задаёт время в секундах или миллисекундах, сколько должна длиться анимация перехода до её завершения.

По умолчанию значение равно `0s`, это означает, что никакой анимации нет, переход происходит мгновенно.

Можно указать несколько значений, перечисляя их через запятую. Каждое значение применяется к свойствам, заданным через [`transition-property`](transition-property.md).

## Синтаксис

```css
/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Global values */
transition-duration: inherit;
transition-duration: initial;
transition-duration: unset;
```

## Значения

- время.

### Примечание

- Chrome до версии 26.0, Safari до версии 6.1 и Android поддерживают свойство `-webkit-transition-duration`.
- Opera до версии 12.10 поддерживает свойство `-o-transition-duration`.
- Firefox до версии 16 поддерживает свойство `-moz-transition-duration`.

Значение по-умолчанию: `0s`

Применяется ко всем элементам, к псевдоэлементам [`::before`](before.md) и [`::after`](after.md)

## Спецификации

- [CSS Transitions](http://dev.w3.org/csswg/css-transitions/#transition-duration)

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
    <title>transition-duration</title>
    <style>
      .warn {
        padding: 20px;
        transition-duration: 2s;
      }
      .warn:hover {
        background: #fc0;
      }
    </style>
  </head>
  <body>
    <div class="warn">
      Вы не учли, что скалярное поле необходимо и достаточно!
    </div>
  </body>
</html>
```
