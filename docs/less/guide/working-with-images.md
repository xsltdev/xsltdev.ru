# Работа с изображениями

## Размер изображения

Отличительной особенностью Less версии 2.2.0 стали встроенные функции для работы с изображениями, которые позволяют получить следующие данные:

 * Размер (ширина и высота) — `image-size(url)`.
 * Ширину — `image-width(url)`.
 * Высоту — `image-height(url)`.

Для того, чтобы получить ширину изображения, необходимо указать путь до него, относительно того файла, в котором вызывается эта функция.

> **Замечание**
>
> Все примеры из этой части доступны в архиве, который прилагается к этой книге.

Рассмотрим два случая, которые могут вводить новичков в заблуждение:



### Случай 1. Один файл

Допустим, что работа ведётся с less-файлом, который находится в директории:

```
styles/less/_styles.less
```

В этом файле необходимо узнать ширину или высоту изображения, которое находится в директории:

```
images/logo.png
```

В этом случае, любая из трёх функций должна вызываться следующим образом:

```less
@logo-path: "../../images/avatar.jpg";

.logo {
  @logo-width: image-width(@logo-path);
  @logo-height: image-height(@logo-path);
  @logo-size: image-size(@logo-path);

  content: "@{logo-size} [@{logo-width} x @{logo-height}]";
}
```

В итоге, если вы правильно укажете путь до файла изображения из файла, где была вызвана функция, свойство `content` получит значение:

```css
.logo {
  content: "460px 460px [460px x 460px]";
}
```

Если же путь будет не верным, то компилятор выдаст ошибку.



### Случай 2. Структурный файл

Ранее путь писался относительно того файла, в котором была вызвана та или иная функция для получения размера изображения. Допустим, что у нас имеется конфигурация:

 * Рабочий файл: `styles/less/components/_styles.less`
 * Главный файл: `styles/less/main.less`
 * Файл изображения: `images/logo.png`

Содержимое каждого файла будет таким:

```less
// file: `styles/less/main.less`

@import "components/_styles.less";

// file: `styles/less/components/_styles.less`

@logo-path: "../../images/avatar.jpg";

.logo {
  @logo-width: image-width(@logo-path);
  @logo-height: image-height(@logo-path);
  @logo-size: image-size(@logo-path);

  content: "@{logo-size} [@{logo-width} x @{logo-height}]";
}
```

Хотя файл `_styles.less` поменял своё расположение — при компиляции ошибки не будет. Дело в том, что путь, указанный в переменной `@logo-path` полностью соответствует ситуации.

Вся хитрость заключается в файле `main.less`, который является точкой входа для компилятора. Именно относительно него нужно прописывать любой путь к изображениям.

При попытке указать путь, относительно файла `_styles.less`, компилятор выдаст ошибку, говорящую о том, что по указанному пути файл не найден:

```
FileError: error evaluating function `image-width`: '../../../images/avatar.jpg' wasn't found.

C:\<-- path -->\chapter_4\examples\4.3.2\styles\less\components\_styles.less on line 4, column 16:
3 .logo {
4   @logo-width: image-width(@logo-path);
5   @logo-height: image-height(@logo-path);
```




## Встраиваемые ресурсы

Под встроенными ресурсами стоит понимать закодированный ресурс (картинку, скрипт, стили), содержащийся внутри строки кода.

Сейчас, в виду того, что дизайн веб-приложений становится плоским и материальным, а возможности браузеров растут (количество изображений в оформлении падает), довольно часто можно встреть следующую конструкцию в стилях:

```css
.logo {
  /* Пример из документации */
  background-image: url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');
}
```
Этот подход используется для того, чтобы уменьшить число HTTP-запросов к серверу и должен применяться только тогда, когда количество и размер изображений достаточно мал.

При обнаружении такой конструкции в подключённых к странице стилях браузер декодирует строку, получает исходное изображение и выводит пользователю.

В багажнике препроцессора Less есть мощная функция `data-uri()`, предоставляющая возможность кодировать ресурсы без использования сторонних инструментов.

Синтаксис этой функции таков:

```less
.logo {
  background-image: data-uri(mimetype, path);
}
```

Параметр **mimetype** определяет строку, содержащую тип изображения для браузера в соответствии с принятым документом RFC 1521. Этот параметр необязателен и его можно опустить, так как компилятор сам в состоянии понять, какой ему ресурс предоставили для кодирования.

Вот пример того, какие изображения можно закодировать с помощью этой функции и её результатов работы:

```less
.logo {
  background-image: data-uri("image.jpg");
  // url("data:image/jpeg;base64,/9j/7gAOQWRvYmUAZAAAAAAA/9sAQwA...")

  background-image: data-uri("image/jpeg;base64", "image.jpg");
  // url("data:image/jpeg;base64,/9j/7gAOQWRvYmUAZAAAAAAA/9sAQwA...")

  background-image: data-uri("image.png");
  // url("data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAB...")

  background-image: data-uri("image.gif");
  // url("data:image/gif;base64,R0lGODlhQABAAPeAAP7+/v39/fz8/Pv7...")

  background-image: data-uri("image.svg");
  // url("data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20e...")

  background-image: data-uri("image/svg+xml;charset=UTF-8", "image.svg");
  // url("data:image/svg+xml;charset=UTF-8,%3C%3Fxml%20version%3...")
}
```

Как не сложно заметить, различный результат проявился только у пары, где используется SVG изображение.




## SVG-градиенты

Кроме стандартных функций для работы с изображениями и их кодированием, препроцессор Less умеет генерировать SVG-градиенты. Для этого используется функция, которая принимает на вход три параметра: *направление*, *цвет и позиция*. Вот синтаксис этой функции:

```less
.gradient {
  background-image: svg-gradient(ellipse at center, blue, red 15%);
}
```

Такой вызов функции породит Base64-код, в котором закодировано изображение сгенерированного градиента:

```css
.gradient {
  background-image: url('data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20%3F%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%201%201%22%20preserveAspectRatio%3D%22none%22%3E%3CradialGradient%20id%3D%22gradient%22%20gradientUnits%3D%22userSpaceOnUse%22%20cx%3D%2250%25%22%20cy%3D%2250%25%22%20r%3D%2275%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230000ff%22%2F%3E%3Cstop%20offset%3D%2215%25%22%20stop-color%3D%22%23ff0000%22%2F%3E%3C%2FradialGradient%3E%3Crect%20x%3D%22-50%22%20y%3D%22-50%22%20width%3D%22101%22%20height%3D%22101%22%20fill%3D%22url(%23gradient)%22%20%2F%3E%3C%2Fsvg%3E');
}
```

При декодировании этого кода можно получить внутренности изображения и убедиться, что функция создала верный градиент:

```xml
<?xml version="1.0" ?>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">
  <radialGradient id="gradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="75%">
    <stop offset="0%" stop-color="#0000ff"/>
    <stop offset="15%" stop-color="#ff0000"/>
  </radialGradient>

  <rect x="-50" y="-50" width="101" height="101" fill="url(#gradient)" />
</svg>
```
Конечно, функция может генерировать не только эллиптические градиенты. В список поддерживаемых направлений входят следующие значения:

 * to (top | right | bottom | left)
 * комбинации: to top bottom | to right bottom и прочие
 * ellipse
 * ellipse at center

> **Внимание**
>
> Если вы используете компилятор версии ниже 2.2.0, то Base64 кодирование не поддерживается и, как следствие, функция `data-uri()` не будет работать. Кроме того, функция `svg-gradient()` не будет кодировать результат своей работы в Base64-код.
