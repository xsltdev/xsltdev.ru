---
description: Тег wbr (от англ. word break — разрыв слова) указывает браузеру место, где допускается делать перенос строки в тексте, если этого требует ширина родительского элемента
---

# &lt;wbr&gt;

Тег **`<wbr>`** _(от англ. **w**ord **br**eak — разрыв слова)_ указывает браузеру место, где допускается делать перенос строки в тексте, если этого требует ширина родительского элемента.

## Синтаксис

```html
Текст<wbr />текст
```

Закрывающий тег не требуется.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-wbr-element)

## Примеры

### Пример 1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>WBR</title>
    <style>
      .word {
        font-size: 2em;
      }
      wbr {
        display: inline-block;
      }
    </style>
  </head>
  <body>
    <p>Самое длинное слово из химии</p>
    <p class="word">
      метоксихлор<wbr />диэтиламино<wbr />метил<wbr />бутил<wbr />амино<wbr />акридин
    </p>
  </body>
</html>
```

### Пример 2

Руководство по стилю Yahoo рекомендует разбивать URL перед пунктуацией, чтобы не оставлять знаки препинания в конце строки, которые читатель может принять за конец URL.

```html
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

## См. также

- [overflow-wrap](../css/overflow-wrap.md)
- [word-break](../css/word-break.md)
- [hyphens](../css/hyphens.md)

## Ссылки

- Тег [`<wbr>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/wbr) <sup><small>MDN (рус.)</small></sup>
