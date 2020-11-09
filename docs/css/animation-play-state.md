---
description: Свойство animation-play-state определяет проигрывается анимация или стоит на паузе
---

# animation-play-state

Свойство **`animation-play-state`** определяет проигрывается анимация или стоит на паузе.

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
    - **animation-play-state**
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
animation-play-state: running;
animation-play-state: paused;

/* Multiple animations */
animation-play-state: paused, running, running;

/* Global values */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: unset;
```

## Значения

`running`
: анимация проигрывается.

`paused`
: анимация на паузе.

Значение по-умолчанию:

```css
animation-play-state: running;
```

Применяется ко всем элементам, включая псевдо-элементы

## Спецификации

- [CSS Animations](https://drafts.csswg.org/css-animations/#animation-play-state)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-animation" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-animation">Can I Use css-animation?</a> Data on support for the css-animation feature across the major browsers from caniuse.com.
</p>
