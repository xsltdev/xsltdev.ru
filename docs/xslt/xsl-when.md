---
layout: default
title: xsl:when
nav_order: 34
parent: XSLT
---

<!-- prettier-ignore-start -->
# xsl:when
{: .no_toc }
<!-- prettier-ignore-end -->

При обработке [`xsl:choose`](/xslt/xsl-choose/) процессор поочередно вычисляет выражения, содержащиеся в атрибутах `test` элементов **`xsl:when`**, приводит их к булевому типу и выполняет содержимое первого (и только первого) элемента, тестовое выражение которого будет равно `true`.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XSLT 1.0, XSLT 2.0 и XSLT 3.0

```xml
<xsl:when
    test = "выражение">
    <!-- Содержимое: шаблон -->
</xsl:when>
```

Атрибуты:

- **`test`** — **обязательный** атрибут, от результата которого зависит, выполнится ли шаблон внутри элемента `xsl:when`

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

## См. также

- [`xsl:choose`](/xslt/xsl-choose/)
- [`xsl:otherwise`](/xslt/xsl-otherwise/)
- [`xsl:if`](/xslt/xsl-if/)

## Ссылки

- [`xsl:when`](https://developer.mozilla.org/en/XSLT/when) на MDN
- [`xsl:when`](https://msdn.microsoft.com/en-us/library/ms256164.aspx) на MSDN
