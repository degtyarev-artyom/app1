export interface IStaffState {
  currentTheme: string
  currentThemeCode: string
}

export enum EStaffActionTypes {
  SET_THEME = 'SET_THEME',
  SET_THEME_CODE = 'SET_THEME_CODE'
}

interface IStaffSetTheme {
  type: EStaffActionTypes.SET_THEME
  payload: string
}

interface IStaffSetThemeCode {
  type: EStaffActionTypes.SET_THEME_CODE
  payload: string
}

export type TStaffActions = IStaffSetTheme | IStaffSetThemeCode

export interface IStaffActions {
  setTheme: (payload: string) => TStaffActions
  setThemeCode: (payload: string) => TStaffActions
}
