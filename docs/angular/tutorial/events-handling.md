---
description: Пользователь всегда взаимодействует с интерфейсом приложения - наводит курсор на элементы, кликает мышкой по элементам web-страницы, нажимает клавиши. Это в свою очередь инициирует возникновение соответствующих событий
---

# Обработка событий

Пользователь всегда взаимодействует с интерфейсом приложения: наводит курсор на элементы, кликает мышкой по элементам web-страницы, нажимает клавиши. Это в свою очередь инициирует возникновение соответствующих событий.

В Angular все события можно отследить и обработать, привязав к ним вызов метода класса.

```html
<button (click)="showContacts()">Show Contacts List</button>
```

Здесь нажатие мышкой кнопки с надписью "Show Contacts List" инициирует вызов метода `showContacts()`.

Название события всегда должно быть заключено в круглые скобки или предваряться префиксом `on-`.

```html
<button on-click="showContacts()">
  Show Contacts List
</button>
```

Каждое возникающее событие передает о себе всю информацию в объекте `$event`, который может быть передан методу класса в качестве аргумента.

```html
<button on-click="showContacts($event)">
  Show Contacts List
</button>
```

Свойства объекта `$event`:

- `target` - элемент DOM, выступивший инициатором;
- `target.value` - значение элемента DOM (справедливо для полей формы);
- `keyCode` - код клавиши (справедливо для keyup).

!!! note ""

    Перечисленные выше свойства имеются только у стандартных событий браузера. Angular события рассмотрены дальше в этой главе.

```ts
export class AppComponent {
  showContacts(ev): void {
    console.log(ev.target)
    console.log(ev.target.value) //в данном случае undefined
    console.log(ev.keyCode) //в данном случае undefined
  }
}
```

Наиболее распространенные события:

- `click` - нажатие кнопки мыши;
- `mouseenter/mouseleave` - наведение/уход курсора мыши на/с элемента;
- `change` - изменение состояние элемента, применяется к полям формы;
- `focus` - элемента получает фокус, т.е. становится активным;
- `blur` - потеря элементом фокуса;
- `keyup` - возникает, когда отпускается нажатая клавиша.

Для удобства в Angular предусмотрено так называемое псевдо событие `keyup.{keyCode}`, которое будет инициировано только в том случае, если будет нажата определенная клавиша. Например, для отслеживания нажатия Enter используется `keyup.enter`.

## Пользовательские Angular события

Часто в сложных приложениях стандартных событий бывает недостаточно и разработчикам приходится реализовывать собственные. За этот функционал отвечает класс [`EventEmitter`](https://angular.io/api/core/EventEmitter).

Разберем на примере двух компонентов: `ContactsComponent` и `ContactsItemComponent`.

_contacts.component.ts_

```ts
@Component({
  selector: 'contacts',
  template: `
    <contacts-item
      (saveContactPerson)="catchCustomEvent($event)"
    ></contacts-item>
  `,
})
export class ContactsComponent {
  catchCustomEvent(ev): void {
    console.log(ev)
  }
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
  contactPerson = 'Peter'

  @Output() saveContactPerson = new EventEmitter<String>()

  showContactPerson(): void {
    this.saveContactPerson.emit(this.contactPerson)
  }
}
```

Компонент `ContactsItemComponent` входит в состав `ContactsComponent`. Необходимо в момент нажатия кнопки в `contacts-item` выполнять функцию в `contacts`.

Для этого в компоненте `contacts-item` создается свойство `saveContactPerson`, которое является экземпляром класса `EventEmitter`. При создании указывается тип данных, которые будут передаваться событием.

Далее в функции, вызываемой в `contacts-item` в момент нажатия кнопки, инициируем возникновение события с помощью метода `emit()` класса `EventEmitter`, который принимает передаваемые данные.

В `app-root` имеется метод `catchCustomEvent()`, который принимает объект `$event` и вызывается в ответ на возникновение события `saveContactPerson`.

Обратите внимание, что название события совпадает с именем свойства, которое является экземпляром класса `EventEmitter`.

```ts
@Output() saveContactPerson = new EventEmitter<String>();

(saveContactPerson) = "catchCustomEvent($event)"
```

Свойства с декораторами [`@Input()`](https://angular.io/api/core/Input) и [`@Output()`](https://angular.io/api/core/Output) подробно рассмотрены [здесь](angular-components.md).

!!! info ""

    В пользовательских Angular событиях объект `$event` содержит значение, переданное методу `emit()`.
