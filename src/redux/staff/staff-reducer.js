import { staffThemes, staffThemesCode } from "styling/staff/staff-styling-themes"
import { staffActionTypes } from "./staff-actions"

const initialState = {
  currentTheme: staffThemes.default,
  currentThemeCode: staffThemesCode.darcula
}

export const staffReducer = (state = initialState, action) => {
  switch(action.type) {
    case staffActionTypes.SET_THEME:
      return {
        ...state,
        currentTheme: action.theme
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
