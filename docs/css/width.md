# width

Свойство **`width`** устанавливает ширину блочных или заменяемых элементов (к ним, например, относится [`<img>`](../html/img.md)).

Ширина не включает толщину границ вокруг элемента, значение отступов и полей.

Браузеры неодинаково работают с шириной, результат отображения зависит от используемого `<!DOCTYPE>`.

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

- `auto` -- Устанавливает ширину исходя из типа и содержимого элемента.

Значение по-умолчанию:

```css
width: auto;
```

Применяется к: К блочным элементам, ячейкам таблицы, заменяемым элементам

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
      <p class="layer2">Lorem ipsum dolor sit amet,consectetuer adipiscing elit,seddiem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.</p>
    </div>
  </body>
</html>
```
