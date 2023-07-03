---
description: Используется для построения новой карты
---

# xsl:map

Используется для построения новой карты.

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех редакциях. Реализовано в Saxon-PE и Saxon-EE начиная с Saxon 9.6._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element
-   **Element has no attributes**

## Подробности

Конструктор последовательности должен оценивать последовательность карт. Они могут быть построены с помощью элементов [`xsl:map-entry`](xsl-map-entry.md).

## Примеры

### Пример 1

```xslt
<xsl:variable name="week" as="map(xs:string, xs:string)">
    <xsl:map>
        <xsl:map-entry key="'Mo'" select="'Monday'"/>
        <xsl:map-entry key="'Tu'" select="'Tuesday'"/>
        <xsl:map-entry key="'We'" select="'Wednesday'"/>
        <xsl:map-entry key="'Th'" select="'Thursday'"/>
        <xsl:map-entry key="'Fr'" select="'Friday'"/>
        <xsl:map-entry key="'Sa'" select="'Saturday'"/>
        <xsl:map-entry key="'Su'" select="'Sunday'"/>
    </xsl:map>
</xsl:variable>
```

### Пример 2

```xslt
<xsl:variable name="index" as="map(xs:string, element(employee))">
    <xsl:map>
        <xsl:for-each select="//employee">
            <xsl:map-entry key="@empNr" select="."/>
        </xsl:for-each>
    </xsl:map>
</xsl:variable>
```

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-map)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/map.html)

## См. также

-   [`xsl:map-entry`](xsl-map-entry.md)
