---
description: Описывает источник входных данных для инструкции слияния xsl
---

# xsl:merge-source

Описывает входной источник для инструкции [`xsl:merge`](xsl-merge.md).

_Доступно в XSLT 3.0. Начиная с Saxon 9.8, доступен во всех изданиях. Реализовано в Saxon-PE и Saxon-EE начиная с Saxon 9.6._

-   **Содержимое**: [`xsl:merge-key`](xsl-merge-key.md)+
-   **Допустимые родительские элементы**: [`xsl:merge`](xsl-merge.md)

## Атрибуты

`name?`
: _ncname_
: Имя источника слияния. Используется для различения разных источников слияния в инструкциях [`xsl:merge-action`](xsl-merge-action.md).

`for-each-item?`
: _expression_
: Выражение XPath, возвращающее набор узлов. Выбирает опорные узлы для непотокового слияния.

`for-each-source?`
: _expression_
: Выражение XPath, возвращающее набор URI; это URI документов, используемых для потокового объединения; корневые узлы этих документов выступают в качестве опорных узлов. В раннем проекте спецификации XSLT 3.0 этот атрибут был назван `for-each-stream`; с версии Saxon 9.7.0.10 принимается любой из этих вариантов.

**`select`**
: _expression_
: Выражение XPath; для каждого узла привязки выбирает узлы-потомки, которые составляют поток данных, подлежащих объединению.

`streamable?`
: _boolean_
: Для потокового слияния требуется Saxon-EE.

`use-accumulators?`
: _tokens_
: Впервые реализовано в Saxon 9.8. Определяет набор аккумуляторов, применимых к потоковому документу.

`sort-before-merge?`
: _boolean_
: Определяет, будет ли каждая входная последовательность сначала отсортирована, чтобы убедиться, что она расположена в правильном порядке. Значение yes означает, что сортировка будет произведена, а значение no (по умолчанию) означает, что каждая входная последовательность уже должна быть расположена в правильном порядке для слияния.

`validation?`
: `"strict" | "lax" | "preserve" | "strip"`
: Определяет, применяется ли валидация к вводу, считанному из этого источника слияния. Для валидации требуется Saxon-EE.

`type?`
: _eqname_
: Если указано, данные, считанные из этого источника слияния, проверяются на соответствие названному типу схемы. Для проверки требуется Saxon-EE.

## Заметки по реализации Saxon

Реализация потоковой передачи использует один поток для каждого входного документа. Опция конфигурации, разрешающая многопоточное выполнение, не должна быть отключена.

Для потокового слияния требуется Saxon-EE.

Атрибут `use-accumulators` впервые реализован в Saxon 9.8.

## Подробности

Подробности и примеры смотрите в [`xsl:merge`](xsl-merge.md)

## Ссылки

-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-merge-source)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/merge-source.html)

## См. также

-   [`xsl:merge`](xsl-merge.md)