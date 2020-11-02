---
description: Тег span (от англ. span — интервал) предназначен для выделения отдельных строк, символов или других строчных элементов для дальнейшего изменения их оформления с помощью стилей
---

# &lt;span&gt;

Тег **`<span>`** _(от англ. **span** — интервал)_ предназначен для выделения отдельных строк, символов или других строчных элементов для дальнейшего изменения их оформления с помощью стилей.

Например, внутри абзаца ([`<p>`](p.md)) можно изменить цвет и размер первого слова, если его выделить с помощью элемента `<span>` и задать для него желаемый стиль.

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
    - [rt](rt.md)
    - [s](s.md)
    - [samp](samp.md)
    - [small](small.md)
    - **span**
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
<span>...</span>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-span-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-span-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/global.html#edef-SPAN)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>SPAN</title>
    <style>
      span {
        color: red; /* Красный цвет символов */
      }
    </style>
  </head>
  <body>
    <p>
      Разумные люди приспосабливаются к окружающему миру.
      Неразумные люди приспосабливают мир к себе. Вот почему
      прогресс определяется действиями неразумных людей.
    </p>
    <p>Автор: <span>Бернард Шоу</span></p>
  </body>
</html>
```

## Ссылки

- Тег [`<span>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/span) <sup><small>MDN (рус.)</small></sup>
