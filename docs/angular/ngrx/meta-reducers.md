# Meta reducers

Все определенные в Angular приложении редюсеры объединяются NgRX Store в один глобальный редюсер, который и обрабатывает все действия.

NgRx Meta Reducers это функции, вызываемые сразу после возникновения действия, но перед тем, как они будут переданы глобальному редюсеру. На практике они чаще всего используются для логирования.

Принцип работы NgRx Meta Reducers идентичен работе Middleware в Node.js.

Рассмотрим пример

_logs.meta-reducer.ts_

```ts
export function log(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state)
    console.log('action', action)

    return reducer(state, action)
  }
}
```

_app.module.ts_

```ts
import { reducers } from './store/reducers/index'
import { log } from './store/meta-reducers/log.meta-reducer'

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    { metaReducers: [log] },
  ],
  // ...
})
export class AppModule {}
```

NgRx Meta Reducers указываются в виде массива в свойстве `metaReducers` объекта конфигурации, который передается вторым параметром методу `StoreModule.forRoot()`.

В качестве входного аргумента NgRx Meta Reducers принимают редюсер, вызов которого передает обработку действия далее в хранилище.

!!! node ""

    Если передаваемый редюсер не будет вызван, то действие никогда не достигнет хранилища. Можете думать о нем, как о методе `next()` в Middleware Node.js.

Все NgRx Meta Reducers должны возвращать функцию, которая принимает два параметра: состояние и действие. Сама же функция должна возвращать вызов переданного редюсера.

!!! node ""

    NgRx Meta Reducers не должны изменять передаваемые им состояние и действие.
