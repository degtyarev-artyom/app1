import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffGetTheme, staffColors, staffThemes } from 'styling/staff/staff-styling-themes'
import './staff-navbar.scss'
import { getDynamicStyles } from './staff-navbar-styles'

export const StaffNavbar = ({
  externalClass,
}) => {
  const dynamicStyles = getDynamicStyles(staffColors)
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const themeHome = staffGetTheme(currentTheme, staffThemes.green)
  const themeComponents = staffGetTheme(currentTheme, staffThemes.purple)
  // const themeNotFound = staffGetTheme(currentTheme, themesStaff.red)
  const themeSandbox = staffGetTheme(currentTheme, staffThemes.orange)
  
  return (
    <div className={classNames('StaffNavbar', {
      [externalClass]: externalClass,
    })}>

      {/* home */}
      <NavLink
        className={`StaffNavbar__item StaffNavbar__item--${themeHome}`}
        activeClassName={`StaffNavbar__item--active StaffNavbar__item--${themeHome}--active`}
        exact
        to="/"
      >
        Home
      </NavLink>

      {/* components */}
      <NavLink
        className={`StaffNavbar__item StaffNavbar__item--${themeComponents}`}
        activeClassName={`StaffNavbar__item--active StaffNavbar__item--${themeComponents}--active`}
        to="/components"
      >
        Components
      </NavLink>

      {/* test */}
      <NavLink
        className={`StaffNavbar__item StaffNavbar__item--${themeSandbox}`}
        activeClassName={`StaffNavbar__item--active StaffNavbar__item--${themeSandbox}--active`}
        to="/sandbox"
      >
        Sandbox
      </NavLink>

      {/* not-found */}
      {/* <NavLink
        className={`StaffNavbar__item StaffNavbar__item--${themeNotFound}`}
        activeClassName={`StaffNavbar__item--active StaffNavbar__item--${themeNotFound}--active`}
        to="/not-found"
      >
        Not found
      </NavLink> */}
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}
