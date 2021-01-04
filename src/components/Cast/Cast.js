import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../services/movies-api';
import styles from './Cast.module.scss';
import photo from '../../images/no-photography.jpg';
import Spinner from '../Spinner';

export default function Cast() {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    API.getMoviesByCast(movieId).then(data => {
      setCast(data);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      {cast && (
        <ul className={styles.castList}>
          {cast.map(actor => (
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
      )}
    </>
  );
}
