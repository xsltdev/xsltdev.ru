---
description: Разрешение динамических данных перед активацией роута и интерфейс Resolve в Angular5.
---

# Route Resolving

Разрешение данных это процесс их получения перед активацией роута. В приложении возможна задержка перед тем, как данные будут предоставлены сервером. Для того, чтобы не показывать пользователю пустую страницу, роутер может реализовать интерфейс `Resolve` и получить все необходимые данные до момента активации роута. Таким образом, пользователь сразу увидит контент страницы на которую перешел.

Создадим сервис с интерфейсом `Resolve` `\app\servers\server\server-resolver.service.ts`:

```typescript
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core'

import { ServersService } from '../servers.service'

interface Server {
  id: number
  name: string
  status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(
      +route.params['id']
    )
  }
}
```

Зарегистрируем его в провайдерах `AppModule`.

Затем в `Routes` добавим ключ `resolve`:

```typescript
{path: ':id', component: ServerComponent, resolve: {server: ServerResolver}}
```

Перепишем `ngOnInit` компонента:

```typescript
ngOnInit() {
	this.route.data
	.subscribe(
		(data: Data) => {
		this.server = data['server'];
		}
	);
	// const id = +this.route.snapshot.params['id'];
	// this.server = this.serversService.getServer(id);
	// this.route.params
	//   .subscribe(
	//     (params: Params) => {
	//       this.server = this.serversService.getServer(+params['id']);
	//     }
	//   );
}
```
