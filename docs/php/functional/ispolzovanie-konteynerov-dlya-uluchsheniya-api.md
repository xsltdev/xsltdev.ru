---
description: Безопасное и эффективное применение цепочки функций с помощью класса обертки.
---

# Использование контейнеров для улучшения API

Повсеместное использование блоков `try/catch` плохо тем, что исключение должно выбрасываться только в том случае, когда уже ничего нельзя исправить. Во всех иных случаях должна быть предпринята попытка предотвратить возникновение ошибки и вернуть выполнение программы в предсказуемый сценарий.

Для подобных сценариев хорошо подходят обертки. Рассмотрим класс:

```php
class Container {
  private $_value;
  private function __construct($value) {
    $this->_value = $value;
  }
  // Unit function
  public static function of($val) {
   return new static($val);
  }
  // Map function
  public function map(callable $f) {
    return static::of(call_user_func($f, $this->_value));
  }
  // Print out the container
  public function __toString(): string {
    return "Container[ {$this->_value} ]";
  }
  // Deference container
  public function __invoke() {
    return $this->_value;
  }
}
```

Этот класс оборачивает данные, и предоставляет механизм подобный `array_map()`. Сравните:

```php
array_map('htmlspecialchars', ['</ HELLO >']); //-> [&lt;/ HELLO &gt;]
function container_map(callable $f, Container $c): Container {
  return $c->map($f);
}
```

Использование данного класса обертки позволяет сделать серию трансформаций без сайд эффекта, так как всегда будет возвращаться новый экземпляр контейнера:

```php
$c = Container::of('</ Hello FP >')->map('htmlspecialchars')->map('strtolower');
$c; //-> Container[ &lt;/ hello fp &gt; ]
```

От данного класса можно наследоваться, чтобы реализовать специальную логику. Например, класс `SafeNumber`, предназначен для безопасной работы с числами:

```php
class SafeNumber extends Container {
  public function map(callable $f): SafeNumber {
    if(!isset($this->_value) || is_nan($this->_value)) {
      return static::of(); // empty container }
    else {
      return static::of(call_user_func($f, $this->_value));
    }
  }
}
```

Пример использования:

```php
function safeDivide($a, $b): SafeNumber {
  return SafeNumber::of(empty($b) ? NAN : $a / $b);
}
function square(int $a): int {
  return $a * $a;
}
function increment(int $a): int {
  return $a + 1;
}
// valid case
apply(safeDivide2)(5, 1)->map(square)->map(increment); //-> Container [26]
// error case
apply(safeDivide2)(5, 0)->map(square)->map(increment)); //-> Container[ null ]
```

**Класс обертка позволяет реализовать механизм, подобный array_map(). Данный класс помогает избавиться от лишних блоков try/catch и сделать процесс выполнения программы более контролируемым и прозрачным.**
