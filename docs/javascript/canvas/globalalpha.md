---
description: Свойство globalAlpha устанавливает/возвращает текущее значение прозрачности или альфа-канала графического объекта
---

# globalAlpha

Свойство **`globalAlpha`** устанавливает/возвращает текущее значение прозрачности или альфа-канала графического объекта.

Значением свойства `globalAlpha` должно быть число между `0.0` (полная прозрачность) и `1.0` (нет прозрачности).

## Синтаксис

```
context.globalAlpha=число;
```

## Значения

Значение по умолчанию: `1`

`число`
: Значение прозрачности. Должно быть число между `0.0` (полная прозрачность) и `1.0` (нет прозрачности)

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-globalalpha)

## Пример

Сначала нарисуем красный прямоугольник, затем установим прозрачность (`globalAlpha`) на `0.5`, и затем нарисуем синий и зеленый прямоугольники:

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
ctx.fillRect(20,20,75,50);
ctx.globalAlpha=0.2;
ctx.fillStyle="blue";
ctx.fillRect(50,50,75,50);
ctx.fillStyle="green";
ctx.fillRect(80,80,75,50);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.fillStyle = 'red'
ctx.fillRect(20, 20, 75, 50)

// Включим прозрачность
ctx.globalAlpha = 0.2
ctx.fillStyle = 'blue'
ctx.fillRect(50, 50, 75, 50)
ctx.fillStyle = 'green'
ctx.fillRect(80, 80, 75, 50)
```

## Ссылки

- Свойство [`globalAlpha`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/globalAlpha) <sup><small>MDN (рус.)</small></sup>
