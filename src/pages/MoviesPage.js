import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useHistory, useLocation } from 'react-router-dom';
import API from '../services/movies-api';
import MovieList from '../components/MovieList';
import Spinner from '../components/Spinner';
import { store } from 'react-notifications-component';
import notification from '../components/Notification';

export default function MoviesPage(props) {
  const location = useLocation();
  const [searchMovie, setSearchMovie] = useState(() =>
    new URLSearchParams(location.search).get('query'),
  );
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmitForm = searchMovie => {
    setSearchMovie(searchMovie);
    setSearch(searchMovie);
  };

  function setSearch(searchMovie) {
    history.push({
      ...location,
      search: `query=${searchMovie}`,
    });
  }

  useEffect(() => {
    if (!searchMovie) {
      return;
    }

    setIsLoading(true);
    API.getSearchMovies(searchMovie).then(data => {
      setMovies(data);
      setIsLoading(false);
      if (data.length < 1) {
        store.addNotification({
          ...notification,
          container: 'bottom-center',
          message: 'There are no movies for this search',
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
