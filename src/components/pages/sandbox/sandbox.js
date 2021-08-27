import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useSelector } from 'react-redux'
import { staffThemesMain } from 'styling/staff/staff-styling-themes'
import './sandbox.scss'
import { Counter } from 'components/pages/sandbox/counter/counter'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { getTheme } from 'styling/staff/staff-styling-functions'

export const Sandbox = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentThemeMain)
  const theme = getTheme(currentTheme, staffThemesMain.orange)

  return (
    <div className={classNames('Sandbox', {
      [externalClass]: externalClass
    })}>
      <StaffTitle
        externalClass="Sandbox__title"
        theme={theme}
      >
        Sandbox
      </StaffTitle>
      <StaffNavbar externalClass="Sandbox__navbar" />
      <StaffContent
        externalClass="Sandbox__content"
        theme={theme}
      >
        <Counter externalClass="Sandbox__counter" />
      </StaffContent>
    </div>
  )
}
