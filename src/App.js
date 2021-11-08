import { Components } from 'components/pages/components/components'
import { Home } from 'components/pages/home/home'
import { NotFound } from 'components/pages/not-found/not-found'
import { useMemo} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { staffActions } from 'redux/staff/staff-actions.ts'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { StaffChangeTheme } from 'components/staff/staff-change-theme/staff-change-theme'
import { Sandbox } from 'components/pages/sandbox/sandbox'
import { getThemeCodeLS, getThemeLS } from 'functions/staff-styling-func'
import { StaffPage } from 'components/staff/staff-page/staff-page'
import { staffThemes } from 'styling/staff/staff-styling-themes'
import { staffSelectors } from 'redux/staff/staff-selectors'
import { getTheme } from 'styling/js/styling-themes'

const App = () => {

  const dispatch = useDispatch()

  useMemo(() => {
    dispatch(staffActions.setTheme(getThemeLS()))
    dispatch(staffActions.setThemeCode(getThemeCodeLS()))
  }, [dispatch])

  const currentTheme = useSelector(staffSelectors.currentTheme)

  return (
    <div className="App">
      <StaffChangeTheme externalClass="App__staff-change-theme" />
      <Router>
        <Switch>
          <Route exact path="/">
            <StaffPage
              externalClass="App__home-page"
              theme={getTheme(currentTheme, staffThemes.green)}
              title="Home"
            >
              <Home externalClass="App__home" />
            </StaffPage>
          </Route>
          <Route path="/components">
            <StaffPage
              externalClass="App__components-page"
              theme={getTheme(currentTheme, staffThemes.purple)}
              title="Components"
            >
              <Components externalClass="App__components" />
            </StaffPage>
          </Route>
          <Route path="/sandbox">
            <StaffPage
              externalClass="App__sandbox-page"
              theme={getTheme(currentTheme, staffThemes.orange)}
              title="Sandbox"
            >
              <Sandbox externalClass="App__sandbox" />
            </StaffPage>
          </Route>
          <Route>
            <StaffPage
              externalClass="App__not-found-page"
              theme={getTheme(currentTheme, staffThemes.red)}
              title="Page not found"
            >
              <NotFound externalClass="App__not-found" />
            </StaffPage>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
