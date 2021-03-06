import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Nav from './components/Nav';
import useLoadListingsData from './hooks/useLoadListingsData';
import useSavedListings from './hooks/useSavedListings';

const Listings = React.lazy(() => import('./pages/Listings'));
const Saved = React.lazy(() => import('./pages/Saved'));

function App() {
  const [saved, persistListings] = useSavedListings();
  const [{ status, data }] = useLoadListingsData();

  return (
    <div className="app">
      <Router>
        <Nav />
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/listings">
              <Listings
                saved={saved}
                persistListings={persistListings}
                status={status}
                data={data}
              />
            </Route>
            <Route path="/saved">
              <Saved
                saved={saved}
                persistListings={persistListings}
                status={status}
                data={data}
              />
            </Route>
            <Route path="/">
              <Redirect to="/listings" />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
