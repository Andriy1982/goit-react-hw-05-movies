import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/movies-api';
import Spinner from '../components/Spinner';
import MovieDetails from '../components/MovieDetails';

export default function MoviesDetailsPage(props) {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    API.getMoviesById(movieId).then(data => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      {movie && <MovieDetails movie={movie} />}
    </>
  );
}
