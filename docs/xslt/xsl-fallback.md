---
description: Элемент xsl:fallback включается в критическую инструкцию, то есть в элемент, который может быть неизвестен процессору
---

# xsl:fallback

Элемент **`xsl:fallback`** включается в "критическую" инструкцию, то есть в элемент, который может быть неизвестен процессору.

В случае, если критическая инструкция отрабатывается нормально, содержимое `xsl:fallback` попросту игнорируется. Иначе, если процессор в силу некоторых причин не может выполнить критическую инструкцию, вместо нее он будет выполнять содержимое дочернего элемента `xsl:fallback`.

Не поддерживается браузером Mozilla Firefox.

## Синтаксис

```xml
<xsl:fallback>
    <!-- Content: sequence-constructor -->
</xsl:fallback>
```

## Описание и примеры

### Пример

На тот случай, если процессор не сможет выполнить наш элемент расширения `ext:date`, мы можем "подстраховать" его следующим образом:

```xml
<ext:date pattern="HH:mm">
    <xsl:fallback>unknown time</xsl:fallback>
</ext:date>
```

В этом случае шаблон

```xml
<xsl:template match="/">
    <!-- ... -->
    <p>This page was generated at
        <ext:date pattern="HH:yy">
            <xsl:fallback>unknown time</xsl:fallback>
        </ext:date>
        .
    </p>
</xsl:template>
```

в случае невозможности выполнить `ext:date` выведет

```xml
<p>This page was generated at unknown time.</p>
```

Заметим, что `xsl:fallback` применим не только для обработки исключительных ситуаций, связанных с элементами расширения. Наборы доступных процессору элементов XSLT будут также меняться от версии к версии, и `xsl:fallback` вполне пригодится для обеспечения обратной совместимости. Например, если в версии XSLT 2.0 будет определен элемент `xsl:for-each-group`, то `xsl:fallback` можно использовать при создании альтернативного варианта для процессоров, которые еще не поддерживают новую версию:

```xml
<xsl:for-each-group select="item" group-by="@number">
    <!-- ... -->
    <xsl:fallback>
        <xsl:for-each select="item[generate-id(.)=
        generate-id(key('item', @number))]">
            <!-- ... -->
        </xsl:for-each>
    </xsl:fallback>
</xsl:for-each>
```

## См. также

- [`element-available()`](../xpath/element-available.md) -- служит для проверки доступности в преобразовании того или иного элемента.
- [`function-available()`](../xpath/function-available.md) -- проверяет доступность функции.

## Ссылки

- [`xsl:fallback`](https://developer.mozilla.org/en/XSLT/fallback) на MDN
- [`xsl:fallback`](https://msdn.microsoft.com/en-us/library/ms256234.aspx) на MSDN
