---
description: Универсальное свойство list-style позволяет одновременно задать стиль маркера, его положение, а также изображение, которое будет использоваться в качестве маркера списка
---

# list-style

Универсальное свойство **`list-style`** позволяет одновременно задать стиль маркера, его положение, а также изображение, которое будет использоваться в качестве маркера списка.

??? info "Списки, счетчики, генерируемый контент"

    <div class="col3" markdown="1">

    - [counter-increment](counter-increment.md)
    - [counter-reset](counter-reset.md)
    - [list-style-image](list-style-image.md)
    - [list-style-type](list-style-type.md)
    - [list-style-position](list-style-position.md)
    - **list-style**

    </div>

    <div class="col3" markdown="1">

    - [content](content.md)
    - [quotes](quotes.md)

    </div>

## Синтаксис

```css
/* type */
list-style: square;

/* image */
list-style: url('../img/shape.png');

/* position */
list-style: inside;

/* type | position */
list-style: georgian inside;

/* type | image | position */
list-style: lower-roman url('../img/shape.png') outside;

/* Keyword value */
list-style: none;

/* Global values */
list-style: inherit;
list-style: initial;
list-style: unset;
```

## Значения

Любые комбинации трёх значений определяющих стиль маркеров, они разделяются между собой пробелом. Комбинации значений должны следовать в указанном порядке: вначале идёт тип маркера, затем положение и картинка. Ни одно значение не является обязательным, поэтому неиспользуемые можно опустить.

Значение по-умолчанию: Нет

Применяется к элементам [`<dd>`](../html/dd.md), [`<dt>`](../html/dt.md), [`<li>`](../html/li.md), [`<ol>`](../html/ol.md) и [`<ul>`](../html/ul.md), а также ко всем элементам, у которых указано `display: list-item`

## Спецификации

- [CSS Lists and Counters Module Level 3](http://dev.w3.org/csswg/css3-lists/#list-style)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/generate.html#propdef-list-style)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>list-style</title>
    <style>
      ul {
        list-style: square outside; /* Квадратные маркеры */
        /* Маркеры размещаются за пределами текстового блока */
      }
    </style>
  </head>
  <body>
    <ul>
      <li>Многомерный полином</li>
      <li>Нормальный абсолютно сходящийся ряд</li>
      <li>Интеграл от функции</li>
      <li>Коллинеарный экстремум функции</li>
    </ul>
  </body>
</html>
```
