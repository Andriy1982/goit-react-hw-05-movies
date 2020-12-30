import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';
import API from '../services/movies-api';

export default function MoviesDetailsPage(props) {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  //   console.log(useRouteMatch());
  //   console.log(movieId);
  //   console.log(url);

  useEffect(() => {
    API.getMoviesById(movieId).then(setMovie);
    // API.getMoviesByCast(movieId).then(data => console.log(data.cast));
    // API.getMoviesByReviews(movieId).then(data => console.log(data));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.name}
          />

          <h1> {movie.original_title}</h1>
          <p>{movie.overview}</p>

          <ul>
            <li>
              <NavLink to={`${url}/cast`}>cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>reviews</NavLink>
            </li>
          </ul>
        </>
      )}
      <hr />
      <Route path={`${path}/cast`}>
        <h1>Cast</h1>
      </Route>
      <Route path={`${path}/reviews`}>
        <h1>reviews</h1>
      </Route>
    </>
  );
}
