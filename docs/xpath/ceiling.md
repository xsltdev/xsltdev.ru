---
description: Функция ceiling возвращает наименьшее число (ближайшее в отрицательной бесконечности), которое не меньше значения представленного аргумента и является целым
---

# ceiling()

Функция **`ceiling`** возвращает наименьшее число (ближайшее в отрицательной бесконечности), которое не меньше значения представленного аргумента и является целым.

## Синтаксис

```
number ceiling( number )
```

### Ввод

Число.

Если аргумент не является числом, он преобразуется в число так, как если бы он был обработан функцией [`number()`](number.md). Если аргумент не удается преобразовать в число, функция `ceiling()` возвращает значение NaN («нечисло»).

### Вывод

Наименьшее целое, не меньшее аргумента.

Если аргумент не может быть преобразован в число, в XSLT 1.0 функция `ceiling()` возвращает `NaN`.

### Где определяется

- XPath 1.0 — XPath, раздел 4.4 «Number Functions».

## Описание и примеры

### Пример 1

```
ceiling(2.3) ? 3
ceiling(-2.3) ? -2
ceiling(-1 div 0) ? -Infinity
ceiling(-1 div (-1 div 0)) ? 0
```

### Пример 2

Следующая таблица стилей демонстрирует результаты вызова функции `ceiling()` для разных значений. В качестве входных данных будет использоваться следующий документ XML:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- chocolate.xml -->
<report month="8" year="2006">
  <title>Chocolate bar sales</title>
  <brand>
    <name>Lindt</name>
    <units>27408</units>
  </brand>
  <brand>
    <name>Callebaut</name>
    <units>8203</units>
  </brand>
  <brand>
    <name>Valrhona</name>
    <units>22101</units>
  </brand>
  <brand>
    <name>Perugina</name>
    <units>14336</units>
  </brand>
  <brand>
    <name>Ghirardelli</name>
    <units>19268</units>
  </brand>
</report>
```

Таблица стилей, использующая функцию `ceiling()`:

```xml
<?xml version="1.0" ?>
<!-- ceiling.xsl -->
<xsl:stylesheet
  version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>
  <xsl:output method="text" />
  <xsl:template match="/">
    <xsl:text>Tests of the ceiling() function:</xsl:text>
    <xsl:text>ceiling(7.983) =</xsl:text>
    <xsl:value-of select="ceiling(7.983)" />
    <xsl:text>ceiling(-7.893) =</xsl:text>
    <xsl:value-of select="ceiling(-7.893)" />
    <xsl:text>ceiling(avg(/report/brand/units)) =</xsl:text>
    <xsl:value-of
      select="ceiling(avg(/report/brand/units))"
    />
    <xsl:text>ceiling('blue') =</xsl:text>
    <xsl:value-of version="1.0" select="ceiling('blue')" />
  </xsl:template>
</xsl:stylesheet>
```

Результат преобразования документа XML по таблице стилей:

```
Tests of the ceiling() function:
ceiling(7.983) = 8
ceiling(-7.893) = -7
ceiling(avg(/report/brand/units)) = 18264
ceiling('blue') = NaN
```

В последнем тесте в последнем элементе [`<xsl:value-of>`](../xslt/xsl-value-of.md) мы указали версию "1.0". В режиме XSLT 1.0 функция возвращает результат `NaN` («нечисло»).

## См. также

- [floor()](floor.md) — округление до ближайшего не большего целого
- [number()](number.md) — конвертирует аргумент в числовой тип
- [round()](round.md) — округляет число до ближайшего целого
- [sum()](sum.md) — суммирует значения узлов

## Ссылки

- [ceiling()](https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms256087%28v%3dvs.100%29) <sup><small>MDN (рус.)</small></sup>
- [ceiling()](https://developer.mozilla.org/en/XPath/Functions/ceiling) <sup><small>MSDN (en)</small></sup>
