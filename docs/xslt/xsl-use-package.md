---
description: Used to allow components of one package to be referenced within another
---

# xsl:use-package

Used to allow components of one package to be referenced within another.

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-PE and Saxon-EE since Saxon 9.7._

-   **Категория**: declaration
-   **Содержимое**: ( [`xsl:accept`](xsl-accept.md) | [`xsl:override`](xsl-override.md) )\*
-   **Допустимые родительские элементы**: [`xsl:package`](xsl-package.md) ; [`xsl:stylesheet`](xsl-stylesheet.md) ; [`xsl:transform`](xsl-transform.md)

## Атрибуты

**`name`**
: _uri_
: The name of the package to be used, as an absolute URI.

`package-version?`
: _string_
: The version of the named package to be used. The default is `*`, which matches any version.

## Заметки по реализации Saxon

New in XSLT 3.0, and first fully implemented in Saxon 9.7.

The rules for matching of package version numbers are more completely implemented in Saxon 9.8. If the configuration file defines multiple versions of the same package, the first one that satisfied the required version specified in the `xsl:use-package` declaration is chosen.

In Saxon-HE, the requested package must already exist in compiled form in memory. With Saxon-PE and Saxon-EE it can be loaded from a SEF file in filestore (or accessible from the web via a URI).

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-use-package)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/use-package.html)

## См. также

-   [`xsl:accept`](xsl-accept.md)
-   [`xsl:override`](xsl-override.md)
-   [`xsl:package`](xsl-package.md)
