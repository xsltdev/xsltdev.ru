---
description: Метод closePath() замыкает контур (фигуру) соединяя последнюю точку с первой
---

# closePath()

Метод **`closePath()`** замыкает контур (фигуру) соединяя последнюю точку с первой.

Примечание: Чтобы в действительности нарисовать фигуру, следует использовать метод [`stroke()`](stroke.md). Метод [`fill()`](fill.md) используется для заливки нарисованной фигуры (по умолчанию черным цветом). Чтобы задать цвет или градиент заливки, используется свойство [`fillStyle`](fillstyle.md).

## Синтаксис

```
context.closePath();
```

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-closepath)

## Примеры

### Пример 1

Нарисуем контур в виде латинской буквы L, а затем нарисуем замыкающую линию к начальной точке:

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
ctx.lineTo(20,100);
ctx.lineTo(70,100);
ctx.closePath();
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(70, 100)
ctx.closePath()
ctx.stroke()
```

### Пример 2

Заливаем нарисованную фигуру красным цветом:

<canvas id="myCanvas2" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas2");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(20,100);
ctx.lineTo(70,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(70, 100)
ctx.closePath()
ctx.stroke()
ctx.fillStyle = 'red'
ctx.fill()
```

## Ссылки

- Метод [`closePath()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/closePath) <sup><small>MDN (рус.)</small></sup>
