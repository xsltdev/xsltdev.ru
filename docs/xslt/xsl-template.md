# xsl:template

Элемент верхнего уровня **`xsl:template`** определяет в преобразовании шаблонное правило, или просто шаблон.

## Синтаксис

### XSLT 1.0

```xml
<xsl:template
    match = "pattern"
    name = "qname"
    priority = "number"
    mode = "qname">
    <!-- Содержимое: (xsl:param*, template) -->
</xsl:template>
```

Атрибуты:

- `match` — _необязательный_ атрибут, задает паттерн — образец узлов дерева, для преобразования которых следует применять этот шаблон
- `name` — _необязательный_ атрибут, определяет имя для именованных шаблонов
- `mode` — _необязательный_ атрибут, определяет режим данного шаблонного правила. Режимы позволяют задавать различные преобразования для одних и тех же частей документа
- `priority` — _необязательный_ атрибут, используется для определения значения, которое называется приоритетом шаблонного правила. Это значение используется для разрешения конфликтов шаблонов в случае, когда один узел может быть обработан различными правилами.

### XSLT 2.0

```xml
<xsl:template
    match? = pattern
    name? = qname
    priority? = number
    mode? = tokens
    as? = sequence-type>
    <!-- Content: (xsl:param*, sequence-constructor) -->
</xsl:template>
```

### XSLT 3.0

```xml
<xsl:template
    match? = pattern
    name? = eqname
    priority? = decimal
    mode? = tokens
    as? = sequence-type
    visibility? = "public" | "private" | "final" | "abstract" >
    <!-- Content: (xsl:context-item?, xsl:param*, sequence-constructor) -->
</xsl:template>
```

## Описание и примеры

При определении шаблона нужно обязательно указать хотя бы один из атрибутов `match` или `name`, причем эти атрибуты могут присутствовать в `xsl:template` одновременно.

### Пример 1

```xml
<xsl:template match="bold">
    <b><xsl:value-of select="."/></b>
</xsl:template>
```

В этом правиле атрибут `match` говорит о том, что оно должно использоваться для обработки элементов `bold` — в данном случае они будут заменяться на элементы `b`. Шаблоны, в которых определен атрибут `match`, вызываются при помощи инструкции [`xsl:apply-templates`](/xslt/xsl-apply-templates/).

Именованные шаблоны могут вызываться вне зависимости от текущего контекста, и даже вести себя как функции — принимать на вход параметры и возвращать некоторые значения.

### Пример 2

```xml
<xsl:template name="bold">
    <b><xsl:value-of select="."/></b>
</xsl:template>
```

В отличие от предыдущего примера, это правило не будет обрабатывать какие-либо определенные узлы. Вызвать его можно будет только по имени посредством элемента [`xsl:call-template`](/xslt/xsl-call-template/).

Атрибуты шаблонного правила не влияют на выполнение его содержимого. Они используются элементами `xsl:apply-templates` и `xsl:call-template` при выборе шаблонов. Правила, которые были импортированы в преобразование, вызываются элементом [`xsl:apply-imports`](/xslt/xsl-apply-imports/).

### Ссылки

- [`xsl:template`](https://developer.mozilla.org/en/XSLT/template) на MDN
- [`xsl:template`](https://msdn.microsoft.com/en-us/library/ms256110.aspx) на MSDN
