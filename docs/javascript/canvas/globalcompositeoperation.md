---
description: Свойство globalCompositeOperation устанавливает/возвращает то, как исходное (новое) изображение нарисовано на целевом (существующем) изображени
---

# globalCompositeOperation

Свойство **`globalCompositeOperation`** устанавливает/возвращает то, как исходное (новое) изображение нарисовано на целевом (существующем) изображении.

исходное изображение = рисунок, который вы планируете поместить на холсте.

целевое изображение = рисунок, который уже размещен на холсте.

## Синтаксис

```
context.globalCompositeOperation="source-in";
```

## Значения

Значение по умолчанию: `source-over`

`source-over`
: Значение по умолчанию. Исходное изображение накрывает целевое

`source-atop`
: Исходное изображение накладывается поверх целевого. При этом часть исходного изображения, которая выходит за границы целевого изображения, не отображается

`source-in`
: Исходное изображение отображается внутри целевого изображения. При этом отображается только та часть исходного изображения, которая находится в границах целевого изображения. Само целевое изображение становится прозрачным

`source-out`
: Исходное изображение отображается вне границ целевого изображения. При этом отображается только та часть исходного изображения, которая находится за пределами целевого изображения. Само целевое изображение становится прозрачным

`destination-over`
: Целевое изображение накрывает исходное

`destination-atop`
: Целевое изображение накладывается поверх исходного. При этом часть целевого изображения, которая выходит за границы исходного изображения, не отображается

`destination-in`
: Целевое изображение отображается внутри исходного изображения. При этом отображается только та часть целевого изображения, которая находится в границах исходного изображения. Само исходное изображение становится прозрачным

`destination-out`
: Целевое изображение отображается вне границ исходного изображения. При этом отображается только та часть целевого изображения, которая находится за пределами исходного изображения. Само исходное изображение становится прозрачным

`lighter`
: Отображает исходное изображение + целевое изображение

`copy`
: Отображает исходное изображение. Целевое изображение игнорируется

`xor`
: Исходное изображение комбинируется с целевым используя операцию исключающего ИЛИ

`multiply`
: Пиксели верхнего слоя умножаются на соответствующий пиксель нижнего слоя.

`screen`
: Пиксели инвертируются, умножаются и снова инвертируются.

`overlay`
: Сочетание умножения и экрана. Темные части базового слоя становятся темнее, а светлые части становятся светлее.

`darken`
: Сохраняет самые темные пиксели обоих слоев.

`lighten`
: Сохраняет самые светлые пиксели обоих слоев.

`color-dodge`
: Делит нижний слой на перевернутый верхний слой.

`color-burn`
: Делит инвертированный нижний слой на верхний, а затем инвертирует результат.

`hard-light`
: Комбинация умножения и экрана, как наложение, но с заменой верхнего и нижнего слоя.

`soft-light`
: Более мягкая версия жесткого света. Чистый черный или белый не приводит к чистому черному или белому.

`difference`
: Вычитает нижний слой из верхнего слоя или наоборот, чтобы всегда получать положительное значение.

`exclusion`
: Как `difference`, но с более низким контрастом.

`hue`
: Сохраняет яркость и цветность нижнего слоя, принимая оттенок верхнего слоя.

`saturation`
: Сохраняет яркость и оттенок нижнего слоя, принимая цветность верхнего слоя.

`color`
: Сохраняет яркость нижнего слоя, принимая оттенок и цветность верхнего слоя.

`luminosity`
: Сохраняет оттенок и цветность нижнего слоя, принимая яркость верхнего слоя.

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-globalcompositeoperation)
- [Compositing and Blending Level 1](https://drafts.fxtf.org/compositing-1/)

## Примеры

### Пример 1

Нарисуем прямоугольники используя два разных значения globalCompositeOperation. Красный прямоугольник — целевое изображение. Синий прямоугольник — исходное изображение:

`source-over` `destination-over`

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
ctx.globalCompositeOperation="source-over";
ctx.fillStyle="blue";
ctx.fillRect(50,50,75,50);
ctx.fillStyle="red";
ctx.fillRect(150,20,75,50);
ctx.globalCompositeOperation="destination-over";
ctx.fillStyle="blue";
ctx.fillRect(180,50,75,50);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

ctx.fillStyle = 'red'
ctx.fillRect(20, 20, 75, 50)
ctx.globalCompositeOperation = 'source-over'
ctx.fillStyle = 'blue'
ctx.fillRect(50, 50, 75, 50)

ctx.fillStyle = 'red'
ctx.fillRect(150, 20, 75, 50)
ctx.globalCompositeOperation = 'destination-over'
ctx.fillStyle = 'blue'
ctx.fillRect(180, 50, 75, 50)
```

Все значения свойства `globalCompositeOperation`:

<div style="background-color:#ffffff;padding:10px;">
<script>
var gco=new Array();
gco.push("source-over");
gco.push("source-atop");
gco.push("source-in");
gco.push("source-out");
gco.push("destination-over");
gco.push("destination-atop");
gco.push("destination-in");
gco.push("destination-out");
gco.push("lighter");
gco.push("copy");
gco.push("xor");
gco.push("multiply");
gco.push("screen");
gco.push("overlay");
gco.push("darken");
gco.push("lighten");
gco.push("color-dodge");
gco.push("color-burn");
gco.push("hard-light");
gco.push("soft-light");
gco.push("difference");
gco.push("exclusion");
gco.push("hue");
gco.push("saturation");
gco.push("color");
gco.push("luminosity");
for (n=0;n<gco.length;n++){
document.write("<div style='float:left;width:140px' id='p_" + n + "'>" + gco[n] + ":<br>");
var canvas=document.createElement("canvas");
canvas.width=120;
canvas.height=100;
document.getElementById("p_" + n).appendChild(canvas);
var ctx=canvas.getContext("2d");
ctx.rect(10,10,50,50);
var grad1 = ctx.createLinearGradient(0, 0, 60, 0)
grad1.addColorStop(0, 'blue')
grad1.addColorStop(1, 'white')
ctx.fillStyle=grad1;
ctx.fill();
ctx.globalCompositeOperation=gco[n];
ctx.beginPath();
ctx.arc(50,50,30,0,2*Math.PI);
var grad2 = ctx.createLinearGradient(0, 0, 80, 0)
grad2.addColorStop(0, 'white')
grad2.addColorStop(1, 'red')
ctx.fillStyle=grad2;
ctx.fill();
document.write('</div>');}
</script><!-- div style="float:left;width:140px" id="p_0">source-over:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_1">source-atop:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_2">source-in:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_3">source-out:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_4">destination-over:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_5">destination-atop:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_6">destination-in:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_7">destination-out:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_8">lighter:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_9">copy:<br><canvas width="120" height="100"></canvas></div><div style="float:left;width:140px" id="p_10">xor:<br><canvas width="120" height="100"></canvas></div -->
</div>
<br clear="all" />

### Пример 2

<iframe class="live-sample-frame sample-code-frame" frameborder="0" height="300" id="frame_Compositing_example" src="https://mdn.mozillademos.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing/Example$samples/Compositing_example?revision=1573499" width="100%"></iframe>

## Ссылки

- Свойство [`globalCompositeOperation`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) <sup><small>MDN (рус.)</small></sup>
