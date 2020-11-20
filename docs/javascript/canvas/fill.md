---
description: Метод fill() делает заливку текущей фигуры (контура). Цвет заливки по умолчанию черный
---

# fill()

Метод **`fill()`** делает заливку текущей фигуры (контура). Цвет заливки по умолчанию черный.

Чтобы установить другой цвет/градиент заливки, используется свойство [`fillStyle`](fillstyle.md).

Если контур не закрыт, то метод `fill()` добавит линию от последней к начальной точке контура, чтобы закрыть контур (как метод [`closePath()`](closepath.md)), и затем заполнить этот контур.

## Синтаксис

```
void ctx.fill([fillRule]);
void ctx.fill(path[, fillRule]);
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

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-fill)

## Пример

Нарисуем два прямоугольника `150x100` пикселей. Один зальем красным цветом, а другой синим:

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
ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.fillStyle = "red";
ctx.fill();
ctx.beginPath();
ctx.rect(40, 40, 150, 100);
ctx.fillStyle = "blue";
ctx.fill();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

ctx.beginPath()
ctx.rect(20, 20, 150, 100)
ctx.fillStyle = 'red'
ctx.fill()

ctx.beginPath()
ctx.rect(40, 40, 150, 100)
ctx.fillStyle = 'blue'
ctx.fill()
```

## Ссылки

- Метод [`fill()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/fill) <sup><small>MDN (рус.)</small></sup>
