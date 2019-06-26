---
layout: default
title: starts-with
nav_order: 26
parent: XPath
---

<!-- prettier-ignore-start -->
# starts-with()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`starts-with`** принимает на вход два строковых аргумента и возвращает `true`, если первая строка начинается второй и `false` в противном случае.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
boolean starts-with( string, string )
```

## Описание и примеры

### Примеры

```
starts-with('http://www.xsltdev.ru', 'http') ? true
starts-with('Title', 'ti') ? false
```

## Ссылки

- [starts-with()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/starts-with) на MDN
