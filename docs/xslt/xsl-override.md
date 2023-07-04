---
description: Позволяет использующему пакету переопределять выбранные компоненты из используемого пакета
---

# xsl:override

Позволяет использующему пакету переопределять выбранные компоненты из используемого пакета.

Всегда появляется как дочерний элемент [`xsl:use-package`](xsl-use-package.md).

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех редакциях. Реализовано в Saxon-EE начиная с Saxon 9.7._

-   **Содержимое**: ( [`xsl:template`](xsl-template.md) | [`xsl:function`](xsl-function.md) | [`xsl:variable`](xsl-variable.md) | [`xsl:param`](xsl-param.md) | [`xsl:attribute-set`](xsl-attribute-set.md) )`*`
-   **Допустимые родительские элементы**: [`xsl:use-package`](xsl-use-package.md)
-   **Элемент не имеет атрибутов**

## Заметки

Новинка в XSLT 3.0 и впервые полностью реализована в Saxon 9.7.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-override)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/override.html)

## См. также

-   [`xsl:accept`](xsl-accept.md)
-   [`xsl:use-package`](xsl-use-package.md)
