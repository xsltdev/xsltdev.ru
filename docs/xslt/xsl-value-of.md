---
layout: default
title: xsl:value-of
nav_order: 32
parent: XSLT
---

<!-- prettier-ignore-start -->
# xsl:value-of
{: .no_toc }
<!-- prettier-ignore-end -->

Элемент **`xsl:value-of`** служит для вычисления значений выражений.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XSLT 1.0

```xml
<xsl:value-of
    select = "выражение"
    disable-output-escaping = "yes | no" />
```

Атрибуты:

- **`select`** — **обязательный** атрибут, задает выражение, которое вычисляется процессором, затем преобразовывается в строку и выводится в результирующем дереве в виде текстового узла. Процессор не станет создавать текстовый узел, если результатом вычисления выражения была пустая строка. В целях оптимизации дерева, соседствующие текстовые узлы будут объединены в один.
- `disable-output-escaping` — _необязательный_ атрибут, служит для вывода специальных символов, которые в противном случае были бы заменены сущностями.

### XSLT 2.0 и XSLT 3.0

```xml
<xsl:value-of
    select? = expression
    separator? = { string }
    [disable-output-escaping]? = "yes" | "no">
    <!-- Content: sequence-constructor -->
</xsl:value-of>
```

## Описание и примеры

Элемент `xsl:value-of` очень похож на элемент [`xsl:copy-of`](/xslt/xsl-copy-of/), только в отличие от последнего он сначала преобразовывает вычисленное выражение к строковому виду, а уж затем выводит его в выходящий документ. Иными словами, выражение

```xml
<xsl:value-of select="выражение"/>
```

равносильно

```xml
<xsl:copy-of select="string( выражение )"/>
```

Соответственно, преобразование различных типов данных в строковый тип производится точно так же, как если бы мы использовали для этой цели функцию `string`.

### Пример 1

Для составления таблицы умножения можно воспользоваться следующим преобразованием.

Листинг 7.14. Входящий документ

```xml
<numbers>
    <number>1</number>
    <number>2</number>
    <number>3</number>
    <number>4</number>
    <number>5</number>
    <number>6</number>
    <number>7</number>
    <number>8</number>
    <number>9</number>
</numbers>
```

Листинг 7.15. Преобразование, создающее таблицу умножения

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text"/>
    <xsl:template match="numbers">
        <xsl:variable name="numbers" select="number"/>
        <xsl:for-each select="$numbers">
            <xsl:variable name="a" select="."/>
            <xsl:for-each select="$numbers">
                <xsl:variable name="b" select="."/>
                <!-- Если результат произведения меньше 10, добавляем пробел -->
                <xsl:if test="$a * $b < 10">
                    <xsl:text> </xsl:text>
                </xsl:if>
                <xsl:value-of select="$a*$b"/>
                <xsl:text> </xsl:text>
            </xsl:for-each>
            <xsl:text> </xsl:text>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
```

Листинг 7.16. Выходящий документ

```
	1  2  3  4  5  6  7  8  9
	2  4  6  8 10 12 14 16 18
	3  6  9 12 15 18 21 24 27
	4  8 12 16 20 24 28 32 36
	5 10 15 20 25 30 35 40 45
	6 12 18 24 30 36 42 48 54
	7 14 21 28 35 42 49 56 63
	8 16 24 32 40 48 56 64 72
	9 18 27 36 45 54 63 72 81
```

В данном случае элемент `xsl:value-of` используется для вычисления произведения переменных `a` и `b`. Численный результат преобразуется в строку и выводится в выходящий документ в виде текста.

Равно, как и [`xsl:text`](/xslt/xsl-text/), элемент `xsl:value-of` может иметь атрибут `disable-output-escaping`, полезный для вывода специальных символов, которые в противном случае были бы заменены сущностями.

### Пример 2

Результатом выполнения элемента

```xml
<xsl:value-of select="concat('Divide ', '&', ' impera')"/>
```

будет текстовый узел

```
    Divide & impera
```

Чтобы придать амперсанту более привычный вид, мы можем использовать атрибут `disable-output-escaping`:

```xml
<xsl:value-of select="concat('Divide ', '&', ' impera')" disable-output-escaping="yes"/>
```

Результатом выполнения этого шаблона уже будет текст:

```
    Divide & impera
```

## См. также

- [`xsl:copy-of`](/xslt/xsl-copy-of/)

## Ссылки

- [`xsl:value-of`](https://developer.mozilla.org/en/XSLT/value-of) на MDN
- [`xsl:value-of`](https://msdn.microsoft.com/en-us/library/ms256181.aspx) на MSDN
