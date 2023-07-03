---
description: Used to construct arbitrary sequences. It may select any sequence of nodes and/or atomic values, and essentially adds these to the result sequence
---

# xsl:sequence

Used to construct arbitrary sequences. It may select any sequence of nodes and/or atomic values, and essentially adds these to the result sequence.

_Available in XSLT 2.0 and later versions. Available in all Saxon editions._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

`select?`
: _expression_
: Specifies the input. Mandatory attribute in XSLT 2.0, but in XSLT 3.0 (and implemented since Saxon 9.5) the input may be specified either by a `select` attribute, or by the enclosed sequence constructor.

## Подробности

The `xsl:sequence` element may be used to produce any sequence of nodes and/or atomic values. These are included in the result sequence directly. Unlike [`xsl:copy-of`](xsl-copy-of.md), no copy is made.

The most common use is to return a result from a function (see Example 1).

There are two other interesting usage scenarios. The first is copying atomic values into a tree (see Example 2). The second, more important, is constructing a sequence-valued variable (see Example 3). A variable is sequence-valued if the variable binding element (e.g. [`xsl:variable`](xsl-variable.md)) has non-empty content, an as attribute, and no `select` attribute.

If nodes are constructed within a sequence-valued variable, they will be _parentless_. See Example 4 for an example of a sequence-valued variable containing parentless nodes.

## Примеры

### Пример 1

Returning a result from a function:

```xslt
<xsl:function name="f:increment" as="xs:integer">
    <xsl:param name="in" as="xs:integer"/>
    <xsl:sequence select="$in + 1"/>
</xsl:function>
```

### Пример 2

Copying atomic values into a tree:

```xslt
<e>
    <xsl:sequence select="1 to 5"/>
    <br/>
    <xsl:sequence select="6 to 10"/>
</e>
```

This produces the output `<e>1 2 3 4 5<br/>6 7 8 9 10</e>`.

### Пример 3

Constructing a sequence-valued variable:

```xslt
<xsl:variable name="seq" as="xs:integer *">
    <xsl:for-each select="1 to 5">>
       <xsl:sequence select=". * ."/>
    </xsl:for-each/>
</xsl:variable>
```

This produces the sequence (`1, 4, 9, 16, 25`) as the value of the variable.

### Пример 4

Creating a variable whose value is a sequence of three parentless attributes:

```xslt
<xsl:variable name="seq" as="attribute() *">
    <xsl:attribute name="a">10</xsl:attribute>
    <xsl:attribute name="b">20</xsl:attribute>
    <xsl:attribute name="a">30</xsl:attribute>
</xsl:variable>
```

It is quite legitimate to have two attributes in the sequence with the same name; there is no conflict until an attempt is made to add them both to the same element. The attributes can be added to an element by using `<xsl:copy-of select="$seq"/>` within an [`xsl:element`](xsl-element.md) instruction or within a literal result element. At this stage the usual rule applies: if there are duplicate attributes, the last one wins.

## Ссылки

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-sequence)
-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-sequence)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/sequence.html)

## См. также

-   [`xsl:copy-of`](xsl-copy-of.md)
-   [`xsl:function`](xsl-function.md)
-   [`xsl:template`](xsl-template.md)
