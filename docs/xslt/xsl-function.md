---
description: Определяет функцию в таблице стилей
---

# xsl:function

Определяет функцию в таблице стилей. Функция записывается в XSLT, но может быть вызвана из любого выражения XPath в таблице стилей. Она должна иметь префикс пространства имен не по умолчанию.

_Доступна в XSLT 2.0 и более поздних версиях. Доступен во всех изданиях Saxon._

-   **Категория**: declaration
-   **Содержимое**: ( [`xsl:param`](xsl-param.md)\* , _sequence-constructor_ )
-   **Допустимые родительские элементы**: [`xsl:package`](xsl-package.md); [`xsl:stylesheet`](xsl-stylesheet.md); [`xsl:transform`](xsl-transform.md); [`xsl:override`](xsl-override.md)

## Атрибуты

**`name`**
: _eqname_
: Имя функции. Должно находиться в пространстве имен не по умолчанию.

`as?`
: _sequence-type_
: Определяет тип возврата функции.

`visibility?`
: `"public" | "private" | "final" | "abstract"`
: Новое в XSLT 3.0. Определяет видимость функции в других пакетах.

`streamability?`
: `"unclassified" | "absorbing" | "inspection" | "filter" | "shallow-descent" | "deep-descent" | "ascent" | eqname`
: Не реализовано в Saxon 9.7.

`override-extension-function?`
: _boolean_
: Определяет, что произойдет, если эта функция имеет то же имя и степень сложности, что и другая, предоставленная реализацией или доступная в статическом контексте с помощью механизма, определенного реализацией. Если значение равно yes (по умолчанию), то эта функция имеет приоритет; если значение равно no, то приоритет имеет другая функция.

`[override]?`
: _boolean_
: Устаревший синоним `override-extension-function`, сохраненный для совместимости с XSLT 2.0.

`new-each-time?`
: `"yes" | "true" | "1" | "no" | "false" | "0" | "maybe"`
: Приписывает функцию к одной из трех категорий относительно детерминизма функций (актуально для оптимизации). Значение no означает, что функция детерминирована; значение yes означает, что она активна; а значение may означает, что она неуловима. Требуется Saxon-PE или Saxon-EE.

`cache?`
: _boolean_
: Указывает, должна ли функция кэшировать свои результаты. Требуется Saxon-PE или Saxon-EE.

`saxon:as?`
: _sequence-type_
: Позволяет предоставлять дополнительную информацию о типе, используя синтаксис расширения Saxon.

`saxon:memo-function?`
: _boolean_
: Указание "да" означает, что Saxon должен запомнить результаты вызова функции в кэше, и при повторном вызове функции с теми же аргументами результат будет получен из кэша, а не пересчитан. Требуется Saxon-PE или Saxon-EE.

## Заметки по реализации Saxon

Saxon определяет дополнительный атрибут для `xsl:function`, а именно `saxon:memo-function`. Атрибут `saxon:memo-function="yes"` указывает, что Saxon должен запомнить результаты вызова функции в кэше, и если функция будет вызвана снова с теми же аргументами, результат будет получен из кэша, а не пересчитан.

Атрибут расширения `saxon:explain` также может быть использован для элемента `xsl:function`. Если атрибут имеет значение `yes`, то во время компиляции Saxon выводит (в стандартный вывод ошибок) представление оптимизированного дерева выражений для этой функции.

Атрибуты `cache` и `new-each-time` интерпретируются в Saxon 9.7 (PE или выше) следующим образом: если значение `cache` равно `yes`, или значение `new-each-time` равно `no`, то функция реализуется как memo функция, так же, как и при установке атрибута расширения `saxon:memo-function`. Обратите внимание, что кэш, используемый для мемо-функции в Saxon 9.7, всегда является полным кэшем, то есть он сохраняет результаты всех предыдущих вызовов функции в пределах области действия запроса или преобразования. В Saxon-HE эти атрибуты не имеют никакого эффекта.

Атрибут `visibility` реализован начиная с Saxon 9.6 как часть реализации пакетов XSLT 3.0.

В Saxon 9.8 появилась поддержка потоковых функций таблицы стилей, основанная на новом атрибуте XSLT 3.0 `streamability`. Тестовое покрытие для этой функции на момент выпуска довольно скудное.

## Подробности

В ограниченных обстоятельствах функции таблицы стилей (`xsl:function`) оптимизируют хвостовую рекурсию. Обстоятельства заключаются в том, что выражение `select` инструкции [`xsl:sequence`](xsl-sequence.md), которая представляет собой вложенный конструктор последовательности, должно содержать вызов той же функции, что и `then` или `else` часть условного выражения (которое может быть вложено в другие условные выражения). Написание функций для использования этого может потребовать некоторой осторожности. См. примеры ниже.

## Примеры

### Пример 1

Следующий пример не является хвостовым рекурсивным, поскольку рекурсивный вызов находится внутри арифметического выражения: умножение происходит при возврате из рекурсивного вызова.

```xslt
<xsl:function name="my:factorial" as="xs:integer">
    <xsl:param name="number" as="xs:integer"/>
    <xsl:sequence
        select="if ($number=0) then 1 else $number * my:factorial($number-1)"/>
</xsl:function>
```

### Пример 2

Предыдущий пример можно переформулировать в хвостовую рекурсивную форму, добавив дополнительный параметр (который должен быть установлен в 1 при первом вызове):

```xslt
<xsl:function name="x:factorial">
	<xsl:param name="acc" as="xs:integer?"/>
	<xsl:param name="n" as="xs:integer"/>
	<xsl:sequence as="xs:integer"
		select="if ($n = 1) then $acc
				else x:factorial($acc*$n, \$n - 1)" />
</xsl:function>
```

Вызов `x:factorial(1, 5)` возвращает `120`.

## Ссылки

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-function)
-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-function)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/function.html)