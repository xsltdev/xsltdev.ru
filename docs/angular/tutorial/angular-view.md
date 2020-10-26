---
description:
---

# Angular view

Для манипуляций с DOM-элементами в Angular используются так называемые абстракции, которые представлены классами [`ElementRef`](https://angular.io/api/core/ElementRef), [`TemplateRef`](https://angular.io/api/core/TemplateRef), [`ViewRef`](https://angular.io/api/core/ViewRef), [`ComponentRef`](https://angular.io/api/core/ComponentRef) и [`ViewContainerRef`](https://angular.io/api/core/ViewContainerRef).

Сами абстракции представляют шаблон компонента или его отдельные части.

Для получения доступа к абстракциям используется механизм DOM-запросов, реализованных декораторами [`@ViewChild()`](https://angular.io/api/core/ViewChild) (возвращает одну ссылку) и [`@ViewChildren()`](https://angular.io/api/core/ViewChildren) (возвращает массив ссылок).

Указанные декораторы используются совместно с шаблонными переменными, являющимися именованными ссылками на шаблон или его части. Именно они служат идентификатором для получения нужного шаблона.

```ts
@Component({
  selector: 'view-child-demo',
  template: `
    <div>
      <h1 #title>Angular tutorial</h1>
    </div>
  `,
})
export class ViewChildDemoComponent
  implements AfterViewInit {
  @ViewChild('title', { read: ElementRef })
  title: ElementRef

  ngAfterViewInit(): void {
    console.log(this.title.nativeElement.textContent)
  }
}
```

В примере ссылка на представление сохраняется в переменную `title` и становится доступной только в момент вызова `AfterViewInit`.

Если запрашиваемое представление является стандартным HTML-тегом, то запрос вернет ссылку типа `ElementRef`, если же это Angular элемент `<ng-template />` - ссылку типа `TemplateRef`.

Рассмотрим каждую из абстракций более подробно.

## ElementRef

Основная и самая часто используемая абстракция - `ElementRef`. Она хранит в себе "оригинальный" HTML-элемент в свойстве `nativeElement` так, если бы он был получен с помощью нативного JavaScript.

```ts
@Component({
  selector: 'element-ref-demo',
  template: ` <h1>ElementRef demo</h1> `,
})
export class ElementRefDemoComponent
  implements AfterViewInit {
  constructor(private host: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(this.host.nativeElement)
  }
}
```

Манипуляции с элементом через `nativeElement` рекомендуется использовать только в самом крайнем случае, поскольку это нарушает принцип реализации слоев представлений в Angular.

В большинстве случаев хватает функционала, предоставляемых стандартными Angular директивами.

## TemplateRef

Ранее уже упоминалось, что ссылка типа `TemplateRef` возвращается в том случае, если запрос возвращает представление, заключенное в специальные теги `<ng-template />`.

Класс `TemplateRef` содержит единственное свойство `elementRef`, содержащее экземпляр класса `ElementRef`, который в свою очередь ссылается на host-элемент.

```ts
@Component({
  selector: 'template-ref-demo',
  template: `
    <ng-template #tpl>
      <h1>TemplateRef demo</h1>
    </ng-template>
  `,
})
export class TemplateRefDemoComponent
  implements AfterViewInit {
  @ViewChild('tpl') _tpl: TemplateRef<any>

  ngAfterViewInit(): void {
    console.log(this._tpl.elementRef)
  }
}
```

Также экземпляр класса `TemplateRef` содержит метод `createEmbeddedView()`, который позволяет создавать представления и возвращать на них ссылку типа `ViewRef`.

## ViewRef

Класс `ViewRef` отражает представления. В Angular представление является структурной составляющей интерфейса приложения.

В Angular различают два вида представлений:

- Embedded Views - относятся к элементу `<ng-template />`;
- Host Views - относятся к компоненту и инициализируются в момент [динамического создания компонентов](dynamic-components.md).

Embedded и Host Views размещаются в контейнере `ViewContainerRef`.

Оба примера создают представление и возвращают на него ссылку типа `ViewRef`. После создания представления могут быть вставлены в ссылку типа `ViewContainerRef` или, проще говоря, контейнер.

## ViewContainerRef

Контейнером для представлений может служить абсолютно любой DOM-элемент. Важно отметить, что вставка представлений происходит не внутрь контейнера, а сразу после него.

Но лучше всего использовать как контейнер специальный Angular-элемент `<ng-container />`.

```ts
@Component({
  selector: 'view-container-ref-demo',
  template: `
    <ng-container #views></ng-container>

    <ng-template #tpl>
      <div>
        <h1>Template title</h1>
        <p>Template description</p>
      </div>
    </ng-template>
  `,
})
export class ViewContainerRefDemoComponent
  implements AfterViewInit {
  @ViewChild('views', { read: ViewContainerRef })
  views: ViewContainerRef
  @ViewChild('tpl') tpl: TemplateRef<any>

  constructor(
    private componentFactory: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngAfterViewInit() {
    // embedded view
    const view = this.tpl.createEmbeddedView(null)
    this.views.insert(view)

    // host view
    const factory = this.componentFactory.resolveComponentFactory(
      ContactItemComponent
    )
    const componentRef = factory.create(this.injector)

    this.views.insert(componentRef.hostView, 0)
  }
}
```

Как и другие абстракции, ссылка `ViewConatainerRef` имеет привязку в DOM-дереве.

Для осуществления манипуляций с представлениями внутри контейнера, у экземпляра класса `ViewContainerRef` предусмотрен ряд методов:

- `insert(viewRef: ViewRef, index?: number)` - вставляет представление `viewRef` на позицию `index` (если `index` не указан, то вставка осуществляется в конец);
- `clear()` - удаляет все представления из контейнера;
- `get(index: number)` - возвращает представление типа `ViewRef` по заданному индексу;
- `indexOf(viewRef: ViewRef)` - возвращает индекс переданного представления;
- `detach(index?: number)` - удаляет представление по конкретному индексу, если индекс не передан - удаляет последнее представление;
- `move(viewRef: ViewRef, currentIndex: number)` - меняет индекс представления `viewRef` на `currentIndex`.

## ComponentRef

Ссылка типа `ComponentRef` возвращается при динамическом создании компонента с использованием сервиса [`ComponentFactoryResolver`](https://angular.io/api/core/ComponentFactoryResolver). Описание вынесено в отдельную главу.

## ngTemplateOutlet и ngComponentOutlet

Директива [`ngTemplateOutlet`](https://angular.io/api/common/NgTemplateOutlet) создает из DOM-элемента ссылку `ViewContainerRef` и вставляет в него Embedded View, которое формируется по переданной шаблонной переменной прямо в шаблоне без написания кода в контроллере компонента.

```html
<div>
  <ng-container *ngTemplateOutlet="tpl"></ng-container>

  <ng-template #tpl>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </ng-template>
</div>
```

Также в такие представления можно передавать данные.

```ts
items: any = ['Item 1', 'Item 2', 'Item 3']
```

```html
<div>
  <ng-container
    *ngTemplateOutlet="tpl; context: items"
  ></ng-container>

  <ng-template #tpl let-items="items">
    <ul>
      <li
        *ngFor="let item of items"
        [textContent]="item"
      ></li>
    </ul>
  </ng-template>
</div>
```

Директива [`ngComponentOutlet`](https://angular.io/api/common/NgComponentOutlet) аналогична `ngTemplateOutlet`. Различие лишь в том, что она формирует представление Host View по переданному ей названию компонента.

```html
<ng-container
  *ngComponentOutlet="ContactItem"
></ng-container>
```
