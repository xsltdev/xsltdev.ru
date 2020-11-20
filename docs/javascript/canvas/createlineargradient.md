---
description: Метод createLinearGradient() создает объект линейного градиента
---

# createLinearGradient()

Метод **`createLinearGradient()`** создает объект линейного градиента.

Градиент может использоваться для заливки прямоугольников, окружностей, линий, текста и т. д.

Примечание: Созданный объект линейного градиента используется в качестве значения свойства [`strokeStyle`](strokestyle.md) или [`fillStyle`](fillstyle.md). Для определения различных цветов и их расположения в градиенте используется метод [`addColorStop()`](addcolorstop.md).

## Синтаксис

```
context.createLinearGradient(x0, y0, x1, y1);
```

## Параметры

`x0`
: Координата X начальной точки градиента

`y0`
: Координата Y начальной точки градиента

`x1`
: Координата X конечной точки градиента

`y1`
: Координата Y конечной точки градиента

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-createlineargradient)

## Примеры

### Пример 1

Определим градиент (направление слева на право) от черного к белому для заливки прямоугольника:

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
var c=document.getElementById("myCanvas");
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

Определим градиент (направление сверху вниз) для заливки прямоугольника:

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170)
my_gradient.addColorStop(0, 'black')
my_gradient.addColorStop(1, 'white')
ctx.fillStyle = my_gradient
ctx.fillRect(20, 20, 150, 100)
```

<canvas id="myCanvas2" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var canvas=document.getElementById("myCanvas2");
var ctx=canvas.getContext("2d");
var my_gradient=ctx.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,100);
</script>

### Пример 3

Определим градиент, цвет которого меняется от черного к красному и к белому:

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0)
my_gradient.addColorStop(0, 'black')
my_gradient.addColorStop(0.5, 'red')
my_gradient.addColorStop(1, 'white')
ctx.fillStyle = my_gradient
ctx.fillRect(20, 20, 150, 100)
```

<canvas id="myCanvas4" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var canvas=document.getElementById("myCanvas4");
var ctx=canvas.getContext("2d");
var my_gradient=ctx.createLinearGradient(0,0,170,0);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(0.5,"red");
my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,100);
</script>

## Ссылки

- Метод [`createLinearGradient()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) <sup><small>MDN (рус.)</small></sup>
