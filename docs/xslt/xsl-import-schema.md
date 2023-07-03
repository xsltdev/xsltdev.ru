---
description: Используется для идентификации схемы, содержащей определения типов, на которые ссылается таблица стилей
---

# xsl:import-schema

Используется для идентификации схемы, содержащей определения типов, на которые ссылается таблица стилей.

_Доступно в XSLT 2.0 и более поздних версиях. Требуется Saxon-EE._

-   **Категория**: declaration
-   **Содержимое**: `xs:schema?`
-   **Допустимые родительские элементы**: [`xsl:package`](xsl-package.md); [`xsl:stylesheet`](xsl-stylesheet.md); [`xsl:transform`](xsl-transform.md)

## Атрибуты

`namespace?`
: _uri_
: Указывает целевое пространство имен импортируемой схемы. Атрибут следует опустить при импорте схемы без целевого пространства имен.

`schema-location?`
: _uri_
: Указывает, где можно найти документ схемы. Этот URI передается через `URIResolver` таким же образом, как и URI, используемые в [`xsl:include`](xsl-include.md) и [`xsl:import`](xsl-import.md). Атрибут может быть опущен только в том случае, если схема для требуемого пространства имен уже загружена в `Конфигурацию`, например, если она уже была импортирована из другого модуля таблиц стилей.

## Заметки по реализации Saxon

Объявление `xsl:import-schema` требует процессора с поддержкой схем, поэтому доступно только в Saxon-EE. Для получения дополнительной информации см. раздел Обработка схем.

## Ссылки

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-import-schema)
-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-import-schema)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/import-schema.html)

## См. также

-   [`xsl:include`](xsl-include.md)
-   [`xsl:import`](xsl-import.md)
