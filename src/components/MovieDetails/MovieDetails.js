import { React, lazy, Suspense } from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import styles from './MovieDetails.module.scss';
import Spinner from '../Spinner';
import Photo from '../../images/unnamed.png';

const MovieCastPage = lazy(() =>
  import(
    '../../pages/MovieCastPage.js' /* webpackChunkName: "MovieCastPage" */
  ),
);
const MoviesReviewsPage = lazy(() =>
  import(
    '../../pages/MovieReviewsPage.js' /* webpackChunkName: "MovieReviewsPage" */
  ),
);

export default function MovieDetails({ movie }) {
  const { url, path } = useRouteMatch();

  return (
    <>
      <img
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            : Photo
        }
        alt={movie.name}
        className={styles.movieDetailsImg}
      />
      <h2 className={styles.movieDetailsName}> {movie.original_title}</h2>
      <p className={styles.movieDetailsDescription}>{movie.overview}</p>
      <ul className={styles.list}>
        <li className={styles.navigationItem}>
          <NavLink
            to={`${url}/cast`}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/reviews`}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Spinner />}>
        <Route path={`${path}/cast`}>
          <MovieCastPage />
        </Route>
        <Route path={`${path}/reviews`}>
          <MoviesReviewsPage />
        </Route>
      </Suspense>
    </>
  );
}
