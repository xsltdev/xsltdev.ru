---
description: Метод moveTo() передвигает точку контура в заданные координаты не рисуя линию
---

# moveTo()

Метод **`moveTo()`** передвигает точку контура в заданные координаты не рисуя линию.

Примечание: Чтобы в действительности нарисовать контур, используйте метод [`stroke()`](stroke.md).

## Синтаксис

```
context.moveTo(x, y);
```

## Параметры

`x`
: Координата X точки, куда передвигается контур

`y`
: Координата Y точки, куда передвигается контур

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-moveto)

## Пример

Начнем создание контура, передвинемся в координаты 0,0. Создадим линию к координатам 300,150:

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
ctx.moveTo(0,0);
ctx.lineTo(300,150);
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.moveTo(0, 0)
ctx.lineTo(300, 150)
ctx.stroke()
```

## Ссылки

- Метод [`moveTo()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/moveTo) <sup><small>MDN (рус.)</small></sup>
