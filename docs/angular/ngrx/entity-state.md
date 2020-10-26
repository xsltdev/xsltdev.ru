# Entity state

Для эффективного управления массивами сущностей хранилища в NgRx имеется Entity State, который предоставляет собственное API для изменения этих сущностей и обеспечивает:

- меньшее по объему написание кода для создания редюсеров, которые обрабатывают массив сущностей;
- оптимизированное по производительности выполнение всех CRUD операций над массивом или его отдельным элементом.

NgRx Entity State устанавливается отдельно.

```
npm i @ngrx/entity --save
```

## Entity State

Entity State представляет собой обычный интерфейс обобщенного типа, в котором обобщенным типом является модель (интерфейс) сущности, составляющей массив. Ниже приведен код интерфейса.

```ts
interface EntityState<V> {
    ids: string[] | number[];
    entities: { [id: string | id: number]: V };
}
```

Свойства интерфейса:

- `ids` - массив идентификаторов сущностей (по умолчанию `id`);
- `entities` - объект со всеми сущностями, в котором ключ - идентификатор сущности, а значение - сама сущность.

Часть состояния, которая обрабатывает массивы сущностей, должна реализовывать интерфейс NgRx Entity State.

```ts
interface Article {
  id: number
  user_id: number
  title: string
}

export interface State extends EntityState<Article> {
  currentArticle: number | null
}
```

## Entity Adapter

Доступ к API для работы с сущностями предоставляет экземпляр класса `EntityAdapter`, который создается с явным указанием типа сущности.

```ts
export const adapter: EntityAdapter<Article> = createEntityAdapter<
  Article
>()
```

Метод `createEntityAdapter()` принимает необязательный параметр - объект с свойствами:

- `selectId` метод для выбора идентификатора сущности, обязателен, если у сущности отсутствует поле `id`;
- `sortComparer` - функция для сортировки сущностей в массива, но помните, что CRUD операции будут выполняться быстрее, если не придется сортировать массив.

```ts
export const adapter: EntityAdapter<Article> = createEntityAdapter<
  Article
>({
  selectId: (item) => item.id,
  sortComparer: false, //явное указание, что сортировать массив не нужно
})
```

NgRx Entity Adapter имеет обширное API для работы с сущностями:

- `getInitialState()` - возвращает исходное состояние для массива сущностей заданного типа, параметром принимает объект со свойствами, которые также должны быть частью состояния;
- `addOne()` - добавляет в массив новую сущность;
- `addMany()` - добавляет несколько сущностей в массив;
- `addAll()` - заменяет все текущие записи переданными;
- `removeOne()` - удаляет одну указанную сущность;
- `removeMany()` - удаляет несколько заданных сущностей;
- `removeAll()` - удаляет все записи;
- `updateOne()` - обновляет указанную сущность;
- `updateMany()` - обновляет несколько заданных записей;
- `upsertOne()` - обновляет переданную сущность, если она уже есть в массиве, в противном случае добавляет ее как новую;
- `upsertMany()` - то же самое, что и `upsertOne()`, только может принимать массив записей;
- `map()` - применяет к каждой сущности массива переданную функцию, которая должна возвращать обновленную сущность.

Пример использования метода `getInitialState()`.

```ts
export const initialState: State = adapter.getInitialState({
  currentArticle: null,
})
```

Пример использования методов управления массивом.

_article.actions.ts_

```ts
export enum ArticleActionTypes {
  LoadArticles = '[Articles Page] Load Articles',
  AddArticle = '[Articles Page] Add Article',
  UpsertArticle = '[Articles Page] Upsert Article',
  AddArticles = '[Articles Page] Add Articles',
  UpsertArticles = '[Articles Page] Upsert Articles',
  UpdateArticle = '[Articles Page] Update Article',
  UpdateArticles = '[Articles Page] Update Articles',
  MapArticles = '[Articles Page] Map Articles',
  DeleteArticle = '[Articles Page] Delete Article',
  DeleteArticles = '[Articles Page] Delete Articles',
  DeleteAllArticles = '[Articles Page] Delete All Articles',
}

export class LoadArticles implements Action {
  readonly type = ArticleActionTypes.LoadArticles

  constructor(public payload: { articles: Article[] }) {}
}

export class AddArticle implements Action {
  readonly type = ArticleActionTypes.AddArticle

  constructor(public payload: { article: Article }) {}
}

export class UpsertArticle implements Action {
  readonly type = ArticleActionTypes.UpsertArticle

  constructor(public payload: { article: Article }) {}
}

export class AddArticles implements Action {
  readonly type = ArticleActionTypes.AddArticles

  constructor(public payload: { articles: Article[] }) {}
}

export class UpsertArticles implements Action {
  readonly type = ArticleActionTypes.UpsertArticles

  constructor(public payload: { articles: Article[] }) {}
}

export class UpdateArticle implements Action {
  readonly type = ArticleActionTypes.UpdateArticle

  constructor(
    public payload: { article: Update<Article> }
  ) {}
}

export class UpdateArticles implements Action {
  readonly type = ArticleActionTypes.UpdateArticles

  constructor(
    public payload: { articles: Update<Article>[] }
  ) {}
}

export class MapArticles implements Action {
  readonly type = ArticleActionTypes.MapArticles

  constructor(
    public payload: { entityMap: EntityMap<Article> }
  ) {}
}

export class DeleteArticle implements Action {
  readonly type = ArticleActionTypes.DeleteArticle

  constructor(public payload: { id: string }) {}
}

export class DeleteArticles implements Action {
  readonly type = ArticleActionTypes.DeleteArticles

  constructor(public payload: { ids: string[] }) {}
}

export class DeleteAllArticles implements Action {
  readonly type = ArticleActionTypes.DeleteAllArticles
}

export type ArticleActionsUnion =
  | LoadArticles
  | AddArticle
  | UpsertArticle
  | AddArticles
  | UpsertArticles
  | UpdateArticle
  | UpdateArticles
  | MapArticles
  | DeleteArticle
  | DeleteArticles
  | DeleteAllArticles
```

_article.reducer.ts_

```ts
interface Article {
  id: number
  user_id: number
  title: string
}

export interface State extends EntityState<Article> {
  currentArticle: number | null
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<
  Article
>()

export const initialState: State = adapter.getInitialState({
  currentArticle: null,
})

export function articlesReducer(
  state = initialState,
  action: ArticleActionsUnion
): State {
  switch (action.type) {
    case ArticleActionTypes.LoadArticles: {
      return adapter.addAll(action.payload.articles, state)
    }

    case ArticleActionTypes.AddArticle: {
      return adapter.addOne(action.payload.article, state)
    }

    case ArticleActionTypes.UpsertArticle: {
      return adapter.upsertOne(
        action.payload.article,
        state
      )
    }

    case ArticleActionTypes.AddArticles: {
      return adapter.addMany(action.payload.articles, state)
    }

    case ArticleActionTypes.UpsertArticles: {
      return adapter.upsertMany(
        action.payload.articles,
        state
      )
    }

    case ArticleActionTypes.UpdateArticle: {
      return adapter.updateOne(
        action.payload.article,
        state
      )
    }

    case ArticleActionTypes.UpdateArticles: {
      return adapter.updateMany(
        action.payload.articles,
        state
      )
    }

    case ArticleActionTypes.MapArticles: {
      return adapter.map(action.payload.entityMap, state)
    }

    case ArticleActionTypes.DeleteArticle: {
      return adapter.removeOne(action.payload.id, state)
    }

    case ArticleActionTypes.DeleteArticles: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case ArticleActionTypes.DeleteAllArticles: {
      return adapter.removeAll({
        ...state,
        currentArticle: null,
      })
    }

    default: {
      return state
    }
  }
}
```

Еще одним полезным методом NgRx Entity Adapter является `getSelectors()`, который возвращает четыре селектора:

- `selectIds` - возвращает массив идентификаторов сущностей;
- `selectEntities` - возвращает объект, в котором ключи это идентификаторы записей, а значения - сами записи;
- `selectAll` - возвращает массив всех сущностей;
- `selectTotal` - возвращает общее количество записей в массиве.

```ts
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()

export const selectArticleIds = selectIds
export const selectArticleEntities = selectEntities
export const selectAllArticles = selectAll
export const selectArticleTotal = selectTotal
```
