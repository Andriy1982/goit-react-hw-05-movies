import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import API from '../services/movies-api';
import ListMovie from '../components/ListMovie';

// const parseUrl = () => {
//     return new URLSearchParams(location.search).get('query') ?? [];
// }

export default function MoviesPage(props) {
  const { url } = useRouteMatch();
  const location = useLocation();
  const [searchMovie, setSearchMovie] = useState(() =>
    new URLSearchParams(location.search).get('query'),
  );
  const [movies, setMovies] = useState(null);
  const history = useHistory();

  //   console.log(url);

  const hendleSubmitForm = searchMovie => setSearchMovie(searchMovie);

  const querySearhMovie = new URLSearchParams(location.search).get('query');
  console.log(querySearhMovie);

  //   if (querySearhMovie) {
  //     console.log('www');
  //     setSearchMovie(querySearhMovie);
  //   }

  useEffect(() => {
    console.log(history);
    console.log(location);

    if (!searchMovie) {
      return;
    }
    history.push({
      ...location,
      search: `query=${searchMovie}`,
    });
    console.log(searchMovie);
    API.getSearchMovies(searchMovie).then(setMovies);
  }, [searchMovie]);

  return (
    <>
      <SearchForm onSubmitForm={hendleSubmitForm} />
      {
        movies && <ListMovie movies={movies} />
        // movies.map(movie => (
        //   <li key={movie.id}>
        //     {/* <img
        //       src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        //       alt={movie.name}
        //     /> */}
        //     <Link to={`${url}/${movie.id}`}>
        //       <img
        //         src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        //         alt={movie.name}
        //       />
        //     </Link>
        //   </li>
        // ))
      }
    </>
  );
}
