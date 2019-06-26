---
layout: default
title: Типы данных
nav_order: 2
parent: Основы TypeScript
grand_parent: Руководство по Typescript
---

<!-- prettier-ignore-start -->
# Типы данных
{: .no_toc }
<!-- prettier-ignore-end -->

TypeScript является строго типизированным языком, и каждая переменная и константа в нем имеет определенный тип. При этом в отличие от javascript мы не можем динамически изменить ранее указанный тип переменной.

<!-- prettier-ignore -->
1. TOC
{:toc}

В TypeScript имеются следующие базовые типы:

- `Boolean`: логическое значение `true` или `false`
- `Number`: числовое значение
- `String`: строки
- `Array`: массивы
- `Tuple`: кортежи
- `Enum`: перечисления
- `Any`: произвольный тип
- `Null` и `undefined`: соответствуют значениям `null` и `undefined` в javascript
- `Void`: отсутствие конкретного значения, используется в основном в качестве возвращаемого типа функций
- `Never`: также представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку

Большинство из этих типов соотносятся с примитивными типами из JavaScript.

Для установки типа применяется знак двоеточия. Примеры создания переменных:

```typescript
let x: number = 10
let hello: string = 'hello world'
let isValid: boolean = true
```

То есть в данном случае выражение `let hello: string = "hello world"` указывает, что переменная `hello` будет иметь тип `string` и значение `hello world`.

При этом если в коде мы потом захотим изменить тип, например:

```typescript
let hello: string = 'hello world'
hello = 23
```

То в процессе компиляции компилятор TypeScript выдаст ошибку, и мы попросту не сможем запустить программу.

Но можно в принципе и не указывать тип переменной. Например:

```typescript
let hello = 'hello world'
hello = 23
```

В этом случае TypeScript автоматически выведет тип из присваемого данной переменной значения. Так, на первой строке компилятор TS увидит, что переменной присваивается строка, поэтому для нее будет использоваться тип `string`. Однако на второй строке опять же компилятор выдаст ошибку, поскольку у переменной уже определен тип `string`. А новое значение предполагает тип `number`.

Если же переменная определяется без значения, и только впоследствии при работе программы ей присваивается значение, тогда считается, что она имеет тип `any`:

```typescript
let x // тип any
x = 10
```

## Boolean

Тип `Boolean` представляет логическое значение `true` или `false`:

```typescript
let isEnabled = true
let isAlive: boolean = false
console.log(isEnabled)
console.log(isAlive)
```

## Number

Тип `Number` представляет числа, причем все числа в TypeScript, как и в JavaScript, являются числами с плавающей точкой. TS поддерживает двоичную, восьмеричную, десятичную и шестнадцатиричную записи чисел:

```typescript
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
```

## String

`String` представляет строки. Как и в JavaScript, в TypeScript строки можно заключать в двойные, либо в одинарные кавычки:

```typescript
let firstName: string = 'Tom'
let lastName = 'Johns'
```

Кроме того, TypeScript поддерживает такую функциональность, как шаблоны строк, то есть мы можем задать шаблон в косых кавычках, как если бы мы писали обычную строку, и затем в саму строку можно встраивать разные выражения с помощью синтаксиса `${ expr }`, где `expr` - это выражение. Например:

```typescript
let firstName: string = 'Tom'
let age: number = 28
let info: string = `Имя ${firstName}    Возраст: ${age}`
console.log(info) // Имя Tom    Возраст: 28
```

Косые кавычки также можно применять для установки многострочного текста:

```typescript
let sentence: string = `Hello World!
Goob bye World!`
```

## Null и undefined

Как и в JavaScript, в TypeScript есть специальные типы `undefined` и `null`, которые принимают соответствующие значения `undefined` и `null`:

```typescript
let a: undefined = undefined
let b: null = null
```

Но фактически мы можем присваивать значения `undefined` и `null` переменным других типов, например, `number`:

```typescript
let x: number = undefined
console.log(x)
x = null
console.log(x)
x = 5
console.log(x)
```

В этом плане `null` и `undefined` выступают как подтипы других типов и полезны преимущественно в каких-то операциях, где неизвестен результат - то ли это будет число или строка, то ли это будет `null`. В этом случае, чтобы избежать возможной ошибки, мы можем проверить значение на `undefined` или `null`, собственно как и в javascript.

## Массивы

Массивы определяются с помощью выражения `[]` и также являются строго типизированными. То есть если изначально массив содержит строки, то в будущем он сможет работать только со строками.

```typescript
let list: number[] = [10, 20, 30]
let colors: string[] = ['red', 'green', 'blue']
console.log(list[0])
console.log(colors[1])
```

Как и в JavaScript, с помощью индексов можно обращаться к элементам массива.

Альтернативный способ определения массивов представляет применение типа `Array<>`:

```typescript
let names: Array<string> = ['Tom', 'Bob', 'Alice']
console.log(names[1]) // Bob
```

## Кортежи

Кортежи (`Tuples`) также, как и массивы, представляют набор элементов, для которых уже заранее известен тип. Например:

```typescript
// определение кортежа - кортеж состоит из двух элементов - строки и числа
let userInfo: [string, number]
// инициализация кортежа
userInfo = ['Tom', 28]
// Неправильная инициализация - переданные значения не соответствуют типам по позиции
//userInfo = [28, "Tom"]; // Ошибка
// использование кортежа
console.log(userInfo[1]) // 28
userInfo[1] = 37
```

## Тип enum

Тип `enum` предназначен для описания набора числовых данных с помощью строковых констант. Так, объявим следующее перечисление:

```typescript
enum Season {
  Winter,
  Spring,
  Summer,
  Autumn
}
```

Перечисление называется `Season` и имеет четыре элемента. Теперь используем перечисление:

```typescript
enum Season {
  Winter,
  Spring,
  Summer,
  Autumn
}
let current: Season = Season.Summer
console.log(current)
current = Season.Autumn // изменение значения
```

Здесь создается переменная `current`, которая имеет тип `Season`. При этом консоль выведет нам число `2`. Так как все элементы перечисления представляют числовые значения. По умолчанию следующие:

```typescript
enum Season {
  Winter = 0,
  Spring = 1,
  Summer = 2,
  Autumn = 3
}
```

Хотя мы можем переопределить эти значения:

```typescript
enum Season {
  Winter = 5,
  Spring,
  Summer,
  Autumn
} // 5, 6, 7, 8
enum Season {
  Winter = 4,
  Spring = 8,
  Summer = 16,
  Autumn = 32
} // 4, 8, 16, 32
```

Также мы можем получить непосредственно текстовое значение:

```typescript
enum Season {
  Winter = 0,
  Spring = 1,
  Summer = 2,
  Autumn = 3
}
var current: string = Season[2] // 2 - числовое значение Summer
console.log(current) // Summer
```

## Тип any

`Any` описывает данные, тип которых может быть неизвестен на момент написания приложения.

```typescript
let someVar: any = 'hello'
console.log(someVar) // сейчас someVar - это string
someVar = 20
console.log(someVar) // сейчас someVar - это number
```

Так как здесь применяется тип `any`, то данный код скомпилируется без ошибок, несмотря на смену строкового значения на числовое. И также мы можем объявлять массивы данного типа:

```typescript
var someArray: any[] = [24, 'Tom', false]
```

## Комплексные объекты

Кроме простых переменных, как и в javascript, можно создавать сложные объекты. Например:

```typescript
let person = { name: 'Tom', age: 23 }
console.log(person.name)
// альтернативный вариант получения свойства
console.log(person['name'])
```

Но несмотря на то, что это фактически тот же самый объект, что мы могли бы использовать в JavaScript, в силу строготипизированности TS мы имеем в данном случае ограничения. В частности, если у нас будет следующий код:

```typescript
let person = { name: 'Tom', age: 23 }
person = { name: 'Alice' }
```

То на второй строке мы получим ошибку, поскольку компилятор после первой строки предполагает, что объект `person` будет иметь два свойства `name` и `age`. Должно быть соответствие по названиям, количеству и типу свойств.

## Ссылки

- [Типы данных](https://metanit.com/web/typescript/2.5.php)
