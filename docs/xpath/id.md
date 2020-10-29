---
description: Функция id позволяет обращаться к элементам по значениями их уникальных атрибутов
---

# id()

Функция **`id`** позволяет обращаться к элементам по значениями их уникальных атрибутов.

Частично поддерживается браузером Mozilla Firefox.

## Синтаксис

```
node-set id( object )
```

## Описание и примеры

Функция `id` выполняется по-разному в зависимости от того, какой тип данных ей передается.

- Если аргументом функции является строка, она рассматривается как набор идентификаторов, разделенных пробелами. В результирующее множество узлов войдут узлы тех элементов текущего документа, значения уникальных атрибутов которых входят в набор идентификаторов, определяемый строковым аргументом.
- Если аргументом функции является множество узлов, результатом ее выполнения будет объединение результатов функции `id`, примененной к строковому значению каждого из узлов множества.
- Если аргументом функции является объект другого типа, аргумент вначале преобразуется в строку и функция `id` выполняется как со строковым параметром.

### Пример

Предположим, что мы используем XML для того, чтобы описать граф — множество вершин, соединенных дугами.

Каждой вершине будет соответствовать элемент `vertex`. Для того чтобы описать все связи, мы дадим каждой вершине уникальное имя, которое будет записано в ее ID-атрибуте name. Имена вершин, с которыми она соединена, будут перечислены в атрибуте connects типа `IDREFS`.

Документ, описывающий этот граф, может выглядеть следующим образом.

Листинг 6.13. Документ `gemini.xsl`

```xml
<!DOCTYPE vertices SYSTEM "gemini.dtd">
<vertices>
  <vertex name="alpha" connects="tau" />
  <vertex name="beta" connects="upsilon" />
  <vertex name="gamma" connects="zeta" />
  <vertex name="delta" connects="zeta lambda upsilon" />
  <vertex name="epsilon" connects="nu mu tau" />
  <vertex name="zeta" connects="delta gamma" />
  <vertex name="theta" connects="tau" />
  <vertex name="iota" connects="tau upsilon" />
  <vertex name="kappa" connects="upsilon" />
  <vertex name="lambda" connects="delta xi" />
  <vertex name="mu" connects="epsilon" />
  <vertex name="nu" connects="epsilon" />
  <vertex name="xi" connects="lambda" />
  <vertex name="tau" connects="alpha theta iota epsilon" />
  <vertex name="upsilon" connects="beta iota kappa delta" />
</vertices>
```

Декларация типа документа вынесена во внешний файл `gemini.dtd`.

Листинг 6.14. Файл `gemini.dtd`

```xml
<!ELEMENT vertices (vertex*)>
<!ELEMENT vertex EMPTY>
<!ATTLIST vertex
    name ID #REQUIRED
    connects IDREFS #REQUIRED>
```

При обработке этого документа функция `id` будет очень полезна для выбора элементов соединенных вершин. Действительно, функция `id`, которой будет передано значение атрибута `connects` (в котором через пробелы перечислены вершины, смежные данной), возвратит множество, состоящее из элементов с перечисленными уникальными идентификаторами. Так, например, функция `id('tau upsilon')` возвратит множество, состоящее из двух элементов с атрибутами `name`, равными `tau` и `upsilon` соответственно.

Более того, функция `id` может быть вычислена и от множества узлов. В этом случае ее значением будет объединение множеств, полученных в результате выполнения функции от строкового значения каждого узла переданного множества. Например, `id(id('tau upsilon')/@connects)` возвратит множество, состоящее из вершин с именами `alpha`, `beta`, `delta`, `epsilon`, `theta`, `iota` и `kappa` — множество вершин, смежных с вершинами `tau` и `upsilon`.

Приведем пример преобразования, которое в каждый элемент `vertex` добавляет комментарий, в котором перечислены имена вершин, достижимых из текущей, не более чем за два шага.

Для того чтобы найти множество вершин, достижимых за один шаг (иначе говоря, смежных), мы воспользуемся выражением вида `id(@connects)`, для выборки множества вершин, достижимых из текущей за два шага — выражением `id(id(@connects)/@connects)`. Таким образом, множество вершин, достижимых не более чем за два шага, будет вычисляться как

```
id(@connects)|id(id(@connects)/@connects)
```

Листинг 6.15. Преобразование `gemini.xsl`

```xml
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
  <xsl:output doctype-system="gemini.dtd" />
  <xsl:template match="vertices">
    <xsl:copy>
      <xsl:apply-templates />
    </xsl:copy>
  </xsl:template>
  <xsl:template match="vertex">
    <vertex name="{@name}" connects="{@connects}">
      <xsl:comment>
        <xsl:for-each
          select="id(@connects)|id(id@connects)/@connects)"
        >
          <xsl:text>

          </xsl:text>
          <xsl:value-of select="@name" />
        </xsl:for-each>
      </xsl:comment>
    </vertex>
  </xsl:template>
</xsl:stylesheet>
```

Листинг 6.16. Выходящий документ

```xml
<!DOCTYPE vertices SYSTEM "gemini.dtd">
<vertices>
  <vertex name="alpha" connects="tau">
    <!-- alpha epsilon theta iota tau-->
  </vertex>
  <vertex name="beta" connects="upsilon">
    <!-- beta delta iota kappa upsilon-->
  </vertex>
  <vertex name="gamma" connects="zeta">
    <!-- gamma delta zeta-->
  </vertex>
  <vertex name="delta" connects="zeta lambda upsilon">
    <!-- beta gamma delta zeta iota kappa lambda xi upsilon-->
  </vertex>
  <vertex name="epsilon" connects="nu mu tau">
    <!-- alpha epsilon theta iota mu nu tau-->
  </vertex>
  <vertex name="zeta" connects="delta gamma">
    <!-- gamma delta zeta lambda upsilon-->
  </vertex>
  <vertex name="theta" connects="tau">
    <!-- alpha epsilon theta iota tau-->
  </vertex>
  <vertex name="iota" connects="tau upsilon">
    <!-- alpha beta delta epsilon theta iota kappa tau upsilon-->
  </vertex>
  <vertex name="kappa" connects="upsilon">
    <!-- beta delta iota kappa upsilon-->
  </vertex>
  <vertex name="lambda" connects="delta xi">
    <!-- delta zeta lambda xi upsilon-->
  </vertex>
  <vertex name="mu" connects="epsilon">
    <!-- epsilon mu nu tau-->
  </vertex>
  <vertex name="nu" connects="epsilon">
    <!-- epsilon mu nu tau-->
  </vertex>
  <vertex name="xi" connects="lambda">
    <!-- delta lambda xi-->
  </vertex>
  <vertex name="tau" connects="alpha theta iota epsilon">
    <!-- alpha epsilon theta iota mu nu tau upsilon-->
  </vertex>
  <vertex name="upsilon" connects="beta iota kappa delta">
    <!-- beta delta zeta iota kappa lambda tau upsilon-->
  </vertex>
</vertices>
```

## Ссылки

- [id()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/id) <sup><small>MDN (рус.)</small></sup>
