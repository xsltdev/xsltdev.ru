# Вычисление комбинаторных функций

## Задача

Требуется вычислить число перестановок или сочетаний размера `r` для данного множества.

## Решение

### XSLT 1.0

Если вы знаете, что число перестановок размера `r` равно `N! / r!`, а число сочетаний – `N! / r! * (N-r)!`, то может возникнуть искушение пропустить этот пример, поскольку ранее уже был приведен способ вычисления факториала. Однако так как факториалы растут очень быстро, придется проявить некоторое хитроумие.

```xml
<xsl:template name="ckbk:P">
    <xsl:param name="n" select="1" />
    <xsl:param name="r" select="1" />
    <xsl:choose>
        <xsl:when test="$n &lt; 0 or $r &lt; 0">
            NaN
        </xsl:when>
        <xsl:when test="$n = 0">0</xsl:when>
        <xsl:otherwise>
            <xsl:call-template name="prod-range">
                <xsl:with-param
                    name="start"
                    select="$r + 1"
                />
                <xsl:with-param name="end" select="$n" />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

```xml
<xsl:template name="ckbk:C">
    <xsl:param name="n" select="1" />
    <xsl:param name="r" select="1" />
    <xsl:choose>
        <xsl:when test="$n &lt; 0 or $r &lt; 0">
            NaN
        </xsl:when>
        <xsl:when test="$n = 0">0</xsl:when>
        <xsl:otherwise>
            <xsl:variable
                name="min"
                select="($r &lt;= $n - $r) * $r +
($r > $n - $r) * $n - $r"
            />
            <xsl:variable
                name="max"
                select="($r >= $n - $r) * $r + ($r &lt; $n - $r) * $n - $r"
            />
            <xsl:variable name="numerator">
                <xsl:call-template name="prod-range">
                    <xsl:with-param
                        name="start"
                        select="$max + 1"
                    />
                    <xsl:with-param
                        name="end"
                        select="$n"
                    />
                </xsl:call-template>
            </xsl:variable>
            <xsl:variable name="denominator">
                <xsl:call-template name="ckbk:fact">
                    <xsl:with-param
                        name="number"
                        select="$min"
                    />
                </xsl:call-template>
            </xsl:variable>
            <xsl:value-of
                select="$numerator div $denominator"
            />
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

```xml
<xsl:function name="ckbk:P" as="xs:decimal">
    <xsl:param name="r" as="xs:integer" />
    <xsl:param name="n" as="xs:integer" />
    <xsl:sequence
        select="if ($n eq 0)
then 0 else ckbk:prod-range($r + 1, $n)"
    />
</xsl:function>
```

```xml
<xsl:function name="ckbk:C" as="xs:decimal">
    <xsl:param name="r" as="xs:integer" />
    <xsl:param name="n" as="xs:integer" />
    <xsl:variable
        name="min"
        select="min( ($r, $n - $r) )"
        as="xs:integer"
    />
    <xsl:variable
        name="max"
        select="max( ($r, $n - $r) )"
        as="xs:integer"
    />
    <xsl:sequence
        select="if ($n eq 0) then 0
else ckbk:prod-range($max + 1, $n) div
ckbk:factorial($min)"
    />
</xsl:function>
```

## Обсуждение

Основная идея этих решений – уменьшить число операций умножения. Когда факториал большего числа делится на факториал меньшего, то многие сомножители сокращаются. Поэтому для реализации лучше воспользоваться функцией `prod-range` (рецепт 3.5), а не `factorial`. Вычисление числа сочетаний чуть сложнее, так как нужно выбрать максимум из `r` и (`n-r`), чтобы сократить возможно большее число сомножителей.
