---
layout: default
title: xsl:stylesheet
nav_order: 28
parent: XSLT
---

<!-- prettier-ignore-start -->
# xsl:stylesheet
{: .no_toc }
<!-- prettier-ignore-end -->

Корневым элементом XSLT-документа всегда является элемент **`xsl:stylesheet`** или его синоним [`xsl:transform`](/xslt/xsl-transform/).

Эти элементы полностью идентичны и различаются лишь именами.

<!-- prettier-ignore -->
1. TOC
{:toc}

## Синтаксис

### XSLT 1.0

```xml
<xsl:stylesheet
    id = "id"
    extension-element-prefixes = "tokens"
    exclude-result-prefixes = "tokens"
    version = "number">
    <!-- Содержимое: (xsl:import*, top-level-elements) -->
</xsl:stylesheet>
```

Атрибуты:

- **`version`** — **обязательный** атрибут, в котором указывается версия языка XSLT, использованная при создании этого преобразования.
- `id` — _необязательный_ атрибут, может содержать уникальный идентификатор данного преобразования. Этот атрибут используется в тех случаях, когда преобразование включено в преобразуемый документ для его идентификации внутри этого документа.
- `extension-element-prefixes` — _необязательный_ атрибут, перечисляет префиксы пространств имен, которые определяют элементы расширения.
- `exclude-result-prefixes` — _необязательный_ атрибут, перечисляет префиксы пространств имен, определения которых не нужно включать в выходящий документ.

### XSLT 2.0

```xml
<xsl:stylesheet
    id? = id
    extension-element-prefixes? = tokens
    exclude-result-prefixes? = tokens
    version = number
    xpath-default-namespace? = uri
    default-validation? = "preserve" | "strip"
    default-collation? = uri-list
    input-type-annotations? = "preserve" | "strip" | "unspecified">
    <!-- Content: (xsl:import*, other-declarations) -->
</xsl:stylesheet>
```

### XSLT 3.0

```xml
<xsl:stylesheet
    id? = id
    version = decimal
    default-mode? = eqname | "#unnamed"
    default-validation? = "preserve" | "strip"
    input-type-annotations? = "preserve" | "strip" | "unspecified"
    default-collation? = uris
    extension-element-prefixes? = prefixes
    exclude-result-prefixes? = prefixes
    expand-text? = boolean
    use-when? = expression
    xpath-default-namespace? = uri >
    <!-- Content: (declarations) -->
</xsl:stylesheet>
```

## Описание и примеры

### Пример 1

Если преобразование, включенное в преобразуемый документ, будет иметь вид

```xml
...
<xsl:stylesheet version="1.0" id="trans"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    ...
</xsl:stylesheet>
...
```

то ассоциироваться с документом оно будет следующей инструкцией:

```xml
<?xml-stylesheet type="text/xsl" href="#trans"?>
```

Элемент `xsl:stylesheet` может включать следующие элементы языка XSLT:

- [`xsl:import`](/xslt/xsl-import/);
- [`xsl:include`](/xslt/xsl-include/);
- [`xsl:strip-space`](/xslt/xsl-strip-space/);
- [`xsl:output`](/xslt/xsl-output/);
- [`xsl:key`](/xslt/xsl-key/);
- [`xsl:decimal-format`](/xslt/xsl-decimal-format/);
- [`xsl:namespace-alias`](/xslt/xsl-namespace-alias/);
- [`xsl:attribute-set`](/xslt/xsl-attribute-set/);
- [`xsl:variable`](/xslt/xsl-variable/);
- [`xsl:param`](/xslt/xsl-param/);
- [`xsl:template`](/xslt/xsl-template/).

Эти элементы называются элементами верхнего уровня, поскольку они могут находиться на самом верхнем (не считая уровня корневого элемента) уровне в иерархии элементов документа. Более того, все перечисленные элементы кроме `xsl:variable` и `xsl:param` должны находиться только на верхнем уровне. Элементы `xsl:variable` и `xsl:param` могут использоваться в шаблонах, определяя локальные переменные и параметры.

Если преобразование импортирует внешние модули, первыми дочерними элементами `xsl:stylesheet` должны быть элементы `xsl:import`. Иначе говоря, элементам `xsl:import` внутри `xsl:stylesheet` должны предшествовать только другие элементы `xsl:import`. Порядок всех остальных дочерних элементов `xsl:stylesheet` не имеет значения.

Помимо элементов верхнего уровня, `xsl:stylesheet` может содержать элементы других, но обязательно ненулевых пространств имен. Это позволяет включать в преобразования любую сопутствующую информацию, правда спецификация оговаривает, что такого рода элементы не должны изменять поведение элементов и функций самого XSLT.

### Пример 2

Листинг 4.1. Преобразование с элементом верхнего уровня, не принадлежащим XSLT

```xml
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <source xmlns="http://www.a.com/XSL/source">
        Simple stylesheet
    </source>
    <xsl:template match="/">
        <root/>
    </xsl:template>
</xsl:stylesheet>
```

На листинге 4.1 элемент `source` принадлежит пространству имен с URI `http://www.a.com/XSL/source`. Поскольку пространство имен этого элемента ненулевое, такое объявление является корректным.

## См. также

- [`xsl:transform`](/xslt/xsl-transform/)

## Ссылки

- [`xsl:stylesheet`](https://developer.mozilla.org/en/XSLT/stylesheet) на MDN
- [`xsl:stylesheet`](https://msdn.microsoft.com/en-us/library/ms256204.aspx) на MSDN
