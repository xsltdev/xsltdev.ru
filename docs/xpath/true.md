---
layout: default
title: true
nav_order: 35
parent: XPath
---

<!-- prettier-ignore-start -->
# true()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`true`** возвращает тождественную "истину".

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
boolean true()
```

## Описание и примеры

В XPath нет констант и, тем более, логических констант, определяющих "истину" и "ложь", как в других языках. Функции `true` и [`false`](/xpath/false/) восполняют эту нехватку.

### Пример

```
true() or $var ? true
```

Это выражение всегда будет истинным вне зависимости от значения переменной `var`, поскольку дизъюнкция (логическая операция "или") с тождественной "истиной" всегда будет "истиной".

## Ссылки

- [true()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/true) на MDN
