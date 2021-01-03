import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useHistory, useLocation } from 'react-router-dom';
import API from '../services/movies-api';
import MovieList from '../components/MovieList';

export default function MoviesPage(props) {
  // const { url } = useRouteMatch();
  const location = useLocation();
  const [searchMovie, setSearchMovie] = useState(() =>
    new URLSearchParams(location.search).get('query'),
  );
  const [movies, setMovies] = useState(null);
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
    API.getSearchMovies(searchMovie).then(setMovies);
  }, [searchMovie]);

  return (
    <>
      <SearchForm onSubmitForm={handleSubmitForm} />
      {movies && <MovieList movies={movies} />}
    </>
  );
}
