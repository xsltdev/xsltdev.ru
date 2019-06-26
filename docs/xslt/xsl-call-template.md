---
layout: default
title: xsl:call-template
nav_order: 5
parent: XSLT
---

<!-- prettier-ignore-start -->
# xsl:call-template
{: .no_toc }
<!-- prettier-ignore-end -->

Элемент **`xsl:call-template`** вызывает шаблон по имени, он содержит обязательный атрибут `name`, идентифицирующий шаблон, который должен быть вызван.

В отличие от [`xsl:apply-templates`](/xslt/xsl-apply-templates/), `xsl:call-template` не меняет текущий узел и текущий набор узлов.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XSLT 1.0, XSLT 2.0 и XSLT 3.0

```xml
<xsl:call-template
    name = "имя">
    <!-- Содержимое: xsl:with-param* -->
</xsl:call-template>
```

Атрибуты:

- **`name`** — **обязательный** атрибут, задает имя шаблона, который вызывается этой инструкцией. Атрибут `name` при вызове обязан иметь фиксированное значение.

## Описание и примеры

### Пример 1

Входящий документ:

```xml
<content>
    Just a few words...
</content>
```

Преобразование:

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <xsl:call-template name="head" />
            <body>
                <xsl:copy-of select="content/node()"/>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="head">
        <head>
            <meta name="keywords" content="XSLT, XPath, XML" />
            <meta name="description" content="This site is dedicated to XSLT and Xpath." />
            <title>XSLTdev.ru - XSLT developer resource</title>
            <link rel="stylesheet" type="text/css" href="style/main.css" />
        </head>
    </xsl:template>

</xsl:stylesheet>
```

Выходящий документ:

```xml
<html>
    <head>
        <meta name="keywords" content="XSLT, XPath, XML">
        <meta name="description" content="This site is dedicated to XSLT and Xpath.">
        <title>XSLTdev.ru - XSLT developer resource</title>
        <link rel="stylesheet" type="text/css" href="style/main.css">
    </head>
    <body>Just a few words...</body>
</html>
```

### Пример 2

В принципе именованные шаблоны не обязаны иметь атрибут `match`, но он все же может быть определен. В этом случае шаблон можно будет применять как для обработки частей документов элементом [`xsl:apply-templates`](/xslt/xsl-apply-templates/), так и вызывая его по имени элементом `xsl:call-template`.

Изменим объявление нашего шаблона `head` следующим образом:

```xml
<xsl:template name="head" match="head">
    ...
</xsl:template>
```

Теперь, если входящий документ будет иметь вид:

```xml
<page>
    <head/>
    <content>Just a few words...</content>
</page>
```

то результат выполнения следующих двух шаблонов будет одинаков.

Шаблон для `page` — версия 1:

```xml
<xsl:template match="page">
    <html>
        <xsl:apply-templates select="head" />
        <body>
            <xsl:copy-of select="content/node()" />
        </body>
    </html>
</xsl:template>
```

Шаблон для page — версия 2:

```xml
<xsl:template match="page">
    <html>
        <xsl:call-template name="head"/>
        <body>
            <xsl:copy-of select="content/node()" />
        </body>
    </html>
</xsl:template>
```

В XSLT 2.0 правила передачи параметров шаблонам слегка изменились:

- В XSLT 1.0 шаблону можно было передать любое количество параметров; лишние параметры (т. е. параметры, не определенные в вызываемом шаблоне) игнорировались. В XSLT 2.0 это приводит к фатальной ошибке.
- В XSLT 2.0 элемент [`<xsl:param>`](/xslt/xsl-param/) поддерживает атрибут `required`. Вызов шаблона без передачи значений всех обязательных параметров приводит к фатальной ошибке.
- В XSLT 2.0 появилась концепция туннельных параметров.

## См. также

- [`xsl:apply-templates`](/xslt/xsl-apply-templates/) -- применяет шаблонные правила к узлам.
- [`xsl:with-param`](/xslt/xsl-with-param/) -- связывает с именем параметра значение.

## Ссылки

- [`xsl:call-template`](https://developer.mozilla.org/en/XSLT/call-template) на MDN
- [`xsl:call-template`](https://msdn.microsoft.com/en-us/library/ms256487.aspx) на MSDN
