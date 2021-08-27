import { action } from 'redux/redux-functions'

export const staffActionTypes = {
  SET_THEME_MAIN: 'SET_THEME_MAIN',
  SET_THEME_CODE: 'SET_THEME_CODE'
}

export const staffActions = {
  setThemeMain: theme => action(staffActionTypes.SET_THEME_MAIN, { theme }),
  setThemeCode: theme => action(staffActionTypes.SET_THEME_CODE, { theme })
}
