---
description: Тег video (от англ. video — видео) добавляет, воспроизводит и управляет настройками видеоролика на веб-странице
---

# &lt;video&gt;

Тег **`<video>`** _(от англ. **video** — видео)_ добавляет, воспроизводит и управляет настройками видеоролика на веб-странице.

Путь к файлу задаётся через атрибут `src` или вложенный элемент [`<source>`](source.md). Список поддерживаемых браузерами аудио и видеокодеков ограничен.

Для универсального воспроизведения в браузерах видео кодируют с помощью разных кодеков и добавляют файлы одновременно.

??? info "Изображения и мультимедиа"

    <div class="col3" markdown="1">

    - [area](area.md)
    - [audio](audio.md)
    - [img](img.md)
    - [figcaption](figcaption.md)
    - [figure](figure.md)
    - [map](map.md)
    - [track](track.md)
    - **video**
    - [embed](embed.md)
    - [iframe](iframe.md)
    - [object](object.md)
    - [param](param.md)
    - [picture](picture.md)
    - [source](source.md)

    </div>

## Синтаксис

```html
<video>
  <source src="<адрес>" />
</video>
```

Закрывающий тег обязателен.

## Атрибуты

[`autoplay`](#autoplay)
: Видео начинает воспроизводиться автоматически после загрузки страницы.

`buffered`
: Атрибут для определения временных диапазонов буферизованных носителей. Этот атрибут содержит объект `TimeRanges`.

[`controls`](#controls)
: Добавляет панель управления к видеоролику.

`crossorigin`
: Этот атрибут указывает, следует ли использовать CORS для извлечения связанного изображения.

[`height`](#height)
: Задаёт высоту области для воспроизведения видеоролика.

[`loop`](#loop)
: Повторяет воспроизведение видео с начала после его завершения.

`muted`
: Логический атрибут, который определяет значение по умолчания для аудио дорожки, содержащуюся в видео. Если атрибут указан, то аудио дорожка воспроизводиться не будет. Значение атрибута по умолчанию - "ложь", и это означает, что звук будет воспроизводиться, когда видео воспроизводится.

`played`
: Атрибут `TimeRanges`, указывающий все диапазоны воспроизводимого видео.

[`poster`](#poster)
: Указывает адрес картинки, которая будет отображаться, пока видео не доступно или не воспроизводится.

[`preload`](#preload)
: Используется для загрузки видео вместе с загрузкой веб-страницы.

[`src`](#src)
: Указывает путь к воспроизводимому видеоролику.

[`width`](#width)
: Задаёт ширину области для воспроизведения видеоролика.

### autoplay

При наличии этого атрибута видео начинает воспроизводиться автоматически после загрузки страницы. Атрибут `autoplay` отменяет действие `preload`.

**Синтаксис**

```html
<video autoplay="autoplay"></video>
```

**Значения**

В качестве значения указывается `autoplay`, также допустимо вообще не указывать никакое значение.

**Значение по умолчанию**

По умолчанию этот атрибут выключен.

### controls

Добавляет панель управления к видеоролику. Вид панели и её содержимое зависит от браузера и может в себя включать кнопку воспроизведения, паузы, перемотки, перехода в полноэкранный режим; ползунка для изменения уровня громкости и др.

**Синтаксис**

```html
<video controls="controls"></video>
```

**Значения**

В качестве значения указывается `controls`, также допустимо писать атрибут без значения.

**Значение по умолчанию**

По умолчанию этот атрибут выключен.

### height

Атрибут `height` задаёт высоту области для воспроизведения видеоролика. Само видео меняет свои размеры в большую или меньшую сторону, чтобы вписаться в заданные рамки, но его пропорции при этом остаются прежними.

**Синтаксис**

```html
<video height="<значение>"></video>
```

**Значения**

Любое целое положительное число в пикселях или процентах.

**Значение по умолчанию**

Исходная высота берётся из параметров видео. Если эти параметры не доступны, тогда `height` принимается равной высоте картинке, заданной атрибутом `poster`. В противном случае высота видео устанавливается 150 пикселей.

### loop

Зацикливает воспроизведение видео, оно повторяется каждый раз с начала после завершения.

**Синтаксис**

```html
<video loop="loop"></video>
```

**Значения**

В качестве значения указывается `loop`, также допустимо писать атрибут без значения.

**Значение по умолчанию**

По умолчанию этот атрибут выключен.

### poster

Указывает адрес картинки, которая будет отображаться, пока видео не доступно или не вопроизводится. Само изображение может быть в любом доступном формате: GIF, PNG, JPEG. Если атрибут `poster` не указан, браузер постарается отобразить первый кадр видео.

**Синтаксис**

```html
<video poster="<адрес>"></video>
```

**Значения**

В качестве значения принимается полный или относительный путь к графическому файлу.

**Значение по умолчанию**

Нет.

### preload

Используется для загрузки видео вместе с загрузкой веб-страницы. Этот атрибут игнорируется, если установлен `autoplay`.

**Синтаксис**

```html
<video preload="none | metadata | auto"></video>
```

**Значения**

`none`
: Не загружать видео.

`metadata`
: Загрузить только служебную информацию (размеры видео, первый кадр, продолжительность и др.).

`auto`
: Загрузить видео целиком при загрузке страницы.

**Значение по умолчанию**

`none`

### src

Указывает путь к воспроизводимому видеоролику. Для этой же цели можно использовать элемент [`<source>`](/html/source/).

**Синтаксис**

```html
<video src="<адрес>"></video>
```

**Значения**

В качестве значения принимается полный или относительный путь к файлу.

**Значение по умолчанию**

Нет.

### width

Атрибут `width` задаёт ширину области для воспроизведения видеоролика. Само видео меняет свои размеры в большую или меньшую сторону, чтобы вписаться в указанную ширину, но его пропорции при этом не искажаются.

**Синтаксис**

```html
<video width="<значение>"></video>
```

**Значения**

Любое целое положительное число в пикселях или процентах.

**Значение по умолчанию**

Исходная ширина берётся из параметров видео, если это значение не доступно, тогда `width` принимается равной ширине картинке, заданной атрибутом `poster`. Если этот атрибут не установлен, ширина устанавливается как 300 пикселей.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-video-element)

## Примеры

### Пример 1

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>video</title>
  </head>
  <body>
    <video
      width="400"
      height="300"
      controls="controls"
      poster="video/duel.jpg"
    >
      <source
        src="video/duel.ogv"
        type='video/ogg; codecs="theora, vorbis"'
      />
      <source
        src="video/duel.mp4"
        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
      />
      <source
        src="video/duel.webm"
        type='video/webm; codecs="vp8, vorbis"'
      />
      Элемент video не поддерживается вашим браузером.
      <a href="video/duel.mp4">Скачайте видео</a>.
    </video>
  </body>
</html>
```

### Пример 2

Первый пример воспроизводит видео, начиная воспроизведение, как только будет получено достаточное количество видео, чтобы позволить воспроизведение без паузы для загрузки еще. До начала воспроизведения видео на его месте отображается изображение "posterimage.jpg".

```html
<!-- Простой пример с видео -->
<video
  src="videofile.ogg"
  autoplay
  poster="posterimage.jpg"
>
  Sorry, your browser doesn't support embedded videos, but
  don't worry, you can
  <a href="videofile.ogg">download it</a>
  and watch it with your favorite video player!
</video>
```

Второй пример позволяет пользователю выбирать различные субтитры.

```html
<!-- Видео с субтитрами -->
<video src="foo.ogg">
  <track
    kind="subtitles"
    src="foo.en.vtt"
    srclang="en"
    label="English"
  />
  <track
    kind="subtitles"
    src="foo.sv.vtt"
    srclang="sv"
    label="Svenska"
  />
</video>
```

### Пример 3

Пример нескольких источников

```html
<video
  width="480"
  controls
  poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif"
>
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4"
    type="video/mp4"
  />
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv"
    type="video/ogg"
  />
  <source
    src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm"
    type="video/webm"
  />
  Your browser doesn't support HTML5 video tag.
</video>
```

## Поддержка браузерами

<p class="ciu_embed" data-feature="video" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=video">Can I Use video?</a> Data on support for the video feature across the major browsers from caniuse.com.
</p>

Поддержка WebM видео-кодека:

<p class="ciu_embed" data-feature="webm" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=webm">Can I Use webm?</a> Data on support for the webm feature across the major browsers from caniuse.com.
</p>

Поддержка Ogg/Theora видео-кодека:

<p class="ciu_embed" data-feature="ogv" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=ogv">Can I Use ogv?</a> Data on support for the ogv feature across the major browsers from caniuse.com.
</p>

Поддержка MPEG-4/H.264 видео-кодека:

<p class="ciu_embed" data-feature="mpeg4" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=mpeg4">Can I Use mpeg4?</a> Data on support for the mpeg4 feature across the major browsers from caniuse.com.
</p>

Поддержка HEVC/H.265 видео-кодека:

<p class="ciu_embed" data-feature="hevc" data-periods="future_1,current,past_1,past_2">
<a href="http://caniuse.com/#feat=hevc">Can I Use hevc?</a> Data on support for the hevc feature across the major browsers from caniuse.com.
</p>

## См. также

- [`<audio>`](audio.md)

## Ссылки

- Тег [`<video>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/video) <sup><small>MDN (рус.)</small></sup>
