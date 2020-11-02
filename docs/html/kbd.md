---
description: Тег kbd (от англ. keyboard - клавиатура) используется для обозначения текста, который набирается на клавиатуре или для названия клавиш
---

# &lt;kbd&gt;

Тег **`<kbd>`** _(от англ. **k**ey**b**oar**d** — клавиатура)_ используется для обозначения текста, который набирается на клавиатуре или для названия клавиш.

Браузеры обычно помечают текст в контейнере `<kbd>` моноширинным шрифтом.

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
    - **kbd**
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
<kbd>Текст</kbd>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-kbd-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-kbd-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.2.1)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>KBD</title>
    <style>
      kbd {
        background: #ccc;
        border-radius: 3px;
        padding: 0 4px;
      }
    </style>
  </head>
  <body>
    <p>
      Для быстрого закрашивания выделенной области цветом
      переднего плана используйте комбинацию клавиш
      <kbd>Alt</kbd>+<kbd>Backspace</kbd> или
      <kbd>Alt</kbd>+<kbd>Delete</kbd>. Для закрашивания
      выделенной области фоновым цветом воспользуйтесь
      комбинацией <kbd>Ctrl</kbd>+<kbd>Backspace</kbd> или
      <kbd>Ctrl</kbd>+<kbd>Delete</kbd>.
    </p>
  </body>
</html>
```

## Ссылки

- Тег [`<kbd>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/kbd) <sup><small>MDN (рус.)</small></sup>
