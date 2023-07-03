---
description: The xsl next-iteration instruction occurs within xsl iterate
---

# xsl:next-iteration

The **`xsl:next-iteration`** instruction occurs within [`xsl:iterate`](xsl-iterate.md). The contents are a set of [`xsl:with-param`](xsl-with-param.md) elements defining the values of the iteration parameters to be used on the next iteration.

The `xsl:next-iteration` instruction must not be followed by further instructions, though it can occur as the last thing in a branch of a conditional. It must appear lexically within the `xsl:iterate` instruction (and not, for example, in a called template or function).

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-PE and Saxon-EE since Saxon 9.6._

-   **Категория**: instruction
-   **Содержимое**: ( [`xsl:with-param`](xsl-with-param.md)\* )
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element
-   **Element has no attributes**

## Подробности

For details see [`xsl:iterate`](xsl-iterate.md).

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-next-iteration)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/next-iteration.html)

## См. также

-   [`xsl:iterate`](xsl-iterate.md)
