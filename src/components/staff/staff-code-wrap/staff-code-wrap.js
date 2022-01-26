import classNames from 'classnames'
import './staff-code-wrap.scss'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { StaffButtonCopy } from '../staff-button-copy/staff-button-copy'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { getTheme } from 'functions/staff-styling-func'
import { StaffChangeThemeCode } from '../staff-change-theme-code/staff-change-theme-code'
import { staticStyles } from './staff-code-wrap-styles'

export const StaffCodeWrap = ({
  className,
  codeData,
  getCode,
  delayCopied = 1000,
  children,
  ...rest
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = getTheme(currentTheme, staffThemes.purple)
  const themeCode = useSelector(staffSelectors.currentThemeCode)

  return (
    <div
      className={classNames('StaffCodeWrap', {
        [className]: className
      })}
      {...rest}
    >
      <StaffButtonCopy
        className="StaffCodeWrap__button-copy"
        theme={theme}
        delayCopied={delayCopied}
        code={getCode(codeData)}
      />
      <pre className={classNames('StaffCodeWrap__subwrap', {
        'StaffCodeWrap__subwrap--darcula': themeCode === 'darcula',
        'StaffCodeWrap__subwrap--vscode': themeCode === 'vscode',
        'StaffCodeWrap__subwrap--monokai': themeCode === 'monokai'
      })}>
        { children }
      </pre>
      <StaffChangeThemeCode className="StaffCodeWrap__change-theme-code"/>
      <style jsx>{ staticStyles }</style>
    </div>
  )
}
