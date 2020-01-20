---
description: Связывание событий и получение данных события в Angular 5.
---

# События

## Event Binding

Синтаксис: `(event)="function()"`

`\app\servers\servers.component.html`:

```html
<button
  class="btn btn-primary"
  [disabled]="disallowNewServer"
  (click)="onServerCreate()"
>
  Add Server
</button>
<p [innerText]="serverStatus"></p>
```

`\app\servers\servers.component.ts`:

```typescript
export class ServersComponent implements OnInit {
  disallowNewServer = true
  serverStatus = 'Server is OFF'
  // ...
  onServerCreate() {
    this.serverStatus = 'Server is ON'
  }
}
```

## Передача и использование данных с помощью event Binding

`\app\servers\servers.component.html`:

```html
<input type="text" class="form-control" (input)="onUpdateServerName($event)" />
<p>{{ serverName }}</p>
```

`\app\servers\servers.component.ts`:

```typescript
serverName = '';
onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}
```

`(<HTMLInputElement>event.target)` - для приведения типа. Это синтаксис для информирования _TypeScript_ о типе переменной. Интерфейс `HTMLInputElement` является частью _Web Api_ и обеспечивает свойства и методы для манипулирования версткой и представлением элемента _input_. Подробнее о нем можно прочитать на _MDN_.
