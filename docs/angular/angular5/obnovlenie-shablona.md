---
description: Обновление шаблона при динамическом роутинге и отписка от наблюдения.
---

# Обновление шаблона

Если есть динамическая ссылка, например:

```html
<a [routerLink]="['/users', 10, 'Anna']">Load Anna (10)</a>
```

И в шаблоне в `ngOnInit()` формируется объект по параметрам _url_:

```typescript
this.user = {
  id: this.route.snapshot.params['id'],
  name: this.route.snapshot.params['name']
}
```

Для обновления шаблона при переходе по такой ссылке необходимо подписаться на событие:

```typescript
import { ActivatedRoute, Params } from '@angular/router';
//...
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
    this.route.params.subscribe(
      (params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
      }
    );
  }
```

Когда вы подписываетесь на наблюдение в компоненте, практически всегда нужно отписываться, когда компонент уничтожается. `ActivatedRoute` является одним из немногих исключений, так как он отписывается автоматически. Тем не менее, отписываться является хорошей практикой, которая никогда не будет лишней.

```typescript
//...
import { Subscription } from 'rxjs/Subscription';
//...
paramsSubscription: Subscription;
//...
ngOnInit() {
  //...
  this.paramsSubscription = this.route.params.subscribe(
    //...
  );
}

ngOnDestroy() {
  this.paramsSubscription.unsubscribe;
}
```
