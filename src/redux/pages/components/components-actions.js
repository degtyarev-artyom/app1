import { action } from 'redux/redux-functions'

export const componentsActionTypes = {
  BUTTON_CHANGE_CHILDREN: 'BUTTON_CHANGE_CHILDREN',
  BUTTON_CHANGE_SIZE: 'BUTTON_CHANGE_SIZE',
  BUTTON_CHANGE_THEME: 'BUTTON_CHANGE_THEME',
  BUTTON_CHANGE_NO_FOCUS: 'BUTTON_CHANGE_NO_FOCUS',
  BUTTON_SHOW_HIDE_CODE: 'BUTTON_SHOW_HIDE_CODE'
}

export const componentsActions = {
  buttonChangeChildren: children => action(componentsActionTypes.BUTTON_CHANGE_CHILDREN, { children }),
  buttonChangeSize: size => action(componentsActionTypes.BUTTON_CHANGE_SIZE, { size }),
  buttonChangeTheme: theme => action(componentsActionTypes.BUTTON_CHANGE_THEME, { theme }),
  buttonChangeNoFocus: focus => action(componentsActionTypes.BUTTON_CHANGE_NO_FOCUS, { focus }),
  buttonShowHideCode: code => action(componentsActionTypes.BUTTON_SHOW_HIDE_CODE, { code }),
}
