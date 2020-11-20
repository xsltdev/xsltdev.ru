---
description: Метод clearRect() очищает заданную область пикселей внутри данного прямоугольника
---

# clearRect()

Метод **`clearRect()`** очищает заданную область пикселей внутри данного прямоугольника.

## Синтаксис

```
context.clearRect(x, y, width, height);
```

## Параметры

`x`
: Координата X верхнего левого угла очищаемой области

`y`
: Координата Y верхнего левого угла очищаемой области

`width`
: Ширина очищаемой области в пикселях

`height`
: Высота очищаемой области в пикселях

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-clearrect)

## Пример

Очистим прямоугольную область внутри данного прямоугольника:

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
ctx.fillStyle="red";
ctx.fillRect(0,0,300,150);
ctx.clearRect(20,20,100,50);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 300, 150)
ctx.clearRect(20, 20, 100, 50)
```

## Ссылки

- Метод [`clearRect()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/clearRect) <sup><small>MDN (рус.)</small></sup>
