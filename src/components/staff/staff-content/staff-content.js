import classNames from 'classnames'
import './staff-content.scss'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { staticStyles } from './staff-content-styles'

export const StaffContent = ({
  className,
  theme,
  children,
  ...rest
}) => {
  return (
    <div
      className={classNames('StaffContent', {
        [className]: className,
        [`StaffContent--theme-${theme}`]: theme,
      })}
      {...rest}
    >
      { children }
      <style jsx>{ staticStyles }</style>
    </div>
  )
}

export const StaffContentProps = {
  theme: staffThemes,
}
