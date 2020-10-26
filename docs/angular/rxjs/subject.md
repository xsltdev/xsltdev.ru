# Объекты Subject

RxJS **Subject** является разновидностью объектов `Observable`. Особенность `Subject` в том, что он может отправлять данные одновременно множеству "потребителей", которые могут регистрироваться уже в процессе исполнения `Subject`, в то время как исполнение стандартного `Observable` осуществляется уникально для каждого его вызова.

Объекты RxJS Subject реализуют принцип работы событий, поддерживая возможность регистрировать неограниченное количество обработчиков отправляемых ими данных.

Рассмотрим пример.

```ts
const sbj = new Subject<number>()

sbj.subscribe((vl) => console.log(`1st: ${vl}`))
sbj.next(3)
sbj.subscribe((vl) => console.log(`2nd: ${vl}`))
sbj.next(9)

/*
Результат  в консоли:

1st: 3
1st: 9
2nd: 9
*/
```

Создание происходит с помощью `new Subject()`. Далее регистрируются обработчики вызовом метода `subscribe()`, принимающего подобно обычному `Observable` три функции: `next()`, `error()` и `complete()`.

Но здесь обработчики исполняются не сразу в момент вызова `subscribe()`, а после обращения к методам `next()`, `error()` или `complete()` самого объекта.

Причем регистрация новых "потребителей" может происходить в любой момент времени. Но получать данные они будут уже начиная со следующей рассылки.

!!! note ""

    Объекты RxJS Subject по умолчанию являются бесконечно исполняемыми, так как заранее неизвестно, когда будет вызов `complete()` и будет ли он вызван вообще. Поэтому не стоит забывать про `unsubscribe()`.

В RxJS имеется несколько разновидностей `Subject`:

- [`BehaviorSubject`](https://rxjs.dev/api/index/class/BehaviorSubject),
- [`ReplaySubject`](https://rxjs.dev/api/index/class/ReplaySubject),
- [`AsyncSubject`](https://rxjs.dev/api/index/class/AsyncSubject).

## BehaviorSubject

`BehaviorSubject` хранит в себе последнее отправленное им значение. Так, каждому новому обработчику в момент регистрации (вызов `subscribe()`) будет отправлено это значение.

Начальное значение задается в момент создания RxJS BehaviorSubject.

```ts
const sbj = new BehaviorSubject<number>(5)

sbj.subscribe((vl) => console.log(`1st: ${vl}`))
sbj.subscribe((vl) => console.log(`2nd: ${vl}`))
sbj.next(7)

/*
Результат  в консоли:

1st: 5
2nd: 5
1st: 7
2nd: 7
*/
```

## ReplaySubject

В отличие от `BehaviorSubject` объекты `ReplaySubject` способны хранить заданное количество последних значений, которое задается при создании объекта.

```ts
const sbj = new ReplaySubject(2)

sbj.next(5)

sbj.subscribe((vl) => console.log(`1st: ${vl}`))

sbj.next(6)
sbj.next(7)

sbj.subscribe((vl) => console.log(`2nd: ${vl}`))

/*
Результат  в консоли:

1st: 5
1st: 6
1st: 7
2nd: 6
2nd: 7
*/
```

Все новые "потребители" сразу же получают по очереди все `n` указанных значений RxJS ReplaySubject.

## AsyncSubject

В случае с `AsyncSubject` "потребителям" передается только последнее значение объекта и только, когда он завершит свое выполнение (вызов `complete()`).

```ts
const sbj = new AsyncSubject()

sbj.subscribe((vl) => console.log(`Async: ${vl}`))

sbj.next(7)
sbj.next(8)
sbj.next(9)

setTimeout(() => sbj.complete(), 3000)

/*
Результат  в консоли (по истечении 3 сек):

Async: 9
*/
```
