---
description: Использование языка программирования TypeScript представляет наиболее распространенный подход для создания приложений на Angular
---

# Первое приложение на JavaScript

В предыдущей теме было создано первое приложение на Angular с применением TypeScript. Использование языка программирования TypeScript представляет наиболее распространенный подход для создания приложений на Angular. Однако это не единственный подход. Теоретически мы можем использовать также Dart, ES2015 и ES5(стандартный JavaScript). И в этой статье рассмотрим создание первого приложения с помощью кода javascript, который поддерживается всеми браузерами.

Создадим каталог приложения, а в нем определим каталог `app`.

В этот каталог `app` добавим новый файл `app.component.js` со следующим кодом:

```javascript
function Item(purchase, price, done) {
  this.purchase = purchase
  this.price = price
  this.done = done
}

var AppComponent = ng.core
  .Component({
    selector: 'my-app',
    template: `<div class="page-header">
        <h1> Список покупок </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>`,
  })
  .Class({
    constructor: function () {
      this.items = [
        new Item('Хлеб', 15.9),
        new Item('Масло', 60),
        new Item('Картофель', 22.6, true),
        new Item('Сыр', 310),
      ]
    },
  })

AppComponent.prototype.addItem = function (text, price) {
  if (
    text == undefined ||
    text.trim() == '' ||
    price == undefined
  )
    return
  this.items.push(new Item(text, price))
}
```

Здесь определен главный компонент приложения — `AppComponent`. Для его создания применяется функция `ng.core.Component()` из библиотеки `@angular/core`.

Весь код почти аналогичен коду компонента на TypeScript из прошлой темы.

Также добавим в папку `app` новый файл `app.module.js`:

```javascript
var AppModule = ng.core
  .NgModule({
    imports: [
      ng.platformBrowser.BrowserModule,
      ng.forms.FormsModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
  })
  .Class({
    constructor: function () {},
  })
```

Модуль создается с помощью функции `ng.core.NgModule()`, которая определена в библиотеке `@angular/core`.

Свойство `imports` у модуля указывает на модули, которые будут использоваться. Свойство `declarations` хранит набор используемых компонентов, а свойство `bootstrap` определяет загружаемый компонент — `AppComponent`.

И далее создадим в папке `app` новый файл `main.js`:

```javascript
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule)
```

Этот файл будет загружать основной модуль приложения.

И определим в корневой папке проекта веб-страницу приложения `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Приложение покупок</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"
    />
    <script src="https://unpkg.com/core-js/client/shim.min.js"></script>
    <script src="https://unpkg.com/zone.js/dist/zone.min.js"></script>
    <script src="https://unpkg.com/rxjs/bundles/Rx.min.js"></script>

    <script src="https://unpkg.com/@angular/core@2.0.0/bundles/core.umd.js"></script>
    <script src="https://unpkg.com/@angular/common@2.0.0/bundles/common.umd.js"></script>
    <script src="https://unpkg.com/@angular/compiler@2.0.0/bundles/compiler.umd.js"></script>
    <script src="https://unpkg.com/@angular/forms@2.0.0/bundles/forms.umd.js"></script>
    <script src="https://unpkg.com/@angular/platform-browser@2.0.0/bundles/platform-browser.umd.js"></script>
    <script src="https://unpkg.com/@angular/platform-browser-dynamic@2.0.0/bundles/platform-browser-dynamic.umd.js"></script>
  </head>
  <body>
    <my-app>Загрузка...</my-app>
    <script src="app/app.component.js"></script>
    <script src="app/app.module.js"></script>
    <script src="app/main.js"></script>
  </body>
</html>
```

Для подключения внешних файлов здесь применяется CDN unpkg.com.

Первая группа файлов аналогична тем, что подключались в прошлой теме в приложении на TypeScript:

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"
/>
<script src="https://unpkg.com/core-js/client/shim.min.js"></script>
<script src="https://unpkg.com/zone.js/dist/zone.min.js"></script>
<script src="https://unpkg.com/rxjs/bundles/Rx.min.js"></script>
```

Но кроме этих файлов также необходимо подключить все используемые модули. Можно заметить, что в коде используются функции, которые начинаются с `ng.\*`, например, `ng.core.Component`, `ng.forms.FormsModule` и другие. Это тот функционал, который предоставляется непосредственно библиотеками Angular, и эти библиотеки надо подключить:

```html
<script src="https://unpkg.com/@angular/core@2.0.0/bundles/core.umd.js"></script>
<script src="https://unpkg.com/@angular/common@2.0.0/bundles/common.umd.js"></script>
<script src="https://unpkg.com/@angular/compiler@2.0.0/bundles/compiler.umd.js"></script>
<script src="https://unpkg.com/@angular/forms@2.0.0/bundles/forms.umd.js"></script>
<script src="https://unpkg.com/@angular/platform-browser@2.0.0/bundles/platform-browser.umd.js"></script>
<script src="https://unpkg.com/@angular/platform-browser-dynamic@2.0.0/bundles/platform-browser-dynamic.umd.js"></script>
```

В итоге у нас получится следующая структура проекта:

```
app
  app.component.js
  app.module.js
  main.js
index.html
```

Теперь запустим проект. Для этого достаточно перенести файл веб-страницы в браузер:

![Скриншот приложения](first-app-2.png)
