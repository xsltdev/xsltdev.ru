---
description: Требуется вычислить сумму или произведение чисел, содержащихся в наборе узлов
---

# Вычисление сумм и произведений

## Задача

Требуется вычислить сумму или произведение чисел, содержащихся в наборе узлов.

## Решение

### XSLT 1.0

Абстрактная форма алгоритма суммирования для процессоров, оптимизирующих хвостовую рекурсию, выглядит следующим образом:

```xml
<xsl:template name="ckbk:sum">
    <!-- инициализировать пустой набор узлов -->
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="result" select="'0'" />
    <xsl:choose>
        <xsl:when test="not($nodes)">
            <xsl:value-of select="$result" />
        </xsl:when>
        <xsl:otherwise>
            <!-- вызвать или применить шаблон, который определит значение
узла в случае, когда сам узел не является суммируемым значением -->
            <xsl:variable name="value">
                <xsl:call-template
                    name="some-function-of-a-node"
                >
                    <xsl:with-param
                        name="node"
                        select="$nodes[1]"
                    />
                </xsl:call-template>
            </xsl:variable>
            <!-- рекурсивно просуммировать по оставшейся части набора -->
            <xsl:call-template name="ckbk:sum">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[position() != 1]"
                />
                <xsl:with-param
                    name="result"
                    select="$result + $value"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Для обработки большого числа узлов при отсутствии поддержки хвостовой рекурсии есть два способа. Первый обычно называют разделяй и властвуй. Его идея в том, чтобы на каждом шаге рекурсии уменьшить объем работы по меньшей мере вдвое.

```xml
<xsl:template name="ckbk:sum-dvc">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="result" select="'0'" />
    <xsl:param name="dvc-threshold" select="100" />
    <xsl:choose>
        <xsl:when test="count($nodes) &lt;= $dvc-threshold">
            <xsl:call-template name="ckbk:sum">
                <xsl:with-param
                    name="nodes"
                    select="$nodes"
                />
                <xsl:with-param
                    name="result"
                    select="$result"
                />
            </xsl:call-template>
        </xsl:when>
        <xsl:otherwise>
            <xsl:variable
                name="half"
                select="floor(count($nodes) div 2)"
            />
            <xsl:variable name="sum1">
                <xsl:call-template name="ckbk:sum-dvc">
                    <xsl:with-param
                        name="nodes"
                        select="$nodes[position() &lt;= $half]"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result"
                    />
                    <xsl:with-param
                        name="dvc-threshold"
                        select="$dvc-threshold"
                    />
                </xsl:call-template>
            </xsl:variable>
            <xsl:call-template name="ckbk:sum-dvc">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[position() > $half]"
                />
                <xsl:with-param
                    name="result"
                    select="$sum1"
                />
                <xsl:with-param
                    name="dvc-threshold"
                    select="$dvc-threshold"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Второй способ называется разбиением на части. На первом этапе большая задача разбивается на части разумного размера, а на втором каждая часть обрабатывается рекурсивно.

```xml
<xsl:template name="ckbk:sum-batcher">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="result" select="'0'" />
    <xsl:param name="batch-size" select="500" />
    <xsl:choose>
        <xsl:when test="not($nodes)">
            <xsl:value-of select="$result" />
        </xsl:when>
        <xsl:otherwise>
            <xsl:variable name="batch-sum">
                <xsl:call-template name="ckbk:sum">
                    <xsl:with-param
                        name="nodes"
                        select="$nodes[position() &lt; $batch-size]"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result"
                    />
                </xsl:call-template>
            </xsl:variable>
            <xsl:call-template name="ckbk:sum-batcher">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[position() >= $batch-size]"
                />
                <xsl:with-param
                    name="result"
                    select="$batch-sum"
                />
                <xsl:with-param
                    name="batch-size"
                    select="$batch-size"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Произведения вычисляются аналогично:

```xml
<xsl:template name="ckbk:product">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="result" select="1" />
    <xsl:choose>
        <xsl:when test="not($nodes)">
            <xsl:value-of select="$result" />
        </xsl:when>
        <xsl:otherwise>
            <!-- вызвать или применить шаблон, который определит значение
			узла в случае, когда сам узел не входит в число перемножаемых
			значений -->
            <xsl:variable name="value">
                <xsl:call-template
                    name="some-function-of-a-node"
                >
                    <xsl:with-param
                        name="node"
                        select="$nodes[1]"
                    />
                </xsl:call-template>
            </xsl:variable>
            <xsl:call-template name="ckbk:product">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[position() != 1]"
                />
                <xsl:with-param
                    name="result"
                    select="$result * $value"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

```xml
<xsl:template name="ckbk:product-batcher">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="result" select="1" />
    <xsl:param name="batch-size" select="500" />
    <xsl:choose>
        <xsl:when test="not($nodes)">
            <xsl:value-of select="$result" />
        </xsl:when>
        <xsl:otherwise>
            <xsl:variable name="batch-product">
                <xsl:call-template name="ckbk:product">
                    <xsl:with-param
                        name="nodes"
                        select="$nodes[position() &lt; $batch-size]"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result"
                    />
                </xsl:call-template>
            </xsl:variable>
            <xsl:call-template name="ckbk:product-batcher">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[position() >= $batch-size]"
                />
                <xsl:with-param
                    name="result"
                    select="$batch-product"
                />
                <xsl:with-param
                    name="batch-size"
                    select="$batch-size"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

```xml
<xsl:template name="ckbk:product-dvc">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="result" select="1" />
    <xsl:param name="dvc-threshold" select="100" />
    <xsl:choose>
        <xsl:when test="count($nodes) &lt;= $dvc-threshold">
            <xsl:call-template name="ckbk:product">
                <xsl:with-param
                    name="nodes"
                    select="$nodes"
                />
                <xsl:with-param
                    name="result"
                    select="$result"
                />
            </xsl:call-template>
        </xsl:when>
        <xsl:otherwise>
            <xsl:variable
                name="half"
                select="floor(count($nodes) div 2)"
            />
            <xsl:variable name="product1">
                <xsl:call-template name="ckbk:product-dvc">
                    <xsl:with-param
                        name="nodes"
                        select="$nodes[position() &lt;= $half]"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result"
                    />
                    <xsl:with-param
                        name="dvc-threshold"
                        select="$dvc-threshold"
                    />
                </xsl:call-template>
            </xsl:variable>
            <xsl:call-template name="ckbk:product-dvc">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[position() > $half]"
                />
                <xsl:with-param
                    name="result"
                    select="$product1"
                />
                <xsl:with-param
                    name="dvc-threshold"
                    select="$dvc-threshold"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Лучший способ вычисления простых сумм – это встроенная в XPath функция `sum()`. Но, если надо вычислить сумму значений произвольной функции от узлов, то приходится делать одно из двух:

-   применять рецепты из этого раздела либо
-   сначала вычислить значения функции от всех узлов и сохранить результат в переменной в виде фрагмента дерева. Затем вызвать функцию расширение для преобразования фрагмента в набор узлов, который можно подать на вход функции sum. В XSLT 2.0 обобщенное суммирование становится тривиальной задачей из-за исчезновения результирующих фрагментов дерева.

### XSLT 2.0

Суммирование значений произвольной функции в версии 2.0 тривиально выполняется с помощью последовательностей, выражения `for` и функции XPath `sum`.

```xml
<!-- Сумма квадратов -->
<xsl:value select="sum(for $i in $nodes return $i * $i)" />
```

Однако в XPath нет встроенной функции `prod()`, так что для перемножения чисел придется написать собственную:

```xml
<xsl:function name="ckbk:prod" as="xs:double">
    <xsl:param name="numbers" as="xs:double*" />
    <xsl:sequence
        select="if (count($numbers) eq 0) then 0
else if (count($numbers) = 1) then $numbers[1]
else $numbers[1] * ckbk:prod(subsequence($numbers,2))"
    />
</xsl:function>
```

## Обсуждение

### XSLT 1.0

Методы разбиения на части и «разделяй и властвуй» оказываются полезны, когда нужно рекурсивно обработать потенциально большой набор узлов. Эксперименты показывают, что даже при наличии процессора XSLT, оптимизирующего хвостовую рекурсию, применение этих методов позволяет повысить производительность.

В главе 14 показано, как написать повторно используемую оснастку для запуска алгоритмов разбиения на части и «разделяй и властвуй».

### XPath 2.0

При наличии функции `prod` возникает искушение вычислить факториал следующим образом:

```xml
<xsl:function name="ckbk:factorial" as="xs:double">
    <xsl:param name="n" as="xs:integer" />
    <xsl:sequence
        select="if ($n eq 0) then 1 else ckbk:prod(1 to $n)"
    />
</xsl:function>
```

Если `$n` мало, то это решение, может, и сгодится, но при увеличении `$n` накладные расходы на построение последовательности могут ухудшить производительность по сравнению с непосредственным решением. Об этом всегда следует помнить, прибегая к последовательностям. Майкл Кэй приводит и другие примеры в ходе обсуждения различий между решениями задачи о рыцарском турнире для версий 1.0 и 2.0 (XSLT 2.0, Third Edition, Wrox, 2004, стр. 753).

```xml
<xsl:function name="ckbk:factorial" as="xs:decimal">
    <xsl:param name="n" as="xs:integer" />
    <xsl:sequence
        select="if ($n eq 0) then 1 else $n * ckbk:factorial($n - 1)"
    />
</xsl:function>
```

## См. также

Димитр Новачев (Dimitre Novatchev) и Славомир Тышко (Slawomir Tyszko) сравнивают методы разбиения на части и «разделяй и властвуй» в статье [на странице](http://www.vbxml.com/xsl/article/recurse/).
