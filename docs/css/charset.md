---
description: Правило @charset задает кодировку таблицы стилей
---

# @charset

Правило **`@charset`** задает кодировку таблицы стилей.

Это правило должно быть первым с таблице, ему не должны предшествовать никакие другие правила или стили. Если правил `@charset` задано несколько, используется только первое.

## Синтаксис

```css
@charset "utf-8";
```

## Значения

`charset`
: кодировка таблицы стилей

## Спецификации

- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/syndata.html#x57)

## Описание и примеры

```css
@charset "UTF-8"; /* Set the encoding of the style sheet to Unicode UTF-8 */
@charset 'iso-8859-15'; /* Invalid, wrong quoting style used */
@charset UTF-8; /* Invalid, without ' or ", the charset is not a CSS <string> */
```

## Ссылки

- [@charset](https://developer.mozilla.org/en-US/docs/Web/CSS/@charset) <sup><small>MDN (рус.)</small></sup>
