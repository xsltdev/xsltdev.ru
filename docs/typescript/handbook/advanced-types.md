---
layout: default
title: Продвинутые типы
nav_order: 10
parent: Справочник Typescript
---

<!-- prettier-ignore-start -->
# Продвинутые типы
{: .no_toc }
<!-- prettier-ignore-end -->

<!-- prettier-ignore -->
1. TOC
{:toc}

## Тип объединение

Иногда Вы будете работать с функцией, ожидающей параметр типа `number` или `string`.
Например, возьмём следующую функцию:

```ts
/**
 * Принимает строку и добавляет содержимое "padding" в левую сторону выражения.
 * Если 'padding' - строка, тогда 'padding' добавляется в левую сторону 'value'.
 * Если 'padding' - число, тогда соответствующее число пробелов добавляется в левую сторону 'value'.
 */
function padLeft(value: string, padding: any) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Ожидал строку или число, а получил '${padding}'.`)
}

padLeft('Hello world', 4) // возвращает "    Hello world"
```

Проблема с функцией `padLeft` в том, что тип параметра `padding` взят как `any`.
Это означает, что мы можем вызвать его с параметрами, не являющимися `number` и `string`, на что TypeScript не выведет никаких ошибок.

```ts
let indentedString = padLeft('Hello world', true) // проходит во время компиляции, но не выполнится во время выполнения.
```

В традиционном объектно-ориентированном коде мы могли бы абстрагироваться над двумя типами созданием иерархии типов.
Несмотря на то, что это кажется гораздо более явным, это также немного выходит за рамки дозволенного.
Одним из хороших черт оригинальной версии `padLeft` была возможность передавать только примитивы.
Это значит, что использование было простым и не слишком многословным.
Новый подход также не помог бы при попытке использовать функцию, которая уже существует где-то.

Вместо `any` мы можем использовать _тип объединение_ для параметра `padding`:

```ts
/**
 * Принимает строку и добавляет содержимое "padding" в левую сторону выражения.
 * Если 'padding' - строка, тогда 'padding' добавляется в левую сторону.
 * Если 'padding' - число, тогда соответствующее число пробелов добавляется в левую сторону.
 */
function padLeft(value: string, padding: string | number) {
  // ...
}

let indentedString = padLeft('Hello world', true) // выведет ошибки во время компиляции
```

Тип объединение описывает значение, которое может быть одним из нескольких типов.
Мы используем вертикальную черту (`|`), чтобы отделить каждый тип, так, `number | string | boolean` - это тип значения, который может быть числом `number`, строкой `string` или булевым `boolean`.

Если у нас есть значение типа объединения, мы можем получить доступ только к тем его элементам, которые являются общими для всех типов в объединении.

```ts
interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet()
pet.layEggs() // ок
pet.swim() // ошибка
```

Тип объединение может быть немного запутан, потребуется немного интуиции, чтобы привыкнуть.
Если значение имеет тип `A | B`, мы знаем только то, что оно имеет только те элементы, которые имеют оба `A` _и_ `B`.
В этом примере `Bird` имеет элемент именованный `fly`.
Мы не можем быть уверены в том, есть ли у переменной, имеющей тип `Bird | Fish`, метод `fly`.
Если переменная во время выполнения на самом деле является `Fish`, тогда вызов `pet.fly()` не выполнится.

## Защитники типа и различие типов

Типы объединения полезны для моделирования ситуаций, когда значения могут совпасть в типах, которые они могут приобрести.
Что случится, когда нам необходимо узнать: у нас переменная типа `Fish`?
Обычная идиома в JavaScript для различия между двумя возможными значениями - это проверка на присутствие элемента.
Как мы уже упоминали, Вы можете получить доступ только к элементам, которые гарантированно будут во всех составляющих типа объединения.

```ts
let pet = getSmallPet()

// Каждый доступ к свойству приведёт к ошибке
if (pet.swim) {
  pet.swim()
} else if (pet.fly) {
  pet.fly()
}
```

Чтобы этот код работал, нам нужно воспользоваться утверждением типа (type assertion)

```ts
let pet = getSmallPet()

if ((<Fish>pet).swim) {
  ;(<Fish>pet).swim()
} else {
  ;(<Bird>pet).fly()
}
```

### Определённые Пользователем Защитники Типа

Заметьте, что мы должны были использовать утверждения типов несколько раз.
Было бы намного лучше, если бы после выполнения проверки мы могли бы знать тип `pet` внутри каждого ответвления.

Так получилось, что у TypeScript есть что-то, что называется _защитник типа_.
Защитник типа - это некоторое выражение, выполняющее проверку во время выполнения, гарантирующий тип в некоторой области.
Чтобы определить защитник типа, нужно просто определить функцию, чей тип возврата является _предикатом типа_:

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}
```

`pet is Fish` - это предикат типа.
Предикат принимает форму `parameterName is Type`, где `parameterName` - имя параметра из текущей сигнатуры функции.

Всякий раз, когда с некоторой переменной вызывается `isFish`, TypeScript _ограничивает_ эту переменную в специфический тип, при условии, что оригинальный тип совместим.

```ts
// Оба вызова, 'swim' и 'fly', теперь в порядке.

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}
```

Заметьте, что TypeScript не только знает, что `pet` это `Fish` в `if` ветви;
он также знает, что в ветви `else` у Вас _не_ `Fish`, так что у Вас должно быть так: `pet` - это `Bird`.

### Защитники типа `typeof`

В действительности мы не обсуждали реализацию версии `padLeft`, использовавшую тип объединение.
Мы могли бы записать его с предикатами типа как следующее:

```ts
function isNumber(x: any): x is number {
  return typeof x === 'number'
}

function isString(x: any): x is string {
  return typeof x === 'string'
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value
  }
  if (isString(padding)) {
    return padding + value
  }
  throw new Error(`Ожидал строку или число, а получил '${padding}'.`)
}
```

Однако, имея необходимость определить функцию для выяснения примитивности типа - это боль.
К счастью, Вам не обязательно абстрагировать `typeof x === "number"` в свою собственную функцию, потому что TypeScript распознает его как защитник типа самостоятельно.
Это означает, что мы могли просто встроить эти проверки.

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Ожидал строку или число, а получил '${padding}'.`)
}
```

Эти _`typeof` защитники типа_ распознаются в двух различных формах: `typeof v === "typename"` и `typeof v !== "typename"`, где `"typename"` - это `"number"`, `"string"`, `"boolean"`, или `"symbol"`.
В то время как TypeScript не запрещает сравнение с другими строками или переключение двух сторон сравнения, язык не будет признавать эти формы как защитники типа.

### Защитники типа `instanceof`

Если вы читали о защитнике типа `typeof` и знакомы с оператором `instanceof` в JavaScript, у Вас, вероятно, есть представление о чём этот раздел.

_Защитники типа `instanceof`_ - это способ ограничения типов используя их функцию-конструктор.
Например, давайте возьмём наш ранее введенный пример:

```ts
interface Padder {
  getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(' ')
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value
  }
}

function getRandomPadder() {
  return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('  ')
}

// Тип - 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder()

if (padder instanceof SpaceRepeatingPadder) {
  padder // type narrowed to 'SpaceRepeatingPadder'
  padder // тип ограничен к 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  padder // type narrowed to 'StringPadder'
  padder // тип ограничен к 'StringPadder'
}
```

Правая сторона `instanceof` должна быть функцией-конструктором, и TypeScript ограничит к:

1. типу свойства `prototype` функции, если его тип не `any`
2. объединению типов, возвращёнными констрами типов

в этом порядке.

## Типы пересечения

Типы пересечения тесно связаны с типами объединения, но они используются очень по-разному.
Тип пересечения, `Person & Serializable & Loggable`, например, это `Person` _и_ `Serializable` _и_ `Loggable`.
Это означает, что у объекта этого типа будут все элементы всех трёх типов.
На практике Вы в большинстве случаев увидите типы перечисления, использованных для миксинов.
Дальше простой пример миксина:

```ts
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
    ;(<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      ;(<any>result)[id] = (<any>second)[id]
    }
  }
  return result
}

class Person {
  constructor(public name: string) {}
}
interface Loggable {
  log(): void
}
class ConsoleLogger implements Loggable {
  log() {
    // ...
  }
}
var jim = extend(new Person('Jim'), new ConsoleLogger())
var n = jim.name
jim.log()
```

## Псевдонимы("Alias") типа

Псевдонимы типа создают новое имя для типа.
Псевдонимы типа иногда похожи на интерфейсы, но могут именовать примитивы, объединения, кортежи и любые другие типы, которые в противном случае Вам пришлось бы именовать вручную.

```ts
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
```

Псевдоним на самом деле не создаёт новый тип, а создает новое _имя_, чтобы сослаться к тому типу.
Псевдоним примитива не очень полезен, хотя его можно использовать как форму документации.

Так же, как интерфейсы, Псевдонимы типа могут быть универсальными - мы можем просто добавить параметры типа и использовать их с правой стороны объявления Псевдонима:

```ts
type Container<T> = { value: T }
```

У нас также может быть Псевдоним типа, имеющий ссылку на себя:

```ts
type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}
```

Вместе с типами пересечения мы можем сделать некоторые довольно галлюциногенные типы:

```ts
type LinkedList<T> = T & { next: LinkedList<T> }

interface Person {
  name: string
}

var people: LinkedList<Person>
var s = people.name
var s = people.next.name
var s = people.next.next.name
var s = people.next.next.next.name
```

Однако, у типа Псевдонима нет возможности появится с правой стороны объявления:

```ts
type Yikes = Array<Yikes> // ошибка
```

### Интерфейс vs. Тип Псевдоним

Как мы уже упоминали, тип Псевдоним может действовать как интерфейс; однако, существуют некоторые тонкие различия.

Одно важное различие в том, что от типа Псевдонима невозможно расшириться или реализоваться (к тому же, они не могут расширить/реализовать другие типы). Из-за того, что [идеальное свойство программного обеспечения - быть открытым расширению](https://ru.wikipedia.org/wiki/Принцип_открытости/закрытости), при возможности Вы всегда должны использовать интерфейс, чем тип Псевдоним.

С другой стороны, если Вы не можете выразить некоторую форму интерфейсом и Вам нужно использовать тип объединения или кортеж, тогда тип Псевдоним - тоже способ.

## Тип строкового литерала

Тип строкового литерала позволяет Вам указывать точное значение строки, которое она должна иметь.
На практике тип строкового литерала хорошо комбинируется с типом объединения, защитниками типа и типом Псевдонима.
Вы можете использовать эти функции вместе, чтобы получить поведение со строками как у перечисления.

```ts
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // ...
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    } else {
      // ошибка! null или undefined не должно передаваться.
    }
  }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy') // ошибка: "uneasy" не допускается
```

Вы можете передать любые из трёх разрешённых строк, но любая другая строка даст ошибку

```text
Аргумент типа '"uneasy"' не может быть назначен параметром типа '"ease-in" | "ease-out" | "ease-in-out"'
```

Типы строкового литерала могут быть использованы тем же способом, чтобы различить перегрузки:

```ts
function createElement(tagName: 'img'): HTMLImageElement
function createElement(tagName: 'input'): HTMLInputElement
// ... больше перегрузок ...
function createElement(tagName: string): Element {
  // ... код ...
}
```

## Полиморфный тип `this`

Полиморфный тип `this` представляет тип, являющийся _подтипом_ содержащегося класса или интерфейса.
Называется _F_-bounded полиморфизмом.
И позволяет намного легче выразить иерархически плавающие интерфейсы, например.
Возьмём простой калькулятор, возвращающий `this` после каждой операции:

```ts
class BasicCalculator {
  public constructor(protected value: number = 0) {}
  public currentValue(): number {
    return this.value
  }
  public add(operand: number): this {
    this.value += operand
    return this
  }
  public multiply(operand: number): this {
    this.value *= operand
    return this
  }
  // ... другие операции ...
}

let v = new BasicCalculator(2)
  .multiply(5)
  .add(1)
  .currentValue()
```

Поскольку класс использует тип `this`, Вы можете расширить его (унаследоваться от него), и тогда новый класс сможет использовать старые методы без изменений.

```ts
class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
    super(value)
  }
  public sin() {
    this.value = Math.sin(this.value)
    return this
  }
  // ... другие операции ...
}

let v = new ScientificCalculator(2)
  .multiply(5)
  .sin()
  .add(1)
  .currentValue()
```

Без типа `this` класс `ScientificCalculator` не смог бы расширить (унаследовать) `BasicCalculator` и сохранить плавающий интерфейс.
`multiply` возвратил бы `BasicCalculator`, который не имеет метода `sin`.
Однако, с типом `this` метод `multiply` возвращает `this`, являющимся `ScientificCalculator`.

## Ссылки

- [Продвинутые типы](http://typescript-lang.ru/docs/Advanced%20Types.html)
