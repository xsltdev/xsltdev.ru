---
description: Псевдокласс :in-range представляет собой элемент input, текущее значение которого находится в пределах диапазона, заданных атрибутами min и max
---

# :in-range

Псевдокласс **`:in-range`** представляет собой элемент [`<input>`](/html/input/), текущее значение которого находится в пределах диапазона, заданных атрибутами `min` и `max`.

Этот псевдокласс полезен для предоставления пользователю визуальной информации о том, что текущее значение поля находится в допустимых пределах.

**Примечание.** Этот псевдокласс применяется только к элементам, которые могут принимать ограничение диапазона. В отсутствие такого ограничения элемент не может быть «в диапазоне» или «вне диапазона».

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
    - **:in-range**
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
/* Selects any <input>, but only when it has a range
	   specified, and its value is inside that range */
input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html#selector-in-range)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#in-range-pseudo)

## Пример

=== "HTML"

    ```html
    <form action="" id="form1">
      <ul>
        Values between 1 and 10 are valid.
        <li>
          <input
            id="value1"
            name="value1"
            type="number"
            placeholder="1 to 10"
            min="1"
            max="10"
            value="12"
          />
          <label for="value1">Your value is </label>
        </li>
      </ul>
    </form>
    ```

=== "CSS"

    ```css
    li {
      list-style: none;
      margin-bottom: 1em;
    }

    input {
      border: 1px solid black;
    }

    input:in-range {
      background-color: rgba(0, 255, 0, 0.25);
    }

    input:out-of-range {
      background-color: rgba(255, 0, 0, 0.25);
      border: 2px solid red;
    }

    input:in-range + label::after {
      content: 'okay.';
    }

    input:out-of-range + label::after {
      content: 'out of range!';
    }
    ```

=== "Результат"

    ![Пример работы псевдо-класса :in-range](in-range.png)
