# Store

NgRx **Store** (или просто хранилище) хранит в себе глобальное состояние Angular приложения в виде одного большого объекта.

!!! note ""

    В приложении может быть только одно хранилище.

Хранилище в NgRx представлено сервисом `Store` и выполняет следующие функции:

- хранение глобального состояния приложения;
- обновляет состояние в ответ на действие, принимаемое через метод `dispatch()`;
- предоставление доступа к состоянию.

Формирование глобального состояния в NgRx Store происходит путем объединения более мелких состояний, которые возвращают зарегистрированные в приложении [редюсеры](reducers.md). Делается это с использованием `ActionReducerMap<State>`.

_users.reducer.ts_

```ts
export interface State {
  /* ... */
}
export function usersReducer(
  state: State = initialState,
  action: UsersUnion
) {
  /* ... */
}
```

_articles.reducer.ts_

```ts
export interface State {
  /*...*/
}
export function articlesReducer(
  state: State = initialState,
  action: ArticlesUnion
) {
  /*...*/
}
```

_index.ts_

```ts
import * as Users from './reducers/users.reducer'
import * as Articles from './reducers/articles.reducer'

export interface State {
  users: Users.State
  articles: Articles.State
}

export const reducers: ActionReducerMap<State> = {
  users: Users.usersReducer,
  articles: Articles.articlesReducer,
}
```

_app.module.ts_

```ts
import { reducers } from './store/reducers/index'

@NgModule({
  imports: [StoreModule.forRoot(reducers)],
})
export class AppModule {}
```

Ключи верхнего уровня иерархии глобального объекта состояния задаются разработчиком самостоятельно.

В последнем примере состояние определяется в корневом модуле. Но также NgRx Store может формироваться из состояний, определенных для второстепенных модулей.

_users.module.ts_

```ts
import { usersReducer } from './reducers/users.reducer'

@NgModule({
  imports: [
    StoreModule.forFeature('users', usersReducer),
    UsersModule,
  ],
})
export class UsersModule {}
```

_app.module.ts_

```ts
@NgModule({
  imports: [StoreModule.forRoot({}), UsersModule],
  // ...
})
export class AppModule {}
```

Для регистрации редюсеров на уровне второстепенных модулей используется метод `forFeature()` модуля `StoreModule.forFeature()`. При этом корневой модуль может вообще не иметь собственных редюсеров.

В случае если второстепенный модуль загружается асинхронно, то определенное для него состояние динамически добавится в глобальный объект после его полной загрузки. Если модуль не будет загружен вообще, то и в глобальном хранилище ничего связанного с ним тоже не будет.

Доступ к глобальному состоянию осуществляется через экземпляр сервиса `Store`, прямое обращение к которому возвращает объект `Observable`.

_articles.actions.ts_

```ts
import { Action } from '@ngrx/store'

export enum ArticlesActions {
  LoadArticle = '[Articles Page] LoadArticle',
  PublishArticle = '[Articles Page] PublishArticle',
}

export interface Article {
  id: number
  title: string
  published: boolean
}

export class LoadArticle implements Action {
  readonly type = ArticlesActions.LoadArticle

  constructor(public payload: { article: Article }) {}
}

export class PublishArticle implements Action {
  readonly type = ArticlesActions.PublishArticle

  constructor(public payload: { id: number }) {}
}

export type ArticlesUnion = LoadArticle | PublishArticle
```

_articles.reducer.ts_

```ts
export interface State{
	articles: {[id: number]: Article},
	count: number;
}

const initialState: State = {
	articles: {},
	count: 0
};

export function articlesReducer(state: State = initialState, action: ArticlesUnion){
	switch(action.type){
	case ArticlesActions.LoadArticle:
		return {
		...state,
		articles: {...state.articles, [action.payload.article.id]: action.payload.article}
		};
	case ArticlesActions.PublishArticle:
		return {
		...state,
		articles: {...{published: true, ...state.article[action.payload.id]}, ...state.articles
		};
	default:
		return state;
	}
}
```

_app.component.ts_

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.subscribe((state) => console.log(state))

    this.store.dispatch(
      new LoadArticle({
        article: {
          id: 1,
          title: 'Learn NgRx',
          publish: false,
        },
      })
    )

    this.store.dispatch(new PublishArticle({ id: 1 }))
  }
}
```

Значение NgRx Store передается обработчику непосредственно в момент вызова метода `subscribe()` и далее при любом изменении состояния.

Для доступа к определенным частям состояния или вычисления новых данных на основе уже имеющихся в хранилище, используйте селекторы.
