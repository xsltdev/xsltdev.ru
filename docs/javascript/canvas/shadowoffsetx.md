---
description: Свойство shadowOffsetX устанавливает/возвращает горизонтальное расстояние тени от фигуры
---

# shadowOffsetX

Свойство **`shadowOffsetX`** устанавливает/возвращает горизонтальное расстояние тени от фигуры.

- `shadowOffsetX=0` означает, что тень находится непосредственно за фигурой.
- `shadowOffsetX=20` означает, что тень начинается в `20` пикселях вправо от левого края фигуры.
- `shadowOffsetX=-20` означает, что тень начинается в `20` пикселях влево от левого края фигуры.

Примечание: Чтобы задать вертикальное расстояние тени от фигуры, используется свойство [`shadowOffsetY`](shadowoffsety.md).

## Синтаксис

```
context.shadowOffsetX=число;
```

## Значения

Значение по умолчанию: `0`

`число`
: Положительное или отрицательное число, которое определяет горизонтальное расстояние тени от фигуры

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-shadowoffsetx)

## Пример

Нарисуем прямоугольник с тенью, которая будет располагаться в 20 пикселях вправо от его левого края:

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.shadowBlur = 10
ctx.shadowOffsetX = 20
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
ctx.shadowOffsetX=20;
ctx.shadowColor="black";
ctx.fillStyle="red";
ctx.fillRect(20,20,100,80);
}
</script>

## Ссылки

- Свойство [`shadowOffsetX`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX) <sup><small>MDN (рус.)</small></sup>
