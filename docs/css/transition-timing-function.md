---
description: Свойство transition-timing-function устанавливает, насколько быстро должно изменяться значение стилевого свойство для которого применяется эффект перехода
---

# transition-timing-function

Свойство **`transition-timing-function`** устанавливает, насколько быстро должно изменяться значение стилевого свойство для которого применяется эффект перехода.

`transition-timing-function` представляет собой математическую функцию, показывающую, как быстро по времени меняется указанное через [`transition-property`](transition-property.md) значение свойства. Начальная точка имеет координаты 0.0, 0.0, конечная — 1.0, 1.0, при этом функция по оси ординат может превышать эти значения в большую или меньшую сторону (рис. 1).

![Рис. 1. Вид функции](css_timing-function-1_1.png)

??? info "Переходы и Анимации"

    <div class="col3" markdown="1">

    - [@keyframes](keyframes.md)

    </div>

    <div class="col3" markdown="1">

    - [animation](animation.md)
    - [animation-delay](animation-delay.md)
    - [animation-direction](animation-direction.md)
    - [animation-duration](animation-duration.md)
    - [animation-fill-mode](animation-fill-mode.md)
    - [animation-iteration-count](animation-iteration-count.md)
    - [animation-name](animation-name.md)
    - [animation-play-state](animation-play-state.md)
    - [animation-timing-function](animation-timing-function.md)

    </div>

    <div class="col3" markdown="1">

    - [transition](transition.md)
    - [transition-delay](transition-delay.md)
    - [transition-duration](transition-duration.md)
    - [transition-property](transition-property.md)
    - **transition-timing-function**

    </div>

## Синтаксис

```css
/* Keyword values */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* Function values */
transition-timing-function: steps(4, end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
transition-timing-function: frames(10);

/* Multiple timing functions */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* Global values */
transition-timing-function: inherit;
transition-timing-function: initial;
transition-timing-function: unset;
```

## Значения

`ease`
: Анимация начинается медленно, затем ускоряется и к концу движения опять замедляется. Аналогично `cubic-bezier(0.25,0.1,0.25,1)`.

`ease-in`
: Анимация медленно начинается, к концу ускоряется. Аналогично `cubic-bezier(0.42,0,1,1)`.

`ease-out`
: Анимация начинается быстро, к концу замедляется. Аналогично `cubic-bezier(0,0,0.58,1)`.

`ease-in-out`
: Анимация начинается и заканчивается медленно. Аналогично `cubic-bezier(0.42,0,0.58,1)`.

`linear`
: Одинаковая скорость от начала и до конца.

`step-start`
: Как таковой анимации нет. Стилевые свойства сразу же принимают конечное значение.

`step-end`
: Как таковой анимации нет. Стилевые свойства находятся в начальном значении заданное время, затем сразу же принимают конечное значение.

`cubic-bezier`
: Задаёт функцию движения в виде кривой Безье.

`steps`
: Ступенчатая функция, имеющая заданное число шагов.

: `transition-timing-function: steps(<число>, start | end)`

: Здесь: `<число>` — целое число больше нуля; `start` — задаёт полунепрерывную снизу функцию; `end` — задаёт полунепрерывную сверху функцию.

### Примечание

- Chrome до версии 26, Safari до версии 6.1 и Android поддерживают свойство `-webkit-transition-timing-function`.
- Opera до версии 12.10 поддерживает свойство `-o-transition-timing-function`.
- Firefox до версии 16 поддерживает свойство `-moz-transition-timing-function`.
- Safari поддерживает значение `steps` только с версии 5.1.

Значение по-умолчанию: `ease`

Применяется ко всем элементам, к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Transitions](http://dev.w3.org/csswg/css-transitions/#transition-timing-function)

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
    <title>transition-timing-function</title>
    <style>
      .progress {
        background: #333; /* Фон */
        border: 2px solid #333; /* Рамка */
        height: 20px; /* Высота */
        position: relative; /* Относительное позиционирование */
      }
      .progress:hover::before {
        width: 100%;
      }
      .progress::before {
        transition-timing-function: linear;
        transition-duration: 5s;
        content: '';
        position: absolute; /* Абсолютное позиционирование */
        height: 100%;
        width: 0;
        background: #ffa600; /* Фон */
      }
    </style>
  </head>
  <body>
    <div class="progress"></div>
  </body>
</html>
```
