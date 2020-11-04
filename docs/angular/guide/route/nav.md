---
description: Angular поддерживает программную навигацию. То есть программным образом из любого места приложения мы можем перейти к любому ресурсу
---

# Программная навигация

Мы можем переходить по ресурсам внутри приложения с помощью ссылок. Но также Angular поддерживает программную навигацию. То есть программным образом из любого места приложения мы можем перейти к любому ресурсу. Для этого применяется сервис `Router`, который определен в пакете `@angular/router` и который передается в компоненты через механизм dependency injection.

Так, определим в компоненте кнопку и обработчик кнопки, который будет перенаправлять на определенный ресурс:

```typescript
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <nav>
        <a routerLink="">Главная</a>
        <a routerLink="/about">О сайте</a>
      </nav>
      <router-outlet></router-outlet>
      <button (click)="goHome()">На главную</button>
    </div>
  `,
})
export class AppComponent {
  constructor(private router: Router) {}
  goHome() {
    this.router.navigate([''])
  }
}
```

Через конструктор получаем объект `Router` и в обработчике кнопки вызываем его метод `navigate()`. В этот метод передается путь перехода. Если мы переходим на главную страницу, которая представлена `HomeComponent`, то передается пустая строка. Чтобы перейти, допустим, к компоненту `AboutComponent`, можно было бы передать соответствующий путь: `this.router.navigate(['/about'])`;

## Параметры маршрута и строки запроса

Изменим компонент `AppComponent`, добавив форму для ввода параметров:

```typescript
import { Component } from '@angular/core'
import { Router } from '@angular/router'

export class Item {
  id: number
  product: string
  price: number
}

@Component({
  selector: 'my-app',
  template: `
    <div>
      <nav>
        <a routerLink="">Главная</a>
        <a routerLink="/about">О сайте</a>
      </nav>
      <div class="form-group">
        <h3>Параметры объекта</h3>
        <input
          type="number"
          [(ngModel)]="item.id"
          class="form-control"
          placeholder="Номер модели"
        /><br />
        <input
          type="number"
          [(ngModel)]="item.price"
          class="form-control"
          placeholder="Цена"
        /><br />
        <input
          [(ngModel)]="item.product"
          class="form-control"
          placeholder="Товар"
        /><br />
        <button (click)="goToItem(item)" class="btn">
          Перейти
        </button>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  item: Item = new Item()

  constructor(private router: Router) {}

  goToItem(myItem: Item) {
    this.router.navigate(['/item', myItem.id], {
      queryParams: {
        product: myItem.product,
        price: myItem.price,
      },
    })
  }
}
```

Для передачи компоненту `ItemComponent` нужных параметров в метод `navigate()` первого параметра передается набор значений, первое из которых — собственно путь, а все последующие — значения для параметров маршрута. Второй параметр представляет объект javascript, который содержит все нужные значения для параметров строки запроса:

![Скриншот](nav-1.png)
