# Scheduler

Для управления временем и очередностью выполнения операций в объектах Observable, имеются RxJS **Schedulers**.

Чтобы оценить всю их пользу и эффективность применения, необходимо хорошо понимать работу Event Loop в JavaScript в целом: выполнение асинхронных операций, очередь микро- и макрозадач, процесс перерисовки DOM.

Особенно важно знать, что и в каком порядке происходит. Сперва выполняется текущий синхронный код (callstack), далее очередь микрозадач (`Promise`), и если нет другого синхронного кода - очередь макрозадач (готовый для исполнения код, обернутый функциями `setTimeout()` и `setInterval()` или AJAX-запросы).

Также отдельно имеется очередь для задач, которые должны выполниться сразу перед следующим циклом перерисовки контента.

Учитывая описанное выше, вполне логично, что имеются следующие типы RxJS Schedulers:

- `queue` - добавляет операцию в callstack;
- `asap` - регистрирует операцию в очереди микрозадач;
- `async` - регистрирует операцию в очереди макрозадач;
- `animationFrame` - отвечает за действия, выполняемые перед перерисовкой.

Посмотрим на примере.

```ts
from(['b', 'c', 'd'])
  .pipe(startWith('Queue scheduler', queue))
  .subscribe((vl) => console.log(vl))

from(['b', 'c', 'd'])
  .pipe(startWith('Asap scheduler', asap))
  .subscribe((vl) => console.log(vl))

from(['b', 'c', 'd'])
  .pipe(startWith('Async scheduler', async))
  .subscribe((vl) => console.log(vl))

from(['b', 'c', 'd'])
  .pipe(
    startWith('Animation frame scheduler', animationFrame)
  )
  .subscribe((vl) => console.log(vl))
```

В качестве второго необязательного параметра большинству операторов можно передать объект RxJS Scheduler, который переопределяет поведение оператора по умолчанию.

Сама библиотека RxJS написана таким образом, что разработчику практически никогда не приходится менять стандартное поведение `Observable`, задаваемое операторами совместно с `Scheduler`.

## observeOn()

Для управления передачей данных, в `pipe()` используйте метод [`observeOn()`](https://rxjs.dev/api/operators/observeOn). Он принимает Scheduler и определяет, в каком порядке "потребители" получат данные после их отправления.

```ts
console.log('Before')

of(9)
  .pipe(observeOn(async))
  .subscribe((vl) => console.log('Value is: ', vl))

console.log('After')
```

В примере происходит переопределение синхронной передачи данных на асинхронную.

## subscribeOn()

В отличие от `observeOn()`, метод [`subscribeOn()`](https://rxjs.dev/api/operators/subscribeOn) определяет не контекст передачи данных, а контекст вызова метода `subscribe()`. Параметром ему также передается Scheduler.

```ts
console.log('Before')

of(9)
  .pipe(subscribeOn(async))
  .subscribe((vl) => console.log('Value is: ', vl))

console.log('After')
```

Здесь, несмотря на синхронное выполнение объекта `Observable`, вызов обработчика данных происходит асинхронно, что повторяет поведение примера с `observeOn()`.
