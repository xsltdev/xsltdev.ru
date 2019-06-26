---
layout: default
title: string-length
nav_order: 28
parent: XPath
---

<!-- prettier-ignore-start -->
# string-length()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`string-length`** возвращает число символов строкового аргумента. Если аргумент опущен, `string-length` возвращает длину строкового представления контекстного узла.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
number string-length( string? )
```

## Описание и примеры

Напомним, что длина строки не имеет ничего общего с количеством байт, которое требуется для ее представления. Разные формы кодирования используют разное количество байт для записи символов, внутренние представления строк также могут быть различными, но длина строки в любом случае — это число символов, которые ее составляют.

### Примеры

```
string-length('Barnes and Noble') = 16
string-length('Barnes&amp;#x20;and&amp#x20;Noble') = 16
string-length('Barnes &amp; Noble') = 14
```

## Ссылки

- [string-length()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/string-length) на MDN
