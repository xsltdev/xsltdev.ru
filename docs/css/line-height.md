---
description: Свойство line-height для блочных элементов определяет минимальную высоту строки текста
---

# line-height

Свойство **`line-height`** для блочных элементов определяет минимальную высоту строки текста.

Для внедряемых строчных элементов (вроде [`<img>`](../html/img.md)) свойство `line-height` не оказывает никакого эффекта.

Для остальных строчных элементов `line-height` задаёт высоту, которая используется для расчёта высоты строки блока.

## Синтаксис

```css
/* Keyword value */
line-height: normal;

/* Unitless values: use this number multiplied
	by the element's font size */
line-height: 3.5;

/* <length> values */
line-height: 3em;

/* <percentage> values */
line-height: 34%;

/* Global values */
line-height: inherit;
line-height: initial;
line-height: unset;
```

## Значения

Любое число больше нуля воспринимается как множитель от размера шрифта текущего текста. Например, значение 1.5 устанавливает полуторный межстрочный интервал. В качестве значений принимаются также любые единицы длины, принятые в CSS — пиксели (px), дюймы (in), пункты (pt) и др. Разрешается использовать процентную запись, в этом случае за 100% берётся высота шрифта.

`normal`
: Расстояние между строк вычисляется автоматически.

Значение по-умолчанию:

```css
line-height: normal;
```

Применяется ко всем элементам

## Спецификации

- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visudet.html#propdef-line-height)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#line-height)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>line-height</title>
    <style>
      h1 {
        line-height: 70%;
      }
      p {
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <h1>
      Нормальный постулат: алгебра или наибольшее и наименьшее значения функции?
    </h1>
    <p>
      Эпсилон окрестность, исключая очевидный случай, поддерживает комплексный
      интеграл по бесконечной области.
    </p>
  </body>
</html>
```
