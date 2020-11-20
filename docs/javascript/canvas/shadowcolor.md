---
description: Свойство shadowColor устанавливает/возвращает цвет теней графического объекта
---

# shadowColor

Свойство **`shadowColor`** устанавливает/возвращает цвет теней графического объекта.

Примечание: Чтобы создать тень для графического объекта, используется свойство `shadowColor` вместе со свойством [`shadowBlur`](shadowblur.md). Положение тени устанавливается при помощи свойств [`shadowOffsetX`](shadowoffsetx.md) и [`shadowOffsetY`](shadowoffsety.md).

## Синтаксис

```
context.shadowColor=цвет;
```

## Значения

Значение по умолчанию: `#000000`

`цвет`
: CSS значение цвета для тени.

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-shadowcolor)

## Примеры

Нарисуем красный прямоугольник с черной тенью:

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
ctx.fillRect(20,20,100,80);
}
</script>

## Ссылки

- Свойство [`shadowColor`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor) <sup><small>MDN (рус.)</small></sup>
