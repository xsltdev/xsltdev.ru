# Реализация стандартных математических функций

## Задача

Требуется выйти за пределы математики для пятого класса, но в XSLT необходимых средств нет.

## Решение

### XSLT 1.0

Ниже предлагаются реализации на языке XSLT 1.0 функций для вычисления абсолютного значения, квадратного корня, логарифмов, степенной функции и факториала.

#### Абсолютное значение ckbk:abs(x)

Вот очевидный, но многословный способ получить абсолютное значение числа:

```xml
<xsl:template name="ckbk:abs">
  <xsl:param name="x" />
  <xsl:choose>
    <xsl:when test="$x &lt; 0">
      <xsl:value-of select="$x * -1" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:value-of select="$x" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Короткий, но с первого взгляда не понятный способ основан на том факте, что значение `true` преобразуется в число `1`, а `false` – в `0`:

```xml
<xsl:template name="ckbk:abs">
  <xsl:param name="x" />
  <xsl:value-of select="(1 - 2*($x &lt; 0)) * $x" />
</xsl:template>
```

Этот вариант мне нравится больше из-за своей краткости. Можно также реализовать эту функцию в виде расширения (см. главу 12).

#### Квадратный корень ckbk:sqrt(x)

Нэйт Остин (Nate Austin) предложил для проекта EXSLT реализацию квадратного корня на чистом XSLT с помощью метода Ньютона.

```xml
<xsl:template name="ckbk:sqrt">
  <!-- Число, из которого извлекается квадратный корень. -->
  <xsl:param name="number" select="0" />
  <!-- Текущее "приближение".
	Внутренняя переменная. -->
  <xsl:param name="try" select="1" />
  <!-- Номер текущей итерации. Сравнивается с maxiter для ограничения
	количества повторений цикла. -->
  <xsl:param name="iter" select="1" />
  <!-- Этот параметр предотвращает бесконечный цикл. -->
  <xsl:param name="maxiter" select="20" />
  <!-- Этот шаблон написал Нэйт Остин, применив метод Ньютона для
	извлечения корня. -->
  <xsl:choose>
    <xsl:when
      test="$try * $try = $number or $iter > $maxiter"
    >
      <xsl:value-of select="$try" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template name="ckbk:sqrt">
        <xsl:with-param name="number" select="$number" />
        <xsl:with-param
          name="try"
          select="$try - (($try * $try - $number) div (2 * $try))"
        />
        <xsl:with-param name="iter" select="$iter + 1" />
        <xsl:with-param name="maxiter" select="$maxiter" />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Изменение начального значения параметра `try` может заметно повысить производительность:

```xml
<xsl:template name="math:sqrt">
  <!-- Число, из которого извлекается квадратный корень. -->
  <xsl:param name="number" select="0" />
  <!-- Текущее "приближение". Внутренняя переменная. -->
  <xsl:param
    name="try"
    select="($number &lt; 100) +102
		($number >= 100 and $number &lt; 1000) * 10 +
		($number >= 1000 and $number &lt; 10000) * 31 +
		($number >= 10000) * 100"
  />
  <!-- Больше ничего не меняется. -->
</xsl:template>
```

Этот нехитрый трюк (в котором снова применяется преобразование булевских значений в числовые) позволяет подобрать величину `try` так, чтобы она лучше аппроксимировала квадратный корень на самой первой итерации. Вычислив в тестовой программе корни из всех чисел от `1` до `10000`, я получил выигрыш `10%`.

#### Логарифмы: ckbk:log10(number), ckbk:log(number) и ckbk:logN(x,base)

Если имеющийся у вас процессор XSLT поддерживает функцию `exsl:log()` (натуральный логарифм), то реализовать логарифм по любому другому основанию просто. На псевдокоде это выглядит так:

```
<!-- Основное правило логарифмов -->
ckbk:logN(x,base) = ckbk:logN(x,diffBase) div ckbk:logN(base,diffBase)
```

К сожалению, ни один из процессоров, перечисленных на сайте EXSLT.org, пока не поддерживает функцию `exsl:log`. Следующий вариант – реализовать расширение на языке Java, воспользовавшись классом `java.lang.Math.log` или функцией `Math.log` в JavaScript. Наконец, можно не прибегать к расширениям вовсе, а написать `log10` на чистом XSLT с приемлемой для большинства приложений точностью и производительностью. Имея реализацию `log10()`, можно вычислять произвольные логарифмы, применяя основное правило.

```xml
<xsl:template name="ckbk:log10">
	<xsl:param name="number" select="1"/>
	<xsl:param name="n" select="0"/>
	<!-- служебная переменная для
	хранения целой части результата -->
	<xsl:choose>
		<!-- Для нуля и отрицательных чисел логарифм не определен -->
		<xsl:when test="$number &lt;= 0">
			<xsl:value-of select="NaN"/>
		</xsl:when>
		<xsl:when test="$number &lt; 1">
			<!-- Логарифм числа, меньшего 1, отрицателен -->
			<xsl:call-template name="ckbk:log10">
				<xsl:with-param name="number" select="$number * 10"/>
				<xsl:with-param name="n" select="$n - 1"/>
			</xsl:call-template>
		</xsl:when>
		<xsl:when test="$number > 10">
			<!-- Если число больше 10, его логарифм больше 1 -->
			<xsl:call-template name="ckbk:log10">
				<xsl:with-param name="number" select="$number div 10"/>
				<xsl:with-param name="n" select="$n + 1"/>
			</xsl:call-template>
		</xsl:when>
		<xsl:when test="$number = 10">
			<xsl:value-of select="$n + 1"/>
		</xsl:when>
		<xsl:otherwise>
			<!-- Нам нужно лишь уметь вычислить логарифмы
			чисел в диапазоне [1,10) -->
			<xsl:call-template name="ckbk:log10-util">
				<xsl:with-param name="number" select="$number"/>
				<xsl:with-param name="n" select="$n"/>
			</xsl:call-template>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

<!-- Вычисляет натуральный логарифм числа -->
<xsl:template name="ckbk:log">
	<xsl:param name="number" select="1"/>
	<xsl:variable name="log10-e" select="0.4342944819"/>
	<xsl:variable name="log10">
		<xsl:call-template name="ckbk:log10">
			<xsl:with-param name="number" select="$number"/>
		</xsl:call-template>
	</xsl:variable>
	<xsl:value-of select="$log10 div $log10-e"/>
</xsl:template>

<!-- Вычисляет логарифм числа по основанию b -->
<xsl:template name="ckbk:log-b">
	<xsl:param name="number" select="1"/>
	<xsl:param name="base" select="2"/>104
	<xsl:variable name="log10-base">
		<xsl:call-template name="ckbk:log10">
			<xsl:with-param name="number" select="$base"/>
		</xsl:call-template>
	</xsl:variable>
	<xsl:variable name="log10">
		<xsl:call-template name="ckbk:log10">
			<xsl:with-param name="number" select="$number"/>
		</xsl:call-template>
	</xsl:variable>
	<xsl:value-of select="$log10 div $log10-base"/>
</xsl:template>

<!-- Вычисляет log10 для чисел в диапазоне [1,10) + n -->
<xsl:template name="ckbk:log10-util">
	<xsl:param name="number"/>
	<xsl:param name="n"/>
	<xsl:param name="frac" select="0"/>
	<!-- служебная переменная для хранения дробной части -->
	<xsl:param name="k" select="0"/>
	<!-- счетчик итераций -->
	<xsl:param name="divisor" select="2"/>
	<!-- последовательные степени 2 для построения дробной части -->
	<xsl:param name="maxiter" select="38"/>
	<!-- Число итераций. 38 более чем достаточно для получения
	не менее 10 точных цифр -->
	<xsl:variable name="x" select="$number * $number"/>
	<xsl:choose>
		<xsl:when test="$k >= $maxiter">
			<!-- Округлить до 10 значащих десятичных цифр -->
			<xsl:value-of select="$n + round($frac * 10000000000) div 10000000000"/>
		</xsl:when>
		<xsl:when test="$x &lt; 10">
			<xsl:call-template name="ckbk:log10-util">
				<xsl:with-param name="number" select="$x"/>
				<xsl:with-param name="n" select="$n"/>
				<xsl:with-param name="k" select="$k + 1"/>
				<xsl:with-param name="divisor" select="$divisor * 2"/>
				<xsl:with-param name="frac" select="$frac"/>
				<xsl:with-param name="maxiter" select="$maxiter"/>
			</xsl:call-template>
		</xsl:when>
		<xsl:otherwise>
			<xsl:call-template name="ckbk:log10-util">
				<xsl:with-param name="number" select="$x div 10"/>
				<xsl:with-param name="n" select="$n"/>
				<xsl:with-param name="k" select="$k + 1"/>
				<xsl:with-param name="divisor" select="$divisor * 2"/>
				<xsl:with-param name="frac" select="$frac + (1 div $divisor)"/>
				<xsl:with-param name="maxiter" select="$maxiter"/>
			</xsl:call-template>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>
```

Основная задача шаблона `ckbk:log10` – свести задачу вычисления `log10(x)` к более простой задаче вычисления `log10(x : 1 <= x < 10)`. Кроме того, контролируются входные данные, так как для нуля и отрицательных чисел логарифм не определен.

Вспомогательный шаблон `ckbk:log10-util` делает всю сложную работу. Это основанная на хвостовой рекурсии реализация итеративного алгоритма, описанного в книге Кнута. Чтобы организовать хвостовую рекурсию и существенно упростить реализацию, мы ввели несколько служебных параметров:

`n`

Целая часть результата, передаваемая в шаблон `ckbk:log10`. Без этого параметра можно было бы обойтись, так как передаваемую величину можно хранить, пока `ckbk:log10-util` занимается своей работой. Однако он позволяет избежать необходимости сохранять результат `ckbk:log10-util` в переменной.

`frac`

Дробная часть результата. Именно ее мы и ищем.

`k`

Счетчик итераций, который увеличивается на `1` при каждом рекурсивном вызове. Рекурсия прекращается, как только `$k > $maxiter`.

`divisor`

Число, которому присваивается следующая по порядку степень `2` при каждом рекурсивном вызове (т. е. 2, 4, 8, 16, ...). Величина `1 div $divisor` прибавляется к `frac` по мере аппроксимации логарифма.

`maxiter`

Количество итераций для вычисления `frac`. Чем больше `maxiter`, тем выше точность результата (в границах, определяемых представлением числа с плавающей точкой в формате IEEE). Этот параметр можно было бы и опустить, но он позволяет вызывающей программе задать требуемое число итераций и тем самым установить компромисс между быстродействием и точностью.

#### Степенная функция: ckbk:power(base,power)

В настоящий момент на сайте EXSLT.org не упомянуты процессоры, поддерживающие функцию `ckbk:power()`. Однако она определена в проекте EXSLT и может быть легко реализована на чистом XSLT. Джени Теннисон предлагает такой шаблон:

```xml
<xsl:template name="ckbk:power">
  <xsl:param name="base" />
  <xsl:param name="power" />
  <xsl:choose>
    <xsl:when test="$power = 0">
      <xsl:value-of select="$result" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:variable name="temp">
        <xsl:call-template name="ckbk:power">
          <xsl:with-param name="base" select="$base" />
          <xsl:with-param
            name="power"
            select="$power - 1"
          />
        </xsl:call-template>
      </xsl:variable>
      <xsl:value-of select="$base * $temp" />
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Для большинства приложений этот код вполне приемлем. Однако рекурсия в нем не хвостовая и алгоритмически он не самый эффективный. Следующая реализация лишена первого недостатка, а число операций умножения в ней уменьшилось с `O($power)` до `O(log2($power)`. Кроме того, добавлена обработка ошибок, предотвращающая бесконечную рекурсию в случае, когда `$power` равно `NaN`.

```xml
<xsl:template name="ckbk:power">
  <xsl:param name="base" />
  <xsl:param name="power" />
  <xsl:param name="result" select="1" />
  <xsl:choose>
    <xsl:when
      test="number($base) != $base or number($power) != $power"
    >
      <xsl:value-of select="'NaN'" />
    </xsl:when>
    <xsl:when test="$power = 0">
      <xsl:value-of select="$result" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template name="ckbk:power">
        <xsl:with-param
          name="base"
          select="$base * $base"
        />
        <xsl:with-param
          name="power"
          select="floor($power div 2)"
        />
        <xsl:with-param
          name="result"
          select="$result * $base * ($power mod 2) + $result * not($power mod 2)"
        />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Здесь мы ввели служебный параметр `$result`, в котором строится окончательный результат. Он и позволяет организовать хвостовую рекурсию. При каждом рекурсивном вызове основание возводится в квадрат, а показатель степени уменьшается вдвое. Поскольку мы пользуемся функцией `floor()`, `$result` достигнет `0` за `ceiling(log2($power))` рекурсивных вызовов. Это повышает производительность. Хитроумная часть заключается в вычислении `$result` на каждом шаге.

Проанализируем это выражение, обращая внимание на оба слагаемых. Выражение `$result * $base * ($power mod 2)` равно `$result * $base`, если `$power` нечетно и `0` в противном случае. Наоборот, `$result * not($power mod 2)` равно `0`, когда `$power` четно и `$result` в противном случае. В XPath 2.0 это можно было бы записать как `if ($power % 2) then result *base else result`.

А в XPath 1.0 приходится прибегать к трюкам. Так или иначе, шаблон вычисляет сумму b<sup>1</sup> _ base + b<sup>2</sup> _ base<sup>2</sup> + b<sup>3</sup> _ base<sup>4</sup> + b<sup>4</sup> _ base<sup>8</sup> ..., где b<sup>i</sup> попеременно равно `0` или `1`.

Легко видеть, что суммирование может производиться до base<sup>power</sup> для произвольного целого числа `power`, если задавать в качестве b<sup>i</sup> подходящие значения, что как раз и делает выражение `$power mod 2`. Если идея осталась непонятной, проработайте на бумаге несколько примеров, чтобы убедиться, что все работает правильно.

Показанная выше реализация степенной функции умеет вычислять только целые положительные степени. Однако, как известно любому студенту-математику, x<sup>y</sup> является вещественным числом для всех вещественных `x` и `y`, а не только для натуральных показателей степени. Хорошо было бы иметь общую версию функции `power()`, вдруг пригодится. Ниже мы приводим соответствующий код.

Чтобы не путать его с `power()`, шаблон называется `power-f()`, где `f` происходит от «floating point» (с плавающей точкой). Если хотите, можете назвать более общую версию `power()`, только внесите изменения в код ниже. Впрочем, иметь более специализированную версию в качестве отдельной функции тоже полезно.

```xml
<xsl:template name="ckbk:power-f">
	<xsl:param name="base"/>
	<xsl:param name="power"/>
	<xsl:choose>
		<xsl:when test="number($base) != $base or number($power) != $power">
			<xsl:value-of select="'NaN'"/>
		</xsl:when>
		<xsl:when test="$power &lt; 0">
			<xsl:variable name="result">
				<xsl:call-template name="ckbk:power-f">
					<xsl:with-param name="base" select="$base"/>
					<xsl:with-param name="power" select="-1 * $power"/>
				</xsl:call-template>
			</xsl:variable>
			<xsl:value-of select="1 div $result"/>
		</xsl:when>
		<xsl:otherwise>
			<xsl:variable name="powerN" select="floor($power)"/>
			<xsl:variable name="resultN">
				<xsl:call-template name="ckbk:power">
					<xsl:with-param name="base" select="$base"/>
					<xsl:with-param name="power" select="$powerN"/>
				</xsl:call-template>
			</xsl:variable>
			<xsl:choose>
				<xsl:when test="$power - $powerN">
					<xsl:variable name="resultF">
						<xsl:call-template name="ckbk:power-frac">
							<xsl:with-param name="base" select="$base"/>
							<xsl:with-param name="power" select="$power - $powerN"/>
						</xsl:call-template>
					</xsl:variable>
					<xsl:value-of select="$resultN * $resultF"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$resultN"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

<xsl:template name="ckbk:power-frac">
	<xsl:param name="base"/>
	<xsl:param name="power"/>
	<xsl:param name="n" select="1"/>
	<xsl:param name="ln_base">
		<xsl:call-template name="ckbk:log">
			<xsl:with-param name="number" select="$base"/>
		</xsl:call-template>
	</xsl:param>
	<xsl:param name="ln_base_n" select="$ln_base"/>
	<xsl:param name="power_n" select="$power"/>
	<xsl:param name="n_fact" select="$n"/>
	<xsl:param name="result" select="1"/>

	<xsl:choose>
		<xsl:when test="20 >= $n">
			<xsl:call-template name="ckbk:power-frac">
				<xsl:with-param name="base" select="$base"/>
				<xsl:with-param name="power" select="$power"/>
				<xsl:with-param name="n" select="$n + 1"/>
				<xsl:with-param name="ln_base" select="$ln_base "/>
				<xsl:with-param name="ln_base_n" select="$ln_base_n * $ln_base"/>
				<xsl:with-param name="power_n" select="$power_n * $power"/>
				<xsl:with-param name="n_fact" select="$n_fact * ($n+1)"/>
				<xsl:with-param name="result" select="$result + ($power_n * $ln_base_n) div $n_fact"/>
			</xsl:call-template>
		</xsl:when>
		<xsl:otherwise>
			<xsl:value-of select="round($result * 1000000000) div 1000000000"/>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>
```

#### Факториал

Как это ни странно, в проекте EXSLT не определена функция для вычисления факториала. Разумеется, реализовать ее несложно:

```xml
<xsl:template name="ckbk:fact">
  <xsl:param name="number" select="0" />
  <xsl:param name="result" select="1" />
  <xsl:choose>
    <xsl:when
      test="$number &lt; 0 or floor($number) != $number"
    >
      <xsl:value-of select="'NaN'" />
    </xsl:when>
    <xsl:when test="$number &lt; 2">
      <xsl:value-of select="$result" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template name="ckbk:fact">
        <xsl:with-param
          name="number"
          select="$number - 1"
        />
        <xsl:with-param
          name="result"
          select="$number * $result"
        />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

Полезное обобщение факториала – это функция, которая вычисляет произведение всех чисел из заданного диапазона:

```xml
<xsl:template name="ckbk:prod-range">
  <xsl:param name="start" select="1" />
  <xsl:param name="end" select="1" />
  <xsl:param name="result" select="1" />
  <xsl:choose>
    <xsl:when test="$start > $end">
      <xsl:value-of select="$result" />
    </xsl:when>
    <xsl:otherwise>
      <xsl:call-template name="ckbk:prod-range">
        <xsl:with-param name="start" select="$start + 1" />
        <xsl:with-param name="end" select="$end" />
        <xsl:with-param
          name="result"
          select="$start * $result"
        />
      </xsl:call-template>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>
```

### XSLT 2.0

В версии 2.0 функция `abs()` встроена. Прочие можно для пущего удобства реализовать как функции.

```xml
<!-- Степенная функция -->
<xsl:function name="ckbk:power" as="xs:double">
	<xsl:param name="base" as="xs:double"/>
	<xsl:param name="exp" as="xs:integer"/>
	<xsl:sequence
		select="if ($exp lt 0) then ckbk:power(1.0 div $base, - $exp) else if ($exp eq 0) then 1e0 else $base * ckbk:power($base, $exp - 1)"/>
</xsl:function>

<!-- Квадратный корень -->
<xsl:function name="ckbk:sqrt" as="xs:double">
	<xsl:param name="number" as="xs:double"/>
	<xsl:variable name="try" select="if ($number lt 100.0) then 1.0
		else if ($number gt 100.0 and $number lt
		1000.0) then 10.0
		else if ($number gt 1000.0 and $number lt
		10000.0) then 31.0
		else 100.00" as="xs:decimal"/>
	<xsl:sequence select="if ($number ge 0) then ckbk:sqrt($number,$try,1,20) else 'NaN'"/>
</xsl:function>

<xsl:function name="ckbk:sqrt" as="xs:double">
	<xsl:param name="number" as="xs:double"/>
	<xsl:param name="try" as="xs:double"/>
	<xsl:param name="iter" as="xs:integer"/>
	<xsl:param name="maxiter" as="xs:integer"/>
	<xsl:variable name="result" select="$try * $try" as="xs:double"/>
	<xsl:sequence select="if ($result eq $number or $iter gt $maxiter)
		then $try
		else ckbk:sqrt($number, ($try - (($result - $number)
		div (2 * $try))), $iter + 1, $maxiter)"/>
</xsl:function>

<!-- Факториал -->
<xsl:function name="ckbk:factorial" as="xs:decimal">
	<xsl:param name="n" as="xs:integer"/>
	<xsl:sequence select="if ($n eq 0) then 1 else $n * ckbk:factorial($n - 1)"/>
</xsl:function>

<!-- Prod-range -->
<xsl:function name="ckbk:prod-range" as="xs:decimal">
	<xsl:param name="from" as="xs:integer"/>
	<xsl:param name="to" as="xs:integer"/>
	<xsl:sequence select="if ($from ge $to)
		then $from
		else $from * ckbk:prod-range($from + 1, $to)"/>
</xsl:function>

<!-- Log10 -->
<xsl:function name="ckbk:log10" as="xs:double">
	<xsl:param name="number" as="xs:double"/>
	<xsl:sequence select="if ($number le 0) then 'NaN' else ckbk:log10($number,0)"/>
</xsl:function>

<xsl:function name="ckbk:log10" as="xs:double">
	<xsl:param name="number" as="xs:double"/>
	<xsl:param name="n" as="xs:double"/>
	<xsl:sequence select="if ($number le 1)
		then ckbk:log10($number * 10, $n - 1)
		else if($number gt 10)
		then ckbk:log10($number div 10, $n + 1)Реализация математических функций
		113
		else if($number eq 10)
		then $n + 1
		else $n + ckbk:log10-util($number,0,0,2,38)"/>
</xsl:function>

<xsl:function name="ckbk:log10-util" as="xs:double">
	<xsl:param name="number" as="xs:double"/>
	<xsl:param name="frac" as="xs:double"/>
	<xsl:param name="iter" as="xs:integer"/>
	<xsl:param name="divisor" as="xs:double"/>
	<xsl:param name="maxiter" as="xs:integer"/>
	<xsl:variable name="x"select="$number * $number"/>
	<xsl:sequence select="if ($iter ge $maxiter)
		then round-half-to-even($frac,10)
		else if ($x lt 10)
		then ckbk:log10-util($x,$frac,$iter + 1,
		$divisor * 2, $maxiter)
		else ckbk:log10-util($x div 10,
		$frac + (1 div $divisor),
		$iter + 1, $divisor * 2,
		$maxiter)"/>
</xsl:function>
```

## Обсуждение

Честно говоря, я думаю, что по меньшей мере в `80` процентах ваших приложений математика за пределами встроенных в XSLT возможностей никогда не понадобится. Ну а если в оставшихся `20` процентах случаев возникнет необходимость в функциях, отсутствующих в XSLT 1.0, то приведенные выше рецепты могут пригодиться.

Самый крупный недостаток реализаций на чистом XSLT 1.0 заключается в том, что шаблоны нельзя вызывать как настоящие функции из выражений на языке XPath. Поэтому математические операции записываются громоздко и оказываются не очень эффективными; ведь для запоминания вызовов шаблонов, представленных в виде результирующего фрагмента дерева, приходится создавать искусственные переменные. А процессор XSLT должен выполнять обратное преобразование этого фрагмента в число, когда впоследствии оно используется в вычислениях.

Еще одна проблема реализаций на XSLT состоит в том, что открытый интерфейс шаблонов замусорен служебными параметрами, которые лишь затемняют смысл функции. Эти параметры необходимы, чтобы организовать хвостовую рекурсию и предотвратить тем самым излишнюю работу. Например, в шаблоне `power-frac` логарифм основания вычисляется один раз и передается при каждом рекурсивном вызове. Если бы `ln_base` не был параметром, то логарифм пришлось бы при каждом таком вызове вычислять заново, и производительность оказалось бы неприемлемо низкой.

XSLT 2.0 решает первую проблему, предоставляя полноценные функции. Поэтому в этой версии решения получаются более компактными и простыми. Но параметры команды `xsl:function` не могут принимать значения по умолчанию, так что этот недостаток приходится компенсировать, определяя перегруженные варианты функций с различной арностью. К сожалению, XSLT 2.0 не позволяет инкапсулировать закрытые параметры, которые необходимы при рекурсивных вызовах функций для служебных целей. Проектируя библиотеку функций, вы можете поместить внутренние реализации (те, в которых используются служебные параметры) в отдельное пространство имен, чтобы показать, что к таким функциям не следует обращаться напрямую.

Вторая проблема будет отчасти решена, если в будущих версиях XSLT появятся закрытые параметры, предназначенные только для рекурсивных вызовов.
