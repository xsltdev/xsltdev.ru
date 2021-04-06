# Преобразование из одной системы счисления в другую

## Задача

Требуется преобразовать строку, представляющую число в системе с одним основанием, в число, записанное в системе с другим основанием.

## Решение

В следующем примере приведено общее решение для преобразования из системы с любым основанием от 2 до 36 в систему с другим основанием из того же диапазона. Здесь используются две глобальные переменные для кодирования всех символов в системе с основанием 36 в виде смещений от начала строки, одной для кодирования заглавных букв и другой – для прописных.

```xml
<xsl:variable
	name="ckbk:base-lower"
	select="'0123456789abcdefghijklmnopqrstuvwxyz'"/>
<xsl:variable
	name="ckbk:base-upper"
	select="'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>

<xsl:template name="ckbk:convert-base">
	<xsl:param name="number"/>
	<xsl:param name="from-base"/>
	<xsl:param name="to-base"/>
	<xsl:variable name="number-base10">
		<xsl:call-template name="ckbk:convert-to-base-10">
			<xsl:with-param name="number" select="$number"/>
			<xsl:with-param name="from-base" select="$from-base"/>
		</xsl:call-template>
	</xsl:variable>
	<xsl:call-template name="ckbk:convert-from-base-10">
		<xsl:with-param name="number" select="$number-base10"/>
		<xsl:with-param name="to-base" select="$to-base"/>
	</xsl:call-template>
</xsl:template>
```

В этом решении общая задача сведена к двум подзадачам: преобразование в систему с основанием 10 и из нее. Преобразования в десятичной системе проще, потому что именно в ней представляются числа в языке XPath.

Шаблон `ckbk:convert-to-base-10` нормализует входное число, приводя его к нижнему регистру. Иными словами, шестнадцатеричные числа `ffff` и `FFFF` – одно и то же, что соответствует общепринятому соглашению. Две выполняемые проверки призваны гарантировать, что основание принадлежит допустимому диапазону, а число не содержит символов, не разрешенных при таком основании.

Обрабатывается также тривиальный случай преобразования из десятичной системы в десятичную:

```xml
<xsl:template name="ckbk:convert-to-base-10">
  <xsl:param name="number" />
  <xsl:param name="from-base" />
  <xsl:variable
    name="num"
    select="translate($number,$ckbk:base-upper, $ckbk:base-lower)"
  />
  <xsl:variable
    name="valid-in-chars"
    select="substring($ckbk:base-lower,1,$from-base)"
  />
  <xsl:choose>
    <xsl:when test="$from-base &lt; 2 or $from-base > 36">
      NaN
    </xsl:when>
    <xsl:when
      test="not($num) or translate($num,$valid-in-chars,'')"
    >
      NaN
    </xsl:when>
    <xsl:when test="$from-base = 10">
      <xsl:value-of select="$number" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template
        name="ckbk:convert-to-base-10-impl"
      >
        <xsl:with-param name="number" select="$num" />
        <xsl:with-param
          name="from-base"
          select="$from-base"
        />
        <xsl:with-param
          name="from-chars"
          select="$valid-in-chars"
        />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

После того как все проверки выполнены, собственно преобразование делегируется другому рекурсивному шаблону. Он находит десятичное значение каждого символа как смещение от начала строки, полученной от вызывающего шаблона.

Рекурсивные вызовы умножают текущий результат на основание и прибавляют к произведению значение первого символа, пока не останется строка длины 1.

```xml
<xsl:template name="ckbk:convert-to-base-10-impl">
  <xsl:param name="number" />
  <xsl:param name="from-base" />
  <xsl:param name="from-chars" />
  <xsl:param name="result" select="0" />
  <xsl:variable
    name="value"
    select="string-length(substring-before($from-chars,substring($number,1,1)))"
  />
  <xsl:variable
    name="total"
    select="$result * $from-base + $value"
  />
  <xsl:choose>
    <xsl:when test="string-length($number) = 1">
      <xsl:value-of select="$total" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template
        name="ckbk:convert-to-base-10-impl"
      >
        <xsl:with-param
          name="number"
          select="substring($number,2)"
        />
        <xsl:with-param
          name="from-base"
          select="$from-base"
        />
        <xsl:with-param
          name="from-chars"
          select="$from-chars"
        />
        <xsl:with-param name="result" select="$total" />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Для решения второй подзадачи нужно уметь преобразовывать из десятичной системы в систему с любым другим основанием. И снова проверка ошибок отделяется от самого преобразования.

```xml
<xsl:template name="ckbk:convert-from-base-10">
  <xsl:param name="number" />
  <xsl:param name="to-base" />
  <xsl:choose>
    <xsl:when test="$to-base &lt; 2 or $to-base > 36">
      NaN
    </xsl:when>
    <xsl:when test="number($number) != number($number)">
      NaN
    </xsl:when>
    <xsl:when test="$to-base = 10">
      <xsl:value-of select="$number" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template
        name="ckbk:convert-from-base-10-impl"
      >
        <xsl:with-param name="number" select="$number" />
        <xsl:with-param name="to-base" select="$to-base" />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Для преобразования необходимо найти символ, отстоящий от начала строки `ckbk:base-lower` на величину, равную остатку от его деления на `$to-base`.

Рекурсия производится по оставшейся целой части после приписывания получившейся цифры в начало текущего результата. Завершается рекурсия, когда число окажется меньше основания.

```xml
<xsl:template name="ckbk:convert-from-base-10-impl">
  <xsl:param name="number" />
  <xsl:param name="to-base" />
  <xsl:param name="result" />
  <xsl:variable
    name="to-base-digit"
    select="substring($ckbk:base-lower,$number mod $to-base + 1,1)"
  />
  <xsl:choose>
    <xsl:when test="$number >= $to-base">
      <xsl:call-template
        name="ckbk:convert-from-base-10-impl"
      >
        <xsl:with-param
          name="number"
          select="floor($number div $to-base)"
        />
        <xsl:with-param name="to-base" select="$to-base" />
        <xsl:with-param
          name="result"
          select="concat($to-base-digit,$result)"
        />
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of
        select="concat($to-base-digit,$result)"
      />
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

## Обсуждение

Преобразование из одной системы счисления в другую – распространенная в программировании задача, поэтому большинство разработчиков знает, как это делается. Во многих языках имеются готовые средства для решения этой задачи, но в XSLT их нет. Из-за того, что в XPath 1.0 и XSLT 1.0 нет функций для получения целочисленного значения символа Unicode, код оказывается громоздким. В XPath 2.0 можно воспользоваться функциями `string-to-codepoints` и `codepoints-to-string`. Для обращения со строками как со справочными таблицами приходится прибегать к хитрым трюкам. Хотя такие манипуляции неэффективны, для большинства задач, в которых встречаются преобразования системы счисления, с этим можно смириться.

В приведенном выше коде предполагается, что при основании большем 10 применяется стандартное соглашение об обозначении цифр, больших 9, последовательными буквами. Если вы сталкиваетесь с нестандартным кодированием, то нужно будет соответственно изменить строки, играющие роль справочников.

В принципе можно обобщить этот код на случай основания больше 36, добавив символы, которыми будут кодироваться дополнительные цифры.
