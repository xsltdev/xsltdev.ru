---
description: Создает новый узел документа
---

# xsl:document

Создает новый узел документа.

_Доступен в XSLT 1.0 и более поздних версиях. Доступен во всех редакциях Saxon._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

`validation?`
: `"strict" | "lax" | "preserve" | "strip"`
: Используется для выполнения проверки на уровне документов. Требуется Saxon-PE или Saxon-EE.

`type?`
: _eqname_
: Определяет, что происходит с любыми аннотациями типов на узлах элементов или атрибутов. Требуется Saxon-PE или Saxon-EE.

## Заметки по реализации Saxon

Эту инструкцию не следует путать с одноименной инструкцией в отозванном проекте XSLT 1.1 (который поддерживается в Saxon 6.5.x). Эта инструкция была предшественницей [`xsl:result-document`](xsl-result-document.md).

## Подробности

Содержимое нового узла документа создается с помощью содержащихся инструкций (так же, как и `xsl:result-document`), и новый узел документа добавляется в последовательность результатов. Инструкция полезна, главным образом, если вы хотите проверить документ: элемент допускает атрибуты `validation` и `type`, которые выполняют проверку на уровне документа так же, как и соответствующие атрибуты на `xsl:result-document`.

Инструкция также позволяет функции или шаблону создавать временное дерево без необходимости создавать переменную и затем возвращать значение переменной.

## Ссылки

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-document)
-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-document)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/document.html)

## См. также

-   [`xsl:result-document`](xsl-result-document.md)
