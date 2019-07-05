# Жизненный цикл компонента

Каждый компонент имеет свой **жизненный цикл** (Component Lifecycle), в процессе которого вызываются ряд описывающих текущий этап методов (Angular Hooks):

- `OnChanges` - устанавливаются или изменяются значения входных свойств класса компонента;
- `OnInit` - устанавливаются "обычные" свойства; вызывается единожды вслед за первым вызовом `OnChanges()`;
- `DoCheck` - происходит изменения свойства или вызывается какое-либо событие;
- `AfterContentInit` - в шаблон включается контент, заключенный между тегами компонента;
- `AfterContentChecked` - аналогичен `DoCheck()`, только используется для контента, заключенного между тегами компонента;
- `AfterViewInit` - инициализируются компоненты, которые входят в шаблон текущего компонента;
- `AfterViewChecked` - аналогичен `DoCheck()`, только используется для дочерних компонентов;
- `OnDestroy` - компонент "умирает", т. е. удаляется из DOM-дерева

В списке выше все методы перечислены в порядке их вызова.

Angular hooks реализованы в виде интерфейсов, реализующих функцию, совпадающую по названию с названием интерфейса + префикс `ng`.

```ts
    export class ContactsItemComponent implements OnInit {
      ...
      ngOnInit() {
        console.log('OnInit');
      }
        ...
     }
```

Чтобы стало понятно, разберем пример.

_hooks-example.component.ts_

```ts
@Component({
  selector: 'hooks-example',
  template: `
    <contacts-list [title]="'Managers'">
      <contacts-item [name]="'Peter'"></contacts-item>
    </contacts-list>
  `
})
export class HooksExampleComponent {}
```

_contacts-list.component.ts_

```ts
@Component({
  selector: 'contacts-list',
  template: `
    <h2>Contacts List of {{ company }}</h2>
    <ng-content></ng-content>
    <contacts-item [name]="'Jack'"></contacts-item>
    <contacts-item [name]="'Daniel'"></contacts-item>
  `
})
export class ContactsListComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() title: string

  company: string = 'Google Inc.'

  @ViewChild(ContactsItemComponent) vwCh: ContactsItemComponent
  @ContentChild(ContactsItemComponent) cntCh: ContactsItemComponent

  ngOnChanges(obj: SimpleChanges) {
    console.log('OnChanges', obj)
  }

  ngOnInit() {
    console.log('OnInit', this.company)
  }

  ngDoCheck() {
    console.log('DoCheck')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit', this.cntCh)
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('AfterViewInit', this.vwCh)
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }
}
```

_contacts-item.component.ts_

```ts
@Component({
  selector: 'contacts-item',
  template: `
    <p>{{ name }}</p>
  `
})
export class ContactsItemComponent {
  @Input() name: string = null
}
```

Запустите приложение c открытой консолью браузера. На примере Component Lifecycle выглядит так:

![Component Lifecycle](lifecycle.png)

Первым вызывается `OnChanges()`, повторный вызов которого осуществляется при изменении хотя бы одного входного свойства. В качестве аргумента ему передается объект с текущим и предыдущим значениями измененных `@Input()` свойств.

Если входные свойства отсутствуют, то метод не будет вызван.

Следом вызывается `OnInit()`, который говорит о том, что инициализированы внутренние свойства компонента, в данном случае свойство `company`. Метод вызывается только один раз.

Третьим по счету идет `DoCheck()`, который отслеживает изменения, не связанные со свойствами. Его вызов осуществляется довольно часто, в ответ на каждое взаимодействие пользователя с интерфейсом (например, фокусировка поля формы или потеря фокуса).

Далее инициализируются шаблоны. Сначала подгружается контент, находящийся между тегами компонента. За это отвечает `ngAfterContentInit()`.

Для отображения переданного контента в представлении компонента используется парный тег `<ng-content></ng-content>`.

На этом этапе Component Lifecycle можно получить переданный извне компонент. Для этого используется декоратор `@ContentChild()`, который в качестве аргумента принимает название компонента, также рекомендуется указывать его тип. Передавать можно не только компонент, но и обычный HTML, доступ к которому осуществляется через ссылку на него, подробно [здесь](angular-view.md).

```ts
    @ContentChild(ContactsItemComponent) contentChild: ContactsItemComponent;
```

Следующим при любых изменениях во внешнем шаблоне вызывается `ngAfterContentChecked()`.

Если вам нужно получить все экземпляры указанного компонента, используйте декоратор `@ContentChildren()`.

Методы `ngAfterViewInit()` и `ngAfterViewChecked()` схожи с `ngAfterContentInit()` и `ngAfterContentChecked()` лишь с тем различием, что первые два вызываются после полной иницализации шаблона.

Используя декораторы `@ViewChild()` и `@ViewChildren()` можно получить доступ к прямым дочерним компонентам.

Как и сами Angular Hooks, декораторы находятся в библиотеке `@angular/core`.

Чтобы инициировать вызов `OnDestroy()`, необходимо удалить компонент из DOM-дерева (переход на другой URL или с помощью `*ngIf`).
