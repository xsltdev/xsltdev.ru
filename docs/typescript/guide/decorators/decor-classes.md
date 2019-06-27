# Декораторы классов

Декораторы являются инструментом декларативного программирования, они позволяют добавить к классам и их членам метаданные и тем самым изменить их поведение без изменения их кода.

Декораторы представляют функции, которые могут применяться к классам, методам, методом доступа (геттерам и сеттерам), свойствам, параметрам.

На текущий момент декораторы являются экпериментальной функциональностью языка TypeScript, поэтому при компиляции следует указывать параметр experimentalDecorators. Например, через файл `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

Либо через параметры в командной строке:

```bash
tsc app.ts -t ES5 --experimentalDecorators
```

## Декораторы классов

Декоратор класса представляет функцию, которая принимает один параметр:

```typescript
function classDecoratorFn(constructor: Function) {}
```

В качестве параметра выступает конструктор класса. Например, определим простейший декоратор:

```typescript
function sealed(constructor: Function) {
  console.log('sealed decorator')
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

@sealed
class User {
  name: string
  constructor(name: string) {
    this.name = name
  }
  print(): void {
    console.log(this.name)
  }
}
```

Декоратор `sealed` с помощью функции `Object.seal` запрещает расширение прототипа класса `User`.

Для применения декоратора используется знак `@`. Сам декоратор ставится перед названием класса. То есть из-за применения декоратора мы, к примеру, не сможем добавить в класс `User` новое свойство следующим образом:

```typescript
Object.defineProperty(User, 'age', {
  value: 17
})
```

Также декораторы могут изменять результат работы конструктора. В этом случае определение функции декоратора немного меняется, но она также в качестве параметра принимает конструктор класса:

```typescript
function logger<TFunction extends Function>(target: TFunction): TFunction {
  let newConstructor: Function = function(name: string) {
    console.log('Creating new instance')
    this.name = name
    this.age = 23
    this.print = function(): void {
      console.log(this.name, this.age)
    }
  }
  return <TFunction>newConstructor
}

@logger
class User {
  name: string
  constructor(name: string) {
    this.name = name
  }
  print(): void {
    console.log(this.name)
  }
}
let tom = new User('Tom')
let bob = new User('Bob')
tom.print()
bob.print()
```

В данном случае декоратор `logger` типизирован типом `TFunction`, который является расширением типа `Function`, то есть функции. По сути это тип функции конструктора.

В самом декораторе передаваемый конструктор `target` никак не используется. Но создается новый конструктор. Мы предполагаем, что в конструктор будет передаваться некоторый параметр, который будет называться `name`. Значение этого параметра передается свойству `this.name = name;`. Также в конструкторе устанавливается новое свойство `this.age` и функция `this.print()`, которая выводит на консоль значения обоих свойств.

Далее декоратор применяется к классу `User`. У этого класса определен конструктор, который устанавливает свойство `name`. Однако поскольку мы переопределили конструктор, то в реальности при создании объекта `User` будет устанавливаться как свойство `name`, так и свойство `age`. И, кроме того, будет переопределяться метод `print`.

![Декораторы классов](decor-classes-1.png)

## Ссылки

- [Декораторы классов](https://metanit.com/web/typescript/6.1.php)
