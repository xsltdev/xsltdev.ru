---
description: Метод createImageData() создает новый, пустой объект ImageData. Пиксели нового объекта по умолчанию имеют значение прозрачного черного цвета
---

# createImageData()

Метод **`createImageData()`** создает новый, пустой объект `ImageData`. Пиксели нового объекта по умолчанию имеют значение прозрачного черного цвета.

Информация по каждому пикселю в объекте `ImageData` состоит из четырех частей, RGBA значений:

- `R` - Красный цвет (0-255)
- `G` - Зеленый цвет (0-255)
- `B` - Синий цвет (0-255)
- `A` - Альфа-канал (0-255; 0 - прозрачный, 255 - полностью видимый)

Таким образом, прозрачный черный цвет соответствует значению `(0,0,0,0)`.

Информация о цвете/прозрачности храниться в массиве, и так как массив содержит 4 части такой информации для каждого пикселя, размер массива составляет в 4 раза больше размера объекта `ImageData`: `width*height*4`. (Самый простой способ узнать размер этого массива — воспользоваться выражением `ImageDataObject.data.length`)

Массив с информацией о цвете/прозрачности хранится в свойстве `data` объекта `ImageData`.

Примечание: После манипуляции с информацией о цвете/прозрачности в этом массиве вы можете скопировать эти данные на холст (`canvas`) при помощи метода [`putImageData()`](putimagedata.md).

Примеры:

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

## Синтаксис

Существует две версии метода `createImageData()`:

1.&nbsp;Создает новый объект `ImageData` на основе заданного разрешения (в пикселях):

```js
var imgData = context.createImageData(width, height)
```

2.&nbsp;Создает новый объект `ImageData` с теми же разрешениями, что и другой объект `ImageData` (при этом данные изображения не копируются):

```js
var imgData = context.createImageData(imageData)
```

## Значения

`width`
: Ширина нового объекта `ImageData` в пикселях

`height`
: Высота нового объекта `ImageData` в пикселях

`imageData`
: Другой объект `ImageData`

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-createimagedata)

## Пример

Создадим объект `ImageData` размером `100*100` пикселей, у которого все пиксели будут красного цвета, и выведем его на холст:

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

- Метод [`createImageData()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/createImageData) <sup><small>MDN (рус.)</small></sup>
