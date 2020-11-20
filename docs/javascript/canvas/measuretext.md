---
description: Метод measureText() возвращает объект, содержащий ширину заданного текста в пикселях
---

# measureText()

Метод **`measureText()`** возвращает объект, содержащий ширину заданного текста в пикселях.

Примечание: Используйте этот метод, если вам нужно узнать ширину текста до того, как написать его на холсте.

## Синтаксис

```
context.measureText(текст).width;
```

## Параметры

`текст`
: Измеряемый текст

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-measuretext)

## Пример

Узнаем ширину текста перед тем, как написать его на холсте:

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
ctx.font="30px Arial";
var txt="Hello World"
ctx.fillText("width:" + ctx.measureText(txt).width,10,50)
ctx.fillText(txt,10,100);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.font = '30px Arial'
var txt = 'Hello World'
ctx.fillText('width:' + ctx.measureText(txt).width, 10, 50)
ctx.fillText(txt, 10, 100)
```

## Ссылки

- Метод [`measureText()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/measureText) <sup><small>MDN (рус.)</small></sup>
