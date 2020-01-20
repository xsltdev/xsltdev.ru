---
description: Жизненный цикл приложения и события в Angular5.
---

# События и жизненный цикл

В ходе выполнения приложения происходят различные изменения и процессы, которые составляют _жизненный цикл приложения_. _Angular_ позволяет запускать определенный код, когда наступает какое-либо событие.

Часто используемые события:

- `ngOnChanges`
- `ngOnInitngDoCheck`
- `ngAfterContentInit`
- `ngAfterContentChecked`
- `ngAfterViewInit`
- `ngAfterViewChecked`
- `ngOnDestroy`

Хорошей практикой является применение _интерфейсов_ используемых _событий_:

```typescript
import {
  Component,
  OnInit,
  OnChanges,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core'

export class CockpitComponent implements OnInit, ngOnChanges {
  //...
}
```

`ngOnChanges` принимает _аргумент_, импортируйте `SimpleChanges` из `@angular/core` и укажите _тип объекта_ в _методе_

```typescript
ngOnChanges(changes: SimpleChanges) {
  console.log(changes);
}
```
