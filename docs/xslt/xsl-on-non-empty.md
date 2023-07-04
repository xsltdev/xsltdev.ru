---
description: Используется для того, чтобы условное построение контента можно было сделать потоковым
---

# xsl:on-non-empty

Используется для того, чтобы сделать потоковой конструкцию условного содержимого. Выводит вложенное содержимое только в том случае, если содержащая его последовательность также генерирует "обычное" содержимое.

Инструкция может появиться в любом месте конструктора последовательности (и не один раз). Содержимое выводится в соответствующем месте среди "обычного" вывода.

Хотя эта инструкция предназначена в первую очередь для облегчения написания потоковых приложений, она может быть полезна и независимо от потоковой передачи, чтобы избежать неоднократной оценки сложных условий.

_Доступно в XSLT 3.0. Начиная с версии Saxon 9.8, доступна во всех изданиях. Реализована в Saxon-PE и Saxon-EE начиная с Saxon 9.7._

-   **Категория**: инструкция
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: любой элемент XSLT, модель содержимого которого - _sequence-constructor_; любой литеральный элемент результата

## Атрибуты

`select?`
: _expression_

## Заметки по реализации Saxon

Новый в XSLT 3.0 и реализованный начиная с Saxon 9.7.

## Примеры

Следующий код генерирует верхний и нижний колонтитулы только при наличии содержимого, однако он не является гарантированно потоковым, поскольку обрабатывает дочерние элементы `item-for-sale` более одного раза:

```xslt
<xsl:if test="exists(item-for-sale)">
    <h1>Items for Sale</h1>
</xsl:if>
<xsl:apply-templates select="item-for-sale"/>
<xsl:if test="exists(item-for-sale)">
    <p>Total value: {accumulator-after('total-value')}</p>
</xsl:if>
```

Чтобы сделать его потоковым, его можно переписать с помощью инструкции `xsl:on-non-empty`:

```xslt
<xsl:sequence>
    <xsl:on-non-empty>
        <h1>Items for Sale</h1>
    </xsl:on-non-empty>
    <xsl:apply-templates select="item-for-sale"/>
    <xsl:on-non-empty>
        <p>Total value: {accumulator-after('total-value')}</p>
    </xsl:on-non-empty>
</xsl:sequence>
```

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-on-non-empty)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/on-non-empty.html)

## См. также

-   [`xsl:on-empty`](xsl-on-empty.md)
-   [`xsl:where-populated`](xsl-where-populated.md)
