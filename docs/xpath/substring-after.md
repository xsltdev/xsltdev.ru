---
layout: default
title: substring-after
nav_order: 30
parent: XPath
---

<!-- prettier-ignore-start -->
# substring-after()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`substring-after`** возвращает строку, которая следует за первым вхождением второго аргумента. Если вторая строка не содержится в первой, функция вернет пустую строку.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
string substring-after( string, string )
```

## Описание и примеры

### Примеры

```
substring-after('12-May-1998', '-') = 'May-1998'
substring-after('12 May 1998', ' ') = 'May 1998'
substring-after('12 May 1998', '&amp;#x20;') = 'May 1998'
substring-after('12 May 1998', '-') = ''
substring-after('aa-bb','-') = bb
substring-after('aa-bb','a') = a-bb
substring-after('aa-bb','b') = b
substring-after('aa-bb','q') = (empty string)
```

## Ссылки

- [substring-after](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/substring-after) на MDN
