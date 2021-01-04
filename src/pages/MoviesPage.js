import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import API from '../services/movies-api';
import MovieList from '../components/MovieList';
import Spinner from '../components/Spinner';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const notification = {
  title: 'Wonderful!',
  message: 'Configurable',
  type: 'warning',
  // insert: "top",
  // container: "top-right",
  // animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
  // animationOut: ["animate__animated animate__fadeOut"], // `animate.css v4` classes
  dismiss: {
    duration: 5000,
    onScreen: true,
  },
};

export default function MoviesPage(props) {
  const { url } = useRouteMatch();
  console.log(url);
  const location = useLocation();
  const [searchMovie, setSearchMovie] = useState(() =>
    new URLSearchParams(location.search).get('query'),
  );
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmitForm = searchMovie => setSearchMovie(searchMovie);

  useEffect(() => {
    if (!searchMovie) {
      return;
    }
    history.push({
      ...location,
      search: `query=${searchMovie}`,
    });
    setIsLoading(true);
    API.getSearchMovies(searchMovie).then(data => {
      setMovies(data);
      setIsLoading(false);
      if (data.length < 1) {
        store.addNotification({
          ...notification,
          container: 'center',
        });
      }
    });
  }, [searchMovie]);

  return (
    <>
      <SearchForm onSubmitForm={handleSubmitForm} />
      {isLoading && <Spinner />}
      {movies && <MovieList movies={movies} />}
    </>
  );
}
