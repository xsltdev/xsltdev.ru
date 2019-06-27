# Модули

> **Замечание по поводу терминологии:**
> Важно отметить, что в TypeScript 1.5 изменилась номенклатура.
> "Внутренние модули" теперь называются "пространства имён".
> "Внешние модули" стали просто "модулями". Это было сделано, чтобы согласовать терминологию с [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/), (а именно: `module X {` эквивалентен предпочитаемому в настоящее время `namespace X {`).

## Введение

Начиная с ECMAScript 2015, в JavaScript появилась концепция модулей. TypeScript использует ту же концепцию.

Модули выполняются не в глобальной, а в своей собственной области видимости. Это означает, что переменные, функции, классы и т.д., объявленные в модуле, не видны вне модуля, за исключением тех случаев, когда они явно экспортированы с использованием одной из форм [`export`](#export).
Также, чтобы использовать переменную, функцию, класс, интерфейс, и т.д., экспортированные из другого модуля, необходимо импортировать их с помощью одной из форм [`import`](#import).

Модули декларативны, и отношения между модулями определяются в терминах импорта и экспорта на файловом уровне.

Модули импортируют друг друга, используя загрузчик модулей, который во время выполнения кода находит и выполняет все зависимости модуля перед его выполнением.
В JavaScript широко используются такие загрузчики, как [CommonJS](https://en.wikipedia.org/wiki/CommonJS) для Node.js и [require.js](http://requirejs.org/) для веб-приложений.

В TypeScript, как и в ECMAScript 2015, любой файл, содержащий `import` или `export` верхнего уровня, считается модулем.

## Экспорт

### Экспорт объявления

Любое объявление (переменой, функции, класса, псевдонима типа или интерфейса) может быть экспортировано с помощью добавления ключевого слова `export`.

**Validation.ts**

```ts
export interface StringValidator {
  isAcceptable(s: string): boolean
}
```

**ZipCodeValidator.ts**

```ts
export const numberRegexp = /^[0-9]+$/

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}
```

### Экспортное определение (Export statement)

Экспортные определения удобно применять в том случае, когда экспортируемые элементы необходимо переименовать. Тогда вышеприведённый пример можно переписать следующим образом:

```ts
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}
export { ZipCodeValidator }
export { ZipCodeValidator as mainValidator }
```

### Ре-экспорт

Модули часто расширяют другие модули. При этом они сами предоставляют доступ к части функций исходных модулей.
Ре-экспорт не выполняет локального импорта и не создаёт локальную переменную.

**ParseIntBasedZipCodeValidator.ts**

```ts
export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && parseInt(s).toString() === s
  }
}

// Экспортирует исходный валидатор, переименовывая его
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCodeValidator'
```

При использовании модуля в качестве обёртки над одним или несколькими другими модулями, есть возможность ре-экспортировать сразу все их операторы экспорта с помощью конструкции `export * from "module"`.

**AllValidators.ts**

```ts
export * from './StringValidator' // экспортирует интерфейс 'StringValidator'
export * from './LettersOnlyValidator' // экспортирует класс 'LettersOnlyValidator'
export * from './ZipCodeValidator' // экспортирует класс 'ZipCodeValidator'
```

## Импорт

Импортировать практически так же просто, как и экспортировать.
Импорт экспортированного объявления выполняется с помощью одной из форм `import`, приведённых ниже:

### Импорт одного экспортированного элемента

```ts
import { ZipCodeValidator } from './ZipCodeValidator'

let myValidator = new ZipCodeValidator()
```

импортируемый элемент также может быть переименован

```ts
import { ZipCodeValidator as ZCV } from './ZipCodeValidator'
let myValidator = new ZCV()
```

### Импорт всего модуля в одну переменную, и её использование для доступа к экспортированным элементам модуля

```ts
import * as validator from './ZipCodeValidator'
let myValidator = new validator.ZipCodeValidator()
```

### Импорт модуля ради «побочных эффектов»

Несмотря на то, что так делать не рекомендуется, некоторые модули устанавливают некое глобальное состояние, которое может быть использовано другими модулями.
У этих модулей может не быть экспортируемых элементов, или пользователю эти элементы не нужны.
Для импорта таких модулей используйте команду:

```ts
import './my-module.js'
```

## Экспорт по умолчанию (`default` export)

Каждый модуль может содержать экспорт по умолчанию.
Экспорт по умолчанию выделяется ключевым словом `default`, и в модуле может быть только одна такая инструкция.
Для импорта экспорта по умолчанию используется отдельная форма оператора `import`.

Экспорт по умолчанию может оказаться очень полезным.
Например, такая библиотека, как Jquery, может по умолчанию экспортировать `jQuery` или `$`, что мы, вероятно, также импортируем под именем `$` или `jQuery`.

**JQuery.d.ts**

```ts
declare let $: JQuery
export default $
```

**App.ts**

```ts
import $ from 'JQuery'

$('button.continue').html('Next Step...')
```

Классы и определения функций могут быть сразу обозначены в качестве экспортируемых по умолчанию.
Такие классы и функции могут быть объявлены без указания имён.

**ZipCodeValidator.ts**

```ts
export default class ZipCodeValidator {
  static numberRegexp = /^[0-9]+$/
  isAcceptable(s: string) {
    return s.length === 5 && ZipCodeValidator.numberRegexp.test(s)
  }
}
```

**Test.ts**

```ts
import validator from './ZipCodeValidator'

let myValidator = new validator()
```

или

**StaticZipCodeValidator.ts**

```ts
const numberRegexp = /^[0-9]+$/

export default function(s: string) {
  return s.length === 5 && numberRegexp.test(s)
}
```

**Test.ts**

```ts
import validate from './StaticZipCodeValidator'

let strings = ['Hello', '98052', '101']

// Использование функции validate
strings.forEach(s => {
  console.log(`"${s}" ${validate(s) ? ' matches' : ' does not match'}`)
})
```

Экспортируемым по умолчанию элементом можно быть обычное значение:

**OneTwoThree.ts**

```ts
export default '123'
```

**Log.ts**

```ts
import num from './OneTwoThree'

console.log(num) // "123"
```

## `export =` и `import = require()`

У CommonJS и AMD существует концепция объекта `exports`, который содержит весь экспорт модуля.

Они также поддерживают замену объекта `exports` единичным пользовательским объектом.
Экспорт по умолчанию призван заменить этот функционал. Оба подхода, однако, несовместимы.
TypeScript поддерживает конструкцию `export =`, которую можно использовать для моделирования привычной схемы работы CommonJS и AMD.

Конструкция `export =` определяет единичный объект, экспортируемый из модуля.
Это может быть класс, интерфейс, пространство имён, функция или перечисление.

Для импорта модуля, экспортированного с помощью `export =`, должна быть использована специфичная для TypeScript конструкция `import let = require("module")`.

**ZipCodeValidator.ts**

```ts
let numberRegexp = /^[0-9]+$/
class ZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}
export = ZipCodeValidator
```

**Test.ts**

```ts
import zip = require('./ZipCodeValidator')

// Несколько тестовых примеров
let strings = ['Hello', '98052', '101']

// Валидаторы
let validator = new zip()

// Для каждой строки показывает, прошла ли она каждый валидатор
strings.forEach(s => {
  console.log(`"${s}" - ${validator.isAcceptable(s) ? 'matches' : 'does not match'}`)
})
```

## Генерация кода для модулей

В зависимости от цели модуля, указанной во время компиляции, компилятор сгенерирует соответствующий код для Node.js ([CommonJS](http://wiki.commonjs.org/wiki/CommonJS)), require.js ([AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)), ([UMD](https://github.com/umdjs/umd)), [SystemJS](https://github.com/systemjs/systemjs) или [собственных модулей ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/#sec-modules) (ES6).
Для получения более подробной информации по поводу того, что делают вызовы `define`, `require` и `register` в сгенерированном коде, смотрите документацию по каждому отдельному модулю.

В этом простом примере показано, как имена, используемые во время импорта и экспорта, транслируются в код загрузки модуля.

**SimpleModule.ts**

```ts
import m = require('mod')
export let t = m.something + 1
```

**AMD / RequireJS SimpleModule.js**

```js
define(['require', 'exports', './mod'], function(require, exports, mod_1) {
  exports.t = mod_1.something + 1
})
```

**CommonJS / Node SimpleModule.js**

```js
var mod_1 = require('./mod')
exports.t = mod_1.something + 1
```

**UMD SimpleModule.js**

```js
;(function(factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports)
    if (v !== undefined) module.exports = v
  } else if (typeof define === 'function' && define.amd) {
    define(['require', 'exports', './mod'], factory)
  }
})(function(require, exports) {
  var mod_1 = require('./mod')
  exports.t = mod_1.something + 1
})
```

**Система SimpleModule.js**

```js
System.register(['./mod'], function(exports_1) {
  var mod_1
  var t
  return {
    setters: [
      function(mod_1_1) {
        mod_1 = mod_1_1
      }
    ],
    execute: function() {
      exports_1('t', (t = mod_1.something + 1))
    }
  }
})
```

**Собственные модули ECMAScript 2015 SimpleModule.js**

```js
import { something } from './mod'
export var t = something + 1
```

## Простой пример

Ниже мы упростили реализацию валидатора из предыдущего примера, сведя его к экспорту единичного именованного экспорта из каждого модуля.

Для успешной компиляции необходимо указать цель модуля в командной строке. Для Node.js, используется `--module commonjs`;
для require.js — `--module amd`. Например:

```Shell
tsc --module commonjs Test.ts
```

В результате компиляции каждый модуль становится отдельным `.js`-файлом.
Так же как и со ссылочными тегами, компилятор по операторам `import` найдёт и скомпилирует зависимые файлы.

**Validation.ts**

```ts
export interface StringValidator {
  isAcceptable(s: string): boolean
}
```

**LettersOnlyValidator.ts**

```ts
import { StringValidator } from './Validation'

const lettersRegexp = /^[A-Za-z]+$/

export class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s)
  }
}
```

**ZipCodeValidator.ts**

```ts
import { StringValidator } from './Validation'

const numberRegexp = /^[0-9]+$/

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}
```

**Test.ts**

```ts
import { StringValidator } from './Validation'
import { ZipCodeValidator } from './ZipCodeValidator'
import { LettersOnlyValidator } from './LettersOnlyValidator'

// Несколько тестовых примеров
let strings = ['Hello', '98052', '101']

// Валидаторы
let validators: { [s: string]: StringValidator } = {}
validators['ZIP code'] = new ZipCodeValidator()
validators['Letters only'] = new LettersOnlyValidator()

// Для каждой строки показывает, прошла ли она каждый валидатор
strings.forEach(s => {
  for (let name in validators) {
    console.log(`"${s}" - ${validators[name].isAcceptable(s) ? 'matches' : 'does not match'} ${name}`)
  }
})
```

## Опциональная загрузка модулей и её другие продвинутые сценарии

В некоторых случаях может потребоваться загрузить модуль только при определённых условиях.
В TypeScript возможно использовать приведённый ниже пример, чтобы применить данную или иную продвинутую технику загрузки модулей. Этот приём может использоваться для непосредственного вызова загрузчиков модулей без потери типобезопасности.

Компилятор для каждого модуля определяет, используется ли он в генерируемом JavaScript.
Если идентификатор модуля есть только в описаниях типа и никогда в выражениях, тогда для этого модуля не будет сгенерирован вызов `require`.
Такое пропускание неиспользуемых ссылок улучшает производительность, а также позволяет организовать опциональную загрузку модулей.

Основная идея примера заключается в том, что команда `import id = require("...")` даёт доступ к типам, раскрываемым данным модулем.
Как показано в блоке `if` ниже, загрузчик модуля вызывается динамически (с помощью `require`).
Таким образом применяется оптимизация пропуска неиспользуемых ссылок, что приводит к загрузке модуля только тогда, когда он нужен.
Чтобы данный приём сработал, необходимо, чтобы идентификатор, определённый с помощью `import`, использовался только в описании типа (т.е. никогда в таком месте кода, которое попадёт в итоговый JavaScript).

Для поддержки типобезопасности используется ключевое слово `typeof`.
Ключевое слово `typeof`, при использовании его в описании типа, создаёт тип значения (тип модуля в данном случае).

**Динамическая загрузка модулей в Node.js**

```ts
declare function require(moduleName: string): any

import { ZipCodeValidator as Zip } from './ZipCodeValidator'

if (needZipValidation) {
  let ZipCodeValidator: typeof Zip = require('./ZipCodeValidator')
  let validator = new ZipCodeValidator()
  if (validator.isAcceptable('...')) {
    /* ... */
  }
}
```

**Пример: динамическая загрузка модулей в require.js**

```ts
declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void

import { ZipCodeValidator as Zip } from './ZipCodeValidator'

if (needZipValidation) {
  require(['./ZipCodeValidator'], (ZipCodeValidator: typeof Zip) => {
    let validator = new ZipCodeValidator()
    if (validator.isAcceptable('...')) {
      /* ... */
    }
  })
}
```

**Пример: Динамическая загрузка модулей в System.js**

```ts
declare const System: any

import { ZipCodeValidator as Zip } from './ZipCodeValidator'

if (needZipValidation) {
  System.import('./ZipCodeValidator').then((ZipCodeValidator: typeof Zip) => {
    var x = new ZipCodeValidator()
    if (x.isAcceptable('...')) {
      /* ... */
    }
  })
}
```

## Работа с другими библиотеками JavaScript

Чтобы описать библиотеку, написанную не на TypeScript, необходимо объявить API, предоставляемый этой библиотекой.

Мы называем объявления, которые не определяют реализации, "внешними" (ambient).
Обычно они задаются в файлах `.d.ts`.
Если вы знакомы с C/C++, можете воспринимать их как заголовочные файлы `.h`.
Давайте посмотрим на несколько примеров.

### Внешние модули

В Node.js, большинство задач выполняется с помощью загрузки одного или нескольких модулей.
Мы могли бы определить каждый модуль в его собственном файле `.d.ts` в объявлениями экспорта верхнего уровня, но гораздо удобнее поместить определения всех модулей в одном общем файле `.d.ts`.
Чтобы это сделать, используйте конструкцию, похожую на внешние пространства имён. В ней используется ключевое слово `module` и заключенное в кавычки имя модуля, которое будет доступно для дальнейшего импорта.
Например:

**node.d.ts (упрощенный отрывок)**

```ts
declare module 'url' {
  export interface Url {
    protocol?: string
    hostname?: string
    pathname?: string
  }

  export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url
}

declare module 'path' {
  export function normalize(p: string): string
  export function join(...paths: any[]): string
  export var sep: string
}
```

Теперь мы можем указать `/// <reference>` `node.d.ts` и загрузить модули с помощью `import url = require("url");`.

```ts
/// <reference path="node.d.ts"/>
import * as URL from 'url'
let myUrl = URL.parse('http://www.typescriptlang.org')
```

#### Сокращенная запись объявления внешних модулей

Если вы не хотите тратить время на написание объявлений до начала использования нового модуля, можно воспользоваться сокращенным объявлением.

**declarations.d.ts**

```ts
declare module 'hot-new-module'
```

Все импортируемые элементы такого модуля будут иметь тип `any`.

```ts
import x, { y } from 'hot-new-module'
x(y)
```

#### Объявления модулей с использованием знаков подстановки

Некоторые загрузчики модулей, такие как [SystemJS](https://github.com/systemjs/systemjs/blob/master/docs/overview.html#plugin-syntax)
и [AMD](https://github.com/amdjs/amdjs-api/blob/master/LoaderPlugins.html), позволяют импортировать контент, отличный от JavaScript.
В таких случаях обычно используется префикс или суффикс, чтобы обозначить специальную семантику загрузки.
Объявления модулей с использованием знаков подстановки могут использоваться для организации загрузок такого типа.

```ts
declare module '*!text' {
  const content: string
  export default content
}
// Некоторые делают это иначе
declare module 'json!*' {
  const value: any
  export default value
}
```

Теперь можно импортировать элементы, совпадающие с `"*!text"` или `"json!*"`.

```ts
import fileContent from './xyz.txt!text'
import data from 'json!http://example.com/data.json'
console.log(data, fileContent)
```

#### Модули UMD

Некоторые библиотеки созданы таким образом, чтобы использоваться со многими загрузчиками модулей или без загрузчиков вообще (глобальные переменные).
Их называют [UMD](https://github.com/umdjs/umd) или [изоморфными (Isomorphic)](http://isomorphic.net) модулями.
Такие библиотеки можно подключить и с помощью импорта, и как глобальную переменную.
Например:

**math-lib.d.ts**

```ts
export const isPrime(x: number): boolean;
export as namespace mathLib;
```

Эту библиотеку можно подключить внутри модуля с помощью импорта:

```ts
import { isPrime } from 'math-lib'
isPrime(2)
mathLib.isPrime(2) // Ошибка: невозможно использовать глобальное определение внутри модуля
```

Также эту библиотеку можно подключить как глобальную переменную, но это возможно сделать только внутри скрипта.
(Скрипт — это файл без команд импорта и экспорта.)

```ts
mathLib.isPrime(2)
```

## Руководство по структурированию модулей

### Экспортируйте настолько близко к верхнему уровню, насколько это возможно

Чем меньше будет у пользователей модуля проблем с использованием экспортированных элементов, тем лучше.
Добавление уровней вложенности делает модуль более громоздким, поэтому необходимо тщательно обдумывать его структуру.

Экспорт из модуля пространства имён как раз является примером добавления лишнего уровня вложенности.
Несмотря на то, что пространства имён бывают полезны, они добавляют в модули ещё один уровень абстракции, что очень скоро может привести к проблемам для пользователей, и обычно не нужно.

Статические методы экспортируемых классов вызывают сходные проблемы, так как класс сам по себе добавляет уровень вложенности.
Допустимо пойти на это в том случае, если вы точно знаете, что делаете, и введение дополнительного уровня вложенности добавит выразительности и ясно отразит назначение модуля. В противном случае рекомендуется использовать вспомогательные функции (helper function).

#### Если вы экспортируете только один `class` или одну `function`, используйте `export default`

Аналогично "экспорту максимально близко к верхнему уровню", использование экспорта по умолчанию (default export) облегчает жизнь пользователям вашего модуля.
Если основной задачей модуля является размещение и экспортирование одного специфического элемента, то необходимо всерьез рассмотреть использование экспорта по умолчанию.
Такой подход делает и саму процедуру импорта, и использование импортированных элементов немного проще.
Например:

**MyClass.ts**

```ts
export default class SomeType {
  constructor() { ... }
}
```

**MyFunc.ts**

```ts
export default function getThing() {
  return 'thing'
}
```

**Consumer.ts**

```ts
import t from './MyClass'
import f from './MyFunc'
let x = new t()
console.log(f())
```

Такой подход оптимален для пользователей модуля. Они могут дать вашему типу наиболее удобное для них наименование (`t` в данном случае) и будут избавлены от лишнего обращения «через точку» для поиска ваших объектов.

#### Если вы экспортируете несколько объектов, поместите их на верхний уровень

**MyThings.ts**

```ts
export class SomeType {
  /* ... */
}
export function someFunc() {
  /* ... */
}
```

Соответственно при импорте:

#### Явно определяйте импортированные имена

**Consumer.ts**

```ts
import { SomeType, someFunc } from './MyThings'
let x = new SomeType()
let y = someFunc()
```

#### Используйте шаблон импорта пространства имен в случае импорта большого количества элементов

**MyLargeModule.ts**

```ts
export class Dog { ... }
export class Cat { ... }
export class Tree { ... }
export class Flower { ... }
```

**Consumer.ts**

```ts
import * as myLargeModule from './MyLargeModule.ts'
let x = new myLargeModule.Dog()
```

### Ре-экспорт с целью расширения функционала

Зачастую бывает необходимо расширить функциональность модуля.
В JavaScript наиболее распространён метод дополнения исходного объекта _расширениями_ (extensions), аналогично тому, как работает JQuery.
Как было упомянуто ранее, модули не _сливаются_ подобно объектам глобальных пространств имён.
Рекомендуется не изменять исходный объект, а экспортировать новый элемент, предоставляющий новую функциональность.

Давайте рассмотрим реализацию простого калькулятора, созданную в виде модуля `Calculator.ts`.
Из модуля также экспортируется вспомогательная функция, предназначенная для тестирования функциональности калькулятора путём передачи списка входных строк и записи результата.

**Calculator.ts**

```ts
export class Calculator {
  private current = 0
  private memory = 0
  private operator: string

  protected processDigit(digit: string, currentValue: number) {
    if (digit >= '0' && digit <= '9') {
      return currentValue * 10 + (digit.charCodeAt(0) - '0'.charCodeAt(0))
    }
  }

  protected processOperator(operator: string) {
    if (['+', '-', '*', '/'].indexOf(operator) >= 0) {
      return operator
    }
  }

  protected evaluateOperator(operator: string, left: number, right: number): number {
    switch (this.operator) {
      case '+':
        return left + right
      case '-':
        return left - right
      case '*':
        return left * right
      case '/':
        return left / right
    }
  }

  private evaluate() {
    if (this.operator) {
      this.memory = this.evaluateOperator(this.operator, this.memory, this.current)
    } else {
      this.memory = this.current
    }
    this.current = 0
  }

  public handelChar(char: string) {
    if (char === '=') {
      this.evaluate()
      return
    } else {
      let value = this.processDigit(char, this.current)
      if (value !== undefined) {
        this.current = value
        return
      } else {
        let value = this.processOperator(char)
        if (value !== undefined) {
          this.evaluate()
          this.operator = value
          return
        }
      }
    }
    throw new Error(`Unsupported input: '${char}'`)
  }

  public getResult() {
    return this.memory
  }
}

export function test(c: Calculator, input: string) {
  for (let i = 0; i < input.length; i++) {
    c.handelChar(input[i])
  }

  console.log(`result of '${input}' is '${c.getResult()}'`)
}
```

Ниже приведён простой тест калькулятора с использованием экспортированной функции `test`.

**TestCalculator.ts**

```ts
import { Calculator, test } from './Calculator'

let c = new Calculator()
test(c, '1+2*33/11=') // выведет 9
```

Давайте создадим `ProgrammerCalculator.ts`, который расширяет исходный калькулятор возможностью работы с числами в системах счисления, отличных от десятичной.

**ProgrammerCalculator.ts**

```ts
import { Calculator } from './Calculator'

class ProgrammerCalculator extends Calculator {
  static digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

  constructor(public base: number) {
    super()
    if (base <= 0 || base > ProgrammerCalculator.digits.length) {
      throw new Error('base has to be within 0 to 16 inclusive.')
    }
  }

  protected processDigit(digit: string, currentValue: number) {
    if (ProgrammerCalculator.digits.indexOf(digit) >= 0) {
      return currentValue * this.base + ProgrammerCalculator.digits.indexOf(digit)
    }
  }
}

// Экспорт нового расширенного калькулятора как 'Calculator'
export { ProgrammerCalculator as Calculator }

// Экспорт вспомогательной функции
export { test } from './Calculator'
```

Новый модуль `ProgrammerCalculator` экспортирует такой же API, что и исходный модуль `Calculator`, но при этом не изменяет в нём ни одного объекта.
Ниже приведён тест класса 'ProgrammerCalculator':

**TestProgrammerCalculator.ts**

```ts
import { Calculator, test } from './ProgrammerCalculator'

let c = new Calculator(2)
test(c, '001+010=') // выведет 3
```

### Не используйте в модулях пространства имён

Когда программисты только начинают использовать организацию кода с помощью модулей, они часто размещают экспортируемые элементы в пространствах имён, создавая таким образом дополнительные уровни вложенности.
Но у модулей есть своя собственная область видимости, и извне видны только экспортированные элементы.
Поэтому пространства имён не способны принести ощутимую пользу при работе с модулями.

Пространства имён удобны для группировки логически связанных объектов и типов глобальной области видимости, что удобно для организации кода.
Например в C#, все коллекционные типы можно найти в System.Collections.
Организуя типы в иерархии пространств имён, мы облегчаем пользователям их поиск.
Модули, напротив, в любом случае уже существуют в виде файлов.
Мы находим их по пути и имени файла, соответственно, их логическая организация уже присутствует.
Можно создать директорию /collections/generic/, содержащую списочный модуль.

Пространства имён являются важным инструментом для предотвращения конфликтов имён.
Например, у вас могут быть `My.Application.Customer.AddForm` и `My.Application.Order.AddForm` — два типа с один именем, но разными пространствами имен.
А с модулями такой проблемы не будет.
Нет серьёзных оснований для создания двух объектов с одинаковым именем внутри модуля.
С точки зрения пользователя, он может выбрать любое имя для импортируемого модуля, поэтому случайные конфликты имен невозможны.

> Более подробная информация о пространствах имен и модулях [Namespaces and Modules](./Namespaces and Modules.html).

### Индикаторы опасности

Ниже приведен список тревожных признаков, касающихся структурирования модулей. Лишний раз убедитесь, что вы не пытаетесь создавать пространства имен для ваших внешних модулей, если любое из следующих утверждений относится к вашей ситуации:

- Файл содержит единственное объявление верхнего уровня `export namespace Foo { ... }` (уберите `Foo` и переместите всё на уровень выше)
- Файл содержит единственный экземпляр `export class` или `export function` (рассмотрите возможность использования `export default`)
- Несколько файлов содержат идентичное `export namespace Foo {` на верхнем уровне (не рассчитывайте на то, что все они соединятся в одно пространство имён `Foo`!)

## Ссылки

- [Модули](http://typescript-lang.ru/docs/Modules.html)
