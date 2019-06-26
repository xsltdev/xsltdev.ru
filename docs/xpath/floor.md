---
layout: default
title: floor
nav_order: 10
parent: XPath
---

<!-- prettier-ignore-start -->
# floor()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`floor`** осуществляет округление численного аргумента до ближайшего не большего целого.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
number floor( number )
```

## Описание и примеры

```
floor(2.3) ? 2
floor(-2.3) ? -3
floor(-1 div 0) ? -Infinity
floor('zero') ? NaN
```

## Ссылки

- [floor()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/floor) на MDN
