import { action } from 'redux/common/data-actions'

export const commonActionTypes = {
  SET_THEME: 'SET_THEME',
}

export const commonActions = {
  setTheme: theme => action(commonActionTypes.SET_THEME, { theme }),
}
