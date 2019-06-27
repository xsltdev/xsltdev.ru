# &lt;cite&gt;

Тег **`<cite>`** _(от англ. **cite** - цитировать)_ представляет название произведения (книги, статьи, поэмы, сценария, фильма, песни, оперы, игры и др.).

Это может быть произведение, на которое ссылаются в цитате, или просто работа, упоминаемая вскользь. Браузеры обычно выделяют текст внутри `<cite>` курсивом.

`<cite>` не используется для разметки людей, даже если они имеют непосредственное отношение к упомянутому произведению.

## Синтаксис

```html
<cite>Текст</cite>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element)
- [HTML5](http://www.w3.org/TR/html5/text-level-semantics.html#the-cite-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.2.1)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>CITE</title>
  </head>
  <body>
    <p>Игра <cite>Diablo</cite> уносит нас в мир тёмного фэнтези и основана на <cite>GURPS</cite> — универсальной системе ролевых игр, разработанной компанией Steve Jackson Games в 1986 году.</p>
  </body>
</html>
```
