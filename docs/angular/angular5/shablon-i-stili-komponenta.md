---
description: Подключение шаблона и стилей в Angular 5
---

# Шаблон и стили компонента

## Подключение шаблона

Рассмотрим файл `app\servers\servers.component.ts`, сейчас шаблон подключен как внешний файл:

```typescript
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
```

Шаблон не обязательно должен быть внешним файлом:

```typescript
@Component({
  selector: 'app-servers',
  template: '<app-server></app-server><app-server></app-server>'
  styleUrls: ['./servers.component.css']
```

Для многострочного варианта нужно заменить символ кавычек на с _'_ на _'_:

```typescript
@Component({
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
```

## Работа со стилями компонента

> Для работы с html удобно использовать _emmit_.

Внесем изменения в app.component.html:

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h3>I'am in the AppComponent!</h3>
      <hr />
      <app-servers></app-servers>
    </div>
  </div>
</div>
```

В Файлах `*.component.ts` стили подключаются либо как массив внешних файлов:

```typescript
styleUrls: ['./app.component.css']
```

Либо как массив строк:

```typescript
style: [
  `
  h3 {
    color: blue;
  }
`,
]
```
