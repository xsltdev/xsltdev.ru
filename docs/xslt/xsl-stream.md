---
description: Используется для инициирования потоковой обработки исходного документа
---

# xsl:stream

Используется для инициирования потоковой обработки исходного документа. (В более поздних проектах спецификации XSLT 3.0 инструкция переименована в [`xsl:source-document`](xsl-source-document.md), что доступно с версии Saxon 9.7.0.8, а `xsl:stream` пока сохранен как синоним).

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех редакциях. Реализовано в Saxon-EE начиная с Saxon 9.6._

-   **Категория**: инструкция
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: любой элемент XSLT, модель содержимого которого - _sequence-constructor_; любой литеральный элемент результата

## Атрибуты

**`href`**
: _{ uri }_
: URI исходного документа. Он может быть записан как шаблон значения атрибута, если URI не известен статически.

`streamable?`
: _boolean_
: Разрешено с версии 9.7.0.8. Используется для специального запроса потоковой обработки. По умолчанию используется `yes`.

`use-accumulators?`
: _tokens_
: Определяет набор аккумуляторов, которые применимы к данному документу.

`validation?`
: `"strict" | "lax" | "preserve" | "strip"`

`type?`
: _eqname_

## Заметки по реализации Saxon

В более поздних проектах спецификации XSLT 3.0 инструкция `xsl:stream` заменяется инструкцией [`xsl:source-document`](xsl-source-document.md), которая доступна начиная с Saxon 9.7.0.8. Инструкция `xsl:stream` сохраняется в качестве синонима.

Эта инструкция устарела и будет удалена после Saxon 9.8.

## Подробности

Тело инструкции представляет собой конструктор последовательности, который оценивается с корневым узлом выбранного документа в качестве контекстного узла. Чтобы потоковая передача работала, эта инструкция должна быть написана как потоковый конструктор последовательности. Выражаясь очень неформально, это означает, что он должен делать выборки в документе только вниз, и ни одна инструкция или выражение не могут делать более одной выборки вниз. Примеры [examples](http://www.w3.org/TR/xslt-30/#stream-examples) в спецификации W3C иллюстрируют некоторые из возможностей; все эти примеры работают с Saxon.

Инструкция может выполнять следующие действия:

-   Вычислить совокупность, например, общее или среднее значение (см. пример ниже).
-   Инициировать обработку документа с использованием правил шаблонов, вызывая [`xsl:apply-templates`](xsl-apply-templates.md) с использованием потокового режима.
-   Итерация содержимого документа с помощью [`xsl:for-each`](xsl-for-each.md) или (если необходимо "запомнить" информацию от одного элемента к другому) с помощью [`xsl:iterate`](xsl-iterate.md).
-   Выполнить группировку содержимого документа с помощью [`xsl:for-each-group`](xsl-for-each-group.md). Saxon имеет лишь ограниченную возможность выполнять потоковую группировку, но простые случаи должны работать. Необходимо использовать один из атрибутов `group-adjacent`, `group-starting-with` или `group-ending-with`, а также использовать новые переменные привязки XSLT 3.0 для current group и current-grouping-key, а не функции XSLT 2.0.

## Примеры

### Пример 1

Простой пример:

```xslt
<xsl:stream href="transactions.xml">
    <out><xsl:value-of select="sum(*/transaction/value)"/></out>
</xsl:stream>
```

### Пример 2

См. далее [примеры](http://www.w3.org/TR/xslt-30/#stream-examples) в спецификации W3C; все эти примеры работают с Saxon 9.5 и далее.

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-stream)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/stream.html)

## См. также

-   [`xsl:apply-templates`](xsl-apply-templates.md)
-   [`xsl:for-each`](xsl-for-each.md)
-   [`xsl:for-each-group`](xsl-for-each-group.md)
-   [`xsl:iterate`](xsl-iterate.md)