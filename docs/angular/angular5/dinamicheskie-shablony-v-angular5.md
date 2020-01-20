---
description: Создание динамических шаблонов, меняющих свое состояние в зависимости от действий пользователя, с помощью двухстороннего связывания данных и директивы ngIf.
---

# Динамические шаблоны в Angular5

## Двухстороннее связывание данных

Синтаксис: `[(ngModel)]="serverName"`

```html
<input type="text" class="form-control" [(ngModel)]="serverName" />
```

Для использования `[(ngModel)]` необходимо, чтобы был подключен `FormsModule`.

## ngIf условие

`\app\servers\servers.component.html`:

```html
<p *ngIf="serverCreated">
  Server name: {{ serverName }}
</p>
```

`\app\servers\servers.component.ts`:

```typescript
serverCreated = false;
onServerCreate() {
  this.serverStatus = "Server is ON";
  this.serverCreated = true;
}
```

Синтаксис `*ngIf="boolean"` означает, что данный _html блок_ элемент появится только если выражение равно `true`.
