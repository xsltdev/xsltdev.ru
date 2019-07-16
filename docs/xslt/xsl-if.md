---
description: Инструкция xsl:if позволяет создавать простые условия типа если-то.
---

# xsl:if

Инструкция **`xsl:if`** позволяет создавать простые условия типа "если-то".

## Синтаксис

```xml
<xsl:if test = "выражение">
    <!-- Content: sequence-constructor -->
</xsl:if>
```

### Атрибуты

**`test`**
: **обязательный** атрибут, задает выражение, которое вычисляется и приводится к булевому типу. В том и только том случае, если выражение имеет значение `true`, процессор выполняет шаблон, содержащийся в `xsl:if`.

## Описание и примеры

Элемент `xsl:if` является простейшим условным оператором в XSLT. Выражение, содержащееся в обязательном атрибуте `test`, вычисляется и приводится к булевому типу. В том и только том случае, если выражение имеет значение `true`, процессор выполняет шаблон, содержащийся в `xsl:if`.

Вследствие того, что атрибуты в XML не могут содержать некоторые специальные символы (такие как "`<`" и "`&`"), их необходимо заменять символьными сущностями. В особенности это касается сравнения чисел типа "меньше"; объявление вида

```xml
<xsl:if test="a < b"/>
```

будет с точки зрения синтаксиса XML некорректным. Вместо него следует использовать эквивалентное объявление

```xml
<xsl:if test="a &lt; b"/>
```

Следует заметить, что символ "больше" ("`>`") заменять сущностью необязательно. Однако из соображений единообразия принято заменять и его.

### Пример 1

Предположим, мы преобразовываем список названий

```xml
<list active="Bravo">
    <item>Alpha</item>
    <item>Bravo</item>
    <item>Charlie</item>
</list>
```

во фрагмент HTML-кода, в котором каждый элемент `item` должен быть преобразован в соответствующий элемент `option`, а значение, выбранное во входящем документе атрибутом `active` элемента `list`, должно быть помечено булевым атрибутом `selected`.

Листинг 7.23. Шаблон преобразования, использующий элемент `xsl:if`

```xml
<xsl:template match="item">
    <option>
        <!--
        | Если текстовое значение элемента равно
        | значению атрибута active его родительского элемента
        +-->
        <xsl:if test=". = ../@active">
            <!-- To выводим атрибут selected -->
            <xsl:attribute name="selected">selected</xsl:attribute>
        </xsl:if>
        <xsl:value-of select="."/>
    </option>
</xsl:template>
```

Результат:

```xml
<option>Alpha</option>
<option selected>Bravo</option>
<option>Charlie</option>
```

Примечание: в данном преобразовании использовался метод вывода "`html`".

К сожалению, элемент `xsl:if` в XSLT не может реализовать конструкцию `if-then-else` (англ. если-то-иначе). Условные выражения такого вида реализуются при помощи элементов [`xsl:choose`](/xslt/xsl-choose/), [`xsl:when`](/xslt/xsl-when/) и [`xsl:otherwise`](/xslt/xsl-otherwise/).

### Пример 2

```XML tab=
<?xml version='1.0'?>
<?xml-stylesheet type="text/xsl" href="ifcomma.xsl" ?>
<namelist>
	<name>Albert</name>
	<name>Terrance</name>
	<name>Will</name>
	<name>Sylvia</name>
	<name>Timothy</name>
	<name>Gordon</name>
	<name>James</name>
	<name>Robert</name>
	<name>Dan</name>
	<name>Sasha</name>
</namelist>
```

```XSLT tab=
<?xml version='1.0'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

<xsl:template match="namelist/name">
	<xsl:apply-templates/>
	<xsl:if test="position()!=last()">, </xsl:if>
</xsl:template>

</xsl:stylesheet>
```

```Output tab=
<?xml version="1.0" encoding="UTF-16"?>
Albert, Terrance, Will, Sylvia, Timothy, Gordon, James, Robert, Dan, Sasha
```

### Пример 3

```XML tab=
<?xml version='1.0'?>
<?xml-stylesheet type="text/xsl" href="ifcomma.xsl" ?>
<namelist>
	<name>Albert</name>
	<name>Terrance</name>
	<name>Will</name>
	<name>Sylvia</name>
	<name>Timothy</name>
	<name>Gordon</name>
	<name>James</name>
	<name>Robert</name>
	<name>Dan</name>
	<name>Sasha</name>
</namelist>
```

```XSLT tab=
<?xml version='1.0'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

<xsl:template match="namelist/name">
	<xsl:if test="position()!=1">, </xsl:if>
	<xsl:apply-templates/>
</xsl:template>

</xsl:stylesheet>
```

```Output tab=
<?xml version="1.0" encoding="UTF-16"?>
Albert, Terrance, Will, Sylvia, Timothy, Gordon, James, Robert, Dan, Sasha
```

### Пример 4

```XML tab=
<?xml version='1.0'?>
<?xml-stylesheet type="text/xsl" href="ifyellow.xsl" ?>
<items>
	<item>Car</item>
	<item>Pen</item>
	<item>LP Record</item>
	<item>Wisdom</item>
	<item>Cell phone</item>
	<item>Film projector</item>
	<item>Hole</item>
	<item>Canopy</item>
	<item>Widget</item>
	<item>Concept</item>
	<item>Null character</item>
</items>
```

```XSLT tab=
<?xml version='1.0'?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

<xsl:template match="/">
<html>
<body>
<table border="1">
<xsl:apply-templates/>
</table>
</body>
</html>
</xsl:template>

<xsl:template match="item">
  <tr>
    <xsl:if test="position() mod 2 = 0">
       <xsl:attribute name="bgcolor">yellow</xsl:attribute>
    </xsl:if>
    <xsl:apply-templates/>
  </tr>
</xsl:template>

</xsl:stylesheet>
```

```Output tab=
<html>
<body>
<table border="1">
<tr>Car</tr>
<tr bgcolor="yellow">Pen</tr>
<tr>LP Record</tr>
<tr bgcolor="yellow">Wisdom</tr>
<tr>Cell phone</tr>

...

</table>
</body>
</html>
```

### Пример 5

```XML tab=
<?xml version='1.0'?>
<?xml-stylesheet type="text/xsl" href="ifstock.xsl" ?>
<stocks>
   <stock international="yes">Microsoft</stock>
   <stock>Wingtip Toys</stock>
   <stock international="yes">Contoso Pharmaceuticals</stock>
   <stock>Contoso, Ltd</stock>
   <stock international="yes">Fabrikam, Inc.</stock>
</stocks>
```

```XSLT tab=
<?xml version='1.0'?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

<xsl:template match="/">
   <html><body>
   <xsl:apply-templates/>
   </body></html>
</xsl:template>

<xsl:template match="stock">
   <p/>
   <xsl:if test="@international">International Stock </xsl:if>
   <xsl:apply-templates />
</xsl:template>

</xsl:stylesheet>
```

```Output tab=
<html><body>
<p></p>International Stock Microsoft
<p></p>Wingtip Toys
<p>

...

</p>International Stock Fabrikam, Inc.
</body></html>
```

## См. также

- [`xsl:choose`](/xslt/xsl-choose/)
- [`xsl:when`](/xslt/xsl-when/)
- [`xsl:otherwise`](/xslt/xsl-otherwise/)

## Ссылки

- [`xsl:if`](https://developer.mozilla.org/en-US/docs/Web/XSLT/if) на MDN
- [`xsl:if`](https://msdn.microsoft.com/en-us/library/ms256209.aspx) на MSDN
