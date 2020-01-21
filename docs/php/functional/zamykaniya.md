---
description: Динамические замыкания в PHP и возможности их применения.
---

# Замыкания

Замыкания в _PHP_ отличаются от замыканий в _Java Script_. В _PHP_ необходимо явно указывать, к каким переменным будет разрешен доступ:

```php
<?php
function concatWith(string $a): callable {
  return function (string $b) use ($a): string {
    return $a . $b;
  };
}
```

У класса `Closure` есть метод `bindTo()`, с помощью которого можно реализовать динамическое связывание:

```php
<?php
class OneNumber {
    public $one = 1;
}
$changeOneNumber = function($callback) {
  return  $callback($this->one);
};
$double = function($x) {
    return 2 * $x;
};
$testOne = new OneNumber;
$testOneChanger = $changeOneNumber->bindTo($testOne);
echo $testOneChanger($double); // print 2
```

**Динамическое связывание позволяет подмешать дополнительное поведение к существующему объекту. Например, можно реализовывать фильтрацию не методом класса, а с помощью замыкания. В некоторых случаях, это подобно использованию Trait.**
