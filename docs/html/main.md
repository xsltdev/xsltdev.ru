---
description: Тег main (от англ. main - основной) предназначен для основного содержимого документа
---

# &lt;main&gt;

Тег **`<main>`** _(от англ. **main** — основной)_ предназначен для основного содержимого документа.

На странице может быть только один `<main>` и он не должен располагаться внутри элементов [`<article>`](article.md), [`<aside>`](aside.md), [`<footer>`](footer.md), [`<header>`](header.md) или [`<nav>`](nav.md).

Элемент `<main>` включает в себя содержимое, которое является уникальным для данного документа, и не должен включать повторяющиеся разделы сайта, такие как навигация, название сайта, логотип, поисковая форма, баннеры и др.

??? info "Секции и заголовки"

    <div class="col4" markdown="1">

    - [address](address.md)
    - [article](article.md)
    - [aside](aside.md)
    - [footer](footer.md)
    - [header](header.md)
    - [h1](h1.md)
    - [h2](h2.md)
    - [h3](h3.md)
    - [h4](h4.md)
    - [h5](h5.md)
    - [h6](h6.md)
    - **main**
    - [nav](nav.md)
    - [section](section.md)

    </div>

## Синтаксис

```html
<main></main>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/#semantics.html#the-main-element)
- [HTML 5.1](https://www.w3.org/TR/2016/REC-html51-20161101/grouping-content.html#the-main-element)
- [HTML 5](http://www.w3.org/TR/html5/grouping-content.html#the-main-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>main</title>
  </head>
  <body>
    <h1>Следы невиданных зверей</h1>
    <main>
      <p>
        История о том, как возле столовой появились
        загадочные розовые следы с шестью пальцами, и почему
        это случилось.
      </p>
    </main>
  </body>
</html>
```

## Ссылки

- Тег [`<main>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/main) <sup><small>MDN (рус.)</small></sup>
