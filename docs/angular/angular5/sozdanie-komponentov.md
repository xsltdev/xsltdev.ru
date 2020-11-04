---
description: Angular компоненты, их архитектура и как создать собственный компонент.
---

# Создание компонентов

> Компоненты ключевая особенность Angular. Приложение строится из компонентов.

## Создание компонента

В директории `app` создать папку нового компонента и файл (должен содержать `.component` в имени), например:
`app/server/server.component.ts`

Файл должен наследовать класс `ServerComponent` и содержать _декоратор_:

```js
import { Component } from '@angular/core'
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {}
```

`@Component()` — это декоратор компонента. Он отмечает, что класс является компонентом _angular_ и содержит мета настройки.
В файл `app.modules.ts` нужно указать новый класс:

```js
import { ServerComponent } from './server/server.component'; // <- импортируем новый класс
//...
@NgModule({
declarations: [
  AppComponent,
  ServerComponent  // <- добавили в declarations
],
```

`@NgModule()` — это декоратор модуля. Он может содержать следующие ключи:

- _declarations_ — компоненты приложения. Сообщает Ангулару какие компоненты принадлежат данному модулю.
- _imports_ — импортируемые модули. Здесь содержатся модули без которых данный модуль не может работать.
- _providers_ — сервис провайдеры. Список сервисов, которые будут доступны во всем приложении.
- _bootstrap_ — корневой компонент, который Ангулар создает и вставляет в `index.html` главной страницы

Модули используются для организации приложения и расширения возможностей из подключаемых библиотек.

## Шаблон

Создадим шаблон компонента `app/server/server.component.html`

Создадим демо данные в шаблоне:

```html
<h3>I'am server component</h3>
```

Теперь можно подключить компонент в шаблоне приложения, в файле `app.component.html`:

```html
<app-server></app-server>
```

## Создание компонента в CLI и вложенные Компоненты

Синтаксис:

`ng generate component #name#`

или сокращенный вариант:
`ng g c #name#`

опции (не создавать файл тестов):
`ng g c recipes --spec false`

создать компонент в определенной папке:
`ng g c recipes/recipe-list`

## Пример использования

Запустим команды:
`ng g c servers`
`ng g c server`

После выполнения данной команды сгенерируется компонент servers и server.

Теперь в шаблоне приложения app.component.html подключим компонент servers:

```js
<h3>I'am in the AppComponent!</h3>
<hr>
<app-servers></app-servers>
```

А в шаблоне компонента servers `app\servers\servers.component.html` подключим 2 компонента `server`:

```html
<app-server></app-server> <app-server></app-server>
```

Компоненты могут быть вложены друг в друга. Это помогает создать удобную структуру проекта:

![помогает создать удобную структуру проекта](accb37eb3210f43f62b6850c64cea269.jpg)
