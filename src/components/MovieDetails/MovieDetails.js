import React from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import styles from './MovieDetails.module.scss';
import Cast from '../Cast';
import Reviews from '../Reviews';
import Photo from '../../images/unnamed.png';

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
      <Route path={`${path}/cast`}>
        <Cast />
      </Route>
      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route>
    </>
  );
}
