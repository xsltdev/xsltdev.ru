---
description: Свойство strokeStyle устанавливает/возвращает цвет, градиент или шаблон, используемый для обводки фигуры
---

# strokeStyle

Свойство **`strokeStyle`** устанавливает/возвращает цвет, градиент или шаблон, используемый для обводки фигуры.

## Синтаксис

```
context.strokeStyle=цвет | градиент | шаблон;
```

## Значения

Значение по умолчанию: `#000000`

`цвет`
: CSS значение цвета обводки графической фигуры. Значение по умолчанию #000000

`градиент`
: Объект градиента (линейного или радиального) для обводки графической фигуры

`шаблон`
: Объект шаблона для обводки графической фигуры

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-strokestyle)

## Примеры

### Пример 1

Нарисуем прямоугольник. Для его прорисовки используем красный цвет:

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.strokeStyle = '#FF0000'
ctx.strokeRect(20, 20, 150, 100)
```

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
ctx.strokeStyle="#FF0000";
ctx.strokeRect(20,20,150,100);
}
</script>

### Пример 2

Нарисуем прямоугольник. Для его прорисовки используем градиент:

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

var gradient = ctx.createLinearGradient(0, 0, 170, 0)
gradient.addColorStop('0', 'magenta')
gradient.addColorStop('0.5', 'blue')
gradient.addColorStop('1.0', 'red')

// Заполняем градиентом
ctx.strokeStyle = gradient
ctx.lineWidth = 5
ctx.strokeRect(20, 20, 150, 100)
```

<canvas id="myCanvas2" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas2");
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1)
{
var ctx=c.getContext("2d");
var gradient=ctx.createLinearGradient(0,0,170,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");
// Fill with gradient
ctx.lineWidth=5;
ctx.strokeStyle=gradient;
ctx.strokeRect(20,20,150,100);
}
</script>

## Ссылки

- Свойство [`strokeStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle) <sup><small>MDN (рус.)</small></sup>
