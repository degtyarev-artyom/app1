import React from 'react'
import classNames from 'classnames'
import { getDynamicStyles } from './staff-code-wrap-styles'
import './staff-code-wrap.scss'
import { staffColors, staffGetTheme, staffThemes } from 'styling/staff/staff-styling-themes'
import { StaffButtonCopy } from '../staff-button-copy/staff-button-copy'
import { getButtonCode } from 'components/pages/components/button-code/button-code-string'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'

export const StaffCodeWrap = ({
  externalClass,
  buttonCopyData,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColors)
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = staffGetTheme(currentTheme, staffThemes.purple)

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
        delay={1000}
        code={getButtonCode(buttonCopyData)}
      />
      <pre className="StaffCodeWrap__subwrap">
        { children }
      </pre>
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}
