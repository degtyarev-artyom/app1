import { action } from 'redux/common/data-actions'

export const componentsActionTypes = {
  COUNTER_INCREMENT: 'COUNTER_INCREMENT',
  COUNTER_INCREMENT_ASYNC: 'COUNTER_INCREMENT_ASYNC',
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',
  COUNTER_CLEAR: 'COUNTER_CLEAR',
}

export const componentsActions = {
  counterIncrement: () => action(componentsActionTypes.COUNTER_INCREMENT),
  counterIncrementAsync: () => action(componentsActionTypes.COUNTER_INCREMENT_ASYNC),
  counterDecrement: () => action(componentsActionTypes.COUNTER_DECREMENT),
  counterClear: () => action(componentsActionTypes.COUNTER_CLEAR),
}
