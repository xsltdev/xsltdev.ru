---
description: Свойство lineWidth устанавливает/возвращает ширину текущей линии в пикселях
---

# lineWidth

Свойство **`lineWidth`** устанавливает/возвращает ширину текущей линии в пикселях.

## Синтаксис

```
context.lineWidth=число;
```

## Значения

Значение по умолчанию: `1`

`число`
: Текущая ширина линии в пикселях

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-linewidth)

## Пример

Нарисуем прямоугольник с шириной линии в 10 пикселей:

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
ctx.lineWidth=10;
ctx.strokeRect(20,20,80,100);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.lineWidth = 10
ctx.strokeRect(20, 20, 80, 100)
```

## Ссылки

- Свойство [`lineWidth`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth) <sup><small>MDN (рус.)</small></sup>
