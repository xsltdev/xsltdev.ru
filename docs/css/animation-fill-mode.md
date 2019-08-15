# animation-fill-mode

Свойство **`animation-fill-mode`** определяет, какие стили должны применяться к элементу, когда анимация не проигрывается.

Например, после её завершения или при остановке. По умолчанию, в момент окончания анимации стиль элемента возвращается к исходному, свойство `animation-fill-mode` позволяет изменить это поведение и сделать так, чтобы стиль элемента оставался как у последнего ключевого кадра.

К примеру, если вы делаете выезжающее из-за края окна браузера сообщение, то после окончания анимации сообщение вернётся обратно за край экрана. Значение `forwards` свойства `animation-fill-mode` изменяет это поведение и оставляет стили на момент завершения движения. Таким образом, сообщение плавно выдвинется из-за края окна и останется на месте.

## Синтаксис

```css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
```

## Значения

`none`
: К элементу не применяются какие-либо стили.

`forwards`
: К элементу по окончанию анимации применяется стиль последнего ключевого кадра. Каким будет этот кадр в последовательности анимации зависит от комбинации значений свойств [`animation-direction`](animation-direction.md) и [`animation-iteration-count`](animation-iteration-count.md) (табл. 1).

<table>
<caption>Табл. 1. Последний ключевой кадр</caption>
<thead>
<tr><th>animation-direction</th><th>animation-iteration-count</th><th>Значение</th></tr>
</thead>
<tbody>
<tr><td>normal</td><td>любое число</td><td>100% или to</td></tr>
<tr><td>reverse</td><td>любое число</td><td>0% или from</td></tr>
<tr><td>alternate</td><td>чётное число</td><td>0% или from</td></tr>
<tr><td>alternate</td><td>нечётное число</td><td>100% или to</td></tr>
<tr><td>alternate-reverse</td><td>чётное число</td><td>100% или to</td></tr>
<tr><td>alternate-reverse</td><td>нечётное число</td><td>0% или from</td></tr>
</tbody>
</table>

`backwards`
: К элементу применяется стиль первого ключевого кадра и он остаётся на протяжении периода заданного [`animation-delay`](animation-delay.md). Первый ключевой кадр определяется на основании значения [`animation-direction`](animation-direction.md) (табл. 2).

<table>
<caption>Табл. 2. Первый ключевой кадр</caption>
<thead>
<tr><th>animation-direction</th><th>Значение</th></tr>
</thead>
<tbody>
<tr><td>normal или alternate</td><td>0% или from</td></tr>
<tr><td>reverse или alternate-reverse</td><td>100% или to</td></tr>
</tbody>
</table>

`both`
: К элементу применяются оба правила, как для `forwards`, так и для `backwards`.

Значение по-умолчанию:

```css
animation-fill-mode: none;
```

Применяется к: Ко всем элементам, к псевдоэлементам `::before` и `::after`

## Спецификации

- [CSS Animations](http://dev.w3.org/csswg/css-animations/#animation-fill-mode)

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
    <title>animation-fill-mode</title>
    <style>
      .wheel {
        animation: wheel 3s 1s;
        animation-fill-mode: both;
        -webkit-animation: wheel 3s 1s;
        -webkit-animation-fill-mode: both;
      }
      @keyframes wheel {
        from {
          transform: translateX(0) rotate(0);
        }
        to {
          transform: translateX(450px) rotate(2turn);
        }
      }
      @-webkit-keyframes wheel {
        from {
          transform: translateX(0) rotate(0);
        }
        to {
          transform: translateX(450px) rotate(2turn);
        }
      }
    </style>
  </head>
  <body>
    <img src="image/wheel.png" alt="" class="wheel" />
  </body>
</html>
```

В данном примере показано изображение ожидает одну секунду, затем начинает вращаться и двигаться вправо. По окончанию анимации колесо остаётся в крайнем правом положении.

### Примечание

- Chrome, Safari и Android поддерживают свойство `-webkit-animation-fill-mode`.
- Opera до версии 12.10 поддерживает свойство `-o-animation-fill-mode`.
- Firefox до версии 16 поддерживает свойство `-moz-animation-fill-mode`.
