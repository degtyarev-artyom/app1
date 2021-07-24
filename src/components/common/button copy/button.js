import classNames from 'classnames'
import React from 'react'
import { colors, themes } from 'styling/themes'
import './button.scss'
import { getDynamicStyles } from './button-styles'

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
      className={classNames('Button', {
        [externalClass]: externalClass,
        [`Button--theme-${theme}`]: theme,
        [`Button--size-${size}`]: size,
        'Button--pending': pending,
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
