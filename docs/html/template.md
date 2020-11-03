---
description: Тег template (от англ. template — шаблон) представляет собой механизм для хранения содержимого на стороне клиента, которое не отображается в процессе загрузки страницы, но впоследствии может быть заполнено с помощью JavaScript
---

# &lt;template&gt;

Тег **`<template>`** _(от англ. **template** — шаблон)_ представляет собой механизм для хранения содержимого на стороне клиента, которое не отображается в процессе загрузки страницы, но впоследствии может быть заполнено с помощью JavaScript.

Содержимое `<template>` — это шаблон для фрагмента HTML, который может быть клонирован и вставлен в документ через скрипты. Обычно применяется для элементов с повторяющейся структурой, вроде списков, таблиц, списков [`<select>`](select.md) и др.

??? info "Веб-компоненты"

    <div class="col4" markdown="1">

    - [slot](slot.md)
    - **template**

    </div>

## Поддержка браузерами

<p class="ciu_embed" data-feature="template" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=template">Can I Use template?</a> Data on support for the template feature across the major browsers from caniuse.com.
</p>

## Синтаксис

Внутри `<template>` располагаются пустые элементы, образующие требуемый шаблон. Повторение этих элементов и их заполнение содержимым берут на себя скрипты.

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage//scripting-1.html#the-template-element)
- [HTML 5](http://www.w3.org/TR/html5//scripting-1.html#the-template-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>template</title>
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      td,
      th {
        padding: 4px;
        border: 1px solid #333;
      }
    </style>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>Твёрдость по Моосу</th>
          <th>Эталонный минерал</th>
          <th>Обрабатываемость</th>
        </tr>
      </thead>
      <tbody>
        <template id="row">
          <tr>
            <td></td>
            <td></td>
            <td></td></tr
        ></template>
      </tbody>
    </table>
    <script>
      var data = [
        {
          hardness: 1,
          mineral: 'Тальк',
          workability: 'Царапается ногтём',
        },
        {
          hardness: 2,
          mineral: 'Гипс',
          workability: 'Царапается ногтём',
        },
        {
          hardness: 3,
          mineral: 'Кальцит',
          workability: 'Царапается медью',
        },
        {
          hardness: 4,
          mineral: 'Флюорит',
          workability:
            'Легко царапается ножом, оконным стеклом',
        },
        {
          hardness: 5,
          mineral: 'Апатит',
          workability:
            'С усилием царапается ножом, оконным стеклом',
        },
        {
          hardness: 6,
          mineral: 'Ортоклаз',
          workability:
            'Царапает стекло. Обрабатывается напильником',
        },
        {
          hardness: 7,
          mineral: 'Кварц',
          workability:
            'Поддаётся обработке алмазом, царапает стекло',
        },
        {
          hardness: 8,
          mineral: 'Топаз',
          workability:
            'Поддаётся обработке алмазом, царапает стекло',
        },
        {
          hardness: 9,
          mineral: 'Корунд',
          workability:
            'Поддаётся обработке алмазом, царапает стекло',
        },
        {
          hardness: 10,
          mineral: 'Алмаз',
          workability: 'Царапает стекло',
        },
      ]
      var template = document.querySelector('#row')
      for (var i = 0; i < data.length; i++) {
        var mohs = data[i]
        var clone = template.content.cloneNode(true)
        var cells = clone.querySelectorAll('td')
        cells[0].textContent = mohs.hardness
        cells[1].textContent = mohs.mineral
        cells[2].textContent = mohs.workability
        template.parentNode.appendChild(clone)
      }
    </script>
  </body>
</html>
```

## Ссылки

- Тег [`<template>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/template) <sup><small>MDN (рус.)</small></sup>
