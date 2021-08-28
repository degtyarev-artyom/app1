import classNames from 'classnames'
import './button.scss'
import { themes } from 'styling/js/styling-themes'
import { staticStyles } from './button-styles'

export const Button = ({
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
}) => {
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
      disabled={disabled || block}
      {...rest}
    >
      { children }
      <style jsx>{ staticStyles }</style>
    </button>
  )
}

export const ButtonProps = {
  themes,
  sizes: {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
  },
  types: {
    light: 'light',
    normal: 'normal',
    bold: 'bold'
  }
}
