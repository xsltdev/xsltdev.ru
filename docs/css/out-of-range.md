---
description: Псевдокласс :out-of-range применяется к полям форм, у которых введённое пользователем значение выходит из заданного диапазона
---

# :out-of-range

Псевдокласс **`:out-of-range`** применяется к полям форм, у которых введённое пользователем значение выходит из заданного диапазона. Псевдокласс работает только для тех полей, где пользователь может сам ввести значение, даже несмотря на ограничения наложенные атрибутами `min` и `max`.

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
    - **:out-of-range**
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

```
Селектор:out-of-range { ... }
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-out-of-range)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#out-of-range-pseudo)

## Примеры

### Пример 1

=== "HTML"

    ```html
    <form action="" id="form1">
      <ul>
        Приминаются значения между 1 и 10.
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
      content: ' НОРМАЛЬНОЕ';
    }
    input:out-of-range + label::after {
      content: 'вне диапазона!';
    }
    ```

=== "Результат"

    ![out-of-range](out-of-range.png)

### Пример 2

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>:out-of-range</title>
    <style>
      input:out-of-range {
        background: #f9c3d2; /* Цвет фона */
      }
      label {
        height: 1em;
      }
      input:out-of-range + label::after {
        content: 'Неверное число'; /* Выводим текст */
        color: #ec008c; /* Цвет текста */
        margin-left: 0.5em; /* Отступ слева */
      }
    </style>
  </head>
  <body>
    <form>
      <p>Введите число от 1 до 10</p>
      <p>
        <input
          type="number"
          id="dec"
          min="1"
          max="10"
          value="1"
        />
        <label for="dec"></label>
      </p>
    </form>
  </body>
</html>
```

## См. также

- [`:in-range`](in-range.md)

## Ссылки

- Псевдо-класс [`:out-of-range`](https://developer.mozilla.org/ru/docs/Web/CSS/:out-of-range) <sup><small>MDN (рус.)</small></sup>
