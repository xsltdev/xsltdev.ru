---
description: Свойство data возвращает объект, содержащий данные изображения заданного объекта ImageData
---

# data

Свойство **`data`** возвращает объект, содержащий данные изображения заданного объекта `ImageData`.

Информация по каждому пикселю в объекте `ImageData` состоит из четырех частей, RGBA значений:

- `R` - Красный цвет (0-255)
- `G` - Зеленый цвет (0-255)
- `B` - Синий цвет (0-255)
- `A` - Альфа-канал (0-255; 0 - прозрачный, 255 - полностью видимый)

Примечание: Чтобы больше узнать об объекте `ImageData`, см. справку по методам [`createImageData()`](createimagedata.md), [`getImageData()`](getimagedata.md) и [`putImageData()`](putimagedata.md).

## Синтаксис

```
imageData.data;
```

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-imagedata-data)

## Примеры

### Пример 1

Синтаксис, чтобы сделать первый пиксель объекта `ImageData` красным:

```js
imgData = ctx.createImageData(100, 100)

imgData.data[0] = 255
imgData.data[1] = 0
imgData.data[2] = 0
imgData.data[3] = 255
```

Синтаксис, чтобы сделать второй пиксель объекта `ImageData` зеленым:

```js
imgData = ctx.createImageData(100, 100)

imgData.data[4] = 0
imgData.data[5] = 255
imgData.data[6] = 0
imgData.data[7] = 255
```

### Пример 2

Создадим объект ImageData размером 100\*100 пикселей, у которого все пиксели будут красного цвета:

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
var imgData=ctx.createImageData(100,100);
for (var i=0;i<imgData.width*imgData.height*4;i+=4){
imgData.data[i+0]=255;
imgData.data[i+1]=0;
imgData.data[i+2]=0;
imgData.data[i+3]=255;}
ctx.putImageData(imgData,10,10);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
var imgData = ctx.createImageData(100, 100)
for (var i = 0; i < imgData.data.length; i += 4) {
  imgData.data[i + 0] = 255
  imgData.data[i + 1] = 0
  imgData.data[i + 2] = 0
  imgData.data[i + 3] = 255
}
ctx.putImageData(imgData, 10, 10)
```

## Ссылки

- Свойство [`data`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data) <sup><small>MDN (рус.)</small></sup>
