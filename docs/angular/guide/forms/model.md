---
description: Кроме создания привязки директива ngModel позволяет определить объект NgModel, который будет связан с определенным элементом ввода
---

# Получение и изменение модели

Кроме создания привязки директива `ngModel` позволяет определить объект `NgModel`, который будет связан с определенным элементом ввода. Например, определим следующий компонент:

```typescript
import { Component } from '@angular/core'
import { NgModel } from '@angular/forms'

export class Phone {
  constructor(
    public title: string,
    public price: number,
    public company: string
  ) {}
}

@Component({
  selector: 'my-app',
  template: `
    <div class="col-xs-10">
      <div class="form-group">
        <label>Название модели</label>
        <input
          class="form-control"
          name="title"
          [(ngModel)]="phone.title"
          #phoneTitle="ngModel"
        />
      </div>
      <div class="form-group">
        <label>Цена</label>
        <input
          type="number"
          class="form-control"
          name="price"
          [(ngModel)]="phone.price"
          #phonePrice="ngModel"
        />
      </div>
      <div class="form-group">
        <label>Производитель</label>
        <select
          class="form-control"
          name="company"
          [(ngModel)]="phone.company"
          #phoneCompany="ngModel"
        >
          <option
            *ngFor="let comp of companies"
            [value]="comp"
          >
            {{ comp }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <button
          class="btn btn-default"
          (click)="
            addPhone(phoneTitle, phonePrice, phoneCompany)
          "
        >
          Добавить
        </button>
      </div>
      <div>
        <p>
          {{ phoneTitle.name }} : {{ phoneTitle.model }}
        </p>
        <p>
          {{ phonePrice.name }} : {{ phonePrice.model }}
        </p>
        <p>
          {{ phoneCompany.name }} : {{ phoneCompany.model }}
        </p>
      </div>
    </div>
  `,
})
export class AppComponent {
  phone: Phone = new Phone('', 0, 'Samsung')
  companies: string[] = [
    'Apple',
    'Huawei',
    'Xiaomi',
    'Samsung',
    'LG',
    'Motorola',
    'Alcatel',
  ]

  addPhone(title: NgModel, price: NgModel, comp: NgModel) {
    console.log(title)
    console.log(price)
    console.log(comp)
  }
}
```

Здесь для каждого поля определена переменная типа `NgModel: #phoneTitle="ngModel"` или `#phonePrice="ngModel"`. Каждая из этих переменных представляет модель и ее состояние для соответствующего поля ввода. Используя свойства объекта `NgModel`, мы можем получить данные о состоянии модели. В частности, с помощью свойства name мы можем получить название поля ввода (значение атрибута `name`), к которому привязана переменная. А с помощью свойств `model` и `viewModel` можно получить модель или конкретное значение этого поля. Например, далее выводится блок с введенными значениями:

```html
<div>
  <p>{{phoneTitle.name}} : {{phoneTitle.model}}</p>
  <p>{{phonePrice.name}} : {{phonePrice.model}}</p>
  <p>{{phoneCompany.name}} : {{phoneCompany.model}}</p>
</div>
```

Ну и также мы можем передавать подобные переменные в обработчики событий и обрабатывать в коде компонента. Как в данном случае, данные переменные выводятся на консоль.

![Скриншот проекта](model-1.png)

## Обработка изменения модели

Иногда возникает необходимость проконтролировать изменение модели. Для этого в Angular мы можем обрабатывать встроенные события, в частности, событие `change`. Например, изменим поле ввода для модели телефона:

```html
<input
  class="form-control"
  name="title"
  [(ngModel)]="phone.title"
  #phoneTitle="ngModel"
  (change)="onTitleChange()"
/>
```

При срабатывании события `change` будет вызываться метод `onTitleChange()`. Теперь определим данный метод в классе компонента:

```typescript
onTitleChange(){

    if(this.phone.title=="нет")
        this.phone.title = "неизвестно";
}
```

Допустим, мы не хотим, чтобы пользователь вводил слово "нет", и динамически заменяем это слово на некоторую другую строку.

Обработка данного события имеет один минус — событие срабатывает только тогда, когда мы покинем данное поле ввода. Если же нам надо динамически при вводе каждого нового символа обрабатывать ввод, то в этом случае более удобным решением будет обработка события `ngModelChange`. Это событие не соотносится ни с каким стандартным событием элемента html. Функциональность `ngModelChange` привносится в элемент через применение к нему директивы `NgModel`. Например:

```html
<input
  class="form-control"
  name="title"
  [(ngModel)]="phone.title"
  #phoneTitle="ngModel"
  (ngModelChange)="onTitleChange()"
/>
```

Код метода `onTitleChange()` остается тем же, что и выше.
