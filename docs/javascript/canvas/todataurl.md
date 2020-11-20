---
description: Метод toDataURL() возвращает URI данных, содержащий представление изображения в формате, заданном параметром типа
---

# toDataURL()

Метод **`toDataURL()`** возвращает URI данных, содержащий представление изображения в формате, заданном параметром типа (по умолчанию PNG). Возвращенное изображение имеет разрешение 96 точек на дюйм.

Если высота или ширина холста равна `0`, возвращается строка `data :,`.

Если запрошенный тип не является `image/png`, но возвращаемое значение начинается с `data:image/png`, то запрошенный тип не поддерживается.

Chrome также поддерживает тип `image/webp`.

## Синтаксис

```
canvas.toDataURL(type, encoderOptions);
```

## Параметры

`type`
: Тип изображения, по-умолчанию `image/png`

`encoderOptions`
: Число от 0 до 1, задающее качество изображения для форматов, использующих сжатие с потерями, например `image/jpeg` или `image/webp`. Значение по умолчанию `0.92`.

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-canvas-todataurl)
- [HTML5](https://www.w3.org/TR/html50/scripting-1.html#dom-canvas-todataurl)

## Примеры

### Пример 1

```js
var canvas = document.getElementById('canvas')
var dataURL = canvas.toDataURL()
console.log(dataURL)
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Пример 2

```js
var fullQuality = canvas.toDataURL('image/jpeg', 1.0)
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...9oADAMBAAIRAxEAPwD/AD/6AP/Z"
var mediumQuality = canvas.toDataURL('image/jpeg', 0.5)
var lowQuality = canvas.toDataURL('image/jpeg', 0.1)
```

### Пример 3

```html
<img
  class="grayscale"
  src="myPicture.png"
  alt="Description of my picture"
/>
```

```js
window.addEventListener('load', removeColors)

function showColorImg() {
  this.style.display = 'none'
  this.nextSibling.style.display = 'inline'
}

function showGrayImg() {
  this.previousSibling.style.display = 'inline'
  this.style.display = 'none'
}

function removeColors() {
  var aImages = document.getElementsByClassName(
      'grayscale'
    ),
    nImgsLen = aImages.length,
    oCanvas = document.createElement('canvas'),
    oCtx = oCanvas.getContext('2d')
  for (
    var nWidth,
      nHeight,
      oImgData,
      oGrayImg,
      nPixel,
      aPix,
      nPixLen,
      nImgId = 0;
    nImgId < nImgsLen;
    nImgId++
  ) {
    oColorImg = aImages[nImgId]
    nWidth = oColorImg.offsetWidth
    nHeight = oColorImg.offsetHeight
    oCanvas.width = nWidth
    oCanvas.height = nHeight
    oCtx.drawImage(oColorImg, 0, 0)
    oImgData = oCtx.getImageData(0, 0, nWidth, nHeight)
    aPix = oImgData.data
    nPixLen = aPix.length
    for (nPixel = 0; nPixel < nPixLen; nPixel += 4) {
      aPix[nPixel + 2] = aPix[nPixel + 1] = aPix[nPixel] =
        (aPix[nPixel] +
          aPix[nPixel + 1] +
          aPix[nPixel + 2]) /
        3
    }
    oCtx.putImageData(oImgData, 0, 0)
    oGrayImg = new Image()
    oGrayImg.src = oCanvas.toDataURL()
    oGrayImg.onmouseover = showColorImg
    oColorImg.onmouseout = showGrayImg
    oCtx.clearRect(0, 0, nWidth, nHeight)
    oColorImg.style.display = 'none'
    oColorImg.parentNode.insertBefore(oGrayImg, oColorImg)
  }
}
```

## Ссылки

- Метод [`toDataURL()`](https://developer.mozilla.org/ru/docs/Web/API/HTMLCanvasElement/toDataURL) <sup><small>MDN (рус.)</small></sup>
