---
description: Метод strokeRect() рисует прямоугольник (без заливки). По умолчанию прямоугольник рисуется черным цветом
---

# strokeRect()

Метод **`strokeRect()`** рисует прямоугольник (без заливки). По умолчанию прямоугольник рисуется черным цветом.

Примечание: Чтобы задать цвет, градиент или паттерн, которым будет нарисован прямоугольник используется свойство [`strokeStyle`](strokestyle.md).

## Синтаксис

```
context.strokeRect(x, y, width, height);
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

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-strokerect)

## Пример

Нарисуем прямоугольник 150x100 пикселей:

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
ctx.strokeRect(20,20,150,100);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.strokeRect(20, 20, 150, 100)
```

## Ссылки

- Метод [`strokeRect()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/strokeRect) <sup><small>MDN (рус.)</small></sup>
