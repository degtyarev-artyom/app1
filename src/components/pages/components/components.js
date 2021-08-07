import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffGetTheme, staffThemes } from 'styling/staff/staff-styling-themes'
import './components.scss'
import { ButtonBlock } from './button-block/button-block'

export const Components = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = staffGetTheme(currentTheme, staffThemes.purple)

  return (
    <div className={classNames('Components', {
      [externalClass]: externalClass,
    })}>
      <StaffTitle
        externalClass="Components__title"
        theme={theme}
      >
        Components
      </StaffTitle>
      <StaffNavbar externalClass="Components__navbar" />
      <StaffContent
        externalClass="Components__content"
        theme={theme}
      >
        <ButtonBlock externalClass="Components__button" />
      </StaffContent>
    </div>
  )
}
