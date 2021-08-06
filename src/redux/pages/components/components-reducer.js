import { ButtonProps } from "components/pages/components/button/button"
import { componentsActionTypes } from "./components-actions"

const initialState = {
  buttonChildren: 'Button',
  buttonExternalClass: 'external-class-name',
  buttonSize: ButtonProps.sizes.m,
  buttonTheme: ButtonProps.themes.green,
  buttonNoFocus: 'false',
  buttonShowHideCode: 'show'
}

export const componentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case componentsActionTypes.BUTTON_CHANGE_CHILDREN:
      return {
        ...state,
        buttonChildren: action.children
      }
    case componentsActionTypes.BUTTON_CHANGE_EXTERNAL_CLASS:
      return {
        ...state,
        buttonExternalClass: action.externalClass
      }
    case componentsActionTypes.BUTTON_CHANGE_SIZE:
      return {
        ...state,
        buttonSize: action.size
      }
    case componentsActionTypes.BUTTON_CHANGE_THEME:
      return {
        ...state,
        buttonTheme: action.theme
      }
    case componentsActionTypes.BUTTON_CHANGE_NO_FOCUS:
      return {
        ...state,
        buttonNoFocus: action.focus
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
