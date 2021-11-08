import classNames from 'classnames'
import './staff-page.scss'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { StaffTitle } from '../staff-title/staff-title'
import { StaffContent } from '../staff-content/staff-content'
import { StaffNavbar } from '../staff-navbar/staff-navbar'

export const StaffPage = ({
  externalClass,
  theme,
  children,
  title,
  ...rest
}) => {
  return (
    <div
      className={classNames('StaffPage', {
        [externalClass]: externalClass,
        [`StaffPage--theme-${theme}`]: theme
      })}
      {...rest}
    >
      <StaffTitle
        externalClass="StaffPage__title"
        theme={theme}
      >
        { title }
      </StaffTitle>
      <StaffNavbar externalClass="StaffPage__navbar" />
      <StaffContent
        externalClass="StaffPage__content"
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
