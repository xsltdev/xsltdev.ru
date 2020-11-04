---
description: Взаимодействие компонентов
---

# Взаимодействие компонентов

Для передачи данных из одного Angular компонента в другой существует несколько способов:

- [`@Input()`](https://angular.io/api/core/Input) свойства;
- [`@Output()`](https://angular.io/api/core/Output) свойства;
- [`@ViewChild()`](https://angular.io/api/core/ViewChild) свойства;
- Сервис.

Первые три случая были рассмотрены ранее в предыдущих главах. Тем не менее в этой главе приведены примеры всех способов взаимодействия.

Пример Angular компонента с `@Input()`, `@Output()` и `@ViewChild()` приведен ниже.

_parent-example.component.ts_

```ts
@Component({
  selector: 'parent-example',
  template: `
    <child-example
      [title]="'Title'"
      (dataChanged)="dataChangeHandler($event)"
    ></child-example>
  `,
})
export class ParentExampleComponent
  implements AfterViewInit {
  @ViewChild(ChildExampleComponent)
  viewChild: ChildExampleComponent

  constructor() {}

  ngAfterViewInit() {
    console.log(this.viewChild)
  }

  dataChangeHandler(data) {
    console.log(data)
  }
}
```

_child-example.component.ts_

```ts
@Component({
  selector: 'child-example',
  template: `
    <div>
      <h1 [textContent]="title"></h1>
      <a
        href="#"
        (click)="sendMessage()"
        [textContent]="label"
      ></a>
    </div>
  `,
})
export class ChildExampleComponent {
  @Input() title: string
  @Output() dataChanged: EventEmitter<
    any
  > = new EventEmitter<any>()

  label: string = 'Send message'

  constructor() {}

  sendMessage(data) {
    this.dataChanged.emit({
      msg: 'Message from ChildExample',
    })
  }
}
```

Декоратор `@Input()` позволяет передавать значения дочерним компонентам, но только на один уровень иерархии.

С помощью `@Output()` имитируют возникновение события и передают данные родительскому компоненту.

Использование `@ViewChild()` в родительском Angular component позволяет получить все свойства указанного дочернего компонента.

Полное описание указанных декораторов находится в главах "[Компоненты](angular-components.md)", "[Обработка событий](events-handling.md)" и "[Жизненный цикл компонента](component-lifecycle.md)" соответственно.

Еще один способ передавать данные между компонентами - использование сервисов. Сервис — одна из сущностей Angular, которая реализует паттерн проектирования Singleton и служит хранилищем данных. Другое частое его использование — хранение методов, осуществляющих HTTP запросы к серверу.

Обычно сервис определяется на уровне всего приложения в целом. Поэтому все Angular компоненты обращаются к одному и тому же его экземпляру. Более подробно [здесь](angular-services.md).

Перед использованием сервисы необходимо импортировать в корневой модуль.

```ts
import {SomeDataService} from './services/some.service';

// ...
providers: [
	SomeDataService,
// ...
],
// ...
```

Пример Angular компонента с сервисом.

_some-data.service.ts_

```ts
@Injectable({ providedIn: 'root' })
export class SomeDataService {
  data: number = 1
}
```

_first.component.ts_

```ts
@Component({
  selector: 'the-first',
  template: ` <p>First</p> `,
})
export class FirstComponent {
  constructor(private someSrv: SomeDataService) {
    console.log(someSrv.data)
    someSrv.data = 3
  }
}
```

_second.component.ts_

```ts
@Component({
  selector: 'the-second',
  template: ` <p>Second</p> `,
})
export class SecondComponent {
  constructor(private someSrv: SomeDataService) {
    console.log(someSrv.data)
  }
}
```

В сервисе `SomeDataService` определено свойство `data` со значением `1`. В `FirstComponent` в консоль выводится значение `data` и затем ему же присваивается новое значение — `3`.

Далее уже в конструкторе `SecondComponent` выводится свойство `data` сервиса `SomeDataService`. Как можно убедиться, в консоль будет выведено `3`. Все потому что оба Angular компонента обращаются к одному и тому же экземпляру класса сервиса.

## Ссылки

- [Component Interaction](https://angular.io/guide/component-interaction)
