---
description: Свойство shadowOffsetY устанавливает/возвращает вертикальное расстояние тени от фигуры
---

# shadowOffsetY

Свойство **`shadowOffsetY`** устанавливает/возвращает вертикальное расстояние тени от фигуры.

- `shadowOffsetY=0` означает, что тень находится непосредственно за фигурой.
- `shadowOffsetY=20` означает, что тень начинается в `20` пикселях вниз от верхнего края фигуры.
- `shadowOffsetY=-20` означает, что тень начинается в `20` пикселях вверх от верхнего края фигуры.

Примечание: Чтобы задать горизонтальное расстояние тени от фигуры, используется свойство [`shadowOffsetX`](shadowoffsetx.md).

## Синтаксис

```
context.shadowOffsetY=число;
```

## Значения

Значение по умолчанию: `0`

`число`
: Положительное или отрицательное число, которое определяет вертикальное расстояние тени от фигуры

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-shadowoffsety)

## Пример

Нарисуем прямоугольник с тенью, которая будет располагаться в 20 пикселях вниз от его верхнего края:

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.shadowBlur = 10
ctx.shadowOffsetY = 20
ctx.shadowColor = 'black'
ctx.fillStyle = 'red'
ctx.fillRect(20, 20, 100, 80)
```

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
ctx.shadowBlur=10;
ctx.shadowOffsetY=20;
ctx.shadowColor="black";
ctx.fillStyle="red";
ctx.fillRect(20,20,100,80);
}
</script>

## Ссылки

- Свойство [`shadowOffsetY`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY) <sup><small>MDN (рус.)</small></sup>
