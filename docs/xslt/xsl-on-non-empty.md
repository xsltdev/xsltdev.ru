---
description: Used to allow conditional content construction to be made streamable
---

# xsl:on-non-empty

Used to allow conditional content construction to be made streamable. Outputs the enclosed content only if the containing sequence also generates "ordinary" content.

The instruction can appear anywhere in a sequence constructor (and more than once). The content is output in the appropriate place among "ordinary" output.

Although intended primarily to make streaming applications easier to write, the instruction can also be handy irrespective of streaming to avoid evaluating complex conditions more than once.

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-PE and Saxon-EE since Saxon 9.7._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

`select?`
: _expression_

## Заметки по реализации Saxon

New in XSLT 3.0, and implemented since Saxon 9.7.

## Примеры

The following code generates a header and footer only if there is content, however it is not guaranteed-streamable because it processes child `item-for-sale` elements more than once:

```xslt
<xsl:if test="exists(item-for-sale)">
    <h1>Items for Sale</h1>
</xsl:if>
<xsl:apply-templates select="item-for-sale"/>
<xsl:if test="exists(item-for-sale)">
    <p>Total value: {accumulator-after('total-value')}</p>
</xsl:if>
```

To make this streamable, it can be rewritten using the `xsl:on-non-empty` instruction:

```xslt
<xsl:sequence>
    <xsl:on-non-empty>
        <h1>Items for Sale</h1>
    </xsl:on-non-empty>
    <xsl:apply-templates select="item-for-sale"/>
    <xsl:on-non-empty>
        <p>Total value: {accumulator-after('total-value')}</p>
    </xsl:on-non-empty>
</xsl:sequence>
```

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-on-non-empty)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/on-non-empty.html)

## См. также

-   [`xsl:on-empty`](xsl-on-empty.md)
-   [`xsl:where-populated`](xsl-where-populated.md)
