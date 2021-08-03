import { action } from 'redux/redux-functions'

export const staffActionTypes = {
  SET_THEME: 'SET_THEME',
}

export const staffActions = {
  setTheme: theme => action(staffActionTypes.SET_THEME, { theme }),
}
