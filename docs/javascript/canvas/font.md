---
description: Свойство font устанавливает или возвращает свойства шрифта для текстового содержимого на холсте
---

# font

Свойство **`font`** устанавливает или возвращает свойства шрифта для текстового содержимого на холсте.

Свойство `font` объекта `canvas` использует тот же синтаксис, что и CSS свойство [`font`](https://hcdev.ru/css/font/).

## Синтаксис

```
context.font="italic small-caps bold 12px arial";
```

## Значения

Значение по умолчанию: `10px sans-serif`

`font-style`
: Определяет стиль шрифта. Возможные значения: `normal`, `italic`, `oblique`

`font-variant`
: Определяет способ представления строчных букв. Возможные значения: `normal`, `small-caps`

`font-weight`
: Определяет "жирность" шрифта. Возможные значения: `normal`, `bold`, `bolder`, `lighter`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

`font-size`/`line-height`
: Определяет размер шрифта и расстояние между строк, в пикселях

`font-family`
: Определяет семейство шрифта

`caption`
: Использовать шрифт для текста элементов форм вроде кнопок

`icon`
: Использовать шрифт для текста под иконками

`menu`
: Использовать шрифт применяемый в меню

`message-box`
: Использовать шрифт для диалоговых окон

`small-caption`
: Использовать шрифт для подписей к небольшим элементам управления

`status-bar`
: Использовать шрифт для строки состояния окон

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-font)

## Пример

Напишем текст в элементе `<canvas>` используя шрифт `Arial` размером `30px`:

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
ctx.font="30px Arial";
ctx.fillText("Hello World",10,50);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
ctx.font = '30px Arial';
ctx.fillText('Hello World', 10, 50);
```

## Ссылки

- Свойство [`font`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/font) <sup><small>MDN (рус.)</small></sup>
