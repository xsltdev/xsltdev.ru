---
description: При обработке xsl:choose процессор поочередно вычисляет выражения, содержащиеся в атрибутах test элементов xsl:when
---

# xsl:otherwise

При обработке [`xsl:choose`](xsl-choose.md) процессор поочередно вычисляет выражения, содержащиеся в атрибутах `test` элементов [`xsl:when`](xsl-when.md), приводит их к булевому типу и выполняет содержимое первого (и только первого) элемента, тестовое выражение которого будет равно `true`. В случае если ни одно из тестовых выражений не обратилось в "истину" и в `xsl:choose` присутствует **`xsl:otherwise`**, процессор выполнит содержимое этого элемента.

## Синтаксис

```xml
<xsl:otherwise>
  <!-- Content: sequence-constructor -->
</xsl:otherwise>
```

## Описание и примеры

### Пример

```xml
<xsl:choose>
  <xsl:when test="условие1">шаблон1</xsl:when>
  <xsl:when test="условие2">шаблон2</xsl:when>
  <!-- ... -->
  <xsl:when test="условиеN">шаблонN</xsl:when>
  <xsl:otherwise>шаблонМ</xsl:otherwise>
</xsl:choose>
```

## См. также

- [`xsl:choose`](xsl-choose.md)
- [`xsl:when`](xsl-when.md)

## Ссылки

- [`xsl:otherwise`](https://developer.mozilla.org/en/XSLT/otherwise) на MDN
- [`xsl:otherwise`](https://msdn.microsoft.com/en-us/library/ms256147.aspx) на MSDN
