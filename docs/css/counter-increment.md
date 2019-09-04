---
description: Свойство counter-increment предназначено для увеличения значения счётчика приращений, который задается свойством counter-reset
---

# counter-increment

Свойство **`counter-increment`** предназначено для увеличения значения счётчика приращений, который задается свойством [`counter-reset`](counter-reset.md).

Такой счётчик подсчитывает количество отображений элементов на странице и может выводиться с помощью свойства [`content`](content.md) и псевдоэлементов `::after` и `::before`. Это позволяет создавать списки (в том числе многоуровневые), в которых нумерация и вид задаются через стили.

## Синтаксис

```css
/* Increment "my-counter" by 1 */
counter-increment: my-counter;

/* Decrement "my-counter" by 1 */
counter-increment: my-counter -1;

/* Increment "counter1" by 1, and decrement "counter2" by 4 */
counter-increment: counter1 counter2 -4;

/* Do not increment/decrement anything: used to override less specific rules */
counter-increment: none;

/* Global values */
counter-increment: inherit;
counter-increment: initial;
counter-increment: unset;
```

## Значения

`none`
: Запрещает увеличение счётчика для текущего селектора.

`<переменная>`
: Задаёт одну или несколько переменных, для которых требуется изменить значение счётчика. Переменные разделяются между собой пробелом.

`<число>`
: Определяет значение приращения счётчика. По умолчанию оно равно 1. Допускается использовать только положительные целые числа, отрицательные целые числа и ноль.

Возможные сочетания значений свойств [`counter-reset`](counter-reset.md) и `counter-increment` показаны в табл. 1.

<table>
<caption>Табл. 1. Изменение нумерации списка</caption>
<thead>
<tr><th>Код</th><th>Результат</th></tr>
</thead>
<tbody>
<tr><td>LI { list-style-type: none; }<br /> OL { counter-reset: <span class="select">list -1</span>; }<br /> LI:before {<br />counter-increment: <span class="select">list</span>;<br />content: counter(list) ". ";<br />}<br /></td><td><p>Список начинается с нуля.</p><p>0, 1, 2</p></td></tr>
<tr><td>LI { list-style-type: none; }<br /> OL { counter-reset: <span class="select">list</span>; }<br /> LI:before {<br />counter-increment: <span class="select">list 2</span>;<br />content: counter(list) ". ";<br />}</td><td><p>Выводятся все чётные числа.</p><p>2, 4, 6</p></td></tr>
<tr><td>LI { list-style-type: none; }<br /> OL { counter-reset: <span class="select">list -1</span>; }<br /> LI:before {<br />counter-increment: <span class="select">list list</span>;<br />content: counter(list) ". ";<br />}<br /></td><td><p>Выводятся все нечётные числа.</p><p>1, 3, 5</p></td></tr>
<tr><td>LI { list-style-type: none; }<br /> OL { counter-reset: <span class="select">list 9</span>; }<br /> LI:before {<br />counter-increment: <span class="select">list</span>;<br />content: counter(list) ". ";<br />}<br /></td><td><p>Список начинается с 10.</p><p>10, 11, 12</p></td></tr>
</tbody>
</table>

### Примечание

Для элементов, у которых установлено `display: none`, значение счётчика не меняется.

Значение по-умолчанию:

```css
counter-increment: none;
```

Применяется ко всем элементам

## Спецификации

- [CSS Lists and Counters Module Level 3](http://dev.w3.org/csswg/css3-lists/#counter-increment)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/generate.html#propdef-counter-increment)

## Поддержка браузерами

<p class="ciu_embed" data-feature="css-counters" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=css-counters">Can I Use css-counters?</a> Data on support for the css-counters feature across the major browsers from caniuse.com.
</p>

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>counter-increment</title>
    <style>
      body {
        counter-reset: heading; /* Инициируем счетчик */
      }
      h2:before {
        counter-increment: heading; /* Указываем идентификатор счетчика */
        content: 'Глава ' counter(heading) '. '; /* Выводим текст перед содержимым тега <h2> */
      }
    </style>
  </head>
  <body>
    <h2>Теория ловли льва в пустыне</h2>
    <h2>Методы инверсной кинематики</h2>
    <h2>Ловля льва численными методами</h2>
  </body>
</html>
```
