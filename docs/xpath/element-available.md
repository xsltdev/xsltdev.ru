# element-available()

Функция **`element-available`** служит для проверки доступности в преобразовании того или иного элемента.

Строковый параметр `element-available` задает расширенное имя элемента; функция возвращает `true`, если элемент с таким именем доступен, `false` — если нет.

## Синтаксис

```
boolean element-available( string )
```

## Описание и примеры

Предположим, что преобразование, созданное нами для процессора Xalan с использованием элемента расширения `ext:date`, будет выполняться на каком-либо другом процессоре. В этом случае велика вероятность того, что вследствие несовместимости механизмов расширений это преобразование завершится ошибкой — "чужой" процессор просто не сможет выполнить элемент `ext:date`.

Во избежание этого, мы можем использовать функцию `element-available` для проверки доступности элемента `ext:date` до его вызова.

Листинг 10.21. Преобразование, использующее функцию `element-available`

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ext="xalan://de.fzi.xslt.ext" extension-element-prefixes="ext">
    <xsl:template match="/">
        <result>
            <xsl:if test="element-available('ext:date')">
                <p>This page was generated at <ext:date pattern="HH:mm"/> on <ext:date pattern="dd/MM/yyyy"/>.</p>
            </xsl:if>
        </result>
    </xsl:template>
</xsl:stylesheet>
```

## Ссылки

- [element-available()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/element-available) на MDN
