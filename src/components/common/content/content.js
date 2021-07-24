import classNames from 'classnames'
import './content.scss'
import { getDynamicStyles } from './content-styles'
import { colors, themes } from 'styling/themes'

export const Content = ({
  externalClass,
  theme,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(colors)

  return (
    <div
      className={classNames('Content', {
        [externalClass]: externalClass,
        [`Content--theme-${theme}`]: theme,
      })}
      {...rest}
    >
      { children }
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}

export const ContentProps = {
  theme: themes,
}
