import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  ActionReducer,
  Action
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {
  reducer as counterReducer,
  State as CounterState
} from './counter.reducer';
import { environment } from '../../environments/environment';

export interface State {
  router: fromRouter.RouterState;
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  counter: counterReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: Action): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export const getCounterState = createFeatureSelector<CounterState>('counter');

export const { selectUrl } = fromRouter.getSelectors();

export const getCount = createSelector(
  getCounterState,
  counter => counter
);
