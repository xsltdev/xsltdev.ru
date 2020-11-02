---
description: Элемент rb (Ruby Base) используется для разграничения базового текстового компонента аннотации ruby, то есть текста, который аннотируется
---

# &lt;rb&gt;

Элемент **`<rb>`** (Ruby Base) используется для разграничения базового текстового компонента аннотации [`<ruby>`](ruby.md), то есть текста, который аннотируется. Один элемент `<rb>` должен переносить каждый отдельный атомарный сегмент основного текста.

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
    - **rb**
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
<rb></rb>
```

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [HTML 5](https://www.w3.org/TR/html50/text-level-semantics.html#the-rb-element)

## Описание и примеры

<!-- prettier-ignore-start -->
```html
<ruby>
  <rb>漢<rb>字
  <rp>(</rp><rt>kan<rt>ji<rp>)</rp>
</ruby>
```
<!-- prettier-ignore-end -->

Результат:

<ruby><rb>漢<rb>字<rp>(</rp><rt>kan<rt>ji<rp>)</rp></ruby>

## Ссылки

- Тег [`<rb>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/rb) <sup><small>MDN (рус.)</small></sup>
