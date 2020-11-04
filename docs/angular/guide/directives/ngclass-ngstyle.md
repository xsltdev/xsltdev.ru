---
description: Директива ngClass позволяет определить набор классов, которые будут применяться к элементу. Директива ngStyle позволяет задать набор стилей, которые применяются к элементу
---

# ngClass и ngStyle

## ngClass

Директива **`ngClass`** позволяет определить набор классов, которые будут применяться к элементу. Например, определим следующий компонент:

```typescript
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div [ngClass]="{ verdanaFont: true }">
      <h1>Hello Angular 2</h1>
      <p [ngClass]="{ segoePrintFont: true }">
        Angular 5 представляет модульную архитектуру
        приложения
      </p>
    </div>
  `,
  styles: [
    `
      .verdanaFont {
        font-size: 13px;
        font-family: Verdana;
      }
      .segoePrintFont {
        font-size: 14px;
        font-family: 'Segoe Print';
      }
    `,
  ],
})
export class AppComponent {}
```

В секции `styles` у компонента определены два класса, которые устанавливают различные стилевые свойства шрифта: `verdanaFont` и `segoePrintFont`.

В шаблоне для привязки класса к элементу применяется директива `[ngClass]="{verdanaFont:true}"`. Эта директива принимает js-объект, в котором ключи — это названия классов. Этим названиям присваиваются булевые значения `true` (если класс применяется) и `false` (если класс не применяется). То есть в данном случае класс `verdanaFont` будет применяться ко всему блоку `div`.

Однако в блоке `div` есть параграф, и мы, допустим, хотим, чтобы к этому параграфу применялся другой класс. А по умолчанию вложенный параграф унаследует стили от родительского блока `div` и также применяет класс `segoePrintFont`, в котором можно переопределить унаследованные стили.

![Скриншот приложения](ngclass-ngstyle-1.png)

В качестве альтернативы мы можем использовать следующие выражения привязки:

```html
<div [class.verdanaFont]="true">
  <h1>Hello Angular 5</h1>
  <p
    [class.verdanaFont]="false"
    [class.segoePrintFont]="true"
  >
    Angular 7 представляет модульную архитектуру приложения
  </p>
</div>
```

Выражение `[class.verdanaFont]="true"` указывает, что класс `verdanaFont` будет применяться для данного элемента.

## ngStyle

Директива **`ngStyle`** позволяет задать набор стилей, которые применяются к элементу. В качестве значения директива принимает js-объект, в котором ключи — названия свойств CSS:

```typescript
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div
      [ngStyle]="{
        'font-size': '13px',
        'font-family': 'Verdana'
      }"
    >
      <h1>Hello Angular 5</h1>
      <p
        [ngStyle]="{
          'font-size': '14px',
          'font-family': 'Segoe Print'
        }"
      >
        Angular 5 представляет модульную архитектуру
        приложения
      </p>
    </div>
  `,
  styles: [
    `
      .verdanaFont {
        font-size: 13px;
        font-family: Verdana;
      }
      .segoePrintFont {
        font-size: 14px;
        font-family: 'Segoe Print';
      }
    `,
  ],
})
export class AppComponent {}
```

Аналогично для установки стилей можно применять свойства объекта `style`:

```html
<div
  [style.fontSize]="'13px'"
  [style.fontFamily]="'Verdana'"
>
  <h1>Hello Angular 7</h1>
  <p
    [style.fontSize]="'14px'"
    [style.fontFamily]="'Segoe Print'"
  >
    Angular 7 представляет модульную архитектуру приложения
  </p>
</div>
```

## Динамическое изменение стилей

Директивы `ngClass` и `ngStyle` позволяют устанавливать привязку к выражениям, благодаря чему мы можем динамически менять стили или классы. Например:

```typescript
import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <div [ngClass]="{ invisible: visibility }">
      <h1>Hello Angular 5</h1>
      <p>
        Angular 5 представляет модульную архитектуру
        приложения
      </p>
    </div>
    <button (click)="toggle()">Toggle</button>
  `,
  styles: [
    `
      .invisible {
        display: none;
      }
    `,
  ],
})
export class AppComponent {
  visibility: boolean = true
  // переключаем переменную
  toggle() {
    this.visibility = !this.visibility
  }
}
```

Выражение `[ngClass]="{invisible: visibility}"` устанавливает для класса `invisible` привязку к значению переменной `visibility`. По нажатию на кнопку мы можем переключать это свойство, тем самым управляя видимостью блока.

В качестве альтернативы также можно было бы использовать следующее выражение:

```html
<div [class.invisible]="visibility"></div>
```

Либо также можно было бы написать так:

```html
<div
  [style.display]="visibility==true?'block':'none'"
></div>
```
