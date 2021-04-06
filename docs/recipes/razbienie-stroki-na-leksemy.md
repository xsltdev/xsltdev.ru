# Разбиение строки на лексемы

## Задача

Требуется разбить строку на лексемы, используя в качестве разделителей один или несколько заданных символов.

## Решение

### XSLT 1.0

Само решение принадлежит Джени Теннисон (мои лишь комментарии). Каждая лексема возвращается в виде узла, состоящего из элемента `token`, содержащего текст. Если строка разделителей пуста, то по умолчанию исходная строка разбивается на отдельные символы.

```xml
<xsl:template name="tokenize">
	<xsl:param name="string" select="''" />
	<xsl:param name="delimiters" select="' &#x9;&#xA;'" />
	<xsl:choose>
		<!-- Ничего не делать, если строка пуста -->
		<xsl:when test="not($string)" />
		<!-- Если разделителей нет, строка разбивается на отдельные символы. -->
		<xsl:when test="not($delimiters)">
			<xsl:call-template name="_tokenize-characters">
				<xsl:with-param name="string" select="$string" />
			</xsl:call-template>
		</xsl:when>
		<xsl:otherwise>
			<xsl:call-template name="_tokenize-delimiters">
				<xsl:with-param name="string" select="$string" />
				<xsl:with-param name="delimiters" select="$delimiters" />
			</xsl:call-template>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

<xsl:template name="_tokenize-characters">
	<xsl:param name="string" />
	<xsl:if test="$string">
		<token><xsl:value-of select="substring($string, 1, 1)" /></token>
		<xsl:call-template name="_tokenize-characters">
			<xsl:with-param name="string" select="substring($string, 2)" />
		</xsl:call-template>
	</xsl:if>
</xsl:template>

<xsl:template name="_tokenize-delimiters">
	<xsl:param name="string" />
	<xsl:param name="delimiters" />
	<xsl:param name="last-delimit"/>
	<!-- Извлечь разделитель -->
	<xsl:variable name="delimiter" select="substring($delimiters, 1, 1)" />
	<xsl:choose>
		<!-- Если строка разделителей пуста, имеем лексему -->
		<xsl:when test="not($delimiter)">
			<token><xsl:value-of select="$string"/></token>
		</xsl:when>
		<!-- Если строка содержит хотя бы один разделитель, мы должны
		разбить ее -->
		<xsl:when test="contains($string, $delimiter)">
			<!-- Если строка начинается с разделителя, обрабатывать
			предшествующую подстроку не нужно -->
			<xsl:if test="not(starts-with($string, $delimiter))">
				<!-- Обрабатываем часть, предшествующую текущему разделителю, -->
				<!-- пробуя следующий разделитель. Если следующего нет, то первая
				проверка в этом шаблоне выделяет лексему -->
				<xsl:call-template name="_tokenize-delimiters">
					<xsl:with-param name="string" select="substring-before($string, $delimiter)" />
					<xsl:with-param name="delimiters" select="substring($delimiters, 2)" />
				</xsl:call-template>
			</xsl:if>
			<!-- Обрабатываем часть, следующую за разделителем, применяя
			текущий разделитель -->
			<xsl:call-template name="_tokenize-delimiters">
				<xsl:with-param name="string" select="substring-after($string, $delimiter)" />
				<xsl:with-param name="delimiters" select="$delimiters" />
			</xsl:call-template>
		</xsl:when>
		<xsl:otherwise>
			<!-- Текущий разделитель не встречается, поэтому переходим
			к следующему -->
			<xsl:call-template name="_tokenize-delimiters">
				<xsl:with-param name="string" select="$string" />
				<xsl:with-param name="delimiters" select="substring($delimiters, 2)" />
			</xsl:call-template>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>
```

### XSLT 2.0

Воспользуйтесь встроенной функцией `tokenize()`.

## Обсуждение

Выделение лексем – типичная задача обработки текста. В языках, где есть развитый аппарат регулярных выражений, она решается тривиально. В этом отношении такие языки, как Perl, Python, JavaScript и Tcl пока превосходят XSLT. Однако, как показано в этом рецепте, разбиение на лексемы можно выполнить, даже не выходя за пределы чистого XSLT. Если вы готовы прибегнуть к расширениям, то можете реализовать низкоуровневые операции со строками на каком-нибудь другом языке.

Если же вам больше нравится подход XSLT, но ваш процессор не оптимизирует хвостовую рекурсию, то в шаблоне `_tokenize-characters` можно воспользоваться алгоритмом «разделяй и властвуй»:

```xml
<xsl:template name="_tokenize-characters">
  <xsl:param name="string" />
  <xsl:param name="len" select="string-length($string)" />
  <xsl:choose>
    <xsl:when test="$len = 1">
      <token>
        <xsl:value-of select="$string" />
      </token>
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template name="_tokenize-characters">
        <xsl:with-param
          name="string"
          select="substring($string, 1, floor($len div 2))"
        />
        <xsl:with-param
          name="len"
          select="floor($len div 2)"
        />
      </xsl:call-template>
      <xsl:call-template name="_tokenize-characters">
        <xsl:with-param
          name="string"
          select="substring($string, floor($len div 2) + 1)"
        />
        <xsl:with-param
          name="len"
          select="ceiling($len div 2)"
        />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

В языке Java также имеется готовый класс для разбиения строки на лексемы (`java.util.StringTokenizer`).
