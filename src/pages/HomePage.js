import React, { useEffect, useState } from 'react';
import API from '../services/movies-api';
import MovieList from '../components/MovieList';
import Spinner from '../components/Spinner';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    API.getMovies().then(data => {
      setMovies(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {movies && <MovieList movies={movies} />}
    </>
  );
}
