---
layout: default
title: Классы
nav_order: 1
parent: Объектно-ориентированное программирование
grand_parent: Руководство по Typescript
---

<!-- prettier-ignore-start -->
# Классы
{: .no_toc }
<!-- prettier-ignore-end -->

TypeScript реализует объектно-ориентированный подход, в нем есть полноценная поддержка классов. Класс представляет шаблон для создания объектов и инкапсулирует функциональность, которую должен иметь объект. Класс определяет состояние и поведение, которыми обладает объект.

<!-- prettier-ignore -->
1. TOC
{:toc}

Для определения нового класса применяется ключевое слово `class`:

```typescript
class User {
  id: number
  name: string

  getInfo(): string {
    return 'id:' + this.id + ' name:' + this.name
  }
}
```

Класс называется `User`, он представляет пользователя и имеет два свойства `id` и `name`, которые хранят состояние объекта. И также класс опеделяет одну функцию `getInfo()`, которая представляет поведение объекта.

После определения класса мы можем создавать его объекты:

```typescript
let tom: User = new User()
tom.id = 1
tom.name = 'Tom'
console.log(tom.getInfo())

let alice: User = new User()
alice.id = 2
alice.name = 'Alice'
console.log(alice.getInfo())
```

Кроме обычных функций классы имеют специальные функции - конструкторы, которые определяются с помощью ключевого слова `constructor`. Конструкторы выполняют начальную инициализацию объекта. Например, добавим в класс `User` конструктор:

```typescript
class User {
  id: number
  name: string

  constructor(userId: number, userName: string) {
    this.id = userId
    this.name = userName
  }
  getInfo(): string {
    return 'id:' + this.id + ' name:' + this.name
  }
}

let tom: User = new User(1, 'Tom')
console.log(tom.getInfo())
tom.id = 4

let alice: User = new User(2, 'Alice')
console.log(alice.getInfo())
```

## Статические свойства и функции

Кроме обычных свойств и функций класс может иметь статические. Для использования статических функций и свойств не надо создавать объект класса.

Статические функции и свойства определяются с помощью ключевого слова `static`:

```typescript
class Operation {
  static PI: number = 3.14

  static getSquare(radius: number): number {
    return Operation.PI * radius * radius
  }
}

let result = Operation.getSquare(30)
console.log('Площадь круга с радиусом 30 равна ' + result)
let result2 = Operation.PI * 30 * 30
console.log(result2) // 2826
```

## Ссылки

- [Классы](https://metanit.com/web/typescript/3.1.php)
