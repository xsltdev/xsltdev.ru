---
layout: default
title: substring-before
nav_order: 31
parent: XPath
---

<!-- prettier-ignore-start -->
# substring-before()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`substring-before`** принимает на вход два строковых аргумента. Эта функция находит в первой строке вторую и возвращает подстроку, которая ей предшествует. Если вторая строка не содержится в первой, функция вернет пустую строку.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
string substring-before( string, string )
```

## Описание и примеры

### Примеры

```
substring-before('12-May-1998', '-') = '12'
substring-before('12 May 1998', ' ') = '12'
substring-before('12 May 1998', '&amp;#x20;') = '12'
substring-before('12 May 1998', '-') = ''
substring-before('aa-bb','-') = aa
substring-before('aa-bb','a') = (empty string)
substring-before('aa-bb','b') = aa-
substring-before('aa-bb','q') = (empty string)
```

## Ссылки

- [substring-before()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/substring-before) на MDN
