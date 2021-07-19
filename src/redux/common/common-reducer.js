import { commonActionTypes } from "./common-actions"

const initialState = {
  currentTheme: 'default',
}

export const commonReducer = (state = initialState, action) => {
  switch(action.type) {
    case commonActionTypes.SET_THEME:
      return {
        ...state,
        currentTheme: action.theme
      }
    default:
      return state
  }
}
