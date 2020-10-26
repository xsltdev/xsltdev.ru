---
description: При запуске приложения первым выполняется код, который определен в файле main.ts
---

# Загрузка приложения

При запуске приложения первым выполняется код, который определен в файле `main.ts`. Этот файл имеет следующее содержимое:

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'
const platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule)
```

Первая строка импортирует функциональность модуля `platformBrowserDynamic` из пакета `@angular/platform-browser-dynamic`. `platformBrowserDynamic` использует `bootstrapModule` для загрузки нужного модуля.

Фактически `platformBrowserDynamic` запускает импортированный во второй строке модуль `AppModule`. После этого начинает работать вся логика, которая заложена в модуле `AppModule`, который представляет главный модуль приложения. Больше ничего файл `main.ts` не делает.

![Загрузка приложения](load-app-1.png)

В самом же `AppModule` нам надо указать, какой именно компонент будет использоваться в качестве основного при загрузке. Для этого используется параметр `bootstrap` декоратора `NgModule`:

```typescript
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

То есть в данном случае значение `bootstrap: [ AppComponent ]` указывает, что модуль для загрузки в качестве основного компонента будет использовать класс `AppComponent`.

Если мы опустим компонент: `bootstrap: [ ]` или вовсе уберем параметр `bootstrap`, то на веб-страницу не будет загружаться представление из комопонента `AppComponent`.
