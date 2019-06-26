---
layout: default
title: var
nav_order:
parent: HTML
---

<!-- prettier-ignore-start -->
1. TOC
{:toc}

# &lt;var&gt;
{: .no_toc }
<!-- prettier-ignore-end -->

Тег **`<var>`** _(от англ. **var**iable -- переменная)_ используется для выделения переменных из компьютерных программ.

Браузеры обычно помечают текст в контейнере `<var>` курсивным начертанием.

## Синтаксис

```html
<var>Текст</var>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](/lib/uni-attr/) и [события](/lib/events/).

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-var-element)
- [HTML 5](http://www.w3.org/TR/html5/textlevel-semantics.html#the-var-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>VAR</title>
  </head>
  <body>
    <p>В данном примере делается запрос к базе данных для получения поля <var>content_title</var> из таблицы <var>content</var>, причем должно удовлетворяться условие <code>section_id = 1</code>.</p>
  </body>
</html>
```
