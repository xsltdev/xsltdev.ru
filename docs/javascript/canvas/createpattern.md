---
description: Метод createPattern() размножает заданный элемент в заданном направлении
---

# createPattern()

Метод **`createPattern()`** размножает заданный элемент в заданном направлении.

В качестве размножаемого элемента можно использовать изображение, видео или другой элемент [`<canvas>`](https://hcdev.ru/html/canvas/).

Размножаемый элемент может использоваться для рисования/заливки прямоугольников, окружностей, линий и т. д.

## Синтаксис

```
context.createPattern(image,"repeat | repeat-x | repeat-y | no-repeat");
```

## Параметры

`image`
: Определяет элемент изображения, `<canvas>` или видео, который будет использоваться в качестве шаблона

`repeat`
: Значение по умолчанию. Шаблон размножается как по горизонтали, так и по вертикали

`repeat-x`
: Шаблон размножается только по горизонтали

`repeat-y`
: Шаблон размножается только по вертикали

`no-repeat`
: Шаблон будет отображен только один раз

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-createpattern)

## Пример

Изображение для примера:

<img src="/javascript/canvas/img_lamp.jpg" width="32" height="32" id="lamp" alt="Лампа">

Размножим изображение по горизонтали и вертикали:

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
document.getElementById("lamp").onload=function(){
var c=document.getElementById("myCanvas");
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1){
var ctx=c.getContext('2d');
var img=this;
var pat=ctx.createPattern(img,'repeat');
ctx.rect(0,0,150,100);
ctx.fillStyle=pat;
ctx.fill();}}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
var img = document.getElementById('lamp');
var pat = ctx.createPattern(img, 'repeat');
ctx.rect(0, 0, 150, 100);
ctx.fillStyle = pat;
ctx.fill();
```

## Ссылки

- Метод [`createPattern()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern) <sup><small>MDN (рус.)</small></sup>
