import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../Container/';
import Spinner from '../Spinner';
import Navigation from '../Navigation';
import ReactNotification from 'react-notifications-component';

const HomePage = lazy(() =>
  import('../../pages/HomePage.js' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage.js' /* webpackChunkName: "MoviePage" */),
);
const MoviesDetailsPage = lazy(() =>
  import(
    '../../pages/MoviesDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

function App() {
  return (
    <div className="app-container">
      <ReactNotification />
      <Navigation />
      <Container>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/movies/:movieId">
              <MoviesDetailsPage />
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Route>
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
