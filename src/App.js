import { Components } from 'components/components-page/components';
import { Home } from 'components/home/home';
import { NotFound } from 'components/not-found/not-found';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss'

const App = () => {
  return (
    <div className="App">
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
