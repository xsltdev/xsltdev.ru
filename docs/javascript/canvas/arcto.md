---
description: Метод arcTo() создает дугу/кривую между двумя касательными в элементе canvas
---

# arcTo()

Метод **`arcTo()`** создает дугу/кривую между двумя касательными в элементе `<canvas>`.

![Дуга](arcto.png)

Примечание: Чтобы действительно нарисовать дугу в элементе `<canvas>`, используется метод [`stroke()`](stroke.md).

## Синтаксис

```
context.arcTo(x1, y1, x2, y2, r);
```

## Параметры

`x1`
: Координата X первой касательной

`y1`
: Координата Y первой касательной

`x2`
: Координата X второй касательной

`y2`
: Координата Y второй касательной

`r`
: Радиус дуги

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-arcto)

## Пример

Создаем дугу между двумя касательными:

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
ctx.lineTo(100,20);
ctx.arcTo(150,20,150,70,50);
ctx.lineTo(150,120);
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
// Создаем начальную точку
ctx.moveTo(20, 20)
// Создаем горизонтальную линию
ctx.lineTo(100, 20)
// Создаем дугу
ctx.arcTo(150, 20, 150, 70, 50)
// Продолжаем линию по вертикали
ctx.lineTo(150, 120)
// Рисуем все
ctx.stroke()
```

## Ссылки

- Метод [`arcTo()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/arcTo) <sup><small>MDN (рус.)</small></sup>
