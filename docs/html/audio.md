---
description: Тег audio (от англ. audio - звук, аудио) добавляет, воспроизводит и управляет настройками аудиозаписи на веб-странице
---

# &lt;audio&gt;

Тег **`<audio>`** _(от англ. **audio** - звук, аудио)_ добавляет, воспроизводит и управляет настройками аудиозаписи на веб-странице. Путь к файлу задаётся через атрибут `src` или вложенный элемент [`<source>`](source.md).

Внутри контейнера `<audio>` можно написать текст, который будет выводиться в браузерах, не работающих с этим элементом.

Для универсального воспроизведения в браузерах аудио кодируют с помощью разных кодеков и добавляют файлы одновременно через элемент `<source>`.

Управление воспроизведением аудио различается между браузерами по своему виду, но основные элементы совпадают. Это кнопка воспроизведения/паузы, длина трека, прошедшее и суммарное время звучания, а также уровень громкости.

## Поддержка браузерами

<p class="ciu_embed" data-feature="audio" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=audio">Can I Use audio?</a> Data on support for the audio feature across the major browsers from caniuse.com.
</p>

Поддержка MP3 аудио-кодека:

<p class="ciu_embed" data-feature="mp3" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=mp3">Can I Use mp3?</a> Data on support for the mp3 feature across the major browsers from caniuse.com.
</p>

Поддержка WAV аудио-кодека:

<p class="ciu_embed" data-feature="wav" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=wav">Can I Use wav?</a> Data on support for the wav feature across the major browsers from caniuse.com.
</p>

Поддержка FLAC аудио-кодека:

<p class="ciu_embed" data-feature="flac" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=flac">Can I Use flac?</a> Data on support for the flac feature across the major browsers from caniuse.com.
</p>

Поддержка AAC аудио-кодека:

<p class="ciu_embed" data-feature="aac" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=aac">Can I Use aac?</a> Data on support for the aac feature across the major browsers from caniuse.com.
</p>

Поддержка Ogg Vorbis аудио-кодека:

<p class="ciu_embed" data-feature="ogg-vorbis" data-periods="future_1,current,past_1,past_2">
  <a href="http://caniuse.com/#feat=ogg-vorbis">Can I Use ogg-vorbis?</a> Data on support for the ogg-vorbis feature across the major browsers from caniuse.com.
</p>

## Синтаксис

```html
<audio src="URL"></audio>
<audio>
  <source src="URL" />
</audio>
```

Закрывающий тег обязателен.

## Атрибуты

[`autoplay`](#autoplay)
: Звук начинает играть сразу после загрузки страницы.

[`controls`](#controls)
: Добавляет панель управления к аудиофайлу.

[`loop`](#loop)
: Повторяет воспроизведение звука с начала после его завершения.

[`muted`](#muted)
: Отключает звук при воспроизведении музыки.

[`preload`](#preload)
: Управляет предварительной загрузкой аудио данных.

[`src`](#src)
: Указывает путь к воспроизводимому файлу.

`volume`
: Громкость воспроизведения, в диапазоне от 0.0 (самая тихая) до 1.0 (самая громкая).

### autoplay

При наличии этого атрибута аудио начинает воспроизводиться автоматически после загрузки страницы. Атрибут `autoplay` отменяет действие атрибута `preload`.

**Синтаксис**

```html
<audio autoplay="autoplay"></audio>
```

**Значения**

В качестве значения указывается `autoplay`, также допустимо вообще не указывать никакое значение.

**Значение по умолчанию**

По умолчанию этот атрибут выключен.

### controls

Добавляет панель управления к аудиотреку. Вид панели и её содержимое зависит от браузера и может в себя включать: кнопку воспроизведения, паузы, перемотки, ползунок для изменения уровня громкости и др.

**Синтаксис**

```html
<audio controls="controls"></audio>
```

**Значения**

В качестве значения указывается `controls`, также допустимо писать атрибут без значения.

**Значение по умолчанию**

По умолчанию этот атрибут выключен.

### loop

Зацикливает воспроизведение аудио, чтобы оно бесконечно повторялось после завершения.

**Синтаксис**

```html
<audio loop="loop"></audio>
```

**Значения**

В качестве значения указывается `loop`, также допустимо писать атрибут без значения.

**Значение по умолчанию**

По умолчанию этот атрибут выключен.

### muted

Отключает звук при воспроизведении музыки.

**Синтаксис**

```html
<audio muted="muted"></audio>
```

**Значения**

В качестве значения указывается `muted`, также допустимо вообще не указывать никакое значение.

**Значение по умолчанию**

По умолчанию этот атрибут выключен.

### preload

Этот перечисляемый аттрибут предназначен для предоставления подсказки браузеру о том, что автор считает лучшим для сайта. Тег может иметь следующие значения

**Синтаксис**

```html
<audio preload="auto"></audio>
```

**Значения**

`none`
: указывает, что аудио не должно предварительно загружаться

`metadata`
: указывает, что загрузить нужно только метаданные;

`auto`
: указывает на то, что весь звуковой файл может быть загружен, даже если пользователь не будет использовать его;

**Значение по умолчанию**

Если он не указан, это будет определенное браузером значение. Спецификация советует использование аттрибута `metadata`.

**Примечания**

- Аттрибут `autoplay` имеет приоритет над `preload`. Если `autoplay` указан, браузер, должен начать загрузку для воспроизведения.
- Браузер не принуждается спецификацией следовать значению этого аттрибута; это просто подсказка.

### src

Указывает путь к воспроизводимому аудиофайлу. Для этой же цели также можно использовать элемент [`<source>`](/html/source/).

**Синтаксис**

```html
<audio src="<адрес>"></audio>
```

**Значения**

В качестве значения принимается полный или относительный путь к файлу.

**Значение по умолчанию**

Нет.

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-audio-element)
- [HTML5](http://www.w3.org/TR/html5/embedded-content-0.html#the-audio-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>audio</title>
  </head>

  <body>
    <p>Александр Клименков - Четырнадцать</p>
    <audio controls>
      <source
        src="audio/music.ogg"
        type="audio/ogg; codecs=vorbis"
      />
      <source src="audio/music.mp3" type="audio/mpeg" />
      Тег audio не поддерживается вашим браузером.
      <a href="audio/music.mp3">Скачайте музыку</a>.
    </audio>
  </body>
</html>
```

Базовое использование:

```html
<!-- Simple audio playback -->
<audio
  src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
  autoplay
>
  Ваш браузер не поддерживает <code>audio</code> элемент.
</audio>

<!-- Audio playback with captions -->
<audio src="foo.ogg">
  <track
    kind="captions"
    src="foo.en.vtt"
    srclang="en"
    label="English"
  />
  <track
    kind="captions"
    src="foo.sv.vtt"
    srclang="sv"
    label="Svenska"
  />
</audio>
```

Аудио элемент с элементом источника:

```html
<audio controls="controls">
  Ваш браузер не поддерживает <code>audio</code> элемент.
  <source src="foo.wav" type="audio/wav" />
</audio>
```

## Ссылки

- [`<audio>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/audio) на MDN
