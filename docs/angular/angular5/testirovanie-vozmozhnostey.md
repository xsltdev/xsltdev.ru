---
description: Создание простого приложения с динамически обновляющимся текстом.
---

# Пример приложения на Angular 5

Файлы приложения находятся в директории `/src/app`. Рассмотрим пример, в котором динамически обновляется параграф, дублируя значение, заполненное в форму ввода.

На вновь созданном проекте вносим изменения:

`app.component.html`:

```html
<input type="text" [(ngModel)]="name" />
<p>{{name}}</p>
```

`[(ngModel)]="name"` так называемое двухстороннее связывание, это является короткой записью двух команд:
`[ngModel]="name"` связывает переменную name с `input.value`
`(ngModelChange)="name = $event"` по событию изменения `input.value` связывает его значение с переменной name

`app.components.ts`:

```js
export class AppComponent {
  name = ''
}
```

`app.module.ts:`

```js
import { FormsModule } from '@angular/forms';
  //...
	imports: [
		BrowserModule,
		FormsModule
	],
  //...
```

Для корректной работы примера нужно подключить модуль `FormsModule`.
