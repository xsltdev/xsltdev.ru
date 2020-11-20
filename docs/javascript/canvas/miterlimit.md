---
description: Свойство miterLimit устанавливает/возвращает максимальную длину среза
---

# miterLimit

Свойство **`miterLimit`** устанавливает/возвращает максимальную длину среза.

Длина среза это расстояние между внутренним и внешнем углом, образованным пересечением двух линий.

![miterLimit](miterlimitfig.gif)

Примечание: Свойство `miterLimit` работает только тогда, когда свойство [`lineJoin`](linejoin.md) имеет значение `miter`.

Длина среза становится больше по мере того, как уменьшается угол пересечения линий.

Чтобы ограничить чрезмерное удлинение среза, и используется свойство `miterLimit`.

Если длина среза будет превышать заданное в свойстве `miterLimit` значение, угол будет отображаться как при значении `bevel` свойства `lineJoin` (Fig 3):

![miterlimitbevel](miterlimitbevelfig.gif)

## Синтаксис

```
context.miterLimit=число;
```

## Значения

Значение по умолчанию: `10`

`число`
: Позитивное число, определяющее максимальную длину среза. Если текущая длина среза будет превышать заданное значение, то угол будет отображаться как при значении `bevel` свойства `lineJoin`.

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-miterlimit)

## Пример

Нарисуем две линии с максимальной длиной среза угла их пересечения в 5:

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.lineWidth=10;
ctx.lineJoin="miter";
ctx.miterLimit=5;
ctx.moveTo(20,20);
ctx.lineTo(50,27);
ctx.lineTo(20,34);
ctx.stroke();
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.lineWidth = 10
ctx.lineJoin = 'miter'
ctx.miterLimit = 5
ctx.moveTo(20, 20)
ctx.lineTo(50, 27)
ctx.lineTo(20, 34)
ctx.stroke()
```

## Ссылки

- Свойство [`miterLimit`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) <sup><small>MDN (рус.)</small></sup>
