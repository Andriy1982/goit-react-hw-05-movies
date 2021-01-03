import { Link } from 'react-router-dom';

import styles from './MovieList.module.scss';
import photo from '../../images/unnamed.png';

export default function ListMovie({ movies }) {
  return (
    <ul className={styles.movieList}>
      {movies.map(movie => (
        <li className={styles.movieListItem} key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <img
              className={styles.movieListImg}
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                  : photo
              }
              alt={movie.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
