---
description: Свойство border-color устанавливает цвет границы на разных сторонах элемента
---

# border-color

Свойство **`border-color`** устанавливает цвет границы на разных сторонах элемента.

Свойство позволяет задать цвет границы сразу для всех сторон элемента или только для указанных.

## Синтаксис

```css
/* border-color: color */ /* the color applies to all sides */
border-color: red;

/* border-color: top&bottom right&left */
border-color: red #f015ca;

/* border-color: top right&left bottom */
border-color: red yellow green;

/* border-color: top right bottom left */
border-color: red yellow green blue;

border-color: inherit;
```

## Значения

`<цвет>`
: Цвет

`transparent`
: Устанавливает прозрачный цвет.

Разрешается использовать одно, два, три или четыре значения, разделяя их между собой пробелом. Результат зависит от количества и указан в табл. 1.

<table>
<caption> Табл. 1. Изменение цвета в зависимости от числа значений</caption>
<thead>
<tr><th>Число значений</th><th>Результат</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Цвет границы будет установлен для всех сторон элемента.</td></tr>
<tr><td>2</td><td>Первое значение устанавливает цвет верхней и нижней границы, второе — левой и правой.</td></tr>
<tr><td>3</td><td>Первое значение задаёт цвет верхней границы, второе — одновременно левой и правой границы, а третье — нижней границы.</td></tr>
<tr><td>4</td><td>Поочередно устанавливается цвет верхней, правой, нижней и левой границы.</td></tr>
</tbody>
</table>

Значение по-умолчанию: Значение свойства [`color`](color.md)

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#border-color)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-color-properties)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#border-color)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-color</title>
    <style>
      h1 {
        border-color: red white; /* Цвет границы */
        border-style: solid; /* Стиль границы */
      }
      p {
        border-color: #008a77; /* Цвет границы */
        border-style: solid; /* Стиль границы */
        padding: 5px; /* Поля вокруг текста */
      }
    </style>
  </head>
  <body>
    <h1>Шоу-бизнес как внутридискретное арпеджио</h1>
    <p>
      Септаккорд, согласно традиционным представлениям, иллюстрирует
      однокомпонентный шоу-бизнес.
    </p>
  </body>
</html>
```
