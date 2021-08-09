import React from 'react'
import classNames from 'classnames'
import './button.scss'
import { getDynamicStyles } from './button-styles'
import { colors, themes } from 'styling/js/styling-themes'

export const Button = ({
  externalClass,
  theme,
  size,
  bold,
  pending,
  focus,
  active,
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
        'Button--bold': bold,
        'Button--focus': focus,
        'Button--active': active,
        'Button--pending': pending
      })}
      {...rest}
    >
      { children }
      <style jsx>{ dynamicStyles }</style>
    </button>
  )
}

export const ButtonProps = {
  themes: themes,
  sizes: {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
  }
}
