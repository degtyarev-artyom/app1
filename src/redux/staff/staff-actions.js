import { action } from 'redux/redux-functions'

export const staffActionTypes = {
  SET_THEME: 'SET_THEME',
  SET_THEME_CODE: 'SET_THEME_CODE'
}

export const staffActions = {
  setTheme: theme => action(staffActionTypes.SET_THEME, { theme }),
  setThemeCode: theme => action(staffActionTypes.SET_THEME_CODE, { theme })
}
