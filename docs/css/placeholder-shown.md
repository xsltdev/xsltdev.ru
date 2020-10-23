# :placeholder-shown

Псевдокласс **`:placeholder-shown`** определяет стиль элемента [`<input>`](/html/input/) или [`<textarea>`](/html/textarea/), который в данный момент отображает текст подсказки, заданной атрибутом `placeholder`. Такая подсказка обычно исчезает при наборе текста.

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

- [`:placeholder-shown`](https://developer.mozilla.org/ru/docs/Web/CSS/:placeholder-shown) на MDN
