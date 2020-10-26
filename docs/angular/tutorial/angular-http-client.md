---
description: Большинство современных API основаны на протоколе HTTP, поэтому "общение" с сервером Angular осуществляет через REST-подобные запросы
---

# HttpClient

Практически любое клиентское приложение получает данные от удаленного сервера. Большинство современных API основаны на протоколе HTTP, поэтому "общение" с сервером Angular осуществляет через REST-подобные запросы. За это отвечает [`HttpClientModule`](https://angular.io/api/common/http/HttpClientModule).

После в компонент или сервис (в зависимости от построения архитектуры) импортируется сервис [`HttpClient`](https://angular.io/api/common/http/HttpClient).

```ts
@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
}
```

В архитектуре REST API в зависимости от назначения используются разные методы HTTP запросов. Основные - `GET`, `POST`, `PUT` и `DELETE`. Рассмотрим, как сделать средствами Angular HTTP запросы.

!!! note ""

    Все методы сервиса `HttpClient` возвращают тип `Observable`. Это означает, что если при вызове метода, который должен сделать HTTP-запрос, не вызвать метод `subscribe()`, то ничего не произойдет. Методу `subscribe()` можно передавать две функции-обработчика, первая выполнится в случае успешного ответа от сервера, вторая - в случае ошибки.

Пример Angular GET-запросов.

```ts
//GET-запрос на получение списка счетов
getAccounts(){
	return this.http.get('http://example.com/api/accounts');
}

//GET-запрос на получение счета по id, id передается как GET-параметр
getAccountByID(id: number | string){
	return this.http.get('http://example.com/api/accounts', {
		params: new HttpParams().set('id', id)
	});
}
```

Для задания GET-параметров `get()` в качестве второго аргумента передается конфигурационный объект со свойством `params`. Здесь же в объекте указываются и другие параметры, например, `headers`, в котором задаются заголовки ответа. Все параметры подробно рассмотрены далее.

Свойство `params` принимает экземпляр класса [`HttpParams`](https://angular.io/api/common/http/HttpParams), который предварительно импортируется.

```ts
import { HttpParams } from '@angular/common/http'
```

Передача значений осуществляется с помощью `set()`. Для передачи множества параметров используется следующая запись.

```ts
params: new HttpParams()
  .set(`id`, id)
  .set(`category`, category)
```

Пример Angular POST-запроса.

```ts
//POST-запрос на создание нового счета
createAccount(){
	return this.http.post(`http://example.com/api/accounts`, {
		name: `Default account name`,
		type: 1,
	});
}
```

Метод `post()` принимает три аргумента. Второй - тело запроса, третьим параметром можно передаваться конфигурация.

Пример Angular PUT-запроса

```ts
//PUT-запрос на создание нового счета
updateAccount(){
	return this.http.put(`http://example.com/api/accounts`, {
		name: `Updated account name`,
		id: 3,
	});
}
```

Метод `put()` во всем идентичен методу `post()`. Разница между ними состоит в том, что `post()` используется для создания новой записи, а `put()` - для ее обновления.

Пример Angular DELETE-запроса.

```ts
//DELETE-запрос на получение счета по id, id передается как GET-параметр
deleteAccountByID(id: number | string){
	return this.http.delete(`http://example.com/api/accounts`, {
		params: new HttpParams().set(`id`, id)
	});
}
```

`delete()` используется для удаления записи. В своем использовании он схож с GET. Оба метода не имеют тела запроса, а данные передают в строке запроса.

Теперь рассмотрим, какие свойства можно задать в конфигурации:

- `headers` - принимает экземпляр класса [`HttpHeaders`](https://angular.io/api/common/http/HttpHeaders), который содержит указанные с помощью метода `set(key: string, value: string)` HTTP-заголовки; класс `HttpHeaders` должен быть предварительно импортирован;
- `params` - принимает экземпляр класса `HttpParams`, который содержит указанные с помощью метода `set(key: string, value: string)` параметры строки запроса;
- `reportProgress` - указывает, необходимо ли при загрузке на сервер или скачивании с сервера данных передавать информацию о текущем состоянии; принимает либо `true`, либо `false` (по умолчанию `null`);
- `responseType` - указывает тип данных ответа ('arraybuffer' | 'blob' | 'json' | 'text'); по умолчанию `'json'`;
- `withCredentials` - указывает, будут ли в запросе передаваться авторизационные данные пользователя; принимает либо `true`, либо `false` (по умолчанию).

Для получения исчерпывающих данных о процессе выполнения запроса в его параметрах необходимо установить `reportProgress` в `true`.

```ts
@Injectable()
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContactsDictionary() {
    const req = new HttpRequest(
      'GET',
      '/api/contacts/dictionary',
      {
        reportProgress: true,
        responseType: 'blob',
      }
    )

    this.http
      .request(req)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Sent')
            break
          case HttpEventType.DownloadProgress:
            console.log(
              `Downloading: ${event.loaded / 1024}Kb`
            )
            break
          case HttpEventType.Response:
            console.log('Finished', event.body)
        }
      })
  }
}
```

Запросы такого рода реализуются через метод `request()`, а их состояние отслеживается с помощью объекта `HttpEvent`. В его свойстве `type` указывается тип текущего события (`HttpTypeEvent`).

Классификация `HttpTypeEvent`:

- `Sent` - запрос был отправлен;
- `ResponseHeader` - получены код и заголовки ответа;
- `UploadProgress` - событие отправки данных (для POST и PUT);
- `DownloadProgress` - событие скачивания данных (для GET);
- `User` - событие от [`HttpInterceptor`](https://angular.io/api/common/http/HttpInterceptor) или сервера;
- `Response` - выполнение запроса завершено.

## Ссылки

- [HttpClient](https://angular.io/guide/http)
