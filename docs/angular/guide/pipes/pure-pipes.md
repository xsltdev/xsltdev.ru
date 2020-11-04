---
description: Pipes бывают двух типов pure (не допускающие изменений) и impure (допускающие изменений). Различие между этими двумя типами заключается в реагировании на изменение значений, которые передаются в pipe
---

# Pure и Impure Pipes

Pipes бывают двух типов: `pure` (не допускающие изменений) и `impure` (допускающие изменений). Различие между этими двумя типами заключается в реагировании на изменение значений, которые передаются в `pipe`.

По умолчанию все `pipes` представляют тип `pure`. Такие объекты отслеживают изменения в значениях примитивных типов (`String`, `Number`, `Boolean`, `Symbol`). В других объектах — типов `Date`, `Array`, `Function`, `Object` изменения отслеживаются, когда меняется ссылка, а не значение по ссылке. То есть, если в массив добавили элемент, массив поменялся, но ссылка переменной, которая представляет данный массив, не изменилась. Поэтому подобное изменение `pure pipes` не будут отслеживать.

`Impure pipes` отслеживают все изменения. Возможно, возникает вопрос, зачем тогда нужны `pure pipes`? Дело в том, что отслеживание изменений сказывается на производительности, и поэтому `pure pipes` могут показывать лучшую производительность. К тому же не всегда необходимо отслеживать изменения в сложных объектах, иногда это совершенно не нужно.

Теперь посмотрим на примере. В прошлой теме был создан класс `FactorialPipe`:

```typescript
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'factorial',
})
export class FactorialPipe implements PipeTransform {
  transform(value: number, args?: any): number {
    if (value <= 0) return 0

    let result = 1
    for (let i = 1; i <= value; i++) {
      result = result * i
    }
    return result
  }
}
```

По умолчанию это `pure pipe`. А это значит, что он может отслеживать изменение значения, которое ему передается, так как оно представляет тип `number`.

В компоненте мы могли бы динамически изменять значение, для которого подсчитывается факториал:

```typescript
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <input [(ngModel)]="fact" name="fact" />
    <div>
      Факториал числа {{ fact }} равен
      {{ fact | factorial }}
    </div>
  `,
})
export class AppComponent {}
```

Здесь никаких проблем с вводом бы не возникло — изменяем число в текстовом поле, и тут же изменяется его факториал:

![Скриншот](pure-pipes-1.png)

Но в прошлой теме был также создан другой `pipe`:

```typescript
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(array: any, start?: any, end?: any): any {
    return array.join(', ')
  }
}
```

Этот `pipe` производит операции над массивом. Соответственно если в компоненте динамически добавлять новые элементы в массив, к которому применяется `JoinPipe`, то мы не увидим изменений. Так как `JoinPipe` не будет отслеживать изменения над массивом.

Теперь сделаем его `impure pipe`. Для этого добавим в декоратор `Pipe` параметр `pure: false`:

```typescript
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'join',
  pure: false,
})
export class JoinPipe implements PipeTransform {
  transform(array: any, start?: any, end?: any): any {
    return array.join(', ')
  }
}
```

По умолчанию параметр `pure` равен `true`.

Теперь мы можем добавлять в компоненте новые элементы в этот массив:

```typescript
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <input #phone name="phone" class="form-control" />
    <button class="btn" (click)="phones.push(phone.value)">
      Add
    </button>
    <p>{{ phones | join }}</p>
  `,
})
export class AppComponent {
  phones = [
    'iPhone 7',
    'LG G 5',
    'Honor 9',
    'Idol S4',
    'Nexus 6P',
  ]
}
```

И ко всем добавленным элементам также будет применяться `JoinPipe`:

![Скриншот](pure-pipes-2.png)

Когда добавляется новый элемент, класс `JoinPipe` заново начинает обрабатывать массив. Поэтому `pipe` применяется ко всем элементам.
