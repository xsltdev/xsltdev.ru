---
description: Used to initiate streamed or unstreamed processing of a source document
---

# xsl:source-document

Used to initiate streamed or unstreamed processing of a source document.

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-EE since Saxon 9.7._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   _Permitted parent elements_: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

**`href`**
: _{ uri }_
: The URI of a source document. It can be written as an attribute value template if the URI is not known statically.

`streamable?`
: _boolean_
: Used to request streamed processing (the default is `no`).

`use-accumulators?`
: _tokens_
: Defines the set of accumulators that are applicable to the document.

`validation?`
: `"strict" | "lax" | "preserve" | "strip"`
: Requests strict or lax validation of the contents of the document against the element declaration of its top-level element.

`type?`
: _eqname_
: Requests validation of the source document against a specified XSD type. The value will typically be a user-defined complex type defined in an imported schema.

`saxon:line-numbering?`
: _boolean_
: Used to enable line numbering for the document being read. For details see `saxon:line-numbering`.

`saxon:strip-space?`
: `"#all" | "#none" | "#ignorable" | "#default"`
: Used to specify whitespace stripping: `#all` strips all whitespace text nodes; `#none` means no whitespace stripping; `#ignorable` strips whitespace in elements declared as having element-only content; and `#default` follows the rules in `xsl:strip-space/xsl:preserve-space` declarations.

## Заметки по реализации Saxon

The `xsl:source-document` instruction (used with the attribute `streamable="yes"`) replaces the [`xsl:stream`](xsl-stream.md) instruction from earlier drafts of the XSLT 3.0 specification. It first became available since Saxon 9.7.0.8, in Saxon-EE only (with XSLT 3.0 enabled), and becomes fully available in all Saxon editions from 9.8 (but streaming requires Saxon-EE).

If streaming is requested and the expression cannot be evaluated in streaming mode, execution fails, unless the configuration option `Feature.STREAMING_FALLBACK` is set, in which case it is executed in non-streaming mode, after issuing a warning.

## Подробности

The body of the instruction is a sequence constructor, which is evaluated with the root node of the selected document as the context node. For streaming to work, this must be written as a streamable sequence constructor. Expressed very informally, this means it must only make downward selections in the document, and no instruction or expression may make more than one downward selection. The [examples](http://www.w3.org/TR/xslt-30/#stream-examples) in the W3C specification illustrate some of the possibilities; these examples all work with Saxon.

Quite apart from its use with streaming, in comparison with the `doc` and `document` functions, the instruction gives more control, for example over schema validation and the use of accumulators.

Some of the things that the instruction might do are:

-   Compute an aggregate such as a total or average (see the example below).
-   Initiate processing of the document using template rules, by calling [`xsl:apply-templates`](xsl-apply-templates.md) using a streamable mode.
-   Iterate over the contents of the document using [`xsl:for-each`](xsl-for-each.md) or (if there is a need to "remember" information from one element to the next) using [`xsl:iterate`](xsl-iterate.md).
-   Perform grouping of the document contents using [`xsl:for-each-group`](xsl-for-each-group.md). Saxon only has limited ability to do streamed grouping, but simple cases should work. It is necessary to use one of the attributes `group-adjacent`, `group-starting-with`, or `group-ending-with`, and to use the new XSLT 3.0 binding variables for current group and current-grouping-key, rather than the XSLT 2.0 function.

## Примеры

### Пример 1

A simple example:

```xslt
<xsl:source-document streamable="yes" href="transactions.xml">
    <out><xsl:value-of select="sum(*/transaction/value)"/></out>
</xsl:source-document>
```

### Пример 2

See further [examples](http://www.w3.org/TR/xslt-30/#stream-examples) in the W3C specification; these examples all work with Saxon 9.5 onwards.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-source-document)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/source-document.html)

## См. также

-   [`xsl:apply-templates`](xsl-apply-templates.md)
-   [`xsl:for-each`](xsl-for-each.md)
-   [`xsl:for-each-group`](xsl-for-each-group.md)
-   [`xsl:iterate`](xsl-iterate.md)
