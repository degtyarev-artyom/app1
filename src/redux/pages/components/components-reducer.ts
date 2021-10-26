import { ButtonProps } from "components/pages/components/button-block/button/button"
import { IComponentsState, EComponentsActionTypes, TComponentsActions } from "./components-types"

const initialState: IComponentsState = {
  buttonChildren: 'Button',
  buttonExternalClass: 'external-class-name',
  buttonTheme: ButtonProps.theme.green,
  buttonSize: ButtonProps.size.xl,
  buttonType: ButtonProps.type.normal,
  buttonFocus: 'true',
  buttonActive: 'true',
  buttonDisabled: 'false',
  buttonBlock: 'false',
  buttonPending: 'false',
  buttonShowHideCode: 'show',
  paginationExternalClass: 'external-class-name',
  paginationShowHideCode: 'show',
}

export const componentsReducer = (state = initialState, action: TComponentsActions): IComponentsState => {
  switch(action.type) {
    case EComponentsActionTypes.BUTTON_CHILDREN:
      return {
        ...state,
        buttonChildren: action.payload
      }
    case EComponentsActionTypes.BUTTON_EXTERNAL_CLASS:
      return {
        ...state,
        buttonExternalClass: action.payload
      }
    case EComponentsActionTypes.BUTTON_THEME:
      return {
        ...state,
        buttonTheme: action.payload
      }
    case EComponentsActionTypes.BUTTON_SIZE:
      return {
        ...state,
        buttonSize: action.payload
      }
    case EComponentsActionTypes.BUTTON_TYPE:
      return {
        ...state,
        buttonType: action.payload
      }
    case EComponentsActionTypes.BUTTON_FOCUS:
      return {
        ...state,
        buttonFocus: action.payload
      }
    case EComponentsActionTypes.BUTTON_ACTIVE:
      return {
        ...state,
        buttonActive: action.payload
      }
    case EComponentsActionTypes.BUTTON_DISABLED:
      return {
        ...state,
        buttonDisabled: action.payload
      }
    case EComponentsActionTypes.BUTTON_BLOCK:
      return {
        ...state,
        buttonBlock: action.payload
      }
    case EComponentsActionTypes.BUTTON_PENDING:
      return {
        ...state,
        buttonPending: action.payload
      }
    case EComponentsActionTypes.BUTTON_SHOW_HIDE_CODE:
      return {
        ...state,
        buttonShowHideCode: action.payload
      }
    case EComponentsActionTypes.PAGINATION_EXTERNAL_CLASS:
      return {
        ...state,
        paginationExternalClass: action.payload
      }
    case EComponentsActionTypes.PAGINATION_SHOW_HIDE_CODE:
      return {
        ...state,
        paginationShowHideCode: action.payload
      }
    default:
      return state
  }
}
