---
description: Функция sum суммирует значения узлов из переданного ей множества
---

# sum()

Функция **`sum`** суммирует значения узлов из переданного ей множества. Строковые значения узлов сначала преобразуются в числа, а затем все полученные числа складываются.

## Синтаксис

```
number sum( node-set )
```

## Описание и примеры

### Пример

Листинг 6.3. Входящий документ

```xml
<list>
    <item>1</item>
    <item>3</item>
    <item>5</item>
    <item>7</item>
    <item>9</item>
</list>
```

Листинг 6.4. Преобразование

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="list">
        <xsl:copy>
            <xsl:apply-templates/>
        </xsl:copy>
    </xsl:template>
    <xsl:template match="item">
        <sum>
            <xsl:value-of select="sum(preceding-sibling::item|.)"/>
        </sum>
    </xsl:template>
</xsl:stylesheet>
```

Листинг 6.5. Результат

```xml
<list>
    <sum>1</sum>
    <sum>4</sum>
    <sum>9</sum>
    <sum>16</sum>
    <sum>25</sum>
</list>
```

В этом преобразовании мы заменяем каждый элемент `item` на сумму значений предшествующих ему элементов плюс собственное значение. Предшествующие элементы выбираются путем выборки `preceding-sibling::item`, текущий элемент — сокращенным путем "`.`", затем эти два множества объединяются при помощи оператора `|`, и, наконец, мы вычисляем сумму значений узлов, входящих в них функцией `sum`.

Строковые значения суммируемых узлов преобразовываются в числовой формат так же, как они преобразовывались бы функцией [`number`](number.md). Например, если входящий документ будет иметь вид

```xml
<list>
    <item>1</item>
    <item>3</item>
    <item>five</item>
    <item>7</item>
    <item>9</item>
</list>
```

то на выходе мы получим

```xml
<list>
    <sum>1</sum>
    <sum>4</sum>
    <sum>NaN</sum>
    <sum>NaN</sum>
    <sum>NaN</sum>
</list>
```

потому что, начиная с третьего элемента, в суммировании будет участвовать значение `number('five')`, то есть не-число (`NaN`).

## Ссылки

- [sum()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/sum) на MDN
