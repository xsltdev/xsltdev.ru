---
description: Цель инструкции - позволить объединить два или более предварительно отсортированных входных файлов, по желанию используя потоковую обработку любого или всех входных файлов.
---

# xsl:merge

Цель инструкции - позволить объединить два или более предварительно отсортированных входных файлов, по желанию используя потоковую обработку любого или всех входных файлов.

_Доступна в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех изданиях. Реализовано в Saxon-PE и Saxon-EE начиная с Saxon 9.4._

-   **Категория**: инструкция
-   **Содержимое**: ( [`xsl:merge-source`](xsl-merge-source.md)+, [`xsl:merge-action`](xsl-merge-action.md), [`xsl:fallback`](xsl-fallback.md)\* )
-   **Допустимые родительские элементы**: любой элемент XSLT, модель содержимого которого - _sequence-constructor_; любой литеральный элемент результата
-   **Элемент не имеет атрибутов**

## Заметки по реализации Saxon

Инструкция `xsl:merge` является новой в XSLT 3.0 и впервые была реализована в Saxon-EE 9.4. В последующих рабочих проектах в спецификацию вносился ряд изменений; начиная с Saxon 9.8, реализация соответствует окончательному варианту Рекомендации XSLT 3.0.

В Saxon 9.5 реализован атрибут `sort-before-merge`, который позволяет сортировать входные данные перед объединением.

В Saxon 9.6 появилась поддержка потокового слияния. Было сделано одно отступление от спецификации: узлы, выбранные для слияния с помощью `xsl:merge-source/@select`, являются копиями узлов исходного документа (в смысле функции `copy-of()`), а не моментальными снимками (как определено функцией `snapshot()`). Это означает, что предки выбранных узлов и атрибуты предков недоступны.

Для потоковой обработки требуется Saxon-EE, но в Saxon-PE и Saxon-HE эта инструкция реализована без потоковой обработки.

## Подробности

Каждый вид источника ввода описывается в дочернем элементе [`xsl:merge-source`](xsl-merge-source.md) инструкции `xsl:merge`; если существует несколько экземпляров данного вида источника ввода, они выбираются в атрибуте `for-each-item` или `for-each-source` элемента [`xsl:merge-source`](xsl-merge-source.md) элемента, в то время как атрибут `select` выбирает фактические узлы, формирующие входную последовательность. Обработка, которая должна быть выполнена для каждой группы входных элементов, имеющих общее значение для ключа слияния, определяется в элементе [`xsl:merge-action`](xsl-merge-action.md).

## Примеры

### Пример 1

Объединяет однородную коллекцию файлов журналов, каждый из которых уже отсортирован по временной метке:

```xslt
<xsl:merge>
    <xsl:merge-source for-each-item="collection('log-collection')" select="events/event"/>
        <xsl:merge-key select="@timestamp" order="ascending"/>
    </xsl:merge-source>
    <xsl:merge-action>
        <xsl:sequence select="current-merge-group()"/>
    </xsl:merge-action>
</xsl:merge>
```

### Пример 2

Объединяет два файла журнала с различной внутренней структурой:

```xslt
<xsl:merge>
    <xsl:merge-source select="doc('log1.xml')/transactions/transaction"/>
        <xsl:merge-key select="xs:dateTime(@date, @time)" order="ascending"/>
    </xsl:merge-source>
    <xsl:merge-source select="doc('log2.xml')/eventdata/transfer"/>
        <xsl:merge-key select="@timestamp" order="ascending"/>
    </xsl:merge-source>
    <xsl:merge-action>
        <xsl:apply-templates select="current-merge-group()"/>
    </xsl:merge-action>
</xsl:merge>
```

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-merge)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/merge.html)

## См. также

-   [`xsl:merge-action`](xsl-merge-action.md)
-   [`xsl:merge-source`](xsl-merge-source.md)
