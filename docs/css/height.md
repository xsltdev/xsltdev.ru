---
description: Свойство height устанавливает высоту блочных или заменяемых элементов (к ним, например, относится img)
---

# height

Свойство **`height`** устанавливает высоту блочных или заменяемых элементов (к ним, например, относится [`<img>`](/html/img/)). Высота не включает толщину границ вокруг элемента, значение отступов и полей.

Если содержимое блока превышает указанную высоту, то высота элемента останется неизменной, а содержимое будет отображаться поверх него. Из-за этой особенности может получиться наложение содержимого элементов друг на друга, когда элементы в коде HTML идут последовательно. Чтобы этого не произошло, добавьте [`overflow`](overflow.md): `auto` к стилю элемента.

??? info "Блоки"

    <div class="col3" markdown="1">

    - **height**
    - [width](width.md)
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
/* Keyword value */
height: auto;

/* <length> values */
height: 120px;
height: 10em;

/* <percentage> value */
height: 75%;

/* Global values */
height: inherit;
height: initial;
height: unset;
```

## Значения

В качестве значений принимаются любые единицы длины, принятые в CSS — например, пиксели (px), дюймы (in), пункты (pt) и др. При использовании процентной записи высота элемента вычисляется в зависимости от высоты родительского элемента. Если родитель явно не указан, то в его качестве выступает окно браузера. `auto` устанавливает высоту исходя из содержимого элемента.

Значение по-умолчанию:

```css
height: auto;
```

Применяется к: К блочным и заменяемым элементам

## Спецификации

- [CSS Basic Box Model](https://drafts.csswg.org/css-box-3/#width-and-height)
- [CSS Transitions](http://dev.w3.org/csswg/css-transitions/#animatable-css)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visudet.html#the-height-property)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#height)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>height</title>
    <style>
      .layer {
        height: 50px; /* Высота блока */
        overflow: scroll; /* Добавляем полосы прокрутки */
        background: #fc0; /* Цвет фона */
        padding: 7px; /* Поля вокруг текста */
        border: 1px solid #333; /* Параметры рамки */
      }
    </style>
  </head>
  <body>
    <div class="layer">
      Чернозём, в сочетании с традиционными агротехническими
      приемами, локально снижает фраджипэн. Суглинок
      перманентно растворяет биокосный краснозём в полном
      соответствии с законом Дарси.
    </div>
  </body>
</html>
```
