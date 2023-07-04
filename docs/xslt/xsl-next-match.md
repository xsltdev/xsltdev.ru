---
description: Выбирает следующий шаблон для выполнения
---

# xsl:next-match

Выбирает следующий шаблон для выполнения.

_Доступен в XSLT 2.0 и более поздних версиях. Доступен во всех изданиях Saxon._

-   **Категория**: инструкция
-   **Содержимое**: ( [`xsl:with-param`](xsl-with-param.md) | [`xsl:fallback`](xsl-fallback.md) )\*
-   **Допустимые родительские элементы**: любой элемент XSLT, модель содержимого которого - _sequence-constructor_; любой литеральный элемент результата
-   **Элемент не имеет атрибутов**

## Подробности

Инструкция `xsl:next-match` была введена в XSLT 2.0. Она очень похожа на [`xsl:apply-imports`](xsl-apply-imports.md), но с другим алгоритмом выбора следующего шаблона для выполнения. Он выбирает правило шаблона, которое соответствует текущему узлу и которое было бы выбрано, если бы не было текущего правила шаблона и всех правил с более высоким приоритетом/приоритетом.

На практике `xsl:next-match` почти всегда предпочтительнее `xsl:apply-imports`, поскольку правила его использования гораздо более гибкие и интуитивно понятные.

## Ссылки

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-next-match)
-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-next-match)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/next-match.html)

## См. также

-   [`xsl:apply-imports`](xsl-apply-imports.md)
