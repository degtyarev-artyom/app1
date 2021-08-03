import { staffActionTypes } from "./staff-actions"

const initialState = {
  currentTheme: 'default',
}

export const staffReducer = (state = initialState, action) => {
  switch(action.type) {
    case staffActionTypes.SET_THEME:
      return {
        ...state,
        currentTheme: action.theme
      }
    default:
      return state
  }
}
