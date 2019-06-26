---
layout: default
title: Наследование. Абстрактные классы
nav_order: 4
parent: Объектно-ориентированное программирование
grand_parent: Руководство по Typescript
---

<!-- prettier-ignore-start -->
# Наследование. Абстрактные классы
{: .no_toc }
<!-- prettier-ignore-end -->

Одним из ключевых моментов объектно-ориентированной парадигмы является наследование.

<!-- prettier-ignore -->
1. TOC
{:toc}

В TypeScript наследование реализуется с помощью ключевого слова `extends`:

```typescript
class User {
  name: string

  constructor(userName: string) {
    this.name = userName
  }

  getInfo(): void {
    console.log('Имя: ' + this.name)
  }
}

class Employee extends User {
  company: string

  work(): void {
    console.log(this.name + ' работает в компании ' + this.company)
  }
}
```

Класс `Employee`, который представляет работника, является подклассом или наследуется от класса `User`. А класс `User` называется родительским или базовым классом. При наследовании класс `Employee` перенимает весь функционал класса `User` - все его свойства и функции и может их использовать. И также можно определить в подклассе новые свойства и методы, которых нет в классе `User`.

```typescript
let bill: Employee = new Employee('Bill')
bill.getInfo()
bill.company = 'Microsoft'
bill.work()
```

Также мы можем расширить функциональность класса следующим образом:

```typescript
class User {
  name: string

  constructor(userName: string) {
    this.name = userName
  }

  getInfo(): void {
    console.log('Имя: ' + this.name)
  }
}

let Employee = class extends User {
  company: string

  work(): void {
    console.log(this.name, 'работает в компании', this.company)
  }
}

let sam = new Employee('Sam')
sam.company = 'Google'
sam.work()
```

## Переопределение конструктора

Если подкласс определяет свой конструктор, то в нем должен быть вызван конструктор базового класса с помощью ключевого слова `super`:

```typescript
class User {
  name: string

  constructor(userName: string) {
    this.name = userName
  }

  getInfo(): void {
    console.log('Имя: ' + this.name)
  }
}

class Employee extends User {
  company: string

  constructor(userName: string, empCompany: string) {
    super(userName)
    this.company = empCompany
  }

  work(): void {
    console.log(this.name + ' работает в компании ' + this.company)
  }
}

let bill: Employee = new Employee('Bill', 'Apple')
bill.work()
```

С помощью ключевого слова `super` подкласс может обратиться к функционалу базового класса. В данном случае идет обращение к конструктору класса `User`, который устанавливает значение свойства `name: super(userName)`

Причем даже если базовый класс не определяет явным образом никакого конструктора, в производном классе при определении конструктора все равно надо вызывать конструктор базового класса - в этом случае это будет вызов конструктора по умолчанию с помощью `super()`.

```typescript
class User {
  name: string
}

class Employee extends User {
  company: string

  constructor(empCompany: string) {
    super() // вызов конструктора базового класса
    this.company = empCompany
  }
}
```

## Переопределение методов

Также производные классы могут переопределять методы базовых классов:

```typescript
class User {
  name: string

  constructor(userName: string) {
    this.name = userName
  }

  getInfo(): void {
    console.log('Имя: ' + this.name)
  }
}

class Employee extends User {
  company: string

  constructor(userName: string, empCompany: string) {
    super(userName)
    this.company = empCompany
  }

  getInfo(): void {
    console.log('Имя: ' + this.name)
    console.log('Работает в компании: ' + this.company)
  }
}

let bill: Employee = new Employee('Bill', 'Apple')
bill.getInfo()
```

В данном случае переопределяется метод `getInfo()`, который кроме имени выводит также компанию сотрудника. Однако в данном случае реализация метода `getInfo` из базового класса повторяется в производном классе. И вместо того, чтобы дублировть код, мы можем с помощью ключевого слова `super` вызвать реализацию этого метода из базового класса:

```typescript
class User {
  name: string

  constructor(userName: string) {
    this.name = userName
  }

  getInfo(): void {
    console.log('Имя: ' + this.name)
  }
}

class Employee extends User {
  company: string

  constructor(userName: string, empCompany: string) {
    super(userName)
    this.company = empCompany
  }

  getInfo(): void {
    super.getInfo()
    console.log('Работает в компании: ' + this.company)
  }
}
```

## Абстрактные классы

Абстрактные классы представляют классы, определенные с ключевым словом `abstract`. Они во многом похожи на обычные классы за тем исключением, что мы не можем создать напрямую объект абстрактного класса, используя его конструктор.

```typescript
abstract class Figure {}
// let someFigure = new Figure() // Ошибка!
```

Как правило, абстрактные классы описывают сущности, которые в реальности не имеют конкретного воплощения. Например, геометрическая фигура может представлять круг, квадрат, треугольник, но как таковой геометрической фигуры самой по себе не существует. Есть конкретные фигуры, с которыми мы и работаем. В то же время все фигуры могут иметь какой-то общий функционал. В этом случае мы можем определить абстрактный класс фигуры, поместить в него общий функционал, и от него унаследовать классы конкретных геометрических фигур:

```typescript
abstract class Figure {
  getArea(): void {
    console.log('Not Implemented')
  }
}

class Rectangle extends Figure {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea(): void {
    let square = this.width * this.height
    console.log('area =', square)
  }
}

let someFigure: Figure = new Rectangle(20, 30)
someFigure.getArea() // area = 600
```

В данном случае абстрактный класс определяет метод `getArea()`, который вычисляет площадь фигуры. Класс прямоугольника определяет свою реализацию для этого метода.

Однако в данном случае метод `getArea` в базовом классе не выполняет никакой полезной работы, так как у абстрактной фигуры не может быть площади. И в этом случае подобный метод лучше определить как абстрактный:

```typescript
abstract class Figure {
  abstract getArea(): void
}

class Rectangle extends Figure {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea(): void {
    let square = this.width * this.height
    console.log('area =', square)
  }
}

let someFigure: Figure = new Rectangle(20, 30)
someFigure.getArea()
```

Абстрактный метод не определяет никакой реализации. Если класс содержит абстрактные методы, то такой класс должен быть абстрактным. Кроме того, при наследовании производные классы обязаны реализовать все абстрактные методы.

## Ссылки

- [Наследование. Абстрактные классы](https://metanit.com/web/typescript/3.2.php)
