---
description: Создание директивы атрибута и использование класса Renderer2 в Angular5.
---

# Директива атрибута

## Создание директивы атрибута

_Директива_ это класс с декоратором `@Directive`. В _Angular5_ есть несколько видов директив. Директивы атрибута позволяют изменять внешний вид и поведение элементов, компонентов или других директив. Рассмотрим директиву атрибута подробнее.

Создадим файл `\app\basic-highlight\basic-highlight.directive.ts`:

```typescript
import {
  Directive,
  ElementRef,
  OnInit,
} from '@angular/core'

@Directive({
  selector: '[appBasicHighLight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor =
      'green'
  }
}
```

Директиву нужно подключить в файле `\app\app.module.ts`:

```typescript
//...
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

@NgModule({
  declarations: [
    //...
    BasicHighlightDirective
  ],
  //...
})
```

Теперь директиву атрибута можно использовать в шаблонах:

```html
<p appBasicHighLight>basic highlight style</p>
```

## Создание из командной строки

Процесс создания файлов директив можно автоматизировать с помощью команды `ng generate directive #name#`. Или сокращенного варианта `ng g d #name#`

## Renderer2

Использование класса `Renderer2` для манипуляций с _DOM_:

```typescript
import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
} from '@angular/core'

@Directive({
  selector: '[appBetterHilight]',
})
export class BetterHilightDirective implements OnInit {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'color',
      'red'
    )
  }
}
```

## Ссылки

- [Подробнее о классе Renderer2](https://angular.io/api/core/Renderer2).
