---
description: Сервис может быть опциональным, необязательным
---

# Опциональные сервисы

Сервис может быть опциональным, необязательным. Например, в прошлой теме был создан сервис `LogService`:

```ts
export class LogService {
  write(logMessage: string) {
    console.log(logMessage)
  }
}
```

И был другой сервис `DataService`, который использовал `LogService`:

```ts
import { Injectable } from '@angular/core'
import { LogService } from './log.service'

@Injectable()
export class DataService {
  private data: string[] = [
    'Apple iPhone XR',
    'Samsung Galaxy S9',
    'Nokia 9',
  ]
  constructor(private logService: LogService) {}

  getData(): string[] {
    this.logService.write('операция получения данных')
    return this.data
  }
  addData(name: string) {
    this.data.push(name)
    this.logService.write('операция добавления данных')
  }
}
```

Допустим, по какой-то причине сервис `LogService` не доступен для инжектирования, например, мы не добавили в провайдеры компонента `AppComponent`:

```ts
import { Component } from '@angular/core'
import { DataService } from './data.service'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <div>
        <input [(ngModel)]="name" placeholder="Модель" />
        <button (click)="addItem(name)">Добавить</button>
      </div>
      <table>
        <tr *ngFor="let item of items">
          <td>{{ item }}</td>
        </tr>
      </table>
    </div>
  `,
  providers: [DataService], // Добавлен только сервис DataService
})
export class AppComponent {
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

Если мы запустим приложение, то в этом случае мы получим ошибку. Так как для сервиса `LogService` не определен провайдер. В этом случае мы можем определить сервис `LogService` как опциональный, применяя декоратор `Optional`. Для этого изменим код `DataService`:

```ts
import { Injectable, Optional } from '@angular/core'
import { LogService } from './log.service'

@Injectable()
export class DataService {
  private data: string[] = [
    'Apple iPhone XR',
    'Samsung Galaxy S9',
    'Nokia 9',
  ]
  constructor(@Optional() private logService: LogService) {}

  getData(): string[] {
    if (this.logService)
      this.logService.write('операция получения данных')
    return this.data
  }
  addData(name: string) {
    this.data.push(name)
    if (this.logService)
      this.logService.write('операция добавления данных')
  }
}
```

Итак, в конструкторе класса мы получаем сервис как опциональный:

```ts
constructor(@Optional() private logService: LogService){}
```

Далее при обращении к сервису мы можем проверить, установлен ли он, и если он установлен, использовать его:

```ts
if (this.logService)
  this.logService.write('операция получения данных')
```
