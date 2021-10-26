import { action } from 'redux/redux-functions'
import { EStaffActionTypes } from './staff-types'

export const staffActions = {
  setTheme: (payload: string) => action({ type: EStaffActionTypes.SET_THEME, payload }),
  setThemeCode: (payload: string) => action({ type: EStaffActionTypes.SET_THEME_CODE, payload })
}
