---
description: Каждый раз, когда в Angular приложении осуществляется навигация, Router сервис инициирует ряд событий
---

# События маршрутизации

Каждый раз, когда в Angular приложении осуществляется навигация, [`Router`](https://angular.io/api/router/Router) сервис инициирует ряд событий:

- [`NavigationStart`](https://angular.io/api/router/NavigationStart) - начало навигации;
- [`RoutesRecognized`](https://angular.io/api/router/RoutesRecognized) - завершение процесса парсинга URL и распознавания маршрутов;
- [`RouteConfigLoadStart`](https://angular.io/api/router/RouteConfigLoadStart) - инициируется непосредственно перед асинхронной загрузкой маршрутов;
- [`RouteConfigLoadEnd`](https://angular.io/api/router/RouteConfigLoadEnd) - инициируется непосредственно после асинхронной загрузкой маршрутов;
- [`NavigationEnd`](https://angular.io/api/router/NavigationEnd) - завершение навигации;
- [`NavigationCancel`](https://angular.io/api/router/NavigationCancel) - навигация отклонена, возникает, когда guard возвращает `false`;
- [`NavigationError`](https://angular.io/api/router/NavigationError) - возникновение непредвиденной ошибки в процессе осуществления навигации.

Перечисленные выше события могут быть обработаны в любом компоненте или сервисе приложения. Чтобы определить для них обработчики, необходимо "подписаться" на свойство `events` сервиса `Router`.

Определим обработчики в контроллере `HomePageComponent`:

```ts
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation Start')
      }

      if (event instanceof NavigationEnd) {
        console.log('Navigation End')
      }
    })
  }
}
```

Обратите внимание, что классы событий должны быть импортированы из библиотеки `@angular/router`.

Например, приведенное выше можно использовать для отображения/скрытия индикатора загрузки страницы.

## Ссылки

- [Router events](https://angular.io/guide/router#router-events)
