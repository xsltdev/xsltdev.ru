# Примеры

## Введение

Цель данного руководства — научить созданию высококачественных файлов объявлений.
Руководство структурировано так, что вместе с документацией для определенного API показывается пример его использования, и объясняется, как нужно записать соответствующее объявление.

Примеры упорядочены в порядке примерного возрастания сложности.

- [Глобальные переменные](#Глобальные-переменные)
- [Глобальные функции](#Глобальные-функции)
- [Объекты со свойствами](#Объекты-со-свойствами)
- [Перегруженные функции](#Перегруженные-функции)
- [Переиспользуемые типы (интерфейсы)](#Переиспользуемые-типы-интерфейсы)
- [Переиспользуемые типы (псевдонимы типов)](#Переиспользуемые-типы-псевдонимы-типов)
- [Упорядочивание типов](#Упорядочивание-типов)
- [Классы](#Классы)

## Глобальные переменные

_Документация_

> Глобальная переменная `foo` содержит число виджетов.

_Код_

```ts
console.log('Половина числа виджетов: ' + foo / 2)
```

_Объявление_

Используйте `declare var`, чтобы объявлять переменные.
Если переменная только для чтения, можно использовать `declare const`.
Также можно использовать `declare let`, если область видимости переменной ограничена блоком.

```ts
/** Число виджетов */
declare var foo: number
```

## Глобальные функции

_Документация_

> Можно вызвать функцию `greet` со строкой, чтобы вывести пользователю приветствие.

_Код_

```ts
greet('привет, мир')
```

_Объявление_

Используйте `declare function`, чтобы объявить функцию.

```ts
declare function greet(greeting: string): void
```

## Объекты со свойствами

_Документация_

> У глобальной переменной `myLib` есть функция `makeGreeting` для создания приветствий,
> и свойство `numberOfGreetings`, отражающее число уже созданных приветствий.

_Код_

```ts
let result = myLib.makeGreeting('привет, мир')
console.log('Вычисленное приветствие:' + result)

let count = myLib.numberOfGreetings
```

_Объявление_

Используйте `declare namespace`, чтобы описать типы или значения, доступные посредством синтаксиса с точкой.

```ts
declare namespace myLib {
  function makeGreeting(s: string): string
  let numberOfGreetings: number
}
```

## Перегруженные функции

_Документация_

Функция `getWidget` принимает число и возвращает объект `Widget`, или же принимает строку и возвращает массив объектов `Widget`.

_Код_

```ts
let x: Widget = getWidget(43)

let arr: Widget[] = getWidget('все виджеты')
```

_Объявление_

```ts
declare function getWidget(n: number): Widget
declare function getWidget(s: string): Widget[]
```

## _Переиспользуемые типы (интерфейсы)_

_Документация_

> При указании приветствия нужно передать объект `GreetingSettings`.
> Этот объект обладает следующими свойствами:
>
> - greeting: Обязательная строка
> - color: Необязательная строка, например '#ff00ff'

_Код_

```ts
greet({
  greeting: 'привет, мир',
  duration: 4000
})
```

_Объявление_

Используйте `interface`, чтобы объявить тип со свойствами.

```ts
interface GreetingSettings {
  greeting: string
  duration?: number
  color?: string
}

declare function greet(setting: GreetingSettings): void
```

## Переиспользуемые типы (псевдонимы типов)

_Документация_

> Везде, где ожидается приветствие, можно указать `string`, функцию, возвращающую `string`, или экземпляр `Greeter`.

_Код_

```ts
function getGreeting() {
  return 'как дела?'
}
class MyGreeter extends Greeter {}

greet('привет')
greet(getGreeting)
greet(new MyGreeter())
```

_Объявление_

Можно использовать псевдоним типа и создать сокращение:

```ts
type GreetingLike = string | (() => string) | Greeting

declare function greet(g: GreetingLike): void
```

## Упорядочивание типов

_Документация_

> Объект `greeter` может записывать журнал в файл либо показывать уведомления.
> Можно передать `LogOptions` функции `.log(...)` и `AlertOptions` функции `.alert(...)`

_Код_

```ts
const g = new Greeter('Привет')
g.log({ verbose: true })
g.alert({ modal: false, title: 'Текущее приветствие' })
```

_Объявление_

Используйте пространства имен для упорядочения типов:

```ts
declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean
  }
  interface AlertOptions {
    modal: boolean
    title?: string
    color?: string
  }
}
```

Также можно создавать вложенные пространства имен в одном объявлении:

```ts
declare namespace GreetingLib.Options {
  // Можно использовать как GreetingLib.Options.Log
  interface Log {
    verbose?: boolean
  }
  interface Alert {
    modal: boolean
    title?: string
    color?: string
  }
}
```

## Классы

_Документация_

> Можно создать объект `Greeter` с помощью конструктора, либо создать измененный `Greeter`, производный от него.

_Код_

```ts
const myGreeter = new Greeter('привет, мир')
myGreeter.greeting = 'как дела?'
myGreeter.showGreeting()

class SpecialGreeter extends Greeter {
  constructor() {
    super('Особенное приветствие')
  }
}
```

_Объявление_

Используйте `declare class`, чтобы описать класс или объект, похожий на класс.
Классы могут иметь свойства, методы, а также конструктор.

```ts
declare class Greeter {
  constructor(greeting: string)

  greeting: string
  showGreeting(): void
}
```

## Ссылки

- [Примеры](http://typescript-lang.ru/docs/declaration%20files/By%20Example.html)
