import React from 'react'
import classNames from 'classnames'
import './button.scss'
import { getDynamicStyles } from './button-styles'
import { colors, themes } from 'styling/js/styling-themes'

export const Button = ({
  externalClass,
  pending,
  theme,
  size,
  type,
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
        [`Button--type-${type}`]: type,
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
  themes: themes,
  size: {
    s: 's',
    m: 'm',
    l: 'l'
  },
  type: {
    add: 'add'
  }
}
