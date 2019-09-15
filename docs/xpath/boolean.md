---
description: Функция boolean преобразует переданный ей объект в булевый тип
---

# boolean()

Функция **`boolean`** преобразует переданный ей объект в булевый тип.

## Синтаксис

```
boolean boolean( object )
```

### Ввод

Объект, преобразуемый в логическое значение.

### Вывод

Логическое значение, соответствующее входному объекту. Объекты преобразуются в логические значения по следующим правилам:

- Число преобразуется в `true` в том и только в том случае, если оно отлично от нуля, отрицательного нуля или `NaN` («нечисло»).
- Набор узлов преобразуется в `true` в том и только в том случае, если он не пуст.
- Строка преобразуется в `true` в том и только в том случае, если она имеет положительную длину.
- Все остальные типы данных преобразуются по правилам, специфическим для этих типов.

### Где определяется

XPath 1.0 — XPath, раздел 4.3 «Boolean Functions».

## Описание и примеры

Функция `boolean` преобразует аргумент в булево значение следующим образом:

- **число** преобразуется в `true` тогда и только тогда, когда оно не является ни `NaN`, ни положительным или отрицательным нулем;
- **набор узлов** преобразуется в `true` тогда и только тогда, когда он непустой;
- **строка** преобразуется `true` тогда и только тогда, когда она имеет ненулевую длину;
- процедура преобразования в булево значение объекта, не относящегося в четырем основным типам, зависит от типа этого объекта.

### Пример 1

```
boolean(2-2) ? false
boolean(number('two')) ? false
boolean(-1) ? true
boolean(1 div 0) ? true
boolean(-1 div (1 div 0)) ? false
boolean(-1 div (-1 div 0)) ? false
boolean(-1 div (-1 div 0) +1) ? true
boolean('') ? false
boolean('true') ? true
boolean('false') ? true
boolean(/) ? true
boolean(/self::node()) ? true
boolean(/self::text()) ? false
```

### Пример 2

Для демонстрации работы функции `boolean()` используется документ с информацией о продажах:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- chocolate.xml -->
<report month="8" year="2006">
	<title>Chocolate bar sales</title>
	<brand>
		<name>Lindt</name>
		<units>27408</units>
	</brand>
	<brand>
		<name>Callebaut</name>
		<units>8203</units>
	</brand>
	<brand>
		<name>Valrhona</name>
		<units>22101</units>
	</brand>
	<brand>
		<name>Perugina</name>
		<units>14336</units>
	</brand>
	<brand>
		<name>Ghirardelli</name>
		<units>19268</units>
	</brand>
</report>
```

А вот как выглядит таблица стилей:

```xml
<?xml version="1.0"?>
<!-- boolean.xsl -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="text"/>
	<xsl:template match="/">
		<xsl:text>
</xsl:text>
		<xsl:text>Tests of the boolean() function:</xsl:text>
		<xsl:text>

boolean(true()) = </xsl:text>
		<xsl:value-of select="boolean(true())"/>
		<xsl:text>
	boolean(true) = </xsl:text>
		<xsl:value-of select="boolean(true)"/>
		<xsl:text>
boolean('false') = </xsl:text>
		<xsl:value-of select="boolean('false')"/>
		<xsl:text>
boolean('7') = </xsl:text>
		<xsl:value-of select="boolean('7')"/>
		<xsl:text>
boolean(7) = </xsl:text>
		<xsl:value-of select="boolean(7)"/>
		<xsl:text>
boolean(/report/brand/units[. > 20000]) = </xsl:text>
		<xsl:value-of select="boolean(/report/brand/units[. > 20000])"/>
	</xsl:template>
</xsl:stylesheet>
```

Результат:

```
Tests of the boolean() function:
boolean(true()) = true
boolean(true) = false
boolean('false') = true
boolean('7') = true
boolean(7) = true
boolean(/report/brand/units[. > 20000]) = true
```

В первом тесте в аргументе передается вызов функции [`true()`](true.md), который всегда возвращает `true`. Так как полученное значение уже является логическим, функция `boolean()` просто возвращает его в исходном виде. Во втором тесте запрашиваются все элементы `<true>` в текущем контексте; так как элементы `<true>` отсутствуют, результат равен `false`. Аргументами третьего и четвертого тестов являются строки с положительной длиной, для которых `boolean()` возвращает `true`. В пятом тесте передается положительное число, поэтому результат также равен `true`.

В последнем примере команда XPath выбирает из отчета все элементы `<units>` с числовым значением, большим 20000. Так как команда выбирает по крайней мере один узел, `boolean()` возвращает `true`. Тест работает в XSLT 1.0, т. к. он генерирует набор узлов, содержащий хотя бы один узел, и в XSLT 2.0, т. к. он создает последовательность, первый объект которой является узлом. Если изменить выражение так, чтобы производился поиск объемов продаж, превышающих 30000, функция `boolean()` вернет `false`.

Следующая таблица стилей использует правила XSLT 2.0 для обработки различных последовательностей:

```xml
<?xml version="1.0"?>
<!-- boolean2.xsl -->
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="text"/>
	<xsl:template match="/">
		<xsl:text>
</xsl:text>
		<xsl:text>Tests of the boolean() function:</xsl:text>
		<xsl:text>

boolean(()) = </xsl:text>
		<xsl:value-of select="boolean(())"/>
		<xsl:variable name="testSequence1" as="item()*">
			<xsl:sequence select="(3)"/>
		</xsl:variable>
		<xsl:text>

$testSequence1 = (</xsl:text>
		<xsl:value-of select="$testSequence1" separator=", "/>
		<xsl:text>)
boolean($testSequence1) = </xsl:text>
		<xsl:value-of select="boolean($testSequence1)"/>
		<xsl:variable name="testSequence2" as="item()*">
			<xsl:sequence select="/report/brand/units"/>
			<xsl:sequence select="(3, 4, 5)"/>
		</xsl:variable>
		<xsl:text>

$testSequence2 = (</xsl:text>
		<xsl:value-of select="$testSequence2" separator=", "/>
		<xsl:text>)
boolean($testSequence2) = </xsl:text>
		<xsl:value-of select="boolean($testSequence2)"/>
	</xsl:template>
</xsl:stylesheet>
```

Результат:

```
Tests of the boolean() function:
boolean(()) = false
$testSequence1 = (3)
boolean($testSequence1) = true
$testSequence2 = (27408, 8203, 22101, 14336, 19268, 3, 4, 5)
boolean($testSequence2) = true
```

Проверка состоит из трех тестов. В первом тесте функции `boolean()` передается пустая последовательность; результат равен `false`. Во втором тесте `boolean()` передается синглетное числовое значение; так как оно отлично от нуля, результат равен `true`. В последнем тесте аргумент представляет собой последовательность, содержащую пять узлов `<unit>`, за которыми следуют три числовых значения. Поскольку первый объект последовательности является узлом, `boolean()` возвращает `true`.

Если в этой таблице стилей определить `$testSequence1` так, чтобы последовательность содержала более одного объекта, таблица не будет компилироваться. Любая последовательность, передаваемая `boolean()`, должна быть синглетом или последовательностью, первое значение в которой является узлом. Во вторую последовательность `$testSequence2` можно включить сколько угодно объектов разных типов при условии, что первый объект является узлом. Если ни один узел не соответствует выражению `/report/brand/units`, первым узлом последовательности станет атомарное значение `3`, и процессор XSLT выдаст ошибку времени выполнения.

## См. также

- [true()](true.md) — возвращает истину
- [false()](false.md) — возвращает ложь
- [not()](not.md) — логическое отрицание

## Ссылки

- [boolean()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/boolean) на MDN
- [boolean()](https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms256159%28v%3dvs.100%29) на MSDN
