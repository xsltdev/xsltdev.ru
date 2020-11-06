---
description: Свойство width устанавливает ширину блочных или заменяемых элементов (к ним, например, относится img)
---

# width

Свойство **`width`** устанавливает ширину блочных или заменяемых элементов (к ним, например, относится [`<img>`](../html/img.md)).

Ширина не включает толщину границ вокруг элемента, значение отступов и полей.

Браузеры неодинаково работают с шириной, результат отображения зависит от используемого `<!DOCTYPE>`.

??? info "Блоки"

    <div class="col3" markdown="1">

    - [height](height.md)
    - **width**
    - [max-height](max-height.md)
    - [max-width](max-width.md)
    - [min-height](min-height.md)
    - [min-width](min-width.md)

    </div>

    <div class="col3" markdown="1">

    - [margin](margin.md)
    - [margin-bottom](margin-bottom.md)
    - [margin-left](margin-left.md)
    - [margin-right](margin-right.md)
    - [margin-top](margin-top.md)
    - [margin-trim](margin-trim.md)

    </div>

    <div class="col3" markdown="1">

    - [padding](padding.md)
    - [padding-bottom](padding-bottom.md)
    - [padding-left](padding-left.md)
    - [padding-right](padding-right.md)
    - [padding-top](padding-top.md)

    </div>

    <div class="col3" markdown="1">

    - [overflow](overflow.md)
    - [overflow-x](overflow-x.md)
    - [overflow-y](overflow-y.md)
    - [visibility](visibility.md)

    </div>

## Синтаксис

```css
/* <length> values */
width: 300px;
width: 25em;

/* <percentage> value */
width: 75%;

/* Keyword values */
width: 25em border-box;
width: 75% content-box;
width: max-content;
width: min-content;
width: available;
width: fit-content;
width: auto;

/* Global values */
width: inherit;
width: initial;
width: unset;
```

## Значения

В качестве значений принимаются любые единицы длины, принятые в CSS — например, пикселы (px), дюймы (in), пункты (pt) и др. При использовании процентной записи ширина элемента вычисляется в зависимости от ширины родительского элемента. Если родитель явно не указан, то в его качестве выступает окно браузера.

`auto`
: Устанавливает ширину исходя из типа и содержимого элемента.

Значение по-умолчанию: `auto`

Применяется к блочным элементам, ячейкам таблицы, заменяемым элементам

## Спецификации

- [CSS Basic Box Model](https://drafts.csswg.org/css-box-3/#width-and-height)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visudet.html#the-width-property)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#width)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>width</title>
    <style>
      .layer1 {
        width: 300px; /* Ширина блока */
        background: #fc0; /* Цвет фона */
        padding: 7px; /* Поля вокруг текста */
        border: 1px solid #ccc; /* Параметры рамки */
      }
      .layer2 {
        width: 400px; /* Ширина текстового блока */
      }
    </style>
  </head>
  <body>
    <div class="layer1">
      <p class="layer2">
        Lorem ipsum dolor sit amet,consectetuer adipiscing
        elit,seddiem nonummy nibh euismod tincidunt ut
        lacreet dolore magna aliguam erat volutpat.
      </p>
    </div>
  </body>
</html>
```
