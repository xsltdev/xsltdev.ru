---
description: Псевдокласс :blank представляет пустые элементы, иными словами такие, которые не содержат дочерних элементов или текста
---

# :blank

Псевдокласс **`:blank`** представляет пустые элементы, иными словами такие, которые не содержат дочерних элементов или текста. По своему действию похож на [`:empty`](empty.md), но `:blank`, в отличие от него, считает пустыми элементы, содержащие пробел или перенос строк.

## Синтаксис

```css
*:blank {
  property: value;
}
```

## Спецификация

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#blank-pseudo)

## Пример

```html
<!DOCTYPE html>
 <head>
  <meta charset="utf-8">
  <title>blank</title>
  <style>
   span:empty {
    background: red;
    padding: 3px;
    margin-left: 7px;
    display: inline-block;
   }
  </style>
 </head>
 <body>
  <p>Линеарная фактура, в том числе, иллюстрирует фузз, и здесь мы видим
  ту самую каноническую секвенцию с разнонаправленным шагом
  отдельных звеньев<span></span></p>
 </body>
</html>
```

## Ссылки

- [:blank](https://developer.mozilla.org/en-US/docs/Web/CSS/:blank) на MDN
