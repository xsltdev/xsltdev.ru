---
description: Used to initiate streamed processing of a source document
---

# xsl:stream

Used to initiate streamed processing of a source document. (In later drafts of the XSLT 3.0 specification, the instruction is renamed [`xsl:source-document`](xsl-source-document.md), which is available since Saxon 9.7.0.8, while `xsl:stream` is retained for the time being as a synonym.)

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-EE since Saxon 9.6._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

**`href`**
: _{ uri }_
: The URI of a source document. It can be written as an attribute value template if the URI is not known statically.

`streamable?`
: _boolean_
: Allowed since 9.7.0.8. Used to specifically request streamed processing. The default is `yes`.

`use-accumulators?`
: _tokens_
: Defines the set of accumulators that are applicable to the document.

`validation?`
: `"strict" | "lax" | "preserve" | "strip"`

`type?`
: _eqname_

## Заметки по реализации Saxon

In later drafts of the XSLT 3.0 specification, the `xsl:stream` instruction is replaced by [`xsl:source-document`](xsl-source-document.md), which is available since Saxon 9.7.0.8. The `xsl:stream` instruction is retained as a synonym.

The instruction is obsolete and will be dropped after Saxon 9.8.

## Подробности

The body of the instruction is a sequence constructor, which is evaluated with the root node of the selected document as the context node. For streaming to work, this must be written as a streamable sequence constructor. Expressed very informally, this means it must only make downward selections in the document, and no instruction or expression may make more than one downward selection. The [examples](http://www.w3.org/TR/xslt-30/#stream-examples) in the W3C specification illustrate some of the possibilities; these examples all work with Saxon.

Some of the things that the instruction might do are:

-   Compute an aggregate such as a total or average (see the example below).
-   Initiate processing of the document using template rules, by calling [`xsl:apply-templates`](xsl-apply-templates.md) using a streamable mode.
-   Iterate over the contents of the document using [`xsl:for-each`](xsl-for-each.md) or (if there is a need to "remember" information from one element to the next) using [`xsl:iterate`](xsl-iterate.md).
-   Perform grouping of the document contents using [`xsl:for-each-group`](xsl-for-each-group.md). Saxon only has limited ability to do streamed grouping, but simple cases should work. It is necessary to use one of the attributes `group-adjacent`, `group-starting-with`, or `group-ending-with`, and to use the new XSLT 3.0 binding variables for current group and current-grouping-key, rather than the XSLT 2.0 function.

## Примеры

### Пример 1

A simple example:

```xslt
<xsl:stream href="transactions.xml">
    <out><xsl:value-of select="sum(*/transaction/value)"/></out>
</xsl:stream>
```

### Пример 2

See further [examples](http://www.w3.org/TR/xslt-30/#stream-examples) in the W3C specification; these examples all work with Saxon 9.5 onwards.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-stream)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/stream.html)

## См. также

-   [`xsl:apply-templates`](xsl-apply-templates.md)
-   [`xsl:for-each`](xsl-for-each.md)
-   [`xsl:for-each-group`](xsl-for-each-group.md)
-   [`xsl:iterate`](xsl-iterate.md)
