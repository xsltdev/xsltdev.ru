---
description: Метод fillRect() рисует залитый прямоугольник. Цвет заливки, по умолчанию, черный
---

# fillRect()

Метод **`fillRect()`** рисует "залитый" прямоугольник. Цвет заливки, по умолчанию, черный.

Чтобы установить другой цвет/градиент заливки, используется свойство [`fillStyle`](fillstyle.md).

## Синтаксис

```
context.fillRect(x, y, width, height);
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

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-fillrect)

## Пример

Нарисуем залитый прямоугольник `150x100` пикселей:

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
ctx.fillRect(20,20,150,100);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.fillRect(20, 20, 150, 100)
```

## Ссылки

- Метод [`fillRect()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/fillRect) <sup><small>MDN (рус.)</small></sup>
