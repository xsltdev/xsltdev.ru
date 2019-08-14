# border-style

Свойство **`border-style`** устанавливает стиль границы вокруг элемента.

Допустимо задавать индивидуальные стили для разных сторон элемента.

## Синтаксис

```css
/* Keyword values */
border-top-style: none;
border-top-style: hidden;
border-top-style: dotted;
border-top-style: dashed;
border-top-style: solid;
border-top-style: double;
border-top-style: groove;
border-top-style: ridge;
border-top-style: inset;
border-top-style: outset;

/* vertical | horizontal */
border-style: dotted solid;

/* top | horizontal | bottom */
border-style: hidden double dashed;

/* top | right | bottom | left */
border-style: none solid dotted dashed;

/* Global values */
border-style: inherit;
border-style: initial;
border-style: unset;
```

## Значения

Для управления видом границы предоставляется несколько значений свойства `border-style`. Вид зависит от используемого браузера и заданной толщины границы. В табл. 1 приведены названия стилей и получаемая рамка при разных значениях толщины — 1, 3, 5 и 7 пикселей.

<table>
<caption> Табл. 1. Вид рамки в зависимости от стиля и толщины границы элемента</caption>
<thead>
<tr><th>1 пиксель</th><th>3 пикселя</th><th>5 пикселей</th><th>7 пикселей</th></tr>
</thead>
<tbody>
<tr><td><p style="border: 1px #fc0 dotted; margin: 0">dotted</p></td><td><p style="border: 3px #fc0 dotted; margin: 0">dotted</p></td><td><p style="border: 5px #fc0 dotted; margin: 0">dotted</p></td><td><p style="border: 7px #fc0 dotted; margin: 0">dotted</p></td></tr>
<tr><td><p style="border: 1px #fc0 dashed; margin: 0">dashed</p></td><td><p style="border: 3px #fc0 dashed; margin: 0">dashed</p></td><td><p style="border: 5px #fc0 dashed; margin: 0">dashed</p></td><td><p style="border: 7px #fc0 dashed; margin: 0">dashed</p></td></tr>
<tr><td><p style="border: 1px #fc0 solid; margin: 0">solid</p></td><td><p style="border: 3px #fc0 solid; margin: 0">solid</p></td><td><p style="border: 5px #fc0 solid; margin: 0">solid</p></td><td><p style="border: 7px #fc0 solid; margin: 0">solid</p></td></tr>
<tr><td><p style="border: 1px #fc0 double; margin: 0">double</p></td><td><p style="border: 3px #fc0 double; margin: 0">double</p></td><td><p style="border: 5px #fc0 double; margin: 0">double</p></td><td><p style="border: 7px #fc0 double; margin: 0">double</p></td></tr>
<tr><td><p style="border: 1px #fc0 groove; margin: 0">groove</p></td><td><p style="border: 3px #fc0 groove; margin: 0">groove</p></td><td><p style="border: 5px #fc0 groove; margin: 0">groove</p></td><td><p style="border: 7px #fc0 groove; margin: 0">groove</p></td></tr>
<tr><td><p style="border: 1px #fc0 ridge; margin: 0">ridge</p></td><td><p style="border: 3px #fc0 ridge; margin: 0">ridge</p></td><td><p style="border: 5px #fc0 ridge; margin: 0">ridge</p></td><td><p style="border: 7px #fc0 ridge; margin: 0">ridge</p></td></tr>
<tr><td><p style="border: 1px #fc0 inset; margin: 0">inset</p></td><td><p style="border: 3px #fc0 inset; margin: 0">inset</p></td><td><p style="border: 5px #fc0 inset; margin: 0">inset</p></td><td><p style="border: 7px #fc0 inset; margin: 0">inset</p></td></tr>
<tr><td><p style="border: 1px #fc0 outset; margin: 0">outset</p></td><td><p style="border: 3px #fc0 outset; margin: 0">outset</p></td><td><p style="border: 5px #fc0 outset; margin: 0">outset</p></td><td><p style="border: 7px #fc0 outset; margin: 0">outset</p></td></tr>
</tbody>
</table>

Кроме перечисленных в таблице значений используются следующие ключевые слова.

- `none` -- Не отображает границу и её толщина [`border-width`](border-width.md) задаётся нулевой.
- `hidden` -- Имеет тот же эффект, что и `none` за исключением применения `border-style` к ячейкам таблицы, у которой значение свойства [`border-collapse`](border-collapse.md) установлено как `collapse`. В этом случае вокруг ячейки граница не будет отображаться вообще.

Разрешается использовать одно, два, три или четыре значения, разделяя их между собой пробелом. Эффект зависит от количества и указан в табл. 2.

<table>
<caption> Табл. 2. Зависимость результата использования от числа значений</caption>
<thead>
<tr><th>Число значений</th><th>Результат</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Стиль границы будет задан для всех сторон элемента.</td></tr>
<tr><td>2</td><td>Первое значение устанавливает стиль верхней и нижней границы, второе — левой и правой.</td></tr>
<tr><td>3</td><td>Первое значение задаёт стиль верхней границы, второе — одновременно левой и правой границы, а третье — нижней границы.</td></tr>
<tr><td>4</td><td>Поочередно устанавливается стиль верхней, правой, нижней и левой границы.</td></tr>
</tbody>
</table>

Значение по-умолчанию:

```css
border-top-style: none;
```

Применяется к: Ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-style)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#propdef-border-style)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#border-style)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-style</title>
    <style>
      p {
        border-style: double; /* Стиль линии вокруг абзаца */
        padding: 5px; /* Поля вокруг текста */
      }
    </style>
  </head>
  <body>
    <p>Развивая эту тему, крещендирующее хождение просветляет миксолидийский райдер.</p>
  </body>
</html>
```
