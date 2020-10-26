---
description: Dependency Injection - широко распространенный паттерн проектирования (DI), который позволяет создавать объект, использующий другие объекты. При этом изменения в определении используемых объектов никак не влияют на создаваемый объект
---

# Dependency injection

**Dependency Injection** - широко распространенный паттерн проектирования (сокращенно DI), который позволяет создавать объект, использующий другие объекты. При этом изменения в определении используемых объектов никак не влияют на создаваемый объект.

Ядро Angular имеет свою собственную реализацию паттерна Dependency Injection и без него создать приложение было бы просто невозможно. Самый простой пример DI в Angular - это использованием компонентом сервиса, чаще всего для получения данных.

Для того чтобы созданный сервис мог быть использован компонентом или другим сервисом, его объявление должно предваряться декоратором [`@Injectable()`](https://angular.io/api/core/Injectable). Поскольку сервисы создаются именно для стороннего использования, то рекомендуется всегда использовать декоратор.

Все сервисы регистрируются Injector-ом, который является частью механизма DI в Angular. Причем в приложении может быть несколько injector-ов одновременно.

Самый главный - root injector. Он регистрирует все сервисы, которые определяются на уровне модулей. Дочерние injector-ы создаются в том случае, если есть хотя бы один сервис, который определен только в пределах компонента. Причем если сервисы создаются в двух разных компонентах, то будут созданы два injector-а, даже если это один и тот же сервис.

Когда компоненту требуется сервис, то его поиск начинается с самого нижнего injector-а и далее вверх по иерархии, то есть сначала проверяется уровень самого компонента.

Если сервис был найден на одном из нижних уровней, то дальнейший поиск не осуществляется. Если же поиск вообще не даст никаких результатов, то будет сгенерирована ошибка.

## Декораторы @SkipSelf() и @Optional()

Немного выше уже упоминались два нюанса, связанных с работой Angular Dependency Injection. Первая из них это прекращение поиска, если запрошенный сервис определен на уровне компонента. Но что если вам понадобится, например, обратиться из этого компонента к двум сервисам одновременно: локальному и глобальному?

Здесь поможет использование декоратора [`@SkipSelf()`](https://angular.io/api/core/SkipSelf). Если указать его в конструкторе перед нужным сервисом, то локальный injector будет исключен из поиска.

```ts
@Component({
  selector: 'deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss'],
})
export class DepositsComponent {
  constructor(
    private localDepositsService: DepositsService,
    @SkipSelf() private rootDepositsService: DepositsService
  ) {}
}
```

Таким образом, если указать два одинаковых сервиса в одном компоненте, но перед одним из них поставить `@SkipSelf()`, то удастся получить доступ к локальному и глобальному экземплярам одновременно.

Назначение декоратора [`@Optional()`](https://angular.io/api/core/Optional) весьма простое. В случае отсутствия необходимого сервиса во всех Angular injector не будет сгенерировано исключение, а в переменную, которая должна была стать экземпляром, просто запишется `null`.

## Angular Providers

Основная задача Angular Dependency Injection - снабжение сервисами компонентов, директив и других сущностей. При создании экземпляров запрашиваемых сервисов injector полностью полагается на значения свойства providers (указывается у декораторов [`@NgModule()`](https://angular.io/api/core/NgModule) и [`@Component()`](https://angular.io/api/core/Component)) или на значение объекта, передаваемого `@Injectable()`.

Если не указать сервис в providers и ничего не передать `@Injectable()`, то Angular injector не будет знать о его существовании.

Самый простой способ зарегистрировать сервис в приложении.

```ts
@Injectable({ providedIn: 'root' })
export class DepositsService {}
```

Альтернативный вариант.

```ts
@NgModule({
	providers: [DepositsService]
})
```

В последнем примере `DepositsService` - это injection token, по которому injector идентифицирует запрашиваемый сервис. Обращение к сервисам внутри приложения происходит именно по их injection token.

Также в качестве элемента массива свойства Angular providers можно передать объект конфигурации сервиса.

```ts
@NgModule({
	providers: [{provide: DepositsService, useClass: DepositsService}]
})
```

Последние два примера полностью идентичны друг другу.

Конфигурационный объект позволяет переопределить значение для конкретного injection token.

```ts
providers: [
  { provide: DepositsService, useClass: OtherService },
]
```

Так при обращении к `DepositsService` будет использован `OtherService`.

Возможные свойства объекта конфигурации:

- `useClass` - каждый раз при обращении к зависимости, указанной в `provide`, создается новый экземпляр класса, указанного в `useClass`;
- `useExisting` - каждый раз при обращении к зависимости, указанной в `provide`, будет использоваться один и тот же экземпляр класса, указанного в `useClass`;
- `useValue` - позволяет при обращении к зависимости, указанной в `provide`, использовать предопределенный объект;
- `useFactory` и `deps` - эти свойства позволяют создавать переопределяющее значение динамически уже в процессе работы приложения.

Например, вы не хотите внедрять сервис `AuthService` в сервис `UserService`, который необходим, чтобы записать в данные пользователя дату и время последней авторизации. В такой ситуации идеально подойдет factory provider.

_user.service.ts_

```ts
constructor(private lastAuth: Date){
  this.user.lastAuth = lastAuth;
}
```

_user-factory.service.ts_

```ts
let userServiceFactory = (auth: AuthService) => {
  return new UserService(auth.lastAuthDate)
}
```

_app.module.ts_

```ts
providers: [
  {
    provide: UserService,
    useFactory: userServiceFactory,
    deps: [AuthService],
  },
]
```

В deps перечисляются все зависимости, необходимые для создания factory provider.

Все значения, указываемые в свойстве `provide` должны существовать в приложении и быть классами, иначе будет неизвестно, что принимать за injection token.

Для того чтобы сделать возможным внедрение в компонент сущность, не являющуюся сервисом Angular, нужно определить для нее вручную injection token.

_default-settings-injection-token.ts_

```ts
import { InjectionToken } from '@angular/core'

export const DEFAULT_SETTINGS = new InjectionToken<string>(
  'settings',
  {
    providedIn: 'root',
  }
)
```

_app.module.ts_

```ts
import { DEFAULT_SETTINGS } from './default-settings-injection-token.ts'

providers: [
  {
    provide: DEFAULT_SETTINGS,
    useValue: { logging: true, requireAuth: false },
  },
]
```

Для создания injection token используется класс `InjectionToken`, конструктор которого в качестве первого параметра принимает строковое описание, а в качестве второго - объект с дополнительной конфигурацией (по умолчанию `undefined`).

В конфигурации можно указать только свойства `providedIn` и `factory`. Свойство `factory` должно определять функцию, которая возвращает значение для создаваемого injection token.

## Ссылки

- [Dependency Injection in Angular](https://angular.io/guide/dependency-injection)
- [Dependency Injection in Action](https://angular.io/guide/dependency-injection-in-action)
