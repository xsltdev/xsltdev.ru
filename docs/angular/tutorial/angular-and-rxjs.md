---
description: RxJS - это библиотека, реализующая принципы реактивного программирования для JavaScript
---

# Angular и RxJS

**RxJS** — это библиотека, реализующая принципы реактивного программирования для JavaScript. Основанная на объектах типа `Observable`, она упрощает написание и контроль асинхронного и событийного кода.

!!! link "Подробно об RxJS"

    [Документация RxJS](../rxjs/about.md)

## Observable

`Observables` обрабатывают любой поток данных: примитивные типы, инициированные пользователем события, ответы сервера на HTTP-запросы, синхронный и асинхронный код.

Именно благодаря всему перечисленному библиотека нашла широкое применение в Angular.

Принцип работы объектов RxJS Observable можно сравнить с push-уведомлениями.

Так, объект выступает в качестве поставщика данных, который имеет обработчики поставляемых данных. Обработчики выполняют роль пользователей, реагирующих на отправку поставщиком данных.

При создании Observable конструктор класса принимает функцию с набором callback-функций в качестве аргумента. В переданной функции описывается логика обработки и возвращения значений.

Объект, принимаемый функцией, реализует интерфейс с тремя методами:

- `next()` — принимает значение, которое будет возвращено функции-обработчику;
- `error()` — принимает значение, возвращаемое функции-обработчику ошибок;
- `complete()` — вызывается для уведомления "подписчиков" об окончании рассылки.

Для обработки поставляемых данных используется метод `subscribe()`, который принимает три функции: `next`, `error` и `complete` — для каждого из методов объекта конструктора.

Создание и использование объекта типа `Observable`.

```ts
const values = new Observable((observer) => {
  observer.next(8)
  observer.next(9)

  const handler = () => {
    console.log('Click detected')
  }

  document.addEventListener('click', handler)

  observer.complete()

  return {
    unsubscribe() {
      console.log('Unsubscribed')
      document.removeEventListener('click', handler)
    },
  }
})

const subscription = values.subscribe(
  (v) => {
    console.log(v)
  },
  (error) => {
    console.log(error)
  },
  () => {
    console.log('Completed')
  }
)

subscription.unsubscribe()
```

Здесь принимаемый функцией объект `observer` сначала используется для передачи значений (метод `next()`), а затем для оповещения всех подписчиков об окончании рассылки (метод `complete()`).

Принимаемая конструктором функция возвращает метод `unsubscribe()`, который вызывается для "ручной" отмены подписки. Обычно используется для освобождения занятых ресурсов (удаление таймеров или обработчиков событий).

Создавать собственные объекты `Observable` приходится не так уж часто, поскольку большинство потенциально необходимого функционала, где можно было бы это применить, реализовано самим Angular.

Для создания, обработки и преобразования возвращаемых данных в RxJS предусмотрены специальные функции, называемые операторами. Например, оператор `of` используется для преобразования примитивных типов в объект `Observable`:

```ts
import { Observable } from 'rxjs'
import { of } from 'rxjs'

const values = of([1, 2, 3])

values.subscribe((value) => {
  console.log(value)
})
```

Оператор `of()` — более краткая запись следующего кода:

```ts
const values = new Observable((observer) => {
  observer.next([1, 2, 3])
})
```

Если необходимо, чтобы обработчик вместо всего массива сразу получал каждый его элемент в отдельности, используйте оператор `from`.

Начиная с версии Angular 5, импорт всех RxJS операторов осуществляется точно также, как и других сущностей Angular.

Теперь рассмотрим пример преобразования данных с использованием оператора `map`.

```ts
const values = Observable.of(1, 2, 3)

values.pipe(map((number) => number * 2)).subscribe((v) => {
  console.log(v)
})
```

Здесь `map()` умножает каждое значение элемента массива на 2.

Все операторы преобразования данных объявляются в методе `pipe()` через запятую. Сам метод `pipe()` импортировать не надо и он должен быть вызван перед методом `subscribe()`.

Полный список RxJS операторов, разделенных по категориям, можно изучить на [официальном сайте](http://reactivex.io/rxjs/manual/overview.html#categories-of-operators).

## Subject

В некоторых случаях целесообразнее использовать объекты типа `Subject`. Тип `Subject` — разновидность RxJS Observable, который может доставлять данные сразу нескольким подписчикам.

```ts
let subject = new Subject()

subject.subscribe((v) => {
  console.log('Observer 1: ' + v)
})
subject.subscribe((v) => {
  console.log('Observer 2: ' + v)
})

subject.next(9)
```

В примере выше для объекта типа `Subject` регистрируются два подписчика. Далее для передачи значения и вызова функций-обработчиков подписчиков используется метод `next()`.

В результате в консоль будет выведено две строки:

```
Observer 1: 9
Observer 2: 9
```

RxJS Subject в свою очередь также имеет разновидности.

`BehaviorSubject` — передает новому подписчику последнее значение, в качестве аргумента принимает начальное значение.

```ts
let behaviorSubject = new BehaviorSubject<Number>(3)

behaviorSubject.subscribe((v) => {
  console.log('Observer with value of 3: ' + v)
})

behaviorSubject.next(9)

behaviorSubject.subscribe((v) => {
  console.log('Observer with value of 9: ' + v)
})
```

`ReplaySubject` — передает новому подписчику все предыдущие значения, принимаемый параметр — количество предыдущих значений.

```ts
let replaySubject = new ReplaySubject<Number>(2)

replaySubject.next(3)
replaySubject.next(6)
replaySubject.next(9)
replaySubject.next(12)

replaySubject.subscribe((value) => {
  console.log('ReplaySubject: ' + value)
})
```

`AsyncSubject` — передает новому подписчику последнее значение, но только после того, как будет вызван метод `complete()`.

```ts
let asyncSubject = new AsyncSubject<Number>(3)

asyncSubject.subscribe((value) => {
  console.log('AsyncSubject: ' + value)
})

asyncSubject.next(3)
asyncSubject.next(6)
asyncSubject.next(9)

asyncSubject.complete()
```

## Ссылки

- [The RxJS library](https://angular.io/guide/rx-library)
- [Observables in Angular](https://angular.io/guide/observables-in-angular)
