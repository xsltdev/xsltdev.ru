---
description: Метод isPointInPath() возвращает значение true, если заданная точка находится внутри текущего контура, в обратном случае возвращается значение false
---

# isPointInPath()

Метод **`isPointInPath()`** возвращает значение `true`, если заданная точка находится внутри текущего контура, в обратном случае возвращается значение `false`.

## Синтаксис

```
ctx.isPointInPath(x, y [, fillRule]);
ctx.isPointInPath(path, x, y [, fillRule]);
```

## Параметры

`x`
: Координата X проверяемой точки

`y`
: Координата Y проверяемой точки

`fillRule`
: Выбор алгоритма заливки фигуры

: Возможные значения:

: - `nonzero`: Правило ненулевого индекса, значение по умолчанию
: - `evenodd`: Четно-нечетное правило

`path`
: Path2D путь для заливки.

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-ispointinpath)

## Пример

Нарисуем прямоугольник, если точка с координатами `20`, `50` находится внутри текущего контура:

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
ctx.rect(20,20,150,100);
if (ctx.isPointInPath(20,50)){
ctx.stroke()}}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.rect(20, 20, 150, 100)
if (ctx.isPointInPath(20, 50)) {
  ctx.stroke()
}
```

## Ссылки

- Метод [`isPointInPath()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/isPointInPath) <sup><small>MDN (рус.)</small></sup>
