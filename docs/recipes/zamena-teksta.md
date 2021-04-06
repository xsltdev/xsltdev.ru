# Замена текста

## Задача

Требуется заменить все вхождения заданной подстроки другой строкой.

## Решение

### XSLT 1.0

Следующий рекурсивный шаблон заменяет все вхождения искомой строки на строку замены.

```xml
<xsl:template name="search-and-replace">
  <xsl:param name="input" />
  <xsl:param name="search-string" />
  <xsl:param name="replace-string" />
  <xsl:choose>
    <!-- Смотрим, содержит ли входная строка искомую -->
    <xsl:when
      test="$search-string and contains($input,$search-string)"
    >
      <!-- Если да, конкатенируем подстроку, предшествующую искомой,
			со строкой замены, и со строкой, являющейся результатом
			рекурсивного применения шаблона к оставшейся подстроке -->
      <xsl:value-of
        select="substring-before($input,$search-string)"
      />
      <xsl:value-of select="$replace-string" />
      <xsl:call-template name="search-and-replace">
        <xsl:with-param
          name="input"
          select="substring-after($input,$search-string)"
        />
        <xsl:with-param
          name="search-string"
          select="$search-string"
        />
        <xsl:with-param
          name="replace-string"
          select="$replace-string"
        />
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <!-- Больше вхождений искомой строки нет, поэтому возвращаем
			текущую входную строку -->
      <xsl:value-of select="$input" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Если вы хотите заменять только слова целиком, то следует проверять, что непосредственно до и после искомой строки находятся символы, принадлежащие классу разделителей слов. Мы будем считать, что разделителями являются символы, хранящиеся в переменной `$punc`, а также все символы пропуска.

```xml
<xsl:template name="search-and-replace-whole-words-only">
  <xsl:param name="input" />
  <xsl:param name="search-string" />
  <xsl:param name="replace-string" />
  <xsl:variable
    name="punc"
    select="concat('.,;:()[]!?$@&amp;&quot;',&quot;&apos;&quot;)"
  />
  <xsl:choose>
    <!-- Смотрим, содержит ли входная строка искомую -->
    <xsl:when test="contains($input,$search-string)">
      <!-- Если да, проверяем, что до и после нее находятся
			разделители слов -->
      <xsl:variable
        name="before"
        select="substring-before($input,$search-string)"
      />
      <xsl:variable
        name="before-char"
        select="substring(concat(' ',$before),
			string-length($before) + 1,1)"
      />
      <xsl:variable
        name="after"
        select="substring-after($input,$search-string)"
      />
      <xsl:variable
        name="after-char"
        select="substring($after,1,1)"
      />
      <xsl:value-of select="$before" />
      <xsl:choose>
        <xsl:when
          test="(not(normalize-space($before-char)) or contains($punc,$before-char)) and (not(normalize-space($after-char)) or contains($punc,$after-char))"
        >
          <xsl:value-of select="$replace-string" />
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$search-string" />
        </xsl:otherwise>
      </xsl:choose>
      <xsl:call-template
        name="search-and-replace-whole-words-only"
      >
        <xsl:with-param name="input" select="$after" />
        <xsl:with-param
          name="search-string"
          select="$search-string"
        />
        <xsl:with-param
          name="replace-string"
          select="$replace-string"
        />
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <!-- Больше вхождений искомой строки нет, поэтому возвращаем
			текущую входную строку -->
      <xsl:value-of select="$input" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Обратите внимание на то, как переменная `$punc` строится с помощью функции `concat()`, чтобы в нее вошли символы одиночной и двойной кавычек. Никак по-другому это сделать невозможно, поскольку ни XPath, ни XSLT, в отличие от языка C, не позволяют экранировать специальные символы с помощью обратной косой черты (`\`). В XPath 2.0 кавычку можно ввести в текст программы, записав ее два раза подряд.

### XSLT 2.0

Функциональность шаблона `search-and-replace` в версии 2.0 встроена в функцию `replace()`. Функциональность шаблона `search-and-replace-whole-words-only` можно имитировать с помощью регулярных выражений для сопоставления со словами:

```xml
<xsl:function
  name="ckbk:search-and-replace-whole-words-only"
>
  <xsl:param name="input" as="xs:string" />
  <xsl:param name="search-string" as="xs:string" />
  <xsl:param name="replace-string" as="xs:string" />
  <xsl:sequence
    select="replace($input, concat('(^|\W)',$search-string,'(\W|$)'),concat('$1',$replace-string,'$2'))"
  />
</xsl:function>
```

Во многих реализациях регулярных выражений для сопоставления с границей слова предусмотрен метасимвол `\b`, но в XPath 2.0 он не поддерживается. Здесь мы строим регулярное выражение, окружая строку `$search-string` конструкциями `(^|\W)` и `(\W|$)`, где `\W` означает «не `\w`» или «не символ, входящий в состав слова».

Метасимволы `^` и `$` учитывают случай, когда слово находится в начале или в конце строки. Мы должны также вернуть сопоставленный символ назад в текст, воспользовавшись ссылками на запомненные группы `$1` и `$2`.

Функция `replace()` позволяет больше, чем в решении для XPath 1.0, так как она пользуется регулярными выражениями и может запоминать отдельные сопоставленные части и подставлять их в строку замены с помощью псевдопеременных `$1`, `$2` и т. д.

## Обсуждение

Поиск и замена – типичная задача обработки текста. Представленное выше решение – это самая прямолинейная реализация, написанная на чистом XSLT. У читателя может возникнуть мысль, что производительность такого решения недостаточна. Ведь для каждого выхождения искомой строки вызываются функции `contains()`, `substring-before()` и `substring-after()`. Вполне вероятно, что каждая из этих функций повторно просматривает всю входную строку в поисках искомой. И, стало быть, при таком подходе выполняется на два поиска больше, чем необходимо. Немного поразмыслив, вы можете найти решения, показанные в примерах 2.4 и 2.5, которые на первый взгляд представляются более эффективными.

Пример 2.4. Использование временной строки в неудачной попытке улучшить производительность поиска и замены

```xml
<xsl:template name="search-and-replace">
  <xsl:param name="input" />
  <xsl:param name="search-string" />
  <xsl:param name="replace-string" />
  <!-- Найти подстроку, предшествующую искомой строке,
	и сохранить ее в переменной -->
  <xsl:variable
    name="temp"
    select="substring-before($input,$search-string)"
  />
  <xsl:choose>
    <!-- Если $temp не пуста или входная строка начинается с искомой
		подстроки, то необходимо произвести замену. Тем самым мы
		избегаем вызова функции contains(). -->
    <xsl:when
      test="$temp or starts-with($input,$search-string)"
    >
      <xsl:value-of
        select="concat($temp,$replace-string)"
      />
      <xsl:call-template name="search-and-replace">
        <!-- Вызова substring-after избегаем за счет
				использования длины temp и искомой строки
				для извлечения остатка строки в рекурсивном вызове. -->
        <xsl:with-param
          name="input"
          select="substring($input,string-length($temp)+ string-length($search-string)+1)"
        />
        <xsl:with-param
          name="search-string"
          select="$search-string"
        />
        <xsl:with-param
          name="replace-string"
          select="$replace-string"
        />
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$input" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Пример 2.5. Использование временного целого в неудачной попытке улучшить производительность поиска и замены

```xml
<xsl:template name="search-and-replace">
  <xsl:param name="input" />
  <xsl:param name="search-string" />
  <xsl:param name="replace-string" />
  <!-- Найти длину подстроки, предшествующей искомой строке,
	и сохранить ее в переменной -->
  <xsl:variable
    name="temp"
    select="string-length(substring-before($input,$search-string))"
  />
  <xsl:choose>
    <!-- Если $temp не равно 0 или входная строка начинается
		с искомой подстроки, то необходимо произвести замену.
		Тем самым мы избегаем вызова функции contains(). -->
    <xsl:when
      test="$temp or starts-with($input,$search-string)"
    >
      <xsl:value-of select="substring($input,1,$temp)" />
      <xsl:value-of select="$replace-string" />
      <!-- Вызова substring-after избегаем за счет
			использования temp и длины искомой строки для
			извлечения остатка строки в рекурсивном вызове. -->
      <xsl:call-template name="search-and-replace">
        <xsl:with-param
          name="input"
          select="substring($input,$temp+string-length($search-string)+1)"
        />
        <xsl:with-param
          name="search-string"
          select="$search-string"
        />
        <xsl:with-param
          name="replace-string"
          select="$replace-string"
        />
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$input" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Идея обоих вариантов одна и та же: если запомнить, где функция `substring-before()` нашла соответствие, то можно воспользоваться этой информацией для того, чтобы не вызывать функции `contains()` и `substring-after()`. Но мы вынуждены обращаться к функции `starts-with()`, чтобы выделить случай, когда `substring-before()` возвращает пустую строку; такое может случиться, если искомая строка отсутствует или исходная строка начинается с искомой.

Впрочем, `starts-with()`, вероятно, работает быстрее, чем `contains()`, поскольку ей не нужно просматривать больше символов, чем содержится в искомой строке. Второй вариант отличается от первого предположением, что сохранение целочисленного смещения может оказаться эффективнее сохранения подстроки целиком.

Увы, ни одна из этих оптимизаций не дает никакого выигрыша при использовании процессора XSLT Xalan. Более того, при некоторых входных данных реализации Saxon и XT показывают на порядок большее время работы! Столкнувшись с этим парадоксальным результатом, я сначала предположил, что использование переменной `$temp` в рекурсивном вызове как-то препятствует оптимизации хвостовой рекурсии в Saxon (см. рецепт 2.6). Однако, экспериментируя с длинными входными строками, в которых искомая строка встречается много раз, я не сумел вызвать переполнение стека. Тогда я заподозрил, что по какой-то причине функция `substring()` в XSLT работает медленнее, чем `substring-before()` и `substring-after()`.

Майкл Кэй, автор реализации Saxon, указал, что `substring()` действительно работает медленно из-за сложных правил, которые приходится поддерживать, в том числе округления аргументов с плавающей точкой, обработки особых случаев, когда начальная или конечная точки оказываются за границами строки, и вопросов, связанных с суррогатными парами Unicode. Напротив, функции `substring-before()`
и `substring-after()` гораздо лучше транслируются на язык Java.

Отсюда следует извлечь урок: оптимизация – дело непростое, особенно в XSLT, когда имеются существенные различия между реализациями, а в новых версиях авторы стараются применить дополнительные оптимизации. Если вы не готовы часто профилировать программу, то лучше ограничиться простыми решениями.

К числу достоинств простых решений можно отнести и то, что, скорее всего, они будут вести себя одинаково в разных реализациях XSLT.
