---
description: Свойство lineJoin устанавливает/возвращает тип угла, созданного пересечением двух линий
---

# lineJoin

Свойство **`lineJoin`** устанавливает/возвращает тип угла, созданного пересечением двух линий.

Примечание: На значение `miter` влияет свойство [`miterLimit`](miterlimit.md).

## Синтаксис

```
context.lineJoin="bevel | round | miter";
```

## Значения

Значение по умолчанию: `miter`

`bevel`
: Скошенный угол

`round`
: Закругленный угол

`miter`
: Значение по умолчанию. Заостренный угол

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-linejoin)

## Пример

Создадим закругленный угол пересечения двух линий:

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
ctx.lineWidth=10;
ctx.lineJoin="round";
ctx.moveTo(20,20);
ctx.lineTo(100,50);
ctx.lineTo(20,100);
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.lineJoin = 'round'
ctx.moveTo(20, 20)
ctx.lineTo(100, 50)
ctx.lineTo(20, 100)
ctx.stroke()
```

## Ссылки

- Свойство [`lineJoin`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) <sup><small>MDN (рус.)</small></sup>
