---
layout: default
title: Модули
nav_order: 2
parent: Модули и пространства имен
grand_parent: Руководство по Typescript
---

<!-- prettier-ignore-start -->
# Модули
{: .no_toc }
<!-- prettier-ignore-end -->

<!-- prettier-ignore -->
1. TOC
{:toc}

TypeScript поддерживает работу с модулями. Модули являются концепцией, привнесенной стандартом ES2015, однако в современных браузерах нативная поддержка модулей еще не реализована.

Модули в некотором смысле похожи на пространства имен: они могут заключать различные классы, интерфейсы, функции, объекты. Модули выделяются в отдельные файлы, что позволяет сделать код приложения более ясным и чистым, и в то же время позволяет использовать модули в других приложения. При этом модули подключаются в приложение не посредством тега [`<script>`](../../html/script.md), а с помощью загрузчика модулей.

Все модули имеют определенный формат и относятся к определенной системе. Всего мы можем использовать 5 различных систем модулей:

- AMD (Asynchronys Module Defenition)
- CommonJS
- UMD (Universal Module Defenition)
- System
- ES 2015

При компиляции из командной строки или терминала для установки модуля необходимо передать соответствующее значение параметру `--module`:

```bash
tsc --module commonjs main.ts // для CommonJS
tsc --module amd main.ts // для AMD
tsc --module umd main.ts // для UMD
tsc --module system main.ts // для SytemJS
```

А для загрузки модулей можно выбрать один из следующих загрузчиков:

- **RequireJS**: RequireJS использует синтаксис, известный как асинхронное определение модуля или asynchronous module definition(AMD)
- **Browserify**: использует синтаксис CommonJS
- **SystemJS**: универсальный загрузчик, может применяться для модулей любого типа

## Определение модуля и экспорт

Пусть у нас будет в проекте файл `devices.ts`:

```typescript
export interface Device {
  name: string
}

export class Phone implements Device {
  name: string
  constructor(n: string) {
    this.name = n
  }
}

export function Call(phone: Phone): void {
  console.log('Make a call by', phone.name)
}
```

Чтобы классы, интерфейсы, функции были видны извне, они определяются с ключевым словом `export`.

Но мы могли бы и по другому экспортировать все сущности:

```typescript
interface Device {
  name: string
}

class Phone implements Device {
  name: string
  constructor(n: string) {
    this.name = n
  }
}

function Call(phone: Phone): void {
  console.log('Make a call by', phone.name)
}

export { Device, Phone, Call as Devices }
```

При экспорте можно определить псевдоним для типа с помощью ключевого слова `as`. Это имя затем может применяться при импорта класса.

## Импорт

Чтобы задействовать модуль в приложении, его надо импортировать с помощью оператора `import`. Например, импортируем класс `Phone` и функцию `Call` из выше определенного модуля `devices.ts`:

```typescript
import { Phone, Call } from './devices'
let iphone: Phone = new Phone('iPhone X')
Call(iphone)
```

После слова `import` определяется набор импортируемых типов - класов, интерфейсов, функций, объектов. А после слова `from` указывается путь к модулю. В данном случае модуль располагается в файле `devices.ts`, который находится в той же папке, поэтому в начале пути ставится точка и далее указывается название файла без расширения. Если бы модуль располагался бы в папке `lib`, находящеся в текущем каталоге, то название папки также бы включалось в путь к модулю: `./lib/devices`.

Опять же с помощью оператора `as` можно указать псевдоним для типа:

```typescript
import { Phone, Call as makeCall } from './devices'
let iphone: Phone = new Phone('iPhone X')
makeCall(iphone)
```

Можно импортировать сразу весь модуль:

```typescript
import \* as dev from "./devices";
let iphone: devPhone = new dev.Phone("iPhone X");
dev.Call(iphone);
```

В данном случае модуль импортируется через псевдоним `dev`. И, используя этот псевдоним, мы можем обращаться к расположенным в этом модуле типам.

## Экспорт по умолчанию

Параметры экспорта по умолчанию позволяют определить тип, который будет импортироваться из модуля по умолчанию. К примеру, добавим новый модуль `smartwatch.ts`:

```typescript
export default class SmartWatch {
  model: string
}
```

Ключевое слово `default` позволяет установить класс `SmartWatch` в качестве типа по умолчанию. И затем мы можем импортировать его следующим образом:

```typescript
import SmartWatch from './smartwatch'
let iwatch: SmartWatch = new SmartWatch()
```

## Ссылки

- [Модули](https://metanit.com/web/typescript/3.8.php)
