---
description: XSLT предоставляет возможность создавать узлы элементов при помощи элемента xsl:element
---

# xsl:element

XSLT предоставляет возможность создавать узлы элементов при помощи элемента **`xsl:element`**.

## Синтаксис

```xml
<xsl:element
    name = "название_элемента"
    namespace = "пространство_имен"
    use-attribute-sets = "строка">
    <!-- Содержимое: шаблон -->
</xsl:element>
```

Атрибуты:

**`name`**
: **обязательный** атрибут, указывает имя создаваемого элемента. Этот атрибут может содержать шаблон значения, а значит, имя элемента может быть вычислено во время выполнения.

`namespace`
: _необязательный_ атрибут, указывает URI пространства имен создаваемого элемента. Точно так же, как и `name`, этот атрибут может содержать шаблон значения, что позволяет вычислять пространство имен создаваемого элемента при помощи выражений.

`use-attribute-sets`
: необязательный атрибут, перечисляет имена наборов атрибутов, которые должны быть включены в создаваемый элемент.

Содержимым `xsl:element` является шаблон, который выполняется процессором и затем включается в создаваемый элемент.

## Описание и примеры

### Пример

Предположим, мы хотим поменять имя каждого элемента на значение его первого атрибута и наоборот.

Листинг 7.1. Входящий документ

```xml
<fire on="babylon"/>
```

Листинг 7.2. Шаблон, заменяющий имя элемента значением атрибута

```xml
<xsl:template match="*">
    <xsl:element name="{@*}">
        <xsl:attribute name="{name(@*)}">
            <xsl:value-of select="name()"/>
        </xsl:attribute>
    </xsl:element>
</xsl:template>
```

Листинг 7.3. Выходящий документ

```xml
<babylon on="fire"/>
```

В этом примере код `<xsl:element name="{@*}">...</xsl:element>` создает элемент, именем которого становится значение выражения `@*`, указанного в виде шаблона значения атрибута `name`. Это выражение выбирает множество, состоящее из узлов атрибутов текущего элемента, а если привести его к строке, в результате получится текстовое значение первого атрибута элемента.

Подобным образом выбирается имя атрибута создаваемого элемента и его значение.

Вычисленное значение атрибута `name` может задавать и расширенное имя элемента, то есть иметь форму префикс:имя. В этом случае элемент будет создаваться в том пространстве имен, которое соответствует указанному префиксу, например

```xml
<xsl:element name="xsl:template"/>
```

создаст элемент вида

```xml
<xsl:template xmlns:xsl="http://www.w3.org/1999/XSL/Transform"/>
```

Заметим, что элемент вида

```xml
<xsl:element name="{concat{'xsl',':','template')}"/>
```

даст тот же результат.

Другим способом указания пространства имен при использовании элемента `xsl:element` является использование атрибута `namespace`. Например, для предыдущего случая мы могли бы записать

```xml
<xsl:element name="template"
    namespace="http://www.w3.org/1999/XSL/Transform"/>
```

и получить в итоге

```xml
<template xmlns="http://www.w3.org/1999/XSL/Transform"/>
```

что эквивалентно результату предыдущего примера, хоть и различается внешне.

Атрибут `namespace` тоже может быть сконструирован на этапе выполнения, например:

```xml
<xsl:element name="template"
  	namespace="{concat('http://www.w3.org/', 2001 - 2, '/XSL/Transform')}"/>
```

что также даст элемент `template`, принадлежащий пространству имен XSLT.

Для того чтобы разобраться в приоритетах атрибутов name и namespace на определение пространства имен, приведем несколько правил, которые пояснят этот процесс.

- Если в элементе `xsl:element` определен атрибут `namespace`, то создаваемый элемент будет принадлежать пространству имен с URI, который будет значением этого атрибута. Если значением атрибута `namespace` будет пустая строка, создаваемый элемент будет принадлежать нулевому пространству имен. Как правило, процессоры используют префикс, указанный в имени атрибутом name, но, вместе с тем, они не обязаны так делать. Поэтому в общем случае следует ожидать, что префикс может быть любым.
- Если в элементе `xsl:element` не определен атрибут `namespace`, но имя, заданное в атрибуте `name` имеет префикс, то создаваемый элемент будет принадлежать соответствующему этому префиксу пространству имен. Однако и в этом случае не гарантируется, что префикс создаваемого элемента будет таким, каким он был задан в атрибуте `name`.
- В случае, если в элементе `xsl:element` не определен атрибут `namespace` и имя, заданное в атрибуте `name` не имеет префикса, создаваемый элемент будет принадлежать пространству имен, которое действует для создающего элемента `xsl:element` по умолчанию.

Повторим еще раз, что во всех трех случаях сказать что-либо достоверно о префиксе создаваемого элемента нельзя — префикс с точки зрения пространств имен не является значащей частью имени элемента. Вместе с тем, на практике процессоры, как правило, используют префикс, указанный в атрибуте `name`, или не используют префикс вообще, если префикс в `name` указан не был.

Приведем несколько примеров.

Для начала покажем, что, согласно первому правилу, атрибут `namespace` имеет наивысший приоритет при определении пространства имен выходящего элемента. Рассмотрим следующее преобразование.

Листинг 7.4.

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <xsl:element name="xsl:html" namespace="http://www.w3.org/1999/xhtml"/>
    </xsl:template>
</xsl:stylesheet>
```

В выделенном элементе `xsl:element` пространство имен создаваемого элемента указано вроде бы два раза: в виде значения атрибута `namespace` и в виде префикса имени ("`xsl`"). Результат будет выглядеть следующим образом:

```xml
<xsl:html xmlns:xsl="http://www.w3.org/1999/xhtml"/>
```

Процессор использовал пространство имен, указанное в атрибуте `namespace`, локальную часть имени, заданного атрибутом name ("`html`"), а также префикс (только префикс, но не связанное с ним пространство имен) этого имени ("`xsl`").

В свою очередь конструкция вида

```xml
<xsl:element name="xsl:html" namespace=""/>
```

создаст элемент

```xml
<xsl:html xmlns:xsl=""></xsl:html>
```

что на самом деле эквивалентно просто `<html/>`.

Таким образом, атрибут `namespace` наиболее приоритетен для определения пространства имен создаваемого элемента. Обратимся теперь к случаю, когда этот атрибут опущен в `xsl:element`. Объявление вида

```xml
<xsl:element name="xsl:html"/>
```

создаст элемент

```xml
<xsl:html xmlns:xsl="http://www.w3.org/1999/XSL/Transform"/>
```

Как видим, отсутствие `namespace` и `namespace=""` — не одно и то же.

Рассмотрим теперь случай, когда нет ни атрибута `namespace`, ни префикса в `name`:

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <xsl:element name="html"/>
    </xsl:template>
</xsl:stylesheet>
```

Результатом этого преобразования будет документ, состоящий из одного пустого элемента `html`:

```xml
<html/>
```

Мы специально привели все преобразование целиком, чтобы показать, что выходящий элемент будет принадлежать нулевому пространству имен тогда и только тогда, когда для него не было объявлено пространства имен по умолчанию. Попробуем посмотреть, что получится, если пространство имен по умолчанию будет объявлено:

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/" xmlns="http://www.w3.org/1999/xhtml">
        <xsl:element name="html"/>
    </xsl:template>
</xsl:stylesheet>
```

Результатом в этот раз будет элемент с локальной частью имени "`html`", принадлежащий пространству имен с URI "`http://www.w3.org/1999/xhtml`":

```xml
<html xmlns="http://www.w3.org/1999/xhtml" />
```

### Пример для XSLT 2.0

Мы переходим к примеру, в котором используется поддержка схем в XSLT 2.0. Атрибут `validation` элемента `<xsl:element>` поможет убедиться в том, что создаваемый элемент действителен в соответствии со схемой заказа. Мы начнем с файла XML, содержимое которого по формату сходно с данными заказов:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- create-po.xml -->
<po order-num="38292">
    <customer id="4738" standing="Platinum">
        <address>
            <name>
                <courtesy>Mr.</courtesy>
                <given-name>Chester Hasbrouck</given-name>
                <surname>Frisby</surname>
            </name>
            <street>1234 Main Street</street>
            <city>Sheboygan</city>
            <state>WI</state>
            <zip>48392</zip>
        </address>
    </customer>
    <line-items>
        <line-item>
            <partnum>28392-33-TT</partnum>
            <partname>Turnip Twaddler</partname>
            <quantity>3</quantity>
            <price>9.95</price>
        </line-item>
        <line-item>
            <partnum>28100-38-CT</partnum>
            <partname>Clam Teaser</partname>
            <quantity>7</quantity>
            <price>39.95</price>
        </line-item>
    </line-items>
</po>
```

Элемент `<xsl:element>` будет использоваться для создания нового заказа на основании данных из документа. Необходимо также сгенерировать элемент `<date>`, являющийся первым дочерним элементом `<purchase-order>`. Таблица стилей выглядит так:

```xml
<?xml version="1.0"?>
<!-- element2.xsl -->
<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns="http://www.oreilly.com/xslt"
    xmlns:po="http://www.oreilly.com/xslt"
    exclude-result-prefixes="xs po">
    <xsl:import-schema
        namespace="http://www.oreilly.com/xslt" schema-location="po.xsd" />
    <xsl:output method="xml" indent="yes"/>
    <xsl:variable name="now" as="xs:date" select="current-date()"/>
    <xsl:template match="po">
        <xsl:element name="purchase-order" validation="strict">
            <xsl:attribute name="id" select="@order-num"/>
            <date>
                <xsl:attribute name="year" select="year-from-date($now)"/>
                <xsl:attribute name="month" select="month-from-date($now)"/>
                <xsl:attribute name="day" select="day-from-date($now)"/>
            </date>
            <customer>
                <xsl:attribute name="id" select="customer/@id"/>
                <xsl:attribute name="level" select="customer/@standing"/>
                <xsl:apply-templates select="customer/address"/>
            </customer>
            <xsl:apply-templates select="line-items"/>
        </xsl:element>
    </xsl:template>
    <xsl:template match="address">
        <address>
            <xsl:attribute name="type" select="'business'"/>
            <xsl:apply-templates select="name"/>
            <street>
                <xsl:value-of select="street"/>
            </street>
            <city>
                <xsl:value-of select="city"/>
            </city>
            <state>
                <xsl:value-of select="state"/>
            </state>
            <zip>
                <xsl:value-of select="zip"/>
            </zip>
        </address>
    </xsl:template>
    <xsl:template match="line-items">
        <items>
        <xsl:for-each select="line-item">
            <item>
                <xsl:attribute name="part-no" select="partnum"/>
                <partname>
                    <xsl:value-of select="partname"/>
                </partname>
                <qty>
                    <xsl:value-of select="quantity"/>
                </qty>
                <price>
                    <xsl:value-of select="price"/>
                </price>
            </item>
        </xsl:for-each>
        </items>
    </xsl:template>
    <xsl:template match="name">
        <name>
            <xsl:if test="courtesy">
                <title>
                    <xsl:value-of select="courtesy"/>
                </title>
            </xsl:if>
            <first-name>
                <xsl:value-of select="given-name"/>
            </first-name>
            <last-name>
                <xsl:value-of select="surname"/>
            </last-name>
        </name>
    </xsl:template>
</xsl:stylesheet>
```

Таблица стилей использует элементы `<xsl:element>` и [`<xsl:attribute>`](xsl-attribute.md) для построения заказа «с нуля». Атрибут `validation="strict"` означает, что сгенерированный элемент `<purchase-order>` должен представлять действительный заказ при проверке по схеме `po.xsd`. Если таблица стилей попытается добавить в сгенерированный элемент `<purchase-order>` что-либо, нарушающее схему заказа, ядро XSLT инициирует исключение и прерывает работу. Таблица стилей генерирует следующий код XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<purchase-order xmlns="http://www.oreilly.com/xslt" id="38292">
    <date year="2008" month="3" day="2"/>
    <customer id="4738" level="Platinum">
        <address type="business">
            <name>
                <title>Mr.</title>
                <first-name>Chester Hasbrouck</first-name>
                <last-name>Frisby</last-name>
            </name>
            <street>1234 Main Street</street>
            <city>Sheboygan</city>
            <state>WI</state>
            <zip>48392</zip>
        </address>
    </customer>
    <items>
        <item part-no="28392-33-TT">
            <partname>Turnip Twaddler</partname>
            <qty>3</qty>
            <price>9.95</price>
        </item>
        <item part-no="28100-38-CT">
            <partname>Clam Teaser</partname>
            <qty>7</qty>
            <price>39.95</price>
        </item>
    </items>
</purchase-order>
```

Сгенерированный документ использует пространство имен по умолчанию `http://www.oreilly.com/xslt`. Это пространство имен связано с импортированной схемой; тот факт, что оно объявляется как пространство имен по умолчанию для таблицы стилей, означает, что оно будет скопировано в выходной элемент. Обратите также внимание на использование в таблице стилей атрибута `exclude-result-prefixes`, из-за которого префиксы `po` и `xs` не попадают в сгенерированный документ. Как и следовало ожидать, пространством имен по умолчанию для сгенерированного заказа является пространство имен `http://www.oreilly.com/xslt`.

При создании элемента `<date>` используется функция `current-date()`. Чтобы увидеть, что произойдет в случае неудачной проверки, удалите элемент `<date>`. Появится следующее сообщение об ошибке:

```
XTTE1510: In content of element <purchase-order>: The content model does
not allow element <customer> to appear here. Expected:
{http://www.oreilly.com/xslt}date (See
http://www.w3.org/TR/xmlschema-1/#cvc-complex-type clause 2.4)
Transformation failed: Run-time errors were reported
```

В этом случае элемент `<purchase-order>` не генерируется, потому что без находящегося в положенном месте элемента `<date>` он недействителен.

## См. также

- [`xsl:attribute`](xsl-attribute.md) — создание атрибутов элемента.
- [`local-name()`](../xpath/local-name.md) — возвращает локальную часть имени первого в порядке просмотра документа узла множества.
- [`name()`](../xpath/name.md) — возвращает расширенное имя.

## Ссылки

- [`xsl:element`](https://developer.mozilla.org/en/XSLT/element) на MDN
- [`xsl:element`](https://msdn.microsoft.com/en-us/library/ms256047.aspx) на MSDN
