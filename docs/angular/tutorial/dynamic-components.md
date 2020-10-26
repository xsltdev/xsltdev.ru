---
description: Динамические компоненты создаются уже в скомпилированном приложении в момент его работы
---

# Динамические компоненты

Динамические компоненты создаются уже в скомпилированном приложении в момент его работы.

В Angular динамическая компиляция компонентов реализована через сервис [`ComponentFactoryResolver`](https://angular.io/api/core/ComponentFactoryResolver).

Для отображения такого компонента сперва необходимо определить место, где он будет располагаться. Местом служит ссылка на представление типа [ViewContainerRef](angular-view.md).

_books-list.component.html_

```html
<div>
  <div class="book-item" #book>
    <p>No books</p>
  </div>

  <button (click)="addBook()">Add book</button>
</div>
```

_books-list.component.ts_

```ts
@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
})
export class AppComponent {
  @ViewChild('book') book

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  addBook() {
    this.book.viewContainerRef.clear()

    let bookItemComponent = this.componentFactoryResolver.resolveComponentFactory(
      BookItemComponent
    )
    let bookItemComponentRef = this.book.viewContainerRef.createComponent(
      bookItemComponent
    )
    ;(<BookItemComponent>(
      bookItemComponentRef.instance
    )).value = {
      title: 'Great Expectations',
      author: 'Charles Dickens',
    }
  }
}
```

_book-item.component.html_

```html
<div class="book-item">
  <div>Title: {{value?.title}}</div>
  <div>Author: {{value?.author}}</div>
</div>
```

_book-item.component.ts_

```ts
@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
})
export class BookItemComponent {
  value: any = null
  constructor() {}
}
```

Вызов метода `clear()` у [`viewContainerRef`](https://angular.io/api/core/ViewContainerRef) очищает содержимое блока представления.

Метод `resolveComponentFactory()` сервиса [`ComponentFactoryResolver`](https://angular.io/api/core/ComponentFactoryResolver) принимает определение класса нужного динамического компонента и возвращает его экземпляр в виде ссылки типа [`ComponentRef`](https://angular.io/api/core/ComponentRef). Для добавления созданного экземпляра в шаблон необходимо передать его в качестве параметра методу `createComponent()` экземпляра класса [`ViewContainerRef`](https://angular.io/api/core/ViewContainerRef).

Метод `createComponent()` возвращает ссылку на созданный компонент, с помощью которой можно манипулировать значениями свойств компонента и вызывать его методы.

!!! note ""

    Все динамические компоненты (Angular dynamic component) должны перечисляться в свойстве `entryComponents` того модуля, к которому они относятся.

Стоит отметить, что невозможно создать компонент только в контроллере без представления. В шаблоне всегда должно быть предусмотрено для него место. Если не хочется плодить лишние HTML-теги - используйте Angular элемент `<ng-template />`.

```html
<div>
  <button (click)="addBook()">Add book</button>

  <ng-template #book></ng-template>
</div>
```

## Ссылки

- [Dynamic Component Loader](https://angular.io/guide/dynamic-component-loader)
