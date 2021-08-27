import classNames from 'classnames'
import { staffActions } from 'redux/staff/staff-actions'
import { staffSelectors } from 'redux/staff/staff-selectors'
import './staff-change-theme-code.scss'
import { useDispatch, useSelector } from 'react-redux'
import { staffThemesCode, staffColorsCode } from 'styling/staff/staff-styling-themes'
import { getDynamicStyles } from './staff-change-theme-code-styles'

export const StaffChangeThemeCode = ({
  externalClass,
}) => {
  const dispatch = useDispatch()
  const themeCode = useSelector(staffSelectors.currentThemeCode)
  const dynamicStyles = getDynamicStyles(staffColorsCode)

  return (
    <div className={classNames('StaffChangeThemeCode', {
      [externalClass]: externalClass
    })}>

      {/* darcula */}
      <div
        className={classNames('StaffChangeThemeCode__item StaffChangeThemeCode__item--darcula', {
          'StaffChangeThemeCode__item--darcula--active': themeCode === 'darcula', 
        })}
        onClick={() => dispatch(staffActions.setThemeCode(staffThemesCode.darcula))}
      />

      {/* vscode */}
      <div
        className={classNames('StaffChangeThemeCode__item StaffChangeThemeCode__item--vscode', {
          'StaffChangeThemeCode__item--vscode--active': themeCode === 'vscode', 
        })}
        onClick={() => dispatch(staffActions.setThemeCode(staffThemesCode.vscode))}
      />

      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}
