---
layout: default
title: Интерфейсы
nav_order: 5
parent: Объектно-ориентированное программирование
grand_parent: Руководство по Typescript
---

<!-- prettier-ignore-start -->
# Интерфейсы
{: .no_toc }
<!-- prettier-ignore-end -->

<!-- prettier-ignore -->
1. TOC
{:toc}

## Интерфейсы объектов

Интерфейс определяет свойства и методы, которые объект должен реализовать. Другими словами, интерфейс - это определение кастомного типа данных, но без реализации. В данном случае интерфейсы в TS похожи на интерфейсы в языках Java и C#. Интерфейсы определяются с помощью ключевого слова `interface`. Для начала определим простой интерфейс:

```typescript
interface IUser {
  id: number
  name: string
}
```

Интерфейс в фигурных скобках определяет два свойства: `id`, которое имеет тип `number`, и `name`, которая представляет строку. Теперь используем его в программе:

```typescript
let employee: IUser = {
  id: 1,
  name: 'Tom'
}

console.log('id: ' + employee.id)
console.log('name: ' + employee.name)
```

По сути `employee` - обычный объект за тем исключением, что он имеет тип `IUser`. Если правильнее говорить, то `employee` реализует интерфейс `IUser`. Причем эта реализация накладывает на `employee` некоторые ограничения. Так, `employee` должен реализовать все свойства и методы интерфейса `IUser`, поэтому при определении `employee` данный объект обязательно должен включать в себя свойства `id` и `name`.

Параметры методов и функций также могут представлять интерфейсы:

```typescript
interface IUser {
  id: number
  name: string
}

let employee: IUser = {
  id: 1,
  name: 'Alice'
}

function getEmployeeInfo(user: IUser): void {
  console.log('id: ' + user.id)
  console.log('name: ' + user.name)
}

getEmployeeInfo(employee)
```

В этом случае аргумент, который передается в функцию, должен представлять объект или класс, который реализует соответствующий интерфейс.

И также можно возвращать объекты интерфейса:

```typescript
interface IUser {
  id: number
  name: string
}

function buildUser(userId: number, userName: string): IUser {
  return { id: userId, name: userName }
}

let newUser = buildUser(2, 'Bill')
console.log('id: ' + newUser.id)
console.log('name: ' + newUser.name)
```

## Необязательные свойства и свойства только для чтения

При определении интерфейса мы можем задать некоторые свойства как необязательные с помощью знака вопроса. Подобные свойства реализовать необязательно:

```typescript
interface IUser {
  id: number
  name: string
  age?: number
}

let employee: IUser = {
  id: 1,
  name: 'Alice',
  age: 23
}

let manager: IUser = {
  id: 2,
  name: 'Tom'
}
```

Свойство `age` помечено как необязательное, поэтому его можно не определять в объектах.

Также интерфейс может содержать свойства только для чтения, значение которых нельзя изменять. Такие свойства определяются с помощью ключевого слова `readonly`:

```typescript
interface Point {
  readonly x: number
  readonly y: number
}

let p: Point = { x: 10, y: 20 }
console.log(p)
// p.x = 5; // Ошибка - свойство доступно только для чтения
```

## Определение методов

Кроме свойств интерфейсы могут определять функции:

```typescript
interface IUser {
  id: number
  name: string
  getFullName(surname: string): string
}

let employee: IUser = {
  id: 1,
  name: 'Alice',
  getFullName: function(surname: string): string {
    return this.name + ' ' + surname
  }
}

let fullName = employee.getFullName('Tompson')
console.log(fullName) // Alice Tompson
```

Опять же объект, который реализует интерфейс, также обязан реализовать определенную в интерфейсе функцию с тем же набором параметров и тем типом выходного результата. В данном случае функция `getFullName()` в качестве параметра принимает строку и возвращает строку, осуществляя конкатенацию имени и фамилии.

## Интерфейсы классов

Интерфейсы могут быть реализованы не только объектами, но и классами. Для этого используется ключевое слово `implements`:

```typescript
interface IUser {
  id: number
  name: string
  getFullName(surname: string): string
}

class User implements IUser {
  id: number
  name: string
  age: number

  constructor(userId: number, userName: string, userAge: number) {
    this.id = userId
    this.name = userName
    this.age = userAge
  }

  getFullName(surname: string): string {
    return this.name + ' ' + surname
  }
}

let tom = new User(1, 'Tom', 23)
console.log(tom.getFullName('Simpson'))
```

Класс `User` реализует интерфейс `IUser`. В этом случае класс `User` обязан определить все те же свойства и функции, которые есть в `IUser`.

При этом объект `tom` является как объектом `User`, так и объектом `IUser`:

```typescript
let tom: IUser = new User(1, 'Tom', 23)
//или
let tom: User = new User(1, 'Tom', 23)
```

## Наследование интерфейсов

Интерфейсы, как и классы, могут наследоваться:

```typescript
interface IMovable {
  speed: number
  move(): void
}

interface ICar extends IMovable {
  fill(): void
}

class Car implements ICar {
  speed: number
  move(): void {
    console.log('Машина едет со скоростью ' + this.speed + ' км/ч')
  }

  fill(): void {
    console.log('Заправляем машину топливом')
  }
}

let auto = new Car()
auto.speed = 60
auto.fill()
auto.move()
```

После наследования интерфейс `ICar` будет также иметь все те свойства и функции, которые определены в `IMovable`. И тогда, класс `Car`, реализующий интерфейс `ICar`, должен будет реализовать также и свойства и методы интерфейса `IMovable`.

## Интерфейсы функций

Интерфейсы функций содержат определение типа функции. Затем они должны быть реализованы объектом, который представляет функцию данного типа:

```typescript
interface FullNameBuilder {
  (name: string, surname: string): string
}

let simpleBuilder: FullNameBuilder = function(name: string, surname: string): string {
  return 'Mr. ' + name + ' ' + surname
}

let fullName = simpleBuilder('Bob', 'Simpson')
console.log(fullName) // Mr. Bob Simpson
```

Здесь определен интерфейс `FullNameBuilder`, который лишь содержит сигнатуру функции. Далее определяется переменная `simpleBuilder`, которая имеет тип `FullNameBuilder` и поэтому должна представлять функцию с данной сигнатурой.

## Интерфейсы массивов

Интерфейсы массивов описывают объекты, к которым можно обращаться по индексу, как, например, к массивам

```typescript
interface StringArray {
  [index: number]: string
}

let phones: StringArray
phones = ['iPhone 7', 'HTC 10', 'HP Elite x3']

let myPhone: string = phones[0]
console.log(myPhone)
```

Здесь определен интерфейс `StringArray`, который содержит сигнатуру массива. Эта сигнатура указывает, что объект, который реализует `StringArray`, может индексироваться с помощью чисел (объекта типа `number`). И, кроме того, данный объект должен хранить объекты типа `string`, то есть строки.

Выше индекс представлял тип `number`. Но мы можем использовать для индексации и тип `string`:

```typescript
interface Dictionary {
  [index: string]: string
}

var colors: Dictionary = {}
colors['red'] = '#ff0000'
colors['green'] = '#00ff00'
colors['blue'] = '#0000ff'

console.log(colors['red'])
```

## Гибридные интерфейсы

Интерфейсы могут сочетать различные стили, могут применяться сразу как к определению объекта, так и к определению функции:

```typescript
interface PersonInfo {
  (name: string, surname: string): void
  fullName: string
  password: string
  authenticate(): void
}

function personBuilder(): PersonInfo {
  let person = <PersonInfo>function(name: string, surname: string): void {
    person.fullName = name + ' ' + surname
  }
  person.authenticate = function() {
    console.log(person.fullName + ' входит в систему с паролем ' + person.password)
  }
  return person
}

let tom = personBuilder()
tom('Tom', 'Simpson')
tom.password = 'qwerty'
tom.authenticate()
```

Тип функции, определяемый в таком гибридном интерфейсе, как правило, выступает в роли конструктора объекта. В данном случае такой конструктор имеет тип `(name: string, surname: string):void;`.

А функция, которая представляет данный интерфейс (в данном случае - функция `personBuilder)`, реализует эту функцию конструктора, и также может использовать другие свойства и методы, которые были определены в интерфейсе.

## Ссылки

- [Интерфейсы](https://metanit.com/web/typescript/3.3.php)
