import classNames from 'classnames'
import React from 'react'
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
  theme: {
    green: 'green',
    purple: 'purple',
    blue: 'blue',
    red: 'red',
  },
  size: {
    s: 's',
    m: 'm',
    l: 'l',
  }
}
