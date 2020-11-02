---
description: Тег samp (от англ. sample — пример) используется для отображения текста, который является результатом вывода компьютерной программы или скрипта
---

# &lt;samp&gt;

Тег **`<samp>`** _(от англ. **samp**le — пример)_ используется для отображения текста, который является результатом вывода компьютерной программы или скрипта.

Браузеры обычно отображают текст в контейнере `<samp>` с помощью моноширинного шрифта.

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
    - **samp**
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
<samp>Текст</samp>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-samp-element)
- [HTML 5](http://www.w3.org/TR/html5/text-level-semantics.html#the-samp-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.2.1)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>SAMP</title>
    <style>
      code {
        color: green; /* Цвет текста */
      }
      samp {
        color: maroon; /* Цвет текста */
      }
    </style>
  </head>
  <body>
    <p>
      Проверка, поддерживает браузер JavaScript 1.3 или нет.
    </p>
    <p>
      <code>
        <script language="JavaScript1.3">
          JS13 = 1
        </script>
        <br />
        <script language="JavaScript">
          <br>
          					if (window.JS13) document.write("Ваш браузер поддерживает JavaScript 1.3");<br>
        </script>
      </code>
    </p>
    <p>
      В результате выполнения скрипта вы увидите текст
      <samp>Ваш браузер поддерживает JavaScript 1.3</samp>,
      в том случае, если браузер работает с версией 1.3.
    </p>
  </body>
</html>
```

## Ссылки

- Тег [`<samp>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/samp) <sup><small>MDN (рус.)</small></sup>
