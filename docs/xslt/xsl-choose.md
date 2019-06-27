# xsl:choose

Элемент **`xsl:choose`** содержит один или несколько элементов [`xsl:when`](/xslt/xsl-when/) и необязательный элемент [`xsl:otherwise`](/xslt/xsl-otherwise/).

При обработке `xsl:choose` процессор поочередно вычисляет выражения, содержащиеся в атрибутах `test` элементов `xsl:when`, приводит их к булевому типу и выполняет содержимое первого (и только первого) элемента, тестовое выражение которого будет равно `true`. В случае если ни одно из тестовых выражений не обратилось в "истину" и в `xsl:choose` присутствует `xsl:otherwise`, процессор выполнит содержимое этого элемента.

## Синтаксис

### XSLT 1.0, XSLT 2.0 и XSLT 3.0

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

## См. также

- [`xsl:when`](/xslt/xsl-when/)
- [`xsl:otherwise`](/xslt/xsl-otherwise/)
- [`xsl:if`](/xslt/xsl-if/)

## Ссылки

- [`xsl:choose`](https://developer.mozilla.org/en/XSLT/choose) на MDN
- [`xsl:choose`](https://msdn.microsoft.com/en-us/library/ms256169.aspx) на MSDN
