---
description: Использование тега ng-content и размещения верстки из шаблона в теге вызова компонента в Angular5.
---

# ng-content

_Angular_ позволяет разместить верстку в теге подключения компонента.

В теге компонента разместим часть кода, который хотим передать в шаблон:

```html
<app-server-element
  *ngFor="let serverElement of serverElements"
  [srvElement]="serverElement"
>
  <p>
    <strong *ngIf="serverElement.type === 'server'" style="color: red"
      >{{ serverElement.content }}</strong
    >
    <em *ngIf="serverElement.type === 'blueprint'"
      >{{ serverElement.content }}</em
    >
  </p>
</app-server-element>
```

В шаблоне компонента `app-server-element`, подсвеченный контент будет выведен в теге `ng-content`:

```html
<h1>Server element</h1>
<ng-content></ng-content>
```
