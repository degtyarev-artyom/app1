import classNames from 'classnames'
import './staff-title.scss'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { staticStyles } from './staff-title-styles'

export const StaffTitle = ({
  externalClass,
  theme,
  children,
  ...rest
}) => {
  return (
    <div
      className={classNames('StaffTitle', {
        [externalClass]: externalClass,
        [`StaffTitle--theme-${theme}`]: theme,
      })}
      {...rest}
    >
      { children }
      <style jsx>{ staticStyles }</style>
    </div>
  )
}

export const StaffTitleProps = {
  theme: staffThemes,
}
