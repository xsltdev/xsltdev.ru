# Методы доступа и readonly-свойства

## Методы доступа

В стандарте JavaScript ECMAScript 5 была предложена концепция методов доступа: для доступа к свойству определяется пара методов - get-метод для получения значения свойства и set-метод для установки значения. Это довольно распространенная концепция, которая нашла свое применение, например, в Java, где для управления доступом к приватным переменным создается пара методов - `get`/`set`, или в C#, где для доступа к приватным переменным создается свойство с двумя методами `get`/`set`.

К примеру, у нас есть следующий класс:

```typescript
class User {
  name: string
}

let tom = new User()
tom.name = 'Tom'
console.log(tom.name)
```

Использование аксессоров или методов доступа позволяет управлять тем, как значение устанавливается и как оно возвращается. В частности, мы можем переписать предыдущих класс с использованием акссессоров следующим образом:

```typescript
class User {
  private _name: string

  public get name(): string {
    return this._name
  }

  public set name(n: string) {
    this._name = n
  }
}

let tom = new User()
tom.name = 'Tom' // срабатывает set-метод
console.log(tom.name) // срабатывает get-метод
```

Методы доступа определяются как обычные методы, только перед ними ставятся ключевые слова `get`/`set`. Set-метод контроллирует установку значения, а get-метод возвращает значение.

## Свойства только для чтения

Ключевое слово `readonly` позволяет определить свойства, которые доступны только для чтения:

```typescript
class User {
  readonly id: number
  name: string

  constructor(userId: number, userName: string) {
    this.id = userId
    this.name = userName
  }
}

let tom: User = new User(2, 'Tom')
console.log(tom.id, tom.name)
//tom.id=34; // Ошибка - так как id - только для чтения
```

В данном случае свойство `id` доступно только для чтения. Мы можем установить его значение только в конструкторе класса.

Подобное определение свойств для чтения можно сократить следующим образом:

```typescript
class User {
  name: string

  constructor(readonly id: number, userName: string) {
    this.name = userName
  }
}
```

Также мы можем вместе с модификатором `readonly` задать модификатор доступа.

## Ссылки

- [Методы доступа и readonly-свойства](https://metanit.com/web/typescript/3.10.php)
