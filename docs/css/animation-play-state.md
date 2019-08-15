# animation-play-state

Свойство **`animation-play-state`** определяет проигрывается анимация или стоит на паузе.

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

Применяется к: ко всем элементам, включая псевдо-элементы

## Спецификации

- [CSS Animations](https://drafts.csswg.org/css-animations/#animation-play-state)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-animation" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-animation">Can I Use css-animation?</a> Data on support for the css-animation feature across the major browsers from caniuse.com.
</p>
