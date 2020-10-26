---
description: Использование селектора компонента, коммуникация между компонентом и шаблоном, интерполяция, связывание свойств.
---

# Компонент и данные

## Селекторы

Селектор компонента находится в метаинформации `@Component` в файле `*.component.ts`.

Он работает так же как и css селекторы:

- `selector: 'app-servers'` - элемент
- `selector: '.app-servers'` - класс
- `selector: '[app-servers]'` - data атрибут

В шалоне должно быть соответственно:

```html
<app-servers></app-servers>
<div class="app-servers"></div>
<div app-servers></div>
```

## Databinding

_Датабиндинг (Databinding, связывание данных)_ - это коммуникация между TypeScript (бизнес логикой) и шаблоном (html).

## Строковая интерполяция

`app\server\server.component.ts`:

```typescript
export class ServerComponent {
  serverId: number = 10
  serverStatus: string = 'offline'
}
```

Возможность указать тип переменной - особенность TypeScript, это не обязательно делать всегда.

`app\server\server.component.html`:

```html
{{ 'Server' }} id is {{serverId}} and status is {{
serverStatus }}
```

`{{ 'Server' }}`, `{{serverId}}`, `{{ serverStatus }}` - будут интерполированы в строки.

## Интерполяция функции

`app\server\server.component.ts`:

```typescript
getServerID() {
    return this.serverId;
}
```

`app\server\server.component.html`:

```html
{{ getServerID() }}
```

## Property Binding (Связывание свойств)

Добавим в компонент `\app\servers\servers.component.ts` переменную `disallowNewServer` и _конструктор_:

```typescript
export class ServersComponent implements OnInit {
  allowNewServer = false
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }
  ngOnInit() {}
}
```

Стрелочный синтаксис `() => {}` позволяет использовать внешний `this`, так как не создает свой собственный.

В шаблоне `\app\servers\servers.component.html`:

```html
<button
  class="btn btn-primary"
  [disabled]="!allowNewServer"
>
  Add Server
</button>
```

`[disabled]="!allowNewServer"` Связывает атрибут `disabled` с переменной компонента `allowNewServer`. Символ `!` Инвертирует булевое значение.

## Связывание свойств и строковая интерполяция

Вывод текста в шаблоне: `{{ variable }}`

Вывод html свойства: `[innerText]="variable"`
