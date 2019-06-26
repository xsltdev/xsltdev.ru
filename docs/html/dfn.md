---
layout: default
title: dfn
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;dfn&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<dfn>`** _(от англ. **d**e**f**i**n**ition - термин, определение)_ применяется для выделения терминов при их первом появлении в тексте. Как правило, в документе, когда упоминается новый термин, он выделяется курсивом и даётся его определение. При использовании этого термина в дальнейшем, он считается уже известным читателю.

Браузеры, чаще всего отображают содержимое контейнера `<dfn>` с помощью курсивного начертания.

Определение термина задаётся с помощью атрибута `title` у элемента `<dfn>`, либо с помощью атрибута `title` у вложенного элемента [`<abbr>`](/html/abbr/), либо текстом внутри `<dfn>`.

## Синтаксис

```html
<dfn>Текст</dfn>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-dfn-element)
- [HTML5](http://www.w3.org/TR/html5/text-level-semantics.html#the-dfn-element)
- [HTML 4.01 Specification](http://www.w3.org/TR/html401/struct/text.html#h-9.2.1)

## Описание и примеры

### Пример 1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>DFN</title>
  </head>
  <body>
    <p><dfn>Капителью</dfn> в типографике называется текст, набранный прописными буквами уменьшенного размера.</p>
  </body>
</html>
```

### Пример 2

```html
<!-- Define "The Internet" -->
<p><dfn id="def-internet">The Internet</dfn> is a global system of interconnected networks that use the Internet Protocol Suite (TCP/IP) to serve billions of users worldwide.</p>
```

Далее в этом же документе:

```html
<dl>
  <!-- Define "World-Wide Web" and reference
		definition for "the Internet" -->
  <dt>
    <dfn>
      <abbr title="World-Wide Web">WWW</abbr>
    </dfn>
  </dt>
  <dd>The World-Wide Web (WWW) is a system of interlinked hypertext documents accessed on <a href="#def-internet">the Internet</a>.</dd>
</dl>
```
