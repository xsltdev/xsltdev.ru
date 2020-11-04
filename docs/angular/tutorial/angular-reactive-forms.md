---
description: Реактивные формы (Angular reactive forms) построены на основе механизма, использующего реактивный подход к программированию
---

# Реактивные формы

**Реактивные формы** (Angular reactive forms) построены на основе механизма, использующего реактивный подход к программированию.

Для их использования нужно импортировать модуль [`ReactiveFormsModule`](https://angular.io/api/forms/ReactiveFormsModule).

Создание и валидация Angular reactive forms осуществляется прямо в контроллере. В шаблоне привязывается уже определенная в компоненте модель.

## FormGroup и FormControl

Реактивная форма Angular — объединение взаимосвязанных полей (группа), которое может содержать дочерние группы.

Группа представляет собой объект [`FormGroup`](https://angular.io/api/forms/FormGroup), а поле — объект [`FormControl`](https://angular.io/api/forms/FormControl). Оба класса импортируются из `@angular/forms`.

=== "reactive-form-example.component.ts"

    ```ts
    @Component({
      selector: 'reactive-form-example',
      templateUrl: './reactive-form-example.component.html',
    })
    export class ReactiveFormExampleComponent {
      buyTicketForm: FormGroup

      constructor() {
        this._createForm()
      }

      private _createForm() {
        this.buyTicketForm = new FormGroup({
          passenger: new FormControl(null),
          passengerAge: new FormControl(null),

          passengerContacts: new FormGroup({
            telegram: new FormControl(null),
            whatsapp: new FormControl(null),
          }),
        })
      }
    }
    ```

=== "reactive-form-example.component.html"

    ```html
    <form [formGroup]="buyTicketForm" novalidate>
      <div>
        <label>Passenger</label>
        <input type="text" formControlName="passenger" />
      </div>

      <div>
        <label>Age</label>
        <input type="number" formControlName="passengerAge" />
      </div>

      <div formGroupName="passengerContacts">
        <div>
          <label>Telegram</label>
          <input type="text" formControlName="telegram" />
        </div>

        <div>
          <label>Whatsapp</label>
          <input type="text" formControlName="whatsapp" />
        </div>
      </div>
    </form>
    ```

При определении поля конструктору `FormControl` первым параметром передается начальное значение поля. Но если помимо значения необходимо задать другие параметры, например, сделать поле неактивным, используйте объект.

```ts
new FormControl({ value: null, disabled: true })
```

С полным перечнем возможных параметров можно ознакомиться в документации.

В шаблоне главная группа обозначается директивой `formGroup`, которой передается переменная одноименного типа, содержащая описание модели формы. Вложенные группы обозначаются директивой [`formGroupName`](https://angular.io/api/forms/FormGroupName), а поля группы — директивой [`formControlName`](https://angular.io/api/forms/FormControlName).

Если значение директив реактивной формы Angular задается вручную, то директива пишется без квадратных скобок.

```html
<input type="text" formControlName="MOBILE_PHONE" />
```

А если задается через переменную, то используется запись с квадратными скобками (подобно передаче значения через [`@Input()`](https://angular.io/api/core/Input) свойство).

```ts
fieldName: string = 'MOBILE_PHONE' //в контроллере
```

```html
<!--в шаблоне-->
<input type="text" [formControlName]="fieldName" />
```

Основные поля объекта реактивной формы Angular:

- `controls` — поля, включая вложенные `FormGroup`;
- `errors` — содержит ошибки валидации;
- `status` — строка, определяющая правильность заполнения формы, значение либо `VALID`, либо `INVALID`;
- `valid` — `true`, если форма валидна;
- `invalid` — `true`, если форма невалидна;
- `pristine` — `true`, если не было взаимодействия с полями;
- `touched` — `true`, если одно из полей становилось активным (получало фокус);
- `dirty` — `true`, если пользователь заполнил хотя бы одно из полей;
- `value` — значение формы в виде объекта;
- `statusChanges` — позволяет отслеживать изменение статуса валидности;
- `valueChanges` — позволяет отслеживать изменение значения.

!!! note "Важно"

    Неактивные (`disabled`) поля формы не входят в ее значение и будут отсутствовать в поле `value`. Для получения полной модели имеется `getRawValue()`.

Реактивные формы позволяют обращаться к отдельному полю используя метод `get()`, которому передается в виде строки наименование поля.

```ts
this.loginForm.get('login') //поле
this.loginForm.get('address') //вложенная группа
this.loginForm.get('address.city') //поле вложенной группы
```

Отслеживание изменений формы осуществляется через подписку на `valueChanges` `Observable`. Функция обработчик принимает параметром значение формы.

```ts
this.loginForm.valueChanges.subscribe((v) => {
  console.log(v)
})
```

Использовать `valueChanges` можно применительно к отдельному полю.

```ts
this.loginForm.get('login').valueChanges.subscribe((v) => {
  console.log(v)
})
```

Для отслеживания изменения статуса поля или формы в целом "подписывайтесь" на `statusChanges`.

```ts
this.loginForm.statusChanges.subscribe((status) => {
  console.log(status)
})
```

Для сброса значений полей формы или полей одной из ее групп используется метод `reset()`, который принимает объект с начальным значением.

```ts
//Всем полям будет присвоено null
this.loginForm.reset()

//Полю login будет присвоено 'default_login', остальным - null
this.loginForm.reset({ login: 'default_login' })
```

Для динамического изменения структуры Angular reactive forms предусмотрен ряд методов:

- `addControl(name: string, value: any)` — добавляет новое поле соответствующей группе;
- `setControl(name: string, value: any)` — заменяет уже существующее поле соответствующей группы;
- `removeControl(name: string)` — удаляет поле из группы.

## patchValue() и setValue()

Для задания форме значений, например, при редактировании данных, полученных от сервера, используются методы `patchValue()` и `setValue()`.

Методу `setValue()` должен передаваться объект, полностью совпадающий по строению с описанной моделью формы, а `patchValue()` — лишь часть этой структуры.

```ts
this.loginForm.patchValue({ login: 'user123' })
this.loginForm.setValue({
  login: 'user123',
  password: 'pwd123',
})
```

Если `setValue()` передать "неполную" модель, будет сгенерирована ошибка.

Вторым параметром оба метода принимают объект, с помощью которого, например, можно сделать так, чтобы установка значения Angular reactive forms не инициировала событие `valueChanges`.

```ts
this.loginForm.patchValue(
  { login: 'user123' },
  { emitEvent: false }
)
```

## FormArray

Для вывода (или динамического добавления) одной и той же группы или отдельного поля более, чем один раз, необходим экземпляр класса `FormArray`.

В представлении для обозначения сущности [`FormArray`](https://angular.io/api/forms/FormArray) используется [`formArrayName`](https://angular.io/api/forms/FormArrayName). Причем не должно быть совпадений значений `formGroupName` или `formControlName` в пределах всей формы.

Пример с полем.

=== "TS"

    ```ts
    userForm: FormGroup = new FormGroup({
      fullName: new FormControl(''),
      numbers: new FormArray([
        new FormControl(''),
        new FormControl(''),
      ]),
    })
    ```

=== "HTML"

    ```html
    <div
      formArrayName="numbers"
      *ngFor="let item of userForm.get('numbers').controls; let i = index;"
    >
      <input type="text" [formControlName]="i" />
    </div>
    ```

Пример с группой.

=== "TS"

    ```ts
    userForm: FormGroup = new FormGroup({
      fullName: new FormControl(''),
      children: new FormArray([
        new FormGroup({
          fullName: new FormControl(''),
          age: new FormControl(''),
        }),
        new FormGroup({
          fullName: new FormControl(''),
          age: new FormControl(''),
        }),
      ]),
    })
    ```

=== "HTML"

    ```html
    <div
      formArrayName="numbers"
      *ngFor="let item of userForm.get('children').controls; let i = index;"
    >
      <div [formGroupName]="i">
        <div>
          <label>Name</label>
          <input type="text" formControlName="fullName" />
        </div>

        <div>
          <label>Age</label>
          <input type="text" formControlName="age" />
        </div>
      </div>
    </div>
    ```

## Angular Form Builder

В качестве альтернативы можно создать реактивную форму (и настоятельно рекомендуется) с Angular [`FormBuilder`](https://angular.io/api/forms/FormBuilder).

Его использование помогает избежать повторений и повышает читабельность кода.

```ts
@Component({
  selector: 'reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
})
export class ReactiveFormExampleComponent {
  buyTicketForm: FormGroup

  constructor(private fb: FormBuilder) {
    this._createForm()
  }

  private _createForm() {
    this.buyTicketForm = this.fb.group({
      passenger: '',
      passengerAge: '',
    })
  }
}
```

Шаблон остается неизменным.

Сперва в зависимостях компонента необходимо указать `FormBuilder`, далее создается свойство компонента типа `FormGroup`, которому в методе `_createForm()` передается создаваемая модель. Метод вызывается в конструкторе компонента.

Модель также может содержать дочерние `FormGroup`, созданные с помощью Angular Form Builder.

```ts
this.buyTicketForm = this.fb.group({
  passenger: '',
  passengerAge: '',
  passengerContacts: this.fb.group({
    telegram: '',
    whatsapp: '',
  }),
})
```

## Ссылки

- [Reactive Forms](https://angular.io/guide/reactive-forms)
