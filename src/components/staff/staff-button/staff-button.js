import classNames from 'classnames'
import React from 'react'
import { staffColors, staffThemes } from 'styling/staff/staff-styling-themes'
import './staff-button.scss'
import { getDynamicStyles } from './staff-button-styles'

export const StaffButton = ({
  externalClass,
  pending,
  size,
  theme,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColors)

  return (
    <button
      className={classNames('StaffButton', {
        [externalClass]: externalClass,
        [`StaffButton--theme-${theme}`]: theme,
        [`StaffButton--size-${size}`]: size,
        'StaffButton--pending': pending,
      })}
      {...rest}
    >
      { children }
      <style jsx>{ dynamicStyles }</style>
    </button>
  )
}

export const StaffButtonProps = {
  theme: staffThemes,
  size: {
    s: 's',
    m: 'm',
    l: 'l',
  }
}
