---
description: Метод createRadialGradient() создает объект радиального/кругового градиента
---

# createRadialGradient()

Метод **`createRadialGradient()`** создает объект радиального/кругового градиента.

Градиент может использоваться для заливки прямоугольников, окружностей, линий, текста и т. д.

Примечание: Созданный объект линейного градиента используется в качестве значения свойства [`strokeStyle`](strokestyle.md) или [`fillStyle`](fillstyle.md). Для определения различных цветов и их расположения в градиенте используется метод [`addColorStop()`](addcolorstop.md).

## Синтаксис

```
context.createRadialGradient(x0, y0, r0, x1, y1, r1);
```

## Параметры

`x0`
: Координата X начальной окружности градиента

`y0`
: Координата Y начальной окружности градиента

`r0`
: Радиус начальной окружности градиента

`x1`
: Координата X конечной окружности градиента

`y1`
: Координата Y конечной окружности градиента

`r1`
: Радиус конечной окружности градиента

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-createradialgradient)

## Пример

Нарисуем прямоугольник и заполним его радиальным градиентом:

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
window.onload=function(){
var c=document.getElementById("myCanvas");
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1){
var ctx=c.getContext("2d");
var grd=ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,100);}}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')

// Заполнить фигуру градиентом
ctx.fillStyle = grd
ctx.fillRect(10, 10, 150, 100)
```

## Ссылки

- Метод [`createRadialGradient()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) <sup><small>MDN (рус.)</small></sup>
