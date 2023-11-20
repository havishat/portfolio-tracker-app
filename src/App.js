import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from '../Login/Login';
import Preferences from '../Portfolio/Portfolio';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
}

export default App;
