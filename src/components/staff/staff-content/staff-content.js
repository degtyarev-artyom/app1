import classNames from 'classnames'
import './staff-content.scss'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { staticStyles } from './staff-content-styles'

export const StaffContent = ({
  externalClass,
  theme,
  children,
  ...rest
}) => {
  return (
    <div
      className={classNames('StaffContent', {
        [externalClass]: externalClass,
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
