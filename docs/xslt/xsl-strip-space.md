---
layout: default
title: xsl:strip-space
nav_order: 27
parent: XSLT
---

<!-- prettier-ignore-start -->
# xsl:strip-space
{: .no_toc }
<!-- prettier-ignore-end -->

Элемент **`xsl:strip-space`** удаляет текстовые узлы, состоящие только из пробельных символов, которые содержатся в элементах, указанных в атрибуте `elements`.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XSLT 1.0, XSLT 2.0 и XSLT 3.0

```xml
<xsl:strip-space
    elements = "tokens" />
```

Атрибуты:

- **`elements`** — **обязательный** атрибут, содержит не сами имена элементов, а так называемые проверки имен.

Проверка имени имеет три варианта синтаксиса.

- Синтаксис "`*`" используется для выбора произвольных имен. Ей будут соответствовать любые имена элементов.
- Синтаксис "`имя`" используется для выбора элементов с заданным именем. К примеру, проверке имени "`d`" будут соответствовать все элементы с именем "`d`".
- Синтаксис "`префикс:*`" используется для выбора всех элементов в данном пространстве имен. К примеру, если в документе определен префикс пространства имен `upr` в виде атрибута `xmlns:upr="http://www.upr.com"`, проверке имени "`upr:*`" будут соответствовать все элементы пространства имен, определяемого идентификатором "`http://www.upr.com`".

## Описание и примеры

### Пример

Предположим, что нам необходимо сохранить пробельные символы в элементе с именем `c` и удалить их в элементе `e` и элементах, принадлежащих пространству имен, определяемому идентификатором "`urn:d`".

Листинг 8.2. Входящий документ

```xml
<a xmlns:d="urn:d">
<d:b>        </d:b>
<d:b>   text     </d:b>
<c>
        </c>
<e>    </e>
</a>
```

Листинг 8.3. Преобразование

```xml
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:preserve-space elements="c"/>
    <xsl:strip-space elements="e t:*" xmlns:t="urn:d"/>
    <xsl:template match="/">
        <xsl:copy-of select="/"/>
    </xsl:template>
</xsl:stylesheet>
```

Листинг 8.4. Выходящий документ

```xml
<?xml version="1.0" encoding="UTF-8"?><a xmlns:d="urn:d">
<d:b/>
<d:b>   text     </d:b>
<c>
        </c>
<e/>
</a>
```

## См. также

- [`xsl:preserve-space`](/xslt/xsl-preserve-space/)

## Ссылки

- [`xsl:strip-space`](https://developer.mozilla.org/en/XSLT/strip-space) на MDN
- [`xsl:strip-space`](https://msdn.microsoft.com/en-us/library/ms256473.aspx) на MSDN
