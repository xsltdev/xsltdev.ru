---
description: Требуется проверить, завершается ли некоторая строка указанной подстрокой
---

# Завершается ли данная строка указанной подстрокой?

## Задача

Требуется проверить, завершается ли некоторая строка указанной подстрокой.

## Решение

XSLT 1.0

```xpath
substring($value, (string-length($value) - string-length($substr)) + 1) = $substr
```

XSLT 2.0

```xpath
ends-with($value, $substr)
```

## Обсуждение

В XSLT 1.0 есть встроенная функция [`starts-with()`](/xpath/starts-with/), но нет функции `ends-with()`. В версии 2.0 это исправлено. Однако, как видно из примера выше, функцию `ends-with()` в XPath 1.0 можно реализовать в терминах функций [`substring()`](/xpath/substring/) и `string-length()`. Мы просто извлекаем последние `string-length($substr)` символов из проверяемой строки и сравниваем их с подстрокой.

Программисты, привыкшие к тому, что нумерация символов в строке начинается с `0`, должны помнить, что в XSLT номер первой позиции равен `1`.