---
layout: default
title: normalize-space
nav_order: 21
parent: XPath
---

<!-- prettier-ignore-start -->
# normalize-space()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`normalize-space`** производит со своим строковым аргументом так называемую нормализацию пробельного пространства.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
string normalize-space( string? )
```

## Описание и примеры

Это означает, что в строке удаляются ведущие и заключающие пробельные символы, а все последовательности пробелов заменяются одним пробельным символом. Иными словами, функция удаляет "лишние" пробелы в строке.

Если аргумент функции опущен, она выполняется со строковым значением контекстного узла.

### Примеры

```
normalize-space(' А   -   В   -   С ') = 'А - В - С'
normalize-space('А &amp;#x9; В &amp;#x9; С') = 'A B C'
```

## Ссылки

- [normalize-space()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/normalize-space) на MDN
