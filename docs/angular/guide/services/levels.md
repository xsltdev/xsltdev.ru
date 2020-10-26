---
description: В зависимости от того, где внедряются сервисы, бывают различные уровни провайдеров сервисов
---

# Иерархия сервисов

Как было показано в предыдущих статьях, мы можем внедрять сервисы в компонентах и модулях. В зависимости от того, где внедряются сервисы, бывают различные уровни провайдеров сервисов. Уровень по сути определяет область действия и жизненный цикл сервиса. Есть три уровня провайдеров сервисов:

- Глобальный или корневой уровень
- Уровень модуля
- Уровень компонента

Для установки соответствующего уровня сервиса есть два способа: добавление сервиса в коллекцию `providers` в модуле или компоненте и установка уровня с помощью параметра `providedIn` в декораторе `@Injectable`.

С одной стороны, может показаться, что нет смысла в таком разделение - почему бы для всех сервисов не сделать один корневой уровень, чтобы один объект сервиса был доступен для всего приложения по типу синглтона. Однако нередко возникает нобходимость разграничить функционал между отдельными функциональными частями приложения. Например, когда два компонента работают с разным набором данных - в этом случае они могут использовать один класс сервиса, но разные его объекты.

## Корневой уровень

**Корневой уровень** (root level) предусматривает действие сервиса для всего приложения. Создается и используется один объект сервиса для всех частей приложения.

Подобный уровень устанавливается, если сервис добавляется в коллекцию `providers` главного модуля, который обычно называется `AppModule` и с запуска которого начинается работа приложения. Например:

```ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { DataService } from './data.service'
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  providers: [DataService], // регистрация сервисов
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Если в данном случае `AppModule` является главным модулем, то для сервиса `DataService` определен корневой уровень. То есть во время работы приложения будет создаваться один объект данного сервиса для всего приложения.

Значение `root` для параметра `providedIn` в декораторе `Injectable` также позволяет установить корневой уровень действия:

```ts
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class DataService {
  private data: string[] = [
    'Apple iPhone XR',
    'Samsung Galaxy S9',
    'Nokia 9',
  ]
  constructor() {}

  getData(): string[] {
    return this.data
  }
  addData(name: string) {
    this.data.push(name)
  }
}
```

В этом случае мы можем не добавлять данный сервис в коллекцию `providers` у главного модуля.

## Уровень модуля

**Сервисы уровня модуля** действуют только для текущего модуля и всех его классов - компонентов, директив, сервисов. Это все те сервисы, которые добавляются в коллекцию `providers` во всех других модулях, кроме главного модуля. Например:

```ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { DataComponent } from './data.component'
import { DataService } from './data.service'
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [DataComponent],
  exports: [DataComponent],
  providers: [DataService], // регистрация сервисов
})
export class DataModule {}
```

Либо мы можем задать уровень модуля непосредствнно в сервисе:

```ts
import { Injectable } from '@angular/core'
import { DataModule } from './data.module'

@Injectable({ providedIn: DataModule }) // теперь сервис доступен в модуле DataModule
export class DataService {
  private data: string[] = [
    'Apple iPhone XR',
    'Samsung Galaxy S9',
    'Nokia 9',
  ]
  constructor() {}

  getData(): string[] {
    return this.data
  }
  addData(name: string) {
    this.data.push(name)
  }
}
```

## Уровень компонента

В этом случае действие сервиса ограничено текущим компонентом. Для каждого объекта компонента создается свой объект сервиса. Сам сервис добавляется также в коллекцию `providers` компонента:

```ts
import { Component } from '@angular/core'
import { DataService } from './data.service'

@Component({
  selector: 'data-comp',
  template: `
    <div>
      <div>
        <input [(ngModel)]="name" placeholder="Модель" />
        <button (click)="addItem(name, price)">
          Добавить
        </button>
      </div>
      <table>
        <tr *ngFor="let item of items">
          <td>{{ item }}</td>
        </tr>
      </table>
    </div>
  `,
  providers: [DataService], // добавление модуля DataService
})
export class DataComponent {
  items: string[] = []
  constructor(private dataService: DataService) {}

  addItem(name: string) {
    this.dataService.addData(name)
  }
  ngOnInit() {
    this.items = this.dataService.getData()
  }
}
```
