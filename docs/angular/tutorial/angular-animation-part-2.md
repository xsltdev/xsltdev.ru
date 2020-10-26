---
description: В Angular анимации можно определить стили один раз и использовать их в нескольких компонентах при создании для них анимированных смен состояний
---

# Анимация. Часть 2

## Переиспользование анимации

В Angular анимации можно определить стили один раз и использовать их в нескольких компонентах при создании для них анимированных смен состояний (подобно переиспользованию компонентов, директив и др.).

Используя метод `animation()` опишите анимацию и экспортируйте ее.

```ts
export const reusableAnimation = animation([
  style({
    backgroundColor: '{{ backgroundColor }}',
    fontSize: '{{ fontSize }}',
    width: '{{ width }}',
  }),
  animate('{{ time }}'),
])
```

В двойных фигурных скобках описаны параметры, передаваемые анимации при ее вызове через [`useAnimation()`](https://angular.io/api/animations/useAnimation). Также допустимо использование константных значений.

Пример такой Angular анимации.

```ts
@Component({
	selector: 'reusable-animation',
	templateUrl: './reusable-animation.component.html',
	animations: [
		trigger('reusableAnimation', [
			transition('initial => expanded', useAnimation(reusableAnimation, {
				params: {
					backgroundColor: '#fff',
					fontSize: '16px',
					time: '0.3s',
					width: '100%'
				}
			}))
		])
	]
})
```

Функция `useAnimation()` принимает два параметра: первый - анимация, определенная для переиспользования, второй - объект, в свойстве params которого указываются значения параметров.

## Сложная анимация

Под сложной анимацией в Angular понимается одновременная или последовательная работа нескольких простых анимаций. В частности, например, она позволяет сделать анимированным появление/исчезание связанной последовательности элементов (пункты списка, строки таблицы).

Реализуется подобное с помощью следующих функций:

- `query()` - находит один и более дочерних HTML-элементов по заданному критерию в пределах элемента, к которому применяется анимация, и применяет ее к каждому из них;
- `stagger()` - устанавливает задержку для найденных функцией `query()` элементов;
- `group()` - запускает все составляющие анимации параллельно;
- `sequence()` - запускает все составляющие последовательно.

Рассмотрим применение сложной анимации одновременно к нескольким элементам, используя `query()` и `stagger()`.

```js
animations: [
  trigger('appearingItems', [
    transition(':enter', [
      query('ul.users li', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)',
        }),
        stagger(-50, [
          animate(
            '300ms',
            style({ opacity: 1, transform: 'none' })
          ),
        ]),
      ]),
    ]),
  ]),
]
```

Здесь Angular анимация `appearingItems` определяется для появляющихся элементов списка (состояние `:enter`) с классом стилей `.users`.

Первым параметром `query()` передается селектор (критерий поиска элементов), а вторым - массив с описанием анимации, где первое использование функции `style()` задает исходные стили для элементов, попадающих под критерий поиска.

Теперь перейдем к примеру с использованием `group()`.

```ts
animations: [
  trigger('groupAnimation', [
    transition(':enter', [
      style({
        transform: 'translateX(-100px)',
        opacity: 0,
      }),
      group([
        animate(
          '0.3s ease',
          style({ transform: 'translateX(0)' })
        ),
        animate('0.2s 0.15 ease', style({ opacity: 1 })),
      ]),
    ]),
  ]),
]
```

Сразу стоит отметить, что функция `group()` группирует не элементы, а стадии составной анимации применительно к одному элементу, которые работают одновременно и независимо друг от друга.

Как и в предыдущем примере, использование `style()` задает исходные стили элемента. Далее с помощью `group()` для каждого свойства задается своя конфигурация анимирования.

Для выполнения этой же Angular анимации последовательно без использования задержки, используется функция `sequence()`.

```ts
animations: [
  trigger('sequenceAnimation', [
    transition(':enter', [
      style({
        transform: 'translateX(-100px)',
        opacity: 0,
      }),
      sequence([
        animate(
          '0.3s ease',
          style({ transform: 'translateX(0)' })
        ),
        animate('0.2s 0.15 ease', style({ opacity: 1 })),
      ]),
    ]),
  ]),
]
```

## Анимированная смена маршрутов

Анимация маршрутов требует понимания работы [модуля маршрутизации Angular](angular-routing-basics.md).

Фактически переход с одного URL приложения на другой - это просто смена представлений (change views). Используя анимацию Angular можно сделать смену маршрутов анимированной.

_app-routing.module.ts_

```ts
const routes: Routes = [
	{
		{path: 'page1', component: Page1Component, data: {animation: 'page1'}},
		{path: 'page2', component: Page2Component, data: {animation: 'page2'}}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
```

_app.component.html_

```html
<div
  [@routeChangeAnimation]="getRouteAnimationState(outlet)"
>
  <router-outlet #outlet="outlet"></router-outlet>
</div>
```

_app.component.ts_

```ts
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  animations: [routeChangeAnimation],
})
export class AppComponent {
  constructor() {}

  getRouteAnimationState(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
  }
}
```

_change-route-animation.ts_

```ts
export const routeChangeAnimation = trigger(
  'routeChangeAnimation',
  [
    transition('page1 <=> page2', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '-100%' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate(
            '300ms ease-out',
            style({ left: '100%' })
          ),
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
  ]
)
```

Теперь по порядку. Для определения анимированной смены представления при смене URL используется свойство `animation` (название может быть другим), указанное в свойстве маршрута `data`. В качестве значения свойству `animation` задается имя состояния анимации.

В шаблоне компонента (`app.component.html`), в котором будет происходить загрузка представления по запрашиваемому URL, элемент `<router-outlet>` является дочерним по отношению к элементу `<div>`, для которого определяется `routeChangeAnimation`. Для определения имени состояния используется метод `getRouteAnimationState()`, извлекающий значение свойства `animation`, заданное для текущего маршрута.

Определение самой Angular анимации ограничивается в данном случае описанием смены между собой пары состояний `page1` и `page2`.

Поскольку в момент смены состояний новое представление вставляется сразу же после предыдущего, элементу, для которого определен триггер, задается относительное позиционирование, а дочерним по отношению к нему элементам - абсолютное. Это нужно для избежания одновременного появления на странице двух представлений.

```ts
style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ])
```

Здесь `query()` используется для задания исходных стилей выборке элементов.

Далее представление маршрута, на который осуществляется переход, скрывается сдвигом влево.

```ts
query(':enter', [style({ left: '-100%' })])
```

А в представлении, с которого происходит переход, инициируется с помощью функции [`animateChild()`](https://angular.io/api/animations/animateChild) вызов его дочерних анимаций.

```ts
query(':leave', animateChild())
```

Для понимания, в коде ниже анимация `childAnimation` является дочерней по отношению к анимации `parentAnimation`:

```html
<div [@parentAnimation]="getState()">
  <div [@childAnimation]="getChildState()"></div>
</div>
```

Таким образом, если функция `childAnimate()` вызывается в `parentAnimation`, то будет запущена анимация `childAnimation`.

После функция `group()` запускает одновременно анимированную смену представлений. Старое представление сдвигается за пределы окна вправо, а новое, которое было изначально спрятано слева, появляется.

```ts
group([
  query(':leave', [
    animate('300ms ease-out', style({ left: '100%' })),
  ]),
  query(':enter', [
    animate('300ms ease-out', style({ left: '0%' })),
  ]),
])
```

И в конце инициируется запуск дочерних Angular анимаций нового представления.

```ts
query(':enter', animateChild())
```

## Ссылки

- [Introduction to Angular animations](https://angular.io/guide/animations)
