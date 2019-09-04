---
description: Свойство animation-direction устанавливает направление движения анимации
---

# animation-direction

Свойство **`animation-direction`** устанавливает направление движения анимации.

## Синтаксис

```css
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Global values */
animation-direction: inherit;
animation-direction: initial;
animation-direction: unset;
```

## Значения

`normal`
: Анимация идёт с самого начала, после завершения цикла возвращается к исходному состоянию.

`alternate`
: Анимация идёт с начала до конца, затем плавно возвращается в исходное положение.

`reverse`
: Анимация идёт с конца цикла, после его завершения возвращается к исходному состоянию.

`alternate-reverse`
: Анимация идёт с конца до начала, затем плавно возвращается в исходное положение.

Значение по-умолчанию:

```css
animation-direction: normal;
```

Применяется ко всем элементам, к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Animations](http://dev.w3.org/csswg/css-animations/#animation-direction)

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
    <title>animation-direction</title>
    <style>
      .box {
        background: #fc0;
        width: 100px;
        height: 100px;
        text-align: center;
        position: absolute;
        animation: move 5s infinite;
        -webkit-animation: move 5s infinite;
      }
      .normal {
        animation-direction: normal;
        -webkit-animation-direction: normal;
      }
      .alternate {
        top: 150px;
        animation-direction: alternate;
        -webkit-animation-direction: alternate;
      }
      .reverse {
        top: 300px;
        animation-direction: reverse;
        -webkit-animation-direction: reverse;
      }
      .alternate-reverse {
        top: 450px;
        animation-direction: alternate-reverse;
        -webkit-animation-direction: alternate-reverse;
      }
      @-webkit-keyframes move {
        from {
          left: 0;
        }
        to {
          left: calc(100% - 100px);
        }
      }
      @keyframes move {
        from {
          left: 0;
        }
        to {
          left: calc(100% - 100px);
        }
      }
    </style>
  </head>
  <body>
    <div class="box normal">normal</div>
    <div class="box alternate">alternate</div>
    <div class="box reverse">reverse</div>
    <div class="box alternate-reverse">alternate-reverse</div>
  </body>
</html>
```

В данном примере показано разное движение квадратов от одного края окна браузера до другого.

### Примечание

- Chrome до версии 43, Safari до версии 9 и Android поддерживают свойство `-webkit-animation-direction`.
- Opera до версии 12.10 поддерживает свойство `-o-animation-direction`.
- Firefox до версии 16 поддерживает свойство `-moz-animation-direction`.
