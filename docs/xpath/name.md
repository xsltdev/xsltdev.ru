# name()

Функция **`name`** возвратит имя вида `QName`, которое будет соответствовать расширенному имени первого в порядке просмотра документа узла переданного ей множества.

## Синтаксис

### XPath 1.0

```
string name( node-set? )
```

## Описание и примеры

Это имя должно соответствовать расширенному имени узла, то есть должны совпадать локальные части и пространства имен. Вместе с тем, это вовсе не означает, что префиксы также будут совпадать. Например, если в элементе определены несколько префиксов для одного пространства, функция name может использовать любой из них.

### Пример

Для следующего элемента

```xml
<a:body xmlns:a="http://www.a.com" xmlns:b="http://www.a.com" xmlns:c="http://www.a.com"/>
```

функция `name` может вернуть `a:body`, `b:body` или `c:body`.

Большинство процессоров все же возвращает префикс, с которым узел был объявлен.

Так же как [`local-name`](/xpath/local-name/) и [`namespace-uri`](/xpath/namespace-uri/), функция `name` имеет следующие особенности использования.

- Если аргумент опущен, то его значением по умолчанию является множество, содержащее единственный контекстный узел.
- Если аргументом является пустое множество, то функция возвращает пустую строку.
- Если первый в порядке просмотра документа узел переданного множества не имеет расширенного имени, то функция возвращает пустую строку.
- В противном случае функция возвращает имя вида `QName`, соответствующее расширенному имени первого в порядке просмотра документа узла переданного множества.

### Пример

Мы можем видоизменить преобразование, приведенное в примере к функциям [`last`](/xpath/last/) и [`position`](/xpath/position/), чтобы генерируемые элементы содержали информацию об имени, пространстве имен и локальной части имени элементов.

Листинг 6.10. Входящий документ

```xml
<a:a xmlns:a="http://www.a.com" xmlns:b="http://www.b.com">
    <b:b>
        <c/>
    </b:b>
</a:a>
```

Листинг 6.11. Преобразование

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http: //www.w3.org/1999/XSL/Transform" xmlns:a="http://www.a.com" xmlns:b="http://www.b.com">
    <xsl:output indent="yes"/>
    <xsl:template match="*">
        <element name="{name()}" namespace-uri="{namespace-uri()}" local-name="{local-name()}">
            <xsl:apply-templates/>
        </element>
    </xsl:template>
</xsl:stylesheet>
```

Листинг 6.12. Выходящий документ

```xml
<element xmlns:a="http://www.a.com" xmlns:b="http://www.b.com" name="a:a" namespace-uri="http://www.a.com" local-name="a">
    <element name="b:b" namespace-uri="http://www.b.com" local-name="b">
        <element name="c" namespace-uri="" local-name="c"/>
    </element>
</element>
```

## Ссылки

- [name()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/name) на MDN
