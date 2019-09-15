# list-style-type

Свойство **`list-style-type`** изменяет вид маркера для каждого элемента списка.

Это свойство используется только в случае, когда значение `list-style-image` установлено как none. Маркеры различаются для маркированного списка (элемент [`<ul>`](../html/ul.md)) и нумерованного (элемент [`<ol>`](../html/ol.md)).

## Синтаксис

```css
/* Partial list of types */
list-style-type: disc;
list-style-type: circle;
list-style-type: square;
list-style-type: decimal;
list-style-type: georgian;
list-style-type: cjk-ideographic;
list-style-type: kannada;

/* <string> value */
list-style-type: '-';

/* Identifier matching an @counter-style rule */
list-style-type: custom-counter-style;

/* Keyword value */
list-style-type: none;

/* Global values */
list-style-type: inherit;
list-style-type: initial;
list-style-type: unset;
```

## Значения

Значения зависят от того, к какому типу списка они применяются: маркированному или нумерованному.

### Маркированный список

`circle`
: Маркер в виде кружка.

`disc`
: Маркер в виде точки.

`square`
: Маркер в виде квадрата.

### Нумерованный список

- `armenian` — Традиционная армянская нумерация.
- `decimal` — Арабские числа (1, 2, 3, 4,...).
- `decimal-leading-zero` — Арабские числа с нулем впереди для цифр меньше десяти (01, 02, 03,...).
- `georgian` — Традиционная грузинская нумерация.
- `lower-alpha` — Строчные латинские буквы (a, b, c, d,...).
- `lower-greek` — Строчные греческие буквы (α, β, γ, δ,...).
- `lower-latin` — Это значение аналогично `lower-alpha`.
- `lower-roman` — Римские числа в нижнем регистре (i, ii, iii, iv, v,...).
- `upper-alpha` — Заглавные латинские буквы (A, B, C, D,...).
- `upper-latin` — Это значение аналогично `upper-alpha`.
- `upper-roman` — Римские числа в верхнем регистре (I, II, III, IV, V,...).
- `none` — Отменяет маркеры для списка.

Значение по-умолчанию:

```css
list-style-type: disc; /* для ul */
list-style-type: decimal; /* для ol */
```

Применяется к: К элементам [`<li>`](../html/li.md), [`<ol>`](../html/ol.md) и [`<ul>`](../html/ul.md), а также ко всем элементам, у которых указано `display: list-item`

## Спецификации

- [CSS Counter Styles Level 3](http://dev.w3.org/csswg/css-counter-styles-3/#extending-css2)
- [CSS Lists and Counters Module Level 3](http://dev.w3.org/csswg/css3-lists/#list-style-type)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/generate.html#propdef-list-style-type)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>list-style-type</title>
    <style>
      ol {
        list-style-type: upper-roman;
      }
    </style>
  </head>
  <body>
    <ol>
      <li>Gaius Octavius Thurinus</li>
      <li>Tiberius Claudius Nero</li>
      <li>Gaius Iulius Caesar Augustus Germanicus</li>
      <li>Tiberius Claudius Drusus</li>
      <li>Lucius Arruntius Camillus Scribonianus</li>
      <li>Nero Claudius Caesar Drusus Germanicus</li>
      <li>Lucius Clodius Macer</li>
    </ol>
  </body>
</html>
```
