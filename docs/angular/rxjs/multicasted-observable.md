# Multicasted Observable

Ранее говорилось, что объекты RxJS Observable выполняются для каждого вызова метода `subscribe()` уникально, в отличие от RxJS Subject. Но это не совсем так. При необходимости можно создать **Multicasted Observable**, который позволяет в рамках одного и того выполнения регистрировать сразу несколько обработчиков.

## multicast()

Такие объекты создаются с помощью метода RxJS [`multicast()`](https://rxjs.dev/api/operators/multicast), а в их основе находятся объекты `Subject`.

```ts
const subject = new Subject()
const multicasted = from([2, 4, 6]).pipe(multicast(subject))

multicasted.subscribe((vl) => console.log(`1st: ${vl}`))
multicasted.subscribe((vl) => console.log(`2nd: ${vl}`))

multicasted.connect()
```

RxJS `multicast(`) принимает `Subject`, который регистрирует на себя всех "потребителей" и который сам регистрируется в качестве обработчика для исходного объекта `Observable`.

В результате получается объект типа `ConnectableObservable` - стандартный `Observable` с методом `connect()`. Именно вызов `connect()` инициирует выполнение исходного объекта и возвращает его контекст (объект с `unsubscribe()`).

!!! note ""

    Объект `Subject` можно передать двумя способами: напрямую и с использованием фабричной функции. В первом случае после завершения выполнения объекта новые "потребители" получат только уведомление о завершении (обработка `complete`) и все, тогда как фабричная функция запустит новое исполнение объекта.

## refCount()

Метод RxJS [`refCount()`](https://rxjs.dev/api/operators/refCount) облегчает работу с `ConnectableObservable`.

При регистрации первого обработчика он автоматически начинает выполнение исходного объекта (вызывается `connect()`), а когда не остается ни одного "потребителя" автоматически завершает его выполнение (вызывается `unsubscribe()`).

Так отпадает необходимость в ручном контроле таких объектов.

```ts
const subject = new Subject()
const refCounted = interval(3).pipe(
  multicast(subject),
  refCount()
)

let sub1, sub2

//выполнение Observable начинается
sub1 = refCounted.subscribe((vl) =>
  console.log(`1st: ${vl}`)
)

setTimeout(
  () =>
    (sub2 = refCounted.subscribe((vl) =>
      console.log(`2nd: ${vl}`)
    )),
  500
)

setTimeout(() => sub1.unsubscribe(), 1500)

//выполнение Observable завершается
setTimeout(() => sub2.unsubscribe(), 2000)
```

Использовать `refCount()` можно только с объектами `ConnectableObservable`.
