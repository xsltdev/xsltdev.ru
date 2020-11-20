---
description: Метод bezierCurveTo() добавляет точку к текущему контуру, используя заданные контрольные точки, которые представляют кубическую кривую Безье
---

# bezierCurveTo()

Метод **`bezierCurveTo()`** добавляет точку к текущему контуру, используя заданные контрольные точки, которые представляют кубическую кривую Безье.

Для кубической кривой Безье требуется три точки. Первые две точки - контрольные. Они используются для вычислении кривой Безье. Третья точка - конечная точка кривой. Начальная точка кривой Безье - последняя точка текущего контура. Если контур еще не задан, то следует использовать методы [`beginPath()`](beginpath.md) и [`moveTo()`](moveto.md), чтобы определить начальную точку.

![Кубическая кривая Безье](beziercurve.gif)

<span style="color: #ff9000;">Начальная точка</span>: `moveTo(20, 20)`

<span style="color: #FF0000;">Контрольная точка 1</span>: `bezierCurveTo(20, 100, 200, 100, 200, 20)`

<span style="color: #FF0000;">Контрольная точка 2</span>: `bezierCurveTo(20, 100, 200, 100, 200, 20)`

<span style="color: #b0ef4e;">Конечная точка</span>: `bezierCurveTo(20, 100, 200, 100, 200, 20)`

Примечание: См. метод [`quadraticCurveTo()`](quadraticcurveto.md), который требует задавать одну контрольную точку вместо двух.

## Синтаксис

```
context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
```

## Параметры

`cp1x`
: Координата X первой контрольной точки кривой Безье

`cp1y`
: Координата Y первой контрольной точки кривой Безье

`cp2x`
: Координата X второй контрольной точки кривой Безье

`cp2y`
: Координата Y второй контрольной точки кривой Безье

`x`
: Координата X конечной точки

`y`
: Координата Y конечной точки

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-beziercurveto)

## Пример

Нарисуем кубическую кривую Безье:

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
ctx.bezierCurveTo(20,100,200,100,200,20);
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
ctx.stroke()
```

## Ссылки

- Метод [`bezierCurveTo()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo) <sup><small>MDN (рус.)</small></sup>
