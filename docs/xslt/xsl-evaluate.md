---
description: Позволяет динамически оценивать выражения XPath, построенные в виде строки
---

# xsl:evaluate

Позволяет динамически оценивать выражения XPath, построенные в виде строки.

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех редакциях, но ограниченно используется в Saxon-HE. Реализовано в Saxon-PE и Saxon-EE начиная с Saxon 9.6._

-   **Категория**: инструкция
-   **Содержимое**: ( [`xsl:with-param`](xsl-with-param.md) | [`xsl:fallback`](xsl-fallback.md) )\*
-   **Допустимые родительские элементы**: любой элемент XSLT, модель содержимого которого - _sequence-constructor_; любой литеральный элемент результата

## Атрибуты

**`xpath`**
: _expression_
: Выражение XPath, которое оценивается для возврата целевого выражения в виде строки.

`as?`
: _sequence-type_
: Определяет требуемый тип результата выражения XPath. По умолчанию это `item()*`.

`base-uri?`
: _{ uri }_
: Базовый URI для целевого выражения. По умолчанию - базовый URI инструкции таблицы стилей.

`with-params?`
: _expression_
: Карта, используемая для предоставления значений переменным в целевом выражении, если имена известны только динамически.

`context-item?`
: _expression_
: Выражение XPath, которое оценивается для определения элемента контекста, позиции и размера для оценки целевого выражения.

`namespace-context?`
: _expression_
: Выражение, возвращающее узел; пространства имен в области видимости этого узла определяют контекст пространства имен для выражения XPath. По умолчанию используется контекст пространства имен инструкции `xsl:evaluate` в таблице стилей.

`schema-aware?`
: _{ boolean }_
: Если да, то выражение XPath имеет доступ к компонентам схемы, импортированным в таблицу стилей.

`saxon:options?`
: _expression_
: Может использоваться для установки опций, специфичных для реализации Saxon. Значением атрибута является выражение, которое оценивается как карта. Подробнее см. в `saxon:options`.

## Заметки по реализации Saxon

Инструкция была реализована начиная с версии Saxon 9.3, первоначально с ограничением, что функции, доступные только в XSLT, такие как `key()`, не могут быть использованы в целевом выражении XPath. Инструкция полностью реализована начиная с версии Saxon 9.6. Переключатель для отключения этой функции (требуемый спецификацией W3C) стал доступен в Saxon 9.8. Атрибут `saxon:options` стал доступен в Saxon 9.9.

Инструкция распознается в Saxon-HE, но функция "статически отключена", что означает, что при фактическом выполнении инструкции произойдет ошибка.

Если вас беспокоят последствия этой функции для безопасности, вы можете отключить ее статически или динамически, установив свойство конфигурации `Feature.DISABLE_XSL_EVALUATE`.

## Подробности

Инструкция `xsl:evaluate` позволяет динамически оценивать выражения XPath так же, как и функция расширения `saxon:evaluate()`, которая была доступна в Saxon в течение многих лет.

Функция доступна в виде инструкции XSLT, а не функции, чтобы обеспечить большую гибкость синтаксиса, в частности, возможность определения параметров с помощью дочерних элементов [`xsl:with-param`](xsl-with-param.md).

Инструкция может принимать [`xsl:fallback`](xsl-fallback.md) для определения поведения отката при использовании процессора XSLT 2.0 (или 1.0).

_Прежде чем использовать `xsl:evaluate`, подумайте, не могут ли функции более высокого порядка (также новые в XSLT 3.0) обеспечить лучшее решение проблемы. Также хорошо подумайте о возможности инъекционных атак, если оцениваемое выражение формируется путем конкатенации строк._

## Примеры

Сортировка элементов продукта в соответствии с ключом сортировки, предоставленным (в виде выражения XPath) в качестве параметра таблицы стилей:

```xslt
<xsl:apply-templates select="product">
    <xsl:sort>
        <xsl:evaluate xpath="$product-sort-key"/>
    </xsl:sort>
</xsl:apply-templates>
```

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-evaluate)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/evaluate.html)

## См. также

-   [`saxon:evaluate()`](http://saxonica.com/documentation/index.html#!functions/saxon/evaluate)
