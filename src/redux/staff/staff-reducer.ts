import { staffThemes, staffThemesCode } from "styling/staff/staff-styling-themes"
import { EStaffActionTypes, IStaffState, TStaffActions } from "./staff-types"

const initialState: IStaffState = {
  currentTheme: staffThemes.default,
  currentThemeCode: staffThemesCode.darcula
}

export const staffReducer = (state = initialState, action: TStaffActions): IStaffState => {
  switch(action.type) {
    case EStaffActionTypes.SET_THEME:
      return {
        ...state,
        currentTheme: action.payload
      }
    case EStaffActionTypes.SET_THEME_CODE:
      return {
        ...state,
        currentThemeCode: action.payload
      }
    default:
      return state
  }
}
