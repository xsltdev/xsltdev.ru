---
description: Тег track (от англ. track — след, дорожка) позволяет авторам указать текстовую дорожку для медийных элементов audio и video
---

# &lt;track&gt;

Тег **`<track>`** _(от англ. **track** — след, дорожка)_ позволяет авторам указать текстовую дорожку для медийных элементов [`<audio>`](audio.md) и [`<video>`](video.md).

Такая дорожка обычно содержит субтитры на разных языках, комментарии, заголовки и др.

??? info "Изображения и мультимедиа"

    <div class="col4" markdown="1">

    - [area](area.md)
    - [audio](audio.md)
    - [img](img.md)
    - [figcaption](figcaption.md)
    - [figure](figure.md)
    - [map](map.md)
    - **track**
    - [video](video.md)
    - [embed](embed.md)
    - [iframe](iframe.md)
    - [object](object.md)
    - [param](param.md)
    - [picture](picture.md)
    - [source](source.md)

    </div>

## Синтаксис

```html
<audio>
  <track kind | src | srclang | label | default />
</audio>
<video>
  <track kind | src | srclang | label | default />
</video>
```

Закрывающий тег не требуется.

## Атрибуты

`kind`
: Указывает тип дорожки, возможные варианты перечислены в табл. 1.

`src`
: Путь к файлу с дорожкой.

`srclang`
: Язык дорожки. См. коды языков.

`label`
: Отображаемое название дорожки. Если этот атрибут не указан, браузер станет использовать значение, которое применяется у него по умолчанию, например «untitled1».

`default`
: Наличие этого атрибута указывает, что данная дорожка предпочтительна и должна быть выбрана по умолчанию. Только одна дорожка может иметь атрибут `default`.

<table>
<caption>Табл. 1. Значения атрибута <code>kind</code></caption>
<tr><th>Значение</th><th>Предназначение</th><th>Описание</th></tr>
<tr><td><code>subtitles</code></td><td>Субтитры</td><td>Предназначены для дублирования звуковой дорожки фильма в виде текста на языке оригинала для глухих людей. Также могут содержать перевод на другие языки для тех, кто не знаком с языком оригинала. Текст субтитров выводится поверх видео.</td></tr>
<tr><td><code>captions</code></td><td>Заголовки</td><td>Дублирование диалогов, звуковых эффектов, музыкального сопровождения в виде текста для тех случаев, когда звук недоступен или для глухих пользователей. Выводится поверх видео, при этом помечается, что подходит для плохо слышащих людей.</td></tr>
<tr><td><code>descriptions</code></td><td>Описание</td><td>Звуковое описание происходящего в видео для тех случаев, когда изображение недоступно или для слепых людей.</td></tr>
<tr><td><code>chapters</code></td><td>Главы</td><td>Названия глав используемые для быстрой навигации по видео или аудио. Отображаются в виде списка.</td></tr>
<tr><td><code>metadata</code></td><td>Метаданные</td><td>Предназначены для использования скриптами и не отображаются в браузере.</td></tr>
</table>

## Спецификации

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-track-element)
- [HTML 5](http://www.w3.org/TR/html5/embedded-content-0.html#the-track-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>track</title>
  </head>
  <body>
    <video width="500" height="400" controls>
      <track
        kind="subtitles"
        src="video/jane.en.vtt"
        srclang="en"
        label="English"
      />
      <track
        kind="subtitles"
        src="video/jane.ua.vtt"
        srclang="ua"
        label="Український"
      />
      <track
        kind="subtitles"
        src="video/jane.ru.vtt"
        srclang="ru"
        label="Русский"
        default
      />
      <source
        src="video/jane.ogv"
        type='video/ogg; codecs="theora, vorbis"'
      />
      <source
        src="video/jane.mp4"
        type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
      />
      <source
        src="video/jane.webm"
        type='video/webm; codecs="vp8, vorbis"'
      />
      Элемент video не поддерживается вашим браузером.
    </video>
  </body>
</html>
```

## Ссылки

- Тег [`<track>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/track) <sup><small>MDN (рус.)</small></sup>
