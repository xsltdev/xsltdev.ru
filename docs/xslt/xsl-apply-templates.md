# xsl:apply-templates

Элемент **`xsl:apply-templates`** применяет шаблонные правила к узлам, которые возвращаются выражением, указанным в атрибуте `select`.

Если атрибут `select` опущен, то `xsl:apply-templates` применяет шаблонные правила ко всем дочерним узлам текущего узла.

## Синтаксис

```xml
<xsl:apply-templates
  select = "выражение"
  mode = "режим">
  <!-- Content: (xsl:sort | xsl:with-param)* -->
</xsl:apply-templates>
```

Атрибуты:

`select`
: _необязательный_ атрибут, выражение вычисляет набор узлов к которым применяются преобразования. Если атрибут не задан — преобразования применяются ко всем потомкам текущего узла, включая текстовые.

`mode`
: _необязательный_ атрибут, указывает имя режима преобразования.

## Описание и примеры

### Пример 1

В примере 1 для элемента `chapter` создается блок, а затем обрабатывается его непосредственный потомок:

```xml
<xsl:template match="chapter">
  <fo:block>
    <xsl:apply-templates />
  </fo:block>
</xsl:template>
```

### Пример 2

В примере 2 обрабатываются все содержащиеся в `author` элементы `given-name`, которые являются непосредственным потомком `author-group`:

```xml
<xsl:template match="author-group">
  <fo:inline-sequence>
    <xsl:apply-templates select="author/given-name" />
  </fo:inline-sequence>
</xsl:template>
```

### Пример 3

В примере 3 обрабатываются все элементы `heading`, являющиеся потомками элемента `book`:

```xml
<xsl:template match="book">
  <fo:block>
    <xsl:apply-templates select=".//heading" />
  </fo:block>
</xsl:template>
```

### Пример 4

Есть также возможность обрабатывать элементы, которые не являются потомками текущего узла. В примере 4 предполагается, что элемент `department` имеет непосредственный потомок `group` и потомки `employee`. Сперва находится отдел `employee`, а затем обрабатывается непосредственный потомок `group` элемента `department`:

```xml
<xsl:template match="employee">
  <fo:block>
    Employee <xsl:apply-templates select="name" /> belongs to group
    <xsl:apply-templates select="ancestor::department/group" />
  </fo:block>
</xsl:template>
```

### Пример 5

Для выполнения простого переупорядочения в пределах одного шаблона можно использовать сразу несколько элементов `xsl:apply-templates`. В примере 5 создаются две [таблицы](/html/table/) HTML. Первая таблица заполняется отечественными продажами, вторая — международными:

```xml
<xsl:template match="product">
  <table>
    <xsl:apply-templates select="sales/domestic" />
  </table>
  <table>
    <xsl:apply-templates select="sales/foreign" />
  </table>
</xsl:template>
```

В XSLT 2.0 у атрибута `mode` при использовании с элементом `<xsl:apply-templates>` появились два специальных значения:

- `#default` – соответствует режиму по умолчанию;
- `#current` – соответствует текущему режиму.

В XSLT 2.0 возможности атрибута mode были расширены. В следующей таблице стилей используются значения `#default`, `#current` и `#all` атрибута `mode`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- apply-templates2.xsl -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:output method="html"/>
  <xsl:template match="/">
    <html>
    <head>
      <title>Using the mode attribute</title>
    </head>
    <body style="font-family: sans-serif;">
      <table style="text-align: center;" border="1">
        <tr style="font-weight: bold; font-size: 150%;">
          <td width="30%">Default mode</td>
          <td width="30%">Blue mode</td>
          <td width="30%">Red mode</td>
        </tr>
        <tr>
          <td>
            <p>
              <xsl:apply-templates mode="#default" select="/cars/manufacturer"/>
            </p>
          </td>
          <td>
            <p>
              <xsl:apply-templates mode="blue" select="/cars/manufacturer"/>
            </p>
          </td>
          <td>
            <p>
              <xsl:apply-templates mode="red" select="/cars/manufacturer"/>
            </p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  </xsl:template>
  <xsl:template match="manufacturer">
    <div style="color: green; font-style: italic; font-size: 125%">
      <xsl:apply-templates select="car" mode="#current"/>
    </div>
  </xsl:template>
  <xsl:template match="manufacturer" mode="blue red">
    <div style="color: blue; font-weight: bold;">
      <xsl:apply-templates select="car" mode="#current"/>
    </div>
  </xsl:template>
  <xsl:template match="car" mode="#all">
    <xsl:value-of select="."/>
    <br/>
  </xsl:template>
  <xsl:template match="car" mode="red" priority="1">
    <div style="color: red; font-size: 125%; font-family: serif;">
      <xsl:value-of select="."/>
      <br/>
    </div>
  </xsl:template>
</xsl:stylesheet>
```

В XSLT 2.0 атрибут mode элемента `<xsl:apply-templates>` может принимать новые значения `#current` и `#default`. У атрибута `mode` элемента [`<xsl:template>`](/xslt/xsl-template/) определены новые значения `#all` и `#default`. В нашей таблице стилей используются все три новых значения:

- В шаблоне `match="/"` элемент `<xsl:apply-templates>` используется со значениями `#default`, `blue` и `red`. Три элемента `<xsl:apply-template>` отличаются только одним – значением атрибута `mode`.
- Первый шаблон `match="manufacturer"` не имеет атрибута `mode`, поэтому он применяется в режиме по умолчанию. При использовании `<xsl:apply-templates mode="#default" ...>` будет активизирован именно этот шаблон.
- У второго шаблона `match="manufacturer"` атрибут `mode` равен `blue red`. Этот шаблон активизируется при выборе режима `blue` или `red`.
- Оба шаблона `match="manufacturer"` используют запись `<xsl:apply-templates mode="#current" ...>` для обработки элементов `<car>`. Фактически текущее значение mode передается процессору XSLT в виде параметра, сообщая ему, какой шаблон следует применять.
- Первый шаблон `match="car"` определяется с атрибутом `mode="#all"`, поэтому он является шаблоном по умолчанию, который активизируется обоими элементами `<xsl:apply-templates mode="#current" ...>`.
- Последний шаблон `match="car"` определяется с атрибутом `mode="red"`. Чтобы ему отдавалось предпочтение перед шаблоном `mode="#all"`, мы добавляем атрибут `priority="1"`. Без него процессор Saxon выводит предупреждение о неоднозначном применении правил, хотя и активизирует шаблон `mode="red"` при действующем режиме `red`. Ядро Altova XML никаких предупреждений не выдает – оно просто активизирует шаблон с `mode="red"`.

Начиная с шаблона `match="/"`, наша таблица стилей генерирует выходной документ вызовами разных шаблонов с тремя режимами `mode`. Три режима форматируют одну и ту же информацию тремя разными способами. В итоге таблица стилей создает тот же документ HTML, что и предыдущая таблица стилей.

### Пример 6

```xml tab=
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="applyt.xsl" ?>
<customers>
   <customer>
      <name>John Smith</name>
      <address>123 Oak St.</address>
      <state>WA</state>
      <phone>(206) 123-4567</phone>
   </customer>
   <customer>
      <name>Zack Zwyker</name>
      <address>368 Elm St.</address>
      <state>WA</state>
      <phone>(206) 423-4537</phone>
   </customer>
   <customer>
      <name>Albert Aikens</name>
      <address>368 Elm St.</address>
      <state>WA</state>
      <phone>(206) 423-4537</phone>
   </customer>
   <customer>
      <name>Albert Gandy</name>
      <address>6984 4th St.</address>
      <state>WA</state>
      <phone>(206) 433-4547</phone>
   </customer>
   <customer>
      <name>Peter Furst</name>
      <address>456 Pine Av.</address>
      <state>CA</state>
      <phone>(209) 765-4321</phone>
   </customer>
   <customer>
      <name>Dan Russell</name>
      <address>9876 Main St.</address>
      <state>PA</state>
      <phone>(323) 321-7654</phone>
   </customer>
</customers>
```

```xslt tab=
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >

<xsl:template match="/">
   <HTML>
      <BODY>
         <TABLE border="1" cellspacing="0" cellpadding="2">
            <xsl:apply-templates select="customers/customer">
               <xsl:sort select="state"/>
               <xsl:sort select="name"/>
            </xsl:apply-templates>
         </TABLE>
      </BODY>
   </HTML>
</xsl:template>

<xsl:template match="customer">
   <TR>
      <xsl:apply-templates select="name" />
      <xsl:apply-templates select="address" />
      <xsl:apply-templates select="state" />
      <xsl:apply-templates select="phone" />
      <xsl:apply-templates select="phone" mode="accountNumber"/>
   </TR>
</xsl:template>

<xsl:template match="name">
   <TD STYLE="font-size:14pt font-family:serif">
      <xsl:apply-templates />
   </TD>
</xsl:template>

<xsl:template match="address">
   <TD> <xsl:apply-templates /> </TD>
</xsl:template>

<xsl:template match="state">
   <TD> <xsl:apply-templates /> </TD>
</xsl:template>

<xsl:template match="phone">
   <TD> <xsl:apply-templates /> </TD>
</xsl:template>

<xsl:template match="phone" mode="accountNumber">
   <TD STYLE="font-style:italic">
      1-<xsl:value-of select="."/>-001
   </TD>
</xsl:template>

</xsl:stylesheet>
```

```html tab="Output"
<html>
  <body>
    <table border="1" cellspacing="0" cellpadding="2">
      <tr>
        <td style="font-size:14pt; font-family:serif">Peter Furst</td>
        <td>456 Pine Av.</td>
        <td>CA</td>
        <td>(209) 765-4321</td>
        <td style="font-style:italic">
          1-(209) 765-4321-001
        </td>
      </tr>
      <tr>
        <td style="font-size:14pt; font-family:serif">Dan Russell</td>
        <td>9876 Main St.</td>
        ...
      </tr>
    </table>
  </body>
</html>
```

## См. также

- [`xsl:call-template`](/xslt/xsl-call-template/) -- вызывает шаблон по имени.
- [`xsl:sort`](/xslt/xsl-sort/) -- позволяет сортировать множество узлов.
- [`xsl:with-param`](/xslt/xsl-with-param/) -- связывает с именем параметра значение.
- [`xsl:template`](/xslt/xsl-template/) -- определяет шаблон.

## Ссылки

- [`xsl:apply-templates`](https://developer.mozilla.org/en/XSLT/apply-templates) на MDN
- [`xsl:apply-templates`](<https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms256184(v=vs.100)>) на MSDN
