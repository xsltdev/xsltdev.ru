---
description: Функция substring-before находит в первой строке вторую и возвращает подстроку, которая ей предшествует
---

# substring-before()

Функция **`substring-before`** принимает на вход два строковых аргумента. Эта функция находит в первой строке вторую и возвращает подстроку, которая ей предшествует. Если вторая строка не содержится в первой, функция вернет пустую строку.

## Синтаксис

```
string substring-before( string, string )
```

## Описание и примеры

### Примеры

```
substring-before('12-May-1998', '-') = '12'
substring-before('12 May 1998', ' ') = '12'
substring-before('12 May 1998', '&amp;#x20;') = '12'
substring-before('12 May 1998', '-') = ''
substring-before('aa-bb','-') = aa
substring-before('aa-bb','a') = (empty string)
substring-before('aa-bb','b') = aa-
substring-before('aa-bb','q') = (empty string)
```

## Ссылки

- [substring-before()](https://developer.mozilla.org/en-US/docs/Web/XPath/Functions/substring-before) <sup><small>MDN (рус.)</small></sup>
