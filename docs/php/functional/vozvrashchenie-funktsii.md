---
description: Функции могут возвращать функции.
---

# Возвращение функции

```php
<?php
function concatWith(string $a): callable {
  return function (string $b) use ($a): string {
    return $a . $b;
  };
}
$helloWith = concatWith('Hello');
$helloWith('World'); //-> 'Hello World'
```

Это очень полезная техника, на которой основывается каррирование.
