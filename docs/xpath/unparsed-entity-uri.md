# unparsed-entity-uri()

Функция **`unparsed-entity-uri`** возвращает уникальный идентификатор ресурса, который соответствует неразбираемой внешней сущности, имя которой передано как аргумент.

**Не поддерживается** браузером Mozilla Firefox.

## Синтаксис

### XPath 1.0

```
string unparsed-entity-uri( string )
```

## Описание и примеры

### Пример

Описывая синтаксис XML, мы приводили пример документа, который использовал неразбираемые внешние сущности.

Листинг 8.67. Входящий документ использующий неразбираемые внешние сущности

```xml
<!DOCTYPE menu [
    <!ELEMENT menu (menuitem*)>
    <!ELEMENT menuitem EMPTY>
    <!ATTLIST menuitem
        image ENTITY #REQUIRED
        title CDATA #REQUIRED
        href CDATA #REQUIRED>
    <!NOTATION gif SYSTEM "gif-viewer.exe">
    <!NOTATION jpg SYSTEM "jpg-viewer.exe">
    <!ENTITY news SYSTEM "news.gif" NDATA gif>
    <!ENTITY products SYSTEM "prod.jpg" NDATA jpg>
    <!ENTITY support SYSTEM "support.gif" NDATA gif>
]>
<menu>
    <menuitem image="news" title="News" href="news.htm"/>
    <menuitem image="products" title="Products" href="prods.htm"/>
    <menuitem image="support" title="Support" href="support.htm"/>
</menu>
```

Для того чтобы вычислить местоположение графических файлов, соответствующих пунктам этого меню, нужно будет использовать функцию `unparsed-entity-uri`. Аргументом этой функции в данном случае будет значение атрибута `image`, ведь именно этот атрибут задает имя неразбираемой сущности, которая соответствует изображению пункта меню. Преобразование такого документа в HTML будет иметь приблизительно следующий вид.

Листинг 8.68. Преобразование, использующее функцию `unparsed-entity-uri`

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="menu">
        <table>
            <xsl:apply-templates select="menuitem"/>
        </table>
    </xsl:template>
    <xsl:template match="menuitem">
        <tr>
            <td>
                <A alt="{@title}" href="{@href}">
                    <img src="{unparsed-entity-uri(@image)}"/>
                </A>
            </td>
        </tr>
    </xsl:template>
</xsl:stylesheet>
```

Результат преобразования приведен на следующем листинге.

Листинг 8.69. Выходящий документ

```xml
<table>
    <tr>
        <td>
            <A alt="News" href="news.htm">
                <img src="file:/C:/XML/news.gif"/>
            </A>
        </td>
    </tr>
    <tr>
        <td>
            <A alt="Products" href="prods.htm">
                <img src="file:/C:/XML/prod.jpg"/>
            </A>
        </td>
    </tr>
    <tr>
        <td>
            <A alt="Support" href="support.htm">
                <img src="file:/С:/XML/support.gif"/>
            </A>
        </td>
    </tr>
</table>
```

Остается только добавить, что `unparsed-entity-uri` — это единственная функция, которая позволяет работать с неразбираемыми сущностями. Никаких средств для обработки нотаций и вспомогательных приложений, которые им соответствуют, в XSLT нет. Сказывается тот факт, что неразбираемые сущности и нотации очень редко используются в документах, поэтому их поддержка в XSLT минимальна.

## Ссылки

- [unparsed-entity-uri()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/unparsed-entity-url) на MDN
