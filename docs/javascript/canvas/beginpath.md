---
description: Метод beginPath() начинает контур или сбрасывает текущий контур
---

# beginPath()

Метод **`beginPath()`** начинает контур или сбрасывает текущий контур.

Примечание: Для создания контуров используйте методы [`moveTo()`](moveto.md), [`lineTo()`](lineto.md), [`quadraticCurveTo()`](quadraticcurveto.md), [`bezierCurveTo()`](beziercurveto.md), [`arcTo()`](arcto.md), и [`arc()`](arc.md). Чтобы действительно нарисовать контур в элементе `<canvas>`, используется метод [`stroke()`](stroke.md).

## Синтаксис

```
context.beginPath();
```

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-beginpath)

## Пример

Нарисуем два простых контура — зеленый и пурпурный:

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
ctx.lineWidth="5";
ctx.strokeStyle="green";
ctx.moveTo(0,75);
ctx.lineTo(250,75);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="purple";
ctx.moveTo(50,0);
ctx.lineTo(150,130);
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

// Зеленый контур
ctx.beginPath()
ctx.lineWidth = '5'
ctx.strokeStyle = 'green'
ctx.moveTo(0, 75)
ctx.lineTo(250, 75)
ctx.stroke() // Нарисуем его

// Пурпурный контур
ctx.beginPath()
ctx.strokeStyle = 'purple'
ctx.moveTo(50, 0)
ctx.lineTo(150, 130)
ctx.stroke() // Нарисуем его
```

## Ссылки

- Метод [`beginPath()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/beginPath) <sup><small>MDN (рус.)</small></sup>
