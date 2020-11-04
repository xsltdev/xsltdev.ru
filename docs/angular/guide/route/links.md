---
description: Для удобного перехода между различными частями приложения, как правило, применяется система навигации, состоящая из ссылок
---

# Создание ссылок

Для удобного перехода между различными частями приложения, как правило, применяется система навигации, состоящая из ссылок. К примеру, возьмем проект из прошлой темы и добавим в него навигацию. В этом проекте есть два компонента `HomeComponent` и `AboutComponent`, которые обрабатывают различные запросы и результат обработки которых вставляется в шаблон главного компонента — класса `AppComponent`.

Поэтому определим в `AppComponent` набор ссылок для навигации:

```typescript
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <nav>
        <a routerLink="">Главная</a>
        <a routerLink="/about">О сайте</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
```

Для определения адресов ссылок применяется директива `routerLink`.

В прошлой теме в модуле `AppModule` было определено три маршрута:

```typescript
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
]
```

В соответствии с первым маршрутом `HomeComponent` обрабатывает запросы url без сегментов, поэтому для создания ссылки на этот компонент указывается пустая строка: `<a routerLink="">`.

`AboutComponent` обрабатывает запросы, которые содержат в адресе `about`, поэтому ссылка имеет соответствующий адрес: `<a routerLink="/about">`. В данном случае стоит отметить слеш, с которого начинается адрес. Если мы определяем набор ссылок в главном компоненте (как здесь), то слеш в принципе можно не использовать. Если же ссылки определяются в дочерних компонентах, например, в `AboutComponent`, то без слеша мы можем получить некорректный путь. Слеш позволяет задать путь относительно корня приложения.

![Скриншот](links-1.png)

## Стилизация активных ссылок

Для стилизации активных ссылок применяется специальная директива `routerLinkActive`, которая указывает на класс css, применяемый к активной ссылке. Так, изменим класс компонента:

```typescript
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  styles: [
    `
      .active {
        color: red;
      }
    `,
  ],
  template: `
    <div>
      <nav>
        <a routerLink="" routerLinkActive="active"
          >Главная</a
        >
        <a routerLink="/about" routerLinkActive="active"
          >О сайте</a
        >
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
```

![Скриншот](links-2.png)

В то же время при стилизации следует учитывать следующий момент: если мы нажмем на ссылку "О сайте", то будут стилизованы обе ссылки:

![Скриншот](links-3.png)

Все дело в том, что путь, представляющий первую ссылку `routerLink=""`, совпадает с url второй ссылки `routerLink="/about"`, так как первый путь можно свести к любому другому пути.

В этом случае нам надо применить дополнительные настройки с помощью директивы `routerLinkActiveOptions`:

```html
<nav>
  <a
    routerLink=""
    routerLinkActive="active"
    [routerLinkActiveOptions]="{exact:true}"
    >Главная</a
  >
  <a routerLink="/about" routerLinkActive="active"
    >О сайте</a
  >
</nav>
```

Значение `{exact:true}` указывает на то, что для установки активной ссылки будет применяться полное соответствие:

![Скриншот](links-4.png)

Но элементы навигации необязательно представляют голые ссылки. Нередко они заключаются в списки, в какие-то блоки. И, возможно, мы захотим стилизовать не просто активную ссылку, а весь элемент, в котором данная ссылка расположена. В этом случае можно применить директиву `routerLinkActive` к элементу-контейнеру ссылки:

```typescript
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  styles: [
    `
      .nav {
        clear: both;
      }
      a {
        float: left;
      }
      .active a {
        color: red;
      }
    `,
  ],
  template: `
    <div>
      <ul class="nav">
        <li
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a routerLink="">Главная</a>
        </li>
        <li routerLinkActive="active">
          <a routerLink="/about">О сайте</a>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
```
