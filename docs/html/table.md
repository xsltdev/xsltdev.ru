---
description: Тег table (от англ. table — таблица) служит контейнером для элементов, определяющих содержимое таблицы
---

# &lt;table&gt;

Тег **`<table>`** _(от англ. **table** — таблица)_ служит контейнером для элементов, определяющих содержимое таблицы.

Любая таблица состоит из строк и ячеек, которые задаются с помощью элементов [`<tr>`](tr.md) и [`<td>`](td.md). Внутри `<table>` допустимо использовать следующие элементы: [`<caption>`](caption.md), [`<col>`](col.md), [`<colgroup>`](colgroup.md), [`<tbody>`](tbody.md), [`<td>`](td.md), [`<tfoot>`](tfoot.md), [`<th>`](th.md), [`<thead>`](thead.md) и [`<tr>`](tr.md).

Таблицы с невидимой границей долгое время использовались для верстки веб-страниц, позволяя разделять документ на модульные блоки. Подобный способ применения таблиц нашёл воплощение на многих сайтах, пока ему на смену не пришли более современные способы вёрстки.

??? info "Таблицы"

    <div class="col3" markdown="1">

    - [caption](caption.md)
    - [col](col.md)
    - [colgroup](colgroup.md)
    - **table**
    - [tbody](tbody.md)
    - [td](td.md)
    - [tfoot](tfoot.md)
    - [th](th.md)
    - [thead](thead.md)
    - [tr](tr.md)

    </div>

## Синтаксис

```html
<table>
  <tr>
    <td>...</td>
  </tr>
</table>
```

Закрывающий тег обязателен.

## Атрибуты

Для этого элемента доступны [универсальные атрибуты](uni-attr.md).

## Спецификации

- [HTML Living Standard](https://html.spec.whatwg.org/multipage/tables.html#the-table-element)
- [HTML 5](http://www.w3.org/TR/html5/tabular-data.html#the-table-element)

## Описание и примеры

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Таблица размеров обуви</title>
  </head>
  <body>
    <table>
      <caption>
        Таблица размеров обуви
      </caption>
      <tr>
        <th>Россия</th>
        <th>Великобритания</th>
        <th>Европа</th>
        <th>Длина ступни, см</th>
      </tr>
      <tr>
        <td>34,5</td>
        <td>3,5</td>
        <td>36</td>
        <td>23</td>
      </tr>
      <tr>
        <td>35,5</td>
        <td>4</td>
        <td>36⅔</td>
        <td>23–23,5</td>
      </tr>
      <tr>
        <td>36</td>
        <td>4,5</td>
        <td>37⅓</td>
        <td>23,5</td>
      </tr>
      <tr>
        <td>36,5</td>
        <td>5</td>
        <td>38</td>
        <td>24</td>
      </tr>
      <tr>
        <td>37</td>
        <td>5,5</td>
        <td>38⅔</td>
        <td>24,5</td>
      </tr>
      <tr>
        <td>38</td>
        <td>6</td>
        <td>39⅓</td>
        <td>25</td>
      </tr>
      <tr>
        <td>38,5</td>
        <td>6,5</td>
        <td>40</td>
        <td>25,5</td>
      </tr>
      <tr>
        <td>39</td>
        <td>7</td>
        <td>40⅔</td>
        <td>25,5–26</td>
      </tr>
      <tr>
        <td>40</td>
        <td>7,5</td>
        <td>41⅓</td>
        <td>26</td>
      </tr>
      <tr>
        <td>40,5</td>
        <td>8</td>
        <td>42</td>
        <td>26,5</td>
      </tr>
      <tr>
        <td>41</td>
        <td>8,5</td>
        <td>42⅔</td>
        <td>27</td>
      </tr>
      <tr>
        <td>42</td>
        <td>9</td>
        <td>43⅓</td>
        <td>27,5</td>
      </tr>
      <tr>
        <td>43</td>
        <td>9,5</td>
        <td>44</td>
        <td>28</td>
      </tr>
      <tr>
        <td>43,5</td>
        <td>10</td>
        <td>44⅔</td>
        <td>28–28,5</td>
      </tr>
      <tr>
        <td>44</td>
        <td>10,5</td>
        <td>45⅓</td>
        <td>28,5–29</td>
      </tr>
      <tr>
        <td>44,5</td>
        <td>11</td>
        <td>46</td>
        <td>29</td>
      </tr>
      <tr>
        <td>45</td>
        <td>11,5</td>
        <td>46⅔</td>
        <td>29,5</td>
      </tr>
      <tr>
        <td>46</td>
        <td>12</td>
        <td>47⅓</td>
        <td>30</td>
      </tr>
      <tr>
        <td>46,5</td>
        <td>12,5</td>
        <td>48</td>
        <td>30,5</td>
      </tr>
      <tr>
        <td>47</td>
        <td>13</td>
        <td>48⅔</td>
        <td>31</td>
      </tr>
      <tr>
        <td>48</td>
        <td>13,5</td>
        <td>49⅓</td>
        <td>31,5</td>
      </tr>
    </table>
  </body>
</html>
```

## Ссылки

- Тег [`<table>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/table) <sup><small>MDN (рус.)</small></sup>
