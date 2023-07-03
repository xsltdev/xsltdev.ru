---
description: Used to allow conditional content construction to be made streamable
---

# xsl:where-populated

Used to allow conditional content construction to be made streamable. Used to avoid outputting a wrapper element if it would have no children.

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-PE and Saxon-EE since Saxon 9.7._

-   **Категория**: instruction
-   **Содержимое**: sequence-constructor
-   **Допустимые родительские элементы**: any XSLT element whose content model is sequence-constructor; any literal result element
-   **Element has no attributes**

## Заметки по реализации Saxon

New in XSLT 3.0, and implemented since Saxon 9.7.

## Подробности

The contained sequence constructor is evaluated in the usual way, but any item in the result of the sequence constructor that is "deemed empty" is discarded. Examples of items that are "deemed empty" are elements with no children (even if they have attributes), and nodes and atomic values whose string value is zero-length. Document nodes are deemed empty if they have no children, as are empty maps and arrays. Text nodes containing whitespace are NOT deemed empty.

The most common use case is for the instruction to have a single child instruction, which creates an element node; the element node is discarded if it has no content.

Although the instruction was invented to help make code streamable, it can be equally handy in non-streaming applications.

## Примеры

The following code generates a wrapper element for a non-empty sequence, however it is not guaranteed-streamable because it processes child `event` elements more than once:

```xslt
<xsl:if test="exists(event)">
    <events>
        <xsl:copy-of select="event"/>
    </events>
</xsl:if>
```

To make this streamable, it can be rewritten using the `xsl:where-populated` instruction:

```xslt
<xsl:where-populated>
    <events>
        <xsl:copy-of select="event"/>
    </events>
</xsl:where-populated>
```

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-where-populated)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/where-populated.html)

## См. также

-   [`xsl:on-empty`](xsl-on-empty.md)
-   [`xsl:on-non-empty`](xsl-on-non-empty.md)
