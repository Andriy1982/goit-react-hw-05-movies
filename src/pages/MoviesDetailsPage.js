import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/movies-api';
import Spinner from '../components/Spinner';

import MovieDetails from '../components/MovieDetails';

export default function MoviesDetailsPage(props) {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  //   console.log(useRouteMatch());
  //   console.log(movieId);
  //   console.log(url);

  useEffect(() => {
    setIsLoading(true);
    API.getMoviesById(movieId).then(data => {
      setMovie(data);
      setIsLoading(false);
    });
    // API.getMoviesByCast(movieId).then(data => console.log(data.cast));
    // API.getMoviesByReviews(movieId).then(data => console.log(data));
  }, [movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      {movie && <MovieDetails movie={movie} />}
    </>
  );
}
