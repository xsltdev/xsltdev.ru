---
description: Web Worker представляет собой механизм запуска выполнения скрипта отдельным процессом в фоновом режиме. Причем Web Worker-ы могут создавать другие и так далее. Общение между главным процессом и Web Worker-ами осуществляется с помощью сообщений
---

# Web Workers

**Web Worker** представляет собой механизм запуска выполнения скрипта отдельным процессом в фоновом режиме. Причем Web Worker-ы могут создавать другие и так далее. Общение между главным процессом и Web Worker-ами осуществляется с помощью сообщений.

## Создание Web Worker через Angular CLI

Сперва для примера создадим новый проект.

```
ng new web-worker-app
```

Теперь для добавления Web Worker в приложение, воспользуйтесь следующей командой Angular CLI.

```
ng g web-worker app
```

Здесь в команде `app` является компонентом, для которого необходимо создать Angular Web Worker.

Если это первый Web Worker в приложении, то выполнение команды обновит конфигурацию проекта для возможности работы с Angular Web Worker, при этом будет создан файл `tsconfig.worker.json` со следующим содержимым

_tsconfig.worker.json_

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/worker",
    "lib": ["es2018", "webworker"],
    "types": []
  },
  "include": ["src/**/*.worker.ts"]
}
```

Также будет создан файл `app.worker.ts` (в зависимости от компонента название может быть другим), который по умолчанию будет содержать такой код.

_app.worker.ts_

```ts
/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`
  postMessage(response)
})
```

А в коде самого компонента `app.components.ts` появится следующее.

_app.component.ts_

```ts
if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./app.worker', {
    type: 'module',
  })
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`)
  }
  worker.postMessage('hello')
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
```

Теперь можно заменить код по умолчанию своей реализацией.

!!! note ""

    Angular Universal не поддерживает работу Web Worker-ов, поскольку они являются частью браузерного API.

## Web Worker API

Отправка сообщения из главного процесса Web Worker-у и наоборот осуществляется с использованием метода `postMessage()`, параметрами принимающий данные, которые необходимо доставить.

_untitled.ts_

```ts
worker.postMessage('hello')
```

Получение отправленных данных инициирует событие `message`, callback-функции которого аргументом передается экземпляр объекта `MessageEvent`, в свойстве `data` которого находятся переданные данные.

_untitled.ts_

```ts
worker.onmessage = ({ data }) => {
  console.log(`page got message: ${data}`)
}
```

Обработка ошибок осуществляется с помощью события `error`.

_untitled.ts_

```ts
worker.onerror = (err) => {
  console.log(
    `${err.filename}:${err.lineno} ${err.message}`
  )
}
```

Объект ошибки имеет следующие свойства:

- `filename` - имя файла, в котором произошла ошибка;
- `lineno` - номер строки, на которой возникла ошибка;
- `message` - текст ошибки.

Для завершения работы Angular Web Worker-а вызовите у его экземпляра метод `terminate()`.

_untitled.ts_

```ts
worker.terminate()
```

## Выделенные и разделяемые Web Worker-ы

Имеется два типа Web Worker-ов: выделенные и разделяемые.

Выделенные Web Worker-ы создаются через `new Worker()` и доступны для использования только тому скрипту, который его создал. Параметром конструктору передается путь к скрипту, который должен быть запущен в отдельном процессе.

!!! note ""

    По умолчанию Angular Web Worker относится к выделенным.

_app.component.ts_

```ts
@Component({
  selector: 'app-root',
  template: `
    <button (click)="getData()">Get data</button>
  `,
})
export class AppComponent {
  worker: Worker

  constructor() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('./app.worker', {
        type: 'module',
      })

      this.worker.addEventListener(
        'message',
        (message: MessageEvent) =>
          console.log(
            'Got data from worker: ',
            message.data
          )
      )
    } else alert('Web Worker is not supported.')
  }

  getData(): void {
    this.worker.postMessage('Give me data')
  }
}
```

_app.worker.ts_

```ts
/// <reference lib="webworker" />

addEventListener('message', (message: MessageEvent) => {
  console.log('Got message from main: ', message.data)
  postMessage('Data for main')
})
```

В отличие от выделенных, разделяемые Web Worker-ы доступны множеству скриптов, которые причем могут находиться в разных окнах.

!!! note ""

    На текущий момент в Angular SharedWorker не включен, а именно отсутствует его тип, который может быть описан вами самостоятельно и далее использован в вашем приложении. Подробнее разделяемых Worker-ах можно узнать [здесь](https://developer.mozilla.org/ru/docs/Web/API/SharedWorker).

## Ссылки

- [Using Web Workers with Angular CLI](https://angular.io/guide/web-worker)
