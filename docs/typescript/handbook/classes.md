---
layout: default
title: Классы
nav_order: 4
parent: Справочник Typescript
---

<!-- prettier-ignore-start -->
# Классы
{: .no_toc }
<!-- prettier-ignore-end -->

<!-- prettier-ignore -->
1. TOC
{:toc}

# Введение

Традиционный JavaScript фокусируется на функциях и наследовании, основанном на прототипах, для разработки многократно используемых компонентов, но этот подход довольно неудобен по сравнению с привычным объектно-ориентированным программированием, где классы наследуют функционал, и объекты строятся из этих классов. Начиная с ECMAScript 2015, также известном как ECMAScript 6, JavaScript программисты смогут создавать приложения, используя этот объектно-ориентированный подход, основанный на классах. В TypeScript этот подход можно применять уже сейчас, и компилировать код в JavaScript, который будет работать на основной массе браузеров и платформ, не дожидаясь следующей версии JavaScript.

## Классы

Давайте рассмотрим простой пример работы с классами:

```ts
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello, ' + this.greeting
  }
}

let greeter = new Greeter('world')
```

Синтаксис должен быть знакомым, если вы уже программировали на C# или Java.
Мы объявили новый класс `Greeter`. Этот класс имеет три члена: свойство `greeting`, конструктор, и метод `greet`.

Вы заметили, что когда мы обращаемся к одному из полей класса, мы добавляем перед именем поля `this.`.
Это означает, что мы получаем доступ к члену класса.

В последней строке мы создаем экземпляр класса `Greeter`, используя `new`.
Он вызывает конструктор, что мы определили ранее, создает новый объект, и запускает конструктор для его инициализации.

## Наследование

В TypeScript используются привычные подходы объектно-ориентированного программирования. Конечно, одним из самых фундаментальных подходов в области программирования на основе классов является создание новых классов с помощью наследования.

Давайте посмотрим на пример:

```ts
class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}

let sam = new Snake('Sammy the Python')
let tom: Animal = new Horse('Tommy the Palomino')

sam.move()
tom.move(34)
```

Этот пример показывает многие возможности наследования TypeScript, такие же, как и в других языках.
Здесь мы видим ключевое слово `extends`, используемое для создания подкласса. Классы `Horse` и `Snake` основаны на классе `Animal` и они получают доступ к его возможностям.

В примере показано, как переопределить методы базового класса с помощью методов, которые указаны в подклассе.
Классы `Snake` и `Horse` создают метод `move`, который переопределяет метод `move` из класса `Animal`, придавая ему функциональность, специфичную для каждого из классов.
Обратите внимание на то, что хотя `tom` объявлен как `Animal`, его значением является `Horse`, поэтому при вызове `tom.move(34)`, будет вызван переопределенный метод класса `Horse`.

Производные классы, содержащие функции-конструкторы, должны вызывать `super()`, который будет выполнять функцию-конструктор базового класса.

```Text
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

## Модификаторы доступа

### `public` по умолчанию

В наших примерах мы смогли свободно получить доступ к членам класса, объявленным во всех классах программы.
Если вы знакомы с классами в других языках, вы могли заметить, что в приведенных выше примерах мы не использовали слово `public` для изменения видимости члена класса. Например, C# требует, чтобы каждый член был явно помечен `public` для видимости.
В TypeScript же, каждый член класса будет `public` по умолчанию.

Но мы можем пометить члены класса `public` явно.
Класс `Animal` из предыдущего раздела будет выглядеть следующим образом:

```ts
class Animal {
  public name: string
  public constructor(theName: string) {
    this.name = theName
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}
```

### Понимание `private`

Когда член класса помечен модификатором `private`, он не может быть доступен вне этого класса. Например:

```ts
class Animal {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}

new Animal('Cat').name // ошибка: 'name' is private;
```

TypeScript — это структурная система типов.
Когда мы сравниваем два разных типа, независимо от того где и как они описаны и реализованы, если типы всех их членов совместимы, можно утверждать, что и сами типы совместимы.
Впрочем, когда сравниваются типы с модификатором доступа `private`, это происходит по-другому. Два типа будут считаться совместимыми, если оба члена имеют модификатор `private` из того же самого объявления.
Это относится и к `protected` членам.

Давайте посмотрим пример, чтобы понять принцип работы на практике:

```ts
class Animal {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')

animal = rhino
animal = employee // ошибка: 'Animal' and 'Employee' are not compatible
```

В этом примере у нас есть классы `Animal` и `Rhino`, где `Rhino` является подклассом `Animal`.
У нас также есть новый класс `Employee`, который выглядит идентично `Animal`.
Мы создаем экземпляры этих классов и пытаемся получить доступ к каждому, чтобы посмотреть что произойдет.
Поскольку `private` часть `Animal` и `Rhino` объявлена в одном и том же объявлении, они совместимы. Тем не менее, это не относится к `Employee`.
Когда мы пытаемся присвоить `Employee` к `Animal`, мы получаем ошибку: эти типы не совместимы.
Несмотря на то, что `Employee` имеет `private` член под именем `name`, это не тот член, который мы объявили в `Animal`.

### Понимание `protected`

Модификатор `protected` действует аналогично `private` за исключением того, что члены, объявленные `protected`, могут быть доступны в подклассах. Например:

```ts
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
console.log(howard.name) // ошибка
```

Обратите внимание на то, что мы не можем использовать член `name` вне класса `Person`, но можем использовать внутри метода подкласса `Employee`, потому что `Employee` происходит от `Person`.

Конструктор тоже может иметь модификатор `protected`.
Это означает, что класс не может быть создан за пределами содержащего его класса, но может быть наследован. Например:

```ts
class Person {
  protected name: string
  protected constructor(theName: string) {
    this.name = theName
  }
}

// Employee can extend Person
class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee('Howard', 'Sales')
let john = new Person('John') // ошибка: The 'Person' constructor is protected
```

## Модификатор `readonly`

Вы можете делать свойства доступными только для чтения с помощью ключевого слова `readonly`.
Свойства, доступные только для чтения, должны быть инициализированы при их объявлении или в конструкторе.

```ts
class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8
  constructor(theName: string) {
    this.name = theName
  }
}
let dad = new Octopus('Man with the 8 strong legs')
dad.name = 'Man with the 3-piece suit' // ошибка! name is readonly.
```

### Свойства параметров

В нашем последнем примере мы объявили `readonly` член `name` и параметр конструктора `theName` в классе `Octopus`, и присвоили `theName` к `name`.
Это очень распространенная практика.
_свойства параметров_ позволяют создавать и инициализировать члены в одном месте.
Вот дальнейшая доработка предыдущего класса `Octopus`, используя свойство параметра:

```ts
class Octopus {
  readonly numberOfLegs: number = 8
  constructor(readonly name: string) {}
}
```

Обратите внимание на то, как мы убрали `theName` и сократили параметр конструктора `readonly name: string`, чтобы создать и инициализировать член `name`.
Мы объединили объявление и присваивание в одном месте.

Свойства параметров объявляются перед параметром конструктора, у которого есть модификатор доступности, `readonly` или и то, и другое.
Использование свойства параметра `private` объявляет и инициализирует приватный член; то же самое делают `public`,`protected` и `readonly`.

## Аксессоры (геттеры/сеттеры)

TypeScript поддерживает геттеры и сеттеры как способ перехвата обращений к свойствам объекта.
Это дает вам больший контроль над моментом взаимодействия со свойствами объектов.

Давайте перепишем простой класс с использованием `get` и `set`.
Для начала запишем пример без использования геттеров и сеттеров.

```ts
class Employee {
  fullName: string
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}
```

Разрешать напрямую устанавливать `fullName` - довольно удобно, но это может привести к проблемам если кто-то захочет изменить имя по своему желанию.

В этой версии мы проверяем наличие у пользователя секретного пароля, перед тем как позволить ему внести изменения.
Мы делаем это заменяя прямой доступ к `fullName` и используем сеттер `set`, который проверяет пароль.
Кроме того, добавляем соответствующий `get`, чтобы код работал так же, как и в предыдущем примере.

```ts
let passcode = 'secret passcode'

class Employee {
  private _fullName: string

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode == 'secret passcode') {
      this._fullName = newName
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}
```

Чтобы убедиться, что наш метод доступа проверяет пароль, мы можем модифицировать его и увидеть, что при несовпадении мы получаем сообщение о том, что не можем модифицировать объект работника.

Внимание: аксессоры требуют установки в компиляторе генерации кода по стандарту ECMAScript 5 или выше.

## Статические свойства

До сих пор мы говорили только об _членах экземпляра_ класса, тех, которые появляются в объекте, когда он инициализирован.
Но мы можем создавать и _статические_ члены класса, те, которые видны в классе без создания экземпляра.
В этом примере мы используем `static`, так как `origin` — это общее значение для всех объектов.
Каждый экземпляр получает доступ к этому значению, предваряя его именем класса. Схоже с тем, как мы добавляем `this.` для доступа к членам экземпляра, для доступа к статическим членам используется `Grid.`.

```ts
class Grid {
  static origin = { x: 0, y: 0 }
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0) // 1x scale
let grid2 = new Grid(5.0) // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }))
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }))
```

## Абстрактные классы

Абстрактные классы — это базовые классы, от которых наследуются другие.
Их экземпляры не могут быть созданы напрямую.
В отличие от интерфейса, абстрактный класс может содержать детали реализации своих членов.
Ключевое слово `abstract` используется для определения абстрактных классов, а также абстрактных методов в рамках таких классов.

```ts
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earth...')
  }
}
```

Методы в рамках абстрактного класса, помеченные как абстрактные, не содержат реализацию и должны быть реализованы в производных классах.
Синтаксис у абстрактных методов — такой же, как у методов интерфейса.
Оба определяют сигнатуру метода, не описывая его тело. Описание абстрактного метода должно содержать ключевое слово `abstract`, а также может содержать модификаторы доступа.

```ts
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log('Department name: ' + this.name)
  }

  abstract printMeeting(): void //  должен быть реализован в производном классе
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing') // конструкторы в производных классах должны вызывать super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }

  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department // окей, создана ссылка на абстрактный класс
department = new Department() // ошибка: cannot create an instance of an abstract class
department = new AccountingDepartment() // окей, создан и присвоен не абстрактный класс
department.printName()
department.printMeeting()
department.generateReports() // ошибка: method doesn't exist on declared abstract type
```

## Дополнительные методы

### Конструкторы

Когда вы объявляете класс в TypeScript, вы фактически создаете несколько объявлений одновременно.
Первое объявление — тип _экземпляра_ класса.

```ts
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello, ' + this.greeting
  }
}

let greeter: Greeter
greeter = new Greeter('world')
console.log(greeter.greet())
```

В данном случае, когда мы говорим `let greeter: Greeter`, мы используем`Greeter` как тип экземпляров класса `Greeter`.
Это почти привычка программистов из других объектно-ориентированных языков программирования.

Мы также создаем еще одно значение, которое называется _функцией-конструктором_.
Эта функция вызывается, когда мы создаем экземпляры класса с помощью _new_.
Чтобы посмотреть, как это выглядит на практике, давайте посмотрим на код JavaScript, сгенерированный компилятором из примера выше:

```ts
let Greeter = (function() {
  function Greeter(message) {
    this.greeting = message
  }
  Greeter.prototype.greet = function() {
    return 'Hello, ' + this.greeting
  }
  return Greeter
})()

let greeter
greeter = new Greeter('world')
console.log(greeter.greet())
```

Здесь `let Greeter` присваивается функция-конструктор.
Когда мы указываем `new` и запускаем эту функцию, мы получаем экземпляр класса.
Функция-конструктор также содержит все статические члены класса.
Другой способ думать о каждом классе: есть часть _экземпляр_ и _статическая_ часть.

Давайте изменим немного код, чтобы показать эту разницу:

```ts
class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter1: Greeter
greeter1 = new Greeter()
console.log(greeter1.greet())

let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey there!'

let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())
```

В этом примере `greeter1` работает аналогично тому, что выше.
Мы создали экземпляр класса `Greeter` и используем объект. Это мы уже видели.

Дальше используем непосредственно класс. Создаем новую переменную с именем `greeterMaker`.
Эта переменная будет содержать сам класс, или, другими словами, функцию-конструктор.
Здесь мы используем `typeof Greeter`, это выглядит как "дайте мне тип самого класса `Greeter`", а не экземпляра.
Или, точнее, "дайте мне тип идентификатора, что зовется `Greeter`", который является типом функции-конструктора.
Этот тип будет содержать все статические члены `Greeter`, вместе с конструктором, который создает экземпляры класса `Greeter`.
Мы продемонстрировали это, использовав `new` с `greeterMaker`, создавая новые экземпляры `Greeter` и вызывая их, как раньше.

### Использование класса в качестве интерфейса

Как мы уже говорили в предыдущем разделе, объявление класса создает две вещи: тип, описывающий экземпляры класса, и функцию-конструктор. Так как классы создают типы, мы можем использовать так же, как интерфейсы.

```ts
class Point {
  x: number
  y: number
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
```

## Ссылки

- [Классы](http://typescript-lang.ru/docs/Classes.html)
