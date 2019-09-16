---
description: Тег nav (от англ. navigation — навигация) задаёт навигацию по сайту
---

# &lt;nav&gt;

Тег **`<nav>`** _(от англ. **nav**igation — навигация)_ задаёт навигацию по сайту.

Если на странице несколько блоков ссылок, то в `<nav>` обычно помещают приоритетные ссылки. Также допустимо использовать несколько `<nav>` в документе. Запрещается вкладывать `<nav>` внутрь [`<address>`](address.md).

## Синтаксис

```html
<nav>ссылки</nav>
```

Закрывающий тег обязателен.

## Атрибуты

Нет.

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)
- [HTML 5](http://www.w3.org/TR/html5/sections.html#the-nav-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>nav</title>
  </head>
  <body>
    <header>
      <h1>Чебурашка и крокодил Гена</h1>
    </header>
    <nav>
      <a href="page/1.html">Чебурашка</a> | <a href="page/2.html">Гена</a> |
      <a href="page/3.html">Шапокляк</a> |
      <a href="page/4.html">Лариска</a>
    </nav>
    <article>
      <h2>Добро пожаловать!</h2>
    </article>
  </body>
</html>
```

## Ссылки

- [`<nav>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/nav) на MDN
