---
description: Тег canvas (от англ. canvas - холст) создаёт область, в которой при помощи JavaScript можно рисовать разные объекты, выводить изображения, трансформировать их и менять свойства
---

# &lt;canvas&gt;

Тег **`<canvas>`** _(от англ. **canvas** - холст)_ создаёт область, в которой при помощи JavaScript можно рисовать разные объекты, выводить изображения, трансформировать их и менять свойства.

При помощи элемента `<canvas>` можно создавать рисунки, анимацию, игры и др.

## Синтаксис

```html
<canvas id="<идентификатор>"></canvas>
```

Закрывающий тег обязателен.

## Атрибуты

`height`
: Задаёт высоту холста. По умолчанию 300 пикселей.

`width`
: Задаёт ширину холста. По умолчанию 150 пикселей.

Также для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/the-canvas-element.html#the-canvas-element)
- [HTML5](http://www.w3.org/TR/html5/the-canvas-element.html#the-canvas-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <title>canvas</title>
    <meta charset="utf-8" />
    <script>
      window.onload = function() {
        var drawingCanvas = document.getElementById('smile')
        if (drawingCanvas && drawingCanvas.getContext) {
          var context = drawingCanvas.getContext('2d')
          // Рисуем окружность
          context.strokeStyle = '#000'
          context.fillStyle = '#fc0'
          context.beginPath()
          context.arc(100, 100, 50, 0, Math.PI * 2, true)
          context.closePath()
          context.stroke()
          context.fill()
          // Рисуем левый глаз
          context.fillStyle = '#fff'
          context.beginPath()
          context.arc(84, 90, 8, 0, Math.PI * 2, true)
          context.closePath()
          context.stroke()
          context.fill()
          // Рисуем правый глаз
          context.beginPath()
          context.arc(116, 90, 8, 0, Math.PI * 2, true)
          context.closePath()
          context.stroke()
          context.fill()
          // Рисуем рот
          context.beginPath()
          context.moveTo(70, 115)
          context.quadraticCurveTo(100, 130, 130, 115)
          context.quadraticCurveTo(100, 150, 70, 115)
          context.closePath()
          context.stroke()
          context.fill()
        }
      }
    </script>
  </head>
  <body>
    <canvas id="smile" width="200" height="200">
      <p>Ваш браузер не поддерживает рисование.</p>
    </canvas>
  </body>
</html>
```
