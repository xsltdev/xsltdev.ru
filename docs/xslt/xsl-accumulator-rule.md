---
description: Определяет правило для xsl-аккумулятора
---

# xsl:accumulator-rule

Определяет правило для [`xsl:accumulator`](xsl-accumulator.md).

_Доступно в XSLT 3.0. Начиная с версии Saxon 9.8, доступно во всех редакциях. Реализовано в Saxon-PE и Saxon-EE начиная с Saxon 9.6._

-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: [`xsl:accumulator`](xsl-accumulator.md)

## Атрибуты

**`match`**
: _pattern_
: Шаблон, определяющий набор узлов, к которым применяется правило накопления.

`phase?`
: `"start" | "end"`
: Определяет, срабатывает ли правило до или после обработки потомков, указывая `phase="start"` (по умолчанию) или `phase="end"` соответственно.

`select?`
: _expression_
: Выражение, которое должно быть оценено правилом, может быть задано либо атрибутом select, либо вложенным конструктором последовательности.

`saxon:capture?`
: _boolean_
: Значение `"yes|true|1"` в правиле `phase="end"` для потокового накопителя устраняет требование, чтобы атрибут select (или конструктор последовательности) был неподвижным. Вместо этого выражение имеет доступ к снимку потокового узла (в смысле функции `fn:snapshot`). Например, запись `select="($value, .)"` гарантирует, что значение аккумулятора содержит последовательность моментальных копий всех узлов элементов, соответствующих правилу аккумулятора. Подробнее см. в `saxon:capture`.

## Примеры

Пример использования правила захвата аккумуляторов для построения глоссария документа см. в статье блога [Capturing Accumulators](http://dev.saxonica.com/blog/mike/2018/03/capturing-accumulators.html).

## Пример

```xslt
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Declare accumulator for calculating minimum salary -->
  <xsl:accumulator name="min-salary" initial-value="10000000">
    <!-- Define rule for employee elements -->
    <xsl:accumulator-rule match="employee" select="if (@salary lt $value) then @salary else $value"/>
  </xsl:accumulator>

  <!-- The rest of the style -->
</xsl:stylesheet>
```

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-accumulator-rule)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/accumulator-rule.html)

## См. также

-   [`xsl:accumulator`](xsl-accumulator.md)
