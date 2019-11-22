# Преобразование регистра

## Задача

Требуется преобразовать строку, содержащую символы верхнего регистра, в нижний или наоборот.

## Решение

### XSLT 1.0

Воспользуйтесь функцией `translate()`. Так, следующий код преобразует заглавные буквы в строчные:

```xpath
translate($input, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')
```

А этот код выполняет обратное преобразование:

```xpath
translate($input, 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
```

### XSLT 2.0

Воспользуйтесь функциями `upper-case()` и `lower-case()`:

```xpath
upper-case($input)
lower-case($input)
```

## Обсуждение

Конечно, этот рецепт тривиален. Но я включил его, чтобы воспользоваться случаем и обсудить недостатки решения для XPath 1.0. Преобразование регистров – тривиальная задача лишь до тех пор, пока текст записан в одной локали.

В английском тексте вам вряд ли придется столкнуться со специальными символами, которые содержат диакритические знаки, или такими преобразованиями, когда один символ превращается в два. Самый распространенный пример – немецкий язык, в котором строчная буква Я (β-цет) в верхнем регистре записывается как SS. Во многих современных языках программирования есть функции преобразования регистра, учитывающие локаль, но в XSLT прямой поддержки этой идеи нет. Это печально, поскольку другие средства поддержки интернационализации в XSLT все же включены.

Небольшого улучшения можно добиться, определив для каждого преобразования отдельные XML-компоненты, как в следующем примере:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE stylesheet [
<!ENTITY UPPERCASE "ABCDEFGHIJKLMNOPQRSTUVWXYZ">
<!ENTITY LOWERCASE "abcdefghijklmnopqrstuvwxyz">
<!ENTITY UPPER_TO_LOWER " '&UPPERCASE;' , '&LOWERCASE;' ">
<!ENTITY LOWER_TO_UPPER " '&LOWERCASE;' , '&UPPERCASE;' ">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<xsl:variable name="test" select=" 'The rain in Spain falls mainly in the plain' "/>
		<output>
			<lowercase>
				<xsl:value-of select="translate($test,&UPPER_TO_LOWER;)"/>
			</lowercase>
			<uppercase>
				<xsl:value-of select="translate($test,&LOWER_TO_UPPER;)"/>
			</uppercase>
		</output>
	</xsl:template>
</xsl:stylesheet>
```

Эти определения компонентов играют троякую роль. Во-первых, они упрощают перенос таблицы стилей в другую локаль, поскольку изменить нужно лишь определения `UPPERCASE` и `LOWERCASE`. Во-вторых, они делают код более компактным, так как отпадает необходимость перечислять все буквы алфавита дважды.

В-третьих, наше намерение вызвать функцию `translate` становится очевидно всякому человеку, читающему код. Некоторые ревнители чистоты могут возразить против переноса третьего параметра `translate` в макрос, но я думаю, что так код читать проще. Если вы тоже сторонник пуризма, то можете писать так: `translate($test, &UPPERCASE;, &LOWERCASE;)`.

Я не часто встречал употребление компонентов в книгах, посвященных XSLT, но полагаю, что этот прием обладает рядом достоинств. Вообще, одно из преимуществ записи XSLT-программы в синтаксической нотации XML заключается в том, что вы получаете возможность пользоваться всеми средствами XML, в том числе и определением компонентов. Если вы намереваетесь применять эту технику и планируете написать достаточно много таблиц стилей, то подумайте над тем, чтобы поместить общие определения компонентов во внешний файл и включать их, как показано в примере 2.6. Можно также хранить эти значения в глобальных переменных во внешней таблице стилей и импортировать при необходимости. Такую альтернативу предпочитают многие ветераны XSLT.

Пример 2.6. Файл standard.ent

```xml
<!ENTITY UPPERCASE "ABCDEFGHIJKLMNOPQRSTUVWXYZ">
<!ENTITY LOWERCASE "abcdefghijklmnopqrstuvwxyz">
<!ENTITY UPPER_TO_LOWER " '&UPPERCASE;' , '&LOWERCASE;' ">
<!ENTITY LOWER_TO_UPPER " '&LOWERCASE;' , '&UPPERCASE;' ">
<!-- прочие... -->
```

Воспользоваться параметрическим компонентом, определенным в файле `standard.ent`, можно, как показано в примере 2.7.

Пример 2.7. Таблица стилей, в которой используется файл `standard.ent`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE stylesheet [
<!ENTITY % standard SYSTEM "standard.ent">
%standard;
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<!-- ... -->
</xsl:stylesheet>
```

Реализация преобразования регистра, предложенная Стивом Болом (Steve Ball) и работающая практически во всех случаях, достигает этого за счет включения большинства общеупотребительных символов Unicode в строки, записанные в верхнем и нижнем регистре. При этом немецкая буква β обрабатывается специально.

### XSLT 2.0

Добавленные в XPath 2.0 функции `upper-case()` и `lower-case()` решают большую часть проблем, связанных с преобразованием регистра в не-английских алфавитах.

Единственное исключение касается преобразований с учетом местных особенностей. Лучше не пользоваться этими функциями для сравнения строк без учета регистра. Вместо этого обратитесь к функции `compare()`, указав таблицу сравнения (collation), в которой регистр игнорируется. Пользователь Saxon 8.x найдет информацию о таблицах сравнения на страницах [http://www.saxonica.com/documentation/conformance/collation-uri.html](http://www.saxonica.com/documentation/conformance/collation-uri.html) и [http://www.saxonica.com/documentation/extensions/instructions/collation.html](http://www.saxonica.com/documentation/extensions/instructions/collation.html).
