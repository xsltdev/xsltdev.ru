# Пространства имен

> **Замечание по поводу терминологии:**
> Важно отметить, что в TypeScript 1.5 изменилась номенклатура.
> "Внутренние модули" теперь называются "пространства имён".
> "Внешние модули" стали просто "модулями", чтобы согласовать терминологию с [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/), (а именно: `module X {` эквивалентен предпочитаемому в настоящее время `namespace X {`).

## Введение

Данный раздел документации описывает различные пути организации вашего кода в TypeScript с помощью пространств имён (бывш. "внутренние модули").
Согласно замечанию о терминологии, "внутренние модули" теперь называются "пространства имён".
В дополнение к этому, везде, где раньше для декларирования внутреннего модуля использовалось ключевое слово `module`, теперь вместо него должно быть использовано ключевое слово `namespace`.
Это позволяет упростить жизнь новым пользователям, не перегружая их терминами с похожими названиями.

## Первые шаги

Давайте начнём с программы, которую мы будем использовать в этом разделе документации в качестве примера.
Мы написали несколько простых валидаторов строк, которые могут использоваться для проверки ввода пользователя на форме веб-страницы или для проверки формата стороннего файла с данными.

### Валидаторы в одиночном файле

```ts
interface StringValidator {
  isAcceptable(s: string): boolean
}

let lettersRegexp = /^[A-Za-z]+$/
let numberRegexp = /^[0-9]+$/

class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s)
  }
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}

// Несколько тестовых примеров
let strings = ['Hello', '98052', '101']

// Валидаторы
let validators: { [s: string]: StringValidator } = {}
validators['ZIP code'] = new ZipCodeValidator()
validators['Letters only'] = new LettersOnlyValidator()

// Для каждой строки показывает, прошла ли она каждый валидатор
for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s)
    console.log(`'${s}' ${isMatch ? 'соответствует' : 'не соответствует'} '${name}'.`)
  }
}
```

## Использование пространств имён

Поскольку мы добавляем больше валидаторов, нам понадобится какая-нибудь организационная схема, которая позволит отслеживать наши типы и не беспокоиться по поводу пересечений с именами других объектов.
Вместо того, чтобы помещать множество различных идентификаторов в глобальное пространство имён, давайте обернём наши объекты в новое.

В данном примере мы перенесём все элементы, связанные с валидаторами, в пространство имён `Validation`.
Поскольку мы хотим, чтобы наши интерфейсы и классы были доступны извне, мы поместим перед ними ключевое слово `export`.
Напротив, переменные `lettersRegexp` и `numberRegexp` - лишь детали данной реализации, поэтому они не экспортируются и не будут видимы вне своего пространства имён.
В коде тестового примера в конце файла нам нужно определить имена типов в том виде, в котором они будут использоваться вне нашего пространства имён, например `Validation.LettersOnlyValidator`.

### Валидаторы внутри пространства имён

```ts
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }

  const lettersRegexp = /^[A-Za-z]+$/
  const numberRegexp = /^[0-9]+$/

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s)
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}

// Несколько тестовых примеров
let strings = ['Hello', '98052', '101']

// Валидаторы
let validators: { [s: string]: Validation.StringValidator } = {}
validators['ZIP code'] = new Validation.ZipCodeValidator()
validators['Letters only'] = new Validation.LettersOnlyValidator()

// Для каждой строки показывает, прошла ли она каждый валидатор
for (let s of strings) {
  for (var name in validators) {
    console.log(`"${s}" - ${validators[name].isAcceptable(s) ? 'соответствует' : 'не соответствует'} ${name}`)
  }
}
```

## Разбиение на несколько файлов

По мере роста нашего приложения мы захотим разбить код на насколько файлов, чтобы облегчить его поддержку.

### Многофайловые пространства имён

Здесь мы разобьём пространство имён `Validation` на несколько файлов.
Несмотря на то, что код находится в разных файлах, он может относиться к одному пространству имён и воспринимается также, как если бы он был расположен в одном месте.
Поскольку между файлами есть зависимости, мы добавим ссылочные теги, чтобы указать компилятору на связи между файлами.
В остальном наш тестовый код не изменится.

**Validation.ts**

```ts
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }
}
```

**LettersOnlyValidator.ts**

```ts
/// <reference path="Validation.ts" />
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s)
    }
  }
}
```

**ZipCodeValidator.ts**

```ts
/// <reference path="Validation.ts" />
namespace Validation {
  const numberRegexp = /^[0-9]+$/
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}
```

**Test.ts**

```ts
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Несколько тестовых примеров
let strings = ["Hello", "98052", "101"];

// Валидаторы
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Для каждой строки показывает, прошла ли она каждый валидатор
for (let s of strings) {
    for (let name in validators) {
        console.log(""" + s + "" " + (validators[name].isAcceptable(s) ? " соответствует " : " не соответствует ") + name);
    }
}
```

Поскольку здесь используется несколько файлов, необходимо убедиться, что загружен весь компилируемый код.
Это можно сделать двумя способами.

Во-первых, мы можем использовать объединённый вывод с помощью флага `--outFile`, который позволяет скомпилировать все входные файлы в один выходной JavaScript:

```Shell
tsc --outFile sample.js Test.ts
```

Компилятор автоматически упорядочит выходной файл на основе ссылочных тегов, находящихся в файлах. Вы также можете напрямую указать каждый файл:

```Shell
tsc --outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts
```

Кроме того, можно использовать пофайловую компиляцию (по умолчанию), при которой на каждый входной файл генерируется отдельный файл JavaScript.
Если на выходе получается несколько JS-файлов, на веб-странице необходимо использовать тег `<script>`, чтобы загрузить сгенерированные файлы в правильном порядке. Например:

**MyTestPage.html (отрывок)**

```ts
    <script src="Validation.js" type="text/javascript" />
    <script src="LettersOnlyValidator.js" type="text/javascript" />
    <script src="ZipCodeValidator.js" type="text/javascript" />
    <script src="Test.js" type="text/javascript" />
```

## Псевдонимы

Другим способом упрощения работы с пространствами имён является использование `import q = x.y.z`, с помощью которого можно создать короткие имена для постоянно используемых объектов.
Таким образом просто создаётся псевдоним для указанных символов, и его не нужно путать с конструкцией `import x = require("name")`, используемой для загрузки модулей.
Вы можете использовать эти типы импорта (обычно называемые псевдонимами) для любых видов идентификаторов, включая объекты, созданные в результате обработки директив импорта модуля.

```ts
namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import polygons = Shapes.Polygons
let sq = new polygons.Square() // То же, что и 'new Shapes.Polygons.Square()'
```

Обратите внимание на то, что мы не используем ключевое слово `require`. Вместо этого мы присваиваем напрямую от уточнённого имени импортируемого идентификатора.
Это похоже на использование `var`, но также работает со значениями типов и пространств имён импортируемых идентификаторов.
Важно отметить, что `import` - это отдельная ссылка, так что изменения псевдонима от `var` не отразятся на исходной переменной.

## Работа с другими библиотеками JavaScript

Чтобы подключить написанную не на TypeScript библиотеку, необходимо объявить API этой библиотеки.
По той причине, что большинство библиотек JavaScript предоставляют доступ только к нескольким объектам верхнего уровня, для их представления хорошо подходят пространства имён.

Мы называем объявления, которые не определяют реализации, "внешними".
Обычно они задаются в файлах `.d.ts`.
Если вы знакомы с C/C++, вы можете воспринимать их как заголовочные файлы `.h`.
Давайте посмотрим на несколько примеров.

### Внешние пространства имён

Популярная библиотека D3 определяет свою функциональность во внешнем объекте, называемом `d3`.
Поскольку эта библиотека загружается с помощью тега `<script>` (вместо загрузчика модулей), для её подключения используются пространства имён.
Чтобы компилятор TypeScript мог увидеть эту библиотеку, мы используем определение внешнего пространства имён.
Например, мы можем начать писать код следующим образом:

**D3.d.ts (упрощённый отрывок)**

```ts
declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection
      (element: EventTarget): Selection
    }
  }

  export interface Event {
    x: number
    y: number
  }

  export interface Base extends Selectors {
    event: Event
  }
}

declare var d3: D3.Base
```

## Ссылки

- [Пространства имен](http://typescript-lang.ru/docs/Namespaces.html)
