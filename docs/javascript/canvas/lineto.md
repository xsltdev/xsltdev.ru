---
description: Метод lineTo() добавляет новую точку контура и создает линию к этой точке от последней заданной точки
---

# lineTo()

Метод **`lineTo()`** добавляет новую точку контура и создает линию к этой точке от последней заданной точки (этот метод не рисует линию).

Примечание: Чтобы в действительности нарисовать контур, используйте метод [`stroke()`](stroke.md).

## Синтаксис

```
context.lineTo(x, y);
```

## Параметры

`x`
: Координата X новой точки контура

`y`
: Координата Y новой точки контура

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-lineto)

## Примеры

### Пример 1

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

### Пример 2

Нарисуем фигуру, похожую формой на латинскую букву L:

<canvas id="myCanvas2" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas2");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(20,100);
ctx.lineTo(70,100);
ctx.stroke();
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(70, 100)
ctx.stroke()
```

## Ссылки

- Метод [`lineTo()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/lineTo) <sup><small>MDN (рус.)</small></sup>
