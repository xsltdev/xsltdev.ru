# Преобразование типов

Поскольку объекты `Employee` в то же время являются и объектами `User`, то при определении объектов мы можем написать так:

```typescript
let alice: User = new Employee('Microsoft', 'Alice')
```

Соответственно везде, где в функцию в качестве параметра передается объект `User` или возвращается из функции объект `User`, мы вместо объекта `User` можем передавать объект `Employee`:

```typescript
class User {
  name: string

  constructor(userName: string) {
    this.name = userName
  }
}

class Employee extends User {
  company: string

  constructor(employeeCompany: string, userName: string) {
    super(userName)
    this.company = employeeCompany
  }
}

function getUserName(user: User): string {
  return user.name
}

function userFactory(name: string): User {
  return new Employee('не установлено', name)
}

let alice: Employee = new Employee('Microsoft', 'Alice')
let userName = getUserName(alice)
console.log(userName) // Alice

let tom = userFactory('Tom')
userName = getUserName(tom)
console.log(userName) // Tom
```

Здесь продемонстрированы восходящиие преобразования, то есть преобразования от более конкретного типа к более общему - от призводного типа `Employee` к базовому типу `User`. Они производятся неявно, и нам не надо писать какой-то дополнительный код.

Но есть и другой тип преобразований - нисходящие или от более общего типа к более конкретному. Например:

```typescript
let alice: User = new Employee('Microsoft', 'Alice')
console.log(alice.company) // ошибка - в классе User нет свойства company
```

Здесь переменная `alice` имеет тип `User`, однако в реальности эта переменная указывает на объект типа `Employee`, так как для ее инициализации мы использовали конструктор типа `Employee`, который устанавливает свойство `company`. Однако попытка вывести значение свойства `company` у объекта `alice` завершится ошибкой, так как `alice` - это все таки переменная типа `User`, в котором нет свойства `company`.

Чтобы решить эту ситуацию, нам надо явно преобразовать объект `alice` к типу `Employee`:

```typescript
let alice: User = new Employee('Microsoft', 'Alice')

let aliceEmployee: Employee = <Employee>alice // преобразование к типу Employee
console.log(aliceEmployee.company)

// или так
console.log((<Employee>alice).company)
```

Выражение `<Тип>` переменная позволяет преобразовать переменную к типу, который идет в угловых скобках.

Другой способ осуществить явное преобразование типов представляет применение оператора `as`:

```typescript
let alice: User = new Employee('Microsoft', 'Alice')

let aliceEmployee: Employee = alice as Employee // преобразование к типу Employee
console.log(aliceEmployee.company)

// или так
console.log((alice as Employee).company)
```

Все сказанное в отношении преобразования классов будет справедливо и для преобразования интерфейсов. В то же время есть некоторые особенности. Пусть у нас будет интерфейс `IUser`, никак не связанный с классами `User` и `Employee` и ими не реализуемый:

```typescript
interface IUser {
  name: string
}

class User {
  name: string

  constructor(userName: string) {
    this.name = userName
  }
}

class Employee extends User {
  company: string

  constructor(employeeCompany: string, userName: string) {
    super(userName)
    this.company = employeeCompany
  }
}

function getUserName(user: IUser): string {
  return user.name
}
```

Функция `getUserName` в качестве параметра принимает объект интерфейса `IUser`:

```typescript
let alice: User = new Employee('Microsoft', 'Alice')
console.log(getUserName(alice))

console.log(getUserName({ name: 'Tom' }))
console.log(
  getUserName({ name: 'Bob', company: 'Microsoft' })
) // ошибка
```

Ни класс `User`, ни класс `Employee` не применяют интерфейс `IUser`, однако мы можем их использовать, так как они имеют все те же свойства и методы, что интерфейс `IUser` (в данном случае только свойство `name`).

Объект `{ name: "Tom" }` также является объектом интерфейса, так как он имеет свойство `name`. В то же время при передаче объекта `{ name: "Bob", company:"Microsoft" }` мы получим ошибку, так как он уже расширяет возможности `IUser`, добавляя свойство `company` и напрямую интерфейсу `IUser` не соответствует. Но даже в этом случае мы его можем вполне использовать, применив преобразование типов:

```typescript
console.log(
  getUserName({
    name: 'Bob',
    company: 'Microsoft',
  } as IUser)
) // Bob
```

## Оператор instanceOf

С помощью оператора `instanceOf` можно проверить, принадлежит ли объект определенному классу:

```typescript
let alice: Employee = new Employee('Microsoft', 'Alice')
if (alice instanceof User) {
  console.log('Alice is a User')
} else {
  console.log('Alice is not a User')
}
```

## Ссылки

- [Преобразование типов](https://metanit.com/web/typescript/3.9.php)
