---
description: Директивы-атрибуты предназначены для изменения поведения элемента или его отображения
---

# Тестирование директив

Директивы-атрибуты предназначены для изменения поведения элемента или его отображения.

!!! note ""

    Здесь рассматриваются только тестирование директив атрибутов, поскольку структурными директивами по своей сути являются компоненты, процесс тестирования которых рассмотрен [здесь](components-unit-testing.md).

Ниже представлен листинг кода директивы, которая меняет цвет фона элемента, если в его текстовом значении имеется вхождение переданной последовательности символов. Цвет фона по умолчанию серый (`#a9a9a9`), но также он может быть задан пользователем.

_match-string.directive.ts_

```ts
@Directive({
  selector: '[matchString]',
})
export class HintHotKeyDirective implements OnChanges {
  @Input('matchString') matchString: string
  @Input() bgColor: string = '#a9a9a9'

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      (changes.matchString &&
        changes.matchString.currentValue) ||
      (changes.bgColor && changes.bgColor.currentValue)
    ) {
      this._search(changes.matchString.currentValue)
    }
  }

  private _search(match: string) {
    if (
      this.el.nativeElement.textContent.indexOf(match) != -1
    )
      this.el.nativeElement.style.backgroundColor = this.bgColor
    else this.el.nativeElement.style.backgroundColor = ''
  }
}
```

Хорошей практикой для тестирования директив считается создание тестового компонента, который описывает все случаи ее применения. Такой подход объясняется тем, что реальный компонент приложения может использовать лишь часть функционала директивы и с его помощью будет просто невозможно проверить полный функционал.

_match-string-test.component.ts_

```ts
@Component({
  selector: 'match-string-test',
  template: `
    <div>
      <h3 [matchString]="match">
        Match string test component
      </h3>

      <p [matchString]="match" [bgColor]="color">
        This is a component for testing all use cases of
        [matchString] directive.
      </p>
    </div>
  `,
})
export class MatchStringTestComponent {
  match: string
  color: string

  constructor() {}
}
```

_match-string-test.component.spec.ts_

```ts
describe('[matchString] directive', () => {
  let fixture: ComponentFixture<MatchStringTestComponent>
  let comp: MatchStringTestComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MatchStringDirective,
        MatchStringTestComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(
          MatchStringTestComponent
        )
        comp = fixture.componentInstance
      })
  }))

  it('should color only p background', () => {
    comp.match = 'directive'
    fixture.detectChanges()

    const el = fixture.debugElement.queryAll(
      By.directive(MatchStringDirective)
    )
    const h3 = el[0].nativeElement
    const p = el[1].nativeElement

    expect(h3.style.backgroundColor).toBe('')
    expect(p.style.backgroundColor).toBe('#a9a9a9')
  })

  it('should color only p background with color value', () => {
    comp.match = 'directive'
    comp.color = '#fafad2'
    fixture.detectChanges()

    const el = fixture.debugElement.queryAll(
      By.directive(MatchStringDirective)
    )
    const p = el[1].nativeElement

    expect(p.style.backgroundColor).toBe('#fafad2')
  })
})
```

Обратите внимание, что в конфигурации тестового модуля указывается свойство `schemas` со значением `[NO_ERRORS_SCHEMA]`, которое отключает генерацию исключений Angular в случае обнаружения необъявленных компонентов или директив.

Доступ к элементам при тестировании директив осуществляется с помощью метода `directive()` класса `By`. Также допустимо использование `querySelector()` и `By.css()`.

Проверить применяемые к элементу стили через свойство `styles` объекта `DebugElement`, а все устанавливаемые директивой пользовательские свойства элемента доступны в свойстве `properties`.
