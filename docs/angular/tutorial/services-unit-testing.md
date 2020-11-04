---
description: Начнем с изучения тестирования сервисов Angular, поскольку именно сервисы проще всего покрываются тестами
---

# Тестирование сервисов

Начнем с изучения тестирования сервисов Angular, поскольку именно сервисы проще всего покрываются тестами.

Ключевую роль в тестировании Angular приложений играет утилита [`TestBed`](https://angular.io/api/core/testing/TestBed) из библиотеки `@angular/core/testing`. Она позволяет эмулировать модуль Testing Module, подобный модулю, создаваемого с декоратором [`@NgModule()`](https://angular.io/api/core/NgModule). Тестовый модуль необходим для определения модулей, сервисов, компонентов и т. д., от которых зависим тест.

В `TestBed` имеется метод `configureTestingModule()`, которая принимает объект конфигурации аналогичный тому, что передается `@NgModule()`.

```ts
beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [AppService],
  })
})
```

В коде выше определенный в `providers` тестового модуля сервис `AppService` становится доступным для использования каждому из выполняемых тестов. Получение экземпляра сервиса осуществляется методом `get()` утилиты `TestBed`.

`get()` может предоставить только те сервисы, которые указаны в свойстве `providers` модуля Testing Module.

```ts
describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService],
    })

    appService = TestBed.get(AppService)
  })

  it('getData() should multiply passed number by 2', () => {
    spyOn(appService, 'getData').and.callThrough()

    let a = appService.getData(2)
    let b = appService.getData(3)

    expect(a).toBe(4, 'should be 4')
    expect(b).toBe(6, 'should be 6')

    expect(appService.getData).toHaveBeenCalled()
    expect(appService.getData.calls.count()).toBe(2)
    expect(appService.getData.calls.mostRecent()).toBe(6)
  })
})
```

Разберем пример. Здесь описан один тест, который проверяет корректность работы метода `getData()` сервиса `AppService`. Метод `getData()` принимает число и возвращает его удвоенное значение.

Для сбора информации о вызовах метода `getData()` используется `spyOn()`.

Обычно сервис не ограничивается только собственными методами. В сложном приложении сервисы взаимодействуют между собой, используя функционал друг друга.

В таких случаях общепринято использовать объекты `Spy`, чтобы не создавать ради одного или нескольких методов полноценный экземпляр еще одного сервиса.

```ts
describe('AppService', () => {
  beforeEach(() => {
    const appServiceSpy = jasmine.createSpyObj(
      'AppService',
      {
        getData: [1, 2, 3],
      }
    )

    TestBed.configureTestingModule({
      providers: [
        { provide: AppService, useValue: appServiceSpy },
      ],
    })

    appService = TestBed.get(AppService)
  })

  it('emulate getData usage', () => {
    const data = [1, 2, 3]

    appService.getData.and.returnValue(data)

    expect(appService.getData().length).toBe(
      data.length,
      'length should be 3'
    )
  })
})
```

В примере `createSpyObj()` эмулирует сервис `AppService` с его единственным методом `getData()`.

Если все тесты работают с одним набором данных, которые должен возвращать метод `getData()`, то в `beforeEach()` задать эти данные можно так:

```ts
const appServiceSpy = jasmine.createSpyObj('AppService', {
  getData: [1, 2, 3],
})
```

Инструменты также предусматривают возможность тестирования сервисов Angular, которые обращаются за данными к удаленному серверу. Ключевую роль здесь играют модуль `HttpTestingModule` и контроллер [`HttpTestingController`](https://angular.io/api/common/http/testing/HttpTestingController).

Тестирование HTTP-сервисов не подразумевает обращение к удаленному API. Вместо этого все исходящие запросы перенаправляются в контроллер `HttpTestingController`.

_app.service.ts_

```ts
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`/api/data`)
  }
}
```

_app.service.spec.ts_

```ts
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'

describe('AppService - testing HTTP request method getData()', () => {
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService],
    })

    appService = TestBed.get(AppService)
    httpTestingController = TestBed.get(
      HttpTestingController
    )
  })

  it('can test HttpClient.get', () => {
    const data = [1, 2, 3]

    appService
      .getData()
      .subscribe((response) => expect(response).toBe(data))

    const req = httpTestingController.expectOne('/api/data')

    expect(req.request.method).toBe('GET')

    req.flush(data)
  })

  afterEach(() => httpTestingController.verify())
})
```

Как видно из примера, доступ к объекту запроса осуществляется с использованием метода `expectOne()` экземпляра класса `HttpTestingController`, идентифицирующего запрос в зависимости от переданного ему условия. Метод принимает параметром URL, на который осуществляется запрос, либо сам объект запроса. Например, можно отловить запрос с наличием определенного HTTP-заголовка или с определенным его значением.

Условию должен удовлетворять только один запрос. Если таких запросов будет несколько или они будут отсутствовать вовсе, будет сгенерировано исключение. Для работы с группой запросов необходимо использовать метод `match()`, который возвращает массив HTTP-запросов, попадающих под заданный критерий.

```ts
const req = httpTestingController.match('/api/data')
```

В приведенном коде переменная `req` будет содержать массив всех запросов, сделанных на URL `/api/data`.

Возвращаемые в ответ на запрос данные передаются аргументом методу `flush()`.

В конце каждого такого теста у экземпляра класса `HttpTestingController` нужно вызывать метод `verify()`, который подтверждает, что все запросы в рамках текущего теста были выполнены. Код идеально подходит для размещения в функции `afterEach()`.

Для эмуляции ответа сервера с кодом ошибки, вторым аргументом методу `flush()` передается объект, где указывается статус и текст ошибки.

```ts
it('can test HttpClient.get', () => {
  const message = 'Session expired'

  appService.getData().subscribe(
    (response) => fail('should fail with the 401 error'),
    (err: HttpErrorResponse) => {
      expect(err.status).toBe(401, 'status')
      expect(err.error).toBe(message, 'message')
    }
  )

  const req = httpTestingController.expectOne('/api/data')

  expect(req.request.method).toBe('GET')

  req.flush(message, {
    status: 401,
    statusText: 'Unauthorized',
  })
})
```

Для ошибки сетевого уровня можно использовать метода `error()` объекта запроса. Передаваемый параметр - объект типа `ErrorEvent`.

```ts
const error = new ErrorEvent('Network error', {
  message: 'Something wrong with network',
})

req.error(error)
```

В приведенных примерах `fail()` используется для принудительного завершения выполнения теста с ошибкой в тех местах, где Angular не сможет самостоятельно определить, правильно ли был выполнен сценарий.
