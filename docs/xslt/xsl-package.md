---
description: Defines a set of stylesheet modules that can be compiled as a unit, independently of other packages
---

# xsl:package

Defines a set of stylesheet modules that can be compiled as a unit, independently of other packages.

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-PE and Saxon-EE since Saxon 9.7._

-   **Содержимое**: ( ( [`xsl:expose`](xsl-expose.md) | _declarations_ )\* )
-   **Допустимые родительские элементы**: None

## Атрибуты

`id?`
: _id_

`name?`
: _uri_
: The name of the package, as an absolute URI, to be used by [`xsl:use-package`](xsl-use-package.md) declarations.

`package-version?`
: _string_
: Version identifier, used to distinguish between different versions of a package.

**`version`**
: _decimal_
: Indicates the version of XSLT to which the package manifest conforms.

`input-type-annotations?`
: `"preserve" | "strip" | "unspecified"`
: Used to request stripping of type annotations. The default is `unspecified`.

`declared-modes?`
: _boolean_
: Determines whether of not modes that are referenced within the package must be explicitly declared. The default is `yes`.

`default-mode?`
: _eqname_ | `"#unnamed"`

`default-validation?`
: `"preserve" | "strip"`

`default-collation?`
: _uris_

`extension-element-prefixes?`
: _prefixes_

`exclude-result-prefixes?`
: _prefixes_

`expand-text?`
: _boolean_

`use-when?`
: _expression_

`xpath-default-namespace?`
: _uri_

## Заметки по реализации Saxon

Packages are new in XSLT 3.0, and first fully implemented in Saxon 9.7.

Saxon 9.8 introduces new capabilities for defining packages in the configuration file. The configuration file acts as a catalog, mapping package names and versions to the actual locations of source XSLT code for the package, or exported SEF files containing the compiled package.

Alternatively, it is possible to resolve package names and versions programmatically by setting up a `PackageLibrary`.

Packages are available in all Saxon editions. However, only Saxon-EE can be used to export a package in compiled (SEF) form to filestore, and only Saxon-PE or -EE can be used to load a compiled package from filestore. With Saxon-HE, packages must be compiled from source code every time they are used.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-package)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/package.html)

## См. также

-   [`xsl:expose`](xsl-expose.md)
-   [`xsl:use-package`](xsl-use-package.md)
