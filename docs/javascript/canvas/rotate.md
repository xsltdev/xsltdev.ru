---
description: Метод rotate() позволяет поворачивать текущий графический объект
---

# rotate()

Метод **`rotate()`** позволяет поворачивать текущий графический объект.

Примечание: Чтобы графический объект был повернут, метод `rotate()` необходимо применить до того, как объект будет нарисован.

## Синтаксис

```
context.rotate(угол);
```

## Параметры

`угол`
: Угол поворота в радианах. Чтобы пересчитать градусы в радианы, следует воспользоваться следующей формулой: `градусы*Math.PI/180`. Например: чтобы повернуть на 5 градусов, проведем следующее вычисление: `5*Math.PI/180`

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-rotate)

## Пример

Повернем прямоугольник на 20 градусов:

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
ctx.rotate(20*Math.PI/180);
ctx.fillRect(50,20,100,50);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.rotate((20 * Math.PI) / 180)
ctx.fillRect(50, 20, 100, 50)
```

## Ссылки

- Метод [`rotate()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/rotate) <sup><small>MDN (рус.)</small></sup>
