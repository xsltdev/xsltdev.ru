---
description: Тестирование pipe самое легкое, поскольку обычно его класс имеет один единственный метод transform() и не нуждается в сервисах, а сами тесты даже не требуют утилиты TestBed
---

# Тестирование Pipe

Тестирование pipe самое легкое, поскольку обычно его класс имеет один единственный метод `transform()` и не нуждается в сервисах, а сами тесты даже не требуют утилиты `TestBed`.

Рассмотрим пример тестирования фильтра `cutTxt`, который обрезает строку, если ее длина превышает переданное значение, и добавляет в ее конец многоточие.

_cut-txt.pipe.ts_

```ts
@Pipe({ name: 'cutTxt' })
export class CutTxtPipe implements PipeTransform {
  transform(text: string, length: number): string {
    if (text.length <= length) return text
    else return `${text.substr(0, length)}...`
  }
}
```

_cut-txt.pipe.spec.ts_

```ts
describe('CutTxtPipe', () => {
  let cutTxt = new CutTxtPipe()

  it('doesn\'t transform "Hello, World!"', () => {
    expect(cutTxt.transform('Hello, World!', 50)).toBe(
      'Hello, World!'
    )
  })

  it('transforms "Hello, World!" to "Hello..."', () => {
    expect(cutTxt.transform('Hello, World!', 5)).toBe(
      'Hello...'
    )
  })
})
```

Для полноценного тестирования pipe также следует проверять корректность его работы в шаблоне компонента.

_cut-txt-pipe-test.component.ts_

```ts
@Component({
  selector: 'cut-txt-pipe-test',
  template: `
    <p id="case-1">{{ 'Hello, World!' | cutTxt: 50 }}</p>
    <p id="case-2">{{ 'Hello, World!' | cutTxt: 5 }}</p>
  `,
})
export class CutTxtPipeTestComponent {
  constructor() {}
}
```

_cut-txt-pipe-test.component.spec.ts_

```ts
describe('cutTxt in component template', () => {
  let fixture: ComponentFixture<CutTxtPipeTestComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CutTxtPipeTestComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(
          CutTxtPipeTestComponent
        )
      })
  }))

  it('#case-1 should contain "Hello, World"', () => {
    const el = fixture.debugElement.nativeElement.query(
      '#case-1'
    )
    expect(el.textContent).toBe('Hello, World!')
  })

  it('#case-2 should contain "Hello..."', () => {
    const el = fixture.debugElement.nativeElement.query(
      '#case-2'
    )
    expect(el.textContent).toBe('Hello...')
  })
})
```

## Ссылки

- [Pipes](https://angular.io/guide/pipes)
