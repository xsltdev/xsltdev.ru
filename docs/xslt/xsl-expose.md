---
description: Используется для изменения видимости выбранных компонентов в пакете
---

# xsl:expose

Используется для изменения видимости выбранных компонентов в пакете.

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех редакциях. Реализовано в Saxon-PE и Saxon-EE начиная с Saxon 9.7._

-   **Содержимое**: нет
-   **Допустимые родительские элементы**: [`xsl:package`](xsl-package.md)

## Атрибуты

**`component`**
: `"template" | "function" | "attribute-set" | "variable" | "mode" | "*"`
: Определяет тип выбранного компонента.

**`names`**
: _tokens_
: Идентифицирует подмножество указанных компонентов по имени.

**`visibility`**
: `"public" | "private" | "final" | "abstract"`
: Определяет внешнюю видимость выбранных компонентов.

## Заметки по реализации Saxon

Новый в XSLT 3.0 и реализованный начиная с Saxon 9.7.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-expose)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/expose.html)

## См. также

-   [`xsl:package`](xsl-package.md)
