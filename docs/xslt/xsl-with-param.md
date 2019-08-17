# xsl:with-param

Элемент **`xsl:with-param`** тоже связывает с именем параметра значение, и при выполнении шаблона это значение будет использоваться вместо значения параметра по умолчанию.

## Синтаксис

```xml
<xsl:with-param
    name = "имя"
    select = "выражение">
    <!-- Содержимое: шаблон -->
</xsl:with-param>
```

Атрибуты:

**`name`**
: **обязательный** атрибут, задает имя передаваемого параметра

`select`
: _необязательный_ атрибут, задает значение передаваемого параметра

## Описание и примеры

Как можно заметить, элемент `xsl:with-param` абсолютно идентичен элементу [`xsl:param`](xsl-param.md) (отличаются только их имена). Практически настолько же похоже и их действие: элемент `xsl:with-param` тоже связывает с именем параметра значение, и при выполнении шаблона это значение будет использоваться вместо значения параметра по умолчанию.

Таким образом, значение параметра, заданного в шаблоне, выбирается в соответствии со следующими положениями:

- если в элементе, который вызывает этот шаблон, присутствует элемент `xsl:with-param`, передающий значение этого параметра, в шаблоне будет использоваться переданное значение;
- если в элементе, который вызывает этот шаблон, элемента `xsl:with-param`, с соответствующим именем нет, в качестве значения параметра будет использоваться значение по умолчанию.

Элемент `xsl:with-param` может использоваться только в качестве дочернего элемента [`xsl:apply-templates`](xsl-apply-templates.md) и [`xsl:call-template`](xsl-call-template.md).

В качестве простого примера приведем шаблон, который выводит сокращение названия для недели по его номеру. Номер дня передается в шаблон параметром с именем `day-number`.

Листинг 5.26. Вывод названия дня недели по номеру

```xml
<xsl:template name="day-name">
    <xsl:param name="day-number" select="0"/>
    <xsl:choose>
        <xsl:when test="$day-number=1">Mon</xsl:when>
        <xsl:when test="$day-number=2">Tue</xsl:when>
        <xsl:when test="$day-number=3">Wed</xsl:when>
        <xsl:when test="$day-number=4">Thu</xsl:when>
        <xsl:when test="$day-number=5">Fri</xsl:when>
        <xsl:when test="$day-number=6">Sat</xsl:when>
        <xsl:when test="$day-number=7">Sun</xsl:when>
        <xsl:otherwise>Hmm...</xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Результатом вызова:

```xml
<xsl:call-template name="day-name">
    <xsl:with-param name="day-number" select="1"/>
</xsl:call-template>
```

будет текстовый узел "`Mon`". Рассмотрим теперь случай, когда параметра передано не было:

```xml
<xsl:call-template name="day-name"/>
```

Шаблон выведет задумчивое `Hmm...`, поскольку значение параметра `day-number` будет по умолчанию нулем (атрибут `select` имеет вид `select="0"`) и в операторе выбора `xsl:choose` сработает условие `xsl:otherwise`.

Параметры могут быть использованы как в именованных, так и в неименованных шаблонах. Именованные шаблоны с параметрами ведут себя как самые настоящие функции — они могут вызываться с определенными параметрами вне зависимости от контекста, только чтобы выполнить какие-либо действия с переданными значениями. В случае обычных, неименованных шаблонов параметры могут предоставлять некую дополнительную информацию.

### Пример

Представим себе описание меню в следующем формате:

```xml
<menu>
    <menuitem index="1" name="Home" href="home.htm"/>
    <menuitem index="2" name="News" href="news.htm"/>
    <menuitem index="3" name="Profile" href="profile.htm"/>
    <menuitem index="4" name="Contact" href="contact.htm"/>
</menu>
```

Для того чтобы при обработке особым образом выделять текущую страницу, определим в шаблоне параметр `current` и будем выводить название страницы в элементе `b` (от англ. bold — полужирный), если значение `current` равно индексу данного пункта меню; если текущая страница и индекс пункта меню не совпадают, то выводиться будет ссылка.

```xml
<xsl:template match="menuitem">
    <xsl:param name="current" select="1"/>
    <xsl:choose>
        <xsl:when test="$current=@index">
            <b>
                <xsl:value-of select="@name"/>
            </b>
        </xsl:when>
        <xsl:otherwise>
            <a href="{@href}">
                <xsl:value-of select="@name"/>
            </a>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

Результатом выполнения шаблона

```xml
<xsl:template match="menu">
    <xsl:apply-templates select="menuitem">
        <xsl:with-param name="current" select="3"/>
    </xsl:apply-templates>
</xsl:template>
```

будет фрагмент меню вида

```xml
<a href="home.htm">Home</a>
<a href="news.htm">News</a>
<b>Profile</b>
<a href="contact.htm">Contact</a>
```

Попробуем теперь обработать элементы `menuitem`, не указывая значение параметра `current`:

```xml
<xsl:template match="menu">
    <xsl:apply-templates select="menuitem"/>
</xsl:template>
```

Результат будет получен в виде:

```xml
<b>Home</b>
<a href="news.htm">News</a>
<a href="profile.htm">Profile</a>
<a href="contact.htm">Contact</a>
```

Этот фрагмент выходящего документа легко объяснить. Вследствие определения:

```xml
<xsl:param name="current" select="1"/>
```

значением параметра `current` по умолчанию является `1`, и поэтому в меню был выбран пункт с индексом `1`.

Мы упомянули, что значением параметра может быть дерево. Попробуем пояснить эту концепцию на примере генерации HTML-документа.

Итак, предположим, что мы генерируем выходящий документ следующим именованным шаблоном:

```xml
<xsl:template name="html">
    <xsl:param name="head">
        <head>
            <title>Title one</title>
        </head>
    </xsl:param>
    <html>
        <xsl:copy-of select="$head"/>
        <body>
            <xsl:text>content</xsl:text>
        </body>
    </html>
</xsl:template>
```

Параметр `head` по умолчанию будет содержать дерево, состоящее из элемента `head` и его дочернего элемента `title`, который содержит текст "Title one". Результат выполнения вызова

```xml
<xsl:call-template name="html"/>
```

мы можем видеть на следующем листинге:

```xml
<html>
    <head>
        <title>Title one</title>
    </head>
    <body>content</body>
</html>
```

Выделенный фрагмент относится к части дерева, которая была создана копированием значения параметра `head`.

Попробуем теперь передать в качестве параметра дерево, сгенерированное следующим шаблоном:

```xml
<xsl:template name="head">
    <head>
        <title>Title two</title>
        <style type="text/css">
            H1 {border-width: 1; border: solid; text-align: center}
        </style>
    </head>
</xsl:template>
```

Для того чтобы передать результат выполнения этого шаблона в виде значения параметра `head` именованному шаблону `head`, воспользуемся следующей конструкцией:

```xml
<xsl:call-template name="html">
    <xsl:with-param name="head">
        <xsl:call-template name="head"/>
    </xsl:with-param>
</xsl:call-template>
```

Выходящий документ будет получен в виде:

```xml
<html>
    <head>
        <title>Title two</title>
        <style type="text/css">
            H1 {border-width: 1; border: solid; text-align: center}
        </style>
    </head>
    <body>content</body>
</html>
```

Выделенный фрагмент, как и в предыдущем случае, соответствует части документа, полученной при копировании значения параметра `head`.

## См. также

- [`xsl:param`](xsl-param.md)

## Ссылки

- [`xsl:with-param`](https://developer.mozilla.org/en-US/docs/Web/XSLT/with-param) на MDN
- [`xsl:with-param`](https://msdn.microsoft.com/en-us/library/ms256091.aspx) на MSDN
