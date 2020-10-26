# Создание операторов

Имеющихся в RxJS "встроенных" операторов практически всегда будет достаточно, за исключением редких и весьма специфических случаев. Вот тогда вам и придется создавать свой собственный оператор.

Разберем пример **создания оператора**, который принимает n-ое значение от объекта `Observable` и завершает его выполнение.

```ts
const takeNth = (n: number) => <T>(source: Observable<T>) =>
  new Observable<T>((observer) => {
    let current = 1

    return source.subscribe(
      (vl) => {
        if (current++ === n) {
          observer.next(vl)
          observer.complete()
        }
      },
      (err) => observer.error(err),
      () => observer.complete()
    )
  })

from(['Jack', 'Jane', 'Jim', 'Jason'])
  .pipe(takeNth(3))
  .subscribe(
    (vl) => console.log(vl),
    (err) => {},
    () => console.log('Completed')
  )
```

Подробное описание оператора [`from()`](https://rxjs.dev/api/index/function/from).

Также создавать операторы можно используя уже существующие.

```ts
const takeNth = (n: number) => <T>(source: Observable<T>) =>
  source.pipe(filter((value, index) => index === n - 1))

from(['Jack', 'Jane', 'Jim', 'Jason'])
  .pipe(takeNth(3))
  .subscribe(
    (vl) => console.log(vl),
    (err) => {},
    () => console.log('Completed')
  )
```
