# Effects

NgRx Effects реализуют побочные эффекты, работающие на основе библиотеки RxJS, применительно к хранилищу. Отслеживая поток действий, отправляемых в `Store`, они могут генерировать новые действия, например, на основе результатов выполнения HTTP-запросов или сообщений, полученных через Web Sockets.

Цели и функции NgRx Effects:

- снять нагрузку с компонента по управлению состоянием и выполнению побочных эффектов и свести его работу к получению состояний и генерации действий;
- отслеживание и фильтрация потока действий для выполнения побочного эффекта при возникновении определенного действия;
- выполнение синхронных и асинхронных побочных эффектов.

NgRx Effects устанавливаются отдельно.

```
npm i @ngrx/effects
```

Чтобы полностью осознать все преимущества использования NgRx Effects, посмотрим на пример без них.

_articles.service.ts_

```ts
@Injectable({ providedIn: 'root' })
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get('/api/articles')
  }
}
```

_articles.component.ts_

```ts
@Component({
  selector: 'app-articles',
  template: `
    <ul>
      <li
        *ngFor="let item of articles"
        [textContent]="item.title"
      ></li>
    </ul>
  `,
})
export class ArticlesComponent {
  articles: Article[] = []

  constructor(private articlesService: ArticlesService) {
    this.getArticles()
  }

  getArticles() {
    this.articles = []

    this.articlesService.getArticles().subscribe(
      (items) => (this.articles = items),
      (err) => console.log(err)
    )
  }
}
```

А теперь изменим пример внедрением NgRx Effects (`ArtilcesService` остается неизменным).

_articles.component.ts_

```ts
@Component({
  selector: 'app-articles',
  template: `
    <ul>
      <li
        *ngFor="let item of articles"
        [textContent]="item.title"
      ></li>
    </ul>
  `,
})
export class ArticlesComponent {
  articles$: Observable = this.store.pipe(
    select(selectArticlesList)
  )

  constructor(private store: Store) {
    this.store.dispatch(new LoadArticles())
  }
}
```

_articles.actions.ts_

```ts
export enum ArticlesActions {
  LoadArticles = '[Articles Page] Load Articles',
  ArticlesLoadedSuccess = '[Articles Page] Articles Loaded Success',
  ArticlesLoadedError = '[Articles Page] Articles Loaded Error',
}

export interface Article {
  id: number
  author: string
  title: string
}

export class LoadArticles implements Action {
  readonly type = ArticlesActions.LoadArticles
}

export class ArticlesLoadedSuccess implements Action {
  readonly type = ArticlesActions.ArticlesLoadedSuccess

  constructor(public payload: { articles: Article[] }) {}
}

export class ArticlesLoadedError implements Action {
  readonly type = ArticlesActions.ArticlesLoadedError
}

export type ArticlesUnion =
  | LoadArticles
  | ArticlesLoadedSuccess
  | ArticlesLoadedError
```

_articles.reducer.ts_

```ts
export interface ArticlesState {
  list: Article[]
}

const initialState: ArticlesState = {
  list: [],
}

export function articlesReducer(
  state: State = initialState,
  action: ArticlesUnion
) {
  switch (action.type) {
    case ArticlesActions.ArticlesLoadedSuccess:
      return {
        ...state,
        list: action.payload.articles,
      }
    case ArticlesActions.ArticlesLoadedError:
      return {
        ...state,
        list: [],
      }
    default:
      return state
  }
}

const selectArticles = (state: State) => state.articles

export const selectArticlesList = createSelector(
  selectArticles,
  (state: ArticlesState) => state.list
)
```

_articles.effects.ts_

```ts
@Injectable()
export class ArticlesEffects {
  @Effect()
  loadArticles$ = this.actions$.pipe(
    ofType(ArticlesActions.LoadArticles),
    mergeMap(() =>
      this.articlesService.getArticles().pipe(
        map(
          (articles) =>
            new ArticlesLoadedSuccess({
              articles: articles,
            })
        ),
        catchError(() => of(new ArticlesLoadedError()))
      )
    )
  )

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}
}
```

_app.module.ts_

```ts
@NgModule({
  imports: [EffectsModule.forRoot([ArtilcesEffects])],
})
export class AppModule {}
```

Создание NgRx Effect начинается c отслеживания потока событий, который представлен сервисом `Actions` и предваряется декоратором `@Effect()`. Далее с помощью оператор `ofType()` задается тип действия, при возникновении которого будет выполнен побочный эффект, который в свою очередь должен возвращать новое действие, передаваемое далее в хранилище. Также не забывайте обрабатывать ошибки.

!!! note ""

    Сначала действие обрабатывается редюсером, а только потом попадает в поток сервиса `Actions`.

Сравнив два примера, сразу станет очевидно, что применение NgRx Effects избавило компонент от необходимости самостоятельно обращаться к сервису и контролировать результат его работы.

Все NgRx Effects должны регистрироваться в приложении с помощью модуля `EffectsModule`. Если вы определяете эффекты на уровне корневого модуля, то необходимо использовать метод `forRoot()`, если на уровне второстепенного - `forFeature()`. Оба метода принимают массив эффектов к качестве параметра.

!!! note ""

    Если в приложении все NgRx Effects определены для второстепенных модулей, то в корневом модуле обязательно должен быть импортирован без аргументов метод `EffectsModule.forRoot()`.

!!! note ""

    Эффекты начинают следить за потоком действий сразу после загрузки модуля, к которому они относятся.

Если вам необходимо реализовать побочный эффект, но новое действие генерировать не нужно, передайте декоратору `@Effect()` объект с указанием значения `false` для свойства `dispatch`.

!!! note ""

    В случае задания `{dispatch: false}`, действие, инициирующее выполнение эффекта, никогда не будет передано редюсеру.

```ts
@Effect({dispatch: false})
```

## Жизненный цикл NgRx Effects

После регистрации всех эффектов в корневом модуле, происходит генерация действия `ROOT_EFFECTS_INIT`, для обработки которого может быть создан отдельный NgRx Effects.

```ts
@Effect()
initEffects$ = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    //...
);
```

NgRx предоставляет возможность управлять жизненным циклом эффекта с помощью реализации интерфейсов:

- `OnInitEffects` - возвращает действие сразу после того, как эффект был зарегистрирован в приложении;
- `OnRunEffects` - позволяет управлять началом и окончанием работы эффекта (по умолчанию начинается и заканчивается вместе с работой приложения);
- `OnIdentifyEffects` - позволяет регистрировать NgRx Effects несколько раз (по умолчанию эффект регистрируется в Angular приложении один раз, независимо от того, сколько раз загружается сам класс эффекта).

```ts
@Injectable()
export class ArticlesEffects
  implements OnInitEffects, OnRunEffects {
  @Effect()
  loadArticles$ = this.actions$.pipe(
    ofType(ArticlesActions.LoadArticles),
    startWith(new LoadArticles()),
    mergeMap(() =>
      this.articlesService.getArticles().pipe(
        map(
          (articles) =>
            new ArticlesLoadedSuccess({
              articles: articles,
            })
        ),
        catchError(() => of(new ArticlesLoadedError()))
      )
    )
  )

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}

  ngrxOnInitEffects(): Action {
    return new ArticlesEffectsInit()
  }

  ngrxOnRunEffects(
    resolvedEffects$: Observable<EffectNotification>
  ) {
    return this.actions$.pipe(
      ofType(ArticlesActions.ArticlesEffectsInit),
      exhaustMap(() =>
        resolvedEffects$.pipe(
          takeUntil(
            this.actions$.pipe(
              ofType(ArticlesActions.ArticlesLoadedSuccess)
            )
          )
        )
      )
    )
  }
}
```

Здесь для демонстрации работы `OnInitEffects` и `OnRunEffects` было введено дополнительное действие `ArticlesEffectsInit`, которое генерируется в момент регистрации эффекта и тем самым инициирует отслеживание потока действий.

В пределах одного класса может быть реализовано сразу несколько эффектов.

```ts
@Injectable()
export class ArticlesEffects{
	@Effect()
	loadArticles$ = ...

	@Effect()
	loadAuthors$ = ...
}
```
