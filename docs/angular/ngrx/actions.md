# Actions

В NgRx действия описывают все события Angular приложения, которые влияют на его состояние, поскольку изменить состояние можно только через отправку хранилищу одного из действий.

NgRx Actions создаются с помощью классов, которые реализуют стандартный интерфейс `Action`.

```ts
// Код интерфейса Action
interface Action {
  type: string
}

import { Action } from '@ngrx/store'

export class GetUsers implements Action {
  readonly type = '[Users Page] GetUsers'
}
```

Тип должен быть константой типа `string`, поэтому `Action` имеет единственное обязательное свойство `type`, которое должно быть строкой. Общепринято называть действие в формате `[Category name] Event name`. В квадратных скобках указывается категория действия, а после них - событие, вызвавшее его. Под категорией здесь подразумевается группа объединенных чем-то общим событий, например, если все они вызываются на странице просмотра новости, то категорию можно назвать `[News Page]`.

Для инициирования обработки NgRx Actions хранилищем, используется метод хранилища `dispatch()`.

```ts
// Здесь переменная store является экземпляром класса Store
store.dispatch(new GetUsers())
```

Практически всегда для изменения состояния вам необходимо будет вместе с действием передавать какие-либо данные. Реализуется это в момент создания класса действия. Общепринято помещать внутри класса переданные извне данные в свойство `payload`.

```ts
export class DeleteUser implements Action {
  readonly type = '[Users Page] DeleteUser'

  constructor(public payload: { id: number }) {}
}

store.dispatch(new DeleteUser({ id: 7 }))
```

В последнем примере передается `id` пользователя, которого необходимо удалить.

Для структурирования кода и легкости дальнейшего масштабирования вашего приложения, описывайте все действия в виде перечислений и создавайте смешанные типы действий.

```ts
export enum UsersActions {
  GetUsers = '[Users Page] GetUsers',
  DeleteUser = '[Users Page] DeleteUser',
  DeleteAllUsers = '[Users Page] DeleteAllUsers',
}

export class GetUsers implements Action {
  readonly type = UsersActions.GetUsers
}

export class DeleteUser implements Action {
  readonly type = UsersActions.DeleteUser

  constructor(public payload: { id: number }) {}
}

export class DeleteAllUsers implements Action {
  readonly type = UsersActions.DeleteAllUsers
}

//Смешанный тип
export type UsersUnion =
  | GetUsers
  | DeleteUser
  | DeleteAllUsers
```

Смешанный тип необходим для краткости записи типа в редюсере, который обрабатывает взаимосвязанную группу действий.

```ts
export function usersReducer(state = initialState, action: UsersUnion){...}
```
