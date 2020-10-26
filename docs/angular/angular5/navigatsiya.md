---
description: Навигация в Angular5 на основе событий.
---

# Навигация

Главный копонент обрабатывает событие клика по навигации:

```html
<app-header
  (selectItem)="onSelectItem($event)"
></app-header>
```

Код обрабочика:

```typescript
selectedItem: string = 'recipes';

onSelectItem(item: string) {
  this.selectedItem = item;
}
```

И в зависимости от данного состояния отображает компоненты:

```html
<app-recipes
  *ngIf="selectedItem === 'recipes'"
></app-recipes>
<app-shopping-list
  *ngIf="selectedItem === 'shopping-list'"
></app-shopping-list>
```

Шаблон навигации привязывает клики к своему методу `selectFromMenu()`:

```html
<li>
  <a href="#" (click)="selectFromMenu('recipes')"
    >Recipes</a
  >
</li>
<li>
  <a href="#" (click)="selectFromMenu('shopping-list')"
    >Shopping List</a
  >
</li>
```

Метод `selectFromMenu` выводит наружу объект `EventEmitter`:

```typescript
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//...
@Output() selectItem = new EventEmitter<string>();

selectFromMenu(item: string) {
    this.selectItem.emit(item);
}
```

Таким образом, когда происходит клик по навигации, всплывает событие `selectItem`, которое обрабатывает главный компонент и отображает соответствующий компонент.
