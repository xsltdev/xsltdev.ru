---
description: Псевдо-класс defined находит любой элемент, который был определён, включая любой стандартный встроенные в браузер элемент и пользовательские элементы
---

# :defined

Псевдо-класс **`:defined`** находит любой элемент, который был определён, включая любой стандартный встроенные в браузер элемент и пользовательские элементы (то есть определённые с помощью метода `CustomElementRegistry.define()`).

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - [:any-link](any-link.md)
    - [:blank](blank.md)
    - [:checked](checked.md)
    - [:current()](current.md)
    - [:default](default.md)
    - **:defined**
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

      let shadowRoot = this.attachShadow({
        mode: 'open',
      }).appendChild(divElem)
    }
  }
)
```

Затем мы используем короткий HTML код с элементом `<simple-custom>` и стандартным элементом `<p>`:

```html
<simple-custom
  text="Текст пользовательского элемента"
></simple-custom>

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

- Псевдо-класс [`:defined`](https://developer.mozilla.org/ru/docs/Web/CSS/:defined) <sup><small>MDN (рус.)</small></sup>
