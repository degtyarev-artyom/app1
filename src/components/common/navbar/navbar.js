import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { commonSelectors } from 'redux/common/common-selectors'
import { getTheme, colors, themes } from 'styling/js/styling-themes'
import './navbar.scss'
import { getDynamicStyles } from './navbar-styles'

export const Navbar = ({
  externalClass,
}) => {
  const dynamicStyles = getDynamicStyles(colors)
  const currentTheme = useSelector(commonSelectors.currentTheme)
  const themeHome = getTheme(currentTheme, themes.green)
  const themeComponents = getTheme(currentTheme, themes.purple)
  const themeNotFound = getTheme(currentTheme, themes.red)
  
  return (
    <div className={classNames('Navbar', {
      [externalClass]: externalClass,
    })}>

      {/* home */}
      <NavLink
        className={`Navbar__item Navbar__item--${themeHome}`}
        activeClassName={`Navbar__item--active Navbar__item--${themeHome}--active`}
        exact
        to="/"
      >
        Home
      </NavLink>

      {/* components */}
      <NavLink
        className={`Navbar__item Navbar__item--${themeComponents}`}
        activeClassName={`Navbar__item--active Navbar__item--${themeComponents}--active`}
        to="/components"
      >
        Components
      </NavLink>

      {/* not-found */}
      <NavLink
        className={`Navbar__item Navbar__item--${themeNotFound}`}
        activeClassName={`Navbar__item--active Navbar__item--${themeNotFound}--active`}
        to="/not-found"
      >
        Not found
      </NavLink>
      <style jsx>{ dynamicStyles }</style>
    </div>
  )
}
