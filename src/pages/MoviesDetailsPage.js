import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useRouteMatch, Route } from 'react-router-dom';
import API from '../services/movies-api';

export default function MoviesDetailsPage(props) {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  console.log(useParams());
  console.log(movieId);
  console.log(url);

  useEffect(() => {
    API.getMoviesById(movieId).then(setMovie);
    API.getMoviesByCast(movieId).then(data => console.log(data.cast));
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
              <NavLink to={`${url}/${movieId}/reviews`}>reviews</NavLink>
            </li>
          </ul>
        </>
      )}
      <hr />
      <Route path={`${url}/cast`}>
        <h1>Cast</h1>
      </Route>
    </>
  );
}