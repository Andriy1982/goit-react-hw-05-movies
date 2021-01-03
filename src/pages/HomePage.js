import React, { useEffect, useState } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
import API from '../services/movies-api';
import MovieList from '../components/MovieList';

export default function HomePage(props) {
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    API.getMovies().then(setMovies);
  }, []);

  return <>{movies && <MovieList movies={movies} />}</>;
}
