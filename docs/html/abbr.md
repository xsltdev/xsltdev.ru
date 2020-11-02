---
description: Тег abbr (от англ. abbreviation - аббревиатура) указывает, что последовательность символов является аббревиатурой
---

# &lt;abbr&gt;

Тег **`<abbr>`** _(от англ. **abbr**eviation - аббревиатура)_ указывает, что последовательность символов является аббревиатурой.

С помощью атрибута `title` даётся расшифровка сокращения, что позволяет понимать аббревиатуру тем людям, которые с ней не знакомы. Кроме того, поисковые системы индексируют полнотекстовый вариант сокращения, это может использоваться для повышения рейтинга документа.

Браузеры обычно добавляют к тексту пунктирное подчёркивание, но могут и не выделять содержимое элемента.

??? info "Текстовые элементы"

    <div class="col4" markdown="1">

    - [a](a.md)
    - **abbr**
    - [b](b.md)
    - [bdi](bdi.md)
    - [bdo](bdo.md)
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
<abbr title="Расшифровка аббревиатуры">АББРЕВИАТУРА</abbr>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element)
- [HTML5](http://www.w3.org/TR/html5/text-level-semantics.html#the-abbr-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#edef-ABBR)

## Описание и примеры

Пример:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>abbr</title>
    <meta charset="utf-8" />
    <style>
      abbr {
        border-bottom: 1px dashed red;
        color: #000080;
      }
    </style>
  </head>

  <body>
    <p>
      <abbr>CGI</abbr> обозначается протокол, с помощью
      которого любые внешние программы взаимодействуют с
      веб-сервером. С помощью
      <abbr
        title="Common
    Gateway Interface, общий шлюзовый интерфейс"
        >CGI</abbr
      >
      на сервере можно выполнять программы на любом языке
      программирования и результат их действия выводить в
      виде веб-страницы.
    </p>
  </body>
</html>
```

## Ссылки

- Тег [`<abbr>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/abbr) <sup><small>MDN (рус.)</small></sup>
