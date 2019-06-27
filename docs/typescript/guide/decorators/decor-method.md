# Декораторы методов и их параметров

## Декоратор метода

Декоратор метода также представляет функцию, которая принимает три параметра:

```typescript
function deprecated(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  console.log('Method is deprecated')
}
```

Декоратор принимает следующие параметры:

- Функция конструктора класса для статического метода, либо прототип класса для обычного метода.
- Название метода.
- Объект интерфейса PropertyDescriptor:

```typescript
interface PropertyDescriptor {
  configurable?: boolean
  enumerable?: boolean
  value?: any
  writable?: boolean
  get?(): any
  set?(v: any): void
}
```

Этот объект описывает изменение декорируемого метода. Применяется при компиляции в ES5 и выше, при ES3 имеет значение `undefined`.

Его свойство `value` содержит определение функции. Свойство `writable` указывает, является ли функция модифицируемой (если значение `true`, то является).

Определим простейший декоратор для метода:

```typescript
function readonly(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false
}

class User {
  name: string
  constructor(name: string) {
    this.name = name
  }

  @readonly
  print(): void {
    console.log(this.name)
  }
}
let tom = new User('Tom')
tom.print = function() {
  console.log('print has been changed')
}
tom.print() // Tom
```

Декоратор `readonly` с помощью выражения `descriptor.writable = false;` устанавливает, что метод, к которому применяется данный декоратор, не может быть изменен.

В итоге после применения данного декоратора следующая инструкция

```typescript
tom.print = function() {
  console.log('print has been changed')
}
```

не имеет смысла и не будет работать. Однако если бы декоратор не применялся, то инструкция сработала бы.

## Параметры и выходной результат метода

Декоратор метода позволяет нам манипулировать параметрами и возвращаемым результатом метода. Например, определим следующий декоратор:

```typescript
function log(target: Object, method: string, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value
  descriptor.value = function(...args) {
    console.log(JSON.stringify(args))
    let returnValue = originalMethod.apply(this, args)
    console.log(`${JSON.stringify(args)} => ${returnValue}`)
    return returnValue
  }
}

class Calculator {
  @log
  add(x: number, y: number): number {
    return x + y
  }
}

let calc = new Calculator()
let z = calc.add(4, 5)
z = calc.add(6, 7)
```

Декоратор `log` логгирует (выводит на консоль) значения параметров и возвращаемый результат метода. Свойство `descriptor.value` позволяет получить начальное значение метода - то есть ту функцию, которую представляет метод.

```typescript
let originalMethod = descriptor.value
```

Затем происходит переустановка значения `descriptor.value`.

```typescript
descriptor.value = function(...args) {}
```

Параметр `...args` - это все те параметры, которые будут передаваться в функцию. И мы можем логгировать эти параметры. Далее вызывается оригинальная функция, которой передаются параметры `args`:

```typescript
let returnValue = originalMethod.apply(this, args)
```

И таким образом мы можем получить результат вызова оригинальной функции и возвратить его из функции. То есть фактически получается, что мы берем оригинальную функцию, обертываем ее в какую-ту другую функцию, в которой опять же вызываем оригинальную функцию и возвращаем ее результат.

Таким образом, новое значение `descriptor.value` принимает те же параметры, возвращает тот же результат, что и оригинальная функция, но при этом добавляет некоторое дополнительное поведение.

Далее мы можем применить декоратор, например, к методу `add` класса `Calculator` и вызвать этот метод.

![Декораторы методов и их параметров](decor-method-1.png)

## Декораторы параметров методов

Декоратор параметра метода представляет функцию, которая принимает три параметра:

```typescript
function MyParameterDecorator(target: Object, propertyKey: string, parameterIndex: number) {
  // код декоратора
}
```

Где первый параметр представляет конструктор класса, если метод статический, либо прототип класса, если метод нестатический. А второй параметр представляет имя параметра. И третий параметр представляет порядковый индекс параметра в списке параметров.

Определим декоратор для параметра метода:

```typescript
function logParameter(target: any, key: string, index: number) {
  var metadataKey = `__log_${key}_parameters`

  if (Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index)
  } else {
    target[metadataKey] = [index]
  }
}
function logMethod(target, key, descriptor) {
  var originalMethod = descriptor.value
  descriptor.value = function(...args: any[]) {
    var metadataKey = `__log_${key}_parameters`
    var indices = target[metadataKey]

    if (Array.isArray(indices)) {
      for (var i = 0; i < args.length; i++) {
        if (indices.indexOf(i) !== -1) {
          var arg = args[i]
          var argStr = JSON.stringify(arg) || arg.toString()
          console.log(`${key} arg[${i}]: ${argStr}`)
        }
      }
      var result = originalMethod.apply(this, args)
      return result
    } else {
      var a = args.map(a => JSON.stringify(a) || a.toString()).join()
      var result = originalMethod.apply(this, args)
      var r = JSON.stringify(result)
      console.log(`Call: ${key}(${a}) => ${r}`)
      return result
    }
  }
  return descriptor
}

class User {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  @logMethod
  setName(@logParameter name: string) {
    this.name = name
  }
  print(): void {
    console.log(this.name)
  }
}
let tom = new User('Tom')
tom.setName('Bob')
tom.setName('Sam')
```

Декоратор `logParameter` добавляет в прототип класса новое свойство `metadataKey`. Это свойство представляет массив, который содержит индексы декорированных параметров.

Для чтения метаданных из свойства `metadataKey` применяется декоратор метода `logMethod`, который перебирает все параметры метода, находит значения параметров по индексам, которые определены декоратором параметроа, и выводит на консоль названия и значения декорированных параметров.

![Декораторы методов и их параметров](decor-method-2.png)

## Ссылки

- [Декораторы методов и их параметров](https://metanit.com/web/typescript/6.2.php)
