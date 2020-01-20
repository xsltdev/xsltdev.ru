---
description: Работа с формами. Шаблонный подход (Template-driven).
---

# Формы. Шаблонный подход.

## Создание формы и регистрация контроллеров

Для работы с формами нужно добавить `FormsModule` в импорты модуля. `Аpp.modules.ts`:

```typescript
//...
import { FormsModule } from '@angular/forms';
//...
@NgModule({
//...
imports: [
  //...
  FormsModule,
],
//...
```

Добавить директиву `ngModel` в `input` и `select` формы, чтобы указать, что данный инпут это контроллер формы:

```html
<input type="text" id="username" class="form-control" name="username" ngModel />
```

Чтобы использовать директиву `ngModel` у поля обязательно должен быть указан атрибут `name`. Иначе в консоли будет ошибка.

Для назначения обработчика используется событие `ngSubmit`:

```html
<form (ngSubmit)="onSubmit()"></form>
```

Для того, чтобы передать в обработчик данные формы можно использовать локальную ссылку #:

```html
<form (ngSubmit)="onSubmit(formdata)" #formdata></form>
```

Чтобы передать в обработчик не просто локальную ссылку, а js объект, представляющий данные формы и связанный с ней, нужно воспользоваться директивой `NgForm`:

```html
<form (ngSubmit)="onSubmit(formdata)" #formdata="ngForm"></form>
```

## Доступ к форме с помощью @ViewChild

Если нужно получить данные формы до момента отправки, то можно воспользоваться `@ViewChild`.

Шаблон:

```html
<form (ngSubmit)="onSubmit()" #formdata="ngForm"></form>
```

Компонент:

```typescript
import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  //...
})
export class AppComponent {
  @ViewChild('formdata') myForm: NgForm
  //...
  onSubmit(form: NgForm) {
    console.log(this.myForm)
  }
}
```

## Валидация форм

_Angular_ поддерживает специальные директивы, позволяющие валидировать пользовательский ввод.

- `required` - обязательное для заполнения поле
- `email` - указатель, что поле формата email адрес.

Пример использования данных директив:

```html
<input
  type="email"
  id="email"
  class="form-control"
  name="email"
  ngModel
  required
  email
/>
```

_Angular_ динамически устанавливает css классы у проверяемых инпутов. Это позволяет создавать дизайн для различных состояний.

[Список встроенных валидаторов](https://angular.io/api/forms/Validators).

`ngNativeValidate` (добавляется в поле шаблона) - директива переключает _Angular_ в режим стандартной _HTML5_ валидации.

## Валидация регулярным выражением

В `input` шаблона добавить паттерн регулярного выражения, например: `[pattern]="'^[1-9][0-9]*$'"`.

Или короткий вариант записи: `pattern="^[1-9][0-9]*$"`.

## Использование состояний формы

Скрытие кнопки, если форма не прошла валидацию:

```html
<form (ngSubmit)="onSubmit(formdata)" #formdata="ngForm">
  <!-- ... -->
  <button class="btn btn-primary" type="submit" [disabled]="!formdata.valid">
    Submit
  </button>
</form>
```

Выделение инпута красной рамкой. В стилях шаблона:

```css
input.ng-invalid.ng-touched {
  border: 1px solid red;
}
```

## Вывод ошибок валидации

```html
<input
  type="email"
  id="email"
  class="form-control"
  name="email"
  ngModel
  required
  email
  #email="ngModel"
/>
<span *ngIf="!email.valid && email.touched">
  Enter valid email
</span>
```

## Значение по умолчанию

С помощью `[ngModel]="'value_name'"` можно установить дефолтное значение. Если используется значение переменной компонента, то вторые кавычки не нужны: `[ngModel]="value_name_from_component"`.

```html
<select id="secret" class="form-control" name="secret" [ngModel]="'teacher'">
  <option value="pet">Your first Pet?</option>
  <option value="teacher">Your first teacher?</option>
</select>
```

## ngModel и двухстороннее связывание

```html
<div class="form-group">
  <textarea
    name="questionAnswer"
    rows="3"
    class="form-control"
    [(ngModel)]="answer"
  >
  </textarea>
  <p>You type: {{answer}}</p>
</div>
```

Переменная `answer` должна быть определена в компоненте.

## Группировка элементов

Несколько элементов могут быть сгруппированы с помощью директивы `ngModelGroup`. Для этого нужно обернуть _div'ом_ несколько элементов формы и указать у данного блока эту директиву.

Локальная ссылка создается по шаблону `#link_name="ngModelGroup"`. Это позволяет получить доступ к js объекту.

Сгруппировав несколько элементов формы и создав локальную ссылку, мы можем использовать js объект для различных целей, например, для вывода предупреждения о том, что какой-либо элемент группы не прошел валидацию:

```html
<p *ngIf="!link_name.valid && link_name.touched">
  Не верно заполнена группа
</p>
```

## Радиокнопки (Radiobuttons)

В компоненте создадим переменную:

```typescript
genders = ['male', 'female']
```

В шаблоне:

```html
<div class="radio" *ngFor="let gender of genders">
  <label>
    <input type="radio" name="gender" ngModel [value]="gender" required />
    {{gender}}
  </label>
</div>
```

## Установка значения формы из компонента

У `NgForm` есть метод `setValue()`, который принимает значения всех полей формы и устанавливает их:

```typescript
@ViewChild('formdata') myForm: NgForm;
//...
suggestUserName() {
    const suggestedName = 'Superuser';
    this.myForm.setValue({
        username: suggestedName,
        email: '',
        secret: 'pet',
        questionAnswer: '',
        gender: 'male',
    });
}
```

Чтобы изменить не все поля формы, а только часть, используется другой метод:

```typescript
@ViewChild('formdata') myForm: NgForm;
//...
this.myForm.form.patchValue({
    username: suggestedName,
    gender: 'male',
});
```

## Использование данных формы

Создадим объект `user` и запишем в него данные формы, на событие отправки формы.

```typescript
user = {
    name: '',
    mail: '',
    secretQuestion: '',
    answer: '',
    gender: '',
}

onSubmit() {
    this.submitted = true;
    this.user.name = this.myForm.value.username;
    this.user.mail = this.myForm.value.email;
    this.user.secretQuestion = this.myForm.value.secret;
    this.user.answer = this.myForm.value.questionAnswer;
    this.user.gender = this.myForm.value.gender;
}
```

Если данные в форме сгруппированы, то необходимо указывать группу, например:

```typescript
this.user.name = this.myForm.value.userData.username
this.user.mail = this.myForm.value.userData.email
```

## Сброс формы

```typescript
@ViewChild('formdata') myForm: NgForm;
//...
this.myForm.reset();
```

В функцию `reset()` можно передать объект, аналогичный тому, который передается в `setValue()`, чтобы сбросить поля в определенные значения.
