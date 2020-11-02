---
description: Тег cite (от англ. cite - цитировать) представляет название произведения (книги, статьи, поэмы, сценария, фильма, песни, оперы, игры)
---

# &lt;cite&gt;

Тег **`<cite>`** _(от англ. **cite** - цитировать)_ представляет название произведения (книги, статьи, поэмы, сценария, фильма, песни, оперы, игры и др.).

Это может быть произведение, на которое ссылаются в цитате, или просто работа, упоминаемая вскользь. Браузеры обычно выделяют текст внутри `<cite>` курсивом.

`<cite>` не используется для разметки людей, даже если они имеют непосредственное отношение к упомянутому произведению.

??? info "Текстовые элементы"

    <div class="col4" markdown="1">

    - [a](a.md)
    - [abbr](abbr.md)
    - [b](b.md)
    - [bdi](bdi.md)
    - [bdo](bdo.md)
    - [br](br.md)
    - **cite**
    - [code](code.md)
    - [data](data.md)
    - [del](del.md)
    - [dfn](dfn.md)
    - [em](em.md)
    - [i](i.md)
    - [ins](ins.md)
    - [kbd](kbd.md)
    - [mark](mark.md)
    - [q](q.md)
    - [ruby](ruby.md)
    - [rtc](rtc.md)
    - [rb](rb.md)
    - [rp](rp.md)
    - [rt](rt.md)
    - [s](s.md)
    - [samp](samp.md)
    - [small](small.md)
    - [span](span.md)
    - [strong](strong.md)
    - [sub](sub.md)
    - [sup](sup.md)
    - [time](time.md)
    - [u](u.md)
    - [var](var.md)
    - [wbr](wbr.md)

    </div>

## Синтаксис

```html
<cite>Текст</cite>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

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
    <p>
      Игра <cite>Diablo</cite> уносит нас в мир тёмного
      фэнтези и основана на <cite>GURPS</cite> —
      универсальной системе ролевых игр, разработанной
      компанией Steve Jackson Games в 1986 году.
    </p>
  </body>
</html>
```

## Ссылки

- Тег [`<cite>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/cite) <sup><small>MDN (рус.)</small></sup>
