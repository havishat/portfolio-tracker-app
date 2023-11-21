import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './Portfolio/Portfolio';
import Login from './Login/Login';
import UserToken from './Token/UserToken';


function App() {
  const { token, setToken } = UserToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
  <div className="App">
      <h1>Application</h1>
      <Router>
        <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App; 

          /* <Route exact path="/portfolio" element={<Portfolio />} /> */
