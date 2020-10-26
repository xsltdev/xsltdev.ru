---
description: Отслеживание изменений - это механизм в Angular, который отвечает за изменение выражений в шаблонах при их изменении в моделях
---

# Механизм ChangeDetection

**Отслеживание изменений** - это механизм в Angular, который отвечает за изменение выражений в шаблонах при их изменении в моделях.

Механизм запускается каждый раз, когда, например, инициируется одно из браузерных событий, выполняются HTTP-запросы или вызывается функция `setTimeout()` или `setInterval()`.

В случае с браузерными событиями, Angular расширяет стандартный метод `addEventListener()`, добавляя после вызова "оригинального" обработчика события запуск отслеживания изменений.

На самом деле ключевую роль здесь играет библиотека `zone.js`. В Angular с ее помощью все приложение разделяется на секторы, каждый из которых запоминает контекст асинхронного выполнения. Такой подход после завершения асинхронной операции позволяет запустить механизм отслеживания изменений в нужном секторе.

Запуск механизма `ChangeDetection` в родительском компоненте автоматически инициирует запуск механизма во всех дочерних компонентах.

## ChangeDetectionStrategy

В Angular есть два варианта работы алгоритма отслеживания изменений:

- `OnPush`;
- `Default` (используется по умолчанию).

Алгоритм задается в свойстве `changeDetection` объекта конфигурации декоратора [`@Component()`](https://angular.io/api/core/Component) и указывается для каждого компонента отдельно. Если параметр не указан, используется алгоритм `Default` (механизм отслеживания изменений запускается при любом действии пользователя или изменения состояния приложения).

Стратегия `OnPush` указывается в основном для компонентов, которые предназначены для отображения каких-либо статических данных.

Использование стратегии `OnPush` подразумевает, что механизм отслеживания изменений запустится только в момент создания компонента (стадия жизненного цикла `OnChanges`) и при каждом последующем изменении его входных свойств (предваряются декоратором [`@Input()`](https://angular.io/api/core/Input) и передаются извне).

```ts
@Component({
  selector: 'book-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h1>{{ book }}</h1> `,
})
export class BookItemComponent implements OnChanges {
  @Input() book: string = null

  constructor() {}

  ngOnChanges() {
    console.log(this.book)
  }
}
```

Такой подход используется в целях повышения эффективности работы приложения за счет снижения количества вызовов механизма `ChangeDetection`.

Попробуйте изменить входное значение для `BookItemComponent` и посмотрите на результат.

## Сервис ChangeDetectorRef

В библиотеке `@angular/core` есть сервис [`ChangeDetectorRef`](https://angular.io/api/core/ChangeDetectorRef). Он позволяет взять управление механизмом отслеживания изменений полностью под свой контроль.

Основные методы сервиса:

- `detach()` - полностью отключает механизм `ChangeDetection`;
- `detectChanges()` - принудительно запускает механизм отслеживания изменений;
- `reattach()` - используется после вызова `detach()` для активации механизма `ChangeDetection`.

Действие всех трех методов распространяется только на тот компонент, в пределах которого вызываются эти методы.

```ts
@Component({
  selector: 'manual-detection',
  template: `
    <h1>{{ book }}</h1>

    <button (click)="applyChanges()">Apply</button>
  `,
})
export class ManualDetectionComponent {
  book: string = 'Great Expectations'

  constructor(private changeDetection: ChangeDetectorRef) {
    this.changeDetection.detach()

    this.book = 'Old Man & Sea'
  }

  applyChanges() {
    this.changeDetection.detectChanges()
  }
}
```

Здесь изначально отключается механизм отслеживания изменений. Затем переменной `book` присваивается новое значение, но в шаблоне изменения будут видны только после нажатия кнопки `Apply`, которая инициирует принудительный запуск механизма `ChangeDetection`.

## Ссылки

- [ChangeDetectionStrategy](https://angular.io/api/core/ChangeDetectionStrategy)
- [ChangeDetectorRef](https://angular.io/api/core/ChangeDetectorRef)
