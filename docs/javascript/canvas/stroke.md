---
description: Метод stroke() в действительности рисует фигуру, контур которой был задан ранее. По умолчанию фигура будет нарисована черным цветом
---

# stroke()

Метод **`stroke()`** в действительности рисует фигуру, контур которой был задан ранее. По умолчанию фигура будет нарисована черным цветом.

Примечание: Чтобы изменить цвет/градиент, которым будет нарисована фигура, используется свойство [`strokeStyle`](strokestyle.md).

## Синтаксис

```
void ctx.stroke();
void ctx.stroke(path);
```

## Параметры

`path`
: Path2D путь для заливки.

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-stroke)

## Пример

Нарисуем фигуру в виде латинской буквы L красным цветом:

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
ctx.moveTo(20,20);
ctx.lineTo(20,100);
ctx.lineTo(70,100);
ctx.strokeStyle="red";
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(70, 100)
ctx.strokeStyle = 'red'
ctx.stroke()
```

## Ссылки

- Метод [`stroke()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) <sup><small>MDN (рус.)</small></sup>
