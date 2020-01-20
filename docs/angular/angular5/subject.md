---
description: Использование класса Subject для создания сервиса, реализующего observable и observer в Angular5.
---

# Subject

Класс `Subject` импортируется из `rxjs/Subject`. Данный класс объединяет `observable` и `observer` в одном объекте. Он реализует следующие методы:

- `next()` для отправки данных используется метод.
- `subscribe()` для принятия данных метод.
- `unsubscribe()` для отписки.

Хорошей практикой является реализовать сервис на основе `Subject` и использовать его как альтернативу `Emit`.

Рассмотрим пример создания простого сервиса на основе класса `Subject` и то как его можно использования в различных компонентах. Один из компонентов будет реализовывать метод `next()`, для формирования потока. Второй компонент будет наблюдать и реагировать на изменения данного потока.

Для начала создадим сервис `UsersService` в файле `\app\users.service.ts`:

```typescript
import { Subject } from 'rxjs/Subject'

export class UsersService {
  userActivated = new Subject()
}
```

Затем, нам нужно зарегистровать этот сервис в провайдерах `app.module.ts`:

```typescript
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'
import { AppRoutingModule } from './app-routing.module'
import { UsersService } from './users.service'

@NgModule({
  declarations: [AppComponent, HomeComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UsersService], // имя сервиса нужно передать в массив ключа providers
  bootstrap: [AppComponent]
})
export class AppModule {}
```

В шаблоне `observable` компонента поставим обработчик на событие `click` для запуска метода `onActivate()`:

```html
<p>User with <strong>ID {{ id }}</strong> was loaded</p>
<button class="btn btn-primary" (click)="onActivate()">Activate!</button>
```

Метод `onActivate()` использует метод `next()` для формирования потока:

```typescript
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  //...
  onActivate() {
    this.usersService.userActivated.next(this.id)
  }
}
```

И наконец, так выглядит подписка в компоненте реализующем наблюдателя:

```typescript
import { Component, OnInit } from '@angular/core'
import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false
  user2Activated = false

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userActivated.subscribe((id: number) => {
      if (id === 1) {
        this.user1Activated = true
      } else if (id === 2) {
        this.user2Activated = true
      }
    })
  }
}
```

Таким образом, на основании переданного `id` меняется состояние компонента, в котором реализуется наблюдение за `observable`.
