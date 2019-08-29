---
description: Элемент xsl:attribute-set определяет именованный набор атрибутов
---

# xsl:attribute-set

Элемент **`xsl:attribute-set`** определяет именованный набор атрибутов.

## Синтаксис

```xml
<xsl:attribute-set
	name = "имя"
	use-attribute-sets = "имена">
	<!-- Содержимое: xsl:attribute* -->
</xsl:attribute-set>
```

Атрибуты:

**`name`**
: **обязательный** атрибут, задает имя набора атрибутов.

`use-attribute-sets`
: _необязательный_ атрибут, задает перечень названий наборов атрибутов через пробел.

## Описание и примеры

Для того чтобы упростить создание в элементах целых наборов атрибутов, можно заранее определить их в элементе `xsl:attribute-set`. Обязательный атрибут `name` задает имя набора атрибутов. Элемент `xsl:attribute-set` содержит последовательность, состоящую из нуля или более элементов [`xsl:attribute`](xsl-attribute.md).

Именованные наборы атрибутов можно использовать, указывая их имена в значении атрибута `use-attribute-sets`, который может присутствовать в элементах [`xsl:element`](xsl-element.md), [`xsl:copy`](xsl-copy.md) и `xsl:attribute-set`, а также в литеральных результирующих элементах. В атрибуте `use-attribute-sets` через пробел перечисляются имена наборов атрибутов, которые должны быть использованы в данном элементе.

Включение набора атрибутов в элемент равносильно простому копированию элементов `xsl:attribute`, определенных в соответствующих элементах `xsl:attribute-set`.

### Пример 1

В следующем примере сперва создается именованный набор атрибутов `title-style`, а затем используется в правиле шаблона.

```xml
<xsl:attribute-set name="title-style">
	<xsl:attribute name="font-size">12pt</xsl:attribute>
	<xsl:attribute name="font-weight">bold</xsl:attribute>
</xsl:attribute-set>

<xsl:template match="chapter">
	<p quadding="start" xsl:use-attribute-sets="title-style">
		<xsl:value-of select="self::node()"/>
	</p>
</xsl:template>
```

### Пример 2

Предположим, что во входящем документе нам нужно вывести структуру, состоящую из элементов с именем `element`, атрибут name которых равен имени, атрибут `attr-count` — количеству атрибутов, а атрибут `node-count` — количеству дочерних узлов соответствующего элемента.

Входной документ:

```xml
<a b="1" c="2">
	<d e="3" f="4" g="5" />
</a>
```

Преобразование:

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output indent="yes" />

	<xsl:attribute-set name="attrs">
		<xsl:attribute name="attr-count">
			<xsl:value-of select="count(@*)" />
		</xsl:attribute>
	</xsl:attribute-set>

	<xsl:attribute-set name="elements">
		<xsl:attribute name="name">
			<xsl:value-of select="name()" />
		</xsl:attribute>
		<xsl:attribute name="node-count">
			<xsl:value-of select="count(*)" />
		</xsl:attribute>
	</xsl:attribute-set>

	<xsl:template match="*">
		<xsl:element name="element" use-attribute-sets="elements attrs">
			<xsl:apply-templates select="*" />
		</xsl:element>
	</xsl:template>

</xsl:stylesheet>
```

Выходной документ:

```xml
<?xml version="1.0" encoding="utf-8"?>
<element name="a" node-count="1" attr-count="2">
	<element name="d" node-count="0" attr-count="3"/>
</element>
```

В этом преобразовании определение элемента:

```xml
<xsl:element name="element" use-attribute-sets="elements attrs">
	<xsl:apply-templates select="*"/>
</xsl:element>
```

равносильно определению:

```xml
<xsl:element name="element">
	<xsl:attribute name="name">
		<xsl:value-of select="name()"/>
	</xsl:attribute>
	<xsl:attribute name="node-count">
		<xsl:value-of select="count(*)"/>
	</xsl:attribute>
	<xsl:attribute name="attr-count">
		<xsl:value-of select="count(@*)"/>
	</xsl:attribute>
	<xsl:apply-templates select="*"/>
</xsl:element>
```

Как уже было сказано, элемент `xsl:attribute-set` может также использовать другие наборы атрибутов при помощи `use-attribute-sets`. Например, в предыдущем преобразовании набор атрибутов `elements` мог быть определен как:

```xml
<xsl:attribute-set name="elements" use-attribute-sets="attrs">
	<xsl:attribute name="name">
		<xsl:value-of select="name()" />
	</xsl:attribute>
	<xsl:attribute name="node-count">
		<xsl:value-of select="count(*)" />
	</xsl:attribute>
</xsl:attribute-set>
```

Тогда для достижения того же результата элемент с именем `element` мог быть создан с использованием только одного набора атрибутов:

```xml
<xsl:element name="element" use-attribute-sets="elements">
	<xsl:apply-templates select="*" />
</xsl:element>
```

### Пример 3

```xml tab=
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="attrset.xsl" ?>
<book>
   <chapter>
      <heading>The First Heading</heading>
   </chapter>
   <chapter>
      <heading>The Next Heading</heading>
   </chapter>
</book>
```

```xslt tab=
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
      xmlns:fo="http://www.w3.org/1999/XSL/Format">

<xsl:template match="chapter/heading">
  <fo:block quadding="start" xsl:use-attribute-sets="title-style">
    <xsl:apply-templates/>
  </fo:block>
</xsl:template>

<xsl:attribute-set name="title-style">
  <xsl:attribute name="font-size">12pt</xsl:attribute>
  <xsl:attribute name="font-weight">bold</xsl:attribute>
</xsl:attribute-set>

</xsl:stylesheet>
```

```xml tab="Output"
<?xml version="1.0"?>
<fo:block font-size="12pt"
          font-weight="bold"
          quadding="start"
          xmlns:fo="http://www.w3.org/1999/XSL/Format">
The First Heading
</fo:block>
<fo:block font-size="12pt"
          font-weight="bold"
          quadding="start"
          xmlns:fo="http://www.w3.org/1999/XSL/Format">
The Next Heading
</fo:block>
```

## См. также

- [`xsl:attribute`](xsl-attribute.md) -- служит для создания узлов атрибутов.

## Ссылки

- [`xsl:attribute-set`](https://developer.mozilla.org/en/XSLT/attribute-set) на MDN
- [`xsl:attribute-set`](https://msdn.microsoft.com/en-us/library/ms256163.aspx) на MSDN
