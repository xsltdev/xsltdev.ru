---
description: Метод addColorStop() определяет цвет и позицию остановки в объекте градиента
---

# addColorStop()

Метод **`addColorStop()`** определяет цвет и позицию остановки в объекте градиента.

Метод `addColorStop()` используется вместе с методом [`createLinearGradient()`](createlineargradient.md) или [`createRadialGradient()`](createradialgradient.md).

Примечание: Вы можете вызывать метод `addColorStop()` любое число раз, чтобы изменять градиент. Если этот метод не используется, то градиент будет невидим. Чтобы градиент отображался, необходимо создать хотя бы одну цветовую остановку.

## Синтаксис

```
gradient.addColorStop(позиция, цвет);
```

## Параметры

`позиция`
: Значение от `0.0` до `1.0`, которое представляет позицию между началом и концом градиента

`цвет`
: CSS значение цвета, отображаемого в позиции остановки

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-canvasgradient-addcolorstop)

## Примеры

### Пример 1

Определяем градиент от черного к белому, заполняющий прямоугольник:

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

var grd = ctx.createLinearGradient(0, 0, 170, 0)
grd.addColorStop(0, 'black')
grd.addColorStop(1, 'white')

ctx.fillStyle = grd
ctx.fillRect(20, 20, 150, 100)
```

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
window.onload=function()
{
var c=document.getElementById('myCanvas');
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1)
{
var ctx=c.getContext('2d');
var grd=ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0,"black");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(20,20,150,100);
}
}
</script>

### Пример 2

Определяем градиент с несколькими методами `addColorStop()`:

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

var grd = ctx.createLinearGradient(0, 0, 170, 0)
grd.addColorStop(0, 'black')
grd.addColorStop('0.3', 'magenta')
grd.addColorStop('0.5', 'blue')
grd.addColorStop('0.6', 'green')
grd.addColorStop('0.8', 'yellow')
grd.addColorStop(1, 'red')

ctx.fillStyle = grd
ctx.fillRect(20, 20, 150, 100)
```

<canvas id="myCanvas2" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var canvas=document.getElementById("myCanvas2");
var ctx=canvas.getContext("2d");
var grd=ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0,"black");
grd.addColorStop("0.3","magenta");
grd.addColorStop("0.5","blue");
grd.addColorStop("0.6","green");
grd.addColorStop("0.8","yellow");
grd.addColorStop(1,"red");
ctx.fillStyle=grd;
ctx.fillRect(20,20,150,100);
</script>

## Ссылки

- Метод [`addColorStop()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop) <sup><small>MDN (рус.)</small></sup>
