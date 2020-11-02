---
description: Тег mark (от англ. mark - отметка) помечает текст как выделенный
---

# &lt;mark&gt;

Тег **`<mark>`** _(от англ. **mark** - отметка)_ помечает текст как выделенный.

В браузере фоновый цвет текста внутри `<mark>` выделяется жёлтым цветом.

Авторы обычно используют `<mark>` для привлечения внимания читателя к части текста. Заметьте, что такой текст ничего не говорит о важности выделенного фрагмента, а лишь предлагает обратить на него внимание.

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
    - **mark**
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
<mark>текст</mark>
```

Закрывающий тег обязателен.

## Атрибуты

Нет.

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-mark-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-mark-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>mark</title>
  </head>
  <body>
    <header>
      <h1>Следы невиданных зверей</h1>
    </header>
    <article>
      История о том, как возле столовой появились загадочные
      розовые следы с
      <mark>шестью пальцами</mark>, и почему это случилось.
    </article>
  </body>
</html>
```

## Ссылки

- Тег [`<mark>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/mark) <sup><small>MDN (рус.)</small></sup>
