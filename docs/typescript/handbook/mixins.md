# Примеси (Mixins)

## Введение

Помимо принятой в ООП традиционной иерархии, существует способ создания классов из повторно используемых компонентов путем комбинирования более простых неполных классов.
Возможно, вы знакомы с идеей примесей (англ. mixins) или типажей (англ. traits), используемых в таких языках, как Scala. Этот подход также получил некоторое распространение в сообществе пользователей JavaScript.

## Пример примеси

Ниже приведен код, демонстрирующий использование примесей в TypeScript.
После примера последует его подробное объяснение.

```ts
// Disposable (одноразовый) mixin
class Disposable {
  isDisposed: boolean
  dispose() {
    this.isDisposed = true
  }
}

// Activatable (активируемый) mixin
class Activatable {
  isActive: boolean
  activate() {
    this.isActive = true
  }
  deactivate() {
    this.isActive = false
  }
}

class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(
      () =>
        console.log(
          this.isActive + ' : ' + this.isDisposed
        ),
      500
    )
  }

  interact() {
    this.activate()
  }

  // Disposable
  isDisposed: boolean = false
  dispose: () => void
  // Activatable
  isActive: boolean = false
  activate: () => void
  deactivate: () => void
}
applyMixins(SmartObject, [Disposable, Activatable])

let smartObj = new SmartObject()
setTimeout(() => smartObj.interact(), 1000)

////////////////////////////////////////
// Где-то в вашей динамической библиотеке
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(
      (name) => {
        derivedCtor.prototype[name] =
          baseCtor.prototype[name]
      }
    )
  })
}
```

## Разбор примера

Код начинается с определения двух классов, которые и будут задействованы в качестве примесей.
Каждый из них нацелен на демонстрацию определенной активности или возможности.
Позже мы их смешаем, чтобы сформировать новый объединяющий их свойства класс.

```ts
// Disposable mixin
class Disposable {
  isDisposed: boolean
  dispose() {
    this.isDisposed = true
  }
}

// Activatable mixin
class Activatable {
  isActive: boolean
  activate() {
    this.isActive = true
  }
  deactivate() {
    this.isActive = false
  }
}
```

Далее мы создадим новый класс, который будет объединять обе примеси.
Давайте рассмотрим, как этого добиться:

```ts
class SmartObject implements Disposable, Activatable {
```

Первое, на что вы могли обратить внимание, - вместо `extends` используется `implements`.
Такой подход позволяет рассматривать классы как интерфейсы и использовать только типы Disposable и Activatable, а не их реализации.
Получается, что реализацию мы должны будем создать в новом классе.
Но проблема в том, что именно этого мы бы и хотели избежать при использовании примесей.

Чтобы не делать реализации заново, мы создаем свойства-дублёры (stand-in properties), типы которых будут получены из соответствующих примесей.
Компилятору достаточно, чтобы эти элементы были доступны динамически.
Такой подход позволяет нам пользоваться преимуществами примесей, но при условии дополнительной нагрузки по учёту подобных нюансов.

```ts
// Disposable
isDisposed: boolean = false;
dispose: () => void;
// Activatable
isActive: boolean = false;
activate: () => void;
deactivate: () => void;
```

В итоге мы соединяем наши примеси в классе, создавая полную реализацию.

```ts
applyMixins(SmartObject, [Disposable, Activatable])
```

В завершение напишем вспомогательную функцию, предназначенную для создания примесей.
Она будет пробегать по свойствам примесей и копировать их в целевой элемент, заполняя свойства-дублёры их реализациями.

```ts
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(
      (name) => {
        derivedCtor.prototype[name] =
          baseCtor.prototype[name]
      }
    )
  })
}
```

## Ссылки

- [Примеси (Mixins)](http://typescript-lang.ru/docs/Mixins.html)
