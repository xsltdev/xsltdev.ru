---
description: Функция local-name возвращает локальную часть имени первого в порядке просмотра документа узла множества, переданного ей в качестве аргумента
---

# local-name()

Функция **`local-name`** возвращает локальную часть имени первого в порядке просмотра документа узла множества, переданного ей в качестве аргумента.

## Синтаксис

```
string local-name( node-set? )
```

## Описание и примеры

Эта функция выполняется следующим образом.

- Если аргумент опущен, то значением функции по умолчанию является множество, содержащее единственный контекстный узел. Иными словами, функция возвратит локальную часть расширенного имени контекстного узла (если она существует).
- Если аргументом является пустое множество, функция возвращает пустую строку.
- Если первый в порядке просмотра документа узел переданного множества не имеет расширенного имени, функция возвращает пустую строку.
- В противном случае функция возвращает локальную часть расширенного имени первого в порядке просмотра документа узла переданного множества.

### Пример

Мы можем видоизменить преобразование, приведенное в примере к функциям [`last`](last.md) и [`position`](position.md), чтобы генерируемые элементы содержали информацию об имени, пространстве имен и локальной части имени элементов.

Листинг 6.10. Входящий документ

```xml
<a:a xmlns:a="http://www.a.com" xmlns:b="http://www.b.com">
  <b:b>
    <c />
  </b:b>
</a:a>
```

Листинг 6.11. Преобразование

```xml
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http: //www.w3.org/1999/XSL/Transform"
  xmlns:a="http://www.a.com"
  xmlns:b="http://www.b.com"
>
  <xsl:output indent="yes" />
  <xsl:template match="*">
    <element
      name="{name()}"
      namespace-uri="{namespace-uri()}"
      local-name="{local-name()}"
    >
      <xsl:apply-templates />
    </element>
  </xsl:template>
</xsl:stylesheet>
```

Листинг 6.12. Выходящий документ

```xml
<element
  xmlns:a="http://www.a.com"
  xmlns:b="http://www.b.com"
  name="a:a"
  namespace-uri="http://www.a.com"
  local-name="a"
>
  <element
    name="b:b"
    namespace-uri="http://www.b.com"
    local-name="b"
  >
    <element name="c" namespace-uri="" local-name="c" />
  </element>
</element>
```

## Ссылки

- [local-name()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/local-name) на MDN
