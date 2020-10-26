---
description: Angular модуль - это класс с декоратором @NgModule(), который служит изолирующей логической объединяющей структурой для компонентов, директив, фильтров и сервисов
---

# Модули

Angular **модуль** - это класс с декоратором [`@NgModule()`](https://angular.io/api/core/NgModule), который служит изолирующей логической объединяющей структурой для компонентов, директив, фильтров и сервисов. Все перечисленные сущности определяются и конфигурируются с помощью `@NgModule()`.

Angular приложение имеет модульную архитектуру и состоит, по крайней мере, из одного главного, или корневого, модуля. Все остальные относятся к второстепенным.

Сама библиотека `@angular` также модульная:

- [`BrowserModule`](https://angular.io/api/platform-browser/BrowserModule);
- [`CommonModule`](https://angular.io/api/common/CommonModule);
- [`FormsModule`](https://angular.io/api/forms/FormsModule);
- [`ReactiveFormsModule`](https://angular.io/api/forms/ReactiveFormsModule);
- [`HttpClientModule`](https://angular.io/api/common/http/HttpClientModule);
- [`RouterModule`](https://angular.io/api/router/RouterModule) и др.

Ключевая роль при создании Angular модуля у декоратора `@NgModule()`, принимающего конфигурационный объект со свойствами:

- `imports` - массив, где указывается список импортируемых второстепенных модулей;
- `exports` - массив компонентов, директив и фильтров, которыми пользуются другие модули, если они импортируют текущий;
- `declarations` - массив компонентов, директив и фильтров;
- `entryComponents` - массив создаваемых динамически компонентов;
- `bootstrap` - массив, в котором указывается компонент для загрузки;
- `providers` - массив сервисов.

По назначению модули можно классифицировать следующим образом:

- корневой;
- функциональный;
- маршрутизации;
- для поставки сервисов.

Корневой модуль - главный в приложении. Именно он загружается первым и импортирует в себя все второстепенные модули, которые могут импортировать в себя другие второстепенные модули.

Только корневой модуль может определять свойство `bootstrap` и импортировать `BrowserModule`.

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Функциональный Angular модуль реализует логически связанную совокупность компонентов, директив или фильтров (например, модули библиотеки `@angular/material`).

Практически всегда для модулей этого типа определяется свойство `exports`.

```ts
@NgModule({
  //
  exports: [
    AccountsComponent,
    CreditsComponent,
    DepositsComponent,
    CreditsFilterDirective,
  ],
  //
})
export class AppModule {}
```

Модуль маршрутизации нужен для определения иерархии маршрутов.

Angular модуль для поставки сервисов создается с использованием статического метода `forRoot()`.

## CoreModule и SharedModule

`CoreModule` - общепринятое название для модуля, используемого исключительно для поставки сервисов. Он не содержит в себе компонентов, директив и фильтров.

_core.module.ts_

```ts
@NgModule({
  imports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        LoggerService,
        SettingsService,
      ],
    }
  }
}
```

`SharedModule` - общепринятое название для Angular модуля, служащим единым хранилищем для компонентов, директив и фильтров, которыми пользуются другие модули.

_shared.module.ts_

```ts
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ImageCropperModule,
    ScrollbarModule,
    SlickModule,
    SlickModule.forRoot(),
  ],
  exports: [
    CommonModule,
    ImageCropperModule,
    ScrollbarModule,
    SlickModule,
    AppLangsComponent,
    AppTabFilterComponent,
    AppFileUploadComponent,
    ComponentPreloaderDirective,
  ],
  declarations: [
    AppLangsComponent,
    AppTabFilterComponent,
    AppFileUploadComponent,
    ComponentPreloaderDirective,
  ],
})
export class SharedModule {}
```

```ts
@NgModule({
	imports: [
		//
		CoreModule.forRoot(),
		SharedModule
	]
})
```
