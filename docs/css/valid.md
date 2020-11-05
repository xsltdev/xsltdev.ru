---
description: Псевдокласс valid применяется к полям формы, содержимое которых проходит проверку в браузере на соответствие указанному типу
---

# :valid

Псевдокласс **`:valid`** применяется к полям формы, содержимое которых проходит проверку в браузере на соответствие указанному типу.

Например, для `type="number"` вводится число, а не буквы, для `type="email"` корректный адрес электронной почты.

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - [:any-link](any-link.md)
    - [:blank](blank.md)
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
    - **:valid**
    - [:visited](visited.md)
    - [:where()](where.md)

    </div>

## Синтаксис

```css
:valid {
  /* ... */
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-valid)
- [HTML5](https://www.w3.org/TR/html50/#selector-valid)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#validity-pseudos)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-validity)

## Пример

Этот пример представляет собой простую форму, цвета элементов которой зелёные, когда данные корректные, и красные, когда нет.

=== "HTML"

    ```html
    <form>
      <label>Введите URL:</label>
      <input type="url" />
      <br />
      <br />
      <label>Введите адрес эл. почты:</label>
      <input type="email" required />
    </form>
    ```

=== "CSS"

    ```css
    input:invalid {
      background-color: #ffdddd;
    }

    form:invalid {
      border: 5px solid #ffdddd;
    }

    input:valid {
      background-color: #ddffdd;
    }

    form:valid {
      border: 5px solid #ddffdd;
    }

    input:required {
      border-color: #800000;
      border-width: 3px;
    }
    ```

=== "Результат"

    ![:valid](valid.png)

## См. также

- [`:invalid`](invalid.md)
- [`:required`](required.md)
- [`:optional`](optional.md)

## Ссылки

- Псевдо-класс [`:valid`](https://developer.mozilla.org/ru/docs/Web/CSS/:valid) <sup><small>MDN (рус.)</small></sup>
