---
description: Allows a using package to override selected components from a used package
---

# xsl:override

Allows a using package to override selected components from a used package.

Always appears as a child of [`xsl:use-package`](xsl-use-package.md).

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-EE since Saxon 9.7._

-   **Содержимое**: ( [`xsl:template`](xsl-template.md) | [`xsl:function`](xsl-function.md) | [`xsl:variable`](xsl-variable.md) | [`xsl:param`](xsl-param.md) | [`xsl:attribute-set`](xsl-attribute-set.md) )`*`
-   **Допустимые родительские элементы**: [`xsl:use-package`](xsl-use-package.md)
-   **Element has no attributes**

## Notes

New in XSLT 3.0, and first fully implemented in Saxon 9.7.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-override)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/override.html)

## См. также

-   [`xsl:accept`](xsl-accept.md)
-   [`xsl:use-package`](xsl-use-package.md)
