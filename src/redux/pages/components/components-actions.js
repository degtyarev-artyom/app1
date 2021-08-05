import { action } from 'redux/redux-functions'

export const componentsActionTypes = {
  BUTTON_CHANGE_CHILDREN: 'BUTTON_CHANGE_CHILDREN',
  BUTTON_CHANGE_SIZE: 'BUTTON_CHANGE_SIZE',
  BUTTON_CHANGE_THEME: 'BUTTON_CHANGE_THEME',
}

export const componentsActions = {
  buttonChangeChildren: children => action(componentsActionTypes.BUTTON_CHANGE_CHILDREN, { children }),
  buttonChangeSize: size => action(componentsActionTypes.BUTTON_CHANGE_SIZE, { size }),
  buttonChangeTheme: theme => action(componentsActionTypes.BUTTON_CHANGE_THEME, { theme }),
}
