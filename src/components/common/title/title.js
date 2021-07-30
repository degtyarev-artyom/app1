import classNames from 'classnames'
import './title.scss'
import { getDynamicStyles } from './title-styles'
import { colors, themes } from 'styling/js/styling-themes'

export const Title = ({
  externalClass,
  theme,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(colors)

  return (
    <div
      className={classNames('Title', {
        [externalClass]: externalClass,
        [`Title--theme-${theme}`]: theme,
      })}
      {...rest}
    >
      { children }
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}

export const TitleProps = {
  theme: themes,
}
