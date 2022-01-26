import { Components } from 'components/pages/components/components'
import { Home } from 'components/pages/home/home'
import { NotFound } from 'components/pages/not-found/not-found'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Sandbox } from 'components/pages/sandbox/sandbox'
import { StaffPage } from 'components/staff/staff-page/staff-page'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { getTheme } from 'styling/js/styling-themes'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { useSelector } from 'react-redux'

export const AppPages = () => {
  const currentTheme = useSelector(staffSelectors.currentTheme)
  const themeHome = getTheme(currentTheme, staffThemes.green)
  const themeComponents = getTheme(currentTheme, staffThemes.purple)
  const themeSandbox = getTheme(currentTheme, staffThemes.orange)
  const themeNotFound = getTheme(currentTheme, staffThemes.red)

  return (
    <Router>
      <Switch>

        {/* Home */}
        <Route exact path="/">
          <StaffPage
            className="App__home-page"
            theme={themeHome}
            title="Home"
          >
            <Home className="App__home" />
          </StaffPage>
        </Route>

        {/* Components */}
        <Route path="/components">
          <StaffPage
            className="App__components-page"
            theme={themeComponents}
            title="Components"
          >
            <Components className="App__components" />
          </StaffPage>
        </Route>

        {/* Sandbox */}
        <Route path="/sandbox">
          <StaffPage
            className="App__sandbox-page"
            theme={themeSandbox}
            title="Sandbox"
          >
            <Sandbox className="App__sandbox" />
          </StaffPage>
        </Route>
        
        {/* Not found */}
        <Route>
          <StaffPage
            className="App__not-found-page"
            theme={themeNotFound}
            title="Page not found"
          >
            <NotFound className="App__not-found" />
          </StaffPage>
        </Route>

      </Switch>
    </Router>
  )
}
  
