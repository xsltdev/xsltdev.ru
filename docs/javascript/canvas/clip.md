---
description: Метод clip() обрезает область любой формы и размера, находящуюся вне указанного контура
---

# clip()

Метод **`clip()`** обрезает область любой формы и размера, находящуюся вне указанного контура.

Примечание: После обрезки области все последующее рисование будет ограничено обрезанной областью (к другим областям холста доступа не будет). Тем не менее, перед использованием метода `clip()` можно сохранить текущую область холста при помощи метода [`save()`](save.md), а затем в любое время восстановить ее при помощи метода [`restore()`](restore.md).

## Синтаксис

```
void ctx.clip([fillRule]);
void ctx.clip(path [, fillRule]);
```

## Параметры

`fillRule`
: Выбор алгоритма заливки фигуры

: Возможные значения:

: - `nonzero`: Правило ненулевого индекса, значение по умолчанию
: - `evenodd`: Четно-нечетное правило

`path`
: Path2D путь для заливки.

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-clip)

## Пример

Обрезаем прямоугольную область `200x120` пикселей. Затем рисуем красный прямоугольник. Видна будет только та часть этого прямоугольника, которая находится внутри обрезанной области:

<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas");
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1){
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
// Clip a rectangular area
ctx.rect(50,20,200,120);
ctx.stroke();
ctx.clip();
// Draw red rectangle after clip()
ctx.fillStyle="red";
ctx.fillRect(0,0,150,100);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

// Обрежем прямоугольную область
ctx.rect(50, 20, 200, 120)
ctx.stroke()
ctx.clip()

// После использования clip()
// нарисуем красный прямоугольник
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 150, 100)
```

## Ссылки

- Метод [`clip()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/clip) <sup><small>MDN (рус.)</small></sup>
