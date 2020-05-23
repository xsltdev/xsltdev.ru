---
description: Псевдокласс read-write применяется к полям формы, доступных для изменения
---

# :read-write

Псевдокласс **`:read-write`** применяется к полям формы, доступных для изменения. Псевдокласс `:read-write` является противоположным по своему действию [`:read-only`](read-only.md), который применяется к полям с атрибутом `readonly` (только для чтения).

## Синтаксис

```css
input:-moz-read-write {
  background: #eee;
}
input:read-write {
  background: #eee;
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-read-write)
- [HTML5](https://www.w3.org/TR/html50/disabled-elements.html#selector-read-write)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#rw-pseudos)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-ro-rw)

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>:read-write</title>
    <style>
      input:read-write {
        border: 1px solid green;
      }
    </style>
  </head>
  <body>
    <form action="handler.php">
      <p>
        <input
          type="text"
          size="40"
          value="Введенный текст не может изменяться"
          readonly
        />
      </p>

      <p>
        <input type="text" size="40" value="Этот текст может изменяться" />
      </p>

      <p>
        <input type="submit" value="Отправить" />
      </p>
    </form>
  </body>
</html>
```

## См. также

- [:read-only](read-only.md)

## Ссылки

- [:read-write](https://developer.mozilla.org/ru/docs/Web/CSS/:read-write) на MDN
