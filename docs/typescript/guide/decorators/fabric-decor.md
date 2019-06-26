---
layout: default
title: Фабрики декораторов
nav_order: 4
parent: Декораторы
grand_parent: Руководство по Typescript
---

<!-- prettier-ignore-start -->
# Фабрики декораторов
{: .no_toc }
<!-- prettier-ignore-end -->

<!-- prettier-ignore -->
1. TOC
{:toc}

Декоратор класса, свойства, метода представляет обычную функцию, которая принимает заданное количество параметров. Но что если мы хотим передавать в декоратор какие-то дополнительные данные, которые могут быть известны только при применении декоратора? В этом случае мы можем сконструировать фабрику декораторов (factory decorator). Фабрика декоратора представляет функцию, которая в свою очерель возвращает функцию декоратора.

Например, определим протейшую функцию декоратора:

```typescript
function regex(pattern: string) {
  let expression = new RegExp(pattern)
  return function regex(target: Object, propertyName: string) {
    let propertyValue = this[propertyName]

    // геттер
    var getter = function() {
      return propertyValue
    }

    // сеттер
    var setter = function(newVal) {
      let isValid: boolean = expression.test(newVal)
      if (isValid === false) {
        throw new Error(`Value ${newVal} does not match ${pattern}`)
      } else {
        console.log(`${newVal} is valid`)
      }
    }
    // удаляем свойство
    if (delete this[propertyName]) {
      // И создаем новое свойство с геттером и сеттером
      Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter
      })
    }
  }
}

class Account {
  @regex('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  email: string

  @regex('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$')
  phone: string

  constructor(email: string, phone: string) {
    this.email = email
    this.phone = phone
  }
}

let acc = new Account('bir@gmail.com', '+23451235678')
acc.email = 'bir_iki_yedi'
```

Декоратор `regex` принимает в качестве параметра регулярное выражение и при этом возвращает функцию декоратора свойства. В декораторе в сеттере при установке для свойства нового значения проверяется соответствие нового значения регулярному выражению. Если нет соответствия, то генерируется ошибка.

Далее в классе `Account` к его свойствам `email` и `phone` применяется декоратор `regex`, но в каждом случае в декоратор передается свое регулярное выражение, с помощью которого можно произвести проверку:

![Фабрики декораторов](fabric-decor-1.png)

## Ссылки

- [Фабрики декораторов](https://metanit.com/web/typescript/6.4.php)
