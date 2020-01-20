---
description: Использование интерфейсов CanActivate и CanActivateChild для принятия решения об активации роутера.
---

# Защита роутера

## CanActivate

_Angular_ позволяет перед выполнением роутинга выполнить произвольный синхронный или асинхронный код. Для реализации предусмотрен специальный интерфейс `CanActivate`, импортируемый из `@angular/router`.

В качестве примера реализуем фейковый класс аутентификации `app\auth.service.ts`, который возвращает объект `Promise`, для поддержки асинхронности:

```typescript
export class AuthService {
  loggedIn = false

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 800)
    })
    return promise
  }

  login() {
    this.loggedIn = true
  }

  logout() {
    this.loggedIn = false
  }
}
```

Создадим класс на основе интерфейса `CanActivate`. Данный класс является фильтром для роутера. Он должен реализовать метод `canActivate`, который возвращает булевое значение, в зависимости от которого, будет применен или нет роутинг. `app\auth-guard.service.ts`:

```typescript
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'
import { AuthService } from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true
      } else {
        this.router.navigate(['/'])
        return false
      }
    })
  }
}
```

Реализуем `Routes` с применением параметра `canActivate`, данный массив содержит все сервисы, которые необходимо выполнить перед срабатыванием роутера. Если хотя бы один из сервисов вернет false, то перехода не будет. app-routing.module.ts:

```typescript
const appRoutes: Routes = [
  //...
  {
    path: 'servers',
    canActivate: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  }
  //...
]
```

В `app\app.module.ts` нужно не забыть включить в провайдеры класс реализующий интерфейс `CanActivate` и непосредственно сервис, реализующий авторизацию для данного примера:

```typescript
@NgModule({
  //...
  providers: [
    //...
    AuthService,
    AuthGuard
  ],
  //...
})
```

## Защита дочерних роутов с помощью CanActivateChild

При использовании интерфейса `CanActivate`, блокируется родительский роут и его дочерние роуты. Для блокировки только дочерних роутов можно использовать интерфейс `CanActivateChild`, в котором нужно реализовать метод `canActivateChild()`, например:

```typescript
canActivateChild(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
{
  return this.canActivate(route, state);
}
```

И прописать в роутах ключ `canActivateChild`:

```typescript
const appRoutes: Routes = [
  //...
  {
    path: 'servers',
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  }
  //...
]
```
