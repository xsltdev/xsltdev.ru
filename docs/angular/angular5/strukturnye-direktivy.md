---
description: Что такое структурные директивы. Встроенные и собственные структурные директивы.
---

# Структурные директивы

_Структурные директивы_ отвечают за _html_ верстку. Они работают с _DOM_ структурой добавляя, удаляя и манипулируя элементами.

_Ангулар_ имеет встроенные _структурные директивы_ `NgIf`, `NgFor` и `NgSwitch`.

_Структурные директивы_ имеют удобную форму записи со звездой, которая является сахаром для конструкций вида:

```html
<ng-template [ngIf]="..."> ... </ng-template>
```

Примеры работы со встроенными структурными директивами:

```html
<div *ngIf="user" class="name">{{user.name}}</div>

<ul>
  <li *ngFor="let user of users">{{user.name}}</li>
</ul>

<div [ngSwitch]="myCaseValue">
  <p *ngSwitchCase="5">value is 5</p>
  <p *ngSwitchCase="15">value is 15</p>
  <p *ngSwitchCase="25">value is 25</p>
  <p *ngSwitchCase="35">value is 35</p>
</div>
```

## Собственная структурная директива

Создадим файл `unless.directive.ts`:

```typescript
import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core'

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear()
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
```

Подключим `UnlessDirective` в массив `declarations` в `AppModule`.

Теперь можно использовать созданную директиву:

```html
<ul *appUnless="onlyOdd" class="list-group">
  <li
    *ngFor="let even of evenNumbers"
    class="list-group-item"
  >
    {{even}}
  </li>
</ul>
```

## Выпадающий список

Рассмотрим пример использования структурной директивы для создания выпадающих списков. Для списка используем элемент бутстрапа, у открытого списка добавляется каласс `open`:

```typescript
import {
  Directive,
  HostListener,
  HostBinding,
} from '@angular/core'

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
  }
}
```
