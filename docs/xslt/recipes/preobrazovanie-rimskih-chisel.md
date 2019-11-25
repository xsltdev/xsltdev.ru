# Преобразование римских числительных в числа

## Задача

Требуется преобразовать число, записанное римскими цифрами, в обычное число.

## Решение

Римская система счисления не является позиционной. Число в ней записывается путем прибавления или вычитания фиксированного количества римских цифр. Если следующий символ имеет меньшее или такое же значение, то производится добавление, иначе вычитание.

```xslt
<xsl:stylesheet
	version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:math="http://www.ora.com/XSLTCookbook/math"
	id="math:math.roman">

	<ckbk:romans>
		<ckbk:roman value="1">i</ckbk:roman>
		<ckbk:roman value="1">I</ckbk:roman>
		<ckbk:roman value="5">v</ckbk:roman>
		<ckbk:roman value="5">V</ckbk:roman>
		<ckbk:roman value="10">x</ckbk:roman>
		<ckbk:roman value="10">X</ckbk:roman>
		<ckbk:roman value="50">l</ckbk:roman>
		<ckbk:roman value="50">L</ckbk:roman>
		<ckbk:roman value="100">c</ckbk:roman>
		<ckbk:roman value="100">C</ckbk:roman>
		<ckbk:roman value="500">d</ckbk:roman>
		<ckbk:roman value="500">D</ckbk:roman>
		<ckbk:roman value="1000">m</ckbk:roman>
		<ckbk:roman value="1000">M</ckbk:roman>
	</ckbk:romans>

	<xsl:variable
		name="ckbk:roman-nums"
		select="document('')/*/*/ckbk:roman"/>

	<xsl:template name="ckbk:roman-to-number">
		<xsl:param name="roman"/>
		<xsl:variable name="valid-roman-chars">
			<xsl:value-of select="document('')/*/ckbk:romans"/>
		</xsl:variable>
		<xsl:choose>
		<!-- возвращает true, если в строке есть не-римские цифры -->
			<xsl:when test="translate($roman,$valid-roman-chars,'')">NaN</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="ckbk:roman-to-number-impl">
					<xsl:with-param name="roman" select="$roman"/>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="ckbk:roman-to-number-impl">
		<xsl:param name="roman"/>
		<xsl:param name="value" select="0"/>
		<xsl:variable name="len" select="string-length($roman)"/>
		<xsl:choose>
			<xsl:when test="not($len)">
				<xsl:value-of select="$value"/>
			</xsl:when>
			<xsl:when test="$len = 1">
				<xsl:value-of select="$value + $ckbk:roman-nums[. = $roman]/@value"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:variable
					name="roman-num"
					select="$ckbk:roman-nums[. = substring($roman, 1, 1)]"/>
				<xsl:choose>
					<xsl:when test="$roman-num/following-sibling::ckbk:roman = substring($roman, 2, 1)">
						<xsl:call-template name="ckbk:roman-to-number-impl">
						<xsl:with-param
							name="roman"
							select="substring($roman,2,$len - 1)"/>
						<xsl:with-param
							name="value"
							select="$value - $roman-num/@value"/>
						</xsl:call-template>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="ckbk:roman-to-number-impl">
							<xsl:with-param
								name="roman"
								select="substring($roman,2,$len - 1)"/>
							<xsl:with-param
								name="value"
								select="$value + $roman-num/@value"/>
						</xsl:call-template>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>
```

## Обсуждение

Элемент `xsl:number` дает удобный способ преобразовать число в римскую запись. Однако обратное преобразование приходится выполнять самостоятельно. Показанный выше рекурсивный шаблон решает эту задачу прямолинейно и очень похож на приведенный в книге Jeni Tennison XSLT and XPath on the Edge (M&T Books, 2001).

Имеются два мелких подводных камня, но в большинстве случаев они не приводят к неприятностям.

Первый заключается в том, что это решение не работает, когда число записано римскими цифрами в разных регистрах (например, `IiI`). Такие аномалии вряд ли встретятся в нормальном источнике данных, тем не менее приведенный код и не отбросит входные данных как некорректные, и правильного результата не даст. Если добавить преобразование к единому регистру, то некорректные входные данные можно будет либо отвергнуть, либо нормально обработать.

Вторая неприятность связана с тем фактом, что не существует стандартного представления в римской записи чисел, больших 1000. Процессоры Saxon и Xalan сцепляют в этом случае буквы M, но другие могут поступать иначе.

Если по какой-то причине вам не нравится хранить данных о римских числительных в таблице стилей, то можете воспользоваться следующим выражением на языке XPath 1.0 для декодирования:

```xslt
<xsl:variable
	name="roman-value"
	select="($c = 'i' or $c = 'I') * 1 +
			($c = 'v' or $c = 'V') * 5 +
			($c = 'x' or $c = 'X') * 10 +
			($c = 'l' or $c = 'L') * 50 +
			($c = 'c' or $c = 'C') * 100 +
			($c = 'd' or $c = 'D') * 500 +
			($c = 'm' or $c = 'M') * 1000)"/>
```

В XSLT 2.0 можно воспользоваться вложенным выражением `if-the-else` или организовать справочную таблицу из последовательности:

```xslt
<xsl:variable
	name="roman-value"
	select="(1,5,10,50,100,500,1000)[index-of(('I', 'V', 'X', 'L', 'C', 'D', 'M'), upper-case($c))]"/>
```
