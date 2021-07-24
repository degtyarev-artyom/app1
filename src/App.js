import { Components } from 'components/pages/components/components';
import { Home } from 'components/pages/home/home';
import { NotFound } from 'components/pages/not-found/not-found';
import { useMemo} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { commonActions } from 'redux/common/common-actions';
import './App.scss'
import { useDispatch } from 'react-redux';
import { themes } from 'styling/themes';
import { ChangeTheme } from 'components/common/change-theme/change-theme';

const App = () => {
  const dispatch = useDispatch();

  useMemo(() => {
    const themeStorage = localStorage.getItem('theme')
    if (!themeStorage) {
      localStorage.setItem('theme', themes.default)
    } else {
      dispatch(commonActions.setTheme(themeStorage))
    }
    return true
  }, [dispatch])

  return (
    <div className="App">
      <ChangeTheme />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home externalClass="App__home" />
          </Route>
          <Route path="/components">
            <Components externalClass="App__components" />
          </Route>
          <Route>
            <NotFound externalClass="App__not-found" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
