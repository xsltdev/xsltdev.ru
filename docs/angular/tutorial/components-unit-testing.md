---
description: Процесс тестирования Angular компонентов несколько отличается от тестирования сервисов и других сущностей, поскольку компонент - это результат взаимодействия класса и HTML-шаблона, что необходимо учитывать при тестировании
---

# Тестирование компонент

Процесс тестирования Angular компонентов несколько отличается от тестирования сервисов и других сущностей, поскольку компонент - это результат взаимодействия класса и HTML-шаблона, что необходимо учитывать при тестировании.

Тест, проверяющий представление и класс, требует создания компонента в браузере, как в реально работающем приложении, что требует немного больших ресурсов.

Если вам необходимо убедиться в правильности описания логики класса, никак не влияющей на отображение, то отпадает необходимость определять компонент в структуре DOM.

Рассмотрим пример.

_login-form.component.ts_

```ts
@Component({
  selector: 'login-form',
  template: `
    <form>
      <input
        type="text"
        name="name"
        [value]="loginForm.name"
      />
      <input
        type="password"
        name="password"
        [value]="loginForm.password"
      />
    </form>

    <button (click)="send()" [disabled]="!active">
      Send
    </button>
  `,
})
export class LoginFormComponent implements OnInit {
  @Input() active: boolean
  @Output() validate: EventEmitter<any> = new EventEmitter<
    any
  >()

  loginForm: any = {
    name: '',
    password: '',
  }

  constructor() {}

  ngOnInit() {
    this.loginForm.name = 'Bob'
    this.loginForm.password = 'qwerty'
  }

  send() {
    this.validate.emit(this.loginForm)
  }
}
```

_login-form.component.spec.ts_

```ts
describe('LoginForm component', () => {
  let comp

  beforeEach(() => {
    comp = new LoginFormComponent()
  })

  it('should set LoginForm values in OnInit', () => {
    comp.ngOnInit()
    expect(comp.loginForm.name).toBe('Bob', 'name value')
    expect(comp.loginForm.password).toBe(
      'qwerty',
      'password value'
    )
  })

  it('send() should raise LoginForm values', () => {
    comp.ngOnInit()
    comp.active = true

    comp.validate.subscribe((credentials) => {
      expect(comp.active).toBe(true, 'active')
      expect(credentials).toBe(comp.loginForm, 'send event')
    })

    comp.send()
  })
})
```

Если у компонента нет зависимостей, то экземпляр его класса в тесте создается с помощью ключевого слова `new` и без использования утилиты `TestBed`.

Первый тест проверяет установку значений формы в момент инициализации компонента, второй - возникновение события `validate`, инициируемое методом `send()`.

Обратите внимание на то, как осуществляется проверка [`@Input()`](https://angular.io/api/core/Input) и [`@Output()`](https://angular.io/api/core/Output) свойств.

!!! note ""

    В процессе Angular component testing методы жизненного цикла не вызываются по умолчанию, как в реально работающем приложении. В тестах их вызов осуществляется явно.

Приступим к тестированию компонентов Angular с проверкой шаблона.

_info-message.component.ts_

```ts
@Component({
  selector: 'info-message',
  template: `
    <h1>Message title</h1>

    <p>Message content</p>
  `,
})
export class InfoMessageComponent {
  constructor() {}
}
```

_info-message.component.spec.ts_

```ts
describe('InfoMessage component', () => {
  let fixture: ComponentFixture<InfoMessageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMessageComponent],
    })

    fixture = TestBed.createComponent(InfoMessageComponent)
  })

  it('should create', () => {
    const comp = fixture.componentInstance
    expect(comp).toBeDefined()
  })

  it('should contain "title"', () => {
    const infoMessageEl: HTMLElement = fixture.nativeElement
    const h1 = infoMessageEl.querySelector('h1')
    expect(h1.textContent).toContain('title')
  })
})
```

Метод `createComponent()` создает указанный компонент в DOM-дереве тестовой среды и возвращает объект типа `ComponentFixture`, через который можно получить доступ к экземпляру компонента используя свойство `componentInstance` и убедиться в том, что компонент инициализирован в DOM.

```ts
expect(comp).toBeDefined()
```

Другое полезное свойство объекта `ComponentFixture` - `nativeElement`. Значение свойства - объект типа `HTMLElement`. У объектов `HTMLElement` имеется метод `querySelector`, который по заданному селектору осуществляет поиск элементов в пределах шаблона компонента и также возвращает объект или массив объектов типа `HTMLElement`.

```ts
const h1 = infoMessageEl.querySelector('h1')
```

Свойства объекта `nativeElement` напрямую зависят от среды выполнения теста. Например, вне браузера DOM-эмуляция просто невозможна, например, в приложении Angular Universal, именно поэтому имеется свойство `debugElement` с объектом типа `DebugElement` в качестве значения. В объекте также имеется объект `nativeElement`, который работает универсально независимо от платформы. Поэтому рекомендуется при написании тестов придерживаться следующего формата:

```ts
const infoMessageEl: HTMLElement =
  fixture.debugElement.nativeElement
```

Правда, если платформа не браузерная, то метод `querySelector()` не сработает. Аналогом являются `query()` и `queryAll()` объекта `debugElement`, принимающего результат, возвращаемый статическим методом `css()` класса `By`. Класс `By` входит в состав библиотеки `@angular/platform-browser`.

```ts
it('should contain "title"', () => {
  const infoMessageEl: HTMLElement =
    fixture.debugElement.nativeElement
  const h1 = infoMessageEl.query(By.css('h1'))
  expect(h1.textContent).toContain('title')
})
```

`By.css()` принимает селектор в формате, аналогичному в `querySelector()`.

В последних примерах проверялось статическое содержимое элементов HTML-разметки, т. е. текст присутствовал в шаблоне еще до компиляции компонента. Но при задании значения вот так

```ts
@Component({
  selector: 'info-message',
  template: `
    <h1>{{ title }}</h1>

    <p>Message content</p>
  `,
})
export class InfoMessageComponent {
  title = 'Attention'

  constructor() {}
}
```

тесты выполнились бы, поскольку `createComponent()` не связывает класс компонента с его шаблоном. Все переменные в таком случаем заменяются на пустые строки. Для инициации привязки необходимо вызвать `detectChanges()` у объекта, возвращаемого после вызова метода `createComponent()`.

```ts
it('should contain "title"', () => {
  fixture.detectChanges()
  const infoMessageEl: HTMLElement =
    fixture.debugElement.nativeElement
  const h1 = infoMessageEl.querySelector('h1')
  expect(h1.textContent).toContain('Attention')
})
```

Еще одна особенность приведенных ранее примеров - определение верстки в одном файле с определением класса. Но чаще всего (и это правильно) HTML-код и стили к нему выносятся в отдельные файлы. В таком случае необходимо вслед за методом `configureTestingModule()` вызвать `compileComponents()`.

Принудительная компиляция необходима только если тестирование Angular компонентов выполняется вне среды CLI. В случае запуска через Angular CLI компиляция происходит автоматически.

```ts
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [InfoMessageComponent],
  })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(
        InfoMessageComponent
      )
    })
}))
```

Асинхронный `compileComponents()` возвращает `Promise` и вызывается совместно с асинхронной функцией `async()` из библиотеки `@angular/core/testing`. Все синхронные операции после компиляции компонентов должны указываться в части `then()`, иначе будет сгенерировано исключение.

Вызов метода абсолютно безвреден. Обращение к `compileComponents()` без необходимости никак не повлияет на время и производительность тестирования.

## Ссылки

- [Component Test Basics](https://angular.io/guide/testing#component-test-basics)
