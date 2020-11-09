---
description: Свойство animation-name устанавливает одну или несколько анимаций, которые применяются к элементу
---

# animation-name

Свойство **`animation-name`** устанавливает одну или несколько анимаций, которые применяются к элементу.

Представляет собой имя, связанное с правилом [`@keyframes`](keyframes.md), оно в свою очередь задаёт последовательность движения.

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
    - **animation-name**
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
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* Multiple animations */
animation-name: test1, animation4;
animation-name: none, -moz-specific, sliding;

/* Global values */
animation-name: initial;
animation-name: inherit;
animation-name: unset;
```

## Значения

`none`
: Отключает анимацию.

`<идентификатор>`
: Текстовая строка, которая связана с анимацией. Идентификатор должен начинаться с латинской буквы или подчёркивания (`_`), также может содержать цифры от 0 до 9 и дефис (-). Запрещено использовать зарезервированные ключевые слова `none`, `unset`, `inherit`, `initial`.

Значение по-умолчанию:

```css
animation-name: none;
```

Применяется ко всем элементам, к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Animations](http://dev.w3.org/csswg/css-animations/#animation-name)

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
    <title>animation-name</title>
    <style>
      .spaceOutUp {
        -webkit-animation-name: spaceOutUp;
        animation-name: spaceOutUp;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
      }
      @-webkit-keyframes spaceOutUp {
        from {
          opacity: 0;
          -webkit-transform-origin: 50% 0%;
          -webkit-transform: scale(0.2) translate(0%, -200%);
        }
        to {
          opacity: 1;
          -webkit-transform-origin: 50% 0%;
          -webkit-transform: scale(1) translate(0%, 0%);
        }
      }
      @keyframes spaceOutUp {
        from {
          opacity: 0;
          transform-origin: 50% 0%;
          transform: scale(0.2) translate(0%, -200%);
        }
        to {
          opacity: 1;
          transform-origin: 50% 0%;
          transform: scale(1) translate(0%, 0%);
        }
      }
    </style>
  </head>
  <body>
    <img src="image/thumb1.jpg" alt="" class="spaceOutUp" />
  </body>
</html>
```

### Примечание

- Chrome, Safari и Android поддерживают свойство `-webkit-animation-name`.
- Opera до версии 12.10 поддерживает свойство `-o-animation-name`.
- Firefox до версии 16 поддерживает свойство `-moz-animation-name`.
