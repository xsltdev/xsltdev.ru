---
description: Кроме простой установки значений атрибутивная директива может взаимодействовать с пользователем. Для этого применяется декоратор @HostListener
---

# Взаимодействие с пользователем, @HostListener и @HostBinding

Кроме простой установки значений атрибутивная директива может взаимодействовать с пользователем. Для этого применяется декоратор `@HostListener`.

Возьмем директиву `BoldDirective` и добавим в нее взаимодействие с пользователем:

```typescript
import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core'

@Directive({
  selector: '[bold]',
})
export class BoldDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'cursor',
      'pointer'
    )
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontWeight('bold')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('normal')
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'font-weight',
      val
    )
  }
}
```

Декоратор `@HostListener` позволяет связать события DOM и методы директивы. В частности, в декоратор передается название события, по которому будет вызываться метод. В данном случае мы привязываем события `mouseenter` (наведения указателя мыши на элемент) и `mouseleave` (уведение указателя мыши с элемента) к методу `setFontWeight()`, который устанавливает стилевое свойство `font-weight` у элемента. Если мы наводим на элемент, то устанавливается выделение жирным. При отводе мыши выделение сбрасывается.

Кроме кода директивы менять больше ничего не надо, код компонента и модуля остаются теми же.

## @HostBinding

Еще один декоратор — `@HostBinding` позволяет связать обычное свойство класса со свойством элемента, к которому применяется директива. Например, изменим код директивы следующим образом:

```typescript
import {
  Directive,
  HostListener,
  HostBinding,
} from '@angular/core'

@Directive({
  selector: '[bold]',
})
export class BoldDirective {
  private fontWeight = 'normal'

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer'
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontWeight = 'bold'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontWeight = 'normal'
  }
}
```

Инструкция `@HostBinding("style.fontWeight") get getFontWeight()` связывает со свойством `style.fontWeight` значение, которое возвращается этим геттером `getFontWeight`. А он возвращает значение свойства `fontWeight`, которое также меняется при наведении указателя мыши.

## Свойство host

Вместо применения декораторов `@HostListener` и `@HostBinding` для реагирования директивы на действия пользователя мы можем определить обработчики событий в декораторе `@Directive` с помощью его свойства `host`. Перепишем директиву:

```typescript
import {
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core'

@Directive({
  selector: '[bold]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class BoldDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'cursor',
      'pointer'
    )
  }

  onMouseEnter() {
    this.setFontWeight('bold')
  }
  onMouseLeave() {
    this.setFontWeight('normal')
  }
  private setFontWeight(val: string) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'font-weight',
      val
    )
  }
}
```

Результат работы директивы в данном случае будет аналогичен, только теперь все события и связанные с ними обработчики определяются с помощью параметра `host`:

```typescript
host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
}
```
