---
description: Элемент xsl:call-template вызывает шаблон по имени, он содержит обязательный атрибут name, идентифицирующий шаблон, который должен быть вызван
---

# xsl:call-template

Элемент **`xsl:call-template`** вызывает шаблон по имени, он содержит обязательный атрибут `name`, идентифицирующий шаблон, который должен быть вызван.

В отличие от [`xsl:apply-templates`](xsl-apply-templates.md), `xsl:call-template` не меняет текущий узел и текущий набор узлов.

## Синтаксис

```xml
<xsl:call-template name="имя">
  <!-- Содержимое: xsl:with-param* -->
</xsl:call-template>
```

Атрибуты:

**`name`**
: **обязательный** атрибут, задает имя шаблона, который вызывается этой инструкцией. Атрибут `name` при вызове обязан иметь фиксированное значение.

## Описание и примеры

### Пример 1

=== "XML"

    ```xml
    <content>Just a few words...</content>
    ```

=== "XSLT"

    ```xml
    <xsl:stylesheet
      version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    >
      <xsl:template match="/">
        <html>
          <xsl:call-template name="head" />
          <body>
            <xsl:copy-of select="content/node()" />
          </body>
        </html>
      </xsl:template>
      <xsl:template name="head">
        <head>
          <meta name="keywords" content="XSLT, XPath, XML" />
          <meta
            name="description"
            content="This site is dedicated to XSLT and Xpath."
          />
          <title>XSLTdev.ru - XSLT developer resource</title>
          <link
            rel="stylesheet"
            type="text/css"
            href="style/main.css"
          />
        </head>
      </xsl:template>
    </xsl:stylesheet>
    ```

=== "Результат"

    ```html
    <html>
      <head>
        <meta name="keywords" content="XSLT, XPath, XML" />
        <meta
          name="description"
          content="This site is dedicated to XSLT and Xpath."
        />
        <title>XSLTdev.ru - XSLT developer resource</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="style/main.css"
        />
      </head>
      <body>
        Just a few words...
      </body>
    </html>
    ```

### Пример 2

В принципе именованные шаблоны не обязаны иметь атрибут `match`, но он все же может быть определен. В этом случае шаблон можно будет применять как для обработки частей документов элементом [`xsl:apply-templates`](xsl-apply-templates.md), так и вызывая его по имени элементом `xsl:call-template`.

Изменим объявление нашего шаблона `head` следующим образом:

```xml
<xsl:template name="head" match="head">...</xsl:template>
```

Теперь, если входящий документ будет иметь вид:

```xml
<page>
  <head />
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
    <xsl:call-template name="head" />
    <body>
      <xsl:copy-of select="content/node()" />
    </body>
  </html>
</xsl:template>
```

### Пример 3

=== "XML"

    ```xml
    <?xml version="1.0" ?>
    <?xml-stylesheet type="text/xsl" href="topic.xsl"?>
    <topic name="My_topic" title="My Topic">
      <meta>
        <owner>
          <name>Jane</name>
          <email>jane@topicfactory.com</email>
          <since />
        </owner>
        <history>
          <created-by>
            <name>John</name>
            <email>john@topicfactory.com</email>
            <date>Nov 5, 2001</date>
          </created-by>
          <modifiers>

          </modifiers>
        </history>
        <keyword />
        <refs />
      </meta>
      <para name="para1" title="First Paragraph">
        The first para has both name and title.
      </para>
      <para title="Second Paragraph">
        the second para has a title but no name.
      </para>
      <para>Third para has neither name nor title.</para>
    </topic>
    ```

=== "topic.xsl"

    ```xml
    <?xml version="1.0" ?>
    <xsl:stylesheet
      version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    >
      <xsl:import href="ui.xsl" />
      <xsl:param name="editable" select="true" />
      <xsl:template match="/topic">
        <xsl:if test="@title">
          <xsl:call-template name="topic_title">
            <xsl:with-param
              name="editable"
              select="$editable"
            />
            <xsl:with-param name="value" select="@title" />
          </xsl:call-template>
        </xsl:if>
        <xsl:apply-templates />
      </xsl:template>
      <!-- Don't display meta information. -->
      <xsl:template match="meta" />
      <xsl:template match="para">
        <P>
          <xsl:if test="@title">
            <xsl:call-template name="para_title">
              <xsl:with-param name="value" select="@title" />
              <xsl:with-param
                name="editable"
                select="$editable"
              />
            </xsl:call-template>
          </xsl:if>
          <xsl:apply-templates />
        </P>
      </xsl:template>
      <xsl:template match="text()">
        <xsl:call-template name="text">
          <xsl:with-param name="value">
            <xsl:value-of select="." />
          </xsl:with-param>
          <xsl:with-param name="editable">true</xsl:with-param>
        </xsl:call-template>
      </xsl:template>
    </xsl:stylesheet>
    ```

=== "ui.xsl"

    ```xml
    <xsl:stylesheet
      version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    >
      <xsl:template name="topic_title">
        <xsl:param name="editable" />
        <xsl:param name="value" />
        <H2>
          <xsl:attribute name="CONTENTEDITABLE">
            <xsl:value-of select="$editable" />
          </xsl:attribute>
          <xsl:value-of select="$value" />
        </H2>
      </xsl:template>
      <xsl:template name="para_title">
        <xsl:param name="value" />
        <xsl:param name="editable" />
        <DIV
          STYLE="font-size:16;
                 font-family:Arial;
                 font-weight:bold;
                 font-style:italic"
          CONTENTEDITABLE="{$editable}"
        >
          <xsl:value-of select="$value" />
        </DIV>
      </xsl:template>
      <xsl:template name="text">
        <xsl:param name="value" />
        <xsl:param name="editable" />
        <SPAN CONTENTEDITABLE="{$editable}">
          <xsl:value-of select="$value" />
        </SPAN>
      </xsl:template>
    </xsl:stylesheet>
    ```

=== "Результат"

    ```html
    <H2 CONTENTEDITABLE="true">My Topic</H2>
    <P>
       <DIV STYLE="font-size:16;
                   font-family:Arial;
                   font-weight:bold;
                   font-style:italic"
            CONTENTEDITABLE="true">First Paragraph<DIV>
       <SPAN CONTENTEDITABLE="true">
         The first para has both name and title.
       </SPAN>
    </P>
    <P>
       <DIV STYLE="font-size:16;
                   font-family:Arial;
                   font-weight:bold;
                   font-style:italic"
            CONTENTEDITABLE="true">Second Paragraph<DIV>
       <SPAN CONTENTEDITABLE="true">
         The second para has a title but no name.
       </SPAN>
    </P>
    <P>
       <SPAN CONTENTEDITABLE="true">
         The third para has neither name nor title.
       </SPAN>
    </P>
    ```

## См. также

- [`xsl:apply-templates`](xsl-apply-templates.md) — применяет шаблонные правила к узлам.
- [`xsl:with-param`](xsl-with-param.md) — связывает с именем параметра значение.

## Ссылки

- [`xsl:call-template`](https://developer.mozilla.org/en/XSLT/call-template) <sup><small>MDN (рус.)</small></sup>
- [`xsl:call-template`](https://msdn.microsoft.com/en-us/library/ms256487.aspx) <sup><small>MSDN (en)</small></sup>
