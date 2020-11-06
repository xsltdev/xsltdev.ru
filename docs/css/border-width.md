---
description: Свойство border-width задаёт толщину границы одновременно на всех сторонах элемента или индивидуально для каждой стороны
---

# border-width

Свойство **`border-width`** задаёт толщину границы одновременно на всех сторонах элемента или индивидуально для каждой стороны.

Способ изменения толщины зависит от числа значений.

??? info "Фон"

    <div class="col3" markdown="1">

    - [border](border.md)
    - [border-bottom](border-bottom.md)
    - [border-bottom-color](border-bottom-color.md)
    - [border-bottom-left-radius](border-bottom-left-radius.md)
    - [border-bottom-right-radius](border-bottom-right-radius.md)
    - [border-bottom-style](border-bottom-style.md)
    - [border-bottom-width](border-bottom-width.md)
    - [border-collapse](border-collapse.md)
    - [border-color](border-color.md)
    - [border-image](border-image.md)
    - [border-image-outset](border-image-outset.md)
    - [border-image-repeat](border-image-repeat.md)
    - [border-image-slice](border-image-slice.md)
    - [border-image-source](border-image-source.md)
    - [border-image-width](border-image-width.md)
    - [border-left](border-left.md)
    - [border-left-color](border-left-color.md)
    - [border-left-style](border-left-style.md)
    - [border-left-width](border-left-width.md)
    - [border-radius](border-radius.md)
    - [border-right](border-right.md)
    - [border-right-color](border-right-color.md)
    - [border-right-style](border-right-style.md)
    - [border-right-width](border-right-width.md)
    - [border-style](border-style.md)
    - [border-top](border-top.md)
    - [border-top-color](border-top-color.md)
    - [border-top-left-radius](border-top-left-radius.md)
    - [border-top-right-radius](border-top-right-radius.md)
    - [border-top-style](border-top-style.md)
    - [border-top-width](border-top-width.md)
    - **border-width**
    - [box-shadow](box-shadow.md)

    </div>

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
      Кластерное вибрато представляет собой хроматический
      алеаторически выстроенный бесконечный канон с
      полизеркальной векторно-голосовой структурой.
    </p>
  </body>
</html>
```
