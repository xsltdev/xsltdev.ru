# Вычисление статистических функций

## Задача

Требуется вычислить среднее, дисперсию и стандартное отклонение.

## Решение

### XSLT 1.0

В математической статистике находят применение три вида средних значений: среднее арифметическое, медиана и мода.

**Среднее арифметическое** вычисляется тривиально – находим сумму, пользуясь рецептом 3.6, и делим ее на количество слагаемых.

**Медиана** – это число, которое оказывается в середине набора после его сортировки. Если количество членов набора четно, то берется среднее двух чисел, оказавшихся в середине.

```xml
<xsl:template name="ckbk:median">
    <xsl:param name="nodes" select="/.." />
    <xsl:variable name="count" select="count($nodes)" />
    <xsl:variable
        name="middle"
        select="ceiling($count div 2)"
    />
    <xsl:variable name="even" select="not($count mod 2)" />
    <xsl:variable name="m1">
        <xsl:for-each select="$nodes">
            <xsl:sort data-type="number" />
            <xsl:if test="position() = $middle">
                <xsl:value-of
                    select=". + ($even * ./following-sibling::*[1])"
                />
            </xsl:if>
        </xsl:for-each>
    </xsl:variable>
    <!-- Медиана -->
    <xsl:value-of select="$m1 div ($even + 1)" />
</xsl:template>
```

Случай четного количества узлов обрабатывается с помощью уже встречавшегося нам трюка с преобразованием булевской величины в число. Если количество узлов нечетно, то `$m1` в конце концов оказывается средним узлом, и для получения ответа мы делим его на `1`. Если же количество узлов четно, то на последнем шаге `$m1` будет равно сумме двух средних узлов, и эта величина делится на `2`.

**Мода** – это элемент (или элементы), наиболее часто встречающийся в множестве, которое не обязательно состоит из чисел. Если одинаковость узлов можно установить сравнением их строковых значений, то годится следующее решение:

```xml
<xsl:template name="ckbk:mode">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="max" select="0" />
    <xsl:param name="mode" select="/.." />
    <xsl:choose>
        <xsl:when test="not($nodes)">
            <xsl:copy-of select="$mode" />
        </xsl:when>
        <xsl:otherwise>
            <xsl:variable name="first" select="$nodes[1]" />
            <xsl:variable
                name="try"
                select="$nodes[. = $first]"
            />
            <xsl:variable
                name="count"
                select="count($try)"
            />
            <!-- Рекурсия по узлам, не равным первому -->
            <xsl:call-template name="ckbk:mode">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[not(. = $first)]"
                />
                <!-- Если мы нашли узел, встречающийся чаще
других, передаем count, иначе прежнее значение
счетчика максимального числа вхождений -->
                <xsl:with-param
                    name="max"
                    select="($count > $max) * $count + not($count > $max) * $max"
                />
                <!-- Вычисляем новую моду ... -->
                <xsl:with-param name="mode">
                    <xsl:choose>
                        <!-- первый элемент в try, если найден новый максимум -->
                        <xsl:when test="$count > $max">
                            <xsl:copy-of select="$try[1]" />
                        </xsl:when>
                        <!-- старая мода объединяется с первым элементом в try, если
число вхождений равно текущему максимуму -->
                        <xsl:when test="$count = $max">
                            <!-- Caution: you will need to convert $mode to a -->
                            <!-- node set if you are using a version of XSLT -->
                            <!-- that does not convert automatically -->
                            <xsl:copy-of
                                select="$mode | $try[1]"
                            />
                        </xsl:when>
                        <!-- в противном случае старая мода не изменяется -->
                        <xsl:otherwise>
                            <xsl:copy-of select="$mode" />
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:with-param>
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Если это не так, заменим сравнение подходящей проверкой. Например, если эквивалентность означает равенство атрибута `age`, то проверка выглядит так: `./@age = $first/age`. Дисперсия и стандартное отклонение применяются в статистике для оценки разброса значений относительно среднего. Простейший способ вычисления дисперсии основан на вычислении трех величин: `sum` – сумма всех чисел, `sum-sq` – сумма квадратов чисел и `count` – количество чисел. Тогда дисперсия равна `(sum-sq - sum2 / count) / count - 1`. Все это можно вычислить в одном шаблоне с хвостовой рекурсией:

```xml
<xsl:template name="ckbk:variance">
    <xsl:param name="nodes" select="/.." />
    <xsl:param name="sum" select="0" />
    <xsl:param name="sum-sq" select="0" />
    <xsl:param name="count" select="0" />
    <xsl:choose>
        <xsl:when test="not($nodes)">
            <xsl:value-of
                select="($sum-sq - ($sum * $sum) div $count)
div ($count - 1)"
            />
        </xsl:when>
        <xsl:otherwise>
            <xsl:variable name="value" select="$nodes[1]" />
            <xsl:call-template name="ckbk:variance">
                <xsl:with-param
                    name="nodes"
                    select="$nodes[position() != 1]"
                />
                <xsl:with-param
                    name="sum"
                    select="$sum + $value"
                />
                <xsl:with-param
                    name="sum-sq"
                    select="$sum-sq + ($value * $value)"
                />
                <xsl:with-param
                    name="count"
                    select="$count + 1"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Вероятно, вы заметили, что этот шаблон – вариация на тему `ckbk:sum`, мы просто включили в него вычисление еще двух компонентов дисперсии. Поэтому, если процессор XSLT не поддерживает хвостовую рекурсию, то на больших наборах данных неизбежны проблемы. В таком случае придется обратиться к другой стратегии, основанной на общепринятом определении дисперсии: `?(mean - xi)2 / (count - 1)`. Сначала методом «разделяй и властвуй» или разбиения на части мы вычисляем сумму элементов, и делением на `count` получаем среднее. Затем таким же образом вычисляется сумма квадратов разностей между каждым элементом и средним. И, наконец, делим результат на `count - 1`.

Зная дисперсию, вычислить стандартное отклонение тривиально – нужно лишь извлечь квадратный корень. Об извлечении корня см. рецепт 3.5.

### XSLT 2.0

```xml
<!-- Медиана -->
<xsl:function name="ckbk:median">
    <xsl:param name="nodes" as="xs:double*" />
    <xsl:variable name="count" select="count($nodes)" />
    <xsl:variable
        name="middle"
        select="ceiling($count div 2)"
    />
    <xsl:variable name="sorted" as="xs:double*">
        <xsl:perform-sort select="$nodes">
            <xsl:sort data-type="number" />
        </xsl:perform-sort>
    </xsl:variable>
</xsl:function>
```

```xml
<!-- Мода -->
<xsl:function name="ckbk:mode" as="item()*">
    <xsl:param name="nodes" as="item()*" />
    <!-- Сначала на одим уникальны  знач ни  -->
    <xsl:variable
        name="distinct"
        select="distinct-values($nodes)"
        as="item()*"
    />
    <!-- Получа м посл доват льность сч тчиков числа в о д ний ка до о
уникально о знач ни  -->
    <xsl:variable
        name="counts"
        select="for $i in $distinct return count($nodes[. = $i])"
        as="xs:integer*"
    />
    <!-- На одим максимальный сч тчик -->
    <xsl:variable
        name="max"
        select="max($counts)"
        as="xs:integer?"
    />
    <!-- Возвращаем значения, встречающиеся максимальное число раз -->
    <xsl:sequence
        select="$distinct[position() = index-of($counts,$max)]"
    />
</xsl:function>
```

```xml
<!-- Дисперсия -->
<xsl:function name="ckbk:variance" as="xs:double">
    <xsl:param name="nodes" as="xs:double*" />
    <xsl:variable name="sum" select="sum($nodes)" />
    <xsl:variable name="count" select="count($nodes)" />
    <xsl:sequence
        select="if ($count lt 2)132
then 0
else sum(for $i in $nodes return $i * $i) -
($sum * $sum) div
($count * $count - $count)"
    />
</xsl:function>
```

## Обсуждение

### XSLT 1.0

Статистические функции повсеместно применяются для анализа числовых данных, так что приведенные выше шаблоны окажутся полезным добавлением в копилку ваших инструментов. Однако XSLT никогда не задумывался как язык для статистического анализа. Альтернативный подход состоит в том, чтобы воспользоваться XSLT для предварительного преобразования данных из формата XML в формат, где значения разделены запятыми или символами табуляции, с последующим импортом файла в электронную таблицу или специализированный пакет статистических программ.

### XSLT 2.0

Как и раньше, в версии XSLT 2.0 решение записывается значительно проще. Еще важнее тот факт, что реализация моды в этой версии гораздо быстрее и компактнее, да и отлаживать ее легче. Помнится, у меня ушло не меньше двух часов на то, чтобы написать правильный код для первого издания этой книги. А в версии 2.0 потребовалось всего-то 15 минут после того, как я понял, что можно воспользоваться функцией `distinct-values`.
