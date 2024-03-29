---
description: Применяет регулярное выражение к заданному строковому значению
---

# xsl:analyze-string

Применяет регулярное выражение к заданному строковому значению.

_Доступно в XSLT 2.0 и более поздних версиях. Доступен во всех изданиях Saxon._

-   **Категория**: инструкция
-   **Содержимое**: ( [`xsl:matching-substring`](xsl-matching-substring.md)?, [`xsl:non-matching-substring`](xsl-non-matching-substring.md)?, [`xsl:fallback`](xsl-fallback.md)\* )
-   **Допустимые родительские элементы**: любой элемент XSLT, модель содержимого которого - _sequence-constructor_; любой литеральный элемент результата

## Атрибуты

**`select`**
: _expression_
: Выражение XPath, значением которого является анализируемая строка.

**`regex`**
: _{ string }_
: Регулярное выражение, которое может быть задано в качестве шаблона значения атрибута.

`flags?`
: _{ string }_
: Один или несколько Perl-подобных флагов для управления способом, которым выполняется сопоставление регулярных выражений, например, значение `m` указывает на многострочный режим.

## Заметки по реализации Saxon

XSLT 3.0 снимает ограничение на то, что регулярное выражение не должно соответствовать строке нулевой длины, так что теперь это разрешено, начиная с Saxon 9.6.

Saxon позволяет атрибуту `flags` содержать "`;j`" или "`;n`" в конце, чтобы указать, что механизм регулярных выражений Java или .NET должен использоваться предпочтительно, чем собственный механизм регулярных выражений Saxon. При использовании этой опции правилами для регулярных выражений будут правила из Java или .NET, а не правила, определяемые XPath.

## Подробности

Элемент `xsl:analyze-string` применяет регулярное выражение к заданному строковому значению. Строка разбивается на последовательность подстрок, каждая из которых классифицируется либо как совпадающая (если она соответствует регулярному выражению), либо как не совпадающая (если не соответствует). Затем подстроки обрабатываются по отдельности: совпадающие подстроки - элементом [`xsl:matching-substring`](xsl-matching-substring.md), который появляется как дочерний элемент инструкции `xsl:analyze-string`, несовпадающие подстроки - аналогичным элементом [`xsl:non-matching-substring`](xsl-non-matching-substring.md). Если один из этих элементов опущен, соответствующие подстроки не обрабатываются.

При обработке совпадающих подстрок можно вызвать функцию `regex-group()`, чтобы найти части совпадающей подстроки, которые соответствуют определенным группам в круглых скобках в регулярном выражении.

## Примеры

[Примеры](http://www.w3.org/TR/xslt-30/#regex-examples) этого элемента можно найти в спецификации XSLT 3.0.

## Ссылки

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-analyze-string)
-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-analyze-string)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/analyze-string.html)

## См. также

-   [`xsl:matching-substring`](xsl-matching-substring.md)
-   [`xsl:non-matching-substring`](xsl-non-matching-substring.md)
