---
description: Довольно часто при разработке Angular приложения приходится создавать пользовательские директивы (Angular custom directive)
---

# Создание директив

Довольно часто при разработке Angular приложения приходится создавать пользовательские директивы (Angular custom directive).

## Angular директивы атрибуты

Создание самой простой директивы атрибута ограничивается классом, обернутым декоратором [`@Directive()`](https://angular.io/api/core/Directive) с заданием необходимой конфигурации.

_zoom.directive.ts (version 1)_

```ts
@Directive({
  selector: '[zoom]',
})
export class ZoomDirective {}
```

Квадратные скобки являются указателем того, что это именно директива атрибут.

Созданная в примере Angular директива уже может использоваться, но на данный момент она не делает абсолютно ничего.

Для манипуляции элементом используется класс [`ElementRef`](https://angular.io/api/core/ElementRef) из модуля `@angular/core`. Его свойство `nativeElement` предоставляет доступ к элементу по ссылке.

_zoom.directive.ts (version 2)_

```ts
@Directive({
  selector: '[zoom]',
})
export class ZoomDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.fontSize = '20px'
  }
}
```

Angular директива из примера предназначена в основном для тега `<p>`, исходя из условия, что размер шрифта по умолчанию равен `14px`, она увеличивает это значение до `20px`.

```html
<p>This text is normal.</p>
<p zoom>This text is larger.</p>
```

Сейчас `zoom` меняет только стилизацию элемента. Для того чтобы изменить поведение по умолчанию, используется декоратор [`@HostListener()`](https://angular.io/api/core/HostListener). Теперь сделаем так, чтобы размер шрифта увеличивался только при наведении на элемент DOM-дерева курсора мыши. Иначе говоря, изменим стандартное поведение при возникновении пользовательского события.

`@HostListener()` также входит в состав `@angular/core`.

_zoom.directive.ts (version 3)_

```ts
@Directive({
  selector: '[zoom]',
})
export class ZoomDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontSize(20)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontSize(14)
  }

  setFontSize(size: number | string): void {
    this.el.nativeElement.style.fontSize = `${size}px`
  }
}
```

`@HostListener()` привязывает обработчики к событиям, возникающим по отношению к элементу с Angular директивой.

Но что, если поведение элемента, задаваемое ему директивой, зависит от значения внешнего фактора? Рассмотрим передачу внешних значений.

Делается это с использованием входных свойств.

_zoom.directive.ts (version 4)_

```ts
@Directive({
  selector: '[zoom]',
})
export class ZoomDirective {
  @Input('zoomSize') size

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseIn() {
    this.setFontSize(this.size)
  }

  @HostListener('mouseleave') onMouseOut() {
    this.setFontSize(14)
  }

  setFontSize(value: number | string): void {
    this.el.nativeElement.style.fontSize = `${value}px`
  }
}
```

Пример использования.

```html
<p zoom [zoomSize]="20">Hover text to make it larger.</p>
```

Здесь размер шрифта, который будет установлен при наведении курсора мыши, задается через входное свойство `zoomSize`.

Чтобы не вводить лишнее свойство, можно сделать саму директиву `zoom` входным параметром.

```ts
//
export class ZoomDirective {
  @Input('zoom') size
  //
}
```

```html
<p [zoom]="20">Hover text to make it larger.</p>
```

## Структурные Angular директивы

Основное отличие структурных директив - они видоизменяют DOM-структуру страницы.

Отличительная их особенность - наличие перед ними символа `*`.

Префикс `*` лишь облегчает применение структурных директив, транслируя атрибут в `<ng-template></ng-template>`, служащий оберткой для элемента, к которому изначально была применена директива.

Например, запись

```html
<p *ngIf="true">Some text</p>
```

транслируется в

```html
<ng-template [ngIf]="true">
  <p>Some text</p>
</ng-template>
```

Создадим Angular директиву `*duplicateContent` для создания копии элемента в зависимости от истинности переданного выражения.

_duplicate-content.directive.ts_

```ts
@Directive({
  selector: '[duplicateContent]',
})
export class DuplicateContentDirective {
  @Input() set duplicateContent(condition: boolean) {
    if (condition && !this.contentWasDuplicated) {
      this.vc.insert(this.tpl)
      this.contentWasDuplicated = true
    }
  }

  private contentWasDuplicated: boolean = false

  constructor(
    private tpl: TemplateRef<any>,
    private vc: ViewContainerRef
  ) {}
}
```

Пример использования.

```html
<div *duplicateContent="true">Content for duplication</div>
```

Создается структурная директива с применением декоратора `@Directive()`. Он принимает объект, в свойстве `selector` которого указывается наименование директивы в квадратных скобках.

Представление элемента, включая его самого, хранится в переменной `templateRef`, являющейся экземпляром класса [`TemplateRef`](https://angular.io/api/core/TemplateRef). Контейнер представлений (элемент `<ng-template/>`) представлен переменной `viewContainer`. Подробно о [представлениях](angular-view.md).

Имея доступ к этим свойствам можно легко манипулировать DOM-элементом.

Обратите внимание, что приватное свойство `contentWasDuplicated` ограничивает создание более, чем одной копии содержимого.
