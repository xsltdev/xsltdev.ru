---
description: Метод quadraticCurveTo() добавляет точку к текущему контуру, используя особые контрольные точки, представляющие квадратичную кривую Безье
---

# quadraticCurveTo()

Метод **`quadraticCurveTo()`** добавляет точку к текущему контуру, используя особые контрольные точки, представляющие квадратичную кривую Безье.

Для квадратичной кривой Безье требуется две точки. Первая точка - контрольная. Она используются для вычисления кривой Безье. Вторая точка - конечная точка кривой. Начальная точка кривой Безье - последняя точка текущего контура. Если контур еще не задан, то следует использовать методы [`beginPath()`](beginpath.md) и [`moveTo()`](moveto.md), чтобы определить начальную точку.

![Квадратичная кривая Безье](quadraticcurve.gif)

<span style="color:#ff9000;">Начальная точка</span>: `moveTo(20, 20)`

<span style="color:#FF0000;">Контрольная точка</span>: `quadraticCurveTo(20, 100, 200, 20)`

<span style="color:#b0ef4e;">Конечная точка</span>: `quadraticCurveTo(20, 100, 200, 20)`

Примечание: См. метод [`bezierCurveTo()`](beziercurveto.md), который требует задавать две контрольные точки вместо одной.

## Синтаксис

```
context.quadraticCurveTo(cpx, cpy, x, y);
```

## Параметры

`cpx`
: Координата X контрольной точки кривой Безье

`cpy`
: Координата Y контрольной точки кривой Безье

`x`
: Координата X конечной точки

`y`
: Координата Y конечной точки

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-quadraticcurveto)

## Пример

Нарисуем квадратичную кривую Безье:

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
ctx.moveTo(20,20);
ctx.quadraticCurveTo(20,100,200,20);
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.quadraticCurveTo(20, 100, 200, 20)
ctx.stroke()
```

## Ссылки

- Метод [`quadraticCurveTo()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo) <sup><small>MDN (рус.)</small></sup>
