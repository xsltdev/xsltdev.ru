---
title: Шпаргалка
description: Шпаркалка Angular
---

# Шпаргалка

## Bootstrapping

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
```

`platformBrowserDynamic().bootstrapModule(AppModule);`
: Загружает приложение, используя корневой компонент из указанного модуля `NgModule`.

## NgModules

```ts
import { NgModule } from '@angular/core'
```

`@NgModule({ declarations: ..., imports: ..., exports: ..., providers: ..., bootstrap: ...})class MyModule {}`
: Определяет модуль, который содержит компоненты, директивы, каналы и поставщиков.

`declarations: [MyRedComponent, MyBlueComponent, MyDatePipe]`
: Список компонентов, директив и каналов, которые принадлежат этому модулю.

`imports: [BrowserModule, SomeOtherModule]`
: Список модулей для импорта в этот модуль. Все из импортированных модулей доступно в `declarations` этого модуля.

`exports: [MyRedComponent, MyDatePipe]`
: Список компонентов, директив и каналов, видимых для модулей, которые импортируют этот модуль.

`providers: [MyService, { provide: ... }]`
: Список поставщиков внедрения зависимостей, видимых как для содержимого этого модуля, так и для импортеров этого модуля.

`entryComponents: [SomeComponent, OtherComponent]`
: Список компонентов, на которые нет ссылок ни в одном доступном шаблоне, например, динамически созданный из кода.

`bootstrap: [MyAppComponent]`
: Список компонентов для начальной загрузки, когда этот модуль загружается.

## Синтаксис шаблона

`<input [value]="firstName">`
: Привязывает свойство `value` к результату выражения `firstName`.

`<div [attr.role]="myAriaRole">`
: Привязывает атрибут `role` к результату выражения `myAriaRole`.

`<div [class.extra-sparkle]="isDelightful">`
: Связывает наличие дополнительного элемента класса CSS на элементе с правдивостью выражения `isDelightful`.

`<div [style.width.px]="mySize">`
: Привязывает свойство стиля `width` к результату выражения `mySize` в пикселях. Единицы не являются обязательными.

`<button (click)="readRainbow($event)">`
: Вызывает метод `readRainbow`, когда событие нажатия вызывается для этого элемента кнопки (или его дочерних элементов) и передается в объект события.

`<div title="Hello {{ponyName}}">`
: Связывает свойство с интерполированной строкой, например, «Hello Seabiscuit». Эквивалентно: `<div [title]="'Hello' + ponyName">`

`<p>Hello {{ponyName}}</p>`
: Привязывает текстовое содержимое к интерполированной строке, например, «Hello Seabiscuit».

`<my-cmp [(title)]="name">`
: Устанавливает двустороннюю привязку данных. Эквивалентно: `<my-cmp [title]="name" (titleChange)="name=$event">`

`<video #movieplayer ...> <button (click)="movieplayer.play()"></video>`
: Создает локальную переменную `movieplayer`, которая обеспечивает доступ к экземпляру элемента `video` в выражениях привязки данных и привязки к событиям в текущем шаблоне.

`<p *myUnless="myExpression">...</p>`
: Символ `*` превращает текущий элемент во встроенный шаблон. Эквивалентно: `<ng-template [myUnless]="myExpression"><p>...</p></ng-template>`

`<p>Card No.: {{cardNumber | myCardNumberFormatter}}</p>`
: Преобразует текущее значение выражения `cardNumber` через канал `myCardNumberFormatter`.

`<p>Employer: {{employer?.companyName}}</p>`
: Оператор безопасной навигации (`?`) означает, что поле `employer` является необязательным, и если оно не определено (`undefined`), остальная часть выражения должна игнорироваться.

`<svg:rect x="0" y="0" width="100" height="100"/>`
: Шаблону фрагмента SVG требуется префикс `svg:` в его корневом элементе для устранения неоднозначности элемента SVG из компонента HTML.

`<svg> <rect x="0" y="0" width="100" height="100"/></svg>`
: Корневой элемент `<svg>` определяется как элемент SVG автоматически без префикса.

## Встроенные директивы

```ts
import { CommonModule } from '@angular/common'
```

`<section *ngIf="showSection">`
: Удаляет или воссоздает часть дерева DOM на основе выражения `showSection`.

`<li *ngFor="let item of list">`
: Превращает элемент li и его содержимое в шаблон и использует его для создания представления для каждого элемента в списке.

`<div [ngSwitch]="conditionExpression"> <ng-template [ngSwitchCase]="case1Exp">...</ng-template> <ng-template ngSwitchCase="case2LiteralString">...</ng-template> <ng-template ngSwitchDefault>...</ng-template></div>`
: Условно меняет содержимое `div`, выбирая один из встроенных шаблонов на основе текущего значения `conditionExpression`.

`<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">`
: Связывает наличие классов CSS в элементе с достоверностью связанных значений карты. Правое выражение должно возвращать `{class-name: true / false}`.

`<div [ngStyle]="{'property': 'value'}"><div [ngStyle]="dynamicStyles()">`
: Позволяет назначать стили для элемента HTML с помощью CSS. Вы можете использовать CSS напрямую, как в первом примере, или вы можете вызвать метод из компонента.

## Формы

```ts
import { FormsModule } from '@angular/forms'
```

`<input [(ngModel)]="userName">`
: Обеспечивает двустороннюю привязку данных, анализ и проверку для элементов управления формы.

## Декораторы классов

```ts
import { Directive, ... } from '@angular/core';
```

`@Component({...})class MyComponent() {}`
: Объявляет, что класс является компонентом, и предоставляет метаданные о компоненте.

`@Directive({...})class MyDirective() {}`
: Объявляет, что класс является директивой и предоставляет метаданные о директиве.

`@Pipe({...})class MyPipe() {}`
: Declares that a class is a pipe and provides metadata about the pipe.

`@Injectable()class MyService() {}`
: Объявляет, что класс может быть предоставлен и добавлен другими классами. Без этого декоратора компилятор не будет генерировать достаточно метаданных, чтобы позволить классу быть правильно созданным, когда он где-то внедряется.

## Настройки директивы

```ts
@Directive({ property1: value1, ... })
```

`selector: '.cool-button:not(a)'`
: Указывает селектор CSS, который идентифицирует эту директиву в шаблоне. Поддерживаются следующие селекторы: `element`, `[attribute]`, `.class` и `:not()`. Не поддерживает селекторы родительско-дочерних отношений.

`providers: [MyService, { provide: ... }]`
: Список поставщиков внедрения зависимостей для этой директивы и ее дочерних элементов.

## Настройки компонента

`@Component` расширяет `@Directive`, поэтому конфигурация `@Directive` применяется и к компонентам.

`moduleId: module.id`
: Если установлено, то `templateUrl` и `styleUrl` разрешаются относительно компонента.

`viewProviders: [MyService, { provide: ... }]`
: Список поставщиков внедрения зависимостей, относящихся к представлению этого компонента.

`template: 'Hello {{name}}'templateUrl: 'my-component.html'`
: Встроенный шаблон или внешний шаблон URL вида компонента.

`styles: ['.primary {color: red}']styleUrls: ['my-component.css']`
: Список встроенных стилей CSS или URL-адресов внешних таблиц стилей для стилизации представления компонента.

## Декораторы полей классов для директив и компонентов

```ts
import { Input, ... } from '@angular/core';
```

`@Input() myProperty;`
: Объявляет входное свойство, которое можно обновить с помощью привязки свойства (пример: `<my-cmp [myProperty]="someExpression">`).

`@Output() myEvent = new EventEmitter();`
: Объявляет выходное свойство, которое запускает события, на которые вы можете подписаться, с привязкой к событию (пример: `<my-cmp (myEvent)="doSomething()">`).

`@HostBinding('class.valid') isValid;`
: Связывает свойство элемента хоста (здесь класс CSS `valid`) со свойством директивы / компонента (`isValid`).

`@HostListener('click', ['$event']) onClick(e) {...}`
: Подписывается на событие элемента хоста (`click`) с помощью метода директивы / компонента (`onClick`), опционально передавая аргумент (`$event`).

`@ContentChild(myPredicate) myChildComponent;`
: Привязывает первый результат запроса содержимого компонента (`myPredicate`) к свойству (`myChildComponent`) класса.

`@ContentChildren(myPredicate) myChildComponents;`
: Связывает результаты запроса содержимого компонента (`myPredicate`) со свойством (`myChildComponents`) класса.

`@ViewChild(myPredicate) myChildComponent;`
: Привязывает первый результат запроса представления компонента (`myPredicate`) к свойству (`myChildComponent`) класса. Недоступно для директив.

`@ViewChildren(myPredicate) myChildComponents;`
: Связывает результаты запроса представления компонента (`myPredicate`) со свойством (`myChildComponents`) класса. Недоступно для директив.

## Директива и обнаружение изменений компонентов и хуки жизненного цикла

`constructor(myService: MyService, ...) { ... }`
: Вызывается до любого другого хука жизненного цикла. Используйте его для внедрения зависимостей, но избегайте здесь серьезной работы.

`ngOnChanges(changeRecord) { ... }`
: Вызывается после каждого изменения входных свойств и перед обработкой содержимого или дочерних представлений.

`ngOnInit() { ... }`
: Вызывается после конструктора, инициализации входных свойств и первого вызова `ngOnChanges`.

`ngDoCheck() { ... }`
: Вызывается каждый раз, когда проверяются входные свойства компонента или директивы. Используйте его, чтобы расширить обнаружение изменений, выполнив пользовательскую проверку.

`ngAfterContentInit() { ... }`
: Вызывается после `ngOnInit`, когда содержимое компонента или директивы было инициализировано.

`ngAfterContentChecked() { ... }`
: Вызывается после каждой проверки содержимого компонента или директивы.

`ngAfterViewInit() { ... }`
: Вызывается после `ngAfterContentInit`, когда инициализируются представления компонента и дочерние представления / представление, в котором находится директива.

`ngAfterViewChecked() { ... }`
: Вызывается после каждой проверки представлений компонента и дочерних представлений / представления, в котором находится директива.

`ngOnDestroy() { ... }`
: Вызывается один раз, прежде чем экземпляр будет уничтожен.

## Настройки внедрения зависимостей

`{ provide: MyService, useClass: MyMockService }`
: Устанавливает или переопределяет поставщика для `MyService` в класс `MyMockService`.

`{ provide: MyService, useFactory: myFactory }`
: Устанавливает или переопределяет поставщика для `MyService` на заводскую функцию `myFactory`.

`{ provide: MyValue, useValue: 41 }`
: Устанавливает или переопределяет поставщика для `MyValue` на значение `41`.
