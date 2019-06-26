---
layout: default
title: xsl:text
nav_order: 30
parent: XSLT
---

<!-- prettier-ignore-start -->
# xsl:text
{: .no_toc }
<!-- prettier-ignore-end -->

Элемент **`xsl:text`** служит для того, чтобы создавать в выходящем документе текстовые узлы.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XSLT 1.0, XSLT 2.0 и XSLT 3.0

```xml
<xsl:text
    disable-output-escaping = "yes | no">
    <!-- Содержимое: символьные данные -->
</xsl:text>
```

- `disable-output-escaping` — _необязательный_ атрибут, позволяет избежать замены в выходном документе специальных символов на символьные или встроенные сущности.

## Описание и примеры

Элемент `xsl:text` имеет следующие особенности.

Преобразования будут сохранять пробельные символы, находящиеся в элементе `xsl:text`. То есть, для того чтобы вывести в выходящий документ пробельный символ, например такой, как символ перевода строки, достаточно написать

```xml
<xsl:text> </xsl:text>
```

Элемент `xsl:text` имеет атрибут `disable-output-escaping`, который позволяет избежать замены в выходящем документе специальных символов на символьные или встроенные сущности. Например, для того, чтобы вывести символ "`<`" можно указать в преобразовании

```xml
<xsl:text disable-output-escaping="yes"><</xsl:text>
```

В остальных случаях символьные данные, включенные в элемент `xsl:text`, ведут себя так же, как и вне `xsl:text`.

## См. также

- [`xsl:comment`](/xslt/xsl-comment/)

## Ссылки

- [`xsl:text`](https://developer.mozilla.org/en/XSLT/text) на MDN
- [`xsl:text`](https://msdn.microsoft.com/en-us/library/ms256107.aspx) на MSDN
