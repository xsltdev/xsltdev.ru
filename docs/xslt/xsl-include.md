---
description: Преобразование, включающее внешний модуль, ведет себя так, как если бы на месте элемента xsl:include было содержимое этого внешнего модуля
---

# xsl:include

Включение внешнего преобразования является включением в прямом смысле этого слова: преобразование, включающее внешний модуль, ведет себя так, как если бы на месте элемента **`xsl:include`** было содержимое этого внешнего модуля.

## Синтаксис

```xml
<xsl:include
    href = "URI" />
```

Атрибуты:

**`href`**
: **обязательный** атрибут, содержит URI внешнего модуля, который должен быть включен в текущее преобразование. Внешний модуль обязан быть корректным XSLT-преобразованием.

## Описание и примеры

### Пример 1

Рассмотрим простое преобразование `a.xsl`, которое определяет значение переменной `date`.

Листинг 4.6. Преобразование a.xsl

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:variable name="date" select="'16.07.2001'"/>
</xsl:stylesheet>
```

Включим `a.xsl` в преобразование `b.xsl`.

Листинг 4.7. Преобразование b.xsl

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:include href="a.xsl"/>
    <xsl:template match="/">
        <content>
            <xsl:text>Today is </xsl:text>
            <xsl:value-of select="$date"/>
            <xsl:text>.</xsl:text>
        </content>
    </xsl:template>
</xsl:stylesheet>
```

Включение в преобразование `b.xsl` преобразования `a.xsl` эквивалентно замене в `b.xsl` соответствующего элемента `xsl:include` на содержимое преобразования `a.xsl`. В нашем случае будет включено только определение переменной `date`. Преобразование `b.xsl` можно переписать в следующем виде:

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:variable name="date" select="'16.07.2001'"/>
    <xsl:template match="/">
        <content>
            <xsl:text>Today is </xsl:text>
            <xsl:value-of select="$date"/>
            <xsl:text>.</xsl:text>
        </content>
    </xsl:template>
</xsl:stylesheet>
```

При включении внешних преобразований при помощи `xsl:include` следует учитывать некоторые особенности использования этого элемента.

Все ссылки и относительные идентификаторы ресурсов (URI), используемые во включаемом преобразовании, вычисляются относительно его базового адреса.

### Пример 2

Предположим, что URI нашего преобразования имеет вид:

```
http://www.xsltdev.ru/examples/a.xsl
```

В этом случае элемент

```xml
<xsl:include href="b.xsl"/>
```

будет включать преобразование с URI

```
http://www.xsltdev.ru/examples/b.xsl
```

Нет никаких проблем и с включением преобразований по абсолютным идентификаторам. Например, если преобразование `identity.xsl` находится по адресу

```
http://www.xsltdev.ru/stylesheets/identity.xsl
```

то включить его можно элементом

```xml
<xsl:include href=" http://www.xsltdev.ru/stylesheets/identity.xsl"/>
```

Естественно, включаемые модули должны быть доступны процессору во время выполнения преобразования, поэтому если они находятся на других серверах, то всегда будет существовать возможность невыполнения преобразования.

В XSLT элементы [`xsl:import`](xsl-import.md) всегда должны быть первыми дочерними элементами головного элемента [`xsl:stylesheet`](xsl-stylesheet.md). Поэтому элементы `xsl:import` внешнего преобразования включаются сразу после элементов `xsl:import` основного преобразования. Если в основном преобразовании элементов `xsl:import` нет, то включаемые элементы `xsl:import` становятся первыми дочерними элементами `xsl:stylesheet` основного преобразования.

### Пример 3

Предположим, что в основное преобразование мы импортируем файл `a.xsl` и включаем файл `b.xsl`.

Листинг 4.8. Основное преобразование

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:import href="a.xsl"/>
    <xsl:variable name="a"/>
    <xsl:include href="b.xsl"/>
    <!-- Содержимое основного преобразования -->
</xsl:stylesheet>
```

Листинг 4.9. Преобразование b.xsl

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:import href="c.xsl"/>
    <!-- Содержимое преобразования b.xsl -->
</xsl:stylesheet>
```

Тогда основное преобразование может быть переписано следующим образом.

Листинг 4.10. Основное преобразование после включения b.xsl

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:import href="a.xsl"/>
    <xsl:import href="c.xsl"/>
    <xsl:variable name="a"/>
    <!-- Содержимое преобразования b.xsl -->
    <!-- Содержимое основного преобразования -->
</xsl:stylesheet>
```

Элемент `xsl:include` можно использовать и для включения преобразований с упрощенным синтаксисом. Преобразования такого рода будут включаться как эквивалентные им преобразования стандартного синтаксиса — то есть с корневым элементом `xsl:stylesheet` и единственным шаблоном, соответствующим корневому узлу.

### Пример 4

Предположим, что мы используем преобразование упрощенного синтаксиса `simple.xsl`.

Листинг 4.11. Преобразование simple.xsl

```xml
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:apply-templates/>
</html>
```

Включим `simple.xsl` в основное преобразование.

Листинг 4.12. Основное преобразование

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:include href="simple.xsl"/>
    <xsl:template match="a">
        <xsl:value-of select="."/>
    </xsl:template>
</xsl:stylesheet>
```

Тогда основное преобразование может быть переписано в следующем виде.

Листинг 4.13. Основное преобразование после включения simple.xsl

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <!-- начало simple.xsl -->
        <html>
            <xsl:apply-templates/>
        </html>
        <!-- конец simple.xsl -->
    </xsl:template>
    <xsl:template match="a">
        <xsl:value-of select="."/>
    </xsl:template>
</xsl:stylesheet>
```

Комментарием на листинге 4.13 выделен шаблон, который соответствует преобразованию `simple.xsl`.

Следует отметить, что разные процессоры по-разному обрабатывают включение упрощенных преобразований. К сожалению, большинство из них не поддерживают эту особенность, хотя она четко определена в спецификации, поэтому, если требуется высокая надежность и переносимость, таких включений лучше избегать.

Включаемые модули являются полноценными и самостоятельными преобразованиями. К примеру, они также могут включать другие преобразования при помощи тех же элементов `xsl:include`. При этом преобразование не должно прямо или косвенно включать само себя — такая ситуация породит бесконечный цикл включений.

## См. также

- [`xsl:import`](xsl-import.md) -- импорт преобразований.

## Ссылки

- [`xsl:include`](https://developer.mozilla.org/en/XSLT/include) на MDN
- [`xsl:include`](https://msdn.microsoft.com/en-us/library/ms256094.aspx) на MSDN
