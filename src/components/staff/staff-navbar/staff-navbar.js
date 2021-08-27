import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffColorsMain, staffThemesMain } from 'styling/staff/staff-styling-themes'
import './staff-navbar.scss'
import { getDynamicStyles } from './staff-navbar-styles'
import { getTheme } from 'styling/staff/staff-styling-functions'

export const StaffNavbar = ({
  externalClass,
}) => {
  const dynamicStyles = getDynamicStyles(staffColorsMain)
  const currentTheme = useSelector(staffSelectors.currentThemeMain)
  const themeHome = getTheme(currentTheme, staffThemesMain.green)
  const themeComponents = getTheme(currentTheme, staffThemesMain.purple)
  const themeSandbox = getTheme(currentTheme, staffThemesMain.orange)
  
  return (
    <div className={classNames('StaffNavbar', {
      [externalClass]: externalClass
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
