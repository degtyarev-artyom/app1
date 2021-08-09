import { action } from 'redux/redux-functions'

export const componentsActionTypes = {
  BUTTON_CHANGE_CHILDREN: 'BUTTON_CHANGE_CHILDREN',
  BUTTON_CHANGE_EXTERNAL_CLASS: 'BUTTON_CHANGE_EXTERNAL_CLASS',
  BUTTON_CHANGE_THEME: 'BUTTON_CHANGE_THEME',
  BUTTON_CHANGE_SIZE: 'BUTTON_CHANGE_SIZE',
  BUTTON_CHANGE_TYPE: 'BUTTON_CHANGE_TYPE',
  BUTTON_CHANGE_FOCUS: 'BUTTON_CHANGE_FOCUS',
  BUTTON_CHANGE_ACTIVE: 'BUTTON_CHANGE_ACTIVE',
  BUTTON_SHOW_HIDE_CODE: 'BUTTON_SHOW_HIDE_CODE'
}

export const componentsActions = {
  buttonChangeChildren: children => action(componentsActionTypes.BUTTON_CHANGE_CHILDREN, { children }),
  buttonChangeExternalClass: externalClass => action(componentsActionTypes.BUTTON_CHANGE_EXTERNAL_CLASS, { externalClass }),
  buttonChangeTheme: theme => action(componentsActionTypes.BUTTON_CHANGE_THEME, { theme }),
  buttonChangeSize: size => action(componentsActionTypes.BUTTON_CHANGE_SIZE, { size }),
  buttonChangeType: buttonType => action(componentsActionTypes.BUTTON_CHANGE_TYPE, { buttonType }),
  buttonChangeFocus: focus => action(componentsActionTypes.BUTTON_CHANGE_FOCUS, { focus }),
  buttonChangeActive: active => action(componentsActionTypes.BUTTON_CHANGE_ACTIVE, { active }),
  buttonShowHideCode: code => action(componentsActionTypes.BUTTON_SHOW_HIDE_CODE, { code }),
}
