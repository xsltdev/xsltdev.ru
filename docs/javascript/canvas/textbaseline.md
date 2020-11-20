---
description: Свойство textBaseline устанавливает/возвращает текущую базовую линию, используемую при выводе текста
---

# textBaseline

Свойство **`textBaseline`** устанавливает/возвращает текущую базовую линию, используемую при выводе текста.

Примечание: Свойство `textBaseline` в различных браузерах работает по-разному, особенно со значениями `hanging` и `ideographic`.

Следующий рисунок иллюстрирует различные базовые линии, поддерживаемые атрибутом `textBaseline`:

![Базовые линии свойства textBaseline](textbaseline.gif)

Примечание: Методы [`fillText()`](filltext.md) и [`strokeText()`](stroketext.md) будут использовать заданное значение `textBaseline` для позиционирования текста на холсте.

## Синтаксис

```
context.textBaseline="alphabetic | top | hanging | middle | ideographic | bottom";
```

## Значения

Значение по умолчанию: `alphabetic`

`alphabetic`
: Значение по умолчанию. Обычная алфавитная базовая линия

`top`
: Базовая линия по верху площадки em

`hanging`
: Выносная базовая линия

`middle`
: Базовая линия посередине площадки em

`ideographic`
: Идеографическая базовая линия

`bottom`
: Базовая линия по низу ограничивающего прямоугольника

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-textbaseline)

## Пример

Нарисуем красную линию в позиции `y=100`, затем выведем каждое слово в позиции `y=100`, используя разные значения `textBaseline`:

<canvas id="myCanvas" width="400" height="200" style="border:1px solid #d3d3d3;background:#ffffff;">
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
ctx.moveTo(5,100);
ctx.lineTo(395,100);
ctx.stroke();
ctx.font="20px Arial";
ctx.textBaseline="top";
ctx.fillText("Top",5,100);
ctx.textBaseline="bottom";
ctx.fillText("Bottom",50,100);
ctx.textBaseline="middle";
ctx.fillText("Middle",120,100);
ctx.textBaseline="alphabetic";
ctx.fillText("Alphabetic",190,100);
ctx.textBaseline="hanging";
ctx.fillText("Hanging",290,100);}
</script>

JavaScript:

```js
var c = document.getElementById('myCanvas')
var ctx = c.getContext('2d')

// Нарисуем красную линию в позиции y=100
ctx.strokeStyle = 'red'
ctx.moveTo(5, 100)
ctx.lineTo(395, 100)
ctx.stroke()

ctx.font = '20px Arial'

// Поместим каждое слово в позицию y=100 с разными значениями textBaseline
ctx.textBaseline = 'top'
ctx.fillText('Top', 5, 100)
ctx.textBaseline = 'bottom'
ctx.fillText('Bottom', 50, 100)
ctx.textBaseline = 'middle'
ctx.fillText('Middle', 120, 100)
ctx.textBaseline = 'alphabetic'
ctx.fillText('Alphabetic', 190, 100)
ctx.textBaseline = 'hanging'
ctx.fillText('Hanging', 290, 100)
```

## Ссылки

- Свойство [`textBaseline`](https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/textBaseline) <sup><small>MDN (рус.)</small></sup>
