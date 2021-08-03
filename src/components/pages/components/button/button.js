import React from 'react'
import classNames from 'classnames'
import './button.scss'
import { getDynamicStyles } from './button-styles'

export const Button = ({
  externalClass,
  pending,
  theme,
  size,
  type,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles()

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
  size: {
    s: 's',
    m: 'm',
    l: 'l'
  },
  type: {
    add: 'add'
  }
}
