import classNames from 'classnames'
import React from 'react'
import { staffColorsMain, staffThemesMain } from 'styling/staff/staff-styling-themes'
import './staff-button.scss'
import { getDynamicStyles } from './staff-button-styles'

export const StaffButton = ({
  externalClass,
  theme,
  size,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColorsMain)

  return (
    <button
      className={classNames('StaffButton', {
        [externalClass]: externalClass,
        [`StaffButton--theme-${theme}`]: theme,
        [`StaffButton--size-${size}`]: size
      })}
      {...rest}
    >
      { children }
      <style jsx>{ dynamicStyles }</style>
    </button>
  )
}

export const StaffButtonProps = {
  theme: staffThemesMain
}
