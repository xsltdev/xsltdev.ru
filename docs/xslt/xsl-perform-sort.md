---
description: Принимает последовательность в качестве входа и производит отсортированную последовательность в качестве выхода
---

# xsl:perform-sort

Принимает последовательность в качестве входных данных и выдает отсортированную последовательность в качестве выходной.

_Доступен в XSLT 2.0 и более поздних версиях. Доступен во всех изданиях Saxon._

-   **Категория**: инструкция
-   **Содержимое**: ( [`xsl:sort`](xsl-sort.md)+ , _sequence-constructor_ )
-   **Допустимые родительские элементы**: any XSLT element whose content model is sequence-constructor; any literal result element

## Атрибуты

`select?`
: _expression_
: Входная последовательность может быть определена либо выражением в необязательном атрибуте `select`, либо вложенным конструктором последовательности.

## Подробности

Критерии сортировки задаются с помощью элементов [`xsl:sort`](xsl-sort.md) как дочерних элементов `xsl:perform-sort`, обычным способом.

Часто полезно использовать `xsl:perform-sort` внутри функции таблицы стилей; функция может возвращать отсортированную последовательность в качестве своего результата и может быть вызвана непосредственно из выражения XPath.

## Примеры

```xslt
<xsl:perform-sort select="//BOOK">
    <xsl:sort select="author/last-name"/>
    <xsl:sort select="author/first-name"/>
</xsl:perform-sort>
```

## Ссылки

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-perform-sort)
-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-perform-sort)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/perform-sort.html)

## См. также

-   [`xsl:apply-templates`](xsl-apply-templates.md)
-   [`xsl:for-each`](xsl-for-each.md)
-   [`xsl:sort`](xsl-sort.md)
