import { Route, Link, Switch } from 'react-router-dom';
import Container from '../Container/';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';

function App() {
  return (
    <Container>
      <h1>Hello World</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </Container>
  );
}

export default App;
