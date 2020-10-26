# Reducers

NgRx Reducers являются чистыми функциями и отвечают за смену состояния хранилища в Angular приложении в ответ на возникновение действия, при этом каждый редюсер может изменять только определенную часть состояния.

!!! note ""

    Изменить состояние в NgRx можно ТОЛЬКО с использованием редюсеров.

_users.actions.ts_

```ts
import { Action } from '@ngrx/store'

export enum UsersActions {
  LoadUsers = '[Users Page] LoadUsers',
  DeleteUsers = '[Users Page] DeleteUsers',
}

export interface User {
  id: number
  name: string
  email: string
}

export class LoadUsers implements Action {
  readonly type = UsersActions.LoadUsers

  constructor(public payload: { users: User[] }) {}
}

export class DeleteUsers implements Action {
  readonly type = UsersActions.DeleteUsers
}

export type UsersUnion = LoadUsers | DeleteUsers
```

_users.reducer.ts_

```ts
import {
  UsersUnion,
  UserActions,
} from '../actions/users.actions'

export interface State {
  users: User[]
  count: number
}

const initialState: State = {
  users: [],
  count: 0,
}

export function usersReducer(
  state: State = initialState,
  action: UsersUnion
) {
  switch (action.type) {
    case UsersActions.LoadUsers:
      return {
        ...state,
        users: action.payload.users,
      }
    case UsersActions.DeleteUsers:
      return {
        ...state,
        users: [],
      }
    default:
      return state
  }
}
```

Любое действие, отправляемое в хранилище методом `dispatch()`, передается всем редюсерам, каждый из которых либо изменяет состояние согласно текущему действию, либо возвращает состояние нетронутым, если обработка такого действия в нем не предусмотрена.

!!! note ""

    Все изменения состояния хранилища происходят в Angular приложении синхронно, а их порядок зависит от порядка регистрации самих NgRx Reducers.

Редюсер принимает два аргумента:

- часть текущего состояния, за обработку которого он ответственен;
- обрабатываемое действие.

Поскольку все NgRx Reducers обрабатывают определенный набор действий и всегда должны возвращать состояние, здесь очень удобно применение оператора `switch`.

При первом вызове редюсера в качестве значения состояния ему передается `undefined`, поэтому очень важно определить значение части хранилища по умолчанию, которое задаст необходимую структуру и, если это необходимо, исходные значения свойств этой структуры.

```ts
export interface State {
  users: User[]
  count: number
}

const initialState: State = {
  users: [],
  count: 0,
}

export function usersReducer(
  state: State = initialState,
  action: UsersUnion
) {
  /* ... */
}
```

!!! note ""

    Для содержания кода вашего Angular проекта в чистоте и во избежании путаницы, рекомендуется NgRx Reducers и обрабатываемые ими действия хранить в разных файлах. Подробно [здесь](code-structure.md).

В приложении регистрация NgRx Reducers осуществляется с помощью метода `forRoot()` модуля `StoreModule`.

```ts
@NgModule({
  imports: [StoreModule.forRoot({users: usersReducer})],
})
```

Методу должен передаваться объект, ключами которого являются имена частей, формирующих глобальное хранилище, а их значениями - редюсеры, возвращающие значение этих частей хранилища.
