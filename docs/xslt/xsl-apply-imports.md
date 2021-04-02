---
description: Элемент xsl:apply-imports используется в шаблонах для применения правил, которые были импортированы во внешних модулях, но переопределены шаблонами основного преобразования
---

# xsl:apply-imports

Элемент **`xsl:apply-imports`** используется в шаблонах для применения правил, которые были импортированы во внешних модулях, но переопределены шаблонами основного преобразования.

## Синтаксис

```xml
<xsl:apply-imports />
```

## Описание и примеры

При обработке стиля в каждой точке имеется некое текущее правило шаблона. Всякий раз, когда по образцу выбирается правило шаблона, для обработки оно становится текущим правилом шаблона. Когда обрабатывается элемент [`xsl:for-each`](xsl-for-each.md), то при обработке содержимого этого элемента `xsl:for-each` текущее правило шаблона становится нулевым.

`xsl:apply-imports` обрабатывает текущий узел используя лишь те правила шаблона, которые были импортированы в тот элемент стиля, где это текущее правило шаблона находится. Узел обрабатывается в режиме текущего правила шаблона. Если `xsl:apply-imports` обрабатывается когда текущее правило шаблона нулевое, фиксируется ошибка.

### Пример 1

Предположим что стиль `doc.xsl` содержит правило шаблона для элементов `example`:

```xml
<xsl:template match="example">
  <pre>
    <xsl:apply-templates />
  </pre>
</xsl:template>
```

Другой стиль может импортировать `doc.xsl` и поменять обработку элементов `example` следующим образом:

```xml
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
  <xsl:import href="doc.xsl" />
  <xsl:template match="example">
    <div style="border: solid red">
      <xsl:apply-imports />
    </div>
  </xsl:template>
</xsl:stylesheet>
```

В результате суммарного действия `example` должен преобразовываться в элемент следующего вида:

```xml
<div style="border: solid red">
  <pre>...</pre>
</div>
```

### Пример 2

Предположим, что в преобразованиях часто используется шаблон, который заменяет элементы `home` ссылками на сайт `http://www.xsltdev.ru`:

```xml
<xsl:template match="home">
  <a href="http://www.xsltdev.ru/">www.xsltdev.ru</a>
</xsl:template>
```

При необходимости этот шаблон может быть переопределен. К примеру, [ссылка](https://hcdev.ru/html/a/) может выглядеть так: `Visit <a href="https://www.xsltdev.ru/">www.xsltdev.ru</a>`. Соответственно, шаблон будет иметь вид:

```xml
<xsl:template match="home">
  <xsl:text>Visit</xsl:text>
  <a href="https://www.xsltdev.ru/">www.xsltdev.ru</a>
</xsl:template>
```

Можно заметить, что оба шаблона имеют общую часть, которая выводит гипертекстовую ссылку. Эта часть может быть выведена во внешнее преобразование `home.xsl`:

```xml
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
  <xsl:template match="home">
    <a href="https://www.xsltdev.ru/">www.xsltdev.ru</a>
  </xsl:template>
</xsl:stylesheet>
```

Для того чтобы использовать внешний шаблон, основное преобразование должно импортировать его при помощи [`xsl:import`](xsl-import.md) и применять посредством `xsl:apply-imports`:

```xml
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
  <xsl:import href="home.xsl" />
  <xsl:template match="home">
    <xsl:text>Visit</xsl:text>
    <xsl:apply-imports />
  </xsl:template>
</xsl:stylesheet>
```

В XSLT 2.0 элемент `<xsl:apply-imports>` может содержать нуль или более элементов [`<xsl:with-param>`](xsl-with-param.md) для передачи параметров импортированному шаблону. Лишние параметры, передаваемые импортируемому шаблону, игнорируются. Но если импортированному шаблону не передается обязательный параметр, процессор XSLT выдает ошибку.

### Пример 3

=== "XML"

    ```xml
    <?xml version="1.0"?>
    <?xml-stylesheet type="text/xsl" href="ops.xsl"?>
    <ops>
      <desc>Some binary operations</desc>
      <op name="add" symbol="+">
    	<operand>1</operand>
    	<operand>2</operand>
      </op>
      <op name="sub" symbol="-">
    	<operand>1</operand>
    	<operand>2</operand>
      </op>
      <op name="mul" symbol="*">
    	<operand>1</operand>
    	<operand>2</operand>
      </op>
    </ops>
    ```

=== "ops.xsl"

    ```xml
    <?xml version="1.0" ?>
    <xsl:stylesheet
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
      version="1.0"
    >
      <xsl:import href="arith.xsl" />
      <xsl:import href="str.xsl" />
      <xsl:template match="op">
        <xsl:value-of select="operand[1]" />
        <xsl:value-of select="@symbol" />
        <xsl:value-of select="operand[2]" />
        =
        <xsl:apply-imports />
        <br />
      </xsl:template>
    </xsl:stylesheet>
    ```

=== "arith.xsl"

    ```xml
    <?xml version="1.0" ?>
    <xsl:stylesheet
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
      version="1.0"
    >
      <xsl:template match="op[@symbol='+']">
        <xsl:value-of select="sum(operand)" />
        (from arith.xsl)
      </xsl:template>
      <xsl:template match="op[@symbol='-']">
        <xsl:value-of
          select="number(operand[1])-number(operand[2])"
        />
        (from arith.xsl)
      </xsl:template>
      <xsl:template match="op[@symbol='*']">
        <xsl:value-of
          select="number(operand[1])*number(operand[2])"
        />
        (from arith.xsl)
      </xsl:template>
    </xsl:stylesheet>
    ```

=== "str.xsl"

    ```xml
    <?xml version="1.0" ?>
    <xsl:stylesheet
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
      version="1.0"
    >
      <xsl:template match="desc">
        <DIV>
          <xsl:value-of select="." />
        </DIV>
      </xsl:template>
      <xsl:template match="op[@name='add']">
        <xsl:value-of select="operand[1]" />
        <xsl:value-of select="operand[2]" />
        (from str.xsl)
      </xsl:template>
      <xsl:template match="op[@name='mul']">
        <xsl:value-of select="operand[2]" />
        <xsl:value-of select="operand[1]" />
        (from str.xsl)
      </xsl:template>
    </xsl:stylesheet>
    ```

=== "Результат"

    ```
    Some binary operations

    1+2 = 12 (from str.xsl)

    1-2 = -1 (from arith.xsl)

    1*2 = 21 (from str.xsl)
    ```

### Пример 4

=== "XML"

    ```xml
    <?xml version="1.0" ?>
    <?xml-stylesheet type="text/xsl" href="sample.xsl"?>
    <catalog>
      <book id="bk101">
        <title>XML Developer's Guide</title>
        <author>Gambardella, Matthew</author>
        <genre>Computer</genre>
        <price>44.95</price>
        <publish_date>2000-10-01</publish_date>
        <description>
          An in-depth look at creating applications with XML.
        </description>
      </book>
      <book id="bk102">
        <title>Midnight Rain</title>
        <author>Ralls, Kim</author>
        <genre>Fantasy</genre>
        <price>5.95</price>
        <publish_date>2000-12-16</publish_date>
        <description>
          A former architect battles corporate zombies, an evil
          sorceress, and her own childhood to become queen of
          the world.
        </description>
      </book>
      <book id="bk103">
        <title>Maeve Ascendant</title>
        <author>Corets, Eva</author>
        <genre>Fantasy</genre>
        <price>5.95</price>
        <publish_date>2000-11-17</publish_date>
        <description>
          After the collapse of a nanotechnology society in
          England, the young survivors lay the foundation for a
          new society.
        </description>
      </book>
      <book id="bk104">
        <title>Oberon's Legacy</title>
        <author>Corets, Eva</author>
        <genre>Fantasy</genre>
        <price>5.95</price>
        <publish_date>2001-03-10</publish_date>
        <description>
          In post-apocalypse England, the mysterious agent known
          only as Oberon helps to create a new life for the
          inhabitants of London. Sequel to Maeve Ascendant.
        </description>
      </book>
      <book id="bk105">
        <title>The Sundered Grail</title>
        <author>Corets, Eva</author>
        <genre>Fantasy</genre>
        <price>5.95</price>
        <publish_date>2001-09-10</publish_date>
        <description>
          The two daughters of Maeve, half-sisters, battle one
          another for control of England. Sequel to Oberon's
          Legacy.
        </description>
      </book>
      <book id="bk106">
        <title>Lover Birds</title>
        <author>Randall, Cynthia</author>
        <genre>Romance</genre>
        <price>4.95</price>
        <publish_date>2000-09-02</publish_date>
        <description>
          When Carla meets Paul at an ornithology conference,
          tempers fly as feathers get ruffled.
        </description>
      </book>
      <book id="bk107">
        <title>Splish Splash</title>
        <author>Thurman, Paula</author>
        <genre>Romance</genre>
        <price>4.95</price>
        <publish_date>2000-11-02</publish_date>
        <description>
          A deep sea diver finds true love twenty thousand
          leagues beneath the sea.
        </description>
      </book>
      <book id="bk108">
        <title>Creepy Crawlies</title>
        <author>Knorr, Stefan</author>
        <genre>Horror</genre>
        <price>4.95</price>
        <publish_date>2000-12-06</publish_date>
        <description>
          An anthology of horror stories about roaches,
          centipedes, scorpions  and other insects.
        </description>
      </book>
      <book id="bk109">
        <title>Paradox Lost</title>
        <author>Kress, Peter</author>
        <genre>Science Fiction</genre>
        <price>6.95</price>
        <publish_date>2000-11-02</publish_date>
        <description>
          After an inadvertant trip through a Heisenberg
          Uncertainty Device, James Salway discovers the
          problems of being quantum.
        </description>
      </book>
      <book id="bk110">
        <title>Microsoft .NET: The Programming Bible</title>
        <author>O'Brien, Tim</author>
        <genre>Computer</genre>
        <price>36.95</price>
        <publish_date>2000-12-09</publish_date>
        <description>
          Microsoft's .NET initiative is explored in detail in
          this deep programmer's reference.
        </description>
      </book>
      <book id="bk111">
        <title>MSXML3: A Comprehensive Guide</title>
        <author>O'Brien, Tim</author>
        <genre>Computer</genre>
        <price>36.95</price>
        <publish_date>2000-12-01</publish_date>
        <description>
          The Microsoft MSXML3 parser is covered in detail, with
          attention to XML DOM interfaces, XSLT processing, SAX
          and more.
        </description>
      </book>
      <book id="bk112">
        <title>Visual Studio 7: A Comprehensive Guide</title>
        <author>Galos, Mike</author>
        <genre>Computer</genre>
        <price>49.95</price>
        <publish_date>2001-04-16</publish_date>
        <description>
          Microsoft Visual Studio 7 is explored in depth,
          looking at how Visual Basic, Visual C++, C#, and ASP+
          are integrated into a comprehensive development
          environment.
        </description>
      </book>
    </catalog>
    ```

=== "sample.xsl"

    ```xml
    <?xml version="1.0" ?>
    <xsl:stylesheet
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
      version="1.0"
    >
      <xsl:import href="sample-import.xsl" />
      <xsl:output method="html" />
      <xsl:template match="book">
        <font face="Arial">
          <xsl:apply-imports />
        </font>
      </xsl:template>
    </xsl:stylesheet>
    ```

=== "sample-import.xsl"

    ```xml
    <?xml version="1.0" ?>
    <xsl:stylesheet
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
      version="1.0"
    >
      <!-- Override built-in template. -->
      <xsl:template match="text()" />
      <xsl:template match="/">
        <html>
          <body>
            <xsl:apply-templates />
          </body>
        </html>
      </xsl:template>
      <xsl:template match="book">
        <i>
          <xsl:apply-templates select="title" />
        </i>
        <xsl:text>By:</xsl:text>
        <xsl:apply-templates select="author" />
        <br />
      </xsl:template>
      <xsl:template match="title">
        <b>
          <xsl:value-of select="." />
        </b>
      </xsl:template>
      <xsl:template match="author">
        <font color="blue">
          <xsl:value-of select="." />
        </font>
      </xsl:template>
    </xsl:stylesheet>
    ```

=== "Результат"

    ```html
    <html>
      <body>
        <font face="Arial"
          ><i><b>XML Developer's Guide</b></i> By:
          <font color="blue">Gambardella, Matthew</font><br
        /></font>
        <font face="Arial"
          ><i><b>Midnight Rain</b></i> By:
          <font color="blue">Ralls, Kim</font><br
        /></font>
        ...
        <font face="Arial"
          ><i><b>Visual Studio 7: A Comprehensive Guide</b></i>
          By: <font color="blue">Galos, Mike</font><br
        /></font>
      </body>
    </html>
    ```

## См. также

- [`xsl:import`](xsl-import.md) &mdash; импорт преобразований

## Ссылки

- [`xsl:apply-imports`](https://developer.mozilla.org/en/XSLT/apply-imports) <sup><small>MDN (рус.)</small></sup>
- [`xsl:apply-imports`](https://msdn.microsoft.com/en-us/library/ms256178.aspx) <sup><small>MSDN (en)</small></sup>
- [`xsl:apply-imports`](http://www.saxonica.com/documentation/index.html#!xsl-elements/apply-imports) на Saxon
