---
description: Элемент xsl:choose содержит один или несколько элементов xsl:when и необязательный элемент xsl:otherwise
---

# xsl:choose

Элемент **`xsl:choose`** содержит один или несколько элементов [`xsl:when`](xsl-when.md) и необязательный элемент [`xsl:otherwise`](xsl-otherwise.md).

При обработке `xsl:choose` процессор поочередно вычисляет выражения, содержащиеся в атрибутах `test` элементов `xsl:when`, приводит их к булевому типу и выполняет содержимое первого (и только первого) элемента, тестовое выражение которого будет равно `true`. В случае если ни одно из тестовых выражений не обратилось в "истину" и в `xsl:choose` присутствует `xsl:otherwise`, процессор выполнит содержимое этого элемента.

## Синтаксис

```xml
<xsl:choose>
    <!-- Содержимое: (xsl:when+, xsl:otherwise?) -->
</xsl:choose>
```

## Описание и примеры

### Пример 1

В следующем примере пункты в упорядоченном списке нумеруются с помощью арабских цифр, букв или римских цифр в зависимости от глубины вложенности упорядоченных списков.

```xml
<xsl:template match="orderedlist/listitem">
    <fo:list-item indent-start='2pi'>
        <fo:list-item-label>
            <xsl:variable name="level" select="count( ancestor::orderedlist ) mod 3" />
            <xsl:choose>
                <xsl:when test="$level = 1">
                    <xsl:number format="i" />
                </xsl:when>
                <xsl:when test="$level = 2">
                    <xsl:number format="a" />
                </xsl:when>
                <xsl:otherwise>
                    <xsl:number format="1" />
                </xsl:otherwise>
            </xsl:choose>
            <xsl:text>. </xsl:text>
        </fo:list-item-label>
        <fo:list-item-body>
            <xsl:apply-templates />
        </fo:list-item-body>
    </fo:list-item>
</xsl:template>
```

### Пример 2

```xml tab="XML"
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="refchoose.xsl" ?>
<orders>
   <order>
      <lineitem/>
      <lineitem/>
      <total>9</total>
   </order>
   <order>
      <lineitem/>
      <lineitem/>
      <total>19</total>
   </order>
   <order>
      <lineitem/>
      <lineitem/>
      <total>29</total>
   </order>
</orders>
```

```xslt tab="XSLT"
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

<xsl:template match="order">
   <xsl:choose>
      <xsl:when test="total &lt; 10">
         (small)
      </xsl:when>
      <xsl:when test="total &lt; 20">
         (medium)
      </xsl:when>
      <xsl:otherwise>
         (large)
      </xsl:otherwise>
   </xsl:choose>
   <xsl:apply-templates />
   <BR/>
</xsl:template>

</xsl:stylesheet>
```

```xml tab="Output"
(small) 9

(medium) 19

(large) 29
```

## См. также

- [`xsl:when`](xsl-when.md)
- [`xsl:otherwise`](xsl-otherwise.md)
- [`xsl:if`](xsl-if.md)

## Ссылки

- [`xsl:choose`](https://developer.mozilla.org/en/XSLT/choose) на MDN
- [`xsl:choose`](https://msdn.microsoft.com/en-us/library/ms256169.aspx) на MSDN
