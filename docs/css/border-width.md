---
description: Свойство border-width задаёт толщину границы одновременно на всех сторонах элемента или индивидуально для каждой стороны
---

# border-width

Свойство **`border-width`** задаёт толщину границы одновременно на всех сторонах элемента или индивидуально для каждой стороны.

Способ изменения толщины зависит от числа значений.

## Синтаксис

```css
/* Keyword values */
border-width: thin;
border-width: medium;
border-width: thick;

/* <length> values */
border-width: 4px;
border-width: 1.2rem;

/* vertical | horizontal */
border-width: 2px 1.5em;

/* top | horizontal | bottom */
border-width: 1px 2em 1.5cm;

/* top | right | bottom | left */
border-width: 1px 2em 0 4rem;

/* Global keywords */
border-width: inherit;
border-width: initial;
border-width: unset;
```

## Значения

Три переменные — `thin` (2 пикселя), `medium` (4 пикселя) и `thick` (6 пикселей) задают толщину границы. Для более точного значения толщину можно указывать в пикселях или других единицах.

Разрешается использовать одно, два, три или четыре значения, разделяя их между собой пробелом. Эффект зависит от количества и приведён в табл. 1.

<table>
<caption> Табл. 1. Зависимость результата от числа значений</caption>
<thead>
<tr><th>Число значений</th><th>Результат</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Толщина границы будет установлена для всех сторон элемента.</td></tr>
<tr><td>2</td><td>Первое значение устанавливает толщину верхней и нижней границы, второе — левой и правой.</td></tr>
<tr><td>3</td><td>Первое значение задаёт толщину верхней границы, второе — одновременно левой и правой границы, а третье — нижней границы.</td></tr>
<tr><td>4</td><td>Поочерёдно устанавливается толщину верхней, правой, нижней и левой границы.</td></tr>
</tbody>
</table>

Значение по-умолчанию:

```css
border-width: medium;
```

Применяется ко всем элементам

## Спецификации

- [CSS Backgrounds and Borders Module Level 3](http://dev.w3.org/csswg/css3-background/#the-border-width)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/box.html#border-width-properties)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#border-width)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>border-width</title>
    <style>
      p {
        border-style: double; /* Стиль рамки вокруг параграфа */
        border-width: 3px 7px 7px 4px; /* Толщина границы */
        padding: 7px; /* Поля вокруг текста */
      }
    </style>
  </head>
  <body>
    <p>
      Кластерное вибрато представляет собой хроматический алеаторически
      выстроенный бесконечный канон с полизеркальной векторно-голосовой
      структурой.
    </p>
  </body>
</html>
```
