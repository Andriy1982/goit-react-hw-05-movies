import { Route, Link, Switch } from 'react-router-dom';
import Container from '../Container/';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MoviesDetailsPage from '../../pages/MoviesDetailsPage';
import Navigation from '../Navigation';

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/:moviesId">
          <MoviesDetailsPage />
        </Route>

        <Route exact path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
