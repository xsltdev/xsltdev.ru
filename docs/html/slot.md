---
description: Элемент slot является частью набора технологии Web Components, является заполнителем внутри веб компонента, который можно заполнить собственной разметкой, которая позволяет создавать отдельные деревья DOM и представлять их вместе
---

# &lt;slot&gt;

Элемент **`<slot>`** является частью набора технологии Web Components, является заполнителем внутри веб компонента, который можно заполнить собственной разметкой, которая позволяет создавать отдельные деревья DOM и представлять их вместе.

## Синтаксис

```html
<slot name="element-name">...</slot>
```

## Атрибуты

`name`
: Название слота

Именованый слот это элемент `<slot>` с атрибутом `name`.

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element)
- [DOM](https://dom.spec.whatwg.org/#shadow-tree-slots)

## Описание и примеры

```html
<template id="element-details-template">
  <style>
    details {
      font-family: 'Open Sans Light', Helvetica, Arial, sans-serif;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <code class="name"
        >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code
      >
      <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

## Ссылки

- [`<slot>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/slot) на MDN
