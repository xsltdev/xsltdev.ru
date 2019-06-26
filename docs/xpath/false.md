---
layout: default
title: false
nav_order: 9
parent: XPath
---

<!-- prettier-ignore-start -->
# false()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`false`** возвращает тождественную "ложь".

В XPath нет констант и, тем более, логических констант, определяющих "истину" и "ложь", как в других языках. Функции [`true`](/xpath/true/) и `false` восполняют эту нехватку.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
boolean false()
```

## Описание и примеры

```
false() and $var ? false
```

Это выражение всегда будет ложным вне зависимости от значения переменной `var`, поскольку конъюнкция (логическая операция "и") с тождественной "ложью" всегда будет "ложью".

## См. также

- [true()](/xpath/true/) -- возвращает истину
- [not()](/xpath/not/) -- логическое отрицание

## Ссылки

- [false()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/false) на MDN
