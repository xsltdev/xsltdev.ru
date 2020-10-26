---
description: Stream и работа с Observable в Angular5.
---

# Механизм Observable

## Observable

`Observable` - это название механизма, который используется в _Angular_ для программирования асинхронных потоков данных в декларативном стиле. `Observable` является синонимом термина `stream`. К асинхронным потокам данных обычно относятся такие концепции, как _события_, _http запросы_ и _триггеры_ в коде.

Данный механизм позволяет создавать объекты, инициирующие асинхронные потоки (_stream_ или _observable_) и объекты, которые за ними наблюдают (_observer_).

Над _observable_ можно производить различные операции, например, их можно создавать, комбинировать и фильтровать. Более того практически все что угодно может быть потоком. Потоковое программирование это очень гибкая концепция, позволяющая реализовывать необходимую логику минимальным количеством кода.

Для расширенной реализации _observable_ в _Angular_ используется сторонняя библиотека _Reactive Extensions_ (_RxJS_).

Работа с потоками стоится на двух объектах - _observable_ и _observer_. Эти методы представляет один и тот же объект, что делает удобным реализацию данного механизма в виде сервиса.

Observable имеет 3 состояния:

- обработка данных
- успешное завершение обработки
- ошибка обработки

## Interval

`rxjs/Rx` - дает дополнительные возможности для `Observable`. Создадим объект класса `Observable`, который будет отправлять и принимать сообщения. Для отправки сообщений используем метод `interval()`, который отправляет последовательные числа от нуля через заданный промежуток времени. Для приема сообщений используем метод `subscribe()`, в который передадим `callback`, выводящий каждое сообщение в консоль.

```typescript
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

//...
export class HomeComponent implements OnInit {
  //...
  ngOnInit() {
    const obsExample = Observable.interval(1000)
    obsExample.subscribe((num) => console.log(num))
  }
}
```

## Создание своего Observable

У класса Observable есть метод `create()`, который создает новый экземпляр `Observable`.

```typescript
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'
import 'rxjs/Rx'
//...
const myObservable = Observable.create(
  (observer: Observer<string>) => {
    setTimeout(() => {
      observer.next('first package')
    }, 2000)
    setTimeout(() => {
      observer.next('second package')
    }, 4000)
    setTimeout(() => {
      // observer.error('this does not work');
      observer.complete()
    }, 5000)
    setTimeout(() => {
      observer.next('third package')
    }, 6000)
  }
)

myObservable.subscribe(
  (data: string) => {
    console.log(data)
  },
  (error: string) => {
    console.log(error)
  },
  () => {
    console.log('completed')
  }
)
```
