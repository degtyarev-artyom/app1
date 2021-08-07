import classNames from 'classnames'
import './staff-title.scss'
import { getDynamicStyles } from './staff-title-styles'
import { staffColors, staffThemes } from 'styling/staff/staff-styling-themes'

export const StaffTitle = ({
  externalClass,
  theme,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColors)

  return (
    <div
      className={classNames('StaffTitle', {
        [externalClass]: externalClass,
        [`StaffTitle--theme-${theme}`]: theme,
      })}
      {...rest}
    >
      { children }
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}

export const StaffTitleProps = {
  theme: staffThemes,
}