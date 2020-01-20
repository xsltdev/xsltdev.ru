---
description: Использование TypeScript, подключение Bootstrap с помощью npm и роль файла main.ts
---

# TypeScript, Bootstrap, Main.ts

## TypeScript

Это суперсет, расширяющий возможности _javaScript_ наличием _типов_, _классов_, _интерфейсов_ и т.д. Браузер не умеет выполнять **TypeScript** файлы, по этому их нужно компилировать в _js_.

## Bootstrap

Рекомендуется устанавливать из командной строки командой `npm install --save bootstrap`. Из _VS Studio_ командную строку можно запустить сочитанием `ctrl + ~`

В файл `.angular.cli.json` добавить стили:

```json
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.css"
],
```

## Как работает Angular5

_Angular_ используется для создания _SPA (Single page application)_.

`index.html` - базовая страница.

`main.ts` - скрипт, который выполняется после загрузки страницы. В этом скрипте главное:

```js
import { AppModule } from './app/app.module'
platformBrowserDynamic().bootstrapModule(AppModule)
```

Таким образом загружается файл `app\app.module.ts`, который и загружает компонент на страницу.
