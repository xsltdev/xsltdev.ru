---
description: Свойство fillStyle устанавливает или возвращает цвет, градиент или шаблон, используемый для заливки графического объекта
---

# fillStyle

Свойство **`fillStyle`** устанавливает или возвращает цвет, градиент или шаблон, используемый для заливки графического объекта.

## Синтаксис

```
context.fillStyle=цвет | градиент | шаблон;
```

## Значения

Значение по умолчанию: `#000000`

`цвет`
: CSS значение цвета заливки графической фигуры. Значение по умолчанию `#000000`

`градиент`
: Объект градиента (линейного или радиального) для заполнения графической фигуры

`шаблон`
: Объект шаблона для заполнения графической фигуры

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-fillstyle)

## Примеры

### Пример 1

Определим красный цвет для заливки прямоугольника:

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas");
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1)
{
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(20,20,150,100);
}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.fillStyle = '#FF0000'
ctx.fillRect(20, 20, 150, 100)
```

### Пример 2

Определим градиент (направление слева на право) в качестве стиля заливки прямоугольника:

<canvas id="myCanvas3" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var canvas=document.getElementById("myCanvas3");
var ctx=canvas.getContext("2d");
var my_gradient=ctx.createLinearGradient(0,0,170,0);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(1,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,150,100);
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0)
my_gradient.addColorStop(0, 'black')
my_gradient.addColorStop(1, 'white')
ctx.fillStyle = my_gradient
ctx.fillRect(20, 20, 150, 100)
```

## Ссылки

- Свойство [`fillStyle`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/fillStyle) <sup><small>MDN (рус.)</small></sup>
