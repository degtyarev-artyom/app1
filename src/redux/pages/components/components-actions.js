import { action } from 'redux/redux-functions'

export const componentsActionTypes = {
  BUTTON_CHILDREN: 'BUTTON_CHILDREN',
  BUTTON_EXTERNAL_CLASS: 'BUTTON_EXTERNAL_CLASS',
  BUTTON_THEME: 'BUTTON_THEME',
  BUTTON_SIZE: 'BUTTON_SIZE',
  BUTTON_TYPE: 'BUTTON_TYPE',
  BUTTON_FOCUS: 'BUTTON_FOCUS',
  BUTTON_ACTIVE: 'BUTTON_ACTIVE',
  BUTTON_DISABLED: 'BUTTON_DISABLED',
  BUTTON_BLOCK: 'BUTTON_BLOCK',
  BUTTON_PENDING: 'BUTTON_PENDING',
  BUTTON_SHOW_HIDE_CODE: 'BUTTON_SHOW_HIDE_CODE'
}

export const componentsActions = {
  buttonChildren: children => action(componentsActionTypes.BUTTON_CHILDREN, { children }),
  buttonExternalClass: externalClass => action(componentsActionTypes.BUTTON_EXTERNAL_CLASS, { externalClass }),
  buttonTheme: theme => action(componentsActionTypes.BUTTON_THEME, { theme }),
  buttonSize: size => action(componentsActionTypes.BUTTON_SIZE, { size }),
  buttonType: buttonType => action(componentsActionTypes.BUTTON_TYPE, { buttonType }),
  buttonFocus: focus => action(componentsActionTypes.BUTTON_FOCUS, { focus }),
  buttonActive: active => action(componentsActionTypes.BUTTON_ACTIVE, { active }),
  buttonDisabled: disabled => action(componentsActionTypes.BUTTON_DISABLED, { disabled }),
  buttonBlock: block => action(componentsActionTypes.BUTTON_BLOCK, { block }),
  buttonPending: pending => action(componentsActionTypes.BUTTON_PENDING, { pending }),
  buttonShowHideCode: code => action(componentsActionTypes.BUTTON_SHOW_HIDE_CODE, { code }),
}
