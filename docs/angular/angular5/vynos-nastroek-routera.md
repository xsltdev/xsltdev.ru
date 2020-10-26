---
description: Пример переноса роутинговой конфигурации Angular5 в отдельный файл.
---

# Вынос настроек роутера

Хорошим тоном считается выносить конфиг роутера в отдельный файл. Для этого создадим файл `app-routing.module.ts` и перенесем в него конфиг из `app.module.ts`:

```typescript
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { UsersComponent } from './users/users.component'
import { ServersComponent } from './servers/servers.component'
import { UserComponent } from './users/user/user.component'
import { EditServerComponent } from './servers/edit-server/edit-server.component'
import { ServerComponent } from './servers/server/server.component'
import { Page404Component } from './page404/page404.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent },
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
  { path: 'page404', component: Page404Component },
  { path: '**', redirectTo: '/page404' },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

В декораторе `@NgModule` не нужно импортировать эти классы, т.к. они уже импортированы в `app.module.ts`, который сейчас выглядит так:

```typescript
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { UsersComponent } from './users/users.component'
import { ServersComponent } from './servers/servers.component'
import { UserComponent } from './users/user/user.component'
import { EditServerComponent } from './servers/edit-server/edit-server.component'
import { ServerComponent } from './servers/server/server.component'
import { ServersService } from './servers/servers.service'
import { Page404Component } from './page404/page404.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Следует обратить внимание, на то, что в файле `app-routing.module.ts` мы экспортируем `RouterModule`:

```typescript
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

А в файле `app.module.ts` задан импорт `AppRoutingModule`:

```typescript
@NgModule({
  declarations: [
    //...
  ],
  imports: [
    //...
    AppRoutingModule
  ],
  //...
})
```
