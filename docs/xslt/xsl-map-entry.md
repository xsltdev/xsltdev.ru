---
description: Используется для построения карты синглтонов (один ключ и одно значение)
---

# xsl:map-entry

Используется для построения карты синглтонов (один ключ и одно значение).

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех редакциях. Реализовано в Saxon-PE и Saxon-EE начиная с Saxon 9.6._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

**`key`**
: _expression_
: Выражение, определяющее ключ записи в новой карте.

`select?`
: _expression_
: Связанное значение может быть определено либо атрибутом `select`, либо вложенным конструктором последовательности.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-map-entry)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/map-entry.html)

## См. также

-   [`xsl:map`](xsl-map.md)
