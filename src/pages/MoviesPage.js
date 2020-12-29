import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import { useParams, Link, useRouteMatch, Route } from 'react-router-dom';
import API from '../services/movies-api';

export default function MoviesPage(props) {
  const { url } = useRouteMatch();
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);

  console.log(url);

  const hendleSubmitForm = searchMovie => setSearchMovie(searchMovie);

  useEffect(() => {
    if (!searchMovie) {
      return;
    }
    console.log(searchMovie);
    API.getSearchMovies(searchMovie).then(setMovies);
  }, [searchMovie]);

  return (
    <>
      <SearchForm onSubmitForm={hendleSubmitForm} />
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            {/* <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.name}
            /> */}
            <Link to={`${url}/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.name}
              />
            </Link>
          </li>
        ))}
    </>
  );
}
