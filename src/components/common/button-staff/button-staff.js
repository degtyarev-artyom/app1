import classNames from 'classnames'
import React from 'react'
import { colors, themes } from 'styling/js/styling-themes'
import './button-staff.scss'
import { getDynamicStyles } from './button-staff-styles'

export const Button = ({
  externalClass,
  pending,
  size,
  theme,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(colors)

  return (
    <button
      className={classNames('ButtonStaff', {
        [externalClass]: externalClass,
        [`ButtonStaff--theme-${theme}`]: theme,
        [`ButtonStaff--size-${size}`]: size,
        'ButtonStaff--pending': pending,
      })}
      {...rest}
    >
      { children }
      <style jsx>{ dynamicStyles }</style>
    </button>
  )
}

export const ButtonProps = {
  theme: themes,
  size: {
    s: 's',
    m: 'm',
    l: 'l',
  }
}
