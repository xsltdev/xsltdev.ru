# Тип функции и стрелочные функции

## Тип функции

Каждая функция имеет тип, как и обычные переменные. Тип функции фактически представляет комбинацию типов параметров и типа возвращаемого значения. Например, возьмем следующую функцию:

```typescript
function sum(x: number, y: number): number {
  return x + y
}
```

Она имеет тип `(x:number, y:number) => number;`, то есть принимает два параметра `number` и возвращает значение типа `number`. Названия параметров в типе функции необязательно должны соответствовать названиям конкретной функции. А перед типом возвращаемого значения ставится знак равно со стрелкой.

И подобно тому, как определяются переменные определенного типа, можно определять переменные, которые имеют тип функции:

```typescript
let op: (x: number, y: number) => number
```

То есть переменная `op` представляет любую функцию, которая принимает два числа и которая возвращает число. Например:

```typescript
function sum(x: number, y: number): number {
  return x + y
}
function subtract(a: number, b: number): number {
  return a - b
}

let op: (x: number, y: number) => number

op = sum
console.log(op(2, 4)) // 6

op = subtract
console.log(op(6, 4)) // 2
```

Здесь вначале переменная `op` указывает на функцию `sum`. И соответственно вызов `op(2, 4)` фактически будет представлять вызов `sum(2, 4)`. А затем `op` указывает на функцию `subtract`.

## Функции обратного вызова

Тип функции можно использовать как тип переменной, но он также может применяться для определения типа параметра другой функции:

```typescript
function mathOp(
  x: number,
  y: number,
  operation: (a: number, b: number) => number
): number {
  let result = operation(x, y)
  return result
}
let operationFunc: (x: number, y: number) => number
operationFunc = function (a: number, b: number): number {
  return a + b
}
console.log(mathOp(10, 20, operationFunc)) // 30

operationFunc = function (a: number, b: number): number {
  return a * b
}
console.log(mathOp(10, 20, operationFunc)) // 200
```

Здесь в функции `mathOp` третий парметр как раз представляет функцию, которая принимает два параметра типа `number` и возвращает число. Фактически тем самым мы можем передавать функции обратного вызова, например, при генерации событий, когда в ответ на некоторое действие срабатывает другая функция.

## Стрелочные функции

Для определения функций в TypeScript можно использовать стрелочные функции или arrow functions. Стрелочные функции представляют выражения типа `(параметры) => тело функции`. Например:

```typescript
let sum = (x: number, y: number) => x + y

let result = sum(15, 35) // 50
console.log(result)
```

Тип параметров можно опускать:

```typescript
let sum = (x, y) => x + y

let result = sum(15, 35) // 50
console.log(result)
```

Если стрелочная функция не требует параметров, то используются пустые круглые скобки. Если передается только один параметр, то скобки можно опустить:

```typescript
let square = (x) => x * x
let hello = () => 'hello world'

console.log(square(5)) // 25
console.log(hello()) // hello world
```

Если тело функции представляет множество выражений, а не просто одно выражение, как в примере выше, тогда можно опять же заключить все выражения в фигурные скобки:

```typescript
let sum = (x: number, y: number) => {
  x *= 2
  return x + y
}

let result = sum(15, 35) // 65
console.log(result)
```

Стрелочные функции можно передавать в функцию вместо параметра, который представляет собой функцию:

```typescript
function mathOp(
  x: number,
  y: number,
  operation: (a: number, b: number) => number
): number {
  let result = operation(x, y)
  return result
}
console.log(mathOp(10, 20, (x, y) => x + y)) // 30
console.log(mathOp(10, 20, (x, y) => x * y)) // 200
```

## Ссылки

- [Тип функции и стрелочные функции](https://metanit.com/web/typescript/2.3.php)
