import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../services/movies-api';
import styles from './Cast.module.scss';
import photo from '../../images/no-photography.jpg';

export default function Cast() {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    API.getMoviesByCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {cast &&
        cast.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            <div className={styles.imgWrap}>
              <img
                className={styles.castImg}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : photo
                }
                alt={actor.name}
              />
            </div>
            <p className={styles.castName}>{actor.name}</p>
          </li>
        ))}
    </ul>
  );
}
