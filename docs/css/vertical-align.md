---
description: Свойство vertical-align выравнивает элемент по вертикали относительно своего родителя, окружающего текста или ячейки таблицы
---

# vertical-align

Свойство **`vertical-align`** выравнивает элемент по вертикали относительно своего родителя, окружающего текста или ячейки таблицы.

## Синтаксис

```css
/* keyword values */
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

/* <length> values */
vertical-align: 10em;
vertical-align: 4px;

/* <percentage> values */
vertical-align: 20%;

/* Global values */
vertical-align: inherit;
vertical-align: initial;
vertical-align: unset;
```

## Значения

`baseline`
: Выравнивает базовую линию блока по базовой линии родителя. Если у блока нет базовой линии, то за неё принимается нижняя граница.

`bottom`
: Выравнивает низ блока по нижней части строки.

`middle`
: Выравнивает вертикальную среднюю точку блока по базовой линии родительского блока плюс половина высоты буквы «x».

`sub`
: Опускает базовую линию блока вниз для создания нижнего индекса. Не оказывает влияние на размер текста.

`super`
: Поднимает базовую линию блока вверх для создания верхнего индекса. Не оказывает влияние на размер текста.

`text-bottom`
: Нижняя граница элемента выравнивается по нижнему краю содержимого родителя.

`text-top`
: Верхняя граница элемента выравнивается по верхнему краю содержимого родителя.

`top`
: Выравнивает верх блока по верхней части строки.

В качестве значения также можно использовать проценты, пиксели или другие доступные единицы. Положительное число смещает элемент вверх относительно базовой линии, в то время как отрицательное число опускает его вниз. При использовании процентов, отсчёт ведётся от значения свойства [`line-height`](line-height.md), при этом 0% аналогично значению `baseline`.

Для выравнивания по вертикали в ячейках таблицы применяются следующие значения:

`baseline`
: Выравнивает базовую линию ячейки с базовой линией первой текстовой строки или другого вложенного элемента.

`bottom`
: Выравнивает по нижнему краю ячейки.

`middle`
: Выравнивает по середине ячейки.

`top`
: Выравнивает содержимое ячейки по её верхнему краю.

Значение по-умолчанию: `baseline`

Применяется к строчным элементам или ячейкам таблицы

## Спецификации

- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#vertical-align)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>vertical-align</title>
    <style>
      .tex {
        font-size: 2rem;
      }
      .tex sub {
        vertical-align: sub;
        font-size: 1.8rem;
      }
      .tex sup {
        vertical-align: 5px;
        font-size: 1.6rem;
      }
    </style>
  </head>
  <body>
    <div class="tex">
      T<sub>E</sub>X и L<sup>A</sup>T<sub>E</sub>X
    </div>
  </body>
</html>
```
