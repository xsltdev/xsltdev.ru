---
description: Тег aside (от англ. aside - в стороне) определяет раздел страницы, который имеет косвенное отношение к содержимому страницы и может быть рассмотрен отдельно от этого содержимого
---

# &lt;aside&gt;

Тег **`<aside>`** _(от англ. **aside** - в стороне)_ определяет раздел страницы, который имеет косвенное отношение к содержимому страницы и может быть рассмотрен отдельно от этого содержимого.

`<aside>` применяется для боковых панелей, рекламных блоков, ссылок на архив, меток и другой информации, которая отделена от основного содержимого страницы.

## Синтаксис

```html
<aside>
  ...
</aside>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-aside-element)
- [HTML5](http://www.w3.org/TR/html5/sections.html#the-aside-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>aside</title>
    <style>
      aside {
        background: #f0f0f0;
        padding: 10px;
        width: 200px;
        float: right;
      }

      article {
        margin-right: 240px;
      }
    </style>
  </head>

  <body>
    <header>
      <h1>Байки</h1>
    </header>
    <aside>
      <p>Экономьте электричество</p>
      <p>Хороший язык</p>
      <p>Чья палка больше</p>
    </aside>
    <article>
      <p>
        История о том, как приходилось экономить электричество, какие меры для
        этого принимались, и куда оно на самом деле уходило.
      </p>
    </article>
  </body>
</html>
```

## Ссылки

- [`<aside>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/aside) на MDN
