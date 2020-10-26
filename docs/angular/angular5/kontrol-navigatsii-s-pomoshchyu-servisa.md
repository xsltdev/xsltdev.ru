---
description: Деактивации роута в Angular5 и контроль навигации.
---

# Контроль навигации с помощью сервиса

Интерфейс `CanDeactivate` применяется классом, который должен принимать решение, можно ли деактивировать роут. Напишем сервис реализующий интерфейс `CanDeactivate`:

```typescript
import { Observable } from 'rxjs/Observable'
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'

export interface CanComponentDeactivate {
  canDeactivate: () =>
    | Observable<boolean>
    | Promise<boolean>
    | boolean
}

export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate
      ? component.canDeactivate()
      : true
  }
}
```

Сервис не знает деталей реализации метода деактивации у компонента. Он только проверяет, что у компонента есть метод `canDeactivate()` и запускает его.

Класс реализует интерфейс `CanComponentDeactivate`:

```typescript
export class EditServerComponent
  implements OnInit, CanComponentDeactivate {
  //...
  canDeactivate():
    | Observable<boolean>
    | Promise<boolean>
    | boolean {
    if (!this.allowEdit) {
      return true
    }

    const isSettingsChanged =
      this.serverName !== this.server.name ||
      this.serverStatus !== this.server.status

    if (isSettingsChanged && !this.changesSaved) {
      return confirm('Do you want discard the changes?')
    } else {
      return true
    }
  }
}
```

`Routes` должен содержать ключ `canDeactivate` с именем сервиса:

```typescript
{
  //...
  children: [
    //...,
    {
      path: ':id/edit',
      component: EditServerComponent,
      canDeactivate: [CanDeactivateGuard],
    },
  ]
}
```

Сервис нужно зарегистрировать в провайдерах модуля.
