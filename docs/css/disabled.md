---
description: Псевдо-класс :disabled находит любой отключенный элемент
---

# :disabled

Псевдо-класс **`:disabled`** находит любой отключенный элемент.

Элемент отключен, если не может быть активирован (например, его нельзя выбрать, нажать на него или ввести текст) или получить фокус. У элемента также есть включенное состояние, когда его можно активировать или сфокусировать.

## Синтаксис

```css
/* Selects any disabled <input> */
input:disabled {
  background: #ccc;
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/#selector-disabled)
- [HTML5](http://www.w3.org/TR/html5/#selector-disabled)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#enableddisabled)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-classes)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#enableddisabled)

## Описание и примеры

```html tab="HTML"
<form action="#">
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Address" />
    <input type="text" placeholder="Zip Code" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>Billing address</legend>
    <label for="billing_is_shipping">Same as shipping address:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="Name" disabled />
    <input type="text" placeholder="Address" disabled />
    <input type="text" placeholder="Zip Code" disabled />
  </fieldset>
</form>
```

```css tab="CSS"
input[type='text']:disabled {
  background: #ccc;
}
```

```js tab="JS"
// Wait for the page to finish loading
document.addEventListener(
  'DOMContentLoaded',
  function() {
    // Attach `change` event listener to checkbox
    document.getElementById('billing-checkbox').onchange = toggleBilling
  },
  false
)

function toggleBilling() {
  // Select the billing text fields
  var billingItems = document.querySelectorAll('#billing input[type="text"]')

  // Toggle the billing text fields
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled
  }
}
```

Результат

![Результат работы псевдокласса :disabled](disabled.png)
