# Поиск подстроки с конца строки

## Задача

В XSLT нет функций для поиска в строке, начиная с конца.

## Решение

XSLT 1.0

С помощью рекурсии можно эмулировать поиск последнего вхождения подстроки `substr`. Эта техника позволяет написать шаблоны `substring-before-last` (выделение строки, предшествующей последнему вхождению) и `substring-after-last` (выделение строки, следующей за последним вхождению):

```xslt
<xsl:template name="str:substring-before-last">
	<xsl:param name="input"/>
	<xsl:param name="substr"/>
	<xsl:if test="$substr and contains($input, $substr)">
		<xsl:variable name="temp" select="substring-after($input, $substr)" />
		<xsl:value-of select="substring-before($input, $substr)" />
		<xsl:if test="contains($temp, $substr)">
			<xsl:value-of select="$substr" />
			<xsl:call-template name="str:substring-before-last">
				<xsl:with-param name="input" select="$temp" />
				<xsl:with-param name="substr" select="$substr" />
			</xsl:call-template>
		</xsl:if>
	</xsl:if>
</xsl:template>

<xsl:template name="str:substring-after-last">
	<xsl:param name="input"/>
	<xsl:param name="substr"/>
	<!-- Выделить строку, следующую за первым вхождением -->
	<xsl:variable name="temp" select="substring-after($input,$substr)"/>
	<xsl:choose>
		<xsl:when test="$substr and contains($temp,$substr)">
			<xsl:call-template name="str:substring-after-last">
				<xsl:with-param name="input" select="$temp"/>
				<xsl:with-param name="substr" select="$substr"/>
			</xsl:call-template>
		</xsl:when>
		<xsl:otherwise>
			<xsl:value-of select="$temp"/>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>
```

XSLT 2.0

В XSLT 2.0 нет вариантов функций `substring-before` / `substring-after`, которые позволяли бы искать от конца строки, но добиться желаемого результата позволяет функция `tokenize()`, основанная на применении регулярных выражений:

```xslt
<xsl:function name="ckbk:substring-before-last">
	<xsl:param name="input as xs:string"/>
	<xsl:param name="substr as xs:string"/>
	<xsl:sequence select="if ($substr) then if (contains($input, $substr)) then string-join(tokenize($input, $substr) [position() ne last()],$substr) else '' else $input" />
</xsl:function>

<xsl:function name="ckbk:substring-after-last">
	<xsl:param name="input as xs:string"/>
	<xsl:param name="substr as xs:string"/>
	<xsl:sequence select="if ($substr) then if (contains($input, $substr)) then tokenize($input, $substr)[last()] else '' else $input"/>
</xsl:function>
```

В обеих функциях нужно проверять, не является ли строка `substr` пустой, поскольку функция `tokenize` не примет пустой образец для поиска. К сожалению, эти реализации работают не совсем так, как встроенные аналоги. Связано это с тем, что `tokenize` трактует свой второй аргумент как регулярное выражение, а не как литеральную строку. И это может стать источником неожиданностей.

Можно исправить этот недостаток путем экранирования всех специальных символов, встречающихся в регулярном выражении. И включать или отключать такое поведение с помощью третьего булевского аргумента. Первоначальная версия с двумя аргументами и новая с тремя могут сосуществовать, так как XSLT допускает перегрузку функций (то есть функция полностью определяется своим именем и арностью (количеством аргументов).

```xslt
<xsl:function name="ckbk:substring-before-last">
	<xsl:param name="input as xs:string"/>
	<xsl:param name="substr as xs:string"/>
	<xsl:param name="mask-regex as boolean"/>
	<xsl:variable name="matchstr"
	select="if ($mask-regex) then replace($substr,'([.+?*^$])','\$1') else $substr"/>
	<xsl:sequence select="ckbk:substring-before-last($input,$matchstr)"/>
</xsl:function>

<xsl:function name="ckbk:substring-after-last">
	<xsl:param name="input"/>
	<xsl:param name="substr"/>
	<xsl:param name="mask-regex"/>
	<xsl:variable name="matchstr" select="if ($mask-regex) then replace($substr,'([.+?*^$])','\$1') else $substr"/>
	<xsl:sequence select="ckbk:substring-after-last($input,$matchstr)"/>
</xsl:function>
```

## Обсуждение

Обе функции поиска подстроки в XSLT (`substring-before` и `substring-after`) начинают поиск с начала строки. Но иногда нужно искать подстроку с конца строки. Проще всего решить эту задачу, рекурсивно применяя встроенные функции поиска, пока не будет найдено последнее вхождение подстроки.

В первой попытке написать эти шаблоны я столкнулся с неприятным эффектом, о котором вы должны помнить, когда работаете с рекурсивными шаблонами. Напомню, что выражение `contains($anything,'')` всегда возвращает `true`! Поэтому при рекурсивном вызове `substring-before-last` и `substring-after-last` я проверяю, что значение `$substr` не пусто. Без такой проверки мы попали бы в бесконечный цикл поиска пустой подстроки, а если реализация не поддерживает хвостовую рекурсию, то произошло бы переполнение стека.

Есть и другой алгоритм, который называется разделяй и властвуй или деление пополам. Его основная идея заключается в том, чтобы разбить строку на две половинки. Если искомая подстрока находится во второй половине, то первую можно не рассматривать и тем самым свести исходную задачу к другой, вдвое меньшей сложности. Этот процесс повторяется рекурсивно. Но нужно учесть еще случай, когда искомая строка частично находится в первой половине, а частично во второй. Ниже приведено решение для функции `substring-before-last`:

```xslt
<xsl:template name="str:substring-before-last">
	<xsl:param name="input"/>
	<xsl:param name="substr"/>
	<xsl:variable name="mid" select="ceiling(string-length($input) div 2)"/>
	<xsl:variable name="temp1" select="substring($input,1, $mid)"/>
	<xsl:variable name="temp2" select="substring($input,$mid +1)"/>
	<xsl:choose>
		<xsl:when test="$temp2 and contains($temp2,$substr)">
			<!--искомая строка во второй половине, поэтому просто добавим
			первую половину и -->
			<!-- выполним рекурсивный вызов для второй -->
			<xsl:value-of select="$temp1"/>
			<xsl:call-template name="str:substring-before-last">
				<xsl:with-param name="input" select="$temp2"/>
				<xsl:with-param name="substr" select="$substr"/>
			</xsl:call-template>
		</xsl:when>

		<!-- искомая строка на границе, задача решается простым вызовом substring-before -->
		<xsl:when test="contains(substring($input, $mid - string-length($substr) +1), $substr)">
			<xsl:value-of select="substring-before($input,$substr)"/>
		</xsl:when>

		<!--искомая строка в первой половине, поэтому вторую отбрасываем-->
		<xsl:when test="contains($temp1,$substr)">
			<xsl:call-template name="str:substring-before-last">
				<xsl:with-param name="input" select="$temp1"/>
				<xsl:with-param name="substr" select="$substr"/>
			</xsl:call-template>
		</xsl:when>

		<!-- Искомая строка не найдена, завершаемся -->
		<xsl:otherwise/>
	</xsl:choose>
</xsl:template>
```

Выясняется, что такой алгоритм деления пополам дает ощутимый выигрыш, только если просматриваемый текст достаточно велик (порядка 4000 символов и более). Можно написать шаблон-обертку, который будет выбирать подходящий алгоритм в зависимости от длины текста или переключаться с алгоритма деления пополам на более простой, если очередная часть оказывается достаточно короткой.
