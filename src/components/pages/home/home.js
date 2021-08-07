import classNames from 'classnames'
import { StaffContent } from 'components/staff/staff-content/staff-content'
import { StaffNavbar } from 'components/staff/staff-navbar/staff-navbar'
import { StaffTitle } from 'components/staff/staff-title/staff-title'
import { useSelector } from 'react-redux'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffGetTheme, staffThemes } from 'styling/staff/staff-styling-themes'
import './home.scss'

export const Home = ({
  externalClass,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const theme = staffGetTheme(currentTheme, staffThemes.green)

  return (
    <div className={classNames('Home', {
      [externalClass]: externalClass,
    })}>
      <StaffTitle
        externalClass="Home__title"
        theme={theme}
      >
        Home
      </StaffTitle>
      <StaffNavbar externalClass="Home__navbar" />
      <StaffContent
        externalClass="Home__content"
        theme={theme}
      >
        <div className={classNames('Home__content-home', {
          'Home__content-home--default': currentTheme === 'default',
        })}>
          🏠
        </div>
      </StaffContent>
    </div>
  )
}
