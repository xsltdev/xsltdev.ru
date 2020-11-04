---
description: Angular HTTP Interceptor позволяет перехватывать HTTP-запросы перед их отправкой и вносить в них необходимые изменения
---

# Http Interceptor

Angular **HTTP Interceptor** позволяет перехватывать HTTP-запросы перед их отправкой и вносить в них необходимые изменения. То же самое справедливо и для ответов сервера.

Наиболее частое их применение — отправка авторизационных данных, логирование и обработка серверных ошибок.

Начнем сразу с примера и детально его рассмотрим.

```ts
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Session', '123456789'),
    })

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse)
            console.log('Server response')
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401)
              console.log('Unauthorized')
          }
        }
      )
    )
  }
}
```

Создание сервиса начинается с внедрения интерфейса Angular [`HttpIntrceptor`](https://angular.io/api/common/http/HttpInterceptor) из `@angular/common/http` и реализации его метода `intercept()`.

`intercept()` модифицирует исходный запрос и возвращает объект `Observable` события [`HttpEvent<any>`](https://angular.io/api/common/http/HttpEvent), который в свою очередь возвращает метод `next()` объекта типа [`HttpRequest`](https://angular.io/api/common/http/HttpRequest).

В качестве аргумента `next()` принимает модифицированный объект запроса.

Для манипуляций с объектом запроса используется метод `clone()`, вызываемый у экземпляра класса `HttpRequest`. Он позволяет изменять свойства объекта, пока создает его копию, и возвращает его модифицированный экземпляр.

Ответы сервера также попадают в метод `intercept()`. Чтобы "перехватить" их, нужно определить тип события (`any` в `HttpEvent<any>`).

Сделать это можно используя оператор `tap()`, который принимает в качестве аргумента возвращаемое значение `Observable`. Все успешные ответы сервера принадлежат к классу [`HttpResponse`](https://angular.io/api/common/http/HttpResponse), ошибки — к классу [`HttpErrorResponse`](https://angular.io/api/common/http/HttpErrorResponse).

В зависимости от ответа сервера объект события содержит соответствующие событию данные.

В приложение Angular HTTP Interceptor внедряется аналогично сервису.

```ts
providers: [
  AuthService,
  AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
]
```

Сперва необходимо импортировать injection-токен [`HTTP_INTERCEPTORS`](https://angular.io/api/common/http/HTTP_INTERCEPTORS), затем в массиве `providers` записать объект, подобный тому, что записан в примере выше.

Обязательный параметр `{multi: true}` говорит, что injection-токен `HTTP_INTERCEPTORS` внедряет не одно, а массив значений. Такой механизм позволяет создавать в приложении Angular неограниченное количество HTTP Interceptor-ов.
