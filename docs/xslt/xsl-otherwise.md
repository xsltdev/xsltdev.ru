# xsl:otherwise

При обработке [`xsl:choose`](/xslt/xsl-choose/) процессор поочередно вычисляет выражения, содержащиеся в атрибутах `test` элементов [`xsl:when`](/xslt/xsl-when/), приводит их к булевому типу и выполняет содержимое первого (и только первого) элемента, тестовое выражение которого будет равно `true`. В случае если ни одно из тестовых выражений не обратилось в "истину" и в `xsl:choose` присутствует **`xsl:otherwise`**, процессор выполнит содержимое этого элемента.

## Синтаксис

### XSLT 1.0, XSLT 2.0 и XSLT 3.0

```xml
<xsl:otherwise>
    <!-- Content: sequence-constructor -->
</xsl:otherwise>
```

## Описание и примеры

### Пример

```xml
<xsl:choose>
    <xsl:when test="условие1">
        шаблон1
    </xsl:when>
    <xsl:when test="условие2">
        шаблон2
    </xsl:when>
    <!-- ... -->
    <xsl:when test="условиеN">
        шаблонN
    </xsl:when>
    <xsl:otherwise>
        шаблонМ
    </xsl:otherwise>
</xsl:choose>
```

## См. также

- [`xsl:choose`](/xslt/xsl-choose/)
- [`xsl:when`](/xslt/xsl-when/)

## Ссылки

- [`xsl:otherwise`](https://developer.mozilla.org/en/XSLT/otherwise) на MDN
- [`xsl:otherwise`](https://msdn.microsoft.com/en-us/library/ms256147.aspx) на MSDN
