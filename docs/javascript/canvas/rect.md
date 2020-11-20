---
description: Метод rect() создает прямоугольник
---

# rect()

Метод **`rect()`** создает прямоугольник.

Примечание: Чтобы действительно нарисовать прямоугольник, используйте метод [`stroke()`](stroke.md) или [`fill()`](fill.md).

## Синтаксис

```
context.rect(x, y, width, height);
```

## Параметры

`x`
: Координата X верхнего левого угла прямоугольника

`y`
: Координата Y верхнего левого угла прямоугольника

`width`
: Ширина прямоугольника в пикселях

`height`
: Высота прямоугольника в пикселях

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-rect)

## Примеры

### Пример 1

Нарисуем прямоугольник 150\*100 пикселей:

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
ctx.rect(20,20,150,100);
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.rect(20, 20, 150, 100)
ctx.stroke()
```

### Пример 2

Создадим три прямоугольника при помощи метода `rect()`:

<canvas id="myCanvas2" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas2");
var ctx=c.getContext("2d");
// Red rectangle
ctx.beginPath();
ctx.lineWidth="6";
ctx.strokeStyle="red";
ctx.rect(5,5,290,140);  
ctx.stroke();
// Green rectangle
ctx.beginPath();
ctx.lineWidth="4";
ctx.strokeStyle="green";
ctx.rect(30,30,50,50);
ctx.stroke();
// Blue rectangle
ctx.beginPath();
ctx.lineWidth="10";
ctx.strokeStyle="blue";
ctx.rect(50,50,150,80);
ctx.stroke();
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

// Красный прямоугольник
ctx.beginPath()
ctx.lineWidth = '6'
ctx.strokeStyle = 'red'
ctx.rect(5, 5, 290, 140)
ctx.stroke()

// Зеленый прямоугольник
ctx.beginPath()
ctx.lineWidth = '4'
ctx.strokeStyle = 'green'
ctx.rect(30, 30, 50, 50)
ctx.stroke()

// Синий прямоугольник
ctx.beginPath()
ctx.lineWidth = '10'
ctx.strokeStyle = 'blue'
ctx.rect(50, 50, 150, 80)
ctx.stroke()
```

## Ссылки

- Метод [`rect()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/rect) <sup><small>MDN (рус.)</small></sup>
