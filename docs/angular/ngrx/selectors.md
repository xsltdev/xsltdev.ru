# Selectors

В NgRx селекторы представляют собой чистые функции и используются для получения определенных частей глобального состояния. Отличительные особенности селекторов:

- Мобильность;
- Мемоизация;
- Возможность построения композиции селекторов;
- Легкость тестирования.

## createSelector()

Селекторы создаются с помощью функции NgRx `createSelector()`, которая может принимать неограниченное количество функций, каждая из которых возвращает определенную часть состояния. При этом самой последней функции, которая и возвращает конечный результат, в качестве аргументов передаются результаты первых функций.

Для всех примеров этой главы будем использоваться следующее состояние.

```ts
export interface User {
  id: number
  name: string
  email: string
}

interface Article {
  id: number
  user_id: number
  title: string
}

interface UsersState {
  list: { [id: number]: User }
  count: number
}

interface ArticlesState {
  list: { [id: number]: Article }
  count: number
}

export interface State {
  users: UsersState
  articles: ArticlesState
}
```

Пример получения данных состояния.

```ts
const selectUsers = (state: State) => state.users

export const selectUsersList = createSelector(
  selectUsers,
  (state: UsersState) => state.list
)
```

Созданные NgRx селекторы могут быть использованы для создания других селекторов (композиция).

```ts
const selectUsers = (state: State) => state.users

export const selectUsersCount = createSelector(
  selectUsers,
  (state: UsersState) => state.count
)

const selectArticles = (state: State) => state.articles

export const selectArticlesCount = createSelector(
  selectArticles,
  (state: ArticlesState) => state.count
)

export const selectCountSum = createSelector(
  selectUsersCount,
  selectArticlesCount,
  (usersCount, articlesCount) => usersCount + articlesCount
)
```

## select()

Для использования селектор необходимо передать функции NgRx `select()`, которая вызывается в методе `pipe()` хранилища (экземпляра объекта `Store`).

```ts
export class AppComponent {
  constructor(private store: Store) {
    this.store
      .pipe(select(selectCountSum))
      .subscribe((vl) => console.log(vl))
  }
}
```

Вы также можете совместно с NgRx `select()` использовать имеющиеся в RxJS операторы.

```ts
this.store
  .pipe(
    select(selectCountSum),
    map((sum) => sum * 2)
  )
  .subscribe((vl) => console.log(vl))
```

Для получения состояния на основе данных, отсутствующих в хранилище, вторым параметром функции NgRx `select()` передайте эти данные и они будут доступны в последней функции в качестве последнего параметра.

```ts
const selectArticles = (state: State) => state.articles

export const selectArticlesList = createSelector(
  selectArticles,
  (state: ArticlesState) => state.list
)

export const selectArticlesByUser = createSelector(
  selectArticlesList,
  (articles, props) => {
    return articles.filter(
      (item) => item.user_id === props.user_id
    )
  }
)
```

И далее в компоненте.

```ts
this.store
  .pipe(select(selectArticlesByUser, { user_id: 3 }))
  .subscribe((vl) => console.log(vl))
```

## createFeatureSelector()

Для удобства получения срезов состояния верхнего уровня глобального объекта используйте функцию NgRx `createFeatureSelector()`, которая строковым параметром принимает один из верхних ключей.

```ts
const selectArticles = createFeatureSelector<State>(
  'articles'
)
```

## Мемоизация

Мемоизация позволяет избежать повторных вычислений при вызове функции, которая уже вызывалась ранее. При первом вызове запоминается возвращаемое функцией значение, которое будет пересчитано и обновлено при любом изменении в наборе параметров, в противном же случае будет возвращаться сохраненное значение.

Для сброса (удаления) сохраненного значения необходимо вызвать у селектора метод `release()`. Настоятельно рекомендуется его использовать, если вычисленные данные занимают в памяти много места и в последующем вам больше не понадобятся.

```ts
//получаем и запоминаем все статьи по запрашиваемому user_id
this.store
  .pipe(select(selectArticlesByUser, { user_id: 3 }))
  .subscribe((vl) => console.log(vl))

//сбрасываем сохраненное значение
selectArticlesByUser.release()
```
