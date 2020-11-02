---
description: Тег br (от англ. break - разрыв) устанавливает перевод строки в том месте, где он находится
---

# &lt;br&gt;

Тег **`<br>`** _(от англ. **br**eak - разрыв)_ устанавливает перевод строки в том месте, где он находится.

В отличие от элемента [`<p>`](p.md), использование `<br>` не добавляет пустой отступ перед строкой.

??? info "Текстовые элементы"

    <div class="col4" markdown="1">

    - [a](a.md)
    - [abbr](abbr.md)
    - [b](b.md)
    - [bdi](bdi.md)
    - [bdo](bdo.md)
    - **br**
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
Текст<br />
текст
```

Закрывающий тег не требуется.

## Атрибуты

Нет.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element)
- [HTML5](http://www.w3.org/TR/html5/text-level-semantics.html#the-br-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.3.2.1)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>BR</title>
  </head>
  <body>
    <p>Р.Л. Стивенсон</p>
    <p>
      Лето в стране настало,<br />
      Вереск опять цветёт.<br />
      Но некому готовить<br />
      Вересковый мёд.
    </p>
  </body>
</html>
```

## Ссылки

- Тег [`<br>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/br) <sup><small>MDN (рус.)</small></sup>
