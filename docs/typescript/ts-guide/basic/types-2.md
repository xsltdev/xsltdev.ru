---
layout: default
title: Работа с типами данных
nav_order: 3
parent: Основы TypeScript
grand_parent: Руководство по Typescript
---

<!-- prettier-ignore-start -->
# Работа с типами данных
{: .no_toc }
<!-- prettier-ignore-end -->

<!-- prettier-ignore -->
1. TOC
{:toc}

## Объединения

Объединения или `union` не являются собственно типом данных, но они позволяют определить переменную, которая может хранить значение двух или более типов:

```typescript
let id: number | string
id = '1345dgg5'
console.log(id) // 1345dgg5
id = 234
console.log(id) // 234
```

Чтобы определить все типы, которые должно представлять перечисление, все эти типы разделяются прямой чертой: `number | string`. В данном случае переменная `id` может представлять как тип `string`, то есть строку, так и число.

## Проверка типа

С помощью оператора `typeof` мы можем проверить тип переменной. Это может быть необходимо, когда мы хотим выполнить некоторые операции с переменной, но нам неизвестен ее точный тип (например, переменная представляет тип `any`). Данная функциональность еще называется `type guards` или защита типа:

```typescript
let sum: any
sum = 1200
sum = 'тысяча двести'
let result: number = sum / 12
console.log(result) // NaN - строку нельзя разделить на число
```

Переменная `sum` может хранит любое значение, однако деление может работать только с числами. Поэтому перед делением выполним проверку на тип:

```typescript
let sum: any
sum = 1200

if (typeof sum === 'number') {
  let result: number = sum / 12
  console.log(result)
} else {
  console.log('invalid operation')
}
```

После оператора `typeof` указывается имя переменной, затем равно и название типа, на который идет проверка. Если переменная соответствует типу, то оператор `typeof` возвращает значение `true`.

## Псевдонимы типов

TypeScript позволяет определять псевдонимы типов с помощью ключевого слова type:

```typescript
type stringOrNumberType = number | string
let sum: stringOrNumberType = 36.6
if (typeof sum === 'number') {
  console.log(sum / 6)
}
```

Далее мы сможем применять псевдоним аналогично типу данных.

## Type assertion

Type assertion представляет модель преобразования значения переменной к определенному типу. Обычно в некоторых ситуациях одна переменная может представлять какой-то широкий тип, например, `any`, который по факту допускает значения различных типов. Однако при этом нам надо использовать переменную как значение строго определенного типа. И в этом случае мы можем привести к этому типу.

Есть две формы приведения. Первая форма заключается в использовании угловых скобок:

```typescript
let someAnyValue: any = 'hello world!'
let strLength: number = (<string>someAnyValue).length
console.log(strLength) // 12

let someUnionValue: string | number = 'hello work'
strLength = (<string>someUnionValue).length
console.log(strLength) // 10
```

Вторая форма заключается в применении оператора `as`:

```typescript
let someAnyValue: any = 'hello world!'
let strLength: number = (someAnyValue as string).length
console.log(strLength) // 12

let someUnionValue: string | number = 'hello work'
strLength = (someUnionValue as string).length
console.log(strLength) // 10
```

## Ссылки

- [Работа с типами данных](https://metanit.com/web/typescript/2.4.php)
