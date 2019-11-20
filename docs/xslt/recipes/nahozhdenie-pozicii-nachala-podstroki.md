---
description: Требуется найти индекс позиции, с которой начинается подстрока, а не текст до или после этой подстроки
---

# Нахождение позиции начала подстроки

## Задача

Требуется найти индекс позиции, с которой начинается подстрока, а не текст до или после этой подстроки.

## Решение

XSLT 1.0

```xslt
<xsl:template name="str:index-of">
	<xsl:param name="input"/>
	<xsl:param name="substr"/>
	<xsl:choose>
		<xsl:when test="contains($input, $substr)">
			<xsl:value-of select="string-length(substring-before($input, $substr))+1"/>
		</xsl:when>
		<xsl:otherwise>0</xsl:otherwise>
	</xsl:choose>
</xsl:template>
```

XSLT 2.0

```xslt
<xsl:function name="ckbk:string-index-of">
	<xsl:param name="input"/>
	<xsl:param name="substr"/>
	<xsl:sequence select="if (contains($input, $substr)) then string-length(substring-before($input, $substr))+1 else 0"/>
</xsl:function>
```

## Обсуждение

Позиция начала подстроки – это длина предшествующей ей строки плюс 1. Если вы точно знаете, что исходная строка содержит данную подстроку, то можете просто вычислить выражение `string-length(substring-before($input, $substr)) + 1`. Но в общем случае нужно обрабатывать также случай, когда подстрока не входит в строку. Мы в этой ситуации возвращаем `0`, но можно выбрать и какой-нибудь другой индикатор, например, `-1` или `NaN`.
