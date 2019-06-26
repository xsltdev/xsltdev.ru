---
layout: default
title: not
nav_order: 22
parent: XPath
---

<!-- prettier-ignore-start -->
# not()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`not`** выполняет логическое отрицание.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
boolean not( boolean )
```

## Описание и примеры

Если аргументом была "истина", `not` возвращает "ложь", если аргумент был "ложью", `not` вернет "истину". Если функции был передан аргумент не булевого типа (например, число), то он сначала будет сконвертирован в тип `boolean`.

Примеры:

```
not(false()) ? true
not(true()) ? false
not('false') ? false
not('true') ? false
not(0) ? true
not(/) ? false
```

## Ссылки

- [not()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/not) на MDN
