---
description: Независимо от выбранной технологии построения формы ее валидация происходит на основе данных о состоянии самой формы и каждого ее поля в отдельности
---

# Валидация форм

Независимо от выбранной технологии построения формы ее валидация происходит на основе данных о состоянии самой формы и каждого ее поля в отдельности.

## Валидация форм Angular

Для того чтобы задать валидацию, используются стандартные атрибуты валидации форм HTML5 (`required`, `minlength`, `max`, `pattern` и т. д.).

```html
<form>
  <div>
    <label>Bill Amount</label>
    <input type="number" max="100" required />
  </div>
</form>
```

Вывод сообщений, информирующих о неправильно заполненном поле, осуществляется на основе данных состояния поля. Доступ к этим данным может быть получен с помощью шаблонной переменной.

```html
<form>
  <div>
    <label>Bill Amount</label>
    <input
      type="number"
      [(ngModel)]="bill.amount"
      #amount="ngModel"
      max="100"
      required
    />
  </div>
</form>
```

Теперь переменная `#amount` содержит объект с информацией о поле, на которое оно ссылается. Список необходимых для валидации свойств объекта:

- `dirty` - `true`, если пользователь осуществлял ввод (выбор) значения;
- `touched` - `true`, если поле потеряло фокус;
- `invalid` - `true`, если поле невалидно;
- `valid` - `true`, если поле валидно;
- `errors` - содержит объект со свойствами тех атрибутов валидации, которые не удовлетворяют заданному условию.

Общепринято отображать ошибки только тогда, когда пользователь хоть как-то взаимодействовал с полем, то есть когда свойства `invalid` и `dirty` или `touched` ровно `true`. Вывод той или иной ошибки зависит от того, какой именно атрибут валидации не прошел проверку.

```html
<form>
  <div>
    <label>Bill Amount</label>
    <input
      type="number"
      [(ngModel)]="bill.amount"
      #amount="ngModel"
      max="100"
      required
    />

    <div
      *ngIf="amount.invalid && (amount.dirty || amount.touched)"
    >
      <div *ngIf="amount.errors.required">
        Required field
      </div>
      <div *ngIf="amount.errors.max">
        Max possible value is 100
      </div>
    </div>
  </div>
</form>
```

## Валидация реактивных форм Angular

Для реактивных форм вся валидация устанавливается в классе компонента при описании модели формы. Каждому полю задается свой массив валидаторов.

Список встроенных валидаторов (Angular validators):

- `required` - поле обязательно для заполнения;
- `email` - проверка валидности `email`;
- `min(min: number)` - минимальное возможное значение;
- `max(max: number)` - максимальное возможное значение;
- `minLength(minLength: number)` - минимальная длина вводимой строки;
- `maxLength(maxLength: number)` - максимальная длина вводимой строки;
- `pattern(pattern: string | RegExp)` - регулярное выражение, которому должно соответствовать вводимое значение.

_reactive-form-validation.ts_

```ts
@Component({
  selector: 'reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
})
export class ReactiveFormValidationComponent {
  clientForm: FormGroup

  constructor(private fb: FormBuilder) {
    this._createForm()
  }

  private _createForm() {
    this.clientForm = this.fb.group({
      client: ['', [Validators.required]],
      clientAge: [
        '',
        [
          Validators.required,
          Validators.min(16),
          Validators.pattern(/^[0-9]+(?!.)/),
        ],
      ],
    })
  }

  get _client() {
    return this.clientForm.get('client')
  }

  get _clientAge() {
    return this.clientForm.get('clientAge')
  }
}
```

_reactive-form-validation.html_

```html
<form [formGroup]="clientForm" novalidate>
  <div>
    <label>Client</label>
    <input type="text" formControlName="client" />
    <div
      *ngIf="_client.invalid && (_client.touched || _client.dirty)"
    >
      <span *ngIf="_client.errors?.required"
        >Field is required</span
      >
    </div>
  </div>

  <div>
    <label>Age</label>
    <input type="text" formControlName="clientAge" />
    <div
      *ngIf="_clientAge.invalid && (_clientAge.touched || _clientAge.dirty)"
    >
      <span *ngIf="_clientAge.errors?.required"
        >Обязательное поле</span
      >
      <span *ngIf="_clientAge.errors?.min"
        >Значение должно быть больше или равно
        {{_clientAge.errors?.min.min}}</span
      >
      <span
        *ngIf="_clientAge.errors?.pattern?['/^[0-9]+(?!.)/']"
        >Разрешаются только цифры</span
      >
    </div>
  </div>
</form>
```

Механизм вывода ошибок практически аналогичен механизму "стандартных" форм. Но для того чтобы получить в шаблоне ссылку на объект с данными о поле, можно использовать геттеры или реализовать метод, который будет возвращать поле по его имени.

Свойства полученного объекта поля, используемые для валидации:

- `dirty` - `true`, если пользователь осуществлял ввод (выбор) значения;
- `touched` - `true`, если поле потеряло фокус;
- `invalid` - `true`, если поле невалидно;
- `valid` - `true`, если поле валидно;
- `errors` - содержит объект со свойствами тех атрибутов валидации, которые не удовлетворяют заданному условию.

Остановимся на поле `errors`. Многие Angular validators принимают входные параметры (`maxLength`, `pattern` и др.), поэтому для получения исчерпывающей информации о неправильном заполнении полей, к которым они применены, их значения в errors реализованы в виде объектов. В таком объекте содержатся данные о текущем значении и ограничения, накладываемые на это значение (см. пример выше).

Например, ключи объекта ошибки валидатора `pattern` - сами регулярные выражения. Что позволяет однозначно идентифицировать ошибку и отобразить пользователю соответствующее сообщение.

Более подробное описание можно найти в [документации](https://angular.io/guide/form-validation#reactive-form-validation).

Для работы с ошибками в реактивных формах предусмотрены прикладные методы:

- `setErrors(errors: ValidationErrors)` - используется для того, чтобы задать ошибку вручную;
- `getError(errorCode: string)` - вернет объект с данными о запрашиваемой ошибке, если поле валидно, то вернется `null` или `undefined`;
- `hasError(errorCode: string)` - вернет `true`, если поле имеет указанную ошибку.

```ts
this.clientForm.get('client').hasError('required')
```

Для динамического добавления полю валидаторов используется метод `setValidators()`.

```ts
this.clientForm
  .get('client')
  .setValidators([Validators.maxLength(100)])
```

Чтобы удалить все привязанные к полю Angular validators, необходимо вызвать метод `clearValidators()`.

```ts
this.clientForm.get('client').clearValidators()
```

Еще один редко используемый, но крайне полезный метод `updateValueAndValidity()`, который запускает обновление значения и состояния формы или ее группы (поля).

```ts
this.clientForm.get('clientAge').updateValueAndValidity()
```

Для большинства случаев подойдут встроенные валидаторы, но бывают задачи, которые требуют особых проверок. Поэтому реактивные формы предоставляют инструмент для разработки пользовательских валидаторов.

_account.validator.ts_

```ts
export function accountValidator(): ValidatorFn {
  return (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    let accountRgEx: RegExp = /^[0-9]{20}(?!.)/
    let valid =
      !control.value || accountRgEx.test(control.value)
    return valid ? null : { account: true }
  }
}
```

```ts
import {accountValidator} from './validators/account.validator.ts';

//
accountNumber: ['', [accountValidators()]],
//
```

В примере `accountValidator()` проверяет корректность номера банковского счета (20 цифр - проверка условная). Если номер введен не верно, тогда для поля `accountNumber` будет установлена ошибка `account` со значением `true`.

!!! note ""

    Валидатор всегда должен возвращать `null`, если переданное значение удовлетворяет всем его проверкам.

## Асинхронные валидаторы Angular

Использование механизма асинхронной валидации (Angular async validators) позволяет проверять введенное значение на удаленном сервере. Например, проверка уникальности имени пользователя при регистрации.

Перейдем к практике. Допустим, имеется форма заказа какого-либо товара, где пользователь указывает желаемое его количество. Создадим валидатор `checkGoodsLeftValidator()`, который будет проверять, имеется ли запрошенное покупателем количество товара.

_goods.service.ts_

```ts
@Injectable({ providedIn: 'root' })
export class GoodsService {
  constructor(private http: HttpClient) {}

  checkGoodsLeft(count: number | string): Observable<any> {
    return this.http.get('/api/goods/left')
  }
}
```

_check-goods-left.validator.ts_

```ts
export function checkGoodsLeftValidator(
  control: AbstractControl
) {
  return this.checkGoodsLeft(control.value).pipe(
    tap((response) => {
      return response ? null : { goodsLeft: true }
    })
  )
}
```

_check-goods-left-validator-example.component.ts_

```ts
@Component({
  selector: 'check-goods-left-validator-example',
  templateUrl:
    './check-goods-left-validator-example.component.html',
})
export class CheckGoodsLeftValidatorExampleComponent {
  orderForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private goodsService: GoodsService
  ) {
    this._createForm()
  }

  private _createForm() {
    this.orderForm = this.fb.group({
      client: ['', [Validators.required]],
      goodsCount: [
        '',
        [Validators.required],
        [checkGoodsLeftValidator.bind(this.goodsService)],
      ],
    })
  }
}
```

Поскольку наш Angular async validator обращается к методу сервиса, а сам валидатор вызывается в контексте компонента, который его использует, здесь используется привязка контекста сервиса `GoodsService` с помощью `bind()`.

!!! note ""

    Все асинхронные валидаторы указываются в массиве третьим параметром.

## Стилизация формы

В зависимости от состояния и статуса валидации, форме и ее полям устанавливаются соответствующие CSS-классы, которые можно использовать для стилизации элементов.

- `ng-valid`;
- `ng-invalid`;
- `ng-pending`;
- `ng-pristine`;
- `ng-dirty`;
- `ng-untouched`;
- `ng-touched`.

## Ссылки

- [Form Validation](https://angular.io/guide/form-validation)
