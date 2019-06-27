# xsl:copy

Элемент **`xsl:copy`** создает копию текущего узла вне зависимости от его типа.

Вместе с текущим узлом в выходящее дерево копируются только узлы пространств имен, ассоциированные с ним. Дочерние узлы и узлы атрибутов в выходящий документ не копируются.

## Синтаксис

### XSLT 1.0

```xml
<xsl:copy
    use-attribute-sets = "наборы атрибутов">
    <!-- Содержимое: шаблон -->
</xsl:copy>
```

Атрибуты:

- `use-attribute-sets` — _необязательный_ атрибут, задает именованные [наборы атрибутов](/xslt/xsl-attribute-set/).

### XSLT 2.0

```xml
<xsl:copy
    copy-namespaces = "yes | no"
    inherit-namespaces = "yes | no"
    use-attribute-sets = "qnames"
    type = "qname"
    validation = "strict | lax | preserve | strip">
    <!-- Content: sequence-constructor -->
</xsl:copy>
```

Атрибуты:

- `use-attribute-sets` — _необязательный_ атрибут, перечисляет один или несколько наборов атрибутов, которые должны использоваться элементом. Если вы задаете более одного набора, разделите их имена символами-пропусками. За дополнительной информацией обращайтесь к описанию элемента [`<xsl:attribute-set>`](/xslt/xsl-attribute-set/).
- `copy-namespaces` — _необязательный_ атрибут, определяет, должны ли копироваться пространства имен. Применяется только при копировании узлов элементов. Допустимые значения: `yes` (используется по умолчанию) и `no`.
- `inherit-namespaces` — _необязательный_ атрибут, определяет, должны ли элемент и его дочерние элементы наследовать текущие узлы пространств имен. Допустимые значения: `yes` (используется по умолчанию) и `no`.
- `type` — _необязательный_ атрибут, определяет тип данных копируемого элемента. Им может быть любой из встроенных типов данных или же тип данных, определенный в схеме (при использовании схемосовместимого процессора XSLT 2.0). Атрибуты `type` и `validation` являются взаимоисключающими.
- `validation` — _необязательный_ атрибут, определяет способ проверки значения нового атрибута. Атрибут `validation` имеет четыре допустимых значения: `strict`, `lax`, `preserve` и `strip`. Атрибут `validation="strict"` означает, что процессор XSLT должен искать во всех объявленных схемах глобальное объявление атрибута или элемента (`<xs:attribute>` или `<xs:element>`) с таким же именем, как у копируемого узла. Если процессору не удается найти подходящее объявление, происходит фатальная ошибка. Если же процессор находит объявление узла, он проверяет по нему значение копируемого узла. Значение `validation="lax"` работает аналогично `validation="strict"`, но если процессору не удается найти объявление копируемого узла ни в одной из объявленных схем, ошибка не происходит. В этом случае элемент имеет обозначение типа `xs:untyped`. Эффект значения `validation="preserve"` зависит от типа копируемого узла. Если копируемый узел является атрибутом, его обозначение типа сохраняется. Для узлов элементов скопированный узел имеет обозначение типа `xs:anyType`. Обозначения типов всех узлов, содержащихся в копируемом элементе, сохраняются. Проверка по схеме не производится. Значение `validation="strip"` заменяет обозначения типа копируемых узлов атрибутов и элементов на `xs:untypedAtomic` и `xs:untyped` соответственно. У всех узлов атрибутов и элементов, содержащихся в копируемом узле, обозначения типов заменяются на `xs:untypedAtomic` и `xs:untyped` соответственно. Атрибуты `validation` и `type` являются взаимоисключающими.

### XSLT 3.0

```xml
<xsl:copy
    select = "expression"
    copy-namespaces = "boolean"
    inherit-namespaces = "boolean"
    use-attribute-sets = "eqnames"
    type = "eqname"
    validation = "strict | lax | preserve | strip"
    on-empty = "expression" >
    <!-- Content: sequence-constructor -->
</xsl:copy>
```

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

Если `xsl:copy` используется для создания в выходящем документе копии узла элемента, в него при помощи атрибута `use-attribute-sets` могут быть также включены именованные [наборы атрибутов](/xslt/xsl-attribute-set/).

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

## См. также

- [`xsl:copy-of`](/xslt/xsl-copy-of/)

## Ссылки

- [`xsl:copy`](https://developer.mozilla.org/en/XSLT/copy) на MDN
- [`xsl:copy`](https://msdn.microsoft.com/en-us/library/ms256128.aspx) на MSDN
