---
description: Метод setTransform() сбрасывает текущую матрицу трансформации в начальное состояние, а затем вызывает метод transform() с теми же параметрами
---

# setTransform()

У каждого объекта на растровом холсте есть текущая матрица трансформации.

Метод **`setTransform()`** сбрасывает текущую матрицу трансформации в начальное состояние, а затем вызывает метод [`transform()`](transform.md) с теми же параметрами.

Другими словами, метод `setTransform()` позволяет масштабировать, поворачивать, передвигать и скручивать текущий контекст.

Примечание: Трансформация будет применяться только на те графические объекты, которые будут нарисованы после вызова метода `setTransform()`.

## Синтаксис

```
context.setTransform(a, b, c, d, e, f);
```

## Параметры

`a`
: Горизонтальный масштаб

`b`
: Горизонтальное скручивание

`c`
: Вертикальное скручивание

`d`
: Вертикальный масштаб

`e`
: Горизонтальный сдвиг

`f`
: Вертикальный сдвиг

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-settransform)

## Пример

Нарисуем прямоугольник, сбросим текущую и создадим новую матрицу трансформации при помощи метода `setTransform()`, снова нарисуем прямоугольник, сбросим текущую и создадим новую матрицу трансформации и опять нарисуем прямоугольник. Обратите внимание, что всякий раз как мы вызываем метод `setTransform()`, он сбрасывает предыдущую матрицу трансформации и затем строит новую, таким образом, в этом примере красный прямоугольник не виден, так как находится под синим прямоугольником:

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas");
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1){
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="yellow";
ctx.fillRect(0,0,250,100)
ctx.setTransform(1,0.5,-0.5,1,30,10);
ctx.fillStyle="red";
ctx.fillRect(0,0,250,100);
ctx.setTransform(1,0.5,-0.5,1,30,10);
ctx.fillStyle="blue";
ctx.fillRect(0,0,250,100);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

ctx.fillStyle = 'yellow'
ctx.fillRect(0, 0, 250, 100)

ctx.setTransform(1, 0.5, -0.5, 1, 30, 10)
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 250, 100)

ctx.setTransform(1, 0.5, -0.5, 1, 30, 10)
ctx.fillStyle = 'blue'
ctx.fillRect(0, 0, 250, 100)
```

## Ссылки

- Метод [`setTransform()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform) <sup><small>MDN (рус.)</small></sup>
