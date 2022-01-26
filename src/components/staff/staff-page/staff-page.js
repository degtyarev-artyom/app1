import classNames from 'classnames'
import './staff-page.scss'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { StaffTitle } from '../staff-title/staff-title'
import { StaffContent } from '../staff-content/staff-content'
import { StaffNavbar } from '../staff-navbar/staff-navbar'

export const StaffPage = ({
  className,
  theme,
  children,
  title,
  ...rest
}) => {
  return (
    <div
      className={classNames('StaffPage', {
        [className]: className,
        [`StaffPage--theme-${theme}`]: theme
      })}
      {...rest}
    >
      <StaffTitle
        className="StaffPage__title"
        theme={theme}
      >
        { title }
      </StaffTitle>
      <StaffNavbar className="StaffPage__navbar" />
      <StaffContent
        className="StaffPage__content"
        theme={theme}
      >
        { children }
      </StaffContent>
    </div>
  )
}

export const StaffContentProps = {
  theme: staffThemes,
}
