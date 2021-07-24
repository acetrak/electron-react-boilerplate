import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.global.css';
import ProminentAppBar from './components/ProminentAppBar';
import { CssBaseline } from '@material-ui/core';


export default function App() {
  return (
    <>
      <CssBaseline />
      <div className="rootStyle">
        <ProminentAppBar />
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </>
  );
}
