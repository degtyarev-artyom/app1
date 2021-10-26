export interface IComponentsState {
  buttonChildren: string
  buttonExternalClass: string
  buttonTheme: string
  buttonSize: string
  buttonType: string
  buttonFocus: string | boolean
  buttonActive: string | boolean
  buttonDisabled: string | boolean
  buttonBlock: string | boolean
  buttonPending: string | boolean
  buttonShowHideCode: string
  paginationExternalClass: string
  paginationShowHideCode: string
}

export enum EComponentsActionTypes {
  BUTTON_CHILDREN = 'BUTTON_CHILDREN',
  BUTTON_EXTERNAL_CLASS = 'BUTTON_EXTERNAL_CLASS',
  BUTTON_THEME = 'BUTTON_THEME',
  BUTTON_SIZE = 'BUTTON_SIZE',
  BUTTON_TYPE = 'BUTTON_TYPE',
  BUTTON_FOCUS = 'BUTTON_FOCUS',
  BUTTON_ACTIVE = 'BUTTON_ACTIVE',
  BUTTON_DISABLED = 'BUTTON_DISABLED',
  BUTTON_BLOCK = 'BUTTON_BLOCK',
  BUTTON_PENDING = 'BUTTON_PENDING',
  BUTTON_SHOW_HIDE_CODE = 'BUTTON_SHOW_HIDE_CODE',
  PAGINATION_EXTERNAL_CLASS = 'PAGINATION_EXTERNAL_CLASS',
  PAGINATION_SHOW_HIDE_CODE = 'PAGINATION_SHOW_HIDE_CODE'
}

interface IButtonChildren {
  type: EComponentsActionTypes.BUTTON_CHILDREN
  payload: string
}

interface IButtonExternalClass {
  type: EComponentsActionTypes.BUTTON_EXTERNAL_CLASS
  payload: string
}

interface IButtonTheme {
  type: EComponentsActionTypes.BUTTON_THEME
  payload: string
}

interface IButtonSize {
  type: EComponentsActionTypes.BUTTON_SIZE
  payload: string
}

interface IButtonType {
  type: EComponentsActionTypes.BUTTON_TYPE
  payload: string
}

interface IButtonFocus {
  type: EComponentsActionTypes.BUTTON_FOCUS
  payload: string | boolean 
}

interface IButtonActive {
  type: EComponentsActionTypes.BUTTON_ACTIVE
  payload: string | boolean 
}

interface IButtonDisabled {
  type: EComponentsActionTypes.BUTTON_DISABLED
  payload: string | boolean
}

interface IButtonBlock {
  type: EComponentsActionTypes.BUTTON_BLOCK
  payload: string | boolean
}

interface IButtonPending {
  type: EComponentsActionTypes.BUTTON_PENDING
  payload: string | boolean
}

interface IButtonShowHideCode {
  type: EComponentsActionTypes.BUTTON_SHOW_HIDE_CODE
  payload: string
}

interface IPaginationExternalClass {
  type: EComponentsActionTypes.PAGINATION_EXTERNAL_CLASS
  payload: string
}

interface IPaginationShowHideCode {
  type: EComponentsActionTypes.PAGINATION_SHOW_HIDE_CODE
  payload: string
}

export type TComponentsActions =
  IButtonChildren | IButtonExternalClass | IButtonTheme |
  IButtonSize | IButtonType | IButtonFocus |
  IButtonActive | IButtonDisabled | IButtonBlock |
  IButtonPending | IButtonShowHideCode | IPaginationExternalClass |
  IPaginationShowHideCode

export interface IComponentsActions {
  buttonChildren: (payload: string) => TComponentsActions
  buttonExternalClass: (payload: string) => TComponentsActions
  buttonTheme: (payload: string) => TComponentsActions
  buttonSize: (payload: string) => TComponentsActions
  buttonType: (payload: string) => TComponentsActions
  buttonFocus: (payload: string | boolean) => TComponentsActions
  buttonActive: (payload: string | boolean) => TComponentsActions
  buttonDisabled: (payload: string | boolean) => TComponentsActions
  buttonBlock: (payload: string | boolean) => TComponentsActions
  buttonPending: (payload: string | boolean) => TComponentsActions
  buttonShowHideCode: (payload: string) => TComponentsActions
  paginationExternalClass: (payload: string) => TComponentsActions
  paginationShowHideCode: (payload: string) => TComponentsActions
}
