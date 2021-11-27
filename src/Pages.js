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
            externalClass="App__home-page"
            theme={themeHome}
            title="Home"
          >
            <Home externalClass="App__home" />
          </StaffPage>
        </Route>

        {/* Components */}
        <Route path="/components">
          <StaffPage
            externalClass="App__components-page"
            theme={themeComponents}
            title="Components"
          >
            <Components externalClass="App__components" />
          </StaffPage>
        </Route>

        {/* Sandbox */}
        <Route path="/sandbox">
          <StaffPage
            externalClass="App__sandbox-page"
            theme={themeSandbox}
            title="Sandbox"
          >
            <Sandbox externalClass="App__sandbox" />
          </StaffPage>
        </Route>
        
        {/* Not found */}
        <Route>
          <StaffPage
            externalClass="App__not-found-page"
            theme={themeNotFound}
            title="Page not found"
          >
            <NotFound externalClass="App__not-found" />
          </StaffPage>
        </Route>

      </Switch>
    </Router>
  )
}
  
