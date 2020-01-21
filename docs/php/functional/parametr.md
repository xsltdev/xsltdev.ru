---
description: Практическое применение функций высшего порядка.
---

# Параметры

Рассмотрим код:

```php
<?php
function apply(callable $operator, $a, $b) {
  return $operator($a, $b);
}
```

Так как функция принимает вызываемый аргумент, то можно внедрить любое поведение, например:

```php
<?php
$add = function (float $a, float $b): float {
  return $a + $b;
};
$divide = function (float $a, float $b): float {
  return $a / $b;
};
apply($add, 5, 5); //-> 10
apply($divide, 5, 5); //-> 10
```

Если заменить первоначальный вариант функции apply() на следующий вариант, то код станет более полезным и выразительным:

```php
<?php
function apply(callable $operator): callable {
  return function($a, $b) use ($operator) {
    return $operator($a, $b);
  };
}
```

Теперь можно делать так:

```php
<?php
apply($add)(5, 5); //-> 10
apply($divide)(5, 5); //-> 1
// New function adder
$adder = apply($add);
$divider = apply($divide);
$adder(5,5); //-> 10
$divider(5,5); //-> 1

```

Данный подход, помимо гибкости, дает большие возможности для дизайна прозрачного API, так как в отличие от `throw` `catch`, не создает сайд эффекта и уважает принцип локальности кода:

```php
<?php
function safeDivide(float $a, float $b): float {
  return empty($b) ? NAN : $a / $b;
}
$result = apply($safeDivide)(5, 0);
if(!is_nan($result)) {
  //...
  return $result;
} else {
  Log::warning('Math error occurred! Division by zero!');
}
```

**Вы можете передавать любые пользовательские функции, назначенные переменным, в качестве аргумента, кроме тех, которые являются частью языка: echo, print(), unset(), isset(), empty(), include(), require() и другие. Если вы собираетесь их использовать, оберните их в ваши собственные функции.**
