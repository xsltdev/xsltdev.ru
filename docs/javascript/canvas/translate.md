---
description: Метод translate() ретранслирует позицию (0,0) в новое место растрового холста
---

# translate()

Метод **`translate()`** ретранслирует позицию `(0,0)` в новое место растрового холста.

Примечание: Если после метода `translate()` вызывается, например, такой метод как [`fillRect()`](fillrect.md), то его значение добавляется к значениям x- и y-координат.

![translate](translate.gif)

## Синтаксис

```
context.translate(x, y);
```

## Параметры

`x`
: Значение, добавляемое к горизонтальным (x) координатам

`y`
: Значение, добавляемое к вертикальным (y) координатам

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-translate)

## Пример

Нарисуем прямоугольных в позиции `(10, 10)`, установим новую нулевую позицию по координатам `(70, 70)`. Снова нарисуем тот же прямоугольник (обратите внимание, что теперь прямоугольник начинается в координатах `(80, 80)`:

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas");
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1){
var ctx=c.getContext("2d");
ctx.fillRect(10,10,100,50);
ctx.translate(70,70);
ctx.fillRect(10,10,100,50);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.fillRect(10, 10, 100, 50)
ctx.translate(70, 70)
ctx.fillRect(10, 10, 100, 50)
```

## Ссылки

- Метод [`translate()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate) <sup><small>MDN (рус.)</small></sup>
