---
description: Инструкция xsl break используется внутри xsl iterate и вызывает преждевременное завершение до того, как будет обработана вся входная последовательность.
---

# xsl:break

Инструкция **`xsl:break`** используется внутри [`xsl:iterate`](xsl-iterate.md) и вызывает преждевременное завершение до обработки всей входной последовательности. Если есть атрибут `select` или содержащийся конструктор последовательности, он оценивается и добавляется к результату содержащей инструкции [`xsl:iterate`](xsl-iterate.md).

За инструкцией `xsl:break` не должны следовать дальнейшие инструкции, хотя она может встречаться как последняя в ветви условного элемента. Она должна лексически появляться внутри инструкции `xsl:iterate` (а не, например, в вызываемом шаблоне или функции).

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех изданиях. Реализовано в Saxon-PE и Saxon-EE начиная с Saxon 9.6._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

`select?`
: _expression_
: Эффект инструкции может быть определен либо атрибутом select, либо вложенным конструктором последовательности.

## Подробности

Подробности смотрите в [`xsl:iterate`](xsl-iterate.md).

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-break)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/break.html)

## См. также

-   [`xsl:iterate`](xsl-iterate.md)
