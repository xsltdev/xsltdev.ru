---
description: Метод drawImage() рисует изображение, содержимое другого элемента canvas или виде
---

# drawImage()

Метод **`drawImage()`** рисует изображение, содержимое другого элемента `<canvas>` или видео.

Также, метод `drawImage()` может нарисовать часть изображения и/или увеличить/уменьшить размер изображения.

Внимание: Нельзя вызывать метод `drawImage()` прежде, чем изображение будет загружено. Чтобы убедиться, что изображение было загружено, вызов метода `drawImage()` можно поместить внутри события `window.onload()` или `document.getElementById("imageID").onload`.

## Синтаксис

Вывод изображения в заданной позиции на холсте:

```
context.drawImage(img, x, y);
```

Вывод изображения в заданной позиции на холсте и определение его ширины и высоты:

```
context.drawImage(img, x, y, width, height);
```

Обрезание изображения и вывод обрезанной части в заданную позицию:

```
context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
```

## Параметры

`img`
: Определяет используемое изображение, видео или элемент `<canvas>`

`sx`
: Необязательный параметр. Координата X начальной точки обрезки

`sy`
: Необязательный параметр. Координата Y начальной точки обрезки

`swidth`
: Необязательный параметр. Ширина обрезанного изображения

`sheight`
: Необязательный параметр. Высота обрезанного изображения

`x`
: Координата X на холсте, куда будет помещено изображение

`y`
: Координата Y на холсте, куда будет помещено изображение

`width`
: Необязательный параметр. Применяемая ширина изображения (можно растянуть или сжать изображение)

`height`
: Необязательный параметр. Применяемая высота изображения (можно растянуть или сжать изображение)

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-drawimage)

## Примеры

Изображение для примера:

<img id="scream" src="/javascript/canvas/pic_the_scream.jpg" width="220" height="277" alt="Крик" />

### Пример 1

Нарисовать изображение на холсте:

<canvas id="myCanvas" width="250" height="300" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>

JavaScript:

```js
window.onload = function () {
  var c = document.getElementById('myCanvas')
  var ctx = c.getContext('2d')
  var img = document.getElementById('scream')
  ctx.drawImage(img, 10, 10)
}
```

### Пример 2

Поместим изображение в заданную позицию на холсте и определим его ширину и высоту:

<canvas id="myCanvas2" width="250" height="300" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>

JavaScript:

```js
window.onload = function () {
  var c = document.getElementById('myCanvas')
  var ctx = c.getContext('2d')
  var img = document.getElementById('scream')
  ctx.drawImage(img, 10, 10, 150, 180)
}
```

### Пример 3

Обрежем изображение и поместим обрезанную часть в заданную позицию на холсте:

<canvas id="myCanvas3" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>

JavaScript:

```js
window.onload = function () {
  var c = document.getElementById('myCanvas')
  var ctx = c.getContext('2d')
  var img = document.getElementById('scream')
  ctx.drawImage(img, 90, 130, 50, 60, 10, 10, 50, 60)
}
```

### Пример 4

Используемое видео (нажмите Play, чтобы начать демонстрацию):

<video id="video1" controls="" width="270">
<source src="/javascript/canvas/mov_bbb.mp4" type="video/mp4">
<source src="/javascript/canvas/mov_bbb.ogg" type="video/ogg">
<source src="/javascript/canvas/mov_bbb.webm" type="video/webm">
</video>

Элемент canvas:

<canvas id="myCanvas4" width="270" height="135" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>

JavaScript (код рисует текущий кадр видео каждые 20 миллисекунд):

```js
var v = document.getElementById('video1')
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
var i

v.addEventListener(
  'play',
  function () {
    i = window.setInterval(function () {
      ctx.drawImage(v, 5, 5, 260, 125)
    }, 20)
  },
  false
)
v.addEventListener(
  'pause',
  function () {
    window.clearInterval(i)
  },
  false
)
v.addEventListener(
  'ended',
  function () {
    clearInterval(i)
  },
  false
)
```

## Ссылки

- Метод [`drawImage()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/drawImage) <sup><small>MDN (рус.)</small></sup>
