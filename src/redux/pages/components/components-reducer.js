// import { componentsActionTypes } from './components-actions'

import { ButtonProps } from "components/pages/components/button/button"
import { componentsActionTypes } from "./components-actions"

const initialState = {
  buttonChildren: 'Button',
  buttonSize: ButtonProps.sizes.m,
  buttonTheme: ButtonProps.themes.green,
}

export const componentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case componentsActionTypes.BUTTON_CHANGE_CHILDREN:
      return {
        ...state,
        buttonChildren: action.children
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
    default:
      return state
  }
}
