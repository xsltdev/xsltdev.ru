---
description: Элемент xsl:copy создает копию текущего узла вне зависимости от его типа
---

# xsl:copy

Элемент **`xsl:copy`** создает копию текущего узла вне зависимости от его типа.

Вместе с текущим узлом в выходящее дерево копируются только узлы пространств имен, ассоциированные с ним. Дочерние узлы и узлы атрибутов в выходящий документ не копируются.

## Синтаксис

```xml
<xsl:copy
    use-attribute-sets = "наборы атрибутов">
    <!-- Содержимое: шаблон -->
</xsl:copy>
```

Атрибуты:

`use-attribute-sets`
: _необязательный_ атрибут, задает именованные [наборы атрибутов](xsl-attribute-set.md).

## Описание и примеры

### Пример 1

Предположим, что в каждый элемент преобразовываемого документа нам нужно добавить атрибут `element-count` со значением, равным количеству его дочерних элементов, а все остальные узлы оставить, как есть.

Входящий документ:

```xml
<a>
    text
    <b attr="value" />
    <c />
    <d>
        text
        <e />
    </d>
</a>
```

Шаблон преобразования:

```xml
<xsl:template match="@*|node()">
    <xsl:copy>
        <xsl:attribute name="element-count">
            <xsl:value-of select="count(*) " />
        </xsl:attribute>
        <xsl:apply-templates select="@*|node()" />
    </xsl:copy>
</xsl:template>
```

Выходящий элемент:

```xml
<a element-count="3">
    text
    <b element-count="0" attr="value" />
    <c element-count="0" />
    <d element-count="1">
        text
        <e element-count="0" />
    </d>
</a>
```

### Пример 2

Если `xsl:copy` используется для создания в выходящем документе копии узла элемента, в него при помощи атрибута `use-attribute-sets` могут быть также включены именованные [наборы атрибутов](xsl-attribute-set.md).

Предыдущее преобразование может быть переписано в виде:

```xml
<xsl:attribute-set name="elements">
    <xsl:attribute name="element-count">
        <xsl:value-of select="count(*)" />
    </xsl:attribute>
</xsl:attribute-set>

<xsl:template match="@*|node()">
    <xsl:copy use-attribute-sets="elements">
        <xsl:apply-templates select="@*|node()" />
    </xsl:copy>
</xsl:template>
```

Результат преобразования будет абсолютно идентичен выходящему документу, полученному в примере 1.

### Пример 3

Пример показывает как атрибуты `xml:lang` могут быть легко скопированы из исходного дерева в конечное. Если в стиле определен следующий именованный шаблон:

```xml
<xsl:template name="apply-templates-copy-lang">
    <xsl:for-each select="@xml:lang">
        <xsl:copy />
    </xsl:for-each>
    <xsl:apply-templates />
</xsl:template>
```

то вместо

```xml
<xsl:apply-templates />
```

можно легко сделать

```xml
<xsl:call-template name="apply-templates-copy-lang" />
```

если необходимо скопировать атрибут `xml:lang`.

### Пример 4

```xml tab=
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="identityxfm.xsl"?>
<catalog>
    <book id="bk101">
        <author>Gambardella, Matthew</author>
        <title>XML Developer's Guide</title>
        <genre>Computer</genre>
        <price>44.95</price>
        <publish_date>2000-10-01</publish_date>
        <description>An in-depth look at creating applications with
 XML.</description>
    </book>
    <book id="bk102">
        <author>Ralls, Kim</author>
        <title>Midnight Rain</title>
        <genre>Fantasy</genre>
        <price>5.95</price>
        <publish_date>2000-12-16</publish_date>
        <description>A former architect battles corporate zombies,
 an evil sorceress, and her own childhood to become queen of the
 world.</description>
    </book>
    <book id="bk103">
        <author>Corets, Eva</author>
        <title>Maeve Ascendant</title>
        <genre>Fantasy</genre>
        <price>5.95</price>
        <publish_date>2000-11-17</publish_date>
        <description>After the collapse of a nanotechnology society
 in England, the young survivors lay the foundation for a new
society.</description>
    </book>
</catalog>
```

```xslt tab=
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

  <xsl:template match="/ | @* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
```

```xml tab="Output"
<?xml version="1.0"?><?xml-stylesheet type="text/xsl"
href="identityxfm.xsl"?><catalog><book id="bk101"><author>Gambardella,
Matthew</author><title>XML Developer's
Guide</title><genre>Computer</genre><price>44.95</price><publish_date>2000
-10-01</publish_date><description>An in-depth look at creating
applications with
XML.</description></book><book id="bk102">
...
</book></catalog>
```

## См. также

- [`xsl:copy-of`](xsl-copy-of.md)

## Ссылки

- [`xsl:copy`](https://developer.mozilla.org/en/XSLT/copy) на MDN
- [`xsl:copy`](https://msdn.microsoft.com/en-us/library/ms256128.aspx) на MSDN
