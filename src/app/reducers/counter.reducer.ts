import { createReducer, on } from '@ngrx/store';
import * as counterActions from '../actions/counter.actions'

export type State = number;

const initialState = 0;

export const reducer = createReducer(
  initialState,
  on(counterActions.increment, (state, _action) => state + 1),
  on(counterActions.decrement, (state, _action) => state - 1),
  on(counterActions.reset, () => initialState),
)