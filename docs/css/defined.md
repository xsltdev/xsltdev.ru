---
description: Псевдо-класс defined находит любой элемент, который был определён, включая любой стандартный встроенные в браузер элемент и пользовательские элементы
---

# :defined

Псевдо-класс **`:defined`** находит любой элемент, который был определён, включая любой стандартный встроенные в браузер элемент и пользовательские элементы (то есть определённые с помощью метода `CustomElementRegistry.define()`).

## Синтаксис

```css
/* Находит любой элемент, который был определён */
:defined {
  font-style: italic;
}

/* Выбирает все элементы simple-custom, если пользовательский элемент simple-custom был определён */
simple-custom:defined {
  display: block;
}
```

## Спецификация

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-defined)

## Пример

Этот пример включает скрипт, определяющий пользовательский элемент `<simple-custom>`:

```js
customElements.define(
  'simple-custom',
  class extends HTMLElement {
    constructor() {
      super()

      let divElem = document.createElement('div')
      divElem.textContent = this.getAttribute('text')

      let shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(divElem)
    }
  }
)
```

Затем мы используем короткий HTML код с элементом `<simple-custom>` и стандартным элементом `<p>`:

```html
<simple-custom text="Текст пользовательского элемента"></simple-custom>

<p>Пример текста стандартного параграфа</p>
```

Теперь немного CSS. Здесь мы определяем цвета фона для разных элементов и используем селектор `:defined`, чтобы поменять шрифт всех определённых элементов на курсив.

```css
/* Определение разных фонов для разных элементов */
p {
  background: yellow;
}

simple-custom {
  display: block;
  background: cyan;
}

/* И пользовательский, и встроенныйэлементы будет отображены курсивом */
:defined {
  font-style: italic;
}
```

Наконец, мы добавляем следующие два правила, чтобы спрятать наш пользовательский элемент, если он не был определён или показать в обратном случае:

```css
simple-custom:not(:defined) {
  opacity: 0;
}

simple-custom:defined {
  opacity: 0.75;
  text-decoration: underline;
}
```

Это полезно, если у вас есть сложный пользовательский элемент, который требует какое-то время для загрузки — возможно, вы захотите спрятать его до определения, чтобы на странице не появились искажения или не тилизованные элементы.

<!-- ## См. также

- [`:host`](:host.md)
- [`:host()`](<:host().md>)
- [`:host-context()`](<:host-context().md>) -->

## Ссылки

- [`:defined`](https://developer.mozilla.org/ru/docs/Web/CSS/:defined) на MDN
