---
description: Позволяет пакету ограничить видимость компонентов, открытых пакетом, который он использует.
---

# xsl:accept

Позволяет пакету ограничить видимость компонентов, открываемых пакетом, который он использует.

Всегда появляется как дочерний элемент [`xsl:use-package`](xsl-use-package.md).

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех редакциях. Реализовано в Saxon-EE начиная с Saxon 9.7._

-   **Содержимое**: нет
-   **Допустимые родительские элементы**: [`xsl:use-package`](xsl-use-package.md)

## Атрибуты

**`component`**
: `"template" | "function" | "attribute-set" | "variable" | "mode" | "*"`
: Определяет вид выбранного компонента.

**`names`**
: _tokens_
: Идентифицирует подмножество указанных компонентов по имени.

**`visibility`**
: `"public" | "private" | "final" | "abstract" | "hidden"`
: Определяет потенциальную видимость выбранных компонентов.

## Заметки по реализации Saxon

Новый в XSLT 3.0 и реализованный начиная с Saxon 9.7.

## Пример

```xslt
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Use package with name "example" -->
  <xsl:use-package name="example">
    <!-- Limit visibility of template "foo" -->
    <xsl:accept component="template" names="foo" visibility="private"/>
    <!-- Limit visibility of function "bar" -->
    <xsl:accept component="function" names="bar" visibility="private"/>
  </xsl:use-package>

  <!-- The rest of the style -->
</xsl:stylesheet>
```

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-accept)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/accept.html)

## См. также

-   [`xsl:override`](xsl-override.md)
-   [`xsl:use-package`](xsl-use-package.md)
