---
description: Свойство transition-property устанавливает имя стилевого свойства, значение которого будет отслеживаться для создания эффекта перехода
---

# transition-property

Свойство **`transition-property`** устанавливает имя стилевого свойства, значение которого будет отслеживаться для создания эффекта перехода.

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
    - **transition-property**
    - [transition-timing-function](transition-timing-function.md)

    </div>

## Синтаксис

```css
/* Keyword values */
transition-property: none;
transition-property: all;
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

transition-property: test1;
transition-property: test1, animation4;
transition-property: all, height, all;
transition-property: all, -moz-specific, sliding;

/* Global values */
transition-property: inherit;
transition-property: initial;
transition-property: unset;
```

## Значения

`none`
: Никакое свойство не задано.

`all`
: Все свойства будут отслеживаться.

`<свойство>`
: Название стилевого свойства, регистр при его написании не учитывается. При указании нескольких свойств они перечисляются друг за другом через запятую.

### Примечание

- Chrome до версии 26.0, Safari до версии 6.1 и Android поддерживают свойство `-webkit-transition-property`.
- Opera до версии 12.10 поддерживает свойство `-o-transition-property`.
- Firefox до версии 16 поддерживает свойство `-moz-transition-property`.

Значение по-умолчанию: `all`

Применяется ко всем элементам, к псевдоэлементам [`::before`](before.md) и [`::after`](after.md)

## Спецификации

- [CSS Transitions](http://dev.w3.org/csswg/css-transitions/#transition-property)

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
      body {
        margin: 0;
      }
      .menu {
        position: absolute;
        height: 100px;
        width: 100%;
        background: #fc0;
        border-bottom: 20px solid #333;
        top: -100px;
        /* Анимация */
        transition-property: top;
        transition-duration: 2s;
      }
      .menu:hover {
        top: 0;
      }
    </style>
  </head>
  <body>
    <div class="menu">
      А здесь у нас будет своё меню с преферансом и
      профурсетками.
    </div>
  </body>
</html>
```
