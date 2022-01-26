import classNames from 'classnames'
import './staff-title.scss'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { staticStyles } from './staff-title-styles'

export const StaffTitle = ({
  className,
  theme,
  children,
  ...rest
}) => {
  return (
    <div
      className={classNames('StaffTitle', {
        [className]: className,
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
