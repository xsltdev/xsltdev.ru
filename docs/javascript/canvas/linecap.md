---
description: Свойство lineCap устанавливает/возвращает стиль концов нарисованной линии
---

# lineCap

Свойство **`lineCap`** устанавливает/возвращает стиль концов нарисованной линии.

Примечание: Значения `round` и `square` делают линию несколько длиннее.

## Синтаксис

```
context.lineCap="butt | round | square";
```

## Значения

Значение по умолчанию: `butt`

`butt`
: Значение по умолчанию. У линии будут плоские концы

`round`
: У линии будут закругленные концы

`square`
: У линии будут квадратные концы

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-linecap)

## Пример

Нарисуем линию с закругленными концами:

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
ctx.beginPath();
ctx.lineWidth=10;
ctx.lineCap="round";
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.lineCap = 'round'
ctx.moveTo(20, 20)
ctx.lineTo(200, 20)
ctx.stroke()
```

## Ссылки

- Свойство [`lineCap`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) <sup><small>MDN (рус.)</small></sup>
