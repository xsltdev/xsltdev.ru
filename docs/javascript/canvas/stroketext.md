---
description: Метод strokeText() рисует (без заливки) на холсте текст. По умолчанию цвет текста черный
---

# strokeText()

Метод **`strokeText()`** рисует (без заливки) на холсте текст. По умолчанию цвет текста черный.

Чтобы определить тип и размер шрифта, используется свойство [`font`](font.md). Чтобы установить другой цвет/градиент заливки, используется свойство [`fillStyle`](fillstyle.md).

Примечание: Параметр `maxWidth` не поддерживается в Safari 5.1 и более ранних версиях.

## Синтаксис

```
context.strokeText(text, x, y, maxWidth);
```

## Параметры

`text`
: Определяет строку текста, которая будет написана на холсте

`x`
: Координата X начала вывода текста (относительно холста)

`y`
: Координата Y начала вывода текста (относительно холста)

`maxWidth`
: Необязательный параметр. Максимально разрешенная ширина текста в пикселях

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-stroketext)

## Пример

Напишем "Hello world!" и "Big smile!" (с градиентом) используя strokeText():

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
ctx.font="20px Georgia";
ctx.strokeText("Hello World!",10,50);
ctx.font="30px Verdana";
// Create gradient
var gradient=ctx.createLinearGradient(0,0,c.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");
// Fill with gradient
ctx.strokeStyle=gradient;
ctx.strokeText("Big smile!",10,90);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

ctx.font = '20px Georgia'
ctx.strokeText('Hello World!', 10, 50)

ctx.font = '30px Verdana'

// Создаем градиент
var gradient = ctx.createLinearGradient(0, 0, c.width, 0)
gradient.addColorStop('0', 'magenta')
gradient.addColorStop('0.5', 'blue')
gradient.addColorStop('1.0', 'red')

// Заполним градиентом
ctx.strokeStyle = gradient
ctx.strokeText('Big smile!', 10, 90)
```

## Ссылки

- Метод [`strokeText()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/strokeText) <sup><small>MDN (рус.)</small></sup>
