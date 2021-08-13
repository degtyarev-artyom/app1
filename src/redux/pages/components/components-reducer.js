import { ButtonProps } from "components/pages/components/button/button"
import { componentsActionTypes } from "./components-actions"

const initialState = {
  buttonChildren: 'Button',
  buttonExternalClass: 'external-class-name',
  buttonTheme: ButtonProps.themes.green,
  buttonSize: ButtonProps.sizes.xl,
  buttonType: ButtonProps.types.normal,
  buttonFocus: 'true',
  buttonActive: 'true',
  buttonDisabled: 'false',
  buttonBlock: 'false',
  buttonPending: 'false',
  buttonShowHideCode: 'hide'
}

export const componentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case componentsActionTypes.BUTTON_CHILDREN:
      return {
        ...state,
        buttonChildren: action.children
      }
    case componentsActionTypes.BUTTON_EXTERNAL_CLASS:
      return {
        ...state,
        buttonExternalClass: action.externalClass
      }
    case componentsActionTypes.BUTTON_SIZE:
      return {
        ...state,
        buttonSize: action.size
      }
    case componentsActionTypes.BUTTON_THEME:
      return {
        ...state,
        buttonTheme: action.theme
      }
    case componentsActionTypes.BUTTON_TYPE:
      return {
        ...state,
        buttonType: action.buttonType
      }
    case componentsActionTypes.BUTTON_FOCUS:
      return {
        ...state,
        buttonFocus: action.focus
      }
    case componentsActionTypes.BUTTON_ACTIVE:
      return {
        ...state,
        buttonActive: action.active
      }
    case componentsActionTypes.BUTTON_DISABLED:
      return {
        ...state,
        buttonDisabled: action.disabled
      }
    case componentsActionTypes.BUTTON_BLOCK:
      return {
        ...state,
        buttonBlock: action.block
      }
    case componentsActionTypes.BUTTON_PENDING:
      return {
        ...state,
        buttonPending: action.pending
      }
    case componentsActionTypes.BUTTON_SHOW_HIDE_CODE:
      return {
        ...state,
        buttonShowHideCode: action.code
      }
    default:
      return state
  }
}
