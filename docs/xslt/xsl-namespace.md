---
description: Creates a namespace node
---

# xsl:namespace

Creates a namespace node.

_Available in XSLT 2.0 and later versions. Available in all Saxon editions._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

**`name`**
: _{ ncname }_
: Defines the name of the namespace node (that is, the namespace prefix).

`select?`
: _expression_
: The string value of the namespace node (that is, the namespace URI) may be given either by a `select` attribute, or by an enclosed sequence constructor.

## Подробности

The semantics parallel [`xsl:attribute`](xsl-attribute.md) which creates attribute nodes.

It is rarely necessary to use this instruction explicitly. The only cases it is needed are where the namespaces to be included in the result document are not known statically, and are not present in the source document.

## Ссылки to W3C specifications

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-namespace)
-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-namespace)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/namespace.html)

## См. также

-   [`xsl:attribute`](xsl-attribute.md)
-   [`xsl:element`](xsl-element.md)
