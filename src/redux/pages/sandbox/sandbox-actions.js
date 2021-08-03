import { action } from 'redux/redux-functions'

export const sandboxActionTypes = {
  COUNTER_INCREMENT: 'COUNTER_INCREMENT',
  COUNTER_INCREMENT_ASYNC: 'COUNTER_INCREMENT_ASYNC',
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',
  COUNTER_CLEAR: 'COUNTER_CLEAR',
}

export const sandboxActions = {
  counterIncrement: () => action(sandboxActionTypes.COUNTER_INCREMENT),
  counterIncrementAsync: () => action(sandboxActionTypes.COUNTER_INCREMENT_ASYNC),
  counterDecrement: () => action(sandboxActionTypes.COUNTER_DECREMENT),
  counterClear: () => action(sandboxActionTypes.COUNTER_CLEAR),
}
