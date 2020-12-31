import { Link, useRouteMatch } from 'react-router-dom';

import styles from './ListMovie.module.scss';

export default function ListMovie({ movies }) {
  const { url } = useRouteMatch();
  console.log(useRouteMatch());

  return (
    <ul className={styles.movieList}>
      {movies.map(movie => (
        <li className={styles.movieListItem} key={movie.id}>
          {/* <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.name}
            /> */}
          <Link to={`${url}/${movie.id}`}>
            <img
              className={styles.movieListImg}
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
