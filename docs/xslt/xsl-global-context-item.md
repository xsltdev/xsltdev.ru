---
description: Используется для объявления того, требуется ли элемент глобального контекста, и если да, то для объявления его требуемого типа
---

# xsl:global-context-item

Используется для объявления того, требуется ли элемент глобального контекста, и если да, то для объявления его требуемого типа.

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступно во всех редакциях. Требуется Saxon-PE или Saxon-EE. Реализовано с версии Saxon 9.7._

-   **Категория**: declaration
-   **Содержимое**: нет
-   **Допустимые родительские элементы**: [`xsl:package`](xsl-package.md); [`xsl:stylesheet`](xsl-stylesheet.md); [`xsl:transform`](xsl-transform.md)

## Атрибуты

`as?`
: _item-type_
: Требуемый тип элемента глобального контекста; по умолчанию `item()`.

`use?`
: `"required" | "optional" | "absent"`
: Определяет, требуется ли модулю таблицы стилей глобальный контекстный элемент; по умолчанию `optional`.

## Заметки по реализации Saxon

Реализовано начиная с версии Saxon 9.7.

В раннем проекте спецификации XSLT 3.0 для `xsl:global-context-item` были определены атрибуты `streamable` и `use-accumulators` (для определения того, какие аккумуляторы доступны в документе, содержащем элемент глобального контекста). Они были ненадолго реализованы в Saxon, но теперь от них отказались.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-global-context-item)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/global-context-item.html)
