---
description: Метод scale() изменяет масштаб текущего графического объекта, делает его больше или меньше
---

# scale()

Метод **`scale()`** изменяет масштаб текущего графического объекта, делает его больше или меньше.

Примечание: Если вы изменяете масштаб какого-нибудь графического объекта, то будущие графические объекты также изменят масштаб. Позиционирование также будет масштабироваться. Если вы зададите команду `scale(2,2)`, то графические объекты будут позиционированы в два раза дальше от левой и верхней точки, заданной вами.

## Синтаксис

```
context.scale(scalewidth, scaleheight);
```

## Параметры

`scalewidth`
: Масштабирует ширину текущего графического объекта (`1=100%`, `0.5=50%`, `2=200%` и т. д.)

`scaleheight`
: Масштабирует высоту текущего графического объекта (`1=100%`, `0.5=50%`, `2=200%` и т. д.)

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-scale)

## Примеры

### Пример 1

Нарисуем прямоугольник, изменим масштаб на 200%, затем еще раз нарисуем прямоугольник:

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
ctx.strokeRect(5,5,25,15);
ctx.scale(2,2);
ctx.strokeRect(5,5,25,15);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.strokeRect(5, 5, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(5, 5, 25, 15)
```

### Пример 2

Нарисуем прямоугольник, изменим масштаб на 200%, опять нарисуем прямоугольник, изменим масштаб на 200%, и еще раз нарисуем прямоугольник, снова изменим масштаб на 200%, и еще раз нарисуем прямоугольник:

<canvas id="myCanvas2" width="300" height="170" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas2");
var ctx=c.getContext("2d");
ctx.strokeRect(5,5,25,15);
ctx.scale(2,2);
ctx.strokeRect(5,5,25,15);
ctx.scale(2,2);
ctx.strokeRect(5,5,25,15);
ctx.scale(2,2);
ctx.strokeRect(5,5,25,15);
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.strokeRect(5, 5, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(5, 5, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(5, 5, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(5, 5, 25, 15)
```

## Ссылки

- Метод [`scale()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale) <sup><small>MDN (рус.)</small></sup>
