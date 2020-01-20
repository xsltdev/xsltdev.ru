---
description: Централизация логики и упрощение коммуникации между компонентами с помощью сервисов.
---

# Сервисы

Внедрение зависимости следует принципу иерархии:

- Если зависимость внедрена в `AppModule`, то экземпляр зависимости доступен всему приложению.
- Если зависимость внедрена в `AppComponent`, то экземпляр будет доступен во всех компонентах, за исключением других сервисов.
- Если зависимость внедрена в любом другом компоненте, то экземпляр зависимости будет доступен в дочерних компонентах.

Подключение сервисов в app.module.ts:

```typescript
@NgModule({
  //...
  providers: [AccountsService, LoggingService],
  //...
})
```

Сервис, использующий другой сервис:

```typescript
import { Injectable } from '@angular/core'
import { LoggingService } from './logging.service'

@Injectable()
export class AccountsService {
  //...
  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    //...
    this.loggingService.logStatusChange(status)
  }
}
```

Сервис `AccountsService` использует сервис `loggingService`, то есть имеет зависимость. По этому `AccountsService` должен иметь декоратор `@Injectable()`. Данный декоратор указывает, что класс сервиса может иметь зависимости.

Простейший сервис - это просто класс:

```typescript
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status)
  }
}
```

## Использование сервиса в конпоненте

Импортировать класс сервиса.

Сервис должен быть указан в _провайдере_ родительского объекта, иначе необходимо в _декораторе_ класса указать ключ `providers` со значением - массив имен классов сервисов.

Для инициализации объекта сервиса можно использовать сокращение - `constructor(private accountsService: AccountsService) {}`

```typescript
//...
import { AccountsService } from './accounts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = []
  constructor(private accountsService: AccountsService) {}
  ngOnInit() {
    this.accounts = this.accountsService.accounts
  }
}
```

Подписка компонента на событие сервиса:

```typescript
constructor(private accountsService: AccountsService) {
  this.accountsService.statusUpdated.subscribe(
    (status: string) => alert('New Status: ' + status)
  );
}
```

Класс `AccountsService` имеет свойство `statusUpdated = new EventEmitter()`. Объект `EventEmitter` имеет методы `emit()` и `subscribe()`. Сервис `AccountsService` отправляет события и подписывается на них. Таким образом на основе сервиса может быть построена коммуникация между компонентами.
