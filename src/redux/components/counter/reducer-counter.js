import { actionTypesCounter } from "./actions-counter"

const initialState = {
  value: 0
}

export const reducerCounter = (state = initialState, action) => {
  switch(action.type) {
    case actionTypesCounter.INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }
    case actionTypesCounter.DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state
  }
}
