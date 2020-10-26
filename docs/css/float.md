---
description: Свойство float определяет, по какой стороне будет выравниваться элемент, при этом остальные элементы будут обтекать его с других сторон
---

# float

Свойство **`float`** определяет, по какой стороне будет выравниваться элемент, при этом остальные элементы будут обтекать его с других сторон.

Когда значение свойства `float` равно `none`, элемент выводится на странице как обычно, при этом допускается, что одна строка обтекающего текста может быть на той же линии, что и сам элемент.

## Синтаксис

```css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start; /* Только Firefox 55+ */
float: inline-end; /* Только Firefox 55+ */

/* Global values */
float: inherit;
float: initial;
float: unset;
```

## Значения

`left`
: Выравнивает элемент по левому краю, а все остальные элементы, вроде текста, обтекают его по правой стороне.

`right`
: Выравнивает элемент по правому краю, а все остальные элементы обтекают его по левой стороне.

`none`
: Обтекание элемента не задаётся.

Значение по-умолчанию:

```css
float: none;
```

Применяется к: Ко всем элементам (за исключением абсолютно позиционированных)

## Спецификации

- [CSS Logical Properties Level 1](https://drafts.csswg.org/css-logical-props/#float-clear)
- [CSS Basic Box Model](http://dev.w3.org/csswg/css3-box/#float)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visuren.html#float-position)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#float)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>float</title>
    <style>
      .pull-left {
        float: left; /* Обтекание блока по правому краю */
        padding-right: 10px;
      }
    </style>
  </head>
  <body>
    <div class="pull-left">
      <img src="image/figure.jpg" alt="" />
    </div>
    <p>
      Бихевиоризм, как бы это ни казалось парадоксальным,
      просветляет сублимированный стимул, так, например,
      Ричард Бендлер для построения эффективных состояний
      использовал изменение субмодальностей.
    </p>
  </body>
</html>
```
