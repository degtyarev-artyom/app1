import classNames from 'classnames'
import React from 'react'
import { themes } from 'styling/themes'
import './button.scss'

export const Button = ({
  externalClass,
  pending,
  size,
  theme,
  children,
  ...rest
}) => {
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
