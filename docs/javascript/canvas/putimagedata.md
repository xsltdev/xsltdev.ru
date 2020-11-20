---
description: Метод putImageData() помещает данные изображения (из заданного объекта ImageData) обратно на холст
---

# putImageData()

Метод **`putImageData()`** помещает данные изображения (из заданного объекта `ImageData`) обратно на холст.

Примечание: Чтобы скопировать пиксельные данные заданной прямоугольной области на холсте, используется метод [`getImageData()`](getimagedata.md). Для создания нового, пустого объекта `ImageData`, используется метод [`createImageData()`](createimagedata.md).

## Синтаксис

```
context.putImageData(imgData, x, y, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
```

## Значения

`imgData`
: Определяет возвращаемый на холст объект `ImageData`

`x`
: Координата X, в пикселях, верхнего левого угла объекта `ImageData`

`y`
: Координата Y, в пикселях, верхнего левого угла объекта `ImageData`

`dirtyX`
: Необязательный параметр. Горизонтальное (x) значение, в пикселях, куда поместить изображение на холсте

`dirtyY`
: Необязательный параметр. Вертикальное (y) значение, в пикселях, куда поместить изображение на холсте

`dirtyWidth`
: Необязательный параметр. Ширина, используемая, чтобы нарисовать изображения

`dirtyHeight`
: Необязательный параметр. Высота, используемая, чтобы нарисовать изображения

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-putimagedata)

## Пример

Следующий код копирует пиксельные данные заданной прямоугольной области на холсте при помощи метода `getImageData()`, а затем помещает эти данные изображения обратно на холст при помощи метода `putImageData()`:

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

## Ссылки

- Метод [`putImageData()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/putImageData) <sup><small>MDN (рус.)</small></sup>
