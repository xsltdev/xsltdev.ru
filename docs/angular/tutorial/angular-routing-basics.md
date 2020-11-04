---
description: В Angular маршрутизация представляет собой переход от одного представления (шаблона) к другому в зависимости от заданного URL. Причем навигация может осуществляться и внутри представления
---

# Маршрутизация

В Angular **маршрутизация** представляет собой переход от одного представления (шаблона) к другому в зависимости от заданного URL. Причем навигация может осуществляться и внутри представления.

Навигация в Angular приложениях происходит без перезагрузки страницы.

Ключевая роль в формировании URL принадлежит тегу `<base>`, указывающему путь к приложению относительно расположения файла `index.html`. Если `index.html` располагается в директории клиентского приложения, то тег должен быть записан следующим образом.

```html
<base href="/" />
```

Если бы клиентское приложение находилось в директории `example`, а `index.html` на одном уровне иерархии с ней, то было бы так:

```html
<base href="/example" />
```

За организацию маршрутизации в Angular отвечает модуль [`RouterModule`](https://angular.io/api/router/RouterModule) библиотеки `@angular/router`.

URL организуются в специальные модули и определяются для каждого отдельного модуля приложения.

Рассмотрим создание модуля `AppRoutingModule`.

```ts
const routes: Routes = [
  { path: 'login', component: LoginRouteComponent },
  {
    path: 'home',
    component: HomeRouteComponent,
    children: [
      { path: 'profile', component: ProfileRouteComponent },
    ],
  },
  {
    path: 'contacts',
    redirectTo: '/home',
    pathMatch: 'full',
    children: [
      {
        path: 'director',
        component: DirectorContactsRouteComponent,
      },
    ],
  },
  { path: '**', component: LoginRouteComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

При определении маршрута можно указать ряд свойств:

- `path` — наименование маршрута;
- `component` — компонент для отображения при переходе на URL, совпадающий с `path`;
- `children` — одно из дополнительных свойств, объединяющее в себе группу маршрутов относительно текущего;
- `data` — дополнительные данные, например, значение хлебных крошек;
- `redirectTo` — перенаправляет на указанный URL при попадании на маршрут, указанный в `path`;
- `pathMatch` — используется совместно с `redirectTo`.

Обратите внимание, что компоненты-маршруты должны быть импортированы в модуль Angular маршрутизации.

Родительский маршрут не обязательно должен определять свойство component, он может просто объединять в себе логически связанные маршруты. Например, в примере выше `contacts` — родитель для страниц с контактами.

Разберем подробно назначение свойства `pathMatch`. У нас имеется маршрут `contacts`, прямой переход на который вызвал бы ошибку, если бы не было определено свойство `redirectTo`, поскольку для `contacts` не определен компонент.

Теперь представим, что `redirectTo` указан, а `pathMatch` — нет. Переход по маршруту `/contacts/director` отобразит компонент, указанный в `redirectTo` для `contacts`. Это происходит потому что при навигации на дочерний маршрут, `Router` проходит по дереву иерархии все его родительские URL и при попадании на `/contacts` сработает редирект.

Чтобы избежать этого в Angular routing указывается свойство `pathMatch` со значением `full`. И тогда перенаправление сработает только когда точно будет запрошен URL `/contacts`.

Для обработки несуществующих маршрутов необходимо использовать `path` со значением `**` (означает любой маршрут). Таким образом, если запрошенный URL не найдет соответствий в определенной конфигурации, то маршрутизатор отобразит компонент, указанный для `**`.

!!! note ""

    В Angular маршрутизации важен порядок определения URL. При запросе маршрутизатор ищет первый подходящий маршрут в порядке их определения. Поэтому обработка любого URL всегда должна определяться в самом конце.

Определение маршрутов далее передается в качестве аргумента методу `forRoot()` модуля `RouterModule`.

!!! note ""

    Метод forRoot() используется только при определении набора URL корневого модуля. Для остальных (дочерних) модулей используется метод forChild().

Далее `AppRoutingModule` импортируется в модуль, для которого создается навигация.

```ts
@NgModule({
	imports: [
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		LoginRouteComponent,
		HomeRouteComponent,
		ProfileRouteComponent,
		DirectorContactsRouteComponent
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: []
})
```

Компоненты, на которые указывает Angular routing, подгружаются в место, где указана директива `<router-outlet></router-outlet>`.

Для маршрутов, находящихся на самом верхнем уровне иерархии (`LoginRouteComponent` и `HomeRouteComponent`), родительским служит компонент, указанный в поле `bootstrap`.

```html
<div class="wrapper">
  <app-nav></app-nav>

  <main>
    <router-outlet></router-outlet>
  </main>

  <app-footer></app-footer>
</div>
```

Для перехода на дочерний маршрут (child route) необходимо указать полный путь к нему начиная с самого верхнего родителя.

То есть, чтобы увидеть `ProfileRouteComponent`, нужно в адресную строку браузера ввести `/home/profile`. При этом `HomeRouteComponent` должен содержать директиву `<router-outlet></router-outlet>`, поскольку последующая навигация происходит только внутри него самого.

_home-route.component.html_

```html
<div class="profile">
  <h1>Home Page</h1>
  <router-outlet></router-outlet>
</div>
```

Структура Angular routing определена, но как теперь перейти на описанные URL из шаблона? В `AppComponent` используется компонент `AppNavComponent`, в котором и определено меню приложения.

_app-nav.component.html_

```html
<ul>
  <li>
    <a routerLink="/home" routerLinkActive="active-link"
      >Home</a
    >
  </li>
  <li>
    <a
      routerLink="/home/profile"
      routerLinkActive="active-link"
      >Profile</a
    >
  </li>
  <li>
    <a
      routerLink="/contacts/director"
      routerLinkActive="active-link"
      >Director contacts</a
    >
  </li>
</ul>
```

Для перехода по заданным URL используется директива [`routerLink`](https://angular.io/api/router/RouterLink), которая может быть указана не только у тега `<a>`, но и у любого другого блочного HTML элемента.

Совместно с `routerLink` используется директива [`routerLinkActive`](https://angular.io/api/router/RouterLinkActive). Она принимает название класса, который будет добавлен элементу (у которого указаны директивы) при активном URL, на который они ссылаются.

Как видно, все ссылки указываются от корня приложения (начинаются с `/`). Но в Angular routing также возможно использование относительных ссылок.

Предположим, в `HomeRouteComponent` должна содержаться ссылка на компонент `ProfileComponent`. Поскольку URL для `HomeComponent` (home) является родительским по отношению к URL `ProfileRouteComponent` (profile). Ссылка может быть указана так:

```html
<li>
  <a routerLink="profile" routerLinkActive="active-link"
    >Profile</a
  >
</li>
```

Указание относительных ссылок позволяет избежать переписывания всех ссылок дочерних компонентов при изменении родительской.

Любое Angular приложение, реализующее внутри себя навигацию, имеет единственный экземпляр сервиса `Router`, который хранит полную конфигурацию маршрутов и реализует API для работы с навигацией.

Наиболее часто используемым методом сервиса Router является `navigate()`. В качестве первого параметра он принимает массив, где задается URL, а в качестве второго — объект с дополнительными параметрами запрашиваемого маршрута:

```ts
this.router.navigate(['profile', 3], {
  queryParams: { id: 3 },
  fragment: 'address',
})
```

## Маршруты с параметрами

Часто возникает необходимость отображения данных в зависимости от какого-то параметра, например, `id`. Эти параметры обычно передаются через URL.

Модернизируем маршрут `profile`, который должен отображать данные профиля по запрашиваемому `id`. Также укажем хлебные крошки через свойство `data`.

```ts
{
	path: 'home',
	component: HomeComponent,
	children: [{
		path: 'profile/:id',
		component: ProfileComponent,
		data: {breadcrumbs: 'Profile info'}
	}]
}
```

Получить значение параметра и свойства `data` позволяет сервис `ActivatedRoute`. В его экземпляре, определенном для компонента-маршрута, содержится полная информация.

_profile.component.ts_

```ts
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route)
  }
}
```

В консоль будет выведена полная информация о текущем URL. Необходимые свойства:

- `url` — наименование маршрута;
- `params` — параметры Angular маршрутизации и их значения, указываемые при определении маршрута, например, `id` в `/profile/:id`;
- `queryParams` — параметры строки запроса, например, `id` в `/profile?id=3`;
- `fragment` — значение `hash`, например, `address` в `/profile#address`;
- `data` — объект одноименного свойства, указываемого при определении маршрута.

В шаблоне параметры маршрутизации передаются следующим образом: в качестве значения директивы указывается массив, первое значение которого URL, второе — значение параметра данного URL.

```html
<a [routerLink]="['profile', 3]">Profile</a>
```

Параметры строки запроса и `hash` имеют следующую запись:

```html
<a [routerLink]="['profile']" [queryParams]="{id: 3}"
  >Profile</a
>
```

```html
<a [routerLink]="['profile']" [fragment]="address"
  >Profile</a
>
```

## Множественная маршрутизация (named outlets)

В Angular различают основные и второстепенные маршруты. В пределах одного компонента может быть только один основной маршрут и сколько угодно второстепенных.

Реализуется это с помощью директивы `<router-outlet></router-outlet>`. Основной URL соответствует стандартной записи директивы, второстепенный — записи директивы с атрибутом name.

Основные и второстепенные URL полностью независимы друг от друга. Для создания второстепенного маршрута при его определении нужно указать значения атрибута name директивы `<router-outlet></router-outlet>` в свойстве `outlet`.

Добавим в приложение второстепенный маршрут `discount-info`, который будет отображать информацию о скидках.

Обновим определение Angular routing.

```ts
{path: 'discount-info', component: DiscountInfoComponent, outlet: 'discount'}
```

Обновим файл `app.component.html`.

```html
<div class="wrapper">
  <app-nav></app-nav>

  <main>
    <div class="row">
      <div class="col-9">
        <router-outlet></router-outlet>
      </div>

      <div class="col-3">
        <router-outlet name="discount"></router-outlet>
      </div>
    </div>
  </main>

  <app-footer></app-footer>
</div>
```

Теперь в приложении в правой колонке будет отображаться информация о скидках. Чтобы отобразить/скрыть значение второстепенного маршрута, можно выполнить следующее:

```html
<a [routerLink]="[{outlets: {discount: null}}]"
  >Hide discount</a
>

<a [routerLink]="[{outlets: {discount: 'discount-info'}}]"
  >Show discount</a
>
```

Или из контроллера:

```ts
this.router.navigate([{ outlets: { discount: null } }])

this.router.navigate([
  { outlets: { discount: 'discount-info' } },
])
```

При отображении/скрытии обратите внимание на значение адресной строки браузера. В конце URL должна появляться/исчезать приписка.

```ts
...(discount:discount-info)
```

## Ссылки

- [Router. The Basics](https://angular.io/guide/router#the-basics)
