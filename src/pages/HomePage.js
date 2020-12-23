import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import getMovies from '../services/movies-api';

export default function HomePage(props) {
  const { url } = useRouteMatch;
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1> Это домашняя страница</h1>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            {/* <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.name}
            /> */}
            <Link to={`${movie.id}`}>
              {`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            </Link>
          </li>
        ))}
    </>
  );
}
