---
description: Свойство animation-iteration-count определяет, сколько раз проигрывать цикл анимации до её остановки
---

# animation-iteration-count

Свойство **`animation-iteration-count`** определяет, сколько раз проигрывать цикл анимации до её остановки.

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
    - **animation-iteration-count**
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
animation-iteration-count: infinite;
animation-iteration-count: 3;
animation-iteration-count: 2.3;

animation-iteration-count: 2, 0, infinite;
```

## Значения

`infinite`
: Анимация повторяется бесконечно.

`<число>`
: Сколько раз должна повторяться анимация. Отрицательные значения не допустимы. Можно использовать числа меньше единицы, для примера 0.5 будет означать половину цикла анимации.

Значение по-умолчанию:

```css
animation-iteration-count: 1;
```

Применяется ко всем элементам, к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Animations](http://dev.w3.org/csswg/css-animations/#animation-iteration-count)

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
    <title>animation-iteration-count</title>
    <style>
      .blink {
        -webkit-animation: blink 1s;
        -webkit-animation-iteration-count: infinite;
        animation: blink 1s;
        animation-iteration-count: infinite;
      }
      @-webkit-keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    </style>
  </head>
  <body>
    <div class="blink">
      Мигающий текст привлекает к себе внимание, не правда
      ли.
    </div>
  </body>
</html>
```

В данном примере установлено бесконечное мигание выбранного текста.

### Примечание

- Chrome, Safari и Android поддерживают свойство `-webkit-animation-iteration-count`.
- Opera до версии 12.10 поддерживает свойство `-o-animation-iteration-count`.
- Firefox до версии 16 поддерживает свойство `-moz-animation-iteration-count`.
