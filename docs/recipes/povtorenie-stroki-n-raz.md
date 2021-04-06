# Повторение строки N раз

## Задача

Требуется повторить строку N раз, где N – параметр. Например, нужно дополнить строку пробелами, чтобы выровнять ее по правому или левому краю.

## Решение

### XSLT 1.0

Задачу можно решить красиво, применив рекурсивный алгоритм, который удваивает строку, пока не будет достигнута нужная длина. Надо только аккуратно рассмотреть случай, когда значение `$count` нечетно.

```xml
<xsl:template name="dup">
  <xsl:param name="input" />
  <xsl:param name="count" select="2" />
  <xsl:choose>
    <xsl:when test="not($count) or not($input)" />
    <xsl:when test="$count = 1">
      <xsl:value-of select="$input" />
    </xsl:when>
    <xsl:otherwise>
      <!-- Если $count нечетно, добавить еще одну копию
			входной строки -->
      <xsl:if test="$count mod 2">
        <xsl:value-of select="$input" />
      </xsl:if>
      <!-- Рекурсивно применяем шаблон, предварительно удвоив
			входную строку и вдвое -->
      <!-- уменьшив счетчик -->
      <xsl:call-template name="dup">
        <xsl:with-param
          name="input"
          select="concat($input,$input)"
        />
        <xsl:with-param
          name="count"
          select="floor($count div 2)"
        />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

### XSLT 2.0

В версии 2.0 дублирование легко реализуется с помощью выражения `for`. Мы перегружаем функцию `dup` с целью имитировать имеющий значение по умолчанию аргумент в реализации для версии XSLT 1.0.

```xml
<xsl:function name="ckbk:dup">
	<xsl:param name="input" as="xs:string"/>
	<xsl:sequence select="ckbk:dup($input,2)"/>
</xsl:function>

<xsl:function name="ckbk:dup">
	<xsl:param name="input" as="xs:string"/>
	<xsl:param name="count" as="xs:integer"/>
	<xsl:sequence select="string-join(for $i in 1 to $count return $input,'')"/>
</xsl:function>
```

## Обсуждение

### XPath 1.0

Самый очевидный способ продублировать строку `$count` раз – конкатенировать ее саму с собой `$count - 1` раз. Это можно сделать рекурсивно, как показано ниже, но такой код работает неэффективно для сколько-нибудь большого числа повторений, поэтому применять его не рекомендуется.

```xml
<xsl:template name="slow-dup">
  <xsl:param name="input" />
  <xsl:param name="count" select="1" />
  <xsl:param name="work" select="$input" />
  <xsl:choose>
    <xsl:when test="not($count) or not($input)" />
    <xsl:when test="$count=1">
      <xsl:value-of select="$work" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template name="slow-dup">
        <xsl:with-param name="input" select="$input" />
        <xsl:with-param name="count" select="$count - 1" />
        <xsl:with-param
          name="work"
          select="concat($work,$input)"
        />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Более разумный подход приведен в разделе «Решение». В нем число рекурсивных вызовов и конкатенаций уменьшено примерно до `log2($count)` за счет повторного удвоения входной строки и уменьшения счетчика вдвое до тех пор, пока он не станет равен `1`. Реализация `slow-dup` громоздка еще и потому, что требует искусственного параметра `work`, в котором сохраняется исходная строка. Кроме того, вследствие рекурсии стек растет до `$count - 1` уровней и требуется `$count - 1` обращений к `concat`. А в реализации `dup` рост стека ограничен `floor(log2($count))` уровнями и требуется лишь `ceqling(log2($count))` вызовов `concat`.

Техника, применяемая в `slow-dup`, имеет одно достоинство – она позволяет дублировать не только строки, но и произвольные структуры. Достаточно заменить `xsl:value-of` на `xsl:copy-of`. Более быстрая версия `dup` лишена этого преимущества, так как копии передаются как параметры, а это обходится дорого.

Ниже приведено еще одно решение, основанное на идее функции `str:padding` из проекта EXSLT, но не совпадающее с ней дословно:

```xml
<xsl:template name="dup">
  <xsl:param name="input" />
  <xsl:param name="count" select="1" />
  <xsl:choose>
    <xsl:when test="not($count) or not($input)" />
    <xsl:otherwise>
      <xsl:variable
        name="string"
        select="concat($input, $input, $input, $input,	$input, $input, $input, $input,	$input, $input)"
      />
      <xsl:choose>
        <xsl:when
          test="string-length($string) >= $count * string-length($input)"
        >
          <xsl:value-of
            select="substring($string, 1, $count * string-length($input))"
          />
        </xsl:when>
        <xsl:otherwise>
          <xsl:call-template name="dup">
            <xsl:with-param name="input" select="$string" />
            <xsl:with-param
              name="count"
              select="$count div 10"
            />
          </xsl:call-template>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

В этой реализации делается десять копий входной строки. Если это больше, чем необходимо, то результат усекается до нужной длины. В противном случае шаблон применяется рекурсивно. Это решение работает медленнее, так как часто производится больше конкатенаций, чем необходимо, и вызывается функция `substring()`, которая в некоторых реализациях XSLT не эффективна. Зато оно обладает преимуществами при исполнении процессорами, которые не оптимизируют хвостовую рекурсию, поскольку число рекурсивных вызовов заметно меньше.

## См. также

Так называемый метод Пиза также позволяет дублировать строку без рекурсии. Он обсуждается в [документе](xslt_efficient_programming_techniques.pdf). Суть его в том, чтобы использовать цикл `for-each` для любого доступного источника узлов (часто самой таблицы стилей). Хотя на практике этот метод может показать высокую эффективность, я считаю его несовершенным из-за предположения о том, что узлов достаточно для выполнения требуемого числа итераций.
