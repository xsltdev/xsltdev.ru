---
description: Тег bdo (от англ. bidirectional override - элемент двунаправленного переопределения) устанавливает направление вывода текста и преимущественно предназначен для использования с языками, где чтение происходит справа налево
---

# &lt;bdo&gt;

Тег **`<bdo>`** _(от англ. **b**i**d**irectional **o**verride - элемент двунаправленного переопределения)_ устанавливает направление вывода текста и преимущественно предназначен для использования с языками, где чтение происходит справа налево.

Например, к ним относится иврит.

??? info "Текстовые элементы"

    <div class="col4" markdown="1">

    - [a](a.md)
    - [abbr](abbr.md)
    - [b](b.md)
    - [bdi](bdi.md)
    - **bdo**
    - [br](br.md)
    - [cite](cite.md)
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
<bdo>Текст</bdo>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-bdo-element)
- [HTML5](http://www.w3.org/TR/html5/textlevel-semantics.html#the-bdo-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/dirlang.html#h-8.2.4)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>BDO</title>
  </head>
  <body>
    <p><bdo dir="rtl">А роза упала на лапу Азора</bdo></p>
  </body>
</html>
```

## Ссылки

- Тег [`<bdo>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/bdo) <sup><small>MDN (рус.)</small></sup>
