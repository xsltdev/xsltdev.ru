---
description: Метод arc() создает дугу/кривую (используется для создания окружностей или их части)
---

# arc()

Метод **`arc()`** создает дугу/кривую (используется для создания окружностей или их части).

Примечание: Чтобы создать круг при помощи метода `arc()`, нужно установить начальный угол в `0`, а конечный угол в `2*Math.PI`. Затем при помощи метода [`stroke()`](stroke.md) или [`fill()`](fill.md) в действительности нарисовать дугу в элементе `<canvas>`.

![Дуга](arc.gif)

<span style="color:#00ff00;">Центр</span>: `arc(100,75,50,0*Math.PI,1.5*Math.PI)`

<span style="color:#ff0000;">Начальный угол</span>: `arc(100,75,50,0,1.5*Math.PI)`

<span style="color:#0000ff;">Конечный угол</span>: `arc(100,75,50,0*Math.PI,1.5*Math.PI)`

## Синтаксис

```
context.arc(x, y, r, sAngle, eAngle, counterclockwise);
```

## Параметры

`x`
: Координата X центра круга

`y`
: Координата Y центра круга

`r`
: Радиус круга

`sAngle`
: Начальный угол в радианах (0 — позиция на 3 часа)

`eAngle`
: Конечный угол в радианах

`counterclockwise`
: Необязательный параметр. Определяет, как рисовать окружность, по часовой стрелке или против часовой стрелки. По умолчанию установлено значение `false`, что означает по часовой стрелке. Значение `true` указывает направление против часовой стрелки.

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-arc)

## Пример

Создаем круг:

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
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')
ctx.beginPath()
ctx.arc(100, 75, 50, 0, 2 * Math.PI)
ctx.stroke()
```

## Ссылки

- Метод [`arc()`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/arc) <sup><small>MDN (рус.)</small></sup>
