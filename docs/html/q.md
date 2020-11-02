---
description: Тег q (от англ. quote — цитата) используется для выделения в тексте цитат
---

# &lt;q&gt;

Тег **`<q>`** _(от англ. **q**uote — цитата)_ используется для выделения в тексте цитат.

Содержимое контейнера автоматически отображается в браузере в кавычках.

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
    - **q**
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
<q>Текст</q>
```

Закрывающий тег обязателен.

## Атрибуты

`cite`
: Адрес, который указывает на источник цитаты.

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

### cite

Задаёт адрес страницы, который указывает на источник цитаты внутри `<q>`. Значение атрибута на странице не отображается и предназначено для поисковых систем.

**Синтаксис**

```html
<q cite="<адрес>">Цитата</q>
```

**Значения**

Адрес.

**Значение по умолчанию**

Нет.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-q-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-q-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.2.2)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Q</title>
    <style>
      q {
        font-style: italic; /* Курсивное начертание текста */
        color: #008; /* Цвет текста */
      }
    </style>
  </head>
  <body>
    <p>
      Станислав Лец утверждал:
      <q>Чаще всего выход там, где был вход</q>.
    </p>
  </body>
</html>
```

## Ссылки

- Тег [`<q>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/q) <sup><small>MDN (рус.)</small></sup>
