# :placeholder-shown

Псевдокласс **`:placeholder-shown`** определяет стиль элемента [`<input>`](/html/input/) или [`<textarea>`](/html/textarea/), который в данный момент отображает текст подсказки, заданной атрибутом `placeholder`. Такая подсказка обычно исчезает при наборе текста.

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
    - **:placeholder-shown**
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
/* Выбирает любой элемент с активным плейсхолдером */
:placeholder-shown {
  border: 2px solid silver;
}
```

## Спецификация

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#placeholder)

## Примеры

### Пример 1

=== "HTML"

    ```html
    <input placeholder="Type something here!" />
    ```

=== "CSS"

    ```css
    input {
      border: 2px solid black;
      padding: 3px;
    }

    input:placeholder-shown {
      border-color: silver;
    }
    ```

### Пример 2

В следующем примере выделены поля Branch и ID с пользовательским стилем.

=== "HTML"

    ```html
    <form id="test">
      <p>
        <label for="name">Enter Student Name:</label>
        <input id="name" placeholder="Student Name" />
      </p>
      <p>
        <label for="branch">Enter Student Branch:</label>
        <input id="branch" placeholder="Student Branch" />
      </p>
      <p>
        <label for="sid">Enter Student ID:</label>
        <input
          type="number"
          pattern="[0-9]{8}"
          title="8 digit ID"
          id="sid"
          class="studentid"
          placeholder="8 digit id"
        />
      </p>
      <input type="submit" />
    </form>
    ```

=== "CSS"

    ```css
    input {
      background-color: #e8e8e8;
      color: black;
    }

    input.studentid:placeholder-shown {
      background-color: yellow;
      color: red;
      font-style: italic;
    }
    ```

### Пример 3

В данном примере пустое поле отображается с красной рамкой, при вводе текста рамка меняет цвет на зелёный.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>:placeholder-shown</title>
    <style>
      input {
        border: 1px solid green; /* Зелёная рамка */
      }
      input:placeholder-shown {
        border-color: red; /* Красная рамка */
      }
    </style>
  </head>
  <body>
    <form action="/example/handler.php">
      <input type="text" name="login" placeholder="Логин" />
      <input
        type="password"
        name="pass"
        placeholder="Пароль"
      />
    </form>
  </body>
</html>
```

## См. также

- [`::placeholder`](placeholder.md)
- [`<input>`](/html/input/)
- [`<textarea>`](/html/textarea/)

## Ссылки

- Псевдо-класс [`:placeholder-shown`](https://developer.mozilla.org/ru/docs/Web/CSS/:placeholder-shown) <sup><small>MDN (рус.)</small></sup>
