---
description: Псевдокласс read-only применяется к полям формы, у которых задан атрибут readonly
---

# :read-only

Псевдокласс **`:read-only`** применяется к полям формы, у которых задан атрибут `readonly`. Такое поле не может быть модифицировано, при этом оно получает фокус, а данные в таком поле можно выделить и скопировать.

## Синтаксис

```css
input:-moz-read-only {
  background: #eee;
}
input:read-only {
  background: #eee;
}
```

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-read-only)
- [HTML5](https://www.w3.org/TR/html50/disabled-elements.html#selector-read-only)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#rw-pseudos)
- [CSS Basic User Interface Module Level 3](https://drafts.csswg.org/css-ui-3/#pseudo-ro-rw)

## Пример

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>:read-only</title>
    <style>
      input:read-only {
        opacity: 0.3; /* Полупрозрачность */
      }
    </style>
  </head>
  <body>
    <form action="handler.php">
      <p>
        <input
          type="text"
          name="comment"
          size="40"
          value="Введенный текст не может изменяться"
          readonly
        />
      </p>

      <p><input type="submit" value="Отправить" /></p>
    </form>
  </body>
</html>
```

## См. также

- [:read-write](read-write.md)

## Ссылки

- [:read-write](https://developer.mozilla.org/ru/docs/Web/CSS/:read-only) на MDN
