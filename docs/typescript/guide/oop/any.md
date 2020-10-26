# Обобщения

TypeScript является строго типизированным языком, однако иногда надо построить функционал так, чтобы он мог использовать данные любых типов. В некоторых случаях мы могли бы использовать тип `any`:

```typescript
function getId(id: any): any {
  return id
}

let result = getId(5)
console.log(result)
```

Однако в этом случае мы не можем использовать результат функции как объект того типа, который передан в функцию. Для нас это тип `any`. Если бы вместо числа 5 в функцию передавался бы объект какого-нибудь класса, и нам потом надо было бы использовать этот объект, например, вызывать у него функции, то это было бы проблематично. И чтобы конкретизировать возвращаемый тип, мы можем использовать обобщения:

```typescript
function getId<T>(id: T): T {
  return id
}
```

С помощью выражения `<T>` мы указываем, что функция `getId` типизирована определенным типом `T`. При выполнении функции вместо `Т` будет подставляться конкретный тип. Причем на этапе компиляции конкретный тип не известен. И возвращать функция будет объект этого типа. Например:

```typescript
function getId<T>(id: T): T {
  return id
}

let result1 = getId<number>(5)
console.log(result1)
let result2 = getId<string>('abc')
console.log(result2)
```

В первом случае вместо параметра `T` будет испльзоваться тип `number`, поэтому в функцию мы можем передать число. Во втором случае вместо `T` используется тип `string`, поэтому во втором случае можно передать строку. Таким образом, мы можем передать в функцию объекты различных типов, но при этом сохраняется строгая типизация, каждый вариант обобщенной функции может принимать объекты только определенного типа.

Подобным образом еще можно использовать обобщенные массивы:

```typescript
function getString<T>(arg: Array<T>): string {
  let result = ''
  for (let i = 0; i < arg.length; i++) {
    if (i > 0) result += ','
    result += arg[i].toString()
  }
  console.log(result)
  return result
}

let result = getString<number>([1, 2, 34, 5])
console.log(result)
```

В данном случае вне зависимости от типа данных, переданных в массиве, все его элементы соединятся в одну общую строку.

## Обобщенные классы и интерфейсы

Кроме обобщенных функций и массивов также бывают обобщенные классы и интерфейсы:

```typescript
class User<T> {
  private _id: T

  constructor(id: T) {
    this._id = id
  }

  getId(): T {
    return this._id
  }
}

let tom = new User<number>(3)
console.log(tom.getId()) // возвращает number

let alice = new User<string>('vsf')
console.log(alice.getId()) // возвращает string
```

Только в данном случае надо учитывать, что если мы типизировали объект определенным типом, то сменить данный тип уже не получится. То есть в следующем случае второе создание объекта не будет работать, так как объект tom уже типизирован типом `number`:

```typescript
let tom = new User<number>(3)
console.log(tom.getId())
tom = new User<string>('vsf') // ошибка
```

Все то же самое и с интерфейсами:

```typescript
interface IUser<T> {
  getId(): T
}

class User<T> implements IUser<T> {
  private _id: T

  constructor(id: T) {
    this._id = id
  }

  getId(): T {
    return this._id
  }
}
```

## Ограничения обобщений

Иногда необходимо использовать обобщения, однако принимать любой тип в функцию или класс вместо параметра `T` нежелательно. Например, пусть имеется следующий интерфейс и классы его реализующие:

```typescript
interface IUser {
  getInfo()
}

class User implements IUser {
  _id: number
  _name: string

  constructor(id: number, name: string) {
    this._id = id
    this._name = name
  }

  getInfo() {
    console.log('id: ' + this._id + '; name: ' + this._name)
  }
}

class Employee extends User {
  _company: string

  constructor(id: number, name: string, company: string) {
    super(id, name)
    this._company = company
  }

  getInfo() {
    console.log(
      'id: ' +
        this._id +
        '; name: ' +
        this._name +
        '; company:' +
        this._company
    )
  }
}
```

Теперь пусть у нас будет класс, выводящий информацию о пользователях:

```typescript
class UserInfo<T extends IUser> {
  getUserInfo(user: T): void {
    user.getInfo()
  }
}
```

В методе `getUserInfo()` мы хотим использовать функцию `getInfo()`, предполагая, что в качестве параметра будет передаваться объект `IUser`. Но чтобы нельзя было передать объекты любого типа, а только объекты `IUser`, устанавливается ограничения с помощью ключевого слова `extends`.

И затем мы можем использовать класс, передавая подходящие объекты:

```typescript
let tom = new User(3, 'Tom')
let alice = new Employee(4, 'Alice', 'Microsoft')
let userStore = new UserInfo()
userStore.getUserInfo(tom)
userStore.getUserInfo(alice)
```

Кстати в данном случае также можно было бы ограничить параметр не интерфейсом `IUser`, а классом `User: class UserInfo<T extends User>`

## Ключевое слово new

Чтобы создать новый объект в коде обобщений, нам надо указать, что обобщенный тип `T` имеет конструктор. Это означает, что вместо параметра `type:T` нам надо указать `type: {new(): T;}`. Например, следующий обобщенный интерфейс работать не будет:

```typescript
function UserFactory<T>(): T {
  return new T() // ошибка компиляции
}
```

Чтобы интерфейс начал работать, используем слово `new`:

```typescript
function userFactory<T>(type: { new (): T }): T {
  return new type()
}

class User {
  constructor() {
    console.log('создан объект User')
  }
}

let user: User = userFactory(User)
```

## Ссылки

- [Обобщения](https://metanit.com/web/typescript/3.5.php)
