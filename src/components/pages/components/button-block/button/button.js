import classNames from 'classnames'
import './button.scss'
import { themes } from 'styling/js/styling-themes'
import { staticStyles } from './button-styles'
import { forwardRef } from 'react'

const Button = ({
  externalClass,
  theme,
  size,
  type,
  focus,
  active,
  disabled,
  block,
  pending,
  children,
  ...rest
}, ref) => {
  return (
    <button
      className={classNames('Button', {
        [externalClass]: externalClass,
        [`Button--theme-${theme}`]: theme,
        [`Button--size-${size}`]: size,
        [`Button--type-${type}`]: type,
        'Button--focus': focus,
        'Button--active': active,
        'Button--disabled': disabled,
        'Button--block': block,
        'Button--pending': pending
      })}
      ref={ref}
      disabled={disabled || block}
      {...rest}
    >
      { children }
      <style jsx>{ staticStyles }</style>
    </button>
  )
}

const ButtonForwardRef = forwardRef(Button)

const ButtonProps = {
  theme: themes,
  size: {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
  },
  type: {
    light: 'light',
    normal: 'normal',
    bold: 'bold'
  }
}

export { ButtonForwardRef as Button, ButtonProps }
