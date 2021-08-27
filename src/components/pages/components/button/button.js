import classNames from 'classnames'
import './button.scss'
import { getDynamicStyles } from './button-styles'
import { colors, themes } from 'styling/js/styling-themes'

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
  const dynamicStyles = getDynamicStyles(colors)

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
      <style jsx>{ dynamicStyles }</style>
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
