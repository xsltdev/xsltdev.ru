---
description: Chooses the next template to execute
---

# xsl:next-match

Chooses the next template to execute.

_Available in XSLT 2.0 and later versions. Available in all Saxon editions._

-   **Категория**: instruction
-   **Содержимое**: ( [`xsl:with-param`](xsl-with-param.md) | [`xsl:fallback`](xsl-fallback.md) )\*
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element
-   **Element has no attributes**

## Подробности

The `xsl:next-match` instruction was introduced in XSLT 2.0. It is very similar to [`xsl:apply-imports`](xsl-apply-imports.md), but with a different algorithm for choosing the next template to execute. It chooses the template rule that matches the current node and that would have been chosen if the current template rule and all higher precedence/priority rules were not there.

In practice `xsl:next-match` is nearly always preferable to `xsl:apply-imports` since the rules for using it are much more flexible and more intuitive.

## Ссылки

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-next-match)
-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-next-match)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/next-match.html)

## См. также

-   [`xsl:apply-imports`](xsl-apply-imports.md)
