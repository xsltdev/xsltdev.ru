---
description: Angular сервис - это обычный класс, используемый в контексте Angular для хранения глобального состояния приложения или в качестве поставщика данных
---

# Сервисы

Angular **сервис** - это обычный класс, используемый в контексте Angular для хранения глобального состояния приложения или в качестве поставщика данных.

```ts
@Injectable({ providedIn: 'root' })
export class StatesService {
  private _filtersState: any = {
    accounts: {
      all: true,
      opened: false,
    },
    deposits: {
      all: true,
      opened: false,
    },
  }

  getFilters(): any {
    return this._filtersState
  }
}
```

```ts
@Injectable({ providedIn: 'root' })
export class AccountsHttpService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable {
    return this.http.get('/api/users')
  }
}
```

Angular сервисы могут быть определены на уровне приложения, модуля или компонента.

Уровень приложения.

```ts
@Injectable({providedIn: 'root'})
```

Уровень модуля.

```ts
@Injectable({providedIn: AccountsModule})
```

Уровень компонента.

```ts
@Component({
  selector: 'accounts-list',
  providers: [AccountsHttpService],
  template: `<div>My accounts</div>`
})
```

Определенный для компонента Angular сервис всегда будет создаваться по-новому и будет доступен только для этого компонента.

Если сервис регистрируется в приложении или модуле, который импортируется в `AppModule`, то он попадает в глобальный [injector](dependency-injection.md) и на все приложение создается один единственный его экземпляр. То есть, например, если значение свойства сервиса изменится одним компонентом, то второй компонент получит уже измененное значение этого свойства.

Два экземпляра сервиса создается только в том случае, если есть модули, которые загружаются асинхронно. Причем количество асинхронных модулей неважно: один экземпляр сервиса будет создан для "обычных", другой - для подгружаемых асинхронно.

Это происходит из-за того, что в момент загрузки, приложение не знает, будут ли созданы модули, для которых определена асинхронная инициализация. Поэтому они не включаются в глобальный injector, а при их инициализации создается их собственный injector.

Но если необходимо, чтобы сервис существовал в единственном экземпляре независимо от реализации загрузки модулей в приложении, нужно использовать статический метод `forRoot()`, который определяется в классе модуля.

```ts
export class AccountsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AccountsModule,
      providers: [AccountsHttpService],
    }
  }
}
```

Метод возвращает объект со свойствами `ngModule` и `providers`. В `ngModule` указывается сам модуль, в котором определяется метод, а в `providers` - все его сервисы, которые должны быть определены только в глобальном injector-е

Обратите внимание на тип возвращаемого методом значения.

Если помимо Angular сервисов, указанных в `forRoot()`, модуль содержит еще, например, компоненты и директивы, то для возможности их использования другими модулями приложениями нужно импортировать сам модуль - без вызова `forRoot()`.

Другое назначение метода `forRoot()` - конфигурирование модуля через передачу методу параметров при его вызове.

```ts
export class AccountsModule {
  static forRoot(
    acc: AccountsHttpService
  ): ModuleWithProviders {
    return {
      ngModule: AccountsModule,
      providers: [
        { provide: AccountsHttpService, useValue: acc },
      ],
    }
  }
}
```

Такая техника используется в основном для второстепенных модулей. Например, при работе с датами можно передать формат вывода даты.

## Ссылки

- [Services](https://angular.io/tutorial/toh-pt4)
