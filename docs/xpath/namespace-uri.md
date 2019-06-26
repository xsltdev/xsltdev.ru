---
layout: default
title: namespace-uri
nav_order: 20
parent: XPath
---

<!-- prettier-ignore-start -->
# namespace-uri()
{: .no_toc }
<!-- prettier-ignore-end -->

Функция **`namespace-uri`** работает совершенно аналогично функции [`local-name`](/xpath/local-name/) за тем исключением, что возвращает не локальную часть расширенного имени, a URI пространства имен этого узла.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XPath 1.0

```
string namespace-uri( node-set? )
```

## Описание и примеры

Эта функция выполняется следующим образом.

- Если аргумент опущен, его значением по умолчанию является множество, содержащее единственный контекстный узел.
- Если аргументом является пустое множество, функция возвращает пустую строку.
- Если первый в порядке просмотра документа узел переданного множества не имеет расширенного имени, функция возвращает пустую строку.
- Если первый в порядке просмотра документа узел переданного множества не принадлежит никакому пространству имен, функция возвращает пустую строку.
- В противном случае функция возвращает URI пространства имен первого в порядке просмотра документа узла переданного множества.

### Пример

Мы можем видоизменить преобразование, приведенное в примере к функциям [`last`](/xpath/last/) и [`position`](/xpath/position/), чтобы генерируемые элементы содержали информацию об имени, пространстве имен и локальной части имени элементов.

Листинг 6.10. Входящий документ

```xml
<a:a xmlns:a="http://www.a.com" xmlns:b="http://www.b.com">
    <b:b>
        <c/>
    </b:b>
</a:a>
```

Листинг 6.11. Преобразование

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http: //www.w3.org/1999/XSL/Transform" xmlns:a="http://www.a.com" xmlns:b="http://www.b.com">
    <xsl:output indent="yes"/>
    <xsl:template match="*">
        <element name="{name()}" namespace-uri="{namespace-uri()}" local-name="{local-name()}">
            <xsl:apply-templates/>
        </element>
    </xsl:template>
</xsl:stylesheet>
```

Листинг 6.12. Выходящий документ

```xml
<element xmlns:a="http://www.a.com" xmlns:b="http://www.b.com" name="a:a" namespace-uri="http://www.a.com" local-name="a">
    <element name="b:b" namespace-uri="http://www.b.com" local-name="b">
        <element name="c" namespace-uri="" local-name="c"/>
    </element>
</element>
```

## Ссылки

- [namespace-uri()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/namespace-uri) на MDN
