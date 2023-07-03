---
description: Occurs within xsl iterate to define processing to be carried out when the input sequence is exhausted
---

# xsl:on-completion

Occurs within [`xsl:iterate`](xsl-iterate.md) to define processing to be carried out when the input sequence is exhausted.

_Available in XSLT 3.0. From Saxon 9.8, available in all editions. Implemented in Saxon-PE and Saxon-EE since Saxon 9.6._

-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: [`xsl:iterate`](xsl-iterate.md)

## Атрибуты

`select?`
: _expression_
: The effect of the instruction may be defined either by an expression within the optional `select` attribute, or by the enclosed sequence constructor.

## Заметки по реализации Saxon

The rule that `xsl:on-completion` executes with no context item was first implemented in Saxon 9.8.

In earlier working drafts of XSLT 3.0, the `xsl:on-completion` element came last in the body of the [`xsl:iterate`](xsl-iterate.md) instruction. This caused problems with the scope of local variables, so in the final Recommendation, `xsl:on-completion` comes first. The new rule was implemented in Saxon 9.7. The spec has also changed to clarify that `xsl:on-completion` is evaluated if the input sequence to `xsl:iterate` is empty.

## Подробности

During execution of `xsl:on-completion` there is no context item, position or size; the instruction has access to the iteration parameters with the values given on the last iteration (or the initial values of the [`xsl:param`](xsl-param.md) elements if the input sequence was empty). For further details see `xsl:iterate`.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-on-completion)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/on-completion.html)

## См. также

-   [`xsl:iterate`](xsl-iterate.md)
