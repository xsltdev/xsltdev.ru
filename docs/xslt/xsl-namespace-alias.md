---
description: Элемент xsl:namespace-alias назначает пространству имен выходящего документа пространство имен, которое будет подменять его в преобразовании
---

# xsl:namespace-alias

Элемент **`xsl:namespace-alias`** назначает пространству имен выходящего документа пространство имен, которое будет подменять его в преобразовании, иначе говоря — псевдоним.

Не поддерживается браузером Mozilla Firefox.

## Синтаксис

```xml
<xsl:namespace-alias
    stylesheet-prefix = "префикс | #default"
    result-prefix = "префикс | #default" />
```

Атрибуты:

**`result-prefix`**
: **обязательный** атрибут, указывает, какому пространству имен назначается псевдоним.

**`stylesheet-prefix`**
: **обязательный** атрибут, указывает, какое пространство имен будет использоваться в качестве его псевдонима в преобразовании.

Оба атрибута содержат префиксы пространств имен, которые, естественно, должны быть ранее объявлены в преобразовании.

В XSLT 2.0 атрибуты `result-prefix` и `stylesheet-prefix` могут принимать значение `#default`. Естественно, это приведет к ошибке при отсутствии пространства имен по умолчанию. Пространство имен по умолчанию определяется записью `xmlns=`.

## Описание и примеры

Любопытным фактом является то, что XML-документ, являющийся результатом выполнения XSLT-преобразования, может и сам быть XSLT- преобразованием. Иными словами, преобразования могут генерироваться другими преобразованиями. В некоторых случаях такая возможность будет очень полезна, например, входящий XML-документ может описывать преобразование, которое нужно сгенерировать.

Листинг 8.13. XML-документ, описывающий требуемое преобразование

```xml
<transform>
    <remove select="a"/>
    <replace select="b" with="B"/>
    <replace select="c" with="C"/>
</transform>
```

Приведенный выше документ описывает преобразование, которое должно удалять из входящего документа элементы `a`, а элементы `b` и `c` заменять элементами `B` и `C` соответственно. Такое преобразование может выглядеть следующим образом.

Листинг 8.14. Преобразование

```xml
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="a"/>
    <xsl:template match="b">
        <xsl:element name="B">
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    <xsl:template match="c">
        <xsl:element name="C">
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>
```

Преобразование, генерирующее такой код, не представляет особой сложности. Например, шаблон для обработки элемента `replace` может иметь следующий вид:

```xml
<xsl:template match="replace">
    <xsl:element name="xsl:template">
        <xsl:attribute name="match">
            <xsl:value-of select="@select"/>
        </xsl:attribute>
        <xsl:element name="xsl:element">
            <xsl:attribute name="name">
                <xsl:value-of select="@with"/>
            </xsl:attribute>
            <xsl:element name="xsl:apply-templates"/>
        </xsl:element>
    </xsl:element>
</xsl:template>
```

Шаблон этот выглядит очень громоздко, потому что мы не могли просто включить в него создаваемое правило: поскольку мы создаем элементы в пространстве имен `XSLT`, находясь в шаблоне, они воспринимались бы не как генерируемые, а как принадлежащие генерирующему преобразованию. Очевидно, что шаблон вида

```xml
<xsl:template match="replace">
    <xsl:template match="{@select}">
        <xsl:element name="{@with}">
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
</xsl:template>
```

был бы некорректен. По этой причине нам пришлось генерировать все инструкции при помощи `xsl:element` и `xsl:attribute`, что сделало шаблон громоздким и малопонятным.

Если внимательно рассмотреть проблему, то окажется, что она состоит в том, что мы хотим в преобразовании использовать элементы одного пространства имен так, как если бы они относились к другому пространству.

К счастью, XSLT предоставляет легкий и удобный способ для решения такого рода задачи: пространству имен можно назначить псевдоним при помощи элемента `xsl:namespace-alias`.

### Пример 1

Возвращаясь к генерации преобразования, мы можем изменить пространство имен генерируемых элементов так, чтобы они не воспринимались процессором как элементы XSLT. Для того чтобы в выходящем документе эти элементы все же принадлежали пространству имен XSLT, измененное пространство имен в преобразовании должно указываться как псевдоним этого пространства.

Листинг 8.15. Преобразование, использующее псевдонимы пространств имен

```xml
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:axsl="http://www.w3.org/1999/XSL/Transform/Alias">
    <xsl:namespace-alias stylesheet-prefix="axsl" result-prefix="xsl"/>
    <xsl:template match="replace">
        <axsl:template match="{@select}">
            <axsl:element name="{@with}">
                <axsl:apply-templates/>
            </axsl:element>
        </axsl:template>
    </xsl:template>
    <xsl:template match="remove">
        <axsl:template match="{@select}"/>
    </xsl:template>
    <xsl:template match="transform">
        <axsl:stylesheet version="1.0">
            <xsl:apply-templates/>
            <axsl:template match="@*|node()">
                <axsl:copy>
                    <axsl:apply-templates select="@*|node()"/>
                </axsl:copy>
            </axsl:template>
        </axsl:stylesheet>
    </xsl:template>
</xsl:stylesheet>
```

В этом преобразовании элемент `xsl:namespace-alias` указывает на то, что все элементы, принадлежащие в преобразовании пространству имен с `URI`

    http://www.w3.org/1999/XSL/Transform/Alias

в выходящем документе должны принадлежать пространству имен с `URI`

    http://www.w3.org/1999/XSL/Transform

то есть пространству имен `XSLT`.

Результатом применения этого преобразования к документу из листинга 8.13 будет следующий документ.

Листинг 8.16. Выходящее преобразование

```xml
<axsl:stylesheet version="1.0"
    xmlns:axsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <axsl:template match="a"/>
    <axsl:template match="b">
        <axsl:element name="B">
            <axsl:apply-templates/>
        </axsl:element>
    </axsl:template>
    <axsl:template match="c">
        <axsl:element name="C">
            <axsl:apply-templates/>
        </axsl:element>
    </axsl:template>
    <axsl:template match="@*|node()">
        <axsl:copy>
            <axsl:apply-templates select="@*|node()"/>
        </axsl:copy>
    </axsl:template>
</axsl:stylesheet>
```

В этом сгенерированном преобразовании элементы имеют префикс `axsl`, но при этом принадлежат пространству имен XSLT.

Атрибуты `stylesheet-prefix` и `result-prefix` элемента `xsl:namespace-alias` могут иметь значения "`#default`". Определение вида

```xml
<xsl:namespace-alias stylesheet-prefix="a" result-prefix="#default"/>
```

означает, что элементы, принадлежащие в преобразовании пространству имен `a`, в выходящем документе должны принадлежать пространству имен по умолчанию. Определение вида

```xml
<xsl:namespace-alias stylesheet-prefix="#default" result-prefix="a"/>
```

означает, что элементы, принадлежащие в преобразовании пространству имен по умолчанию, в выходящем документе должны принадлежать пространству имен `a`.

### Пример 2

Листинг 8.17. Преобразование

```xml
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:a="urn:a" xmlns="urn:b">
    <xsl:namespace-alias stylesheet-prefix="#default" result-prefix="a"/>
    <xsl:namespace-alias stylesheet-prefix="a" result-prefix="#default"/>
    <xsl:template match="root">
        <result>
            <a:element/>
        </result>
    </xsl:template>
</xsl:stylesheet>
```

Листинг 8.18. Выходящий документ

```xml
<result xmlns="urn:a" xmlns:a="urn:b">
    <a:element/>
</result>
```

Результатом этого преобразования является то, что пространство имен с URI "`urn:a`" стало пространством имен по умолчанию, а пространство имен с URI "`urn:b`" изменило префикс на `a`.

В преобразованиях можно объявлять несколько псевдонимов пространств имен при условии, что одно и то же пространство имен преобразования не должно быть объявлено элементами `xsl:namespace-alias` с одинаковым порядком импорта псевдонимом для различных пространств имен выходящего документа.

### Пример 3

Если преобразование `a.xsl` содержит определение

```xml
<xsl:namespace-alias stylesheet-prefix="x" result-prefix="a"/>
```

а преобразование `b.xsl` — определение

```xml
<xsl:namespace-alias stylesheet-prefix="x" result-prefix="b"/>
```

где в обоих преобразованиях префикс `x` представляет одно пространство имен, а пространства имен `a` и `b` — разные, то преобразование `a.xsl` не сможет [включать](xsl-include.md) преобразование `b.xsl` и наоборот, потому что они будут иметь одинаковый порядок импорта и содержать элементы `xsl:namespace-alias`, назначающие разным пространствам имен одинаковые псевдонимы. В одном преобразовании такие псевдонимы также не имеют права встречаться. Если же подобное все же случилось, процессор может сигнализировать ошибку или использовать определение, которое было дано в преобразовании последним.

Совсем иначе обстоит дело с [импортированием](xsl-import.md). При импортировании определения старших в порядке импорта преобразований могут переопределять определения младших преобразований. Таким образом, если преобразование `a.xsl` будет импортировать преобразование `b.xsl`, пространство имен `x` будет назначено псевдонимом пространству имен `a` и наоборот.

### Пример для XSLT 2.0

Чтобы продемонстрировать использование пространства имен по умолчанию с элементом `<xsl:namespace-alias>`, мы рассмотрим две таблицы стилей; в одной используется атрибут `result-prefix="#default"`, а в другой – атрибут `stylesheet-prefix="#default"`. Первая таблица стилей:

```xml
<?xml version="1.0"?>
<!-- namespace-alias2.xsl -->
<stylesheet version="2.0"
    xmlns="http://www.w3.org/1999/XSL/Transform"
    xmlns:xslout="[что угодно, кроме пространства имен XSL]">
    <output method="xml" indent="yes"/>
    <namespace-alias stylesheet-prefix="xslout" result-prefix="#default"/>
    <template match="/">
        <xslout:stylesheet version="1.0">
            <xslout:output method="xml"/>
            <xslout:template match="/">
                <xslout:copy-of select="."/>
            </xslout:template>
        </xslout:stylesheet>
    </template>
</stylesheet>
```

Таблица стилей выдает следующий результат:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<stylesheet xmlns="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <output method="xml"/>
    <template match="/">
        <copy-of select="."/>
    </template>
</stylesheet>
```

Исходная и сгенерированная таблицы стилей работают, так как все элементы XSLT находятся в пространстве имен по умолчанию `http://www.w3.org/1999/XSL/Transform`.

Вторая таблица стилей:

```xml
<?xml version="1.0"?>
<!-- namespace-alias3.xsl -->
<xsl:stylesheet version="2.0"
    xmlns="[что угодно, кроме пространства имен XSL]"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="yes"/>
    <xsl:namespace-alias stylesheet-prefix="#default" result-prefix="xsl"/>
    <xsl:template match="/">
        <stylesheet version="1.0">
            <output method="xml"/>
            <template match="/">
                <copy-of select="."/>
            </template>
        </stylesheet>
    </xsl:template>
</xsl:stylesheet>
```

Выходные данные этой таблицы стилей выглядят более типично:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml"/>
    <xsl:template match="/">
        <xsl:copy-of select="."/>
    </xsl:template>
</xsl:stylesheet>
```

## См. также

- [`namespace-uri()`](../xpath/namespace-uri.md)

## Ссылки

- [`xsl:namespace-alias`](https://developer.mozilla.org/en-US/docs/Web/XSLT/namespace-alias) на MDN
- [`xsl:namespace-alias`](https://msdn.microsoft.com/en-us/library/ms256448.aspx) на MSDN
