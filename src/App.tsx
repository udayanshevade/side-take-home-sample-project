import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Listings from './pages/Listings';
import Saved from './pages/Saved';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Redirect to="/listings" />
          </Route>
        </Switch>
      </Router>
      <p>App test</p>
    </div>
  );
}

export default App;
