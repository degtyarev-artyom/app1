import { Components } from 'components/pages/components/components'
import { Home } from 'components/pages/home/home'
import { NotFound } from 'components/pages/not-found/not-found'
import { useMemo} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { staffActions } from 'redux/staff/staff-actions'
import './App.scss'
import { useDispatch } from 'react-redux'
import { StaffChangeTheme } from 'components/staff/staff-change-theme/staff-change-theme'
import { Sandbox } from 'components/pages/sandbox/sandbox'
import { staffGetThemeLocalStorage } from 'redux/staff/staff-functions'

const App = () => {
  const dispatch = useDispatch()
  useMemo(() => dispatch(staffActions.setTheme(staffGetThemeLocalStorage())), [dispatch])

  return (
    <div className="App">
      <StaffChangeTheme externalClass="App__staff-change-theme" />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home externalClass="App__home" />
          </Route>
          <Route path="/components">
            <Components externalClass="App__components" />
          </Route>
          <Route path="/sandbox">
            <Sandbox externalClass="App__sandbox" />
          </Route>
          <Route>
            <NotFound externalClass="App__not-found" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
