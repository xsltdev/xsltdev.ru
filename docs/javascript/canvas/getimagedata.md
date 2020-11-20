---
description: Метод getImageData() возвращает объект ImageData, который копирует пиксельные данные заданной прямоугольной области холста
---

# getImageData()

Метод **`getImageData()`** возвращает объект `ImageData`, который копирует пиксельные данные заданной прямоугольной области холста.

Примечание: Объект `ImageData` это не изображение. Он представляет часть (прямоугольную область) холста и содержит информацию о каждом пикселе данной прямоугольной области.

- `R` - Красный цвет (0-255)
- `G` - Зеленый цвет (0-255)
- `B` - Синий цвет (0-255)
- `A` - Альфа-канал (0-255; 0 - прозрачный, 255 - полностью видимый)

Информация о цвете/прозрачности храниться в массиве в свойстве [`data`](data.md) объекта `ImageData`.

После манипулирования с этими данными их можно скопировать обратно на холст при помощи метода [`putImageData()`](putimagedata.md).

Пример:

Получить цветовую информацию по первому пикселю объекта `ImageData` можно при помощи следующего кода:

```js
red = imgData.data[0]
green = imgData.data[1]
blue = imgData.data[2]
alpha = imgData.data[3]
```

Примечание: При помощи метода `getImageData()` можно инвертировать цвет каждого пикселя изображения на холсте. Для этого нужно в цикле изменить цвет всех пикселей, используя следующую формулу:

```js
red = 255 - old_red
green = 255 - old_green
blue = 255 - old_blue
```

## Синтаксис

```
context.getImageData(x, y, width, height);
```

## Значения

`x`
: Координата X (в пикселях) верхнего левого угла копируемой области

`y`
: Координата Y (в пикселях) верхнего левого угла копируемой области

`width`
: Ширина копируемой области

`height`
: Высота копируемой области

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-getimagedata)

## Примеры

### Пример 1

Следующий код копирует пиксельные данные определенной прямоугольной области на холсте при помощи метода `getImageData()`, а затем возвращает их обратно при помощи метода `putImageData()`:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.fillStyle = 'red'
ctx.fillRect(10, 10, 50, 50)

function copy() {
  var imgData = ctx.getImageData(10, 10, 50, 50)
  ctx.putImageData(imgData, 10, 70)
}
```

### Пример 2

Изображение для примера:

<img id="scream" src="/javascript/canvas/pic_the_scream.jpg" width="220" height="277" alt="Крик" />

Используем метод `getImageData()`, чтобы инвертировать цвет каждого пикселя изображения на холсте:

<canvas id="myCanvas2" width="240" height="307" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
document.getElementById("scream").onload=function(){
var c=document.getElementById("myCanvas2");
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1){
var ctx=c.getContext("2d");
var img=document.getElementById("scream");
ctx.drawImage(img,10,10);
var imgData=ctx.getImageData(0,0,c.width,c.height);
for (i=0; i<imgData.width*imgData.height*4;i+=4){
imgData.data[i]=255-imgData.data[i];
imgData.data[i+1]=255-imgData.data[i+1];
imgData.data[i+2]=255-imgData.data[i+2];
imgData.data[i+3]=255;}
ctx.putImageData(imgData,0,0);}
};
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
var img = document.getElementById('scream')
ctx.drawImage(img, 0, 0)
var imgData = ctx.getImageData(0, 0, c.width, c.height)

// инвертироват цвета
for (var i = 0; i < imgData.data.length; i += 4) {
  imgData.data[i] = 255 - imgData.data[i]
  imgData.data[i + 1] = 255 - imgData.data[i + 1]
  imgData.data[i + 2] = 255 - imgData.data[i + 2]
  imgData.data[i + 3] = 255
}

ctx.putImageData(imgData, 0, 0)
```

## Ссылки

- Метод [`getImageData()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/getImageData) <sup><small>MDN (рус.)</small></sup>
