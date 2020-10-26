---
description: Программное переключение роутера и параметры пути в Angular5.
---

# Route (переключение и параметры)

## Переключение роутера с помощью API

В компоненте:

```typescript
//...
import { Router } from '@angular/router';

@Component({
//...
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  ...
  onServerLoaded() {
    //complex logic
    this.router.navigate(['/servers']);
  }
}
```

## Относительная ссылка

В программном роутинге нельзя просто указать относительную ссылку, необходимо передать объект текущего роутера для построения ссылки относительно него:

```typescript
//...
import { Router, ActivatedRoute } from '@angular/router';

@Component({
//...
})
export class ServersComponent implements OnInit {
  //...
  constructor(...
        private router: Router,
        private route: ActivatedRoute) { }
  //...
  go_to_rel_link() {
    this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
```

## Передача параметров в роутер

Для того, чтобы роутер сработал на произвольную часть url, как на шаблон, достаточно добавить двоеточие в `path`, часть после двоеточия будет соответствовать чему угодно:

```typescript
const appRoutes: Routes = [
  //...
  { path: 'users/:id', component: UserComponent },
  //...
]
```

## Получение параметров роутера

В модуле:

```typescript
const appRoutes: Routes = [
  { path: 'users/:id/:name', component: UserComponent },
  //...
]
```

В компоненте:

```typescript
//...
import { ActivatedRoute } from '@angular/router'

@Component({
  //...
})
export class UserComponent implements OnInit {
  user: { id: number; name: string }
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
  }
}
```
