---
description: Методы класса HttpClient после выполнения запроса возвращают объект Observable, который определен в библиотеке RxJS
---

# Объект Observable и библиотека RxJS

Методы класса `HttpClient` после выполнения запроса возвращают объект **`Observable<any>`**, который определен в библиотеке RxJS ("Reactive Extensions"). Она не является непосредственно частью Angular, однако широко используется особенно при взаимодействии с сервером по http. Эта библиотека реализует паттерн "асинхронный наблюдатель" (asynchronous observable). Так, выполнение запроса к серверу с помощью класса `HttpClient` выполняются в асинхронном режиме.

Естественно чтобы задействовать функционал RxJS в приложении, в проект должна быть добавлена соответствующая зависимость `rxjs`:

```json
{
  "name": "helloapp",
  "version": "1.0.0",
  "description": "First Angular 7 Project",
  "author": "Eugene Popov <metanit.com>",
  "scripts": {
    "dev": "webpack-dev-server --hot --open",
    "build": "webpack"
  },
  "dependencies": {
    "rxjs": "^6.3.3"
    // остальное содержимое секции
  },
  "devDependencies": {
    // содержимое секции
  }
}
```

Используя специальные методы для объекта `Observable`, например, `map` и `filter`, можно произвести некоторую постобработку полученных от сервера результатов.

Так, возьмем проект из прошлой темы:

![Структура приложения](observable-1.png)

Например, определим в файле `users.json` данные, которые напрямую не соответствуют массиву объектов `User`:

```json
{
  "userList": [
    {
      "userName": "Bob",
      "userAge": 28
    },
    {
      "userName": "Tom",
      "userAge": 45
    },
    {
      "userName": "Alice",
      "userAge": 32
    }
  ]
}
```

В качестве модели данных используем класс `User`:

```typescript
export class User {
  name: string
  age: number
}
```

Определим следующий код сервиса, который будет получать данные из `users.json`:

```typescript
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from './user'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get('users.json').pipe(
      map((data) => {
        let usersList = data['userList']
        return usersList.map(function (user: any) {
          return { name: user.userName, age: user.userAge }
        })
      })
    )
  }
}
```

Смысл использования специального сервиса для работы с http заключается в сокрытии деталей отправки запросов. Компонент же ожидает получить какие-то конкретные данные, например, в виде набора объектов `User`. С помощью метода `map` библиотеки `rxjs` можно преобразовать данные из одного формата в другой.

У результата метода `get()` мы можем вызвать метод `pipe()`, который позволяет обработать результаты запроса. Для этого метод `pipe` в качестве первого параметра принимает функцию обработки данных запроса. В данном случае в роли такой функции выступает оператор `map`, который преобразует результаты запроса в новые объекты.

Но чтобы использовать элементы библиотеки RxJS, их надо импортировать:

```typescript
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
```

В итоге весь метод `getUsers()` возвращает объект `Observable<User[]>`.

Теперь используем сервис в классе компонента:

```typescript
import { Component, OnInit } from '@angular/core'
import { HttpService } from './http.service'
import { User } from './user'

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let user of users">
        <p>Имя пользователя: {{ user?.name }}</p>
        <p>Возраст пользователя: {{ user?.age }}</p>
      </li>
    </ul>
  `,
  providers: [HttpService],
})
export class AppComponent implements OnInit {
  users: User[] = []

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .getUsers()
      .subscribe((data) => (this.users = data))
  }
}
```
