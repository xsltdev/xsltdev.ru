---
description: Псевдокласс :blank представляет пустые элементы, иными словами такие, которые не содержат дочерних элементов или текста
---

# :blank

Псевдокласс **`:blank`** представляет пустые элементы, иными словами такие, которые не содержат дочерних элементов или текста. По своему действию похож на [`:empty`](empty.md), но `:blank`, в отличие от него, считает пустыми элементы, содержащие пробел или перенос строк.

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - [:any-link](any-link.md)
    - **:blank**
    - [:checked](checked.md)
    - [:current()](current.md)
    - [:default](default.md)
    - [:defined](defined.md)
    - [:dir()](dir.md)
    - [:disabled](disabled.md)
    - [:empty](empty.md)
    - [:enabled](enabled.md)
    - [:first](first.md)
    - [:first-child](first-child.md)
    - [:first-of-type](first-of-type.md)
    - [:focus](focus.md)
    - [:focus-visible](focus-visible.md)
    - [:focus-within](focus-within.md)
    - [:fullscreen](fullscreen.md)
    - [:future](future.md)
    - [:has()](has.md)
    - :host
    - :host()
    - :host-context()
    - [:hover](hover.md)
    - [:indeterminate](indeterminate.md)
    - [:in-range](in-range.md)
    - [:invalid](invalid.md)
    - [:is()](is.md)
    - [:lang()](lang.md)
    - [:last-child](last-child.md)
    - [:last-of-type](last-of-type.md)
    - [:left](left-pseudo-class.md)
    - [:link](link.md)
    - :local-link
    - [:not()](not.md)
    - [:nth-child()](nth-child.md)
    - :nth-col()
    - [:nth-last-child()](nth-last-child.md)
    - :nth-last-col()
    - [:nth-last-of-type()](nth-last-of-type.md)
    - [:nth-of-type()](nth-of-type.md)
    - [:only-child](only-child.md)
    - [:only-of-type](only-of-type.md)
    - [:optional](optional.md)
    - [:out-of-range](out-of-range.md)
    - [:past](past.md)
    - [:placeholder-shown](placeholder-shown.md)
    - [:read-only](read-only.md)
    - [:read-write](read-write.md)
    - [:required](required.md)
    - :right
    - [:root](root.md)
    - [:scope](scope.md)
    - [:target](target.md)
    - :target-within
    - :user-invalid
    - [:valid](valid.md)
    - [:visited](visited.md)
    - [:where()](where.md)

    </div>

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

- Псевдо-класс [:blank](https://developer.mozilla.org/en-US/docs/Web/CSS/:blank) <sup><small>MDN (рус.)</small></sup>
