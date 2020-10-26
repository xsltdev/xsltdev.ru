---
description: Механизм двустороннего связывания (angular two way binding) используется, когда необходимо отобразить свойство в шаблоне (одностороннее связывание) и обновить его при изменении значения (возникновение события) без перезагрузки страницы
---

# Двустороннее связывание

Механизм двустороннего связывания (angular two way binding) используется, когда необходимо отобразить свойство в шаблоне (одностороннее связывание) и обновить его при изменении значения (возникновение события) без перезагрузки страницы.

Синтаксис двустороннего связывания представляет собой слияние `[]` одностороннего связывания и `()` привязки события.

```html
<contacts-item [(name)]="contactPerson"></contacts-item>
```

Запись `[(name)]="contactPerson"` означает, что при изменении name в компоненте `contacts-item` его значение будет присвоено свойству `contactPerson` компонента, в который входит `contacts-item`.

Изменим пример из предыдущей главы.

_contacts.component.ts_

```ts
@Component({
  selector: 'contacts',
  template: `
    <contacts-item [(name)]="contactPerson"></contacts-item>
    <p>{{ contactPerson }}</p>
  `,
})
export class ContactsComponent {
  contactPerson: string

  constructor() {}
}
```

_contacts-item.component.ts_

```ts
@Component({
  selector: 'contacts-item',
  template: `
    <button (click)="showContactPerson()">Show</button>
  `,
})
export class ContactsItemComponent {
  @Input() name: string = 'Unknown'
  @Output() nameChange = new EventEmitter<String>()

  constructor() {}

  showContactPerson(): void {
    this.name = 'Peter'
    this.nameChange.emit(this.name)
  }
}
```

Очевидно, что `<contacts-item [(name)]="contactPerson"></contacts-item>` является более удобным синтаксисом для `<contacts-item [name]="contactPerson" (nameChange)="contactPerson = $event"></contacts-item>`

!!! note ""

    Общепринято при использовании angular two way binding метод, который изменяет значение отслеживаемого свойства (здесь name), называть как "имя свойства" + "Change" (здесь `nameChange`).

Декораторы [`@Input()`](https://angular.io/api/core/Input) и [`@Output()`](https://angular.io/api/core/Output) рассмотрены [здесь](angular-components.md).

## NgModel

Для двустороннего связывания в полях формы используется встроенная в Angular директива [`NgModel`](https://angular.io/api/forms/NgModel).

```html
<input type="text" [(ngModel)]="contactPerson" />
```

При изменении поля его значение помещается в свойство `contactPerson`.

!!! note ""

    Директива может использоваться только с элементами формы.

`NgModel` находится в [`FormsModule`](https://angular.io/api/forms/FormsModule), поэтому перед тем, как ее использовать, импортируйте `FormsModule` библиотеки `@angular/forms`.
