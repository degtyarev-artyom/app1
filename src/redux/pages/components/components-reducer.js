import { componentsActionTypes } from './components-actions'

const initialState = {
  counterValue: 0,
}

export const componentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case componentsActionTypes.COUNTER_INCREMENT:
      return {
        ...state,
        counterValue: state.counterValue + 1
      }
    case componentsActionTypes.COUNTER_DECREMENT:
      return {
        ...state,
        counterValue: state.counterValue - 1
      }
    case componentsActionTypes.COUNTER_CLEAR:
      return {
        ...state,
        counterValue: 0
      }
    default:
      return state
  }
}
