---
description: Тег rt добавляет аннотацию сверху или снизу от текста, заключенного в контейнер ruby. Сама аннотация выводится уменьшенным шрифтом
---

# &lt;rt&gt;

Тег **`<rt>`** добавляет аннотацию сверху или снизу от текста, заключенного в контейнер [`<ruby>`](ruby.md). Сама аннотация выводится уменьшенным шрифтом.

Такая форма записи преимущественно используется для азиатских языков вроде китайского или японского, но также может применяться для других языков, если требуется написать один текст над другим.

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
    - [rp](rp.md)
    - **rt**
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
  <rt>аннотация</rt>
</ruby>
```

Закрывающий тег не обязателен, если идёт последним.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-rt-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-rt-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>rt</title>
    <style>
      .date {
        font-size: 2em;
      }
      .date ruby {
        background: #0078c9;
        color: #fff;
      }
      .date rt {
        background: #a0dae8;
        color: #000;
        padding: 2px;
      }
    </style>
  </head>
  <body>
    <p class="date">
      <ruby>23<rt>ноябрь</rt></ruby>
    </p>
  </body>
</html>
```

## Ссылки

- Тег [`<rt>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/rt) <sup><small>MDN (рус.)</small></sup>
