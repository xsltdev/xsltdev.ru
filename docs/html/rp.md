---
description: Тег rp используется для вывода текста в браузерах, которые не поддерживают элемент ruby
---

# &lt;rp&gt;

Тег **`<rp>`** используется для вывода текста в браузерах, которые не поддерживают элемент [`<ruby>`](ruby.md).

В остальных браузерах текст, заключенный в контейнер `<rp>`, не отображается. Элемент `<rp>` должен идти до или после [`<rt>`](rt.md).

??? info "Текстовые элементы"

    <div class="col4" markdown="1">

    - [a](a.md)
    - [abbr](abbr.md)
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
    - **rp**
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
<ruby>
  текст
  <rp>текст</rp><rt>аннотация</rt><rp>текст</rp>
</ruby>
```

Закрывающий тег не обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-rp-element)
- [HTML 5](https://www.w3.org/TR/html5/text-level-semantics.html#the-rp-element)

## Описание и примеры

Пример:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>rp</title>
  </head>
  <body>
    <p>
      <ruby> 字 <rp>(</rp><rt>zì</rt><rp>)</rp> </ruby>
    </p>
  </body>
</html>
```

Результат:

<ruby>
字 <rp>(</rp><rt>zì</rt><rp>)</rp>
</ruby>

## Ссылки

- Тег [`<rp>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/rp) <sup><small>MDN (рус.)</small></sup>
