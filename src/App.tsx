import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Nav from './components/Nav';
import Listings from './pages/Listings';
import Saved from './pages/Saved';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
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
    </div>
  );
}

export default App;
