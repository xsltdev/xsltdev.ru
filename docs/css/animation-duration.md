---
description: Свойство animation-duration задаёт время в секундах или миллисекундах, сколько должен длиться один цикл анимации
---

# animation-duration

Свойство **`animation-duration`** задаёт время в секундах или миллисекундах, сколько должен длиться один цикл анимации. По умолчанию значение равно `0s`, это означает, что никакой анимации нет.

Можно указать несколько значений, перечисляя их через запятую. Отрицательные значения и значения без указания единиц времени (`s` или `ms`) недопустимы и будут игнорироваться.

??? info "Переходы и Анимации"

    <div class="col3" markdown="1">

    - [@keyframes](keyframes.md)

    </div>

    <div class="col3" markdown="1">

    - [animation](animation.md)
    - [animation-delay](animation-delay.md)
    - [animation-direction](animation-direction.md)
    - **animation-duration**
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
    - [transition-timing-function](transition-timing-function.md)

    </div>

## Синтаксис

```css
/* Single animation */
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;
```

## Значения

Время.

Значение по-умолчанию:

```css
animation-duration: 0s;
```

Применяется ко всем элементам, к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Animations](http://dev.w3.org/csswg/css-animations/#animation-duration)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-animation" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-animation">Can I Use css-animation?</a> Data on support for the css-animation feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>animation-duration</title>
    <style>
      .warn {
        background: #fc0;
        padding: 10px;
      }
      .fadeInLeft {
        -webkit-animation-name: fadeInLeft;
        -webkit-animation-duration: 1s;
        animation-name: fadeInLeft;
        animation-duration: 1s;
      }
      @-webkit-keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-2000px);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-2000px);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
    </style>
  </head>
  <body>
    <div class="warn fadeInLeft">
      Вы не учли, что скалярное поле необходимо и
      достаточно!
    </div>
  </body>
</html>
```

### Примечание

- Chrome, Safari и Android поддерживают свойство `-webkit-animation-duration`.
- Opera до версии 12.10 поддерживает свойство `-o-animation-duration`.
- Firefox до версии 16 поддерживает свойство `-moz-animation-duration`.
