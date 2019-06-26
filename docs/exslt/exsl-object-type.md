# exsl​:object-type()

**`exsl:object-type()`** возвращает строку, которая указывает тип переданного объекта.

Поддержка браузерами:

- Mozilla Firefox 1.9+

## Синтаксис

```
exsl:object-type(object)
```

- `object` &mdash; объект, тип которого должен быть возвращен.

Возвращает тип объекта:

- `string` &mdash; строка
- `number` &mdash; число
- `boolean` &mdash; логическое значение
- `node-set` &mdash; набор узлов
- `RTF` &mdash; результирующий фрагмент дерева
- `external` &mdash; внешний тип

## Пример

```xml
<doc />
```

```xml
<!--  Test exslt:object-type  -->
<xsl:variable name="tree">
	<a>
		<b>
			<c>
				<d />
			</c>
		</b>
	</a>
</xsl:variable>
<xsl:variable name="string" select="'fred'" />
<xsl:variable name="number" select="93.7" />
<xsl:variable name="boolean" select="true()" />
<xsl:variable name="node-set" select="//*" />
<xsl:template match="/">
	<out>
	:
	<xsl:value-of select="exslt:object-type($string)" />
	;
	<xsl:value-of select="exslt:object-type($number)" />
	;
	<xsl:value-of select="exslt:object-type($boolean)" />
	;
	<xsl:value-of select="exslt:object-type($node-set)" />
	;
	<xsl:value-of select="exslt:object-type($tree)" />
	;
	<xsl:if test="function-available('saxon:expression')"
	xmlns:saxon="http://icl.com/saxon">
	<xsl:value-of select="exslt:object-type(saxon:expression('item'))" />
	</xsl:if>
	;

	</out>
</xsl:template>
```

```xml
<out xmlns:exslt="http://exslt.org/common">:
	string;
	number;
	boolean;
	node-set;
	RTF;
	external;
</out>
```

## Ссылки

- [exsl​:object-type()](https://developer.mozilla.org/en-US/docs/Web/EXSLT/exsl/object-type) на MDN
- [Спецификация exsl​:object-type()](https://developer.mozilla.org/en-US/docs/Web/EXSLT/exsl/object-type)
