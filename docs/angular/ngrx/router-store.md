# Router store

Для связки модуля маршрутизации с хранилищем используйте NgRx Router State, который позволяет отслеживать процесс смены URL в Angular приложении с помощью действий.

NgRx Router Store устанавливается отдельно.

```
npm i @ngrx/router-store --save
```

Далее необходимо импортировать нужные модули в корневой модуль вашего Angular приложения.

```ts
@NgModule({
  imports: [
	BrowserModule,
	StoreModule.forRoot({router: routerReducer}),
	StoreRouterConnectingModule.forRoot(),
  ],
})
```

Сама структура состояния `router` выглядит следующим образом.

```ts
{
    state: {
        root: {/*...*/},
        url: '/'
    },
    navigationId: 1
}
```

Описание объекта состояния NgRx Router Store:

- `state` - информация в текущем маршруте, содержит два свойства:
  - `root` - экземпляр корневого маршрута;
  - `url` - текущий URL-адрес;
- `navigationId` - порядковый номер смены маршрутизации в рамках текущей сессии работы Angular приложения.

В NgRx Router Store предусмотрены пять действий, каждое из которых представляет одну из стадий процесса смены маршрута:

- `ROUTER_REQUEST` - начало перехода на другой URL;
- `ROUTER_NAVIGATION` - сам процесс перехода, вызывается до выполнения всех `Guards` и `Resolvers`;
- `ROUTER_NAVIGATED` - успешный переход на заданный URL;
- `ROUTER_CANCEL` - генерируется, если смена URL была заблокирована `Guard` или `Resolver`;
- `ROUTER_ERROR` - генерируется, если в процессе перехода возникает ошибка

Действия `ROUTER_CANCEL` и `ROUTER_ERROR` содержат информацию в маршруте с которого осуществляется переход.

## Конфигурация NgRx Router Store

Метод `StoreRouterConnectingModule.forRoot()` в качестве необязательного параметра принимает объект с пользовательскими настройками NgRx Router Store.

Передаваемый объект должен реализовывать интерфейс `StoreRouterConfig` с тремя не обязательными свойствами:

- `stateKey` - имя части глобального состояния, в которой будут храниться все данные маршрутизации (по умолчанию `router`); помимо строки может принимать селектор;
- `serializer` - позволяет кастомизировать структуру данных состояния, которое передается в каждом действии;
- `navigationActionTiming` - определяет момент генерации действия `ROUTER_NAVIGATION` и может быть либо `NavigationActionTiming.PreActivation` (по умолчанию), либо `NavigationActionTiming.PostActivation`.

`NavigationActionTiming.PreActivation` означает, что `ROUTER_NAVIGATION` будет сгенерировано до вызова всех `Guards` и `Resolvers`, а `NavigationActionTiming.PostActivation` - после.

Рассмотрим пример использования `serializer`.

```ts
import {
  Params,
  RouterStateSnapshot,
  Data,
} from '@angular/router'
import { RouterStateSerializer } from '@ngrx/router-store'

export interface AppRouterStateUrl {
  url: string
  params: Params
  queryParams: Params
  data: Data
}

export class AppSerializer
  implements RouterStateSerializer<AppRouterStateUrl> {
  serialize(state: RouterStateSnapshot): AppRouterStateUrl {
    let currentRoute = state.root

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild
    }

    const {
      url,
      root: { queryParams },
    } = state
    const { params, data } = currentRoute

    return { url, params, queryParams, data }
  }
}
```

И затем в `app.module.ts`.

```ts
StoreRouterConnectingModule.forRoot({
  serializer: CustomSerializer,
})
```
