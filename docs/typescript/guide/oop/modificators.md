# Модификаторы доступа

Одной из ключевых концепций объектно-ориентированного программирования является инкапсуляция, подразумевающая сокрытие от внешнего доступа к состоянию объекта и управление доступом к этому состоянию. Обычно для этого во многих ООП-языках (как Java, C#) используются модификаторы доступа. В TypeScript три модификатора: `public`, `protected` и `private`.

Если к свойствам и функциям классов не применяется модификатор, то такие свойства и функции расцениваются как будто они определены с модификатором `public`. То есть следующее определение класса:

```typescript
class User {
  name: string
  year: number
}
```

Будет эквивалентно:

```typescript
class User {
  public name: string
  public year: number
}
```

## private

Если же к свойствам и методам применяется модификатор `private`, то к ним нельзя будет обратиться извне при создании объекта данного класса.

Например, создадим класс с приватными свойствами и методами:

```typescript
class User {
  private _name: string
  private _year: number

  constructor(name: string, age: number) {
    this._name = name
    this._year = this.setYear(age)
  }

  public displayYear(): void {
    console.log('Год рождения: ' + this._year)
  }

  public displayName(): void {
    console.log('name: ' + this._name)
  }

  private setYear(age: number): number {
    return new Date().getFullYear() - age
  }
}

let tom = new User('Tom', 24)
tom.displayName()
tom.displayYear()
// console.log(tom.\_name); // нельзя обратиться, так как \_name - private
// tom.setYear(45); // нельзя обратиться, так как функция - private
```

Два свойства `_name` и `_year` используются с модификатором `private`, поэтому мы не можем их использовать вне класса, например, `console.log(tom._name)`. То же самое относится к функции `setYear()`. Остальные функции доступны.

Нередко приватные свойства в своем названии в качестве первого символа имеют символ подчеркивания. Но не обязательно так делать, это скорее сложившаяся практика.

## protected

Модификатор `protected` во многом аналогичен `private` - свойства и методы с данным модификатором не видны из вне, но к ним можно обратиться из классов-наследников:

```typescript
class User {
  private name: string
  protected age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public displayInfo(): void {
    console.log('name: ' + this.name + '; age: ' + this.age)
  }
}

class Employee extends User {
  private company: string

  constructor(name: string, age: number, company: string) {
    super(name, age)
    this.company = company
  }

  public showData(): void {
    console.log('Age: ' + this.age)
    //console.log("Name: " + this.name); // не работает, так как name - private
  }
}
```

В классе `Employee` будет доступно свойство `age`, так как оно имеет модификатор `protected`. А вот приватное свойство `name` будет недоступно.

## Определение свойств через конструктор

Использование модификаторов в параметрах конструктора позволяет сократить написание кода. Например, пусть у нас есть следующий класс:

```typescript
class User {
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  public displayInfo(): void {
    console.log('name: ' + this._name + '; age: ' + this._age)
  }
}
```

Этот класс будет аналогичен следующему:

```typescript
class User {
  constructor(private name: string, private age: number) {}

  public displayInfo(): void {
    console.log('name: ' + this.name + '; age: ' + this.age)
  }
}
```

Используя модификаторы в параметрах конструктора, нам больше не надо явно создать свойства для этих параметров. Свойства создаются автоматически, называются они по имени параметров и имеют те же модификаторы, что и параметры.

Подобным образом, если мы хотим сделать свойства публичными, то следует использовать модификатор `public`:

```typescript
class User {
  constructor(public name: string, public age: number) {}
}
```

## Ссылки

- [Модификаторы доступа](https://metanit.com/web/typescript/3.4.php)
