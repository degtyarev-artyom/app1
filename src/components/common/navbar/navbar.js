import classNames from "classnames"
import { NavLink } from "react-router-dom"
import './navbar.scss'

export const Navbar = ({
  externalClass,
}) => {
  return (
    <div className={classNames('Navbar', {
      [externalClass]: externalClass,
    })}>

      {/* home */}
      <NavLink
        className="Navbar__item Navbar__item--home"
        activeClassName="Navbar__item--home--active"
        exact
        to="/"
      >
        Home
      </NavLink>

      {/* components */}
      <NavLink
        className="Navbar__item Navbar__item--components"
        activeClassName="Navbar__item--components--active"
        to="/components"
      >
        Components
      </NavLink>

      {/* not-found */}
      <NavLink
        className="Navbar__item Navbar__item--not-found"
        activeClassName="Navbar__item--not-found--active"
        to="/not-found"
      >
        Not found
      </NavLink>
    </div>
  )
}
