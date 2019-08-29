---
description: Корневым элементом XSLT-документа всегда является элемент xsl:transform или его синоним xsl:stylesheet
---

# xsl:transform

Корневым элементом XSLT-документа всегда является элемент **`xsl:transform`** или его синоним [`xsl:stylesheet`](xsl-stylesheet.md).

Эти элементы полностью идентичны и различаются лишь именами.

## Синтаксис

```xml
<xsl:transform
    id = "id"
    extension-element-prefixes = "tokens"
    exclude-result-prefixes = "tokens"
    version = "number">
    <!-- Содержимое: (xsl:import*, top-level-elements) -->
</xsl:stylesheet>
```

Атрибуты:

**`version`**
: **обязательный** атрибут, в котором указывается версия языка XSLT, использованная при создании этого преобразования.

`id`
: _необязательный_ атрибут, может содержать уникальный идентификатор данного преобразования. Этот атрибут используется в тех случаях, когда преобразование включено в преобразуемый документ для его идентификации внутри этого документа.

`extension-element-prefixes`
: _необязательный_ атрибут, перечисляет префиксы пространств имен, которые определяют элементы расширения.

`exclude-result-prefixes`
: _необязательный_ атрибут, перечисляет префиксы пространств имен, определения которых не нужно включать в выходящий документ.

## Описание и примеры

### Пример 1

Если преобразование, включенное в преобразуемый документ, будет иметь вид

```xml
...
<xsl:transform version="1.0" id="trans"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    ...
</xsl:transform>
...
```

то ассоциироваться с документом оно будет следующей инструкцией:

```xml
<?xml-stylesheet type="text/xsl" href="#trans"?>
```

Элемент `xsl:transform` может включать следующие элементы языка XSLT:

- [`xsl:import`](xsl-import.md);
- [`xsl:include`](xsl-include.md);
- [`xsl:strip-space`](xsl-strip-space.md);
- [`xsl:output`](xsl-output.md);
- [`xsl:key`](xsl-key.md);
- [`xsl:decimal-format`](xsl-decimal-format.md);
- [`xsl:namespace-alias`](xsl-namespace-alias.md);
- [`xsl:attribute-set`](xsl-attribute-set.md);
- [`xsl:variable`](xsl-variable.md);
- [`xsl:param`](xsl-param.md);
- [`xsl:template`](xsl-template.md).

Эти элементы называются элементами верхнего уровня, поскольку они могут находиться на самом верхнем (не считая уровня корневого элемента) уровне в иерархии элементов документа. Более того, все перечисленные элементы кроме `xsl:variable` и `xsl:param` должны находиться только на верхнем уровне. Элементы `xsl:variable` и `xsl:param` могут использоваться в шаблонах, определяя локальные переменные и параметры.

Если преобразование импортирует внешние модули, первыми дочерними элементами `xsl:transform` должны быть элементы `xsl:import`. Иначе говоря, элементам `xsl:import` внутри `xsl:transform` должны предшествовать только другие элементы `xsl:import`. Порядок всех остальных дочерних элементов `xsl:transform` не имеет значения.

Помимо элементов верхнего уровня, `xsl:transform` может содержать элементы других, но обязательно ненулевых пространств имен. Это позволяет включать в преобразования любую сопутствующую информацию, правда спецификация оговаривает, что такого рода элементы не должны изменять поведение элементов и функций самого XSLT.

### Пример 2

Листинг 4.1. Преобразование с элементом верхнего уровня, не принадлежащим XSLT

```xml
<xsl:transform version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <source xmlns="http://www.a.com/XSL/source">
        Simple stylesheet
    </source>
    <xsl:template match="/">
        <root/>
    </xsl:template>
</xsl:transform>
```

На листинге 4.1 элемент `source` принадлежит пространству имен с URI `http://www.a.com/XSL/source`. Поскольку пространство имен этого элемента ненулевое, такое объявление является корректным.

## См. также

- [`xsl:stylesheet`](xsl-stylesheet.md)

## Ссылки

- [`xsl:transform`](https://developer.mozilla.org/en/XSLT/transform) на MDN
- [`xsl:transform`](https://msdn.microsoft.com/en-us/library/ms256040.aspx) на MSDN
