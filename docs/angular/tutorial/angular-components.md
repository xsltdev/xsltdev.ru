---
description: Angular компоненты - описание и примеры создания. Использование декороаторов @Input() и @Output(), геттеры и сеттеры Angular компонента.
---

# Компоненты

**Компонент** (Angular component) - обособленная часть функционала со своей логикой, HTML-шаблоном и CSS-стилями.

Класс становится Angular компонентом, если его объявлению предшествует декоратор [`@Component()`](https://angular.io/api/core/Component) с объектом конфигурации.

## Декораторы Angular @Input() и @Output()

```html
<contacts-item
  [name]="contactPerson"
  (saveContactPerson)="contactPerson = $event"
></contacts-item>
```

Ранее уже упоминалось, что Angular компоненты могут принимать и передавать данные.

Здесь name и `saveContactPerson` - входное и выходное свойства `ContactsItemComponent`. Тип задается с помощью декораторов [`@Input()`](https://angular.io/api/core/Input) и [`@Output()`](https://angular.io/api/core/Output) соответственно.

Исходя из названия, входными (`@Input()`) свойствами считаются те, которые принимают данные, а выходными (`@Output()`) - которые поставляют данные, это экземпляры класса `EventEmitter`.

В качестве альтернативы в Angular component можно использовать свойства декоратора `@Component()` `inputs` и `outputs`.

```ts
@Component({
	selector: 'contacts-item',
	template: `<button (click)= "showContactPerson()">Show</button>`,
	inputs: ['name'],
	outputs: ['saveContactPerson']
})
```

Но нельзя использовать оба варианта одновременно.

## Getter и Setter

Геттерами и сеттерами называются методы Angular компонента, которые используются для модификации значений его свойств.

Getter вызывается в момент обращения к свойству (в шаблоне или в других методах классах), setter - в момент присвоения ему значения (обычно это свойства с декоратором `@Input()`).

```ts
@Input() _name: string = null;
get name(): string { return this._name || 'Unknown'; }
```

Запись означает, что при обращении к свойству с именем `name` будет вызван одноименный метод с ключевым словом `get`.

Setter создается с помощью `set`. Он не должен возвращать значений и обязательно принимает в качестве единственного аргумента исходное значение.

_contacts-list.component.ts_

```ts
@Component({
  selector: 'contacts-list',
  template: `
    <contacts-item [name]="'Peter'"></contacts-item>
  `,
})
export class ContactsListComponent {
  contactPerson: string
}
```

_contacts-item.component.ts_

```ts
@Component({
  selector: 'contacts-item',
  template: ` <p>{{ name }}</p> `,
})
export class ContactsItemComponent {
  _name: string = null

  @Input() set name(value: string) {
    this._name = value + '*'
  }

  get name(): string {
    return this._name || 'Unknown'
  }
}
```

В компоненте `ContactsItemComponent` определено строковое свойство `_name`, которое участвует в формировании `name`.

!!! note ""

    Свойства, определенные в Angular компоненте с помощью сеттеров и геттеров, не должны дублироваться в "обычных" свойствах, поэтому в примере выше используется название с нижним подчеркиванием.

В `ContactsListComponent` задается значение `name` компонента `ContactsItemComponent`. Именно в этот момент вызывается метод `set()` и устанавливает значение в `Peter*`.

В самом компоненте после интерполяции вызывается метод `get()`, который возвращает `Unknown`, если `_name` равно `null`.

То есть если бы в `ContactsListComponent` шаблон был `<contacts-item></contacts-item>`, то значением `name` было бы `Unknown`.

## Ссылки

- [Components](https://angular.io/guide/displaying-data)
- [@Component](https://angular.io/api/core/Component)
- [@Input](https://angular.io/api/core/Input)
- [@Output](https://angular.io/api/core/Output)
