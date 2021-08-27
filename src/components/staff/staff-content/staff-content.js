import classNames from 'classnames'
import './staff-content.scss'
import { getDynamicStyles } from './staff-content-styles'
import { staffColorsMain, staffThemesMain } from 'styling/staff/staff-styling-themes'

export const StaffContent = ({
  externalClass,
  theme,
  children,
  ...rest
}) => {
  const dynamicStyles = getDynamicStyles(staffColorsMain)

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
  theme: staffThemesMain,
}
