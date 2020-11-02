---
description: Тег rtc (от англ. ruby text container) обозначает текстовый контейнер внутри ruby
---

# &lt;rtc&gt;

Тег **`<rtc>`** _(от англ. **r**uby **t**ext **c**ontainer)_ обозначает текстовый контейнер внутри [`<ruby>`](ruby.md). В основном применяется в качестве описательной части или аннотации для иероглифов.

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
    - **rtc**
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
<ruby>
  текст
  <rtc>аннотация</rtc>
</ruby>
```

Закрывающий тег не обязателен, если идёт последним.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-rtc-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>rtc</title>
  </head>
  <body>
    <p>
      <ruby>
        <rb>旧</rb><rb>金</rb><rb>山</rb> <rt>jiù</rt
        ><rt>jīn</rt><rt>shān</rt>
        <rtc>Сан-Франциско</rtc>
      </ruby>
    </p>
  </body>
</html>
```

## Ссылки

- Тег [`<rtc>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/rtc) <sup><small>MDN (рус.)</small></sup>
