import logo from './logo.svg';
import './App.css';
import Portfolio from '../src/components/Portfolio';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../src/components/Login';

import useToken from '../src/components/App';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
}

export default App;
