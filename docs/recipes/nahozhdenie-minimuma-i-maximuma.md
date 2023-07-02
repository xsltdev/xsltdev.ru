# Нахождение минимума и максимума

## Задача

В наборе узлов требуется найти узел (или узлы) с минимальным (или максимальным) числовым значением.

## Решение

### XPath 1.0

В проекте EXSLT определены следующие функции для выполнения этих операций: [`exsl:min`](<../exslt/math-min().md>), [`exsl:max`](<../exslt/math-max().md>), [`exsl:lowest`](<../exslt/math-lowest().md>) и [`exsl:highest`](<../exslt/math-highest().md>). Функции `min` и `max` ищут узел с минимальным и максимальным числовым значением соответственно.

В EXSLT функция `exsl:min` специфицирована следующим образом:

-   Минимальное значение определяется так: набор узлов, переданный в качестве аргумента, сортируется в порядке возрастания, как это сделала бы команда [`xsl:sort`](../xslt/xsl-sort.md) в применении к типу данных `number`. Минимумом считается результат преобразования строкового значения первого узла в отсортированном списке в число с помощью функции `number`.
-   Если набор узлов пуст или преобразование строкового значения любого узла в число дает результат `NaN`, возвращается `NaN`.

Функция `exsl:max` определяется аналогично. На сайте EXSLT предлагаются реализации на чистом XSLT, буквально отражающие эти определения (пример 3.8).

Пример 3.8. Реализации функций `min` и `max`, следующие непосредственно из определений EXSLT

```xml
<xsl:template name="ckbk:min">
    <xsl:param name="nodes" select="/.." />
    <xsl:choose>
        <xsl:when test="not($nodes)">NaN</xsl:when>
        <xsl:otherwise>
            <xsl:for-each select="$nodes">
                <xsl:sort data-type="number" />
                <xsl:if test="position() = 1">
                    <xsl:value-of select="number(.)" />
                </xsl:if>
            </xsl:for-each>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

```xml
<xsl:template name="ckbk:max">
    <xsl:param name="nodes" select="/.." />
    <xsl:choose>
        <xsl:when test="not($nodes)">NaN</xsl:when>
        <xsl:otherwise>
            <xsl:for-each select="$nodes">
                <xsl:sort
                    data-type="number"
                    order="descending"
                />
                <xsl:if test="position() = 1">
                    <xsl:value-of select="number(.)" />
                </xsl:if>
            </xsl:for-each>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Возможно, вам непонятен смысл значения по умолчанию параметра `nodes(select="/..")`. Это просто идиоматический способ инициализировать пустой набор узлов (у корневого узла по определению не существует родителя).

Хотя в определениях `ckbk:min` и `ckbk:max` используется команда `xsl:sort`, реализацию не обязательно строить именно так. Если ваш процессор XSLT оптимизирует хвостовую рекурсию, то следующий вариант окажется более эффективным (пример 3.9).

Пример 3.9. Реализация функций `min` и `max` с помощью метода «разделяй и властвуй»

```xml
<xsl:template name="ckbk:max">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="max" />
    <xsl:variable name="count" select="count($nodes)" />
    <xsl:variable
        name="aNode"
        select="$nodes[ceiling($count div 2)]"
    />
    <xsl:choose>
        <xsl:when test="not($count)">
            <xsl:value-of select="number($max))" />
        </xsl:when>
        <xsl:when test="number($aNode) != number($aNode)">
            <xsl:value-of select="number($aNode))" />
        </xsl:when>
        <xsl:otherwise>
            <xsl:call-template name="ckbk:max">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[not(. &lt;= number($aNode))]"
                />
                <xsl:with-param name="max">
                    <xsl:choose>
                        <xsl:when
                            test="not($max) or $aNode > $max"
                        >
                            <xsl:value-of select="$aNode" />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="$max" />
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:with-param>
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

```xml
<xsl:template name="ckbk:min">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="min" />
    <xsl:variable name="count" select="count($nodes)" />
    <xsl:variable
        name="aNode"
        select="$nodes[ceiling($count div 2)]"
    />
    <xsl:choose>
        <xsl:when test="not($count)">
            <xsl:value-of select="number($min))" />
        </xsl:when>
        <xsl:when test="number($aNode) != number($aNode)">
            <xsl:value-of select="number($aNode))" />
        </xsl:when>
        <xsl:otherwise>
            <xsl:call-template name="ckbk:min">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[not(. >= number($aNode))]"
                />
                <xsl:with-param name="min">
                    <xsl:choose>
                        <xsl:when
                            test="not($min) or $aNode &lt; $min"
                        >
                            <xsl:value-of select="$aNode" />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="$min" />
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:with-param>
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Как правило, приведенные выше реализации работают быстрее, чем основанные на команде `xsl:sort`. Но в некоторых вырожденных случаях они оказываются медленнее. Причина в том, что эффективность достигается за счет исключения из рассмотрения в среднем половины узлов на каждом шаге рекурсии. Однако возможна ситуация, когда на каждом проходе `aNode` является минимальным (в случае `ckbk:max`) или максимальным (в случае `ckbk:min`) узлом. Если это так, то при каждом рекурсивном вызове будет удаляться только один узел, и производительность окажется очень низкой. К счастью, данные чаще всего бывают либо предварительно упорядочены, либо случайны, а в этих случаях быстродействие будет на высоте.

Реализация EXSLT, основанная на `xsl:sort`, корректно обрабатывает нечисловые значения. Дело в том, что стандарт XSLT требует, чтобы в случае, когда тип данных равен `number`, нечисловые значения предшествовали числовым после сортировки.

Не пытайтесь использовать выражение `not(number($var))` для проверки на `NaN`! Я часто ловил себя на этой ошибке, которая на первый взгляд выглядит совершенно корректно. Функция `number` не проверяет, что аргумент является числом, а пытается преобразовать его в число. А это совсем не то, что вам нужно, – такая проверка сообщит, что `0` – не число, поскольку `0` преобразуется в `false`. Правильное условие выглядит так: `number($var) != number($var)`. Она работает, потому что `NaN` никогда не равно `NaN`, тогда как всякое число равно само себе. Не поддавайтесь искушению сократить это условие до `number($var) != $var`. Это будет работать только, если `$var` не является пустым набором узлов. Если хотите, можете применить совсем прямолинейный подход: `string(numer($var)) = 'NaN'`.

В EXSLT функция `ckbk:lowest` определена следующим образом:

-   Функция `ckbk:lowest` возвращает те узлы из набора узлов, значения которых минимальны в данном наборе. Минимум по набору узлов вычисляется так же, как в функции `ckbk:min`. Узел имеет такое минимальное значение, если результат преобразования его строкового значения в число, как это делает функция `number`, равен минимальному значению, причем равенство определяется в терминах числового сравнения оператором `=`.
-   Если хотя бы один узел в наборе имеет нечисловое значение, то функция `ckbk:min` возвращает `NaN`. Из определения сравнения чисел следует, что `NaN != NaN`. Поэтому, если хотя бы один узел в наборе имеет нечисловое значение, то функция `ckbk:lowest` возвращает пустой набор узлов. Предлагаемая на сайте EXSLT реализация дословно следует этому определению, что может оказаться не слишком эффективно:

```xml
<xsl:template name="ckbk:lowest">
    <xsl:param name="nodes" select="/.." />
    <xsl:id
        test="$nodes and not($nodes[number(.) != number(.)])"
    >
        <xsl:variable name="min">
            <xsl:for-each select="$nodes">
                <xsl:sort data-type="number" />
                <xsl:if test="position() = 1">
                    <xsl:value-of select="number(.)" />
                </xsl:if>
            </xsl:for-each>
        </xsl:variable>
        <xsl:copy-of select="$nodes[. = $min]" />
    </xsl:if>
</xsl:template>
```

Команда [`xsl:if`](../xslt/xsl-if.md) проверяет, имеются ли в наборе узлы с нечисловыми значениями. Далее узлы сортируются для нахождения минимума, а затем собираются все узлы, значения которых совпадают с найденным минимумом. В примере 3.10 приведен код, в котором повторно используется функция `ckbk:min`, что делает сортировку ненужной.

Пример 3.10. Реализация `lowest` с повторным использованием `ckbk:min`

```xml
<xsl:template name="ckbk:lowest">
    <xsl:param name="nodes" select="/.." />
    <xsl:variable name="min">
        <xsl:call-template name="ckbk:min">
            <xsl:with-param name="nodes" select="$nodes" />
        </xsl:call-template>
    </xsl:variable>
    <xsl:choose>
        <xsl:when test="number($min) = number($min)">
            <xsl:copy-of select="$nodes[. = $min]" />
        </xsl:when>
    </xsl:choose>
</xsl:template>
```

Наконец, `ckbk:lowest` можно реализовать с одним проходом по набору узлов, если вы готовы отказаться от повторного использования `ckbk:min` (пример 3.11).

Пример 3.11. Реализация `lowest` без использования `ckbk:min`

```xml
<xsl:template name="ckbk:lowest">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="lowest" select="/.." />
    <xsl:variable
        name="index"
        select="ceiling(count($nodes) div 2)"
    />
    <xsl:variable name="aNode" select="$nodes[$index]" />
    <xsl:choose>
        <xsl:when test="not($index)">
            <xsl:copy-of select="$lowest" />
        </xsl:when>
        <xsl:when test="number($aNode) != number($aNode)" />
        <xsl:otherwise>
            <xsl:choose>
                <xsl:when
                    test="not($lowest) or $aNode &lt; $lowest"
                >
                    <xsl:call-template name="ckbk:lowest">
                        <xsl:with-param
                            name="nodes"
                            select="$nodes[not(. >= $aNode)]"
                        />
                        <xsl:with-param
                            name="lowest"
                            select="$nodes[. = $aNode]"
                        />
                    </xsl:call-template>
                </xsl:when>
                <xsl:when test="$aNode = $lowest">
                    <xsl:call-template name="ckbk:lowest">
                        <xsl:with-param
                            name="nodes"
                            select="$nodes[not(. >= $aNode)]"
                        />
                        <xsl:with-param
                            name="lowest"
                            select="$lowest|$nodes[$index]"
                        />
                    </xsl:call-template>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:call-template name="ckbk:lowest">
                        <xsl:with-param
                            name="nodes"
                            select="$nodes[not(. >= $aNode)]"
                        />
                        <xsl:with-param
                            name="lowest"
                            select="$lowest"
                        />
                    </xsl:call-template>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Интересно, что эта реализация работает хуже, возможно, из-за дополнительного копирования. В тестах, содержащих 10000 узлов с различным распределением данных (отсортированные в порядке возрастания, в порядке убывания, полуслучайные и случайные), реализация, основанная на `ckbk:min`, работала быстрее альтернативной в среднем на 40% (а часто и еще лучше). Рекурсивная реализация без использования `ckbk:min` оказалась на 24% медленнее.

Определение и реализации функции `ckbk:highest` получаются из `ckbk:lowest` обращением условий сравнения. Особо я их обсуждать не буду.

### XSLT 2.0

В XPath 2.0 уже встроены функции `min` и `max`.

## Обсуждение

Минимальное и максимальное значение в наборе узлов можно найти с помощью простых выражений XPath `<xsl:value-of select="$nodes[not($nodes &lt; .)]"/>` и `<xsl:value-of select="$nodes[not($nodes > .)]"/>` соответственно. На обычном языке это означает: «Отобрать все узлы, для которых не существует узла с меньшим значением» и «Отобрать все узлы, для которых не существует узла с большим значением».

Однако вычислительная сложность этих, по видимости очень простых, выражений составляет O(N2), где N – количество узлов. Поэтому, если вы не уверены, что узлов будет заведомо немного, не прибегайте к такой идиоме. Впрочем, иногда другого выхода просто не остается, например, если нужно найти min/max внутри атрибута `select` команды `xsl:sort` или атрибута `use` команды [`xsl:key`](../xslt/xsl-key.md) (для которых нельзя вызвать шаблон).

В одной из публикаций по XSLT предлагается следующая реализация отыскания минимумов, которая, как утверждается, более эффективна, чем основанная на `xsl:sort`.

```xml
<xsl:template name="ckbk:min">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="min" select="number('NaN')" />
    <xsl:choose>
        <xsl:when test="not($nodes)">
            <xsl:value-of select="number($min)" />
        </xsl:when>
        <xsl:otherwise>
            <xsl:variable name="aNode" select="$nodes[1]" />
            <xsl:call-template name="ckbk:min">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[position() > 1]"
                />
                <xsl:with-param name="min">
                    <xsl:choose>
                        <xsl:when
                            test="$aNode &lt; $min or string($min) = 'NaN'"
                        >
                            <xsl:value-of select="$aNode" />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="$min" />
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:with-param>
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Но это не так ни в одной из реализаций XSLT, которые я тестировал, и я просто не могу себе представить, при каких условиях это было бы правдой. Причина, по которой эта реализация, скорее всего, будет работать медленнее, заключается в том, что на каждом шаге из рассмотрения исключается всего один узел. Даже при оптимизации хвостовой рекурсии число операций копирования узлов слишком велико. Можно легко впасть в заблуждение, думая, что такое рекурсивное решение так же эффективно, как итерация по индексированному массиву в языке C или Java. Однако увеличение индекса – совсем не то же самое, что создание нового набора узлов путем удаления из исходного начального элемента. А именно это мы и делаем в выражении `$nodes[position() > 1]`.

Во многих случаях, когда необходимо найти минимум, требуется также и максимум. Хорошо бы иметь функцию, которая дает оба значения по цене одного. Ее можно написать ценой небольшого усложнения:

```xml
<xsl:template name="ckbk:min-max">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="nodes-for-max" select="$nodes" />
    <xsl:param name="min" />
    <xsl:param name="max" />
    <xsl:variable name="count1" select="count($nodes)" />
    <xsl:variable
        name="aNode1"
        select="$nodes[ceiling($count1 div 2)]"
    />
    <xsl:variable
        name="count2"
        select="count($nodes-for-max)"
    />
    <xsl:variable
        name="aNode2"
        select="$nodes-for-max[ceiling($count2 div 2)]"
    />
    <xsl:choose>
        <xsl:when test="not($count1) and not($count2)">
            <xsl:value-of
                select="concat(number($min),',',number($max))"
            />
        </xsl:when>
        <xsl:when
            test="number($aNode1) != number($aNode1) and
number($aNode2) != number($aNode2)"
        >
            <xsl:value-of
                select="concat(number($aNode1),',',number($aNode2))"
            />
        </xsl:when>
        <xsl:otherwise>
            <xsl:call-template name="ckbk:min-max">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[not(. >= number($aNode1))]"
                />
                <xsl:with-param
                    name="nodes-for-max"
                    select="$nodes-for-max[not(. &lt;= number($aNode2))]"
                />
                <xsl:with-param name="min">
                    <xsl:choose>
                        <xsl:when
                            test="not($min) or $aNode1 &lt; $min"
                        >
                            <xsl:value-of
                                select="$aNode1"
                            />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="$min" />
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:with-param>
                <xsl:with-param name="max">
                    <xsl:choose>
                        <xsl:when
                            test="not($max) or $aNode2 > $max"
                        >
                            <xsl:value-of
                                select="$aNode2"
                            />
                        </xsl:when>
                        <xsl:otherwise>
                            <xsl:value-of select="$max" />
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:with-param>
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Тестирование показывает, что и этот подход превосходит по скорости решение, основанное на сортировке.

При обсуждении минимумов и максимумов мы рассматривали только один частный случай: когда узлы содержат числа. Более общая задача – найти минимум и максимум из значений функции, определенной на узлах. Возьмем, к примеру, случай, когда есть множество положительных и отрицательных чисел, а нужно найти минимальный квадрат значения. Хотя эту задачу легко решить путем небольшой модификации показанного выше кода, хотелось бы иметь единую повторно используемую реализацию. В главе 14 мы вернемся к этой проблеме и опишем несколько способов создания обобщенных решений.
