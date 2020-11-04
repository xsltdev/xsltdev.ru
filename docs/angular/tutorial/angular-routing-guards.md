---
description: Route Guards позволяют ограничить доступ к маршрутам на основе определенного условия, например, только авторизованные пользователи с определенным набором прав могут просматривать страницу
---

# Guards

**Route Guards** позволяют ограничить доступ к маршрутам на основе определенного условия, например, только авторизованные пользователи с определенным набором прав могут просматривать страницу.

Также можно перед переходом на другой URL предупредить пользователя, что все его несохраненные изменения на текущей странице будут потеряны.

Различают следующие виды guard-ов:

- [`CanActivate`](https://angular.io/api/router/CanActivate) - разрешает/запрещает доступ к маршруту;
- [`CanActivateChild`](https://angular.io/api/router/CanActivateChild) -разрешает/запрещает доступ к дочернему маршруту;
- [`CanDeactivate`](https://angular.io/api/router/CanDeactivate) - разрешает/запрещает уход с текущего маршрута;
- [`Resolve`](https://angular.io/api/router/Resolve) - выполняет какое-либо действие перед переходом на маршрут, обычно ожидает данные от сервера;
- [`CanLoad`](https://angular.io/api/router/CanLoad) - разрешает/запрещает загрузку модуля, загружаемого асинхронно.

Все guard-ы должны возвращать либо `true`, либо `false`. И происходить это может как в синхронном режиме (тип `Boolean`), так и в асинхронном режиме (`Observable<boolean>` или `Promise<boolean>`).

Если будет возвращено `false`, будет инициировано событие маршрутизации [`NavigationCancel`](https://angular.io/api/router/NavigationCancel).

У одного URL может быть одновременно несколько guard-ов, причем одного и того же типа. Все guard-ы - обычные классы, реализующие определенный интерфейс. Указываются они в виде массива значением одноименных свойств при определении маршрутов.

Сначала выполняются `CanDeactivate` и `CanActivateChild`, затем - `CanActivate`. `CanLoad` будет вызван только в случае асинхронной загрузки модуля.

Guard-ы импортируются в модуль, к которому относится модуль маршрутизации, и перечисляются в блоке `providers`.

_auth.guard.ts_

```ts
@Injectable()
export class AuthGuard
  implements CanActivate, CanActivateChild {
  constructor(
    @Inject(AuthService) private auth: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.auth.isLoggedIn
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(next, state)
  }
}
```

_app-routing.module.ts_

```ts
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

_app.module.ts_

```ts
providers: [AuthGuard]
```

В `AuthGuard` реализуется интерфейс `CanActivate` и `CanActivateChild` (создаваемый класс обязательно должен содержать определение метода `CanActivate` и `CanActivateChild` соответственно).

Присутствие `CanActivateChild` говорит о том, что метод будет вызываться при каждом переходе на дочерний URL независимо от уровня иерархии. Часто оба метода выполняют одну и ту же проверку, и `CanActivateChild` нужен в этом случае для того, чтобы указать его у самого верхнего маршрута.

В приведенном примере предполагается, что при авторизации пользователя значение свойства `isLoggedIn` сервиса `AuthService` устанавливается в `true`.

После того, как пользователь попал на маршрут, можно предотвратить с него уход используя `CanDeactivate` guard-а. Например, можно попросить пользователя подтвердить уход со страницы, чтобы предотвратить потерю несохраненных данных или других внесенных изменений.

_can-deactivate.guard.ts_

```ts
@Injectable()
export class DataChangesGuard
  implements CanDeactivate<BuyTicketFormComponent> {
  constructor() {}

  canDeactivate(
    component: BuyTicketFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
    if (component.buyTicketForm.dirty)
      return window.confirm(
        'Unsaved data detected. Want to exit?'
      )
    else return true
  }
}
```

_app-routing.module.ts_

```ts
{
  path: 'ticket', component: BuyTicketFormComponent, canDeactivate: [DataChangesGuard]
}
```

В отличие от `CanActivate` `CanDeactivate` имеет дополнительно еще один параметр `component`, который содержит экземпляр указанного компонента, в нашем случае это `BuyTicketFormComponent`.

Если пользователь изменил какие-то данные и не сохранил их, то `DataChangesGuard` перед сменой маршрута уведомит об этом пользователя и запросит подтверждение смены URL.

Если в приложении нескольким маршрутам необходим один и тот же `CanDeactivate` guard, то во избежание создания guard-а для каждого из компонентов, можно создать интерфейс и указывать его вместо компонента при создании guard-а.

```ts
export interface CanComponentDeactivate {
  canDeactivate: () =>
    | Observable<boolean>
    | Promise<boolean>
    | boolean
}

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate
      ? component.canDeactivate()
      : true
  }
}
```

При обращении приложения к удаленному API, отображение данных происходит с некоторой задержкой, во время которой интерфейс может оказаться "сломанным", что сразу негативно скажется на общем впечатлении.

Для решения этой проблемы можно было бы использовать `CanActivate`, но концептуально он предназначен для других целей. А здесь понадобится `resolver`.

**Resolver** - это сервис, реализующий интерфейс [`Resolve`](https://angular.io/api/router/Resolve), а именно метод `resolve()`, который обязательно должен возвращать данные типа `Observable`. Указанный для любого маршрута, `Resolver` разрешает переход на него после выполнения `Observable` в `resolve()`.

```ts
@Injectable()
export class ContactsResovler implements Resolve<any> {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.http.get('/api/contacts').pipe(
      tap(
        (res) => of(res),
        (err) => {
          this.router.navigate(['/'])
          return EMPTY
        }
      )
    )
  }
}
```

Выполнение метода `resolve()` (как синхронного, так и асинхронного) инициирует событие `NavigationEnd`, что можно использовать для скрытия прелоадера при переходах между страницами.

## Ссылки

- [Route guards](https://angular.io/guide/router#milestone-5-route-guards)
