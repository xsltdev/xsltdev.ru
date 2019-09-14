---
description: MIME-тип — тип данных, которые могут быть переданы посредством сети интернет с применением стандарта MIME
---

# Список MIME-типов

**MIME-тип** — тип данных, которые могут быть переданы посредством сети интернет с применением стандарта MIME.

Согласно RFC 2045, RFC 2046, RFC 4288, RFC 4289 и RFC 4855 выделяются следующие базовые типы передаваемых данных:

- application
- audio
- example
- image
- message
- model
- multipart
- text
- video

## application

Внутренний формат прикладной программы

- application/atom+xml: Atom
- application/EDI-X12: EDI X12 (RFC 1767)
- application/EDIFACT: EDI EDIFACT (RFC 1767)
- application/json: JavaScript Object Notation JSON (RFC 4627)
- application/javascript: JavaScript (RFC 4329)
- application/octet-stream: двоичный файл без указания формата (RFC 2046)
- application/ogg: Ogg (RFC 5334)
- application/pdf: Portable Document Format, PDF (RFC 3778)
- application/postscript: PostScript (RFC 2046)
- application/soap+xml: SOAP (RFC 3902)
- application/font-woff: Web Open Font Format
- application/xhtml+xml: XHTML (RFC 3236)
- application/xml-dtd: DTD (RFC 3023)
- application/xop+xml:XOP
- application/zip: ZIP
- application/gzip: Gzip
- application/x-bittorrent : BitTorrent
- application/x-tex : TeX
- application/xml: XML

## audio

Аудио

- audio/basic: mulaw аудио, 8 кГц, 1 канал (RFC 2046)
- audio/L24: 24bit Linear PCM аудио, 8-48 кГц, 1-N каналов (RFC 3190)
- audio/mp4: MP4
- audio/aac: AAC
- audio/mpeg: MP3 или др. MPEG (RFC 3003)
- audio/ogg: Ogg Vorbis, Speex, Flac или др. аудио (RFC 5334)
- audio/vorbis: Vorbis (RFC 5215)
- audio/x-ms-wma: Windows Media Audio
- audio/x-ms-wax: Windows Media Audio перенаправление
- audio/vnd.rn-realaudio: RealAudio
- audio/vnd.wave: WAV(RFC 2361)
- audio/webm: WebM

## image

Изображение

- image/gif: GIF(RFC 2045 и RFC 2046)
- image/jpeg: JPEG (RFC 2045 и RFC 2046)
- image/pjpeg: JPEG
- image/png: Portable Network Graphics(RFC 2083)
- image/svg+xml: SVG
- image/tiff: TIFF(RFC 3302)
- image/vnd.microsoft.icon: ICO
- image/vnd.wap.wbmp: WBMP
- image/webp: WebP

## message

Сообщение

- message/http (RFC 2616)
- message/imdn+xml: IMDN (RFC 5438)
- message/partial: E-mail (RFC 2045 и RFC 2046)
- message/rfc822: E-mail; EML-файлы, MIME-файлы, MHT-файлы, MHTML-файлы (RFC 2045 и RFC 2046)

## model

Для 3D моделей

- model/example: (RFC 4735)
- model/iges: IGS файлы, IGES файлы (RFC 2077)
- model/mesh: MSH файлы, MESH файлы (RFC 2077), SILO файлы
- model/vrml: WRL файлы, VRML файлы (RFC 2077)
- model/x3d+binary: X3D ISO стандарт для 3D компьютерной графики, X3DB файлы
- model/x3d+vrml: X3D ISO стандарт для 3D компьютерной графики, X3DV VRML файлы
- model/x3d+xml: X3D ISO стандарт для 3D компютерной графики, X3D XML файлы
- multipart[править | править вики-текст]
- multipart/mixed: MIME E-mail (RFC 2045 и RFC 2046)
- multipart/alternative: MIME E-mail (RFC 2045 и RFC 2046)
- multipart/related: MIME E-mail (RFC 2387 и используемое MHTML (HTML mail))
- multipart/form-data: MIME Webform (RFC 2388)
- multipart/signed: (RFC 1847)
- multipart/encrypted: (RFC 1847)

## text

Текст

- text/cmd: команды
- text/css: Cascading Style Sheets (RFC 2318)
- text/csv: CSV (RFC 4180)
- text/html: HTML (RFC 2854)
- text/javascript (Obsolete): JavaScript (RFC 4329)
- text/plain: текстовые данные (RFC 2046 и RFC 3676)
- text/php: Скрипт языка PHP
- text/xml: Extensible Markup Language (RFC 3023)
- text/markdown: файл языка разметки Markdown (RFC 7763)

## video

Видео

- video/mpeg: MPEG-1 (RFC 2045 и RFC 2046)
- video/mp4: MP4 (RFC 4337)
- video/ogg: Ogg Theora или другое видео (RFC 5334)
- video/quicktime: QuickTime
- video/webm: WebM
- video/x-ms-wmv: Windows Media Video
- video/x-flv: FLV
- video/3gpp: .3gpp .3gp
- video/3gpp2: .3gpp2 .3g2

## vnd

Вендорные файлы

- application/vnd.oasis.opendocument.text: OpenDocument
- application/vnd.oasis.opendocument.spreadsheet: OpenDocument
- application/vnd.oasis.opendocument.presentation: OpenDocument
- application/vnd.oasis.opendocument.graphics: OpenDocument
- application/vnd.ms-excel: Microsoft Excel файлы
- application/vnd.openxmlformats-officedocument.spreadsheetml.sheet: Microsoft Excel 2007 файлы
- application/vnd.ms-powerpoint: Microsoft Powerpoint файлы
- application/vnd.openxmlformats-officedocument.presentationml.presentation: Microsoft Powerpoint 2007 файлы
- application/msword: Microsoft Word файлы
- application/vnd.openxmlformats-officedocument.wordprocessingml.document: Microsoft Word 2007 файлы
- application/vnd.mozilla.xul+xml: Mozilla XUL файлы
- application/vnd.google-earth.kml+xml: KML файлы (например, для Google Earth)

## x

Нестандартные файлы

- application/x-www-form-urlencoded Form Encoded Data
- application/x-dvi: DVI
- application/x-latex: LaTeX файлы
- application/x-font-ttf: TrueType (не зарегистрированный MIME-тип, но наиболее часто используемый)
- application/x-shockwave-flash: Adobe Flash
- application/x-stuffit: StuffIt
- application/x-rar-compressed: RAR
- application/x-tar: Tarball
- text/x-jquery-tmpl: jQuery
- application/x-javascript:

## x-pkcs

PKCS

- application/x-pkcs12: p12 файлы
- application/x-pkcs12: pfx файлы
- application/x-pkcs7-certificates: p7b файлы
- application/x-pkcs7-certificates: spc файлы
- application/x-pkcs7-certreqresp: p7r файлы
- application/x-pkcs7-mime: p7c файлы
- application/x-pkcs7-mime: p7m файлы
- application/x-pkcs7-signature: p7s файлы
