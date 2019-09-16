# exsl​:node-set()

**`exsl:node-set()`** возвращает набор узлов из фрагмента результирующего дерева. Это позволяет обрабатывать XML, созданный в переменной, в несколько этапов.

Вы также можете использовать `exsl:node-set()`, чтобы превратить строки в текстовые узлы.

Поддержка браузерами:

- Mozilla Firefox 1.9+

## Синтаксис

```
exsl:node-set(object)
```

- `object` — объект, для которого нужно вернуть соответствующий набор узлов.

Возвращает набор узлов, соответствующий указанному объекту.

## Примеры

```xml tab="XML"
<doc>
	<one />
	<two />
	<three />
	<four />
</doc>
```

```xslt tab="XSLT"
<!--  Test exslt:node-set applied to a result tree fragment  -->
<xsl:variable name="tree">
	<a>
		<b>
			<c>
				<d />
			</c>
		</b>
	</a>
</xsl:variable>
<xsl:template match="/">
	<out>
		<xsl:value-of select="count(exslt:node-set(//*))" />
	</out>
</xsl:template>
```

```xml tab="Result"
<out xmlns:exslt="http://exslt.org/common">5</out>
```

## Ссылки

- [exsl​:node-set()](https://developer.mozilla.org/en-US/docs/Web/EXSLT/exsl/node-set) на MDN
- [Спецификация exsl​:node-set()](http://exslt.org/exsl/functions/node-set/index.html)
