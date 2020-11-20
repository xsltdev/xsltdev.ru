---
description: Свойство shadowBlur устанавливает/возвращает уровень размытости для теней
---

# shadowBlur

Свойство **`shadowBlur`** устанавливает/возвращает уровень размытости для теней.

## Синтаксис

```
context.shadowBlur=число;
```

## Значения

Значение по умолчанию: `0`

`число`
: Уровень размытости для теней

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-shadowblur)

## Пример

Нарисуем красный прямоугольник с черной тенью, имеющей уровень размытости 20:

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.shadowBlur = 20
ctx.shadowColor = 'black'
ctx.fillStyle = 'red'
ctx.fillRect(20, 20, 100, 80)
```

Результат:

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
ctx.shadowBlur=20;
ctx.shadowColor="black";
ctx.fillStyle="red";
ctx.fillRect(20,20,100,80); }
</script>

## См. также

- Свойство [`shadowColor`](shadowcolor.md)

## Ссылки

- Свойство [`shadowBlur`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur) <sup><small>MDN (рус.)</small></sup>
