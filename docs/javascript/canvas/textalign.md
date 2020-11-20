---
description: Свойство textAlign устанавливает/возвращает текущее выравнивание относительно опорной точки для текстового содержимого
---

# textAlign

Свойство **`textAlign`** устанавливает/возвращает текущее выравнивание относительно опорной точки для текстового содержимого.

Обычно, вывод текста НАЧИНАЕТСЯ в заданной позиции. Тем не менее, если задать `textAlign="right"` и вывести текст в позиции `150`, то это означает, что текст ЗАКОНЧИТСЯ в позиции `150`.

Примечание: Чтобы позиционировать текст на холсте и в действительности его отобразить, используется метод [`fillText()`](filltext.md) или [`strokeText()`](stroketext.md).

## Синтаксис

```
context.textAlign="center | end | left | right | start";
```

## Значения

Значение по умолчанию: `start`

`start`
: Значение по умолчанию. Вывод текста начинается в заданной позиции

`end`
: Текст заканчивается в заданной позиции

`center`
: В заданной позиции будет центр текста

`left`
: Текст начинается в заданной позиции

`right`
: Текст заканчивается в заданной позиции

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-textalign)

## Пример

Создадим красную линию в позиции 150. Позиция 150 будет опорной точкой для всех текстовых строк в данном примере. Посмотрим эффект от каждого значения свойства textAlign:

<canvas id="myCanvas" width="300" height="200" style="border:1px solid #d3d3d3;background:#ffffff;">
Ваш браузер не поддерживает HTML5 тег canvas.
</canvas>
<script>
var c=document.getElementById("myCanvas");
var canvOK=1;
try {c.getContext("2d");}
catch (er) {canvOK=0;}
if (canvOK==1){
var ctx=c.getContext("2d");
ctx.strokeStyle="red";
ctx.moveTo(150,20);
ctx.lineTo(150,170);
ctx.stroke();
ctx.font="15px Arial";
ctx.textAlign="start";  
ctx.fillText("textAlign=start",150,60);  
ctx.textAlign="end";  
ctx.fillText("textAlign=end",150,80);  
ctx.textAlign="left";  
ctx.fillText("textAlign=left",150,100);
ctx.textAlign="center";  
ctx.fillText("textAlign=center",150,120);  
ctx.textAlign="right";  
ctx.fillText("textAlign=right",150,140);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

// Создадим вертикальную красную линию
ctx.strokeStyle = 'red'
ctx.moveTo(150, 20)
ctx.lineTo(150, 170)
ctx.stroke()

ctx.font = '15px Arial'

// Покажем различные значения textAlign
ctx.textAlign = 'start'
ctx.fillText('textAlign=start', 150, 60)
ctx.textAlign = 'end'
ctx.fillText('textAlign=end', 150, 80)
ctx.textAlign = 'left'
ctx.fillText('textAlign=left', 150, 100)
ctx.textAlign = 'center'
ctx.fillText('textAlign=center', 150, 120)
ctx.textAlign = 'right'
ctx.fillText('textAlign=right', 150, 140)
```

## Ссылки

- Свойство [`textAlign`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/textAlign) <sup><small>MDN (рус.)</small></sup>
