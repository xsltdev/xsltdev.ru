# current()

Функция **`current`** возвращает текущий узел преобразования.

## Синтаксис

```
node-set current()
```

## Описание и примеры

Эта функция возвращает набор узлов, единственным элементом которого является текущий узел. Для самого внешнего выражения — выражения, не встречающегося внутри другого выражения, — текущий узел всегда идентичен узлу контекста. Таким образом, выражение

```xml
<xsl:value-of select="current()"/>
```

идентично выражению

```xml
<xsl:value-of select="."/>
```

Однако, внутри квадратных скобок текущий узел обычно отличается от узла контекста. Например,

```xml
<xsl:apply-templates select="//glossary/item[@name=current()/@ref]"/>
```

обрабатывает все элементы `<item>` с родительским элементом `<glossary>` и атрибутом `name` со значением, равным значению атрибута `ref` текущего узла. В этом состоит его отличие от выражения

```xml
<xsl:apply-templates select="//glossary/item[@name=./@ref]"/>
```

со значением, идентичным значению выражения

```xml
<xsl:apply-templates select="//glossary/item[@name=@ref]"/>
```

которое будет подвергать обработке все элементы `<item>`, содержащие родительский элемент `<glossary>`, а также атрибуты `name` и `ref` с идентичными значениями.

### Пример

```xml tab="XML"
<?xml version='1.0' ?>
<?xml-stylesheet type="text/xsl" href="current.xsl" ?>
<nodes>
    <node>first</node>
    <node>1</node>
    <node>
        <obj>class</obj>
    </node>
</nodes>
```

```xslt tab="XSLT"
<?xml version='1.0' ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <xsl:apply-templates/>
</xsl:template>

<xsl:template match="text()">
    <xsl:value-of select="current()"/>
</xsl:template>

<xsl:template match="*">
    <blockquote>
        <xsl:apply-templates/>
    </blockquote>
</xsl:template>

</xsl:stylesheet>
```

```xml tab="Result"
<?xml version="1.0" encoding="UTF-16"?>
<blockquote>
    <blockquote>first</blockquote>
    <blockquote>1</blockquote>
    <blockquote>
        <blockquote>class</blockquote>
    </blockquote>
</blockquote>
```

## Ссылки

- [current()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/current) на MDN
