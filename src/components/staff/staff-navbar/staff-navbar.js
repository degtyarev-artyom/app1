import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import './staff-navbar.scss'
import { getTheme } from 'functions/staff-styling-func'
import { staticStyles } from './staff-navbar-styles'


export const StaffNavbar = ({
  className,
}) => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const themeHome = getTheme(currentTheme, staffThemes.green)
  const themeComponents = getTheme(currentTheme, staffThemes.purple)
  const themeSandbox = getTheme(currentTheme, staffThemes.orange)
  
  return (
    <div className={classNames('StaffNavbar', {
      [className]: className
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

      <style jsx>{ staticStyles }</style>
    </div>
  )
}
