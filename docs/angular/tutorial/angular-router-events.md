# Маршрутизация. Router events

Каждый раз, когда в Angular приложении осуществляется навигация, `Router` сервис инициирует ряд событий:

- `NavigationStart` - начало навигации;
- `RoutesRecognized` - завершение процесса парсинга URL и распознавания маршрутов;
- `RouteConfigLoadStart` - инициируется непосредственно перед асинхронной загрузкой маршрутов;
- `RouteConfigLoadEnd` - инициируется непосредственно после асинхронной загрузкой маршрутов;
- `NavigationEnd` - завершение навигации;
- `NavigationCancel` - навигация отклонена, возникает, когда guard возвращает `false`;
- `NavigationError` - возникновение непредвиденной ошибки в процессе осуществления навигации.

Перечисленные выше события могут быть обработаны в любом компоненте или сервисе приложения. Чтобы определить для них обработчики, необходимо "подписаться" на свойство `events` сервиса `Router`.

Определим обработчики в контроллере `HomePageComponent`:

```ts
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
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
