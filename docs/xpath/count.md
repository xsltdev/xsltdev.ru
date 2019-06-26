---
layout: default
title: count
nav_order: 5
parent: XPath
---

<!-- prettier-ignore-start -->
# count()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`count`** возвращает число узлов в наборе узлов.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
number count( node-set )
```

## Описание и примеры

### Пример

XML-файл (test.xml)

```xml
<?xml version="1.0"?>
<test>
    <x a="1">
        <x a="2">
        <x>
            <y>y31</y>
            <y>y32</y>
        </x>
        </x>
    </x>
    <x a="1">
        <x a="2">
        <y>y21</y>
        <y>y22</y>
        </x>
    </x>
    <x a="1">
        <y>y11</y>
        <y>y12</y>
    </x>
    <x>
        <y>y03</y>
        <y>y04</y>
    </x>
</test>
```

XSLT-файл (test.xsl)

```xml
<?xml version='1.0'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="text" />

    <xsl:template match="/">
        //x,         <xsl:value-of select="count(//x)"/>
        //x[1],      <xsl:value-of select="count(//x[1])"/>
        //x/y,       <xsl:value-of select="count(//x/y)"/>
        //x/y[1],    <xsl:value-of select="count(//x/y[1])"/>
        //x[1]/y[1], <xsl:value-of select="count(//x[1]/y[1])"/>
    </xsl:template>

</xsl:stylesheet>
```

Таблица стилей XSLT, примененная к вышеуказанному XML-файлу, дает следующий результат:

```
node-set count(node-set)

//x, 7
//x[1], 4
//x/y, 8
//x/y[1], 4
//x[1]/y[1], 2
```

## Ссылки

- [count()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/count) на MDN
- [count()](<https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms256103(v%3dvs.100)>) на MSDN
