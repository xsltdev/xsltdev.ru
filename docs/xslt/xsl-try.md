---
description: In conjunction with xsl catch, the xsl try instruction allows recovery from dynamic errors occurring within the expression it wraps
---

# xsl:try

In conjunction with [`xsl:catch`](xsl-catch.md), the **`xsl:try`** instruction allows recovery from dynamic errors occurring within the expression it wraps.

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-PE and Saxon-EE since Saxon 9.6._

-   **Категория**: instruction
-   **Содержимое**: ( _sequence-constructor_ , [`xsl:catch`](xsl-catch.md), ( [`xsl:catch`](xsl-catch.md) | [`xsl:fallback`](xsl-fallback.md) )\* )
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

`select?`
: _expression_
: The expression to be evaluated by the instruction may be defined either by a `select` attribute, or by an enclosed sequence constructor.

`rollback-output?`
: _boolean_
: The value `no` is used to relax the requirement to recover result trees when failures occur in the course of evaluating the `xsl:try` instruction. The default is `yes`. (This attribute had no effect prior to Saxon 9.9.)

## Заметки по реализации Saxon

Saxon 9.9 no longer ignores the value of the `rollback-output` attribute. If set to "`no`", when the instruction is evaluated in "push" mode, the output of `xsl:try` is not buffered, but is written directly to the result destination. If a dynamic error occurs, the relevant [`xsl:catch`](xsl-catch.md) is effective only if no output has yet been written to that destination.

## Подробности

It is possible to have more than one `xsl:catch` within an `xsl:try`; the first one that matches the error is used.

Within the `xsl:catch`, a number of variables are available in the namespace `http://www.w3.org/2005/xqt-errors`:

-   `err:code` - the error code as a QName
-   `err:description` - the error description (error message)
-   `err:value` - the error object (if available)
-   `err:module` - the URI of the stylesheet module in which the error occurred
-   `err:line-number` - the line-number of the source stylesheet where the error occurred
-   `err:column-number` - for Saxon this will generally be unknown (-1)

The error can be re-thrown by using the `error()` function.

## Примеры

### Пример 1

The following example shows how to recover from an error in evaluating an XPath expression (in this case, divide-by-zero):

```xslt
<xsl:try select="salary div length-of-service">
    <xsl:catch errors="err:FAOR0001" select="()"/>
</xsl:try>
```

### Пример 2

The following example shows how to recover from an error in evaluating a sequence of XSLT instructions (in this case, a validation error):

```xslt
<xsl:try>
    <xsl:copy-of select="$result" validation="strict"/>
    <xsl:catch>
        <xsl:message>Warning: validation of result document failed:
            Error code: <xsl:value-of select="$err:code"/>
            Reason: <xsl:value-of select="$err:description"/>
        </xsl:message>
        <xsl:sequence select="$result"/>
    </xsl:catch>
</xsl:try>
```

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-try)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/try.html)

## См. также

-   [`xsl:catch`](xsl-catch.md)
-   [`xsl:fallback`](xsl-fallback.md)
