---
description: Работа с формами. Реактивный подход (Reactive).
---

# Формы. Реактивный подход.

## Конфигурация реактивной формы

При реактивном подходе конфигурация формы происходит в компоненте, а не в шаблоне.

`app.module.ts`:

```typescript
import { ReactiveFormsModule } from '@angular/forms';
//...
@NgModule({
//...
    imports: [
        //...
        ReactiveFormsModule,
    ],
    //...
})
```

`app.component.ts`:

```typescript
//...
import { FormControl, FormGroup } from '@angular/forms'
//...
export class AppComponent implements OnInit {
  //...
  testForm: FormGroup
  ngOnInit() {
    this.testForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('male'),
    })
  }

  onSubmit() {
    console.log(this.testForm)
  }
}
```

`app.component.html`:

```html
<form [formGroup]="testForm" (ngSubmit)="onSubmit()"></form>
```

## Валидация реактивной формы

Реактивная форма конфигурируется из компонента. Для того, чтобы добавить валидацию, в конструктор объекта `FormControl` добавляется второй параметр — объект или массив объектов статичного класса `Validators`.

`app.component.ts`:

```typescript
import { FormControl, FormGroup, Validators } from '@angular/forms';

ngOnInit() {
    this.testForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
    });
}
```

## Работа с состояниями формы

В компоненте определена переменная `testForm` класса `FormGroup`, связанная с формой `<form [formGroup]="testForm") ... >`, тогда:

```html
<input
  type="text"
  id="name"
  class="form-control"
  formControlName="name"
/>
<span
  class="help-block"
  *ngIf="!testForm.get('name').valid && testForm.get('name').touched"
>
  Please, enter yor name
</span>
```

## Группировка полей реактивной формы

Поля группируются в объекте реактивной формы:

```typescript
this.testForm = new FormGroup({
  userData: new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
  }),
  gender: new FormControl('male'),
})
```

В шаблоне должна быть соответствующая структура, доступ к сгруппированным свойствам осуществляется через имя группы и имя поля:

```html
<form [formGroup]="testForm" (ngSubmit)="onSubmit()">
  <div formGroupName="userData">
    <div class="form-group">
      <label for="name">Username</label>
      <input
        type="text"
        id="name"
        class="form-control"
        formControlName="name"
      />
      <span
        class="help-block"
        *ngIf="!testForm.get('userData.name').valid && testForm.get('userData.name').touched"
      >
        Please, enter yor name
      </span>
    </div>
    <div class="form-group">
      <label for="email">email</label>
      <input
        type="text"
        id="email"
        class="form-control"
        formControlName="email"
      />
    </div>
  </div>
  <div class="radio" *ngFor="let gender of genders">
    <label>
      <input
        type="radio"
        [value]="gender"
        formControlName="gender"
      />
      {{ gender }}
    </label>
  </div>
  <button class="btn btn-primary" type="submit">
    Submit
  </button>
</form>
```

## FormArray, динамическое добавление полей

Компонент:

```typescript
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
//...
	this.testForm = new FormGroup({
	//...
	'hobbies': new FormArray([])
	});
    //...
    onAddHobbie() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.testForm.get("hobbies")).push(control);
    }
```

Шаблон:

```html
<div formArrayName="hobbies">
  <h4>your hobbies</h4>
  <button
    class="btn btn-default"
    type="button"
    (click)="onAddHobbie()"
  >
    add hobbie
  </button>
  <div
    class="form-group"
    *ngFor="let hobbyControl of testForm.get('hobbies').controls; let i = index;"
  >
    <input
      type="text"
      class="form-control"
      [formControlName]="i"
    />
  </div>
</div>
```

## Создание кастомного валидатора

Создадим валидатор, запрещающий некоторый имена. Внесем следующие доработки в компонент.

Добавим массив запрещенных имен:

```typescript
forbiddenNames = ['Test', 'Hacker', 'Spammer']
```

Валидатор — это функция. Создадим кастомный валидатор:

```typescript
validateName(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.indexOf(control.value) > -1) {
      return {'nameIsForbidden': true}
    } else {
      return null;
    }
}
```

Добавим кастомный валидатор к полю формы:

```typescript
ngOnInit() {
  this.testForm = new FormGroup({
    'userData': new FormGroup({
      'name': new FormControl(null, [Validators.required, this.validateName.bind(this)]),
      //...
```

Кастомный валидатор необходимо привязывать к контексту с помощью `.bind(this)`.

## Вывод ошибок

Отредактируем шаблон, чтобы при незаполнении имени, либо при вводе запрещенного имени отображалась соответствующая ошибка:

```html
<div class="form-group">
  <label for="name">Username</label>
  <input
    type="text"
    id="name"
    class="form-control"
    formControlName="name"
  />
  <span
    class="help-block"
    *ngIf="!testForm.get('userData.name').valid && testForm.get('userData.name').touched"
  >
    <span
      *ngIf="testForm.get('userData.name').errors['nameIsForbidden']"
    >
      This name is forbidden
    </span>
    <span
      *ngIf="testForm.get('userData.name').errors['required']"
    >
      This name is required
    </span>
  </span>
</div>
```

## Асинхронная валидация

Добавим асинхронную валидацию для `email`:

```typescript
this.testForm = new FormGroup({
    'userData': new FormGroup({
      'email': new FormControl(
		  null,
		  [Validators.required, Validators.email],
		  this.asincValidateEmail),

      //...
asincValidateEmail(control: FormControl): Promise<any> | Observable<any> {
const promise = new Promise<any>((resolve, reject) => {
    setTimeout(()=>{
    if (control.value === "q@q") {
        resolve({'emailIsForbidden': true});
    } else {
        resolve(null);
    }
    },
    1000);
});
return promise;
}
```

## Подписка на изменение статуса или значения форм

В `ngOnInit`:

```typescript
this.signupForm.valueChanges.subscribe((value) =>
  console.log(value)
)
this.signupForm.statusChanges.subscribe((status) =>
  console.log(status)
)
```

## Полная и частичная установка значений формы

Полная:

```typescript
this.testForm.setValue({
  userData: {
    name: 'Test',
    email: 'test@test.com',
  },
  gender: 'male',
  hobbies: [],
})
```

Частичная:

```typescript
this.testForm.patchValue({
  userData: {
    name: 'Test2',
  },
})
```

Сброс формы:

```typescript
this.testForm.reset()
```
