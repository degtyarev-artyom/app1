import { sandboxActionTypes } from './sandbox-actions'

const initialState = {
  counterValue: 0,
}

export const sandboxReducer = (state = initialState, action) => {
  switch(action.type) {
    case sandboxActionTypes.COUNTER_INCREMENT:
      return {
        ...state,
        counterValue: state.counterValue + 1
      }
    case sandboxActionTypes.COUNTER_DECREMENT:
      return {
        ...state,
        counterValue: state.counterValue - 1
      }
    case sandboxActionTypes.COUNTER_CLEAR:
      return {
        ...state,
        counterValue: 0
      }
    default:
      return state
  }
}
