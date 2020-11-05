---
description: Псевдокласс :checked находит любые элементы radio, checkbox или option, которые выбраны или включены
---

# :checked

Псевдокласс **`:checked`** находит любые элементы `radio` (`<input type="radio">`), `checkbox` (`<input type="checkbox">`) или `option` (`<option>` внутри `<select>`), которые выбраны или включены.

Пользователь может изменить это состояние, нажав на элемент, или выбрав другое значение, в этом случае `:checked` повторно не применится к элементу, а сохранится.

??? info "Псевдоклассы"

    <div class="col3" markdown="1">

    - [:active](active.md)
    - [:any-link](any-link.md)
    - [:blank](blank.md)
    - **:checked**
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
/* Matches any checked/selected radio, checkbox, or option */
:checked {
  margin-left: 25px;
  border: 1px solid blue;
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/#selector-checked)
- [HTML 5](http://www.w3.org/TR/html5/#selector-checked)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#checked)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-checked)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#checked)

## Описание и примеры

### Пример 1

=== "HTML"

    ```html
    <div>
      <input type="radio" name="my-input" id="yes" />
      <label for="yes">Yes</label>

      <input type="radio" name="my-input" id="no" />
      <label for="yes">No</label>
    </div>

    <div>
      <input type="checkbox" name="my-checkbox" id="opt-in" />
      <label for="opt-in">Check me!</label>
    </div>

    <select name="my-select" id="fruit">
      <option value="opt1">Apples</option>
      <option value="opt2">Grapes</option>
      <option value="opt3">Pears</option>
    </select>
    ```

=== "CSS"

    ```css
    div,
    select {
      margin: 8px;
    }

    /* Labels for checked inputs */
    input:checked + label {
      color: red;
    }

    /* Radio element, when checked */
    input[type='radio']:checked {
      box-shadow: 0 0 0 3px orange;
    }

    /* Checkbox element, when checked */
    input[type='checkbox']:checked {
      box-shadow: 0 0 0 3px hotpink;
    }

    /* Option elements, when selected */
    option:checked {
      box-shadow: 0 0 0 3px lime;
      color: red;
    }
    ```

### Пример 2: переключение элементов со скрытым флажком

В этом примере используется псевдо-класс `:checked`, чтобы пользователь мог переключать контент на основе состояния флажка, без использования JavaScript.

=== "HTML"

    ```html
    <input type="checkbox" id="expand-toggle" />

    <table>
      <thead>
        <tr>
          <th>Column #1</th>
          <th>Column #2</th>
          <th>Column #3</th>
        </tr>
      </thead>
      <tbody>
        <tr class="expandable">
          <td>[more text]</td>
          <td>[more text]</td>
          <td>[more text]</td>
        </tr>
        <tr>
          <td>[cell text]</td>
          <td>[cell text]</td>
          <td>[cell text]</td>
        </tr>
        <tr>
          <td>[cell text]</td>
          <td>[cell text]</td>
          <td>[cell text]</td>
        </tr>
        <tr class="expandable">
          <td>[more text]</td>
          <td>[more text]</td>
          <td>[more text]</td>
        </tr>
        <tr class="expandable">
          <td>[more text]</td>
          <td>[more text]</td>
          <td>[more text]</td>
        </tr>
      </tbody>
    </table>

    <label for="expand-toggle" id="expand-btn">Toggle hidden rows</label>
    ```

=== "CSS"

    ```css
    /* Hide the toggle checkbox */
    #expand-toggle {
      display: none;
    }

    /* Hide expandable content by default */
    .expandable {
      visibility: collapse;
      background: #ddd;
    }

    /* Style the button */
    #expand-btn {
      display: inline-block;
      margin-top: 12px;
      padding: 5px 11px;
      background-color: #ff7;
      border: 1px solid;
      border-radius: 3px;
    }

    /* Show hidden content when the checkbox is checked */
    #expand-toggle:checked ~ * .expandable {
      visibility: visible;
    }

    /* Style the button when the checkbox is checked */
    #expand-toggle:checked ~ #expand-btn {
      background-color: #ccc;
    }
    ```
