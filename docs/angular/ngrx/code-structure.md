# Организация кода

Для того чтобы использование библиотеки Angular NgRx стало оправданным и максимально эффективным, необходимо правильно организовать и структурировать код, формирующий хранилище (`Store`) приложения.

В корне модуля создайте директорию `store` со следующей структурой:

- `actions`;
- `effects`;
- `models`;
- `reducers`;
- `index.ts`.

В директории `actions` хранятся файлы с описанием всех действий (NgRx Actions). В одном файле должны описываться только взаимосвязанные действия и именоваться файл должен соответственно, например, если вы реализовываете авто каталог, то файл с действиями будет называться `cars.actions.ts`.

В `effects` располагаются все побочные эффекты (NgRx Effects) авто каталога.

Директория `models` содержит описание моделей всех сущностей, используемых при разработке. Для каждой сущности должен создаваться отдельный файл.

В `reducers` находятся все редюсеры (NgRx Reducers) для изменения состояния хранилища. Причем каждый редюсер должен также содержать описание части состояния, за обработку которой он ответственен. Здесь же создается Entity Adapter для управления массивом сущностей.

В `index.ts` импортируются все созданные редюсеры и описывается полная модель хранилища, которое описывает директория store. Далее эта модель передается в качестве параметра методу `StoreModule.forRoot()`. Также здесь описываются и экспортируются все селекторы хранилища.

Пример описания хранилища авто каталога.

_store/actions/cars.actions.ts_

```ts
import { Action } from '@ngrx/store'
import { Update } from '@ngrx/entity'

import { Car } from '../models/car.model'

export enum CarActionTypes {
  AddCarRequest = '[Create/Edit Car] Add Car Request',
  CarAddedSuccess = '[Create/Edit Car] Car Added Success',
  CarAddedError = '[Create/Edit Car] Car Added Error',

  UpdateCarRequest = '[Create/Edit Car] Update Car Request',
  CarUpdatedSuccess = '[Create/Edit Car] Car Updated Success',
  CarUpdatedError = '[Create/Edit Car] Car Updated Error',

  LoadCars = '[Cars list] Load Cars',
  CarsLoadedSuccess = '[Cars list] Cars Loaded Success',
  CarsLoadedError = '[Cars list] Cars Loaded Error',

  DeleteCarRequest = '[Cars list] Delete Car Request',
  CarDeletedSuccess = '[Cars list] Car Deleted Success',
  CarDeletedError = '[Cars list] Car Deleted Error',
}

export class AddCarRequest implements Action {
  readonly type = CarActionTypes.AddCarRequest

  constructor(public payload: { car: Car }) {}
}

export class CarAddedSuccess implements Action {
  readonly type = CarActionTypes.CarAddedSuccess

  constructor(public payload: { car: Car }) {}
}

export class CarAddedError implements Action {
  readonly type = CarActionTypes.CarAddedError
}

export class UpdateCarRequest implements Action {
  readonly type = CarActionTypes.UpdateCarRequest

  constructor(public payload: { car: Car }) {}
}

export class CarUpdatedSuccess implements Action {
  readonly type = CarActionTypes.CarUpdatedSuccess

  constructor(public payload: { car: Update<Car> }) {}
}

export class CarUpdatedError implements Action {
  readonly type = CarActionTypes.CarUpdatedError
}

export class LoadCars implements Action {
  readonly type = CarActionTypes.LoadCars
}

export class CarsLoadedSuccess implements Action {
  readonly type = CarActionTypes.CarsLoadedSuccess

  constructor(public payload: { cars: Car[] }) {}
}

export class CarsLoadedError implements Action {
  readonly type = CarActionTypes.CarsLoadedError
}

export class DeleteCarRequest implements Action {
  readonly type = CarActionTypes.DeleteCarRequest

  constructor(public payload: { id: number }) {}
}

export class CarDeletedSuccess implements Action {
  readonly type = CarActionTypes.CarDeletedSuccess

  constructor(public payload: { id: number }) {}
}

export class CarDeletedError implements Action {
  readonly type = CarActionTypes.CarDeletedError
}

export type CarUnion =
  | AddCarRequest
  | CarAddedSuccess
  | CarAddedError
  | UpdateCarRequest
  | CarUpdatedSuccess
  | CarUpdatedError
  | LoadCars
  | CarsLoadedSuccess
  | CarsLoadedError
  | DeleteCarRequest
  | CarDeletedSuccess
  | CarDeletedError
```

_store/effects/cars.effects.ts_

```ts
import {
  CarActionTypes,
  CarsLoadedSuccess,
  CarsLoadedError,
  AddCarRequest,
  CarAddedSuccess,
  CarAddedError,
  DeleteCarRequest,
  CarDeletedSuccess,
  CarDeletedError,
} from '../actions/car.actions'

import { Car } from '../models/car.model'

import { CarsService } from '../../services/cars/cars.service'

@Injectable({ providedIn: 'root' })
export class CarEffects {
  @Effect()
  loadCars$ = this.actions$.pipe(
    ofType(CarActionTypes.LoadCars),
    mergeMap(() =>
      this.carsService.getCars().pipe(
        map(
          (cars: Car[]) =>
            new CarsLoadedSuccess({ cars: cars })
        ),
        catchError(() => of(new CarsLoadedError()))
      )
    )
  )

  @Effect()
  addCar$ = this.actions$.pipe(
    ofType(CarActionTypes.AddCarRequest),
    mergeMap((action: AddCarRequest) =>
      this.carsService.createCar(action.payload.car).pipe(
        map(
          (car: Car) => new CarAddedSuccess({ car: car })
        ),
        catchError(() => of(new CarAddedError()))
      )
    )
  )

  @Effect()
  deleteCar$ = this.actions$.pipe(
    ofType(CarActionTypes.DeleteCarRequest),
    mergeMap((action: DeleteCarRequest) =>
      this.carsService.deleteCar(action.payload.id).pipe(
        map(
          (id: number) => new CarDeletedSuccess({ id: id })
        ),
        catchError(() => of(new CarDeletedError()))
      )
    )
  )

  constructor(
    private actions$: Actions,
    private carsService: CarsService
  ) {}
}
```

_store/models/cars.model.ts_

```ts
export interface Car {
  ID?: number
  MODEL: string
  YEAR: number
  ENGINE_TYPE: string
  ENGINE_VOLUME: string
}
```

_store/reducers/cars.reducer.ts_

```ts
import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity'

import { Car } from '../models/car.model'
import {
  CarActionTypes,
  CarUnion,
} from '../actions/car.actions'

export const adapter: EntityAdapter<Car> = createEntityAdapter<
  Car
>({
  selectId: (car: Car) => car.ID,
})

export interface State extends EntityState<Car> {
  pending: boolean
}

export const initialState: State = adapter.getInitialState({
  pending: false,
})

export const reducer = (
  state: State = initialState,
  action: CarUnion
) => {
  switch (action.type) {
    case CarActionTypes.AddCarRequest:
      return adapter.addOne(action.payload.car, {
        ...state,
        pending: false,
      })
    case CarActionTypes.CarAddedSuccess:
      return { ...state, pending: true }
    case CarActionTypes.CarAddedError:
      return { ...state, pending: false }

    case CarActionTypes.UpdateCarRequest:
      return { ...state, pending: true }
    case CarActionTypes.CarUpdatedSuccess:
      return adapter.updateOne(action.payload.car, {
        ...state,
        pending: false,
      })
    case CarActionTypes.CarUpdatedError:
      return { ...state, pending: false }

    case CarActionTypes.LoadCars:
      return { ...state, pending: true }
    case CarActionTypes.CarsLoadedSuccess:
      return adapter.addAll(action.payload.cars, {
        ...state,
        pending: false,
      })
    case CarActionTypes.CarsLoadedError:
      return { ...state, pending: false }

    case CarActionTypes.DeleteCarRequest:
      return { ...state, pending: true }
    case CarActionTypes.CarDeletedSuccess:
      return adapter.removeOne(action.payload.id, {
        ...state,
        pending: false,
      })
    case CarActionTypes.CarDeletedError:
      return { ...state, pending: false }

    default:
      return state
  }
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()

export const selectCarsIds = selectIds
export const selectCarEntities = selectEntities
export const selectAllCars = selectAll
export const selectCarTotal = selectTotal
```

_store/index.ts_

```ts
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'

import * as cars from './reducers/car.reducer'

export interface State {
  cars: cars.State
}

export const reducers: ActionReducerMap<State> = {
  cars: cars.reducer,
}

export const selectAdminState = createFeatureSelector<
  State
>('admin')
export const selectCarsState = createSelector(
  selectAdminState,
  (state: State) => state.cars
)

export const selectAllCars = createSelector(
  selectCarsState,
  cars.selectAllCars
)

export const selectCarsPending = createSelector(
  selectCarsState,
  (state: cars.State) => state.pending
)
```

_catalog.module.ts_

```ts
import { reducers } from './store'
import { CarEffects } from './store/effects/car.effects'

@NgModule({
  imports: [
    //...
    EffectsModule.forFeature([CarEffects]),
    StoreModule.forFeature('catalog', reducers),
  ],
  //...
})
export class CatalogModule {}
```

_app.module.ts_

```ts
@NgModule({
  imports: [
    //...
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  //...
})
export class AppModule {}
```

Если Angular приложение состоит из нескольких функциональных модулей, то каждый модуль должен содержать свою директорию `store`, при этом хранилище должно регистрироваться в модуле с использованием `StoreModule.forFeature()`, но `StoreModule.forRoot()` должен быть вызван в корневом модуле даже если у него нет своего хранилища. То же самое касается и NgRx Effects.
