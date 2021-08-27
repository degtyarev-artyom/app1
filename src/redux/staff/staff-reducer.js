import { staffActionTypes } from "./staff-actions"

const initialState = {
  currentThemeMain: 'default',
  currentThemeCode: 'darcula'
}

export const staffReducer = (state = initialState, action) => {
  switch(action.type) {
    case staffActionTypes.SET_THEME_MAIN:
      return {
        ...state,
        currentThemeMain: action.theme
      }
    case staffActionTypes.SET_THEME_CODE:
      return {
        ...state,
        currentThemeCode: action.theme
      }
    default:
      return state
  }
}
