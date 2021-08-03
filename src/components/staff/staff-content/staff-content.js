import classNames from 'classnames'
import './staff-content.scss'
import { getDynamicStyles } from './staff-content-styles'
import { staffColors, staffThemes } from 'styling/js/staff/staff-styling-themes'

export const StaffContent = ({
  externalClass,
  theme,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColors)

  return (
    <div
      className={classNames('StaffContent', {
        [externalClass]: externalClass,
        [`StaffContent--theme-${theme}`]: theme,
      })}
      {...rest}
    >
      { children }
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}

export const StaffContentProps = {
  theme: staffThemes,
}
