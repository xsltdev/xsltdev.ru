---
description: Метод transform() заменяет текущую матрицу трансформации
---

# transform()

У каждого объекта на растровом холсте есть текущая матрица трансформации.

Метод **`transform()`** заменяет текущую матрицу трансформации. Он комбинирует путем умножения текущую матрицу трансформации с матрицей, описываемой как:

```
a c e
b d f
0 0 1
```

Иными словами, метод `transform()` позволяет вам масштабировать, поворачивать, двигать и скручивать текущий контекст.

Примечание: Трансформация будет применена к графическому объекту после вызова метода `transform()`.

Примечание: Метод `transform()` воздействует пропорционально на другие трансформации, сделанные методами [`rotate()`](rotate.md), [`scale()`](scale.md), [`translate()`](translate.md) или `transform()`. Например: Если вы уже задали для какой-то графической фигуры изменение масштаба в два раза, и еще методом `transform()` меняете масштаб фигуры в два раза, то в конечном итоге фигура изменит свой масштаб в четыре раза. См. метод [`setTransform()`](settransform.md), который не воздействует на другие трансформации.

## Синтаксис

```
context.transform(a, b, c, d, e, f);
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

- [HTML Living Standard](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform)

## Пример

Нарисуем прямоугольник, добавим новую матрицу трансформации при помощи метода `transform()`, снова нарисуем прямоугольник, добавим новую матрицу трансформации и опять нарисуем прямоугольник. Обратите внимание, что каждый раз когда вы вызываете метод `transform()`, он опирается на предыдущую матрицу трансформации:

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
ctx.transform(1,0.5,-0.5,1,30,10);
ctx.fillStyle="red";
ctx.fillRect(0,0,250,100);
ctx.transform(1,0.5,-0.5,1,30,10);
ctx.fillStyle="blue";
ctx.fillRect(0,0,250,100);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

ctx.fillStyle = 'yellow'
ctx.fillRect(0, 0, 250, 100)

ctx.transform(1, 0.5, -0.5, 1, 30, 10)
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 250, 100)

ctx.transform(1, 0.5, -0.5, 1, 30, 10)
ctx.fillStyle = 'blue'
ctx.fillRect(0, 0, 250, 100)
```

## Ссылки

- Метод [`transform()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform) <sup><small>MDN (рус.)</small></sup>
