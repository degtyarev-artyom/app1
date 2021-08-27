import classNames from 'classnames'
import { getDynamicStyles } from './staff-code-wrap-styles'
import './staff-code-wrap.scss'
import { staffColorsCode, staffThemesMain } from 'styling/staff/staff-styling-themes'
import { StaffButtonCopy } from '../staff-button-copy/staff-button-copy'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { getTheme } from 'styling/staff/staff-styling-functions'
import { StaffChangeThemeCode } from '../staff-change-theme-code/staff-change-theme-code'

export const StaffCodeWrap = ({
  externalClass,
  codeData,
  getCode,
  delayCopied = 1000,
  children,
  ...rest
}) => {
  const currentTheme = useSelector(staffSelectors.currentThemeMain)
  const theme = getTheme(currentTheme, staffThemesMain.purple)
  const themeCode = useSelector(staffSelectors.currentThemeCode)
  const dynamicStyles = getDynamicStyles(staffColorsCode, themeCode)

  return (
    <div
      className={classNames('StaffCodeWrap', {
        [externalClass]: externalClass
      })}
      {...rest}
    >
      <StaffButtonCopy
        externalClass="StaffCodeWrap__button-copy"
        theme={theme}
        delayCopied={delayCopied}
        code={getCode(codeData)}
      />
      <pre className={classNames('StaffCodeWrap__subwrap', {
        'StaffCodeWrap__subwrap--darcula': themeCode === 'darcula',
        'StaffCodeWrap__subwrap--vscode': themeCode === 'vscode'
      })}>
        { children }
      </pre>
      <StaffChangeThemeCode externalClass="StaffCodeWrap__change-theme-code"/>
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}
