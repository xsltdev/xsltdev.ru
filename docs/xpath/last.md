# last()

Функция **`last`** возвращает текущий размер контекста — число, которое показывает, сколько узлов находится в обрабатываемом в данный момент множестве.

## Синтаксис

### XPath 1.0

```
number last()
```

## Описание и примеры

### Пример

В этом примере мы будем заменять все элементы элементами вида

```xml
<element name="..." position="...">
    ...
</element>
```

где атрибут `name` будет содержать имя, a `position` — через дробь позицию элемента в контексте и размер контекста.

Листинг 6.7. Входящий документ

```xml
<a>
    <b/>
    <c/>
    <d>
        <e/>
        <f/>
    </d>
</a>
```

Листинг 6.8. Преобразование

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output indent="yes"/>
    <xsl:strip-space elements="*"/>
    <xsl:template match="*">
        <element name="{name()}" pos="{position()}/{last()}">
            <xsl:apply-templates/>
        </element>
    </xsl:template>
</xsl:stylesheet>
```

Листинг 6.9. Выходящий документ

```xml
<element name="a" pos="1/1">
    <element name="b" pos="1/3"/>
    <element name="c" pos="2/3"/>
    <element name="d" pos="3/3">
        <element name="e" pos="1/2"/>
        <element name="f" pos="2/2"/>
    </element>
</element>
```

Отметим, что если бы мы не удаляли лишние пробельные символы во входящем документе при помощи элемента [`xsl:strip-space`](/xslt/xsl-strip-space/), в контексте преобразования учитывались бы также и текстовые узлы, которые им соответствуют. Выходящий документ без этого элемента имел бы следующий вид:

```xml
<element name="a" pos="1/1">
    <element name="b" pos="2/7"/>
    <element name="c" pos="4/7"/>
    <element name="d" pos="6/7">
        <element name="e" pos="2/5"/>
        <element name="f" pos="4/5"/>
    </element>
</element>
```

### См. также

- Функция [`count()`](/xpath/count/) -- возвращает число узлов в наборе узлов.
- Функция [`current()`](/xpath/current/) -- возвращает текущий узел преобразования.
- Функция [`position()`](/xpath/position/) -- возвращает позицию контекста — число, показывающее порядковый номер контекстного узла в обрабатываемом множестве.

## Ссылки

- [last()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/last) на MDN
