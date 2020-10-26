---
description: Объекты Spy фреймворка Jasmine занимают важное место в тестировании Angular приложений. Они позволяют эмулировать вызовы функций и использование объектов без вызова оригинальной функции и без создания экземпляра класса объекта
---

# Объекты Spy

Объекты `Spy` фреймворка Jasmine занимают важное место в тестировании Angular приложений. Они позволяют эмулировать вызовы функций и использование объектов без вызова оригинальной функции и без создания экземпляра класса объекта.

Объекты класса `Spy` не создаются напрямую. Для этого имеются функции:

- `spyOn()` - отслеживает состояния и использование методов объекта;
- `spyOnProperty()` - используется для отслеживания состояния и использования свойств объекта;
- `jasmine.createSpy` - создает функцию, у которой нет определения;
- `jasmine.createSpyObj` - создает объект-заглушку.

Функция Jasmine `spyOn()` используется для реально существующих методов класса. Принимает два параметра - экземпляр класса и имя отслеживаемого метода.

```ts
const appService = new AppService()
const appServiceSpy = spyOn(appService, 'getData')
```

Теперь можно управлять методом `getData()` и отслеживать все его действия с помощью методов класса `Spy`.

```ts
appServiceSpy.getData.and.returnValue(8)
expect(appServiceSpy.getData()).toBe(8)
expect(appServiceSpy.getData).toHaveBeenCalled()
expect(appServiceSpy.getData.calls.count()).toBe(1)
expect(
  appServiceSpy.getData.calls.mostRecent().returnValue
).toBe(8)
```

Метод `returnValue()` принимает значение, которое будет возвращено методом при следующем его вызове. При этом оригинальный метод не будет вызван.

Для проверки осуществления вызова метода в jasmine имеется функция `toHaveBeenCalled()`. Более точная информация о вызовах метода содержится в свойстве `calls` самого объекта `Spy`. Например, можно точно узнать, сколько раз вызывали метод с помощью функции `count()` или узнать все о его последнем вызове используя `mostRecent()`.

Для сброса статистики вызовов и использования метода используйте `reset()` объекта `calls`.

```ts
appServiceSpy.getData.calls.reset()
```

Теперь рассмотрим пример с вызовом оригинальной функции.

```ts
appServiceSpy.getData(3).and.callThrough()
expect(appServiceSpy.getData).toHaveBeenCalledWith(3)
```

Функция `callThrough()` вызывает метод класса напрямую. Проверить переданные аргументы можно используя функцию `toHaveBeenCalledWith()`.

Для вызова при обращении к методу функции, отличной от оригинального определения, используется метод `callFake()`.

```ts
appServiceSpy.getData.and.callFake((number) => 3 * number)
appServiceSpy.getData(3)
expect(
  appServiceSpy.getData.calls.mostRecent().returnValue
).toBe(9)
```

Пример проверки на генерацию исключения.

```ts
appServiceSpy
  .getData('two')
  .and.throwError('Argument must be a number')
expect(appServiceSpy.getData).toThrow()
```

Для сброса всех установленных ранее значений с помощью функций `returnValue()`, `callThrough()`, `callFake()`, `throwError()` и т. д. имеется функция `stub()`.

```ts
appServiceSpy.getData.and.stub()
```

`spyOnProperty()` схож с функцией `spyOn()`, только используется для отслеживания использования свойств объекта и принимает три параметра:

- объект класса;
- имя свойства объекта;
- модификатор доступа - может быть 'get' или 'set' (по умолчанию 'get').

Практическое применение идентично `spyOn()`.

```ts
const modelAutoSpy = spyOnProperty(auto, 'model')

modelAutoSpy.model.and.returnValue('Mercedes')
expect(modelAutoSpy.model).toBe('Mercedes')
expect(modelAutoSpy.model).toHaveBeenCalled()
expect(modelAutoSpy.model.calls.count()).toBe(1)

modelAutoSpy.model.and.callThrough()
expect(modelAutoSpy.model).toBe('BMW')
```

В отличие от `spyOn()` `jasmine.createSpy` предназначен для неопределенных функций. Другими словами, функция создает объект `Spy`, позволяющий отслеживать обращения к методу, который на самом деле не существует.

`jasmine.createSpy()` принимает единственный аргумент - имя несуществующей функции.

```ts
const getValueSpy = jasmine.createSpy('getValue')

getValueSpy.getValue.and.returnValue(2)
expect(getValueSpy.getValue).toBe(2)
expect(getValueSpy.getValue).toHaveBeenCalled()
```

`jasmine.createSpyObj()` позволяет создать новый объект класса с набором уже отслеживаемых методов.

Первый параметр - имя класса, второй - массив методов, либо же объект, ключи которого это имена методов, а их значения - возвращаемые по умолчанию соответствующими методами данные.

Пример создания объекта `Spy` с помощью `jasmine.createSpyObj`:

```ts
const exampleSpy = jasmine.createSpyObj('ExampleClass', [
  'getData',
  'getValue',
])
```

или

```ts
const exampleSpy = jasmine.createSpyObj('ExampleClass', {
  getData: 'Hello',
  getValue: 1,
})
```

Теперь можно отслеживать сразу метод `getData()` и метод `getValue()`. Предположим, что `exampleSpy` создавался первым способом.

```ts
exampleSpy.getValue.and.returnValue(7)
expect(exampleSpy.getValue).toBe(7)
expect(exampleSpy.getValue).toHaveBeenCalled()

exampleSpy.getData.and.returnValue('Bye')
expect(exampleSpy.getData).toBe('Bye')
expect(exampleSpy.getData).toHaveBeenCalled()
```

Если же `exampleSpy` был определен со значениями методов по умолчанию, то можно сразу проверить возвращаемое значение.

```ts
expect(exampleSpy.getValue).toBe(1)
expect(exampleSpy.getValue).toHaveBeenCalled()

expect(exampleSpy.getData).toBe('Hello')
expect(exampleSpy.getData).toHaveBeenCalled()
```
