# :checked

Псевдокласс **`:checked`** находит любые элементы `radio` (`<input type="radio">`), `checkbox` (`<input type="checkbox">`) или `option` (`<option>` внутри `<select>`), которые выбраны или включены.

Пользователь может изменить это состояние, нажав на элемент, или выбрав другое значение, в этом случае `:checked` повторно не применится к элементу, а сохранится.

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

```html tab="HTML"
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

```css tab="CSS"
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

### Переключение элементов со скрытым флажком

В этом примере используется псевдо-класс `:checked`, чтобы пользователь мог переключать контент на основе состояния флажка, без использования JavaScript.

```html tab="HTML"
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

```css tab="CSS"
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
