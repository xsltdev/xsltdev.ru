---
description: Манипуляция формами (Angular forms) осуществляется мощными и продуманными инструментами библиотеки
---

# Формы

Манипуляция **формами** (Angular forms) осуществляется мощными и продуманными инструментами библиотеки `@angular/forms`.

С точки зрения Angular различают формы:

- Стандартные (Template-driven);
- Реактивные (Reactive).

Данная глава посвящена рассмотрению стандартных форм, [реактивные](angular-reactive-forms.md) рассмотрены отдельно.

Для создания Angular форм импортируйте [`FormsModule`](https://angular.io/api/forms/FormsModule) из `@angular/forms`.

Не забудьте добавить `FormsModule` в корневой модуль.

Начнем с создания обычной HTML-формы логина.

```html
<form>
  <div>
    <label>Логин</label>
    <input type="text" required name="login" />
  </div>
  <div>
    <label>Пароль</label>
    <input type="password" required name="password" />
  </div>

  <button>Войти</button>
</form>
```

Для работы со значениями полей Angular формы создадим в классе компонента свойство `loginForm`, которое является отображением модели формы.

```ts
loginForm: any = {
  login: '',
  password: '',
}
```

Чтобы связать объект `loginForm` с соответствующими полями, используется директива [`[(ngModel)]`](https://angular.io/api/forms/NgModel).

```html
<input
  type="text"
  [(ngModel)]="loginForm.login"
  id="login"
  required
  name="login"
/>
```

Запись вида `[()]` является комбинированием двух механизмов передачи данных в Angular, каждый из которых работает только в одностороннем режиме. `[]` - это передача данных из переменной в поле (свойство [`@Input()`](https://angular.io/api/core/Input), `()` - из поля в переменную (свойство [`@Output()`](https://angular.io/api/core/Output)).

Так для задания полю "Логин" значения по умолчанию, переменная `loginForm` должна быть определена следующим образом:

```ts
loginForm: any = {
  login: 'Логин по умолчанию',
  password: '',
}
```

Чтобы убедиться, что данные передаются и из Angular формы в обратную сторону, создадим метод `printForm()`, который будет выводить значение в консоль.

```ts
printForm(){
	console.log(this.loginForm);
}
```

Теперь соединим все описанное выше в одно.

```html
<form>
  <div>
    <label>Логин</label>
    <input
      type="text"
      [(ngModel)]="loginForm.login"
      required
    />
  </div>
  <div>
    <label>Пароль</label>
    <input
      type="password"
      [(ngModel)]="loginForm.password"
      required
    />
  </div>

  <button (click)="printForm()">Войти</button>
</form>
```

Заполнив поля Angular формы, нажмите кнопку "Войти" и проверьте консоль, чтобы убедиться, что данные успешно были переданы в класс компонента.

[Валидация форм](forms-validation.md) рассмотрена отдельно.

## Ссылки

- [Forms](https://angular.io/start/forms)
