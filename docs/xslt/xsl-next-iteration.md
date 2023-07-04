---
description: Инструкция xsl next-iteration выполняется внутри xsl iterate
---

# xsl:next-iteration

Инструкция **`xsl:next-iteration`** встречается внутри [`xsl:iterate`](xsl-iterate.md). Ее содержимое представляет собой набор элементов [`xsl:with-param`](xsl-with-param.md), определяющих значения параметров итерации, которые будут использоваться на следующей итерации.

За инструкцией `xsl:next-iteration` не должны следовать дальнейшие инструкции, хотя она может встречаться как последняя в ветви условного элемента. Она должна лексически появляться внутри инструкции `xsl:iterate` (а не, например, в вызываемом шаблоне или функции).

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех изданиях. Реализовано в Saxon-PE и Saxon-EE начиная с Saxon 9.6._

-   **Категория**: инструкция
-   **Содержимое**: ( [`xsl:with-param`](xsl-with-param.md)\* )
-   **Допустимые родительские элементы**: любой элемент XSLT, модель содержимого которого - _sequence-constructor_; любой литеральный элемент результата
-   **Элемент не имеет атрибутов**

## Подробности

Подробности смотрите в [`xsl:iterate`](xsl-iterate.md).

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-next-iteration)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/next-iteration.html)

## См. также

-   [`xsl:iterate`](xsl-iterate.md)
