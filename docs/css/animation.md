---
description: Универсальное свойство animation, задаёт сразу несколько параметров анимации
---

# animation

Универсальное свойство **`animation`**, задаёт сразу несколько параметров анимации.

## Синтаксис

```css
/* @keyframes duration | timing-function | delay |
	iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | timing-function | delay | name */
animation: 3s linear 1s slidein;

/* @keyframes duration | name */
animation: 3s slidein;
```

## Значения

Любые комбинации значений, разделяемых между собой пробелом, определяющих параметры анимации.

Значение по-умолчанию:

```css
animation-name: none;
animation-duration: 0s;
animation-timing-function: ease;
animation-delay: 0s;
animation-iteration-count: 1;
animation-direction: normal;
animation-fill-mode: none;
animation-play-state: running;
```

Применяется ко всем элементам, к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Animations](http://dev.w3.org/csswg/css-animations/#animation)

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
    <title>animation</title>
    <style>
      .creature {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #3ac;
        position: relative;
      }
      .creature::before,
      .creature::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 40px;
        border-radius: 50%;
        background: #000;
        top: 40px;
        animation: eye 3s ease-in-out infinite;
        -webkit-animation: eye 3s ease-in-out infinite;
      }
      .creature::before {
        left: 55px;
      }
      .creature::after {
        right: 55px;
      }
      @keyframes eye {
        90% {
          transform: none;
        }
        95% {
          transform: scaleY(0.1);
        }
      }
      @-webkit-keyframes eye {
        90% {
          transform: none;
        }
        95% {
          transform: scaleY(0.1);
        }
      }
    </style>
  </head>
  <body>
    <div class="creature"></div>
  </body>
</html>
```

### Примечание

- Chrome, Safari и Android поддерживают свойство `-webkit-animation`.
- Opera до версии 12.10 поддерживает свойство `-o-animation`.
- Firefox до версии 16 поддерживает свойство `-moz-animation`.
