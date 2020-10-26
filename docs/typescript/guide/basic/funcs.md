# Функции

## Определение функции

В javascript функции определяются с помощью ключевого слова `function`, например:

```javascript
function add(a, b) {
  return a + b
}
// использование функции
var result1 = add(1, 2) // результат 3
var result2 = add('1', '2') // результат 12
```

TypeScript также определяет функцию с помощью ключевого слова `function`, но при этом добавляет дополнительные возможности по работе с функциями. В частности, теперь мы можем определить тип передаваемых параметров и тип возвращаемого значения. Типичное определение функции в TypeScript:

```typescript
// определение функции
function add(a: number, b: number): number {
  return a + b
}
// вызов функции
let result1 = add(1, 2)
console.log(result1)
```

Либо мы можем опредить функцию как переменную и затем через переменной вызывать данную функцию:

```typescript
let add = function (a: number, b: number): number {
  return a + b
}
let result1 = add(1, 2)
```

## Параметры функции

Функция может иметь параметры, которые указываются после названия функции в скобках через запятую. Через двоеточие после имени параметра указывается его тип:

```typescript
// определение функции
function add(a: number, b: number) {
  let result = a + b
  console.log(result)
}
// вызов функции
add(20, 30) // 50
add(10, 15) //25
```

Однако поскольку параметры имеют тип `number`, то при вызове функции

```typescript
add('1', '2')
```

компилятор TS выдаст ошибку, так как параметры должны иметь тип `number`, а не тип `string`.

При этом функция может не только использовать передаваемые параметры, но и глобальные переменные, определенные во вне:

```typescript
let koef: number = 1.5

function add(a: number) {
  let result = a * koef
  console.log(result)
}

add(20) // 30
add(10) //15
```

## Результат функции

Функция может возвращать значение определенного типа, который еще называется типом функции. Возвращаемый тип функции ставится после списка параметров через двоеточие:

```typescript
function add(a: number, b: number): number {
  return a + b
}
let result1 = add(1, 2)
```

В данном случае функция будет возвращать значение типа `number`.

Если функция ничего не возвращает, то указывается тип `void`:

```typescript
function add(a: number, b: number): void {
  console.log(a + b)
}
add(10, 20)
```

В принципе мы можем и не указывать тип, тогда он будет выводиться неявно на основе возвращаемого значения:

```typescript
function add(a: number, b: number) {
  return a + b
}
let result = add(10, 20)
```

## Необязательные параметры

В typescript при вызове в функцию должно передаваться ровно столько значений, сколько в ней определено параметров:

```typescript
function getName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName
}

let name1 = getName('Иван', 'Кузнецов')
let name2 = getName('Иван', 'Михайлович', 'Кузнецов') //ошибка, много параметров
let name3 = getName('Иван') //ошибка, мало параметров
```

Чтобы иметь возможность передавать различное число значений в функцию, в TS некоторые параметры можно объявить как необязательные. Необязательные параметры должны быть помечены вопросительным знаком `?`. Причем необязательные параметры должны идти после обязательных:

```typescript
function getName(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

let name1 = getName('Иван', 'Кузнецов')
console.log(name1) // Иван Кузнецов
let name2 = getName('Вася')
console.log(name2) // Вася
```

Во втором случае, когда в функцию передается только имя, второй используемый параметр будет иметь неопределенное значение или `undefined`. Поэтому с помощью условной конструкции проверяется наличие значения для этого параметра.

## Параметры по умолчанию

Параметры по умолчанию позволяют задать начальное значение. И если для такого параметра не передается значение, то он использует значение по умолчанию:

```typescript
function getName(
  firstName: string,
  lastName: string = 'Иванов'
) {
  return firstName + ' ' + lastName
}

let name1 = getName('Иван', 'Кузнецов')
console.log(name1) // Иван Кузнецов
let name2 = getName('Вася')
console.log(name2) // Вася Иванов
```

Причем в качестве значения можно передавать результат другого выражения:

```typescript
function defaultSurname(): string {
  return 'Smith'
}

function getName(
  firstName: string,
  lastName: string = defaultSurname()
) {
  return firstName + ' ' + lastName
}

let name1 = getName('Tom')
console.log(name1) // Tom Smith
```

## Неопределенный набор параметров

Если же необходимо, чтобы функция принимала набор однотипных параметров, то используется знак многоточия, после которого идет массив:

```typescript
function addNumbers(
  firstNumber: number,
  ...numberArray: number[]
): number {
  let result = firstNumber
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i]
  }
  return result
}

let num1 = addNumbers(3, 7, 8)
console.log(num1) // 18

let num2 = addNumbers(3, 7, 8, 9, 4)
console.log(num2) // 31
```

## Перегрузка функций

TypeScript поддерживает возможность перегрузки функций, то есть мы можем определить несколько версий функции, которые будут иметь одно и то же имя, но разные типы параметров или разное количество параметров или разные возвращаемые типы результатов. Для перегрузки вначале опеределяем все версии функции, которые не будут иметь никакой логики. А потом определяем версию функции с общей сигнатурой, которая подходит под все ранее определенные варианты. И в этой общей версии уже определяем конкретную логику функции.

Например, нам надо объединить два значения, но если они представляют строки, то просто их конкатенировать, а если числа - то сложить. Тогда мы могли бы использовать следующую функцию:

```typescript
function add(x: string, y: string): string
function add(x: number, y: number): number
function add(x: any, y: any): any {
  return x + y
}

let result1 = add(5, 4)
console.log(result1) // 9
let result2 = add('5', '4')
console.log(result2) // 54
```

Первая версия функции `add` принимает две строки и возвращает строку, вторая версия принимает два числа и возвращает число. Общей для них будет функция, которая принимает параметры типа any и возвращает результат также типа `any`.

Но если бы мы ту же функцию применили бы к логическим значениям:

```typescript
let result3 = add(true, false)
console.log(result3)
```

то мы получили бы ошибку, так как две версии функции позволяют принимать в качестве параметров либо две строки, либо два числа. И в этом случае нам надо было бы добавить еще одну версию функции для логических значений:

```typescript
function add(x: boolean, y: boolean): boolean
```

## Ссылки

- [Функции](https://metanit.com/web/typescript/2.2.php)
