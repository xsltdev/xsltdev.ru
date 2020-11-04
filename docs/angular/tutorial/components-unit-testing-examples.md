---
description: Практически в каждом приложении имеются компоненты, которые зависимы от сервисов, которые хранят асинхронные методы, инициирующие HTTP-запросы к удаленному серверу и возвращающие определенные данные
---

# Примеры тестирования компонент

## Компонент с вызовом асинхронного метода

Практически в каждом приложении имеются компоненты, которые зависимы от сервисов, которые хранят асинхронные методы, инициирующие HTTP-запросы к удаленному серверу и возвращающие определенные данные.

Поскольку основное назначение unit-тестов проверка не работоспособности API, а результата преобразования и (или) отображения полученных данных, то вызовы этих методов и их данных эмулируются через константы или `Spy` объекты.

_info-message.component.ts_

```ts
@Component({
  selector: 'info-message',
  template: `
    <h1>Attention!</h1>

    <p>{{ appService.message }}</p>
  `,
})
export class InfoMessageComponent {
  constructor(public appService: AppService) {}
}
```

_info-message.component.spec.ts_

```ts
describe('InfoMessageComponent', () => {
  let fixture: ComponentFixture<InfoMessageComponent>

  beforeEach(() => {
    const appServiceStub = { message: 'Out of service' }

    TestBed.configureTestingModule({
      declarations: [InfoMessageComponent],
      providers: [
        { provide: AppService, useValue: appServiceStub },
      ],
    })

    fixture = TestBed.createComponent(InfoMessageComponent)
  })

  it('should get message from AppService stub', () => {
    fixture.detectChanges()
    const infoMessageEl: HTMLElement =
      fixture.debugElement.nativeElement
    const p = infoMessageEl.querySelector('p')
    expect(p.textContent).toContain('Out of service')
  })
})
```

!!! note ""

    Не используйте реальные сервисы в тестах компонентов. Их внедрение может оказаться крайне сложным, или вообще невозможным, поскольку в сервисах могут быть проверки, которые пройдут только в реально работающем приложении.

В приведенном примере Angular тестирования константа `appService` предоставляет все необходимые данные и методы для их преобразования подобно тому, как это делает реальный сервис.

Для эмуляции асинхронных методов сервисов лучше подойдут `Spy` объекты.

_app.service.ts_

```ts
@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('/api/data')
  }
}
```

_app.service.spec.ts_

```ts
describe('InfoMessageComponent', () => {
  let fixture: ComponentFixture<InfoMessageComponent>
  let appService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMessageComponent],
      providers: [AppService],
    })

    fixture = TestBed.createComponent(InfoMessageComponent)
    appService = jasmine.createSpyObj('AppService', {
      getData: 'Out of service',
    })
  })

  it('should get message from AppService getData()', () => {
    const comp = fixture.componentInstance
    comp.message = appService.getData()
    expect(comp.message).toBe('Out of service')
  })
})
```

Объект `Spy` позволяет эмулировать обращение к асинхронному методу (название). Но сам тест выполняется синхронно, внутри него не выполняется никаких асинхронных действий.

При использовании в тестах Angular компонентов сервисов следует помнить, что Angular имеет иерархическое построение injector-ов. Так, если сервис был определен на уровне компонента, то при тестировании он должен быть взят не из корневого injector-а, а из injector-а самого компонента.

```ts
appService = fixture.debugElement.injector.get(AppService)
```

Но если сервис определен именно в модуле, т. е. находится в корневом injector-е, то можно использовать более простой в восприятии способ получения сервиса с использованием `TestBed.get()`.

```ts
appService = TestBed.get(AppService)
```

Для асинхронности теста используйте функцию `fakeAsync()` библиотеки `@angular/core/testing`.

```ts
describe('InfoMessageComponent', () => {
  let fixture: ComponentFixture<InfoMessageComponent>
  let appService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMessageComponent],
      providers: [AppService],
    })

    fixture = TestBed.createComponent(InfoMessageComponent)
    appService = jasmine.createSpyObj('AppService', {
      getData: 'Out of service',
    })
  })

  it('should get message from AppService getData()', fakeAsync(() => {
    const comp = fixture.componentInstance

    setTimeout(
      () => (comp.message = appService.getData()),
      180
    )

    tick(180)

    expect(comp.message).toBe('Out of service')
  }))
})
```

Важным здесь является функция `tick()`, без которой использование `fakeAsync()` было бы бессмысленным. В качестве аргумента она принимает количество миллисекунд, на которое выполнение теста приостановиться. Так, в примере дальнейшие операции в тесте зависимы от вызова асинхронного метода (название), который выполняется за 180 миллисекунд.

Но данный подход не подойдет, если вы не знаете точное время исполнения метода. Самый простой пример - обращение к удаленному API, где время исполнения зависит от множества неконтролируемых факторов: стабильность соединения, пропускная способность канала, нагрузка на сервер и т. д. Здесь необходимо использовать функцию `async()`.

_info-message.component.ts_

```ts
constructor(public appService: AppService){}

message: string = '';

ngOnInit(){
    this.appService.getData().subscribe(message => this.message = message);
}
```

_info-message.component.spec.ts_

```ts
describe('InfoMessageComponent', () => {
  let fixture: ComponentFixture<InfoMessageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMessageComponent],
      providers: [AppService],
    })

    fixture = TestBed.createComponent(InfoMessageComponent)
  })

  it('should get message from AppService getData()', async(() => {
    const comp = fixture.componentInstance
    fixture.detectChanges() //Вызов ngOnInit()

    fixture.whenStable().then(() => {
      expect(comp.message).toBe('Out of service')
    })
  }))
})
```

`async()` запускает тест в специальной среде исполнения. Но главное здесь - метод `whenSable()`, возвращающий объект `Promise`, который выполнится после того, как очередь задач JavaScript станет пустой, т. е. будут исполнены все асинхронные и синхронные действия. Здесь отпадает необходимость в знании точного времени исполнения.

## Взаимодействие компонентов

Когда вы передаете данные из одного компонента в другой через [`@Output()`](https://angular.io/api/core/Output) свойство, вам понадобится в тесте получить доступ к двум компонентам одновременно. Пример тестирования для такого случая.

_parent.component.ts_

```ts
@Component({
  selector: 'parent-component',
  template: `
    <child-component
      (message)="setMessage($event)"
    ></child-component>
  `,
})
export class ParentComponent {
  message: string = ''

  constructor() {}

  setMessage(text): void {
    this.message = text
  }
}
```

_child.component.ts_

```ts
@Component({
  selector: 'child-component',
  template: `
    <div class="child">
      <button (click)="sendMessage()">Send message</button>
    </div>
  `,
})
export class ChildComponent {
  @Output() message: EventEmitter<any> = new EventEmitter<
    any
  >()

  constructor() {}

  sendMessage(): void {
    this.message.emit('Child message')
  }
}
```

_parent.component.spec.ts_

```ts
describe('ParentComponent', () => {
  let fixture: ComponentFixture<ParentComponent>
  let parentComp: ParentComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ParentComponent)
        parentComp = fixture.componentInstance
      })
  }))

  it('should get message from ChildComponent', () => {
    const childEl: HTMLElement = fixture.debugElement.nativeElement.query(
      '.child'
    )
    childEl.click()

    expect(parentComp.message).toBe('Child message')
  })
})
```

Основное внимание здесь нужно сосредоточить на блоке `beforeEach()`. При конфигурации модуля `TestingModule` в части `providers` необходимо указать все компоненты, к которым происходит обращение в процессе тестирования. При этом явно создается именно экземпляр класса того компонента, который является родительским ко всем другим.

Доступ к дочерним компонентам осуществляется с помощью селекторов, применяемых относительно свойства `nativeElement` объекта `debugElement` с использованием функции `querySelector()`. В качестве селектора следует использовать id-атрибуты или классы, которые однозначно идентифицируют нужный компонент. Метод `detectChanges()` вызывается для привязки переданных значений в HTML-шаблоне.

Задать значения свойств дочернего компонента без явного создания экземпляра класса не получится.

## Организация кода

Даже при тестировании небольшого компонента часто приходится производить много манипуляций с его свойствами или осуществлять выборку HTML-элементов по селекторам в пределах шаблона.

Поэтому для упрощения Angular тестирования и концентрации в одном месте методов, реализующих наиболее часто используемый функционал, общепринято создавать вспомогательный класс `Page`.

_page.class.ts_

```ts
class Page {
  get links() {
    return this.queryAll<HTMLElement>('a')
  }

  get inputs() {
    return this.query<HTMLInputElement>('input')
  }

  fixture: ComponentFixture<TestComponent>

  constructor(fixture: ComponentFixture<TestComponent>) {
    this.fixture = fixture.componentInstance
  }

  private query<T>(selector: string): T {
    return this.fixture.nativeElement.querySelector(
      selector
    )
  }

  private queryAll<T>(selector: string): T[] {
    return this.fixture.nativeElement.querySelectorAll(
      selector
    )
  }
}
```

При написании сценариев тестирования экземпляр класса `Page` создается в блоке `beforeEach()`.

```ts
import { Page } from './page.ts'

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [TestComponent],
  })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(TestComponent)
      page = new Page(fixture)
    })
}))
```
