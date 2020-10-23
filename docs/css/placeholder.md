---
description: С помощью псевдоэлемента ::placeholder задаётся стилевое оформление подсказывающего текста, созданного атрибутом placeholder
---

# ::placeholder

С помощью псевдоэлемента **`::placeholder`** задаётся стилевое оформление подсказывающего текста, созданного атрибутом `placeholder`. Допускается использовать свойства для изменения вида текста, например, задать шрифт и цвет.

## Синтаксис

```css
::placeholder {
  color: blue;
  font-size: 1.5em;
}
```

## Спецификация

- [CSS Pseudo-Elements Level 4](https://drafts.csswg.org/css-pseudo-4/#placeholder-pseudo)

## Примечания

- Internet Explorer использует псевдокласс `:-ms-input-placeholder`.
- Microsoft Edge использует псевдоэлемент `::-ms-input-placeholder`.
- Chrome, до версии 57, Opera до версии 44, Safari до версии 10.1 и Android используют псевдоэлемент `::-webkit-input-placeholder`.
- Firefox с версии 4 и до 19 использует псевдокласс `:-moz-placeholder`.
- Firefox до версии 51 использует псевдоэлемент `::-moz-placeholder`.

## Пример 1

=== "HTML"

    ```html
    <input placeholder="Type something here!" />
    ```

=== "CSS"

    ```css
    input::placeholder {
      color: red;
      font-size: 1.2em;
      font-style: italic;
    }
    ```

## Пример 2

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>placeholder</title>
    <style>
      body {
        background: #053f38;
      }
      input[type='search'] {
        border: 1px solid #98baba; /* Параметры рамки */
        background: transparent; /* Прозрачный фон */
        padding: 1px 4px; /* Поля вокруг текста */
        color: #fff; /* Цвет текста */
      }
      input[type='search']::-moz-placeholder {
        color: #ffd595; /* Цвет подсказывающего текста */
      }
      input[type='search']::-webkit-input-placeholder {
        color: #ffd595;
      }
      input[type='search']:-ms-input-placeholder {
        color: #ffd595;
      }
      input[type='search']::-ms-input-placeholder {
        color: #ffd595;
      }
      input[type='search']::placeholder {
        color: #ffd595;
      }
    </style>
  </head>
  <body>
    <form action="handler.php">
      <p>
        <input
          type="search"
          placeholder="Поиск по сайту"
          name="q"
        />
        <input type="submit" value="Найти" />
      </p>
    </form>
  </body>
</html>
```

Результат:

![Использование ::placeholder](css_placeholder.png)

## См. также

- [`:placeholder-shown`](placeholder-shown.md)
- [`<input>`](/html/input/)
- [`<textarea>`](/html/textarea/)

## Ссылки

- [`::placeholder`](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder) на MDN
