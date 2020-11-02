---
description: Angular имеет свой собственный механизм реализации анимаций, в основе которого лежит стандарт Web Animations API
---

# Анимация. Часть 1

Angular имеет свой собственный механизм реализации анимаций, в основе которого лежит стандарт [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

В случае если стандарт не поддерживается браузером, анимирование будет реализована с использованием CSS фреймов (keyframes).

За Angular анимацию отвечает модуль [`BrowserAnimationsModule`](https://angular.io/api/platform-browser/animations/BrowserAnimationsModule).

Анимации определяются прямо в [`@Component()`](https://angular.io/api/core/Component) и состоят из множества сменяющих друг друга состояний конкретного элемента. Описания состояний объединяются в триггер, который и является полноценной Angular animation. Рассмотрим пример.

_example-panel.component.ts_

```ts
@Component({
  selector: 'example-panel',
  templateUrl: './example-panel.component.html',
  animations: [
    trigger('expandedPanel', [
      state('initial', style({ height: 0 })),
      state('expanded', style({ height: '*' })),
      transition('initial <=> expanded', animate('0.3s')),
    ]),
  ],
})
export class ExamplePanelComponent {
  isExpanded: boolean = false
  state: string = 'initial'

  expand() {
    this.isExpanded = !this.isExpanded
    this.state = this.isExpanded ? 'expanded' : 'initial'
  }
}
```

_example-panel.component.html_

```html
<div class="panel">
  <div class="header">
    <p (click)="expand()">Toggle panel</p>
  </div>

  <div class="content" [@expandedPanel]="state">
    <h1>Title</h1>

    <p>Expanded panel</p>
  </div>
</div>
```

Триггер определяется функцией `trigger()`, принимающей два аргумента - имя анимации и массив с определением состояний и описанием их смены.

Состояние описывается функцией `state()`. В качестве параметров ей передаются название состояния и набор CSS-стилей, задаваемых функцией `style()`.

В представлении активация анимации контролируется специальным атрибутом (имя триггера с префиксом `@`, заключенное в квадратные скобки). В качестве значения атрибуту передается название одного из определенных для анимации состояний. Angular animation срабатывает, если описана пара состояний `"было" => "стало"`

Для указания всех состояний используйте `*`. Например, если анимация должна срабатывать при переходе с `initial` на любое другое состояние, то это указывается так:

```ts
transition('initial => *', animate('0.3s'))
```

Анимирование смены всех состояний:

```ts
transition('* => *', animate('0.3s'))
```

Еще имеется особое состояние `void`. Оно используется для обозначения элементов, которых еще нет в представлении. Частое использование `void` - анимированное появление/исчезновение элемента совместно с `*ngIf`.

```html
<div @animationTriggerName *ngIf="isVisible">
  <h1>Welcome to webdraftt.com!</h1>
</div>
```

```ts
trigger('animationTriggerName', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('1.2s', style({ opacity: 1 })),
  ]),
  transition('* => void', [
    animate('1.2s', style({ opacity: 0 })),
  ]),
])
```

Определение переходов `void => *` и `* => void` имеют краткие альтернативные варианты записи:

```ts
trigger('animationTriggerName', [
  transition(':enter', [
    // code
  ]),
  transition(':leave', [
    // code
  ]),
])
```

Задание стилей для `*` и `void` можно производить прямо в функции `transition()`.

Также `*` может использоваться в функции `style()` для задания значения ширины или высоты, которая неизвестна до момента работы приложения. Это случается, если, например, размеры элемента зависят от размеров родительского элемента.

```ts
state('expanded', style({ height: '*' }))
```

Функция `transition()` является аналогом одноименного CSS-свойства и описывает при смене с какого на какое состояние должна срабатывать анимация. Первый параметр - строка с указанием изменяемых состояний, второй - параметры и (или) стили анимации, указываемые функциями `animate()` или `style()`.

Если Angular анимация должна отрабатывать для двух состояний в обе стороны (например, с `on` на `off` и с `off` на `on`), можно использовать краткую запись:

```ts
transition('initial <=> expanded', animate('0.3s'))
```

Функция `animate()` принимает строку с тремя параметрами:

- длительность анимации;
- время задержки перед стартом анимации;
- easing.

Первые два параметра указываются в миллисекундах.

Для определения Angular animation, которая в процессе смены состояний должна применять промежуточные стили, используется функция `keyframes()`, принимающая массив промежуточных стилей, определенных с помощью `style()`.

```ts
animate(
  '1.25s',
  keyframes([
    style({ fontSize: '12px', offset: 0 }),
    style({ fontSize: '18px', offset: 0.67 }),
    style({ fontSize: '16px', offset: 1 }),
  ])
)
```

Параметр `offset` указывает, в рамках какого интервала анимации применяется промежуточный стиль.

В примере выше анимация длится `1.25 с`, значение `offset` для второго набора стилей - `0.67`. Значит, первый промежуточный стиль будет действовать `837,5 мс` (1250мс \* 0.67). Полная длительность анимации принимается за `1`.

Для полного контроля Angular анимации у триггера предусмотрено два события `start()` и `done()`, которые срабатывают при старте и окончании анимации соответственно.

```html
<div
  [@animateName]="currentState"
  (@animateName.start)="whenAnimate($event)"
  (@animateName.done)="whenAnimate($event)"
>
  <h1>Welcome to webdraftt.com!</h1>
</div>
```

```js
whenAnimate(event){
	console.log(event);
}
```

Функции, определенные для этих событий, в качестве аргумента получают объект типа [`AnimationEvent`](https://angular.io/api/animations/AnimationEvent), который содержит следующие свойства:

- `fromState` - исходное состояние;
- `toState` - состояние, на которое происходит смена;
- `totalTime` - длительность анимации.

## Ссылки

- [Introduction to Angular animations](https://angular.io/guide/animations)
